import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QHBoxLayout, QLabel, QLineEdit

class Example(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        hbox = QHBoxLayout()

        # Prima colonna con le prime sei coppie di etichetta e campo di testo
        vbox1 = QVBoxLayout()
        label1 = QLabel("Giocato Calcio Prematch")
        line_edit1 = QLineEdit()
        vbox1.addWidget(label1)
        vbox1.addWidget(line_edit1)

        label2 = QLabel("Calcio Live")
        line_edit2 = QLineEdit()
        vbox1.addWidget(label2)
        vbox1.addWidget(line_edit2)

        label3 = QLabel("Virtuale Calcio")
        line_edit3 = QLineEdit()
        vbox1.addWidget(label3)
        vbox1.addWidget(line_edit3)

        label4 = QLabel("Virtuale Cani/Cavalli")
        line_edit4 = QLineEdit()
        vbox1.addWidget(label4)
        vbox1.addWidget(line_edit4)

        label5 = QLabel("Altri Virtual")
        line_edit5 = QLineEdit()
        vbox1.addWidget(label5)
        vbox1.addWidget(line_edit5)

        label6 = QLabel("Totale")
        line_edit6 = QLineEdit()
        vbox1.addWidget(label6)
        vbox1.addWidget(line_edit6)

        hbox.addLayout(vbox1)

        # Seconda colonna con le restanti sette coppie di etichetta e campo di testo
        vbox2 = QVBoxLayout()
        label7 = QLabel("Banconote")
        line_edit7 = QLineEdit()
        vbox2.addWidget(label7)
        vbox2.addWidget(line_edit7)

        label8 = QLabel("Monete")
        line_edit8 = QLineEdit()
        vbox2.addWidget(label8)
        vbox2.addWidget(line_edit8)

        label9 = QLabel("Totale Cassa")
        line_edit9 = QLineEdit()
        vbox2.addWidget(label9)
        vbox2.addWidget(line_edit9)

        label10 = QLabel("Fondo Cassa")
        line_edit10 = QLineEdit()
        vbox2.addWidget(label10)
        vbox2.addWidget(line_edit10)

        label11 = QLabel("Debiti")
        line_edit11 = QLineEdit()
        vbox2.addWidget(label11)
        vbox2.addWidget(line_edit11)

        label12 = QLabel("Totale")
        line_edit12 = QLineEdit()
        vbox2.addWidget(label12)
        vbox2.addWidget(line_edit12)

        hbox.addLayout(vbox2)
        hbox2 = QHBoxLayout()
        label13 = QLabel("Differenza Valori")
        line_edit13 = QLineEdit()
        vbox2.addWidget(label13)
        vbox2.addWidget(line_edit13)
        
        self.setLayout(hbox)
        self.setGeometry(100, 100, 500, 300)
        self.setWindowTitle('Six and Seven Text Fields Example')
        self.show()

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())
