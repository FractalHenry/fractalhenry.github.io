class News{
    constructor(id,name,descr,text,date,img){
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.text = text;
        this.date = date;
        this.img = img;
    }
}

let news = [
    new News(0,
       "Пицца теперь больше!",
       "В нашей сети появился новый размер пицц!",
       "0Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, molestias.",
       "19.09.23",
       "images/mobilepizza.jpg"),
    new News(1,
       "Роллы теперь вкуснее!",
       "Ингридиенты для роллов только от лучших поставщиков!",
       "1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, molestias.",
       "10.08.23",
       "images/mobilerolls.jpg"),
    new News(2,
       "Вок сочнее!",
       "Соус по новой рецептуре добавит новых красок",
       "2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, molestias.",
       "10.08.23",
       "images/mobilewok.jpg"),
    new News(3,
       "Всех с новым годом!",
       "От лица нашей компанни хотим поздравить Вас!",
       "3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, molestias.",
       "01.01.23",
       "images/mobilewok.jpg"),
    new News(4,
       "Мы открылись!",
       "И это не первоапрельская шутка!",
       "4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, molestias.",
       "15.12.23",
       "images/mobilerolls.jpg")
   ];


   class Product{
    constructor(id,name,description,price,category,image){
        this.id =id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
      }
}
let products = [
 new Product(0,"Пепперони ЧИЗ",
    "Пикантная пепперони, сливки и сырный соус",
    619,"Pizza","images/пепперони чиз.jpg"),
 new Product(1,"С беконом и вешенками",
    "Для нежностей: курочка, вешенки и соус чеддер",
    600,"Pizza","images/с беконом и вешенками.jpg"),
 new Product(2,"Все и сразу",
    "Визитная карточка! Мясо, овощи, грибы",
    359,"Pizza","images/все и сразу.jpg"),
 new Product(3,"Мясное плато",
    "Мясной бум с сыром и томатным соусом",
    690,"Pizza","images/мясное плато.jpg"),
 new Product(4,"По-домашнему",
    "Самая уютная пицца: колбаса, огурчики и сыр",
    339,"Pizza","images/по-домашнему.jpg"),
 new Product(5,"4 сыра",
    "Фантастическая сырная четверка на томатном соусе",
    319,"Pizza","images/4 сыра.jpg"),
 new Product(6,"Жюльен",
    "Сливочно-грибной вкус, курочка и салат",
    720,"Pizza","images/жюльен.jpg"),
 new Product(7,"Пиццабургер",
    "Мясное ассорти и овощи под соусом чили",
    690,"Pizza","images/пиццабургер.jpg"),
 new Product(8,"Филадельфия лайт",
    "Любимая классика в новом исполнении",
    369,"Rolls","images/филадельфия лайт.jpg"),
 new Product(9,"С тунцом",
    "Вкусный минимализм: рис, тунец и соус терияки",
    299,"Rolls","images/с тунцом.jpg"),
 new Product(10,"Император",
    "Индейка, угорь с сырной шапочкой и соусом чили",
    349,"Rolls","images/император.jpg"),
 new Product(11,"Филадельфия",
    "Та самая легенда!",
    499,"Rolls","images/филадельфия.jpg"),
 new Product(12,"Калифорния",
    "Классика со снежным крабом",
    339,"Rolls","images/калифорния.jpg"),
 new Product(13,"Бонито",
    "Копченый лосось, творожный сыр и стружка тунца",
    339,"Rolls","images/бонито.jpg"),
 new Product(14,"С огурцом",
    "Минимализм: рис, нори и огурец",
    219,"Rolls","images/с огурцом.jpg"),
 new Product(15,"С угрем",
    "Просто, вкусно и сытно! Рис, нори и угорь",
    299,"Rolls","images/с угрем.jpg"),
 new Product(16,"Удон с курицей в соусе терияки",
    "Лапша с курицей и овощами в соусе терияки",
    360,"Wok","images/удон с курицей.jpg"),
 new Product(17,"Харусаме со свининой в соусе терияки",
    "Лапша со свининой в соусе терияки",
    370,"Wok","images/харусаме.jpg"),
 new Product(18,"Фрунчоза с курицей в сливочном соусе",
    "Лапша с курицей и грибами с сливочном соусе",
    360,"Wok","images/фунчоза.jpg"),
 new Product(19,"Лапша с креветками и соусом сладкий чили",
    "Лапша с креветками и овощами в соусе сладкий чили",
    419,"Wok","images/удон с креветками.jpg"),
 new Product(20,"Чай с лимоном", "Самый вкусный чай!",100,"Tea","images/fillerimg.jpeg")
];

this.exports = {news,products};

