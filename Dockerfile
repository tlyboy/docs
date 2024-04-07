FROM node:20-alpine as build-stage

RUN apk add --no-cache git

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM caddy as production-stage

COPY --from=build-stage /app/docs/.vitepress/dist /app
COPY Caddyfile /etc/caddy/Caddyfile
