const textSelect = [
  {
    id: "1",
    text: "Unrated: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "2",
    text: "Competitive: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "3",
    text: "Swiftplay: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "4",
    text: "Spike Rush: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "5",
    text: "DeathMacth: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "6",
    text: "Escalation: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "7",
    text: "Team DeathMacth: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "8",
    text: "Premier: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
  {
    id: "9",
    text: "Custom Game: Standard VALORANT gameplay. Swap between attacking and defending sites. first to 13 rounds wins.",
  },
];

function selectMode() {
  const selectMode = document.querySelector(".text-select");
  selectMode.innerText = textSelect[0].text;

  textSelect.forEach((item) => {
    document.getElementById(item.id).addEventListener("click", () => {
      selectMode.innerText = item.text;
    });
  });

  return selectMode;
}

selectMode();
