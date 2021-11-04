/*
    Assignment 5
    {Arsh Luthra 0777039}
*/

$(document).ready(function(){
  class ContentCard {
    card_id;
    card_title;
    card_description;
    card_category;

    constructor(card_id, card_title, card_description, card_category) {
      this.card_id = card_id;
      this.card_title = card_title;
      this.card_description = card_description;
      this.card_category = card_category;
    }

    updateContent(card_title, card_description, card_category) {
      if (card_title) {
        this.card_title = card_title;
      }
      if (card_description) {
        this.card_description = card_description;
      }
      if (card_category) {
        this.card_category = card_category;
      }
    }

    toString() {
      return `
        <div id="content-${this.card_id}" style="border: 1px solid gray; margin:4px 0; padding:5px; ">
            <h4>${this.card_title}</h4>
            <p>${this.card_description}</p>
            <div>${this.card_category}</div>
        </div>
    `;
    }
  }

  const card_items = [
    new ContentCard(
      1,
      "Harry Potter",
      "Harry is a student at Hogwarts School of Witchcraft and Wizardy",
      "Harry The Wizard"
    ),
    new ContentCard(
      2,
      "Hannah Abbott",
      " Hufflepuff student in Harry Potter's year. Prefect and member of Dumbledore's Army. Married to Neville Longbottom.",
      "Harry's friend"
    ),
    new ContentCard(
      3,
      "Ludo Bagman",
      "Head of the Department of Magical Games and Sports within the Ministry of Magic.",
      "A Bad Wizard"
    ),
    new ContentCard(
      4,
      "Bathilda Bagshot",
      "Author of A History of Magic, and the great aunt of Gellert Grindelwald.",
      "A Historian Author"
    ),
    new ContentCard(
      5,
      "Katie Bell",
      "Gryffindor Quidditch Chaser one year above Harry Potter. Member of Dumbledore's Army.",
      "Evan's Wife"
    ),
  ];

   for(let i=0; i<card_items.length;i++){
    const c_Html = card_items[i].toString();
    $("div#content-list").append(c_Html);
   }
  
});

// cards[1].updateContent(null, null, "fire");
