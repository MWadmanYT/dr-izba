exports.run = (client, message, prefix) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setTitle("Список команд")
    .setFooter("Ваш бот - Дружелюбная изба. Версия - 1.1.3", client.user.avatarURL)
    .setDescription("Запомните!\n[] - Не обязательный агрумент\n<> - Обязательный агрумент")
    .addField("Администрирование", "**Бан** __*<упоминание>*__ __*<причина>*__ - Бан кого-то\n**Кик** __*<упоминание>*__ __*<причина>*__ - Кик кого-то\n**Мут** __*<упоминание>*__ __*<время>*__ - Ограничение чата кому-то на какое-то время\n**Картинка** __*<добавить>*__ __*<поцелуй/объятие/пинок/удар>*__ __*<ссылка>*__ - добавляет в базу данных вашу картинку/гифку к соответствующей категории")
    .addField("Система ранкинга", "**Топ** - узнать топ-10 пользователей по очкам\n**Профиль** - Узнать информацию о себе")
    .addField("Пользовательская информация", "**Аватар** __*[упоминание]*__ - Аватар какого-либо человека(или себя)\n**Инфо** - Просмотр даты создания аккаунта")
    .addField("Фан", "**Кубик** __*<число>*__ - Выдача рандомного числа в пределах указанного\n**ppap** - Мем с PPAP\n**Поцеловать/обнять/пнуть/ударить** __*[упоминание]*__ - Поцеловать/обнять/пнуть/ударить кого-либо")
    .addField("Остальное", "**Помощь** - Мои команды")
    .setColor("ffda8b");
    message.channel.send(embed);
    console.log('Команда "помощь" использована пользователем ' + message.author.username + '. Результат - успешно');
};