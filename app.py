from flask import Flask, redirect, url_for, request, render_template, send_from_directory

app = Flask(__name__)

@app.route('/image')
def root():
	print("pinged!!")
	print(request.headers)
	# return "opened"
	return (send_from_directory(directory="file", filename="images.png", as_attachment=False),200,{'Access-Control-Allow-Origin': '*'})
	


if __name__ == "__main__":
	# port = int(os.environ.get("PORT", 3433))
	app.run(host='localhost', port=3433,debug=True)

