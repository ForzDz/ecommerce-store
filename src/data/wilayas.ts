export interface Wilaya {
  code: string;
  name: string;
  communes: string[];
  domicile: number | null;
  bureau: number | null;
}

export const wilayas: Wilaya[] = [
  {
    code: "01",
    name: "Adrar",
    domicile: 1400,
    bureau: 900,
    communes: ["Adrar", "Tamest", "Reggane", "In Zghmir", "Tit", "Ksar Kaddour", "Tsabit", "Timimoun", "Ouled Aïssa", "Bouda", "Aoulef", "Timiaouine", "Tamentit", "Fenoughil", "Tinerkouk", "Deldoul", "Charouine", "Sbaa", "Ouled Ahmed Timmi", "Talmine", "Bordj Badji Mokhtar", "Zaouiet Kounta", "Aougrout", "In Ghar", "Metarfa", "Foum El Kheneg", "Akabli", "Ouled Saïd"]
  },
  {
    code: "02",
    name: "Chlef",
    domicile: 750,
    bureau: 450,
    communes: ["Chlef", "Ténès", "Benairia", "El Karimia", "Tadjena", "Taougrite", "Beni Haoua", "Sobha", "Harchoun", "Ouled Fares", "Sidi Akkacha", "Boukadir", "Beni Rached", "Talassa", "Herenfa", "Oued Goussine", "Dahra", "Ouled Abbès", "Sendjas", "Zeboudja", "Oued Sly", "Abou El Hassan", "El Marsa", "Chettia", "Sidi Abderrahmane", "Moussadek", "El Hadjadj", "Labiod Medjadja", "Oued Fodda", "Ouled Ben Abdelkader", "Bouzghaia", "Aïn Merane", "Oum Drou", "Breira", "Beni Bouateb"]
  },
  {
    code: "03",
    name: "Laghouat",
    domicile: 950,
    bureau: 600,
    communes: ["Laghouat", "Ksar El Hirane", "Bennasser Benchohra", "Sidi Makhlouf", "Hassi Delaa", "Hassi R'Mel", "Aïn Madhi", "Tadjemout", "Kheneg", "Gueltet Sidi Saâd", "Aïn Kahla", "Oued Morra", "Oued M'Zi", "El Assafia", "Beidha", "Brida", "El Ghicha", "Hadj Mechri", "Sebgag", "Taouila", "Tadjrouna", "Aflou", "El Houaita", "Sidi Bouzid"]
  },
  {
    code: "04",
    name: "Oum El Bouaghi",
    domicile: 800,
    bureau: 450,
    communes: ["Oum El Bouaghi", "Aïn Beïda", "Aïn M'Lila", "Behir Chergui", "El Amiria", "Sigus", "El Belala", "Aïn Babouche", "Berriche", "Ouled Hamla", "Dhalaa", "Aïn Kercha", "Hanchir Toumghani", "El Djazia", "Aïn Diss", "Fkirina", "Souk Naamane", "Zorg", "El Fedjoudj Boughrara Saoudi", "Ouled Zouaï", "Bir Chouhada", "Ksar Sbahi", "Oued Nini", "Meskiana", "Aïn Fekroun", "Rahia", "Aïn Zitoun", "Ouled Gacem", "El Harmilia"]
  },
  {
    code: "05",
    name: "Batna",
    domicile: 800,
    bureau: 450,
    communes: ["Batna", "Ghassira", "Maafa", "Merouana", "Seriana", "Menaa", "El Madher", "Tazoult", "N'Gaous", "Guigba", "Inoughissen", "Ouyoun El Assafir", "Djerma", "Bitam", "Abdelkader Azil", "Arris", "Kimmel", "Tilatou", "Aïn Djasser", "Ouled Aouf", "Boulhilat", "Aïn Touta", "Hidoussa", "Teniet El Abed", "Oued El Ma", "Talkhamt", "Bouzina", "Chemora", "Oued Chaaba", "Taxlent", "Gosbat", "Ouled Si Slimane", "Zanat El Beida", "Arbaoun", "Djezar", "T'Kout", "Aïn Yagout", "Fesdis", "Sefiane", "Rahbat", "Tigherghar", "Aïn Laloui", "Lazrou", "Boumagueur", "Barika", "Djezzar", "M'doukal", "Ouled Fadel", "Timgad", "Ras El Aïoun", "Chir", "Ouled Selam", "Foum Toub", "Beni Foudhala El Hakania", "Oued Taga", "Aïn Zana", "Sidi Okba", "Menaâ", "El Hassi"]
  },
  {
    code: "06",
    name: "Béjaïa",
    domicile: 800,
    bureau: 450,
    communes: ["Béjaïa", "Amizour", "Ferraoun", "Taourirt Ighil", "Chellata", "Tamokra", "Timezrit", "Souk El Ténine", "M'Cisna", "Tinebdar", "Tichy", "Semaoun", "Kendira", "Tifra", "Ighram", "Amalou", "Ighil Ali", "Fénaïa Ilmaten", "Toudja", "Darguina", "Sidi Ayad", "Aokas", "Beni Djellil", "Adekar", "Akbou", "Seddouk", "Tazmalt", "Aït Rizine", "Chemini", "Souk Oufella", "Taskriout", "Tibane", "Tala Hamza", "Barbacha", "Beni Ksila", "Ouzellaguen", "Bouhamza", "Aït Smail", "Boukhelifa", "Tizi N'Berber", "Beni Melikeche", "Sidi Aïch", "El Kseur", "Melbou", "Akfadou", "Leflaye", "Kherrata", "Draâ El Kaïd", "Tamridjet", "Aït Ouelhad", "Ighil Nacer", "Boudjellil"]
  },
  {
    code: "07",
    name: "Biskra",
    domicile: 950,
    bureau: 600,
    communes: ["Biskra", "Oumache", "Branis", "Chetma", "Ouled Djellal", "Ras El Miaad", "Besbes", "Aïn Naga", "Zeribet El Oued", "El Feidh", "El Kantara", "Aïn Zaatout", "El Outaya", "Djemorah", "Tolga", "Lioua", "Lichana", "Ourlal", "M'Lili", "Foughala", "Bordj Ben Azzouz", "Bouchagroun", "Mekhadma", "El Hadjeb", "Chaïba", "Sidi Okba", "M'Ziraa", "El Ghrous", "El Haouch", "Aïn El Kerma", "Khenguet Sidi Nadji", "Sidi Khaled"]
  },
  {
    code: "08",
    name: "Béchar",
    domicile: 1100,
    bureau: 650,
    communes: ["Béchar", "Erg Ferradj", "Ouled Khoudir", "Meridja", "Timoudi", "Lahmar", "Beni Ikhlef", "Taghit", "El Ouata", "Boukais", "Mougheul", "Abadla", "Kerzaz", "Ksabi", "Tamtert", "Beni Abbès", "Igli", "Tabelbala", "Tabiea", "Béni Ounif", "Kenadsa"]
  },
  {
    code: "09",
    name: "Blida",
    domicile: 750,
    bureau: 450,
    communes: ["Blida", "Chréa", "Bouinan", "Oued El Alleug", "Ouled Yaïch", "Chebli", "Boufarik", "Soumâa", "Mouzaïa", "El Affroun", "Chiffa", "Hammam Melouane", "Ben Khellil", "Souhane", "Meftah", "Ouled Slama", "Bougara", "Guerrouaou", "Aïn Romana", "Djebabra", "Beni Tamou", "Bouarfa", "Beni Mered", "Benkhelil", "Oued Djer", "Aïn Mellouk"]
  },
  {
    code: "10",
    name: "Bouira",
    domicile: 800,
    bureau: 450,
    communes: ["Bouira", "El Asnam", "Guerrouma", "Souk El Khemis", "Kadiria", "Hanif", "Dirah", "Aïn Bessem", "Bir Ghbalou", "Khabouzia", "Ahl El Ksar", "Bouderbala", "Zbarbar", "Aïn El Hadjar", "Djebahia", "Aghbalou", "Taguedit", "Raouraoua", "M'Chedallah", "Sour El Ghozlane", "Mezdour", "Haizer", "Lakhdaria", "Maala", "El Hachimia", "Aomar", "Chorfa", "Bechloul", "Boukram", "Aïn Laloui", "Aïn Turk", "Saharidj", "Dechmia", "Ridane", "Taourga", "Hadjera Zerga", "El Adjiba", "Bordj Okhriss", "El Khebouzia", "Ath Mansour", "El Mokrani", "Ouled Rached", "Aïn Bessem", "Oued El Berdi"]
  },
  {
    code: "11",
    name: "Tamanrasset",
    domicile: 1600,
    bureau: 1000,
    communes: ["Tamanrasset", "Abalessa", "In Ghar", "In Guezzam", "In Salah", "Tazrouk", "Tin Zaouatine", "Idles", "Timimoun", "In Amguel"]
  },
  {
    code: "12",
    name: "Tébessa",
    domicile: 850,
    bureau: 450,
    communes: ["Tébessa", "Bir El Ater", "Cheria", "Stah Guentis", "El Aouinet", "Lahouidjbet", "Safsaf El Ouesra", "Hammamet", "Negrine", "Bir Mokadem", "El Kouif", "Morsott", "El Ogla", "Bir Dheheb", "El Ogla El Malha", "Gorriguer", "Bekkaria", "Boukhadra", "Ouenza", "El Ma Labiod", "Tlidjene", "Aïn Zerga", "El Meridj", "Boulhaf Dyr", "Bedjene", "El Malabiod", "Ferkane", "Oum Ali"]
  },
  {
    code: "13",
    name: "Tlemcen",
    domicile: 700,
    bureau: 450,
    communes: ["Tlemcen", "Beni Mester", "Aïn Tallout", "Remchi", "El Fehoul", "Sabra", "Ghazaouet", "Souani", "Djebala", "El Gor", "Oued Lakhdar", "Aïn Fezza", "Ouled Mimoun", "Amieur", "Aïn Youcef", "Zenata", "Beni Snous", "Bab El Assa", "Dar Yaghmouracene", "Fellaoucene", "Azails", "Sebbaa Chioukh", "Terni Beni Hdiel", "Bensekrane", "Aïn Nehala", "Hennaya", "Maghnia", "Hammam Boughrara", "Souahlia", "Msirda Fouaga", "Aïn Fetah", "El Aricha", "Souk Tléta", "Sidi Abdelli", "Sebdou", "Beni Ouarsous", "Sidi Medjahed", "Beni Boussaid", "Marsa Ben M'Hidi", "Nedroma", "Sidi Djillali", "Beni Bahdel", "El Bouihi", "Honaine", "Tianet", "Ouled Riyah", "Bouhlou", "Souk El Khemis", "Aïn Ghoraba", "Chetouane", "Mansourah", "Beni Smiel", "Ain Kebira"]
  },
  {
    code: "14",
    name: "Tiaret",
    domicile: 750,
    bureau: 450,
    communes: ["Tiaret", "Medroussa", "Aïn Bouchekif", "Sidi Ali Mellal", "Aïn Zarit", "Aïn Deheb", "Sidi Bakhti", "Medrissa", "Zmalet El Emir Abdelkader", "Madna", "Sebt", "Mellakou", "Dahmouni", "Rahouia", "Mahdia", "Sougueur", "Sidi Abdelghani", "Aïn El Hadid", "Ouled Djerad", "Naïma", "Meghila", "Guertoufa", "Sidi Hosni", "Djillali Ben Amar", "Sebaine", "Tousnina", "Frenda", "Aïn Kermes", "Ksar Chellala", "Rechaïga", "Nadorah", "Tagdemt", "Oued Lilli", "Mechraa Safa", "Hamadia", "Chehaima", "Takhemaret", "Sidi Abderrahmane", "Serghine", "Bougara", "Faidja", "Tidda"]
  },
  {
    code: "15",
    name: "Tizi Ouzou",
    domicile: 800,
    bureau: 450,
    communes: ["Tizi Ouzou", "Aïn El Hammam", "Akbil", "Freha", "Souamaâ", "Mechtras", "Irdjen", "Timizart", "Makouda", "Draâ El Mizan", "Tizi Gheniff", "Bounouh", "Aït Chafaâ", "Frikat", "Beni Aïssi", "Beni Zmenzer", "Iferhounene", "Azazga", "Illoula Oumalou", "Yakouren", "Larbaâ Nath Irathen", "Tizi Rached", "Zekri", "Ouaguenoun", "Aïn Zaouia", "M'Kira", "Aït Yahia", "Aït Mahmoud", "Maatkas", "Aït Boumahdi", "Abi Youcef", "Beni Douala", "Illilten", "Bouzeguène", "Aït Aggouacha", "Ouadhia", "Azeffoun", "Tigzirt", "Djebel Aïssa Mimoun", "Boghni", "Ifigha", "Aït Oumalou", "Tirmitine", "Akerrou", "Yatafen", "Beni Ziki", "Draâ Ben Khedda", "Ouacif", "Idjeur", "Mekla", "Tizi N'Tleta", "Beni Yenni", "Aghribs", "Iflissen", "Boudjima", "Aït Yahia Moussa", "Souk El Thenine", "Aït Khellili", "Sidi Naamane", "Imsouhal", "Tadmaït", "Aït Bouaddou", "Assi Youcef", "Aït Toudert"]
  },
  {
    code: "16",
    name: "Alger",
    domicile: 650,
    bureau: 400,
    communes: ["Sidi M'Hamed", "El Madania", "Belouizdad", "Bab El Oued", "Bologhine", "Casbah", "Oued Koriche", "Bir Mourad Raïs", "El Biar", "Bouzareah", "Birkhadem", "El Harrach", "Baraki", "Oued Smar", "Bourouba", "Hussein Dey", "Kouba", "Bachdjerrah", "Dar El Beïda", "Bab Ezzouar", "Ben Aknoun", "Dely Ibrahim", "El Hammamet", "Raïs Hamidou", "Djasr Kasentina", "El Mouradia", "Hydra", "Mohammadia", "Bordj El Kiffan", "El Magharia", "Beni Messous", "Les Eucalyptus", "Birtouta", "Tessala El Merdja", "Ouled Chebel", "Sidi Moussa", "Aïn Taya", "Bordj El Bahri", "El Marsa", "H'Raoua", "Rouiba", "Reghaïa", "Aïn Benian", "Staoueli", "Zeralda", "Mahelma", "Rahmania", "Souidania", "Cheraga", "Ouled Fayet", "El Achour", "Draria", "Douera", "Baba Hassen", "Khraicia", "Saoula"]
  },
  {
    code: "17",
    name: "Djelfa",
    domicile: 950,
    bureau: 600,
    communes: ["Djelfa", "Moudjbara", "El Guedid", "Hassi Bahbah", "Aïn El Ibel", "Dar Chioukh", "Charef", "Sidi Baizid", "M'Liliha", "El Khemis", "Sed Rahal", "Faidh El Botma", "Birine", "Bouira Lahdab", "Zaafrane", "Deldoul", "Sidi Ladjel", "Had Sahary", "Guettara", "Aïn Maabed", "Selmana", "Aïn Feka", "Tadmit", "El Idrissia", "Douis", "Hassi Fedoul", "Messaâd", "Guernini", "Sidi Aïssa", "Bouiret Lahdab", "Oum Laadham", "Dar Bousba", "Ain Chouhada", "Zaccar", "Benhar", "Hassi El Euch", "El Benoud", "Ain Oussara"]
  },
  {
    code: "18",
    name: "Jijel",
    domicile: 800,
    bureau: 450,
    communes: ["Jijel", "Eraguene", "El Aouana", "Ziama Mansouriah", "Taher", "Emir Abdelkader", "Chekfa", "Chahna", "El Milia", "Sidi Maarouf", "Settara", "El Ancer", "Ouled Yahia Khadrouche", "Bordj Tahar", "Djimla", "Selma Benziada", "Boussif Ouled Askeur", "El Kennar Nouchfi", "Ouled Rabah", "Ouadjana", "Ghebala", "Bouraoui Belhadef", "Djemaa Beni Habibi", "Boudria Beni Yadjis", "Kheïri Oued Adjoul", "Texenna", "Beni Fouda", "Sidi Abdelaziz"]
  },
  {
    code: "19",
    name: "Sétif",
    domicile: 800,
    bureau: 450,
    communes: ["Sétif", "Aïn El Kebira", "Beni Aziz", "Ouled Sidi Ahmed", "Boutaleb", "Aïn Roua", "Draa Kebila", "Bir El Arch", "Beni Chebana", "Ouled Tebben", "Hamma", "Maaouia", "Aïn Legradj", "Aïn Abessa", "Dehamcha", "Babor", "Guidjel", "Aïn Lahdjar", "Bousselam", "El Ouricia", "Tizi N'Bechar", "Salah Bey", "Aïn Azal", "Guenzet", "Talaifacene", "Beidha Bordj", "El Eulma", "Djemila", "Beni Ouartilane", "Rosfa", "Ouled Addouane", "Belaa", "Aïn Arnat", "Amoucha", "Aïn Oulmene", "Mezloug", "Bir Haddada", "Serdj El Ghoul", "Harbil", "El Ouldja", "Taya", "Bougaa", "Bordj Ghedir", "Maouaklane", "Guellal", "Aïn Sebt", "Hammam Sokhna", "Ouricia", "Tella", "Beni Mouhli", "Ouled Sabor", "Guenzet", "Bazer Sakhra", "Hammam Guergour", "Aït Naoual Mezada", "Ksar El Abtal", "Beni Fouda", "Tachouda", "Aïn Azel"]
  },
  {
    code: "20",
    name: "Saïda",
    domicile: 750,
    bureau: 500,
    communes: ["Saïda", "Doui Thabet", "Aïn El Hadjar", "Ouled Khaled", "Moulay Larbi", "Youb", "Hounet", "Sidi Amar", "Sidi Boubekeur", "El Hassasna", "Maamora", "Sidi M'Hamed Benaouda", "Aïn Sekhouna", "Ouled Brahim", "Tircine", "Aïn Soltane"]
  },
  {
    code: "21",
    name: "Skikda",
    domicile: 800,
    bureau: 450,
    communes: ["Skikda", "Aïn Zouit", "El Hadaiek", "Azzaba", "Djendel Saadi Mohamed", "Aïn Cherchar", "Bekkouche Lakhdar", "Ben Azzouz", "Es Sebt", "Collo", "Beni Zid", "Kerkera", "Ouled Attia", "Oued Zehour", "Zitouna", "El Harrouch", "Zerdazas", "Ouled Hebaba", "Sidi Mezghiche", "Emdjez Edchich", "Beni Oulbane", "Aïn Bouziane", "Ramdane Djamel", "Beni Bachir", "Oum Toub", "Aïn Kechera", "Ouldja Boulbalout", "Kanoua", "El Ghdir", "Bouchtata", "Ouled Attia", "Tamalous", "Aïn Charchar", "Salah Bouchaour", "Cheraia", "Kheneg Mayoum", "El Marsa", "Filfila"]
  },
  {
    code: "22",
    name: "Sidi Bel Abbès",
    domicile: 700,
    bureau: 450,
    communes: ["Sidi Bel Abbès", "Tessala", "Sidi Brahim", "Mostefa Ben Brahim", "Telagh", "Mezaourou", "Boukhanefis", "Sidi Ali Boussidi", "Badredine El Mokrani", "Marhoum", "Tafissour", "Amarnas", "Tilmouni", "Sidi Lahcene", "Aïn Thrid", "M'Cid", "Sidi Khaled", "Aïn El Berd", "Sfizef", "Sidi Ali Benyoub", "Sfisef", "Bir El Hammam", "Sidi Yacoub", "Tabia", "Merine", "Ras El Ma", "Ain Tindamine", "Oued Sefioun", "Moulay Slissen", "El Hacaiba", "Hassi Zahana", "Sidi Hamadouche", "Tafissour", "Sidi Brahim", "Lamtar", "Sidi Chaib", "Ras El Ma", "Benachiba Chelia", "Hassi Dahou", "Oued Taourira", "Makedra", "Teghalimet", "Sidi Daho Zairs", "Sidi Yacine", "Dhaya", "Haçaiba", "Hassi Zehana", "Taoudmout", "Bir El Hamam", "Zerouala", "Oued Sebaa", "Lamtar", "Amarnas"]
  },
  {
    code: "23",
    name: "Annaba",
    domicile: 850,
    bureau: 450,
    communes: ["Annaba", "Berrahal", "El Hadjar", "Oued El Aneb", "Eulma", "El Bouni", "Seraïdi", "Aïn Berda", "Chetaïbi", "Sidi Amar", "Treat", "Cheurfa"]
  },
  {
    code: "24",
    name: "Guelma",
    domicile: 850,
    bureau: 450,
    communes: ["Guelma", "Nechmaya", "Bouati Mahmoud", "Oued Zenati", "Tamlouka", "Oued Fragha", "Aïn Sandel", "Ras El Agba", "Dahouara", "Belkheir", "Ben Djerrah", "Bou Hamdane", "Aïn Ben Beida", "Khezara", "Boumahra Ahmed", "Medjez Amar", "Bouchegouf", "Heliopolis", "El Fedjoudj", "Bordj Sabath", "Hammam Debagh", "Roknia", "Sellaoua Announa", "Aïn Larbi", "Medjez Sfa", "Bouhamdane", "Hammam N'Baïls", "Bendjerah", "Beni Mezline", "Houari Boumediene", "Bouhachana", "Ain Makhlouf", "Ain Regada", "Belkheir"]
  },
  {
    code: "25",
    name: "Constantine",
    domicile: 800,
    bureau: 450,
    communes: ["Constantine", "Hamma Bouziane", "Zighoud Youcef", "Didouche Mourad", "El Khroub", "Aïn Abid", "Ibn Ziad", "Ouled Rahmoun", "Aïn Smara", "Beni Hamiden", "Messaoud Boudjeriou", "Ibn Badis", "El Meridj"]
  },
  {
    code: "26",
    name: "Médéa",
    domicile: 750,
    bureau: 450,
    communes: ["Médéa", "Ouzera", "Ain Boucif", "Ouled Antar", "El Omaria", "Berrouaghia", "Seghouane", "Deux Bassins", "Beni Slimane", "El Azizia", "Ouled Hellal", "Tamesguida", "El Guelb El Kebir", "Aïn Ouksir", "Chellalet El Adhaoura", "Boughezoul", "Ksar El Boukhari", "El Hamdania", "Chahbounia", "Derrag", "Sidi Ziane", "Kef Lakhdar", "Cheniguel", "Aïn Bouddoualet", "Djouab", "Bouaiche", "Beni Bouateb", "Maghraoua", "Sidi Naamane", "Oued Harbil", "Tablat", "Aïn Bouzid", "Sidi Errabia", "Baata", "Boghar", "Zoubiria", "Ksar Boukhari", "El Azizia", "Souagui", "Tizi Mehdi", "Sidi Zahar", "Benchicao", "Mezghana", "M'Fatha", "Mihoub", "Sedraya", "Tafraout", "Hannacha", "Oued Debbagh", "Djouab", "Bouaichoune", "Khams Djouamaa", "Sidi Naamane", "Oum El Djalil", "Ouled Brahim", "Ouled Maaref", "Aïn Boucif", "Tamesguida", "Moudjbar", "Mezerana", "Aziz", "Ouamri", "Si Mahdjoub"]
  },
  {
    code: "27",
    name: "Mostaganem",
    domicile: 700,
    bureau: 450,
    communes: ["Mostaganem", "Aïn Tedles", "Hassi Mameche", "Fornaka", "Stidia", "Aïn Nouissy", "Hadjadj", "Sidi Ali", "Khadra", "Bouguirat", "Sirat", "Aïn Boudinar", "Mesra", "Achaacha", "Kheiredine", "Sidi Lakhdar", "Aïn Sidi Cherif", "Sour", "Oued El Kheir", "Touahria", "Saf Saf", "Nekmaria", "Mansourah", "Sayada", "Abdelmalek Ramdane", "Hassi Mameche", "Aïn Tedles", "Touahria", "El Hassiane", "Safsaf", "Tazgait", "Sidi Belattar", "Ouled Maalah"]
  },
  {
    code: "28",
    name: "M'Sila",
    domicile: 900,
    bureau: 600,
    communes: ["M'Sila", "Maadid", "Hammam Dhalaa", "Ouled Derradj", "Tarmount", "Mtarfa", "Khoubana", "M'Cif", "Chellal", "Ouled Madhi", "Magra", "Berhoum", "Aïn El Hadjel", "Aïn Errich", "Beni Ilmane", "Ouled Atia", "Ouanougha", "Bou Saâda", "Ouled Sidi Brahim", "Sidi Aïssa", "Aïn El Melh", "Mohamed Boudiaf", "Ben Srour", "Hammam Dhalaa", "Ouled Addi Guebala", "Belaiba", "Sidi Ameur", "Tamsa", "Aïn Khadra", "Magra", "Zarzour", "Bir Foda", "Djebel Messaad", "Khettouti Sed El Djir", "Ouled Mansour", "Maarif", "Chellal", "Ouled Slimane", "Dehahna", "Souamaa", "Ain Fares", "Menaa", "Sidi M'Hamed"]
  },
  {
    code: "29",
    name: "Mascara",
    domicile: 700,
    bureau: 450,
    communes: ["Mascara", "Bou Hanifia", "Tizi", "Hacine", "Maoussa", "Tighennif", "Froha", "El Bordj", "Aïn Ferah", "Guerdjoum", "Alaimia", "El Menaouer", "Oued El Abtal", "Aïn Fekan", "Ghriss", "Sedjerara", "Mohammadia", "Sidi Kada", "Beniane", "Oggaz", "Aouf", "Aïn Fares", "El Gaada", "Chorfa", "Oued Taria", "Ferraguig", "Khalouia", "El Keurt", "Sehailia", "Sig", "Ras Aïn Amirouche", "Zahana", "Makdha", "Sidi Abdelmoumene", "Ain Ferah", "Gharrous", "El Mamounia", "Nesmot", "Sidi Boussaid", "Mocta Douz", "El Gueitna", "Ain Fares", "Guettena", "Bou Henni", "Zelmata", "Ras Ain Amirouche"]
  },
  {
    code: "30",
    name: "Ouargla",
    domicile: 950,
    bureau: 650,
    communes: ["Ouargla", "Rouissat", "Aïn Beida", "N'Goussa", "Hassi Messaoud", "Hassi Ben Abdellah", "Sidi Khouiled", "Temacine", "Touggourt", "Nezla", "Zaouia El Abidia", "El Alia", "Tebesbest", "Benaceur", "M'Naguer", "El Hadjira", "Taibet", "El Borma", "Megarine", "Sidi Slimane", "Ain Beida"]
  },
  {
    code: "31",
    name: "Oran",
    domicile: 300,
    bureau: 400,
    communes: ["Oran", "Bir El Djir", "Es Senia", "Arzew", "Bethioua", "Aïn El Turk", "El Ançor", "Oued Tlelat", "Tafraoui", "Sidi Chami", "Boufatis", "Mers El Kebir", "Bousfer", "El Karma", "El Braya", "Hassi Bounif", "Hassi Ben Okba", "Aïn Kerma", "Hassi Mefsoukh", "Sidi Ben Yabka", "Gdyel", "Ben Freha", "Messerghin", "Boutlelis", "Aïn Biya", "Marsat El Hadjadj"]
  },
  {
    code: "32",
    name: "El Bayadh",
    domicile: 1000,
    bureau: 600,
    communes: ["El Bayadh", "Rogassa", "Stitten", "Brezina", "Ghassoul", "Boualem", "El Abiodh Sidi Cheikh", "Ain El Orak", "Arbaouat", "Bougtoub", "El Kheither", "Kef El Ahmar", "Boussemghoun", "Chellala", "Kraakda", "El Bnoud", "Cheguig", "Sidi Ameur", "El Mehara", "Tousmouline", "Sidi Slimane", "Sidi Tifour"]
  },
  {
    code: "33",
    name: "Illizi",
    domicile: null,
    bureau: null,
    communes: ["Illizi", "Djanet", "Debdeb", "Bordj Omar Driss", "Bordj El Haouasse", "In Amenas"]
  },
  {
    code: "34",
    name: "Bordj Bou Arreridj",
    domicile: 800,
    bureau: 450,
    communes: ["Bordj Bou Arreridj", "Ras El Oued", "Bordj Zemoura", "Mansoura", "El Achir", "Aïn Taghrout", "Bordj Ghdir", "Sidi Embarek", "El Hamadia", "Melouza", "Teniet En Nasr", "Djaafra", "El Main", "Ouled Brahem", "Ouled Dahmane", "Hasnaoua", "Khelil", "Aïn Tesra", "Bir Kasdali", "Tixter", "El Ach", "Haraza", "Ghilassa", "Rabta", "Belimour", "Aïn Fekroun", "El Mehir", "Aïn Tagourait", "Colla", "Tefreg", "Taglait", "Ksour", "Ouled Sidi Brahim"]
  },
  {
    code: "35",
    name: "Boumerdès",
    domicile: 800,
    bureau: 450,
    communes: ["Boumerdès", "Boudouaou", "Bordj Menaïel", "Baghlia", "Sidi Daoud", "Naciria", "Djinet", "Isser", "Zemmouri", "Si Mustapha", "Tidjelabine", "Chabet El Ameur", "Thenia", "Timezrit", "Corso", "Ouled Moussa", "Larbatache", "Bouzegza Keddara", "Taourga", "Ouled Hedadj", "Leghata", "Keddara", "Beni Amrane", "Souk El Had", "Boudouaou El Bahri", "Ouled Aïssa", "Dellys", "Ammal", "Ben Choud", "Aïn El Hammam", "Hammedi", "Khemis El Khechna", "Benchoud", "Afir"]
  },
  {
    code: "36",
    name: "El Tarf",
    domicile: 850,
    bureau: 450,
    communes: ["El Tarf", "Bouhadjar", "Ben M'Hidi", "Bougous", "El Kala", "Aïn El Assel", "El Aioun", "Bouteldja", "Besbes", "Asfour", "Echatt", "Zerizer", "Zitouna", "Aïn Kerma", "Oued Zitoun", "Hammam Beni Salah", "Raml Souk", "Lac des Oiseaux", "Chefia", "Drean", "Chihani", "Chebaita Mokhtar", "Berrihane", "Souarekh"]
  },
  {
    code: "37",
    name: "Tindouf",
    domicile: null,
    bureau: null,
    communes: ["Tindouf", "Oum El Assel", "Ghar Djebilet"]
  },
  {
    code: "38",
    name: "Tissemsilt",
    domicile: 750,
    bureau: 500,
    communes: ["Tissemsilt", "Bordj Bounaama", "Theniet El Had", "Lazharia", "Beni Chaib", "Lardjem", "Melaab", "Sidi Lantri", "Bordj El Emir Abdelkader", "Layoune", "Khemisti", "Ouled Bessem", "Ammari", "Youssoufia", "Sidi Boutouchent", "Larbaa", "Maasem", "Sidi Abed", "Tamalaht", "Sidi Slimane", "Boucaid", "Beni Lahcene"]
  },
  {
    code: "39",
    name: "El Oued",
    domicile: 950,
    bureau: 650,
    communes: ["El Oued", "Robbah", "Oued El Alenda", "Bayadha", "Nakhla", "Guemar", "Kouinine", "Reguiba", "Hamraia", "Taghzout", "Debila", "Hassani Abdelkrim", "Hassi Khelifa", "Taleb Larbi", "Douar El Ma", "Sidi Aoun", "Trifaoui", "Magrane", "Beni Guecha", "Ourmes", "Still", "M'Rara", "Sidi Khellil", "Tendla", "El Ogla", "Mih Ouansa", "Sidi Amrane", "Oum Touyour", "Ain Beida"]
  },
  {
    code: "40",
    name: "Khenchela",
    domicile: 800,
    bureau: 450,
    communes: ["Khenchela", "M'Toussa", "Kais", "Baghai", "El Hamma", "Aïn Touila", "Taouzianat", "Bouhmama", "El Oueldja", "Remila", "Cherchar", "Djellal", "Babar", "Tamza", "Ensigha", "Ouled Rechache", "El Mahmal", "M'Sara", "Yabous", "Khirane", "Chelia"]
  },
  {
    code: "41",
    name: "Souk Ahras",
    domicile: 800,
    bureau: 450,
    communes: ["Souk Ahras", "Sedrata", "Haddada", "Mechroha", "Ouled Driss", "Tiffech", "Zaarouria", "Taoura", "Drea", "Hanancha", "Khedara", "Merahna", "Ouled Moumen", "Bir Bouhouche", "M'Daourouch", "Oum El Adhaim", "Aïn Zana", "Aïn Soltane", "Ouillen", "Sidi Fredj", "Safel El Ouiden", "Ragouba", "Khemissa", "Oued Keberit", "Terraguelt", "Zouabi", "Sidi Hadjeres"]
  },
  {
    code: "42",
    name: "Tipaza",
    domicile: 800,
    bureau: 450,
    communes: ["Tipaza", "Menaceur", "Larhat", "Douaouda", "Bourkika", "Khemisti", "Aghbal", "Hedjout", "Sidi Amar", "Gouraya", "Nador", "Chaiba", "Aïn Tagourait", "Cherchell", "Damous", "Meurad", "Fouka", "Bou Ismail", "Ahmer El Ain", "Bouharoun", "Sidi Ghiles", "Messelmoun", "Sidi Rached", "Kolea", "Attatba", "Sidi Semiane", "Bou Haroun", "Hadjout"]
  },
  {
    code: "43",
    name: "Mila",
    domicile: 800,
    bureau: 450,
    communes: ["Mila", "Ferdjioua", "Chelghoum Laid", "Oued Athmania", "Aïn Mellouk", "Telerghma", "Oued Seguen", "Tadjenanet", "Benyahia Abderrahmane", "Sidi Merouane", "Bouhatem", "Rouached", "Tessala Lamtai", "Grarem Gouga", "Sidi Khelifa", "Aïn Tine", "El Mechira", "Zeghaia", "Elayadi Barbes", "Aïn Beida Harriche", "Tiberguent", "Ouled Khalouf", "Hamala", "Tassadane Haddada", "Derradji Bousselah", "Minar Zarza", "Amira Arres", "Terrai Bainen", "Yahia Beniguecha", "Chigara", "Oued Endja"]
  },
  {
    code: "44",
    name: "Aïn Defla",
    domicile: 750,
    bureau: 450,
    communes: ["Aïn Defla", "Miliana", "Boumedfaa", "Khemis Miliana", "Hammam Righa", "Arib", "Djelida", "El Amra", "Bourached", "El Attaf", "El Abadia", "Djendel", "Oued Chorfa", "Aïn Lechiakh", "Oued Djemaa", "Rouina", "Zeddine", "El Hassania", "Bir Oueld Khelifa", "Aïn Benian", "Hoceinia", "Barbouche", "Bordj Emir Khaled", "Aïn Torki", "Sidi Lakhdar", "Ben Allal", "Aïn Benian", "Aïn Soltane", "Tarik Ibn Ziad", "Aïn Bouyahia", "El Maine", "Tachta Zegagha", "Mekhatria", "Bathia", "Tiberkanine", "Belaas"]
  },
  {
    code: "45",
    name: "Naâma",
    domicile: 1000,
    bureau: 600,
    communes: ["Naâma", "Mecheria", "Aïn Sefra", "Tiout", "Sfissifa", "Moghrar", "Assela", "Djeniane Bourezg", "Aïn Ben Khelil", "Makman Ben Amer", "Kasdir", "El Biod"]
  },
  {
    code: "46",
    name: "Aïn Témouchent",
    domicile: 650,
    bureau: 450,
    communes: ["Aïn Témouchent", "Chaabet El Ham", "Aïn Kihal", "Hammam Bouhadjar", "Bou Zedjar", "Oued Berkeche", "Aïn El Arbaa", "Tamzoura", "Chentouf", "Sidi Ben Adda", "Aïn Tolba", "El Amria", "Hassasna", "Hassi El Ghella", "Aïn Larbaâ", "Oued Sabah", "Ouled Boudjemaa", "Aghlal", "Terga", "Aïn Kihal", "Sidi Safi", "Oulhaca El Gheraba", "Beni Saf", "Sidi Boumediene", "Aoubellil", "El Malah", "Sidi Ouriache", "El Emir Abdelkader"]
  },
  {
    code: "47",
    name: "Ghardaïa",
    domicile: 950,
    bureau: 600,
    communes: ["Ghardaïa", "El Meniaa", "Dhayet Ben Dhahoua", "Berriane", "Metlili", "El Guerrara", "El Atteuf", "Zelfana", "Sebseb", "Bounoura", "Hassi Fehal", "Hassi Gara", "Mansoura"]
  },
  {
    code: "48",
    name: "Relizane",
    domicile: 750,
    bureau: 450,
    communes: ["Relizane", "Oued Rhiou", "Belhacel", "Mazouna", "Zemmoura", "Ouled Yaïch", "Sidi M'Hamed Ben Ali", "El Matmar", "Sidi Lazreg", "El Hassi", "Ammi Moussa", "Sidi M'Hamed Ben Aouda", "Aïn Tarek", "Oued Essalem", "Ouarizane", "Mendes", "Lahlef", "El Guettar", "Hamri", "El Ouldja", "Djidiouia", "Aïn Rahma", "Yellel", "Oued El Djemaa", "Ramka", "Bendaoud", "Beni Dergoun", "Sidi Khettab", "Mediouna", "Sidi Saada", "Ouled Aïche", "Kalaa", "Aïn Tarik", "Had Echkalla", "Beni Zentis", "Souk El Had", "Dar Ben Abdellah", "El Matmar", "Sidi Lazreg"]
  },
  {
    code: "49",
    name: "Timimoun",
    domicile: 1400,
    bureau: 900,
    communes: ["Timimoun", "Ouled Saïd", "Aougrout", "Deldoul", "Charouine", "Tinerkouk", "Talmine", "Metarfa", "Timimoun"]
  },
  {
    code: "50",
    name: "Bordj Badji Mokhtar",
    domicile: null,
    bureau: null,
    communes: ["Bordj Badji Mokhtar", "Timiaouine"]
  },
  {
    code: "51",
    name: "Ouled Djellal",
    domicile: 950,
    bureau: 600,
    communes: ["Ouled Djellal", "Ras El Miaad", "Doucen", "Chaïba", "Besbes", "Sidi Khaled", "Lioua"]
  },
  {
    code: "52",
    name: "Béni Abbès",
    domicile: 1050,
    bureau: 900,
    communes: ["Béni Abbès", "Tabelbala", "Igli", "Tamtert", "Ouled Khoudir", "Ksabi", "Timoudi", "El Ouata", "Kerzaz"]
  },
  {
    code: "53",
    name: "In Salah",
    domicile: 1600,
    bureau: 1120,
    communes: ["In Salah", "In Ghar", "Foggaret Ezzaouia"]
  },
  {
    code: "54",
    name: "In Guezzam",
    domicile: 1600,
    bureau: null,
    communes: ["In Guezzam", "Tin Zaouatine"]
  },
  {
    code: "55",
    name: "Touggourt",
    domicile: 950,
    bureau: 650,
    communes: ["Touggourt", "Tebesbest", "Nezla", "Zaouia El Abidia", "Taibet", "M'Naguer", "Blidet Amor", "Tamerna", "El Hadjira", "Megarine", "Sidi Slimane", "Benaceur", "El Allia", "Benaceur", "Temacine"]
  },
  {
    code: "56",
    name: "Djanet",
    domicile: null,
    bureau: null,
    communes: ["Djanet", "Bordj El Haouasse"]
  },
  {
    code: "57",
    name: "El M'Ghair",
    domicile: 950,
    bureau: null,
    communes: ["El M'Ghair", "Djamaa", "Sidi Amrane", "Sidi Khelil", "Tendla", "Still", "M'Rara", "Oum Touyour", "Sidi Slimane"]
  },
  {
    code: "58",
    name: "El Meniaa",
    domicile: 950,
    bureau: null,
    communes: ["El Meniaa", "Hassi Gara", "Hassi Fehal", "Mansoura"]
  },
];

export const getWilayaByCode = (code: string): Wilaya | undefined => {
  return wilayas.find(w => w.code === code);
};

export const getCommunesByWilaya = (wilayaCode: string): string[] => {
  const wilaya = getWilayaByCode(wilayaCode);
  return wilaya ? wilaya.communes : [];
};
