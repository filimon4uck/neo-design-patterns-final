/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel["header"]) {}

  /**
   * Рендеринг блоку заголовка
   *
   */
  render(): HTMLElement {
    // Створюємо контейнер для заголовка
    const header = document.createElement("header");
  header.className = "section header";

  const nameEl = document.createElement("h1");
  nameEl.textContent = this.d.fullName;

  const titleEl = document.createElement("H4");
  titleEl.textContent = this.d.title;
  titleEl.className = "header_position"; 

  const contactsEl = document.createElement("p");
  contactsEl.textContent = `${this.d.contacts.email}, ${this.d.contacts.phone}, ${this.d.contacts.location}`;

  header.appendChild(nameEl);
  header.appendChild(titleEl);
  header.appendChild(contactsEl);

  return header;
  }
}
