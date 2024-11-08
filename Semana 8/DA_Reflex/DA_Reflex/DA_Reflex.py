import reflex as rx

"""class State(rx.State):
    count: int = 0

    def incrementar(self):
        self.count += 1

    def disminuir(self):
        self.count -= 1
        
def index():
    return rx.hstack(
        rx.button(
            "Disminuir",
            color_scheme="ruby",
            on_click=State.disminuir,
        ),
        rx.heading(State.count, font_size="2em"),
        rx.button(
            "Incrementar",
            color_scheme="grass",
            on_click=State.incrementar,
        ),
        spacing="4",
    )
app = rx.App()
app.add_page(index)"""

class EstadoTareas(rx.State):
    tareas: list[str] = []
    
    def agregar_tarea(self, tarea:str):
        if tarea:
            self.tareas.append(tarea)
    
def agregar_tarea():
    nueva_tarea = rx.input(placeholder="Agregar tarea...", id="input_tarea")

    return rx.hstack(
        nueva_tarea,
        rx.button(
            "Agregar",
            on_click=lambda: EstadoTareas.agregar_tarea(nueva_tarea.value),    
        ),
        spacing="2",
    )

def lista_tareas():
    return rx.vstack(
        *[rx.text(tarea, font_size="1.2em") for tarea in EstadoTareas.tareas],
        spacing="2",
    )

def index():
    return rx.vstack(
        rx.heading("Lista de Tareas", font_size="2em"),
        lista_tareas(),
        agregar_tarea(),
        spacing="4",
    )

app = rx.App()
app.add_page(index)