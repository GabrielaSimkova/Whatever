

const optionsTeasing = [
  "Kouřila bych tě pod stolem.",
  "Baví mě přirážet, když mi to děláš zezadu.",
  "Chci zas cítit, jak jsi tvrdej!",
  "Necháš mi ho postavit se v mé puse?",
  "Mám chuť na tvůj krk. Znásilnila bych ho.",
  "Hezky špičkou jazyka bych ti jela po celém krku. Až k uchu, políbila ho a zavdzychla.",
  "Vzpomněla jsem si, jak ses mi v práci na schodech udělal do pusy.",
  "Chtěla bych, abys mě lízal.",
  "Strčila bych si prsty do své važajny, abych ti dala ochutnat, jak jsem na tebe nadržená.",
  "Hmm, co by se asi dělo, kdybych ti sáhla do rozkroku? Anebo se o něj nechtěně otřela svým zadkem.",
  "Vzpomeň si, jak jsi mi postříkal važajnu!",
  "Jednou jsem se udělala nad tím, jak vedle mě klečíš, já tě kouřím a ty mě prstíš.",
  "Představ si, jak mi mačkáš prsa.",
  "Ten pocit, když ho do mě poprvé celého pomalu zasuneš...",
  "Chytla bych tě za tvůj ztopořený penys! A zasunula si ho do mojí mega vlhký važajny.",
  "Chtěla bych, aby se mi postavil v puse.",
  "Mmmm, jak jsi mi to pomalu dělal zezadu před zrcadlem...",
  "Tvoje prsty v mojí vlhký važajně...",
  "Jak by sis mě položil na stůl?",
  "Jsi ochránce a dobyvatel mé važajny, vrrr.",
  "Ty chvíle, kdy tě musím očima prosit, abys mi ten svůj totálně ztopořenej penis zasunul na max...",
  "Vzrušuje mě představa, jak přede mnou sedíš nahý, s tvrdým pérem, který ti v sexy šatech začnu kouřit. V šatech, pod kterými nemám kalhotky, takže bych si na tebe mohla rovnou sednout.",
];

const optionsÚkol = [
  "Najdi si porno, kde to dělají dvě buchty. Pošli mi ho a uděláme se nad ním oba!",
  "Nečum. Ahahahahaha.",
  "Vím, že bys mi to chtěl dělat. Napiš mi jak!",
  "Najdi si nějaké porno a představuj si, že ta holka jsem já. Je jedno, jestli to bude blowjob, dvě holky nebo stuck step-sister. Vyber si, na co budeš mít chuť!",
  "Hoň si ho nad představou, jak se mi uděláš do pusy. Nebo na celý obličej? Prsa?",
  "Zeptej se mě, nad čím jsem si to naposledy dělala. Udělej se nad tím samým!",
  "Najdi nějaké sexy prádlo, ve kterém bys mě chtěl ojet.",
  "Ležím před tebou, polonahá, kompletně odevzdaná, co se mnou uděláš?",
  "MASTERBATING BAN - Dnes žádné honění!",
  "Ty chceš honit beze mě? 🥺",
  "Odejdi.",
  "Vymysli mi úkol ty! Třeba nad čím si to mám dnes dělat.",
  "Najdi nám nějakou novou sexuální pozici, zkus https://sexpositions.club (sorry, tady ještě neumím url link a nejspíš i zarovnání).",
  "Představuj si, jak ležím na břiše, ty mě trápíš a nechceš ho do mě zasunout. Jsem zoufalá a ty si užíváš ten pocit nadřazenosti!",
];

const getRandomIndex = (options) => {
  const optionsLength = options.length;
  return Math.floor(Math.random() * optionsLength);
};

const teasingElement = document.getElementById("teasing");
const úkolElement = document.getElementById("úkol");
const textElement = document.getElementById("text");

teasingElement.onclick = () => {
  const randomOptionsIndex = getRandomIndex(optionsTeasing);
  textElement.innerHTML = optionsTeasing[randomOptionsIndex];
};

úkolElement.onclick = () => {
  const randomOptionsIndex = getRandomIndex(optionsÚkol);
  textElement.innerHTML = optionsÚkol[randomOptionsIndex];
};
