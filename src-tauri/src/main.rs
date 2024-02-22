#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::{thread, time::Duration};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

/// `npm run tauri dev` to start the server


#[tokio::main]
async fn main() {
    tokio::task::spawn(async move {
        loop {
            println!("Baum");
            thread::sleep(Duration::from_secs(1));
        }
    });

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");




}
