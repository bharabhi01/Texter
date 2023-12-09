package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

func messageReader(conn *websocket.Conn) {
	for {
		// Read Message
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		// Print Message
		fmt.Println(string(message))

		if err := conn.WriteMessage(messageType, message); err != nil {
			log.Println(err)
			return
		}
	}
}

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple Server")
	})

	http.HandleFunc("/ws", endpoint)
}

func main() {
	fmt.Println("Texter v.0")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
