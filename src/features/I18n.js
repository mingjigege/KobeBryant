const { JsonI18n } = require("../../libraries/Config");
const { config } = require("./Config");

const zh_CN = {
    "kobe.login": "牢大已登机，开始处理事件",
    "kobe.disconnect": "牢大坠机了，请联系牢大启动复活赛",
    "kobe.websocketError": "连接发生故障，牢大正在肘击飞机",
    "kobe.parseError": "无法解析信息！",
    "kobe.readingConfig": "正在读取配置文件...",
    "kobe.closing": "牢大正在坠机...",
    "kobe.unknownCommand": "未知的命令：{1}。请检查命令是否存在，以及您对它是否拥有使用权限。",
    "kobe.reloaded": "牢大已重载",
    "kobe.debug.enable": "牢大已进入调试模式",
    "kobe.debug.disable": "牢大已离开调试模式",
    "kobe.plugin.loading": "正在加载插件 {1} ...",
    "kobe.plugin.loaded": "插件 {1} 加载完成",
    "kobe.plugin.load.failed": "插件 {1} 加载失败",
    "kobe.plugin.nameMismatch": "无法加载插件 {1}，文件夹名称和 manifest.json 不一致！",
    "kobe.command.error.commandExists": "命令 {1} 已存在，无法重复注册！",
    "kobe.plugins.info": "当前牢大加载了 {1} 个插件：",
    "kobe.command.execute.error": "执行命令时发生错误："
}

const I18n = new JsonI18n("./lang/", "zh_CN");
I18n.loadLanguage("zh_CN", zh_CN);
I18n.setDefaultLanguage("zh_CN");
I18n.chooseLanguage(config.get("language"));

function tr(lang, param = []) {
    return I18n.translate(lang, param);
}

module.exports = { I18n, tr };