export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context as unknown as { request: Request; next: () => Promise<Response> };
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/+/, '');
  const segments = path.split('/');

  const year = Number(segments[0]);
  const month = Number(segments[1]);
  const day = Number(segments[2]);

  const isDatePath = Number.isInteger(year) && year > 2000 && year < 2100 &&
    Number.isInteger(month) && month >= 1 && month <= 12 &&
    Number.isInteger(day) && day >= 1 && day <= 31;

  if (isDatePath) {
    const target = new URL(url.pathname + url.search, 'https://j4ck.micro.blog');
    return Response.redirect(target.toString(), 301);
  }

  return next();
};


