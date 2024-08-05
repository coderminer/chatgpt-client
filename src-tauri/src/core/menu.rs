use tauri::{ SystemTray, SystemTrayEvent, SystemTrayMenu, CustomMenuItem, Manager };

pub fn get_system_tray() -> SystemTray {
  let hide_app = CustomMenuItem::new("hide_app".to_string(), "Hide");
  let show_app = CustomMenuItem::new("show_app".to_string(), "Show");
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let tray_menu = SystemTrayMenu::new()
      .add_item(show_app)
      .add_item(hide_app)
      .add_item(quit);
  SystemTray::new().with_menu(tray_menu)
}

pub fn system_tray_handle(app: &tauri::AppHandle, event: SystemTrayEvent) {
  if let SystemTrayEvent::MenuItemClick { tray_id: _, id, .. } = event {
      match id.as_str() {
          "hide_app" => {
              app.get_window("main").unwrap().hide().unwrap();
          }
          "show_app" => {
              app.get_window("main").unwrap().show().unwrap();
          }
          "quit" => {
              std::process::exit(0);
          }
          _ => {}
      }
  }
}