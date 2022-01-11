FROM node:lts-alpine
# Env
ENV APP_ROOT=/usr/src/app/
ENV PATH=/usr/src/app/node_modules/.bin:$PATH
ENV PORT=${PORT}

# Deps
RUN npm install -g npm@8.3.0
RUN npm install -g serve
RUN apk add --no-cache curl \
  && curl -fsSL 'https://github.com/pnpm/pnpm/releases/download/v6.25.1/pnpm-linuxstatic-x64' -o /bin/pnpm \
  && chmod +x /bin/pnpm

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}
# Instalation des dépendences
## ajout de package.json yarn.lock
COPY package.json pnpm-lock.yaml ${APP_ROOT}
## ajout .git pour husky install git hooks
ADD .git/ ${APP_ROOT}/.git/
RUN ls -a
RUN pnpm i
ADD . ${APP_ROOT}
VOLUME ${APP_ROOT}
EXPOSE ${PORT}
# Build
CMD pnpm build && pnpm start:prod
