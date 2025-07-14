FROM node:18-alpine

WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


# Copy source code
COPY . .

# Build the site
RUN pnpm run build

# Expose port
EXPOSE 4321

# Start the preview server
CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--port", "4321"]
