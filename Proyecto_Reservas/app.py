from flask import Flask, render_template

app = Flask(__name__)

# Ruta principal – ahora renderiza index.html
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

# Rutas extra de tu proyecto
@app.route("/productos")
def productos():
    return render_template("productos.html")

@app.route("/clientes")
def clientes():
    return render_template("clientes.html")

@app.route("/reservas")
def reservas():
    return render_template("reservas.html")

if __name__ == "__main__":
    app.run(debug=True)
