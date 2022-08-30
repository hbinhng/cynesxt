export function createApiUri(absoluteUri: string): string {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);

  return `${process.env.NEXT_PUBLIC_API_BASE_URL}${absoluteUri.replace(
    /^\//,
    '',
  )}`;
}
