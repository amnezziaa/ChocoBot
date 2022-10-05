const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const paginationEmbed = require("../utils/paginate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Une commande qui les donne toutes !")
    .setDMPermission(false),
  aliases: ["h"],
  async execute({ client: client, unifiedInteraction: unifiedInteraction }) {
    const avatarUrl = `${unifiedInteraction.user.id}/${unifiedInteraction.user.avatar}`;

    const help1 = new MessageEmbed()
      .setColor("#F8F70E")
      .setAuthor({
        name: `Commandes Basiques`,
        iconURL: `https://cdn.discordapp.com/avatars/${avatarUrl}.jpeg`,
      })
      .setDescription("Format type : `c![commande]`.")
      .addFields(
        { name: "`Hocobo`", value: "Me fait apparaître !" },
        {
          name: "`Ratio [mention de la personne voulue]`",
          value: `Ratio la personne mentionnée !`,
        },
        { name: "`Ounterratio`", value: `Contre le ratio ennemi !` },
        {
          name: "`Meilleurmove`",
          value: `Le piii, le meill, Le meilleurrrrrr moooveeeeeee !`,
        },
        {
          name: "`Hocoball / ball [question ?]`",
          value: `Une question ? Demandez à la boule magique !`,
        },
        { name: "`Um`", value: `N'utilisez pas cette commande pitié 😳.` },
        {
          name: "`Counting / count [help] [lb]`",
          value: `Permet de commencer une chaîne de counting ou de regarder le leaderboard associé.`,
        }
      );
    const help2 = new MessageEmbed()
      .setColor("#F8F70E")
      .setAuthor({
        name: `Commandes Banquières`,
        iconURL: `https://cdn.discordapp.com/avatars/${avatarUrl}.jpeg`,
      })
      .setDescription("Format type : `c![commande]`.")
      .addFields(
        {
          name: "`Balance / bl / bal / b [mention de la personne voulue (optionnel)]`",
          value:
            "Permet de consulter votre solde de ChocoCoins ainsi que celui des autres !",
        },
        {
          name: "`Leaderboard / lb`",
          value: `Affiche le leaderboard global des chococoins !`,
        },
        {
          name: "`Daily / d`",
          value: `Vous permet de récolter des ChocoCoins chaque jour !`,
        },
        {
          name: "`Rob [mention de la personne voulue]`",
          value: `Permet de voler les ChocoCoins d'un utilisateur ou l'inverse.... !`,
        },
        {
          name: "`Bet [somme mise en jeu]`",
          value: `Lancement d'un dé, soit la somme misée est doublée soit elle est perdue à jamais !`,
        }
      );
    const help3 = new MessageEmbed()
      .setColor("#F8F70E")
      .setAuthor({
        name: `Commandes Osu!`,
        iconURL: `https://cdn.discordapp.com/avatars/${avatarUrl}.jpeg`,
      })
      .setDescription("Format type : `c![commande]`.")
      .addFields(
        {
          name: "`OsuLink / olink / ol [ID de joueur osu]`",
          value:
            "Permet de lier votre compte osu à votre compte discord afin d'utiliser les autres commandes !",
        },
        {
          name: "`OsuProfile / opr / osu [nom de joueur osu / id de joueur osu (optionnel)]`",
          value: `Affiche votre profil ou celui de la personne donnée !`,
        },
        {
          name: "`Recent / r / rs [nom de joueur osu / id de joueur osu (optionnel)]`",
          value: `Affiche votre dernier score osu en date ou celui de la personne donnée !`,
        }
      );

    let pages = [help1, help2, help3];

    let emojis = ["⬅️", "➡️"];

    paginationEmbed(unifiedInteraction, pages, emojis, 60000);
  },
};
