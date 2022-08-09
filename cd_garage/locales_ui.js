// In case of wanting to use less memory, delete ones you do not need :)
const LOCALE = "EN"; // EN / DE / CZ / ES / PT / RS / CUSTOM
const DIST_UNIT = "KM";
const LOCALES = {
  EN: {
    LOADING: "Loading...",

    FINANCE_BUTTON: "Finance",
    FINANCE_TITLE: "Finance vehicle",
    FINANCE_LEFT: "Finance left: ",
    FINANCE_LAST_PAYMENT: "Last payment: ",
    FINANCE_NEXT_PAYMENT: "Next payment: ",
    FINANCE_ACTION: "Pay",
    FINANCE_DESCRIPTION:
      "Input the amount of money you wish to put towards vehicle finance.",
    FINANCE_SUBMIT: "Submit",
    FINANCE_CLOSE: "Close",
    FINANCE_LESS_THAN_ZERO: "You cannot send less than 0 money.",
    FINANCE_INVALID_AMMOUNT: "You need to enter a valid amount.",

    TRANSFER_BUTTON: "Transfer",
    TRANSFER_TITLE: "Transfer vehicle",
    TRANSFER_TO: "Transfer to",
    TRANSFER_DESCRIPTION:
      "Input the ID of the person you are transfering this vehicle to.",
    TRANSFER_SUBMIT: "Submit",
    TRANSFER_CLOSE: "Close",
    TRANSFER_INVALID_ID: "Invalid player id.",

    IMPOUND_CIV_NOTIFICATION: "Taking out a vehicle costs $500.",
    IMPOUND_SELECT: "Select an impound",
    IMPOUND_SPAWN: "Spawn vehicle",
    IMPOUND_RETURN: "Return to owner",
    IMPOUND_NOTIFICATION: "This vehicle can only be returned by an officer",
    IMPOUND_TIME: "hour(s)",

    OUTSIDE_TAKEOUT: "Take out",
    OUTSIDE_RETURN: "Return for $",
    OUTSIDE_ENGINE: "Engine",
    OUTSIDE_FUEL: "Fuel",
    OUTSIDE_BODY: "Body",
    OUTSIDE_IMPOUND_NO_VEHICLES: "There are no vehicles in this impound.",
    OUTSIDE_NO_VEHICLES: "You haven't got any vehicles.",
    OUTSIDE_SEARCH_PLACEHOLDER: "Search the vehicles by Plate, Name or Garage",
    OUTSIDE_TOTAL_VEHICLES: "Total vehicles: ",

    INSIDE_UPGRADES: "Vehicle upgrades",
    INSIDE_UPGRADES_ENGINE: "Engine",
    INSIDE_UPGRADES_BRAKES: "Brakes",
    INSIDE_UPGRADES_SUSPENSION: "Suspension",
    INSIDE_UPGRADES_TRANSMISSION: "Transmission",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Vehicle statistics & health",
    INSIDE_STATS_HANDLING: "Handling",
    INSIDE_STATS_ACCELERATION: "Acceleration",
    INSIDE_STATS_BRAKES: "Brakes",
    INSIDE_STATS_BODY: "Body health",
    INSIDE_STATS_ENGINE: "Engine health",
    INSIDE_STATS_FUEL: "Fuel level",
    INSIDE_STATS_SPEED: "Speed",
    INSIDE_STATS_SCORE: "Overall score",
    INSIDE_STATS_SCORE_TEXT: " SCORE",

    SEARCH_BUTTON: "Search",

    CURRENCY_SYMBOL: "$",

    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],

    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  DE: {
    LOADING: "Laden...",

    FINANCE_BUTTON: "Finance",
    FINANCE_TITLE: "Zahle die Rate für Fahrzeug",
    FINANCE_LEFT: "Restlicher Betrag: ",
    FINANCE_LAST_PAYMENT: "Letzte Bezahlung: ",
    FINANCE_NEXT_PAYMENT: "Nächste Bezahlung bis: ",
    FINANCE_ACTION: "Zahlen",
    FINANCE_DESCRIPTION: "Gib die Summe für nächste Rate ein",
    FINANCE_SUBMIT: "Vorlegen",
    FINANCE_CLOSE: "Schließen",
    FINANCE_LESS_THAN_ZERO: "Du musst die Summe größer als 0 eingeben",
    FINANCE_INVALID_AMMOUNT: "Gültigen Betrag eingeben",

    TRANSFER_BUTTON: "Übertragen ",
    TRANSFER_TITLE: "Übertragung des Fahrzeugs",
    TRANSFER_TO: "Übetragen an",
    TRANSFER_DESCRIPTION:
      "ID von Person, an die das Fahrzeug übertragen wird, eingeben:",
    TRANSFER_SUBMIT: "Vorlegen",
    TRANSFER_CLOSE: "Schließen",
    TRANSFER_INVALID_ID: "Üngultige Spiler ID.",

    IMPOUND_CIV_NOTIFICATION: "Einlösen des Fahrzeugs kostet $500.",
    IMPOUND_SELECT: "Wähle Abschleppplatz",
    IMPOUND_SPAWN: "Spawn Fahrzeug",
    IMPOUND_RETURN: "Dem Besitzer zurückgeben",
    IMPOUND_NOTIFICATION: "This vehicle can only be returned by an officer",
    IMPOUND_TIME: "hour(s)",

    OUTSIDE_TAKEOUT: "Einlösen",
    OUTSIDE_RETURN: "Zurückgeben für $",
    OUTSIDE_ENGINE: "Motor",
    OUTSIDE_FUEL: "Moto",
    OUTSIDE_BODY: "Karosserie",
    OUTSIDE_IMPOUND_NO_VEHICLES: "Es gibt keine Fahrzeuge",
    OUTSIDE_NO_VEHICLES: "Du hast kein Fahrzeug",
    OUTSIDE_SEARCH_PLACEHOLDER:
      "Suchen Sie die Fahrzeuge nach Schild, Name oder Garage",
    OUTSIDE_TOTAL_VEHICLES: "Fahrzeuge insgesamt: ",

    INSIDE_UPGRADES: "Umrüstung des Fahrzeugs",
    INSIDE_UPGRADES_ENGINE: "Motor",
    INSIDE_UPGRADES_BRAKES: "Bremsen",
    INSIDE_UPGRADES_SUSPENSION: "Radaufhängung",
    INSIDE_UPGRADES_TRANSMISSION: "Kraftübertragung",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Zustand des Fahrzeugs",
    INSIDE_STATS_HANDLING: "Die Fahreigenschaften",
    INSIDE_STATS_ACCELERATION: "Beschleunigung",
    INSIDE_STATS_BRAKES: "Bremsen",
    INSIDE_STATS_BODY: "Beschleunigung",
    INSIDE_STATS_ENGINE: "Motorzustand",
    INSIDE_STATS_FUEL: "Kraftstoffstand",
    INSIDE_STATS_SPEED: "Geschwindigkeit",
    INSIDE_STATS_SCORE: "Gesamtnote",
    INSIDE_STATS_SCORE_TEXT: " SCORE",

    SEARCH_BUTTON: "Suche",

    CURRENCY_SYMBOL: "$",
    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],

    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  CZ: {
    LOADING: "Načítání ...",

    FINANCE_BUTTON: "Finance",
    FINANCE_TITLE: "Financování vozidel",
    FINANCE_LEFT: "Zbývající finance:",
    FINANCE_LAST_PAYMENT: "Poslední platba:",
    FINANCE_NEXT_PAYMENT: "Další platba:",
    FINANCE_ACTION: "Zaplatit",
    FINANCE_DESCRIPTION:
      "Zadejte částku, kterou chcete dát na financování vozidel.",
    FINANCE_SUBMIT: "Odeslat",
    FINANCE_CLOSE: "Zavřít",
    FINANCE_LESS_THAN_ZERO: "Nemůžete poslat méně než 0 peněz.",
    FINANCE_INVALID_AMMOUNT: "Musíte zadat platnou částku.",

    TRANSFER_BUTTON: "Převod na osobu",
    TRANSFER_TITLE: "Převést vozidlo",
    TRANSFER_TO: "Převést na",
    TRANSFER_DESCRIPTION: "Zadejte ID osoby, které převádíte toto vozidlo.",
    TRANSFER_SUBMIT: "Odeslat",
    TRANSFER_CLOSE: "Zavřít",
    TRANSFER_INVALID_ID: "Neplatné ID hráče.",

    IMPOUND_CIV_NOTIFICATION: "Vrácení vozidla stojí 500 $.",
    IMPOUND_SELECT: "Vyberte místo k odtáhnutí",
    IMPOUND_SPAWN: "Vzít vozidlo z odtahovky",
    IMPOUND_RETURN: "Přesunout do garáže vlastníkovi",
    IMPOUND_NOTIFICATION: "This vehicle can only be returned by an officer",
    IMPOUND_TIME: "hour(s)",

    OUTSIDE_TAKEOUT: "Vyparkovat",
    OUTSIDE_RETURN: "Návrat za $",
    OUTSIDE_ENGINE: "Motor",
    OUTSIDE_FUEL: "Palivo",
    OUTSIDE_BODY: "Karoserie",
    OUTSIDE_IMPOUND_NO_VEHICLES: "Na této odtahovce nejsou vozidla",
    OUTSIDE_NO_VEHICLES: "Nemáte žádná vozidla.",
    OUTSIDE_SEARCH_PLACEHOLDER:
      "Hledejte vozidla podle štítku, jména nebo garáže",
    OUTSIDE_TOTAL_VEHICLES: "Celkem vozidel: ",

    INSIDE_UPGRADES: "Vylepšení vozidla",
    INSIDE_UPGRADES_ENGINE: "Motor",
    INSIDE_UPGRADES_BRAKES: "Brzdy",
    INSIDE_UPGRADES_SUSPENSION: "Snížení",
    INSIDE_UPGRADES_TRANSMISSION: "Převodovka",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Statistiky a zdraví vozidel",
    INSIDE_STATS_HANDLING: "Zpracování",
    INSIDE_STATS_ACCELERATION: "Zrychlení",
    INSIDE_STATS_BRAKES: "Brzdy",
    INSIDE_STATS_BODY: "Zdraví těla",
    INSIDE_STATS_ENGINE: "Stav motoru",
    INSIDE_STATS_FUEL: "Hladina paliva",
    INSIDE_STATS_SPEED: "Rychlost",
    INSIDE_STATS_SCORE: "Celkové skóre",

    SEARCH_BUTTON: "Vyhledávání",

    CURRENCY_SYMBOL: "$",
    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],

    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  RO: {
    LOADING: "Loading...",

    FINANCE_BUTTON: "Finance",
    FINANCE_TITLE: "Finance vehicle",
    FINANCE_LEFT: "Finance left: ",
    FINANCE_LAST_PAYMENT: "Last payment: ",
    FINANCE_NEXT_PAYMENT: "Next payment: ",
    FINANCE_ACTION: "Pay",
    FINANCE_DESCRIPTION:
      "Input the amount of money you wish to put towards vehicle finance.",
    FINANCE_SUBMIT: "Submit",
    FINANCE_CLOSE: "Close",
    FINANCE_LESS_THAN_ZERO: "You cannot send less than 0 money.",
    FINANCE_INVALID_AMMOUNT: "You need to enter a valid amount.",

    TRANSFER_BUTTON: "Transfera",
    TRANSFER_TITLE: "Transfera Vehicul",
    TRANSFER_TO: "Transfera catre",
    TRANSFER_DESCRIPTION:
      "Introdu ID-ul persoanei careia ii tranferi acest vehicul.",
    TRANSFER_SUBMIT: "Afirma",
    TRANSFER_CLOSE: "Inchide",
    TRANSFER_INVALID_ID: "ID-ul jucatorului este invalid.",

    IMPOUND_CIV_NOTIFICATION: "Taking out a vehicle costs $500.",
    IMPOUND_SELECT: "Select an impound",
    IMPOUND_SPAWN: "Spawn vehicle",
    IMPOUND_RETURN: "Return to owner",
    IMPOUND_NOTIFICATION: "This vehicle can only be returned by an officer",
    IMPOUND_TIME: "hour(s)",

    OUTSIDE_TAKEOUT: "Scoate",
    OUTSIDE_RETURN: "Returneaza pentru $",
    OUTSIDE_ENGINE: "Motor",
    OUTSIDE_FUEL: "Carburant",
    OUTSIDE_BODY: "Caroserie",
    OUTSIDE_IMPOUND_NO_VEHICLES: "Nu sunt vehicule confiscate.",
    OUTSIDE_NO_VEHICLES: "Nu ai nici un vehicul.",

    INSIDE_UPGRADES: "Vehicle upgrades",
    INSIDE_UPGRADES_ENGINE: "Engine",
    INSIDE_UPGRADES_BRAKES: "Brakes",
    INSIDE_UPGRADES_SUSPENSION: "Suspension",
    INSIDE_UPGRADES_TRANSMISSION: "Transmission",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Vehicle statistics & health",
    INSIDE_STATS_HANDLING: "Handling",
    INSIDE_STATS_ACCELERATION: "Acceleration",
    INSIDE_STATS_BRAKES: "Brakes",
    INSIDE_STATS_BODY: "Body health",
    INSIDE_STATS_ENGINE: "Engine health",
    INSIDE_STATS_FUEL: "Fuel level",
    INSIDE_STATS_SPEED: "Speed",
    INSIDE_STATS_SCORE: "Overall score",
    INSIDE_STATS_SCORE_TEXT: " SCORE",

    SEARCH_BUTTON: "Căutare",

    CURRENCY_SYMBOL: "$",
    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],
    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  ES: {
    LOADING: "Cargando ...",

    FINANCE_BUTTON: "Finanzas",
    FINANCE_TITLE: "Financiación de Vehículo",
    FINANCE_LEFT: "Financiación restante:",
    FINANCE_LAST_PAYMENT: "Último pago:",
    FINANCE_NEXT_PAYMENT: "Próximo pago:",
    FINANCE_ACTION: "Pagar",
    FINANCE_DESCRIPTION:
      "Ingrese la cantidad de dinero que desea destinar a la financiación del vehículo",
    FINANCE_SUBMIT: "Aceptar",
    FINANCE_CLOSE: "Cerrar",
    FINANCE_LESS_THAN_ZERO: "No puedes enviar menos de 0 dólares",
    FINANCE_INVALID_AMMOUNT: "Debes ingresar una cantidad válida",

    TRANSFER_BUTTON: "Vender",
    TRANSFER_TITLE: "Transferir vehículo",
    TRANSFER_TO: "Transferir a",
    TRANSFER_DESCRIPTION:
      "Ingrese el ID de la persona a la que está transfiriendo este vehículo",
    TRANSFER_SUBMIT: "Aceptar",
    TRANSFER_CLOSE: "Cerrar",
    TRANSFER_INVALID_ID: "ID de jugador no válido",

    IMPOUND_CIV_NOTIFICATION: "Sacar un vehículo cuesta $ 500.",
    IMPOUND_SELECT: "Seleccionar un vehículo",
    IMPOUND_SPAWN: "Sacar Vehículo",
    IMPOUND_RETURN: "Devolver al propietario",
    IMPOUND_NOTIFICATION: "This vehicle can only be returned by an officer",
    IMPOUND_TIME: "hour(s)",

    OUTSIDE_TAKEOUT: "Sacar",
    OUTSIDE_RETURN: "Pagar tasas por $",
    OUTSIDE_ENGINE: "Motor",
    OUTSIDE_FUEL: "Combustible",
    OUTSIDE_BODY: "Chasis",
    OUTSIDE_IMPOUND_NO_VEHICLES: "No hay vehículos en este depósito",
    OUTSIDE_NO_VEHICLES: "No tienes ningún vehículo",
    OUTSIDE_SEARCH_PLACEHOLDER:
      "Busque los vehículos por placa, nombre o garaje",
    OUTSIDE_TOTAL_VEHICLES: "Vehículos totales: ",

    INSIDE_UPGRADES: "Mecánica del Motor",
    INSIDE_UPGRADES_ENGINE: "Motor",
    INSIDE_UPGRADES_BRAKES: "Frenos",
    INSIDE_UPGRADES_SUSPENSION: "Suspensión",
    INSIDE_UPGRADES_TRANSMISSION: "Transmisión",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Estadísticas & Salud",
    INSIDE_STATS_HANDLING: "Manejo",
    INSIDE_STATS_ACCELERATION: "Aceleración",
    INSIDE_STATS_BRAKES: "Frenos",
    INSIDE_STATS_BODY: "Carrocería",
    INSIDE_STATS_ENGINE: "Motor",
    INSIDE_STATS_FUEL: "Combustible",
    INSIDE_STATS_SPEED: "Velocidad",
    INSIDE_STATS_SCORE: "Puntuación",
    INSIDE_STATS_SCORE_TEXT: " SCORE",

    SEARCH_BUTTON: "Buscar",

    CURRENCY_SYMBOL: "$",
    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],

    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  PT: {
    LOADING: "Carregando ...",

    FINANCE_BUTTON: "Finanças",
    FINANCE_TITLE: "Veículo financeiro",
    FINANCE_LEFT: "Finanças restantes:",
    FINANCE_LAST_PAYMENT: "Último pagamento:",
    FINANCE_NEXT_PAYMENT: "Próximo pagamento:",
    FINANCE_ACTION: "Pague",
    FINANCE_DESCRIPTION:
      "Insira a quantia que você deseja aplicar no financiamento de veículos.",
    FINANCE_SUBMIT: "Enviar",
    FINANCE_CLOSE: "Fechar",
    FINANCE_LESS_THAN_ZERO: "Você não pode enviar menos de 0 dinheiro.",
    FINANCE_INVALID_AMMOUNT: "Você precisa inserir um valor válido.",

    TRANSFER_BUTTON: "Transferir",
    TRANSFER_TITLE: "Transferir veículo",
    TRANSFER_TO: "Transferir para",
    TRANSFER_DESCRIPTION:
      "Insira o ID da pessoa para quem você está transferindo este veículo.",
    TRANSFER_SUBMIT: "Enviar",
    TRANSFER_CLOSE: "Fechar",
    TRANSFER_INVALID_ID: "ID de jogador inválido.",

    IMPOUND_CIV_NOTIFICATION: "Retirar um veículo custa $ 500.",
    IMPOUND_SELECT: "Selecione um represamento",
    IMPOUND_SPAWN: "Veículo de criação",
    IMPOUND_RETURN: "Devolver ao proprietário",
    IMPOUND_NOTIFICATION: "This vehicle can only be returned by an officer",
    IMPOUND_TIME: "hour(s)",

    OUTSIDE_TAKEOUT: "Retire",
    OUTSIDE_RETURN: "Retorne por $",
    OUTSIDE_ENGINE: "Motor",
    OUTSIDE_FUEL: "Combustível",
    OUTSIDE_BODY: "Corpo",
    OUTSIDE_IMPOUND_NO_VEHICLES: "Não há veículos nesta apreensão.",
    OUTSIDE_NO_VEHICLES: "Você não tem veículos.",
    OUTSIDE_SEARCH_PLACEHOLDER:
      "Pesquise os veículos por placa, nome ou garagem",
    OUTSIDE_TOTAL_VEHICLES: "Total de veículos: ",

    INSIDE_UPGRADES: "Atualizações de veículos",
    INSIDE_UPGRADES_ENGINE: "Motor",
    INSIDE_UPGRADES_BRAKES: "Freios",
    INSIDE_UPGRADES_SUSPENSION: "Suspensão",
    INSIDE_UPGRADES_TRANSMISSION: "Transmissão",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Estatísticas e saúde do veículo",
    INSIDE_STATS_HANDLING: "Manuseio",
    INSIDE_STATS_ACCELERATION: "Aceleração",
    INSIDE_STATS_BRAKES: "Freios",
    INSIDE_STATS_BODY: "Saúde corporal",
    INSIDE_STATS_ENGINE: "Saúde do motor",
    INSIDE_STATS_FUEL: "Nível de combustível",
    INSIDE_STATS_SPEED: "Velocidade",
    INSIDE_STATS_SCORE: "Pontuação geral",
    INSIDE_STATS_SCORE_TEXT: " SCORE",

    SEARCH_BUTTON: "Procurar",

    CURRENCY_SYMBOL: "$",
    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],

    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  RS: {
    LOADING: "Učitavanje ...",

    FINANCE_BUTTON: "Finansiraj",
    FINANCE_TITLE: "Finansiraj vozilo",
    FINANCE_LEFT: "Preostalo finansiranje: ",
    FINANCE_LAST_PAYMENT: "Poslednja uplata: ",
    FINANCE_NEXT_PAYMENT: "Sledeća uplata: ",
    FINANCE_ACTION: "Plati",
    FINANCE_DESCRIPTION:
      "Unesite sumu koju želite da uplatite za finansiranje vozila.",
    FINANCE_SUBMIT: "Pošalji",
    FINANCE_CLOSE: "Zatvori",
    FINANCE_LESS_THAN_ZERO: "Ne možete poslati sumu manju od 0",
    FINANCE_INVALID_AMMOUNT: "Niste uneli ispravnu sumu.",

    TRANSFER_BUTTON: "Prenesi",
    TRANSFER_TITLE: "Prenos vozila",
    TRANSFER_TO: "Prenesi osobi: ",
    TRANSFER_DESCRIPTION: "Unesite ID broj osobe kojoj prenosite ovo vozilo.",
    TRANSFER_SUBMIT: "Pošalji",
    TRANSFER_CLOSE: "Zatvori",
    TRANSFER_INVALID_ID: "Identifikacioni broj nije validan.",

    IMPOUND_CIV_NOTIFICATION: "Podizanje vozila košta 500",
    IMPOUND_SELECT: "Izaberite lokaciju",
    IMPOUND_SPAWN: "Izvadi vozilo",
    IMPOUND_RETURN: "Vrati vlasniku",
    IMPOUND_NOTIFICATION: "Ovo vozilo može vratiti samo ovlašćeno lice.",
    IMPOUND_TIME: "sat(i)",

    OUTSIDE_TAKEOUT: "Izvadi vozilo",
    OUTSIDE_RETURN: "Vrati za $",
    OUTSIDE_ENGINE: "Motor",
    OUTSIDE_FUEL: "Gorivo",
    OUTSIDE_BODY: "Karoserija",
    OUTSIDE_IMPOUND_NO_VEHICLES: "Ovde nema zaplenjenih vozila.",
    OUTSIDE_NO_VEHICLES: "Nemate vozila.",
    OUTSIDE_SEARCH_PLACEHOLDER:
      "Pretražite vozila po tablici, imenu ili garaži",
    OUTSIDE_TOTAL_VEHICLES: "Ukupno vozila: ",

    INSIDE_UPGRADES: "Poboljšanja vozila",
    INSIDE_UPGRADES_ENGINE: "Motor",
    INSIDE_UPGRADES_BRAKES: "Kočnice",
    INSIDE_UPGRADES_SUSPENSION: "Vešanje",
    INSIDE_UPGRADES_TRANSMISSION: "Prenos",
    INSIDE_UPGRADES_TURBO: "Turbo",
    INSIDE_STATS: "Statistika i stanje vozila",
    INSIDE_STATS_HANDLING: "Upravljivost",
    INSIDE_STATS_ACCELERATION: "Ubrzanje",
    INSIDE_STATS_BRAKES: "Kočnice",
    INSIDE_STATS_BODY: "Stanje karoserije",
    INSIDE_STATS_ENGINE: "Stanje motora",
    INSIDE_STATS_FUEL: "Nivo goriva",
    INSIDE_STATS_SPEED: "Brzina",
    INSIDE_STATS_SCORE: "Ukupan rezultat",
    INSIDE_STATS_SCORE_TEXT: " SCORE",

    SEARCH_BUTTON: "Pretraga",

    CURRENCY_SYMBOL: "$",
    KEYS_NO_KEYS: "You haven't given out any keys.",
    KEYS_REMOVE: "Remove key",
    KEYS_SEARCH: "Name or vehicle plate",
    KEYS_FOOTER: ["Total of ", " keys"],

    ACTIONBAR_TEXT: ["You have", "chance(s) left."]
  },
  CUSTOM: {
    LOADING: "",

    FINANCE_BUTTON: "",
    FINANCE_TITLE: "",
    FINANCE_LEFT: "",
    FINANCE_LAST_PAYMENT: "",
    FINANCE_NEXT_PAYMENT: "",
    FINANCE_ACTION: "",
    FINANCE_DESCRIPTION: "",
    FINANCE_SUBMIT: "",
    FINANCE_CLOSE: "",
    FINANCE_LESS_THAN_ZERO: "",
    FINANCE_INVALID_AMMOUNT: "",

    TRANSFER_BUTTON: "",
    TRANSFER_TITLE: "",
    TRANSFER_TO: "",
    TRANSFER_DESCRIPTION: "",
    TRANSFER_SUBMIT: "",
    TRANSFER_CLOSE: "",
    TRANSFER_INVALID_ID: "",

    IMPOUND_CIV_NOTIFICATION: "",
    IMPOUND_SELECT: "",
    IMPOUND_SPAWN: "",
    IMPOUND_RETURN: "",
    IMPOUND_NOTIFICATION: "",
    IMPOUND_TIME: "",

    OUTSIDE_TAKEOUT: "",
    OUTSIDE_RETURN: "",
    OUTSIDE_ENGINE: "",
    OUTSIDE_FUEL: "",
    OUTSIDE_BODY: "",
    OUTSIDE_IMPOUND_NO_VEHICLES: "",
    OUTSIDE_NO_VEHICLES: "",
    OUTSIDE_SEARCH_PLACEHOLDER: "",
    OUTSIDE_TOTAL_VEHICLES: "",

    INSIDE_UPGRADES: "",
    INSIDE_UPGRADES_ENGINE: "",
    INSIDE_UPGRADES_BRAKES: "",
    INSIDE_UPGRADES_SUSPENSION: "",
    INSIDE_UPGRADES_TRANSMISSION: "",
    INSIDE_UPGRADES_TURBO: "",
    INSIDE_STATS: "",
    INSIDE_STATS_HANDLING: "",
    INSIDE_STATS_ACCELERATION: "",
    INSIDE_STATS_BRAKES: "",
    INSIDE_STATS_BODY: "",
    INSIDE_STATS_ENGINE: "",
    INSIDE_STATS_FUEL: "",
    INSIDE_STATS_SPEED: "",
    INSIDE_STATS_SCORE: "",
    INSIDE_STATS_SCORE_TEXT: "",

    SEARCH_BUTTON: "",

    CURRENCY_SYMBOL: "",
    KEYS_NO_KEYS: "",
    KEYS_REMOVE: "",
    KEYS_SEARCH: "",
    KEYS_FOOTER: [" ", " "],

    ACTIONBAR_TEXT: ["", ""]
  },
};