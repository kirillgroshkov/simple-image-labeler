export function page(imagesRemaining: number, imageUrl: string, labels: string[]): string {
  return `
  <html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/modern-normalize@1.1.0/modern-normalize.css">
  </head>
<body>
<div style="max-width: 500px; text-align: center; margin: 0 auto; border: 0px solid red;">
<form method="post" action="/post" style="display: flex; font-size: 20px; gap: 10px; margin: 10px 0;">
    <input type="hidden" name="imageUrl" value="${imageUrl}"/>
   ${labels
     .map(
       label =>
         `<input type="submit" name="label" value="${label}" style="font-size: 28px; padding: 8px 40px; cursor: pointer;">`,
     )
     .join('')}
</form>

<img src="/unlabeled/${imageUrl}" style="max-width: 100%;">

<pre>${imageUrl}</pre>
<pre>${imagesRemaining} images remaining</pre>
</div>

</body>
  </html>`
}
