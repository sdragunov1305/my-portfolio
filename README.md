# Portfolio site (Next.js)

Статический и серверный рендер одностраничного портфолио. Чтобы **открыть сайт для всех в интернете**, опубликуйте проект на хостинге (ниже — Vercel).

## Домен продакшена: fat-snail.com

Основной сайт: **[https://fat-snail.com](https://fat-snail.com)** (регистр в URL не важен).

После деплоя на **Vercel**:

1. Проект → **Settings → Domains** → **Add** → введите `fat-snail.com` (при необходимости и `www.fat-snail.com`).
2. В панели регистратора домена выставьте **DNS** так, как покажет Vercel (обычно **A** на `76.76.21.21` или **CNAME** на `cname.vercel-dns.com` для поддомена).
3. **Settings → Environment Variables** → для среды **Production** добавьте  
   `NEXT_PUBLIC_SITE_URL` = `https://fat-snail.com`  
   затем **Deployments → … → Redeploy** последнего продакшен-деплоя — чтобы в метаданных, Open Graph и `sitemap.xml` везде был правильный адрес.

Пока домен не привязан к Vercel, сайт по-прежнему открывается по адресу вида `https://cursor-site-nine.vercel.app`.

## Передача проекта человеку, у которого уже есть домен

**Что отправить ему**

- Весь каталог этого проекта (**папка `cursor-site` целиком**), **без** тяжёлых папок (их можно не класть в архив — получатель сам поставит зависимости):
  - не включать: `node_modules`, `.next`, `.vercel`;
  - включить: `src`, `public`, `package.json`, `package-lock.json` или `pnpm-lock.yaml`, `next.config.ts`, `vercel.json`, `.env.example`, остальные файлы конфигурации.
- Удобнее всего: **ссылка на Git-репозиторий** (GitHub и т.д.) — тогда архив не нужен.

**Что сделает получатель с доменом**

1. Установит [Node.js 20+](https://nodejs.org/) и выполнит в папке проекта: `npm install` → `npm run build` → `npm run start` (проверка у себя на компьютере).
2. Выложит сайт в продакшен. Проще всего — **Vercel** (бесплатный HTTPS): подключить репозиторий или загрузить проект, в **Settings → Domains** добавить **его** домен и выставить DNS у регистратора так, как покажет Vercel.
3. В **Environment Variables** (Vercel или другой хостинг) задать **`NEXT_PUBLIC_SITE_URL`** = полный адрес сайта с доменом, например `https://example.com` (без слэша в конце). Так совпадут превью в соцсетях и `sitemap.xml`.

Итог: ты передаёшь **код**; он **деплоит** и **привязывает DNS** своего домена к хостингу. Доступ к твоему регистратору доменов ему не обязателен, если домен его.

## Локально

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Публикация на Vercel (бесплатный HTTPS)

1. Залейте папку `cursor-site` в репозиторий на GitHub (или GitLab / Bitbucket).
2. Зайдите на [vercel.com](https://vercel.com), войдите через GitHub.
3. **Add New Project** → выберите репозиторий → **Root Directory** укажите `cursor-site`, если репозиторий — монорепо с корнем выше.
4. Нажмите **Deploy**. Через минуту появится адрес вида `https://<имя>.vercel.app`.

### Свой домен

В проекте Vercel: **Settings → Domains** — добавьте домен и DNS по подсказкам Vercel.

### Переменная окружения (рекомендуется)

В **Settings → Environment Variables** добавьте для **Production** (и при необходимости Preview):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://fat-snail.com` (продакшен) или временно `https://<проект>.vercel.app` |

Так корректно соберутся канонический URL, Open Graph и `sitemap.xml`.

Скопируйте пример из `.env.example`.

## Сборка вручную

```bash
npm run build
npm run start
```

Нужен Node.js **20.9+** (см. `engines` в `package.json`).
