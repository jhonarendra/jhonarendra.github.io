Sebelumnya, blog post saya buat pada data json seperti ini
```
[
	{
		"id": 1,
		"title": "Hello World",
		"datetime" : "October 28, 2020 01:07:01",
		"thumb": "",
		"slug": "hello-world",
		"content": "Hello world"
	}
]
```
Kelebihan pakai json yang diletakkan pada folder `/src` project, json tsb akan tercompile jadi tidak ada file fisiknya `(post.json)` dalam direktori hasil build.

Tetapi, ada beberapa kekurangan kalau pakai metode itu:
- Sulit tambah, edit dan delete post. Karena harus membuka project, edit file `post.json`, lalu di build ulang, setelah itu diletakkan di repository page.
- Sulit jika ingin menambah html tag seperti **bold**, *italic*, tabel, code, gambar dll.

Maka dari itu, seperti kebanyakan blog github page, saya menggunakan markdown file `.md` untuk konten post.
