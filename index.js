const data = [
  {
    jap: "Ondori オンドリ",
    esp: "El gallo",
    src: "https://i.pinimg.com/564x/57/a2/7d/57a27de700e525cd2d626255627ec73f.jpg",
  },
  {
    jap: "Akuma 悪魔",
    esp: "El diablo",
    src: "https://i.pinimg.com/564x/e3/52/a9/e352a9541d5126c62ef6ada2be0a829b.jpg",
  },
  {
    jap: "Josei 女性",
    esp: "La dama",
    src: "https://i.pinimg.com/564x/44/5f/84/445f8450a3db3afa00a16de27bb13a52.jpg",
  },
  {
    jap: "Katorin カトリン",
    esp: "El catrín",
    src: "https://i.pinimg.com/564x/6e/f1/31/6ef131c1063b336c0441041b9ecd1563.jpg",
  },
  {
    jap: "Kasa 傘",
    esp: "El paraguas",
    src: "https://i.pinimg.com/564x/7e/89/d3/7e89d37ce59fe6b7e9a21485453e83e1.jpg ",
  },
  {
    jap: "Ningyo 人魚",
    esp: "La sirena",
    src: "https://i.pinimg.com/564x/43/83/b7/4383b75af0192912b20acec790f24a70.jpg",
  },
  {
    jap: "Kaidan 階段",
    esp: "La escalera",
    src: "https://i.pinimg.com/564x/91/e7/99/91e799eaf33da4155f94b5e8ceca801a.jpg",
  },
  {
    jap: "Botoru ボトル",
    esp: "La botella ",
    src: "https://i.pinimg.com/564x/35/35/2d/35352d6b5604159b8379cf3d8ff49d58.jpg",
  },
  {
    jap: "Bareru バレル",
    esp: "El barril",
    src: "https://i.pinimg.com/564x/db/96/40/db9640ac71a8dd1e4be420af23ee24f3.jpg",
  },
  {
    jap: "Ki 木",
    esp: "El árbol",
    src: "https://i.pinimg.com/originals/dc/f8/89/dcf88996e543103be14da39de0f00809.png",
  },
  {
    jap: "Meron メロン",
    esp: "El melón",
    src: "https://i.pinimg.com/564x/4b/d0/a2/4bd0a2c8e46906e01a2c1d3fbc5f639f.jpg",
  },
  {
    jap: "Yūkan'na 勇敢な",
    esp: "El valiente",
    src: "https://i.pinimg.com/564x/3a/29/47/3a2947ac0d0a2dc30bb53edc366f6fff.jpg",
  },
  {
    jap: "Chīsana bōshi 小さな帽子",
    esp: "El gorrito",
    src: "https://i.pinimg.com/564x/15/69/13/15691325ae9f234262b9969dc0331a2a.jpg",
  },
  {
    jap: "Shi 死",
    esp: "La muerte",
    src: "https://i.pinimg.com/564x/d8/ba/3a/d8ba3a21b4a9d37e3272119142faef74.jpg",
  },
  {
    jap: "Nashi 梨",
    esp: "La pera",
    src: "https://i.pinimg.com/564x/e9/a3/41/e9a3410582175ee2089a18a17644f339.jpg",
  },
  {
    jap: "Kokki 国旗",
    esp: "La bandera",
    src: "https://i.pinimg.com/564x/de/3b/65/de3b65d07e9402410fde3d4f0110170b.jpg",
  },
  {
    jap: "Bandoron バンドロン",
    esp: "El bandolón",
    src: "https://i.pinimg.com/564x/cd/c3/2f/cdc32f26c628d024c600c6b8875a11c7.jpg",
  },
  {
    jap: "Chero チェロ",
    esp: "El violoncello",
    src: "https://i.pinimg.com/564x/3d/2e/ff/3d2efff43652610bf903b8bd5e0cdb52.jpg",
  },
  {
    jap: "Sagi サギ",
    esp: "La garza",
    src: "https://i.pinimg.com/564x/a5/9b/cc/a59bcc625dd934fdd41ffff226b5819c.jpg",
  },
  {
    jap: "Tori 鳥",
    esp: "El pájaro",
    src: "https://i.pinimg.com/564x/e9/60/47/e96047bfa48e48eb3e9248f7f903ccf8.jpg",
  },
  {
    jap: "Te 手",
    esp: "La mano",
    src: "https://i.pinimg.com/originals/1e/e5/8a/1ee58ad2dd4c8e29d70c5637575e72c9.jpg",
  },
  {
    jap: "Būtsu ブーツ",
    esp: "La bota",
    src: "https://i.pinimg.com/564x/32/0d/6d/320d6ddeee8880280f937b83fb49ccf8.jpg",
  },
  {
    jap: "Tsuki 月",
    esp: "La luna",
    src: "https://i.pinimg.com/originals/e8/d7/af/e8d7afdab89e45e26cdf40e382fb2b01.jpg",
  },
  {
    jap: "Ōmu オウム",
    esp: "El cotorro",
    src: "https://i.pinimg.com/originals/51/68/ce/5168ceea2ac69793e5f3bd2676419f79.jpg",
  },
  {
    jap: "Yopparai 酔っぱらい",
    esp: "El borracho",
    src: "https://i.pinimg.com/564x/1e/88/c2/1e88c2bf701f9a0b66a63eb89bf42b07.jpg",
  },
  {
    jap: "Kuroi 黒い",
    esp: "El negrito",
    src: "https://i.pinimg.com/564x/46/6c/d3/466cd33da86bc6664b9398ab42296cfc.jpg",
  },
  {
    jap: "Shinzō 心臓",
    esp: "El corazón",
    src: "https://i.pinimg.com/564x/73/6d/aa/736daaa83aa4fbdf718569e530f56847.jpg",
  },
  {
    jap: "Suika スイカ",
    esp: "La sandía",
    src: "https://i.pinimg.com/originals/47/60/e1/4760e1ee081af5bf30f0f363a7380bc3.jpg",
  },
  {
    jap: "Doramu ドラム",
    esp: "El tambor",
    src: "https://i.pinimg.com/originals/b2/66/d1/b266d102e4b975f7a8284d32c593219c.jpg",
  },
  {
    jap: "Ebi 海老",
    esp: "El camarón",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7720189d-0575-4f8a-83bc-82e8184a2644/d63zaxw-a4d7843c-4fa4-424a-b136-e6d70bf95986.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3MjAxODlkLTA1NzUtNGY4YS04M2JjLTgyZTgxODRhMjY0NFwvZDYzemF4dy1hNGQ3ODQzYy00ZmE0LTQyNGEtYjEzNi1lNmQ3MGJmOTU5ODYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59H_HoSO_u-xinSdEpzRoNPl8JbITQyp40uY9ZYJfnc",
  },
  {
    jap: "Yajirushi 矢印",
    esp: "Las flechas",
    src: "https://i.pinimg.com/564x/1e/fe/7a/1efe7a65ccdf809ce7381a9bf681797a.jpg",
  },
  {
    jap: "Ongakuka 音楽家",
    esp: "El músico",
    src: "https://i.pinimg.com/564x/a9/10/4e/a9104e85144fdc105e659a583b377ff3.jpg",
  },
  {
    jap: "Kumo クモ",
    esp: "La araña",
    src: "https://i.pinimg.com/originals/fd/a6/c6/fda6c6a0846677270f43c1278d0de817.jpg",
  },
  {
    jap: "Heitai 兵隊",
    esp: "El soldado",
    src: "https://i.pinimg.com/564x/85/2e/c8/852ec8cb8c16bb8cf6dadde1a6638218.jpg",
  },
  {
    jap: "Sutā スター",
    esp: "La estrella",
    src: "https://i.pinimg.com/564x/b3/31/0e/b3310e0ee1e2144c83f93e30ebdd5993.jpg",
  },
  {
    jap: "Furaipan フライパン",
    esp: "El cazo",
    src: "https://i.pinimg.com/564x/ca/1f/d2/ca1fd291a49c3bf46ad310bae61bc48a.jpg",
  },
  {
    jap: "Sekai 世界",
    esp: "El mundo",
    src: "https://i.pinimg.com/564x/7c/09/c7/7c09c789f50d8e99dbd73285bc706b35.jpg",
  },
  {
    jap: "Apatchi アパッチ",
    esp: "El apache",
    src: "https://i.pinimg.com/564x/54/50/97/545097e4784e6ec48fa7ce55f84eab59.jpg",
  },
  {
    jap: "Noparu ノパル",
    esp: "El nopal",
    src: "https://i.pinimg.com/564x/f8/8a/1b/f88a1b9b7001a53ea776084619121f9a.jpg",
  },
  {
    jap: "Sasori サソリ",
    esp: "El alacrán",
    src: "https://i.pinimg.com/originals/f0/f9/7f/f0f97f7bcd3a5dbc39e7d7a9170b95e4.jpg",
  },
  {
    jap: "Bara バラ",
    esp: "La rosa",
    src: "https://i.pinimg.com/564x/3b/36/27/3b36270d440710da4d6565f2abb7ae7d.jpg",
  },
  {
    jap: "Zugaikotsu 頭蓋骨",
    esp: "La calavera",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6203615-c865-4128-8750-360132795620/d5gtgh7-5fe3eaf2-6ec1-4899-a7f8-a5379ede7a73.jpg/v1/fill/w_900,h_1276,q_75,strp/skull_colorful_red_by_igoingwestart_d5gtgh7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3NiIsInBhdGgiOiJcL2ZcL2U2MjAzNjE1LWM4NjUtNDEyOC04NzUwLTM2MDEzMjc5NTYyMFwvZDVndGdoNy01ZmUzZWFmMi02ZWMxLTQ4OTktYTdmOC1hNTM3OWVkZTdhNzMuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QI_Zn1yRTVxpv8jFffZt7MmNC1lrjD5Pg61F6T7lAk0",
  },
  {
    jap: "Beru ベル",
    esp: "La campana",
    src: "https://i.pinimg.com/originals/30/c0/3e/30c03ef44d7070bb00e163152bc9a660.jpg",
  },
  {
    jap: "Kantarīto カンタリート",
    esp: "El cantarito",
    src: "http://1.bp.blogspot.com/-ZwJj78IoY3I/UBd6QpXWZKI/AAAAAAAAAgI/rhZXY2Rfzm0/s1600/WaterPitcherLoteria.jpg",
  },
  {
    jap: "Shika 鹿",
    esp: "El venado",
    src: "https://64.media.tumblr.com/36e8a2799a4daec05b626c5be6d63c41/tumblr_od23jzjcC11rg8u4jo1_r1_1280.png",
  },
  {
    jap: "Taiyō 太陽",
    esp: "El sol",
    src: "https://i.pinimg.com/originals/c8/f1/f7/c8f1f77d5e2cb280c071193261411110.jpg",
  },
  {
    jap: "Ōkan 王冠",
    esp: "La corona",
    src: "https://64.media.tumblr.com/bf97074a4f3785dc4fb4a67a8ea6d87e/tumblr_pzj9cpoLA91sjsbvyo1_1280.jpg",
  },
  {
    jap: "Bōto ボート",
    esp: "La chalupa",
    src: "https://i.pinimg.com/564x/39/b1/fb/39b1fb1498d94e878b375d8818a3fd6c.jpg",
  },
  {
    jap: "Matsu 松",
    esp: "El pino",
    src: "https://i.pinimg.com/564x/e1/b7/30/e1b730cb57f9d76e6b52dc3346321d23.jpg",
  },
  {
    jap: "Sakana 魚",
    esp: "El pescado",
    src: "https://i.pinimg.com/564x/46/61/e4/4661e43bfd9195f5cf5419c26438ee92.jpg",
  },
  {
    jap: "Yashinoki ヤシの木",
    esp: "La palma",
    src: "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/palm-tree-and-view-east-john-clark.jpg",
  },
  {
    jap: "Uekibachi 植木鉢",
    esp: "La maceta",
    src: "https://shariblaukopf.files.wordpress.com/2012/07/twokindsofbasil.jpg",
  },
  {
    jap: "Hāpu ハープ",
    esp: "El arpa",
    src: "https://i.pinimg.com/originals/75/50/0b/75500bd88c86833f3c64b769d5d197de.jpg",
  },
  {
    jap: "Kaeru カエル",
    esp: "La rana",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c18b152-1140-4bd9-9815-bc9422f7df52/d7gnlxa-0b092f50-e105-445a-b2bb-7f724512c37c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjMThiMTUyLTExNDAtNGJkOS05ODE1LWJjOTQyMmY3ZGY1MlwvZDdnbmx4YS0wYjA5MmY1MC1lMTA1LTQ0NWEtYjJiYi03ZjcyNDUxMmMzN2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RMSdXXWr3mSJCY9IvL1To7fMfzL18O5tnapjlp9IP5g",
  },
];

const imgData = [
  { src: "img/el alacran.png" },
  { src: "img/el apache.png" },
  { src: "img/el arbol.png" },
  { src: "img/el arpa.png" },
  { src: "img/el bandolon.png" },
  { src: "img/el barril.png" },
  { src: "img/el borracho.png" },
  { src: "img/el camaron.png" },
  { src: "img/el cantarito.png" },
  { src: "img/el catrin.png" },
  { src: "img/el cazo.png" },
  { src: "img/el corazon.png" },
  { src: "img/el cotorro.png" },
  { src: "img/el diablo.png" },
  { src: "img/el gallo.png" },
  { src: "img/el gorrito.png" },
  { src: "img/el melon.png" },
  { src: "img/el mundo.png" },
  { src: "img/el musico.png" },
  { src: "img/el negrito.png" },
  { src: "img/el nopal.png" },
  { src: "img/el pajaro.png" },
  { src: "img/el paraguas.png" },
  { src: "img/el pescado.png" },
  { src: "img/el pino.png" },
  { src: "img/el sol.png" },
  { src: "img/el soldado.png" },
  { src: "img/el tambor.png" },
  { src: "img/el valiente.png" },
  { src: "img/el venado.png" },
  { src: "img/el violoncello.png" },
  { src: "img/la arana.png" },
  { src: "img/la bandera.png" },
  { src: "img/la bota.png" },
  { src: "img/la botella.png" },
  { src: "img/la calavera.png" },
  { src: "img/la campana.png" },
  { src: "img/la chalupa.png" },
  { src: "img/la corona.png" },
  { src: "img/la dama.png" },
  { src: "img/la escalera.png" },
  { src: "img/la estrella.png" },
  { src: "img/la garza.png" },
  { src: "img/la luna.png" },
  { src: "img/la maceta.png" },
  { src: "img/la mano.png" },
  { src: "img/la muerte.png" },
  { src: "img/la palma.png" },
  { src: "img/la pera.png" },
  { src: "img/la rana.png" },
  { src: "img/la rosa.png" },
  { src: "img/la sandia.png" },
  { src: "img/la sirena.png" },
  { src: "img/las flechas.png" },
];

const colorsData = [
  "#21292b",
  "#0B6E4F ",
  "#2B4162",
  "#721817",
  "  #FA9F42  ",
  " #5dade2 ",
  " #D991BA ",
  " #820263 ",
  " #7B506F ",
  " #2D1E2F ",
];

console.log(data, "data");
/*
const CardElement = () => {
  const [state, setState] = React.useState(0);
  const [color, setColor] = React.useState(0);
  const changeColor = () => {
    setColor(() => color + 1);
    console.log(color % 10);
  };

  const capture = () => {
    window
      .html2canvas(document.getElementById("card"), { allowTaint: true })
      .then((canvas) => {
        document.body.appendChild(canvas);
      });
  };

  React.useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("card")
        .style.setProperty("--bg-color", colorsData[color % 10]);
    }, 300);
  }, [color]);
  return (
    <div id="card" className="card">
      <p className="card-text">{data[state].jap}</p>
      <img className="card-image" src={data[state].src} crossorigin />
      <p className="card-text">{data[state].esp}</p>
      <button
        className="btn"
        onClick={() => {
          setState(state + 1);
        }}
      >
        +1
      </button>
      <button
        className="btn1"
        onClick={() => {
          changeColor();
        }}
      >
        +1 color
      </button>
      <button
        className="btn2"
        onClick={() => {
          capture();
        }}
      >
        +1 capture
      </button>
    </div>
  );
};
*/
const BigCard = () => {
  const capture = () => {
    window.scrollTo(0, 0);
    window
      .html2canvas(document.getElementById("bigCard"), {
        allowTaint: true,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
      })
      .then((canvas) => {
        document.body.appendChild(canvas);
      });
  };
  //function that takes an amount and list parameters then returns an array containing that amount of random items from the list without repetitions
  const randomObjects = (amount, list) => {
    let randomItems = [];
    while (randomItems.length < amount) {
      let newItem = list[Math.trunc(Math.random() * (list.length - 1))];
      randomItems.unshift(newItem);
      if (randomItems.length > 0) {
        for (let i = 1; i < list.length - 1; i++) {
          if (randomItems[i] == newItem) {
            randomItems.splice(i, i);
          }
        }
      }
    }
    return randomItems;
  };

  let newArray = randomObjects(16, imgData);
  return (
    <div id="bigCard" className="bigCard">
      {newArray.map((e, index) => {
        return (
          <img src={e.src} key={e.src + index} className="card-image"></img>
        );
      })}
      <button
        className="btn2"
        onClick={() => {
          capture();
        }}
      >
        +1 capture
      </button>
    </div>
  );
};

ReactDOM.render(<BigCard />, document.getElementById("body"));
