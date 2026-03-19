# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Production stage
FROM caddy:2-alpine
COPY --from=builder /app/dist /srv
EXPOSE 80
EXPOSE 443
CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":80"]
