'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2dc676e22afedb14a8c85f7571d2c31b",
".git/config": "d363c13749fa7ef00dd8af09902499f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f349a0d69bd363c20407f10aa021cc1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "198bb82c41bb351ced8949a45f81c66f",
".git/logs/refs/heads/main": "5d3977887e31320384e1ea324f8e205c",
".git/logs/refs/remotes/origin/main": "46a1cc4b9cbe8abd4c2cb88ea20a190b",
".git/objects/03/6da82966d1d653983de83db5abc001d3671ce7": "81d5444d166ee7850da9bd341d40bc57",
".git/objects/03/c1c6de4ae9a3680796a3973e30d5a052ecd230": "94be6c0499e38fad527ee9c2dcfa87b7",
".git/objects/04/68968a8b4d8a13684be2520fb6f438e019046a": "15e69e885d718619f58e7f4ffdbbf726",
".git/objects/04/c55e1783331b95304b921f3cebab6f38282784": "1bf828c163b669f7e188f8d1b95c35d2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/ad5a6c475af7254253e172cb374343d501f333": "076ebcccef54c68d77b29fc0264aabb1",
".git/objects/06/1e4b23c506b347feed49889e1f1648a30cec9a": "69453d62c6de273d318985a6c0549701",
".git/objects/07/320345c69bab7c3a1d8036a64042c1c7fa895c": "93415ead24108e3cbf1ec87480df2054",
".git/objects/07/7f371c7ac57210ac9784ef9dddb4d65eae470f": "1446cd1a6013650b21bebbbca77a3524",
".git/objects/0c/4a9397fca90e996fb02cea0d37520931fcdddc": "eb02e8fe5cd4595d13d428e7d948d435",
".git/objects/0c/ca439c58ef25677f18d526bca36adf7ef185cf": "72a1298a06e8c1d42b2f635bb41e52ef",
".git/objects/0c/fd0ece4876b2c697ee2e01da06c1115643eeab": "6d39bfbb6d603734359ddf8606b55ee0",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/367674eeedb8da8a965c0df5b32334739bde41": "7f04137c236f64611d727035023c6736",
".git/objects/12/57d288503345624658b49868867c5409a9917f": "4b3992e5f0b46a835f68229d5aeb4253",
".git/objects/13/0cb8b1b6cb7676f3babbaafea61fe5859a52f4": "d3e5aeeb2b7c70f7bbfb33d62bf20ed4",
".git/objects/13/8251ff03380687bcde5b263fcf37b323f7d42c": "3459a01e73ac9f8c81cf566952803a3c",
".git/objects/14/6ccdd607df0e0bdbf6947884927dd7e143e008": "ab4136eecd059e1547340fde242ffea4",
".git/objects/15/3c9e14c1076ea8f5e64a93472ebed0fdeef0ee": "5272539cea7a798b0757f2e5ad6872a0",
".git/objects/15/91b8119fe8a2754de5e480aa017c77ee6ffb33": "f6310a6646f2334c6ebdaf51be5ba3f6",
".git/objects/15/ef9e4a066cdbfa7d75b314a46cc1fecd84dc75": "22afe7ac64e71a4e09031544c7f9c07d",
".git/objects/15/fcde609002744b22b4869443794d05799bcb80": "e46fbfe52e6f7fc1ea6be9d980a34c5f",
".git/objects/16/ef7bc01d524d000e0c73949546f907c918a373": "0c8acb70078b1a88d76f4335e37e4aca",
".git/objects/18/a71c4f38bb69a5bac2d3b5ca90e646688ecd86": "0f80336c2796c4078c6f56ee87be8d1d",
".git/objects/1b/1b293462d06ab926e0d58fba2e91dac26e560f": "c86b6dd109667cca05e01a27c09793e7",
".git/objects/1b/5b1507dcd7cfdc6d0fa3962835e1eafa5c8c6b": "2d837408406905af3eec10c8eb25f191",
".git/objects/1d/f114736c32e5484443629d1cd9ca744421e84f": "1de152211b94fb7e457dc3efec787d22",
".git/objects/1f/d72d5358405178bedf786635d37354cc8d175f": "fef94ae7097e0c8a8cb7af3209fd0a07",
".git/objects/1f/f1d68556b3a74067028df565f6adc0f7bd76d0": "471c2b7b8b38356f9f82b567fb5c4d22",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/537d51436b39d463726be5840484cf1cbfa49a": "a60d3c1aa355ca4b05dc503e47524101",
".git/objects/28/3b069281786e2df8177de5478c67731208b0d9": "33c36bccf4a5c02cd11c7a176516fa1b",
".git/objects/2a/161c124a4b5f927da2bdee61ac1a23856c6669": "67fdc31520faa067b516d6da76bb1d28",
".git/objects/2b/33aca8791dc0d7165ff1e76c4842fd5dd32e2d": "aa5846470fbf4bc23f44f438ed36383d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/601c98566597fda8344fe3c890200e6599f34c": "8f6447951525038f7c61e59ebb4f8538",
".git/objects/30/cb145ed5da3b34c4ed2cefc2cd6a0d2435d4f9": "f37a2ddde6d24ec844bdc105afefda8a",
".git/objects/30/f088c0ba85b46fa230ac942eed843cb2e4a77c": "95695b1d32e44cc1bf10597e4455c1b6",
".git/objects/31/8d7fb70397ffd70f66761caf2bbdb2b851d4bf": "753128fc0e65776ce1b4f032c985f13a",
".git/objects/32/5c63c698eff9317a74dffd4f505530a1e779bc": "44c5b7a47f45cbe9c5f473bfd10bc38c",
".git/objects/33/db1d55f663c07ff033e3ca2b1cbb6b4ff90ff8": "81a4aec88169242dab86e27b0e1dcd7f",
".git/objects/37/7bb5361d2c9318292788005f53736d557a5444": "0e515b34c4a8e722e732c5f25bba218c",
".git/objects/38/c0926f44769c45148d19fad599bcff994d8522": "b22e1acb079d48c20aa0f4875d769709",
".git/objects/3a/30916018bab3772f530350da363b06c252b6e4": "42bd4c291911fab7d0d560463eec1309",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/7789d8df2972ae2ab0abf7904d2a9ace45dc6e": "09ecb9d1f2ca697f6461012e47fe366e",
".git/objects/3c/d9697e5d75b751479feb96ca5293ea78f4f0a4": "b5e4a0504a3f57a2eb470c6576abcfff",
".git/objects/40/79bed0aca0f4ea07434d067eaae01be6dc7b0f": "0cb98aef27b991f30b0a137376e2e984",
".git/objects/41/0d8dbdd5424a4438641a2a011ab4b8cf57ce23": "dde722ddd5367e1416e9addce8abc322",
".git/objects/41/cec0a56147872526b327b77ed1cbc8682e9b14": "d555d636148e27bfcba2a978dd07a9c1",
".git/objects/41/e39cbf218f2b73b17dfe310ed68956e4643fe8": "be5746bcc56e22fb627b376ad72221e0",
".git/objects/43/18f1ee5d899b0b3b1bb217906f29b35014b572": "ed51e68bcf3513ba37ccb918779be1a0",
".git/objects/43/bdd8c06468df5195bdf47e324e3223acd5d9d4": "aeef11a62a2648179df6e6e66eb3a97e",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/48d69874e21e70e783c90fb47dc0669060b54e": "a047331724595b506120ca2029abc18e",
".git/objects/45/b54df7922434f10328e27fe8dc88ecdc6e0071": "7b028394e46c5a53f4aeef28fa90bf46",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/5c02f290fd1aa4b4a0c7d8ce35beaa2c5fd894": "ac10a071992d4d7c7475d373bfbc7b97",
".git/objects/4d/862f93a068cbaf96fc53d3230ebaa1cebc2d51": "f5789040ad84f55103629c271aa98315",
".git/objects/4f/445c12f66e388baba9ee73d3d0e6c4ef647bb7": "5f5b495512ac9c6912e9e29038866985",
".git/objects/4f/85bbdba91e9a04e417922a6e4c64e50877c5a0": "9d113e8c7dc292bc4c659b452c1ecb77",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/b24e4dd5e766a48217d91dc70a9b36c76b6ae8": "b385a3ba4c69e30d4bbaa519bd3fd384",
".git/objects/50/e44aa6e5f413879d91e7177e5200213cdb299d": "88cd993f305d552f90c0035f6cd5aff6",
".git/objects/51/3163143016a06116d2a9edded728d529a84eb2": "701d12f820e6920eb5f7aef93f46650f",
".git/objects/51/588f4367480e0e178b03d09ab36ce9dab11966": "f3915d6f6de0d43d437e1e8a90a9e7e2",
".git/objects/55/20cf11b70da6a3f878d57652fc663d41b260cd": "78ad7f7f6a969d86ddffe92078a08704",
".git/objects/55/2985a24f3131eb6d64b5aad3113c89c8612bbc": "445d749fcb5d036067f2a22ca8f4968f",
".git/objects/56/43a86d3887160aeb68bd16539d721e08f8b2cb": "582f1afc5b429e7208638aea0b2d5c6e",
".git/objects/57/88af4fa78eb2b17f7b2294333dde56a9cc48d3": "c7f6f95ec1769a9565904ab0e835b1db",
".git/objects/59/f44e54b1c0ab29c10fb1a519284a474fefc30c": "d821e85b7e65677e31b71082118bd907",
".git/objects/5b/0041a8201646bbbb65773f315185d492ec9308": "04009db407a8bf7637c9a4be10b34482",
".git/objects/5b/af01bd27110d56b16ac15a83406e740dbeca33": "ec54b6ac895a94a46823e68d5f2b7af5",
".git/objects/5c/55f96c3ba83548fda55c124071d76a2cd06b98": "0522a57d44788454462d7b211182a477",
".git/objects/5c/bab18aa67f5f8b149d4eac6ec627b0a84820ef": "903da4437dd69a27aab569283c6059c6",
".git/objects/5d/f9015a4d78fef17d98d410dc4854cbb6d2a800": "5bc0bb27b6df53dbee3e8a7071ae53ec",
".git/objects/5e/b63dff6e2d37247fa22dce29048afd2cebfe57": "2858f9f5b8218067ac4959cb1d770f93",
".git/objects/5f/17b54ae0b8ea77a0322ee4f5ac73f41f8f6635": "8b9cc75b38a7c6da48be11dd28333739",
".git/objects/5f/1b42bdbf3629fcfa46ca4c2bc4d08776dce061": "5d77136ffff85e0200c1894c3b066fa5",
".git/objects/60/a7316b1a92c026409683d314f189b6f7153974": "aa1aed7679e12bdd65514b5a4fbec984",
".git/objects/62/0730b5e20b399ab7fa5eae17ee8b46ce135a38": "a41a2628ad4d7bb7cad34ac1fc095014",
".git/objects/63/9af787179739895e7ca16efcfc9bc9d02fbbdd": "1df04b60fb58ead45b786c5567ed7054",
".git/objects/65/46b676e0a94b9af46aa363146d6688417ef944": "3b85aa2d9862ec0ebb1ab295300fcb32",
".git/objects/66/a69cb1850861f675e7ae3e8a650aca116a62a1": "8d3a836560d6c5a15c1662e6c90680ac",
".git/objects/66/c7884a3c22410fa63c9da6490f8042602d6878": "aceec8ea9d18aedd295fc789667f3c97",
".git/objects/67/0d66103bc87fc833b2b785cddaf14e368fb4dc": "7fa8acefaa9e2a3794ae03c19deeac70",
".git/objects/67/65063ed993017c2c3bac2f0b55e7e70537d474": "4dcf3b227392a14691dee55d34da5382",
".git/objects/68/58382255a4eaf664c346ad7d54e0b253e19d5f": "ce0fe32bb16327143f2198bf60c3ef58",
".git/objects/69/0d591701b2ae09c33fe1b487fb7b6d22bf3652": "e878e22820e353e97dc169668fe27bdc",
".git/objects/69/77258fd3c9e29654d1a867bca9f88edadd6dea": "d29721b5434a3283f994ec97deba0ff7",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/8edd0408a09a00a4cd47df55393bacd61416f2": "9717d9c5b2e9bcfb0ccfa21725f87308",
".git/objects/6c/1ec168e557afdbfffa9b2693ee92b44f005959": "7909d97668e0e4b926f2c53bb753775f",
".git/objects/6d/b29d3afa907b67d7c19e18a3c9e3eb95f92315": "7e316cebe51fae0e46c10619e5393250",
".git/objects/71/91be9467d9a76b64b86c4c34e90b7ba32c50cf": "7276174218663d2aafba9ef876ab41dc",
".git/objects/75/3e1faeaac3caf4e49c37754d189ca438527ced": "e0cde156f071221cc0b9f26da4097ca3",
".git/objects/75/52d14b12f6c6b845983559916975d77aba027f": "1f04095bea5c5d3cca76397a01bfc021",
".git/objects/77/1c48c3d770263afdb964226cafcf7f17efdd34": "5a28e33154de26d4438267c64d12b0ee",
".git/objects/77/8da1171bbad40c7ffe9aa66583de82e504931b": "d1002e15bff41796be2424d7551ec994",
".git/objects/77/e864d04f7e810040dc4c6e6bab300bf4175957": "5108dc3338e27c9ac3d8da0671b946c9",
".git/objects/78/c0fda53d445c423a66e1229d09854c8f0f3c5e": "57521ad8d64225f7d8d8f488e80b31b7",
".git/objects/7a/f65eff5054b22f71ba7ead26f420a3ae273085": "48ed57c2a1b1fd65a5dc132a8f420304",
".git/objects/7b/2aad4e963487a89257e04b00248c8be04038ab": "9ffa7c46f162d0b939d084f685b6eef4",
".git/objects/7e/70e7cd34d55884a18d35551d85df5388cf00d5": "bfd7c32fd387aee8ef96c34baf334092",
".git/objects/87/6a45ecb5609dca60ae01f729374ad84529eaef": "1b415affb8843a2ab360154ab319c2fc",
".git/objects/89/ed4eebd3e0705620abd3bcf623eee11cfbb450": "b90d3fc08bb65d7b0dd8f5f22b31addb",
".git/objects/8a/389ccd907137c3d5ff89e40d74885fd21f97b6": "6c407cfdfeaf16d5cf433e93a0580347",
".git/objects/8d/7c1903c77fc7691a2449e8a6df384e11e5e5fc": "fe403d50338fe5515e13d0ebc656ae9d",
".git/objects/91/3d83870e412202e3c00c7dd4271f5b999591b2": "9cebb1b81371eb0a058022865b0044d7",
".git/objects/93/916869cc4a13a8b680d5b3f5a7c5adb238127e": "d08222b63f1dd15b46403768f2ec7148",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/b3ce8fca75218160f8139754446c46e8946498": "e733585106956ccbf72e082c99397009",
".git/objects/98/129fe402f85ad31dfed398c2eff49bb7541ebb": "ffb7278c1ebb202b1a4464e968b4c105",
".git/objects/98/5f916d600e6ce538d283206a3270c454f63f20": "47bae79f59abfcbe16969617ac29cc8f",
".git/objects/98/b9104acda029f9abd58e62d5020abeb5d2b684": "5c5dcd798d4d78e87c1026e6628ceb9e",
".git/objects/99/94f978216cc7b462d30e2a5da45a67f1973889": "04b17e4075bc77a8dd19e5700f069a1f",
".git/objects/99/e1b44df6384a5dbcb14dd732415f2dad86bee4": "75af4d28f9feddd5a66912a0ead158e7",
".git/objects/9c/e37d944c4248e87ef396ec73042554722231ec": "e85464cc5b83b35fe47ad0a5feabb563",
".git/objects/a0/52f094d806b08bb5b41974c82065db939a1612": "46bdcb5c4e2311b93a8c747809f16318",
".git/objects/a1/2712e7eeb842ef046f9e10eb8c9fbb52d85da1": "1554a1de6d3bf0ad72ed1887ad12ba50",
".git/objects/a2/faa747e5604346f3ead86989107abfbaf5a584": "30ecb48b89c0909c5ac1ce0b8f40a716",
".git/objects/a3/947235367382b58c3a8db72b6651b08a01602a": "189843f14344fd689a31c8ffd524d643",
".git/objects/a3/c2aa2b6e292ac08564c6ff146ff0352229b4e3": "4a666e8b03131ceb45fa547c3ac9335b",
".git/objects/a4/536b40ba9c8df350d663a29e51ec4fcaa8c78a": "211935584197f8fbe49f8344c3640223",
".git/objects/a7/acef2beba6780f34c012d7c6bc4f696e78e6e9": "caf10f75adc615e9871350c8b75fe091",
".git/objects/a8/c260c532e5c5b76db2433032894557e6294d85": "280a2c41373c7521dab294c23632abcc",
".git/objects/a9/a81dce2aae21d770d27b610b8b33af86825529": "4a0f0e9a5a39ea333979a86037795335",
".git/objects/a9/e71baf548f92786c860f41ef29bb29aa63240c": "dd1a6237fc03064a9fb083a07f428e43",
".git/objects/aa/55f3a7918d7252263ae8da108e7b49a4d2060e": "861708607328e504cfe7d53b1a8a3f2c",
".git/objects/ac/16f6a065f749407fa84c0d5b9e8939acf4445c": "8a27d81e1f8c0bb407893744d61068a0",
".git/objects/ad/97ec1a37bbc567e643fceb4a58ffa208e17b0e": "ebd91cbfd6c46cd476119cd9698c888f",
".git/objects/b1/0ebc58ed34df1f68225bb7618463d0eb16c8d2": "f34841791085a6d991a1d41019a83091",
".git/objects/b2/d2441af99d4a37af1264876039cd549383c14c": "10effa2c66d2740f1dc4a5fe964f10da",
".git/objects/b2/d3283015665a8341cf2285623cad5259ab73e0": "85c3366e94cb1a8a1836796652e8bb56",
".git/objects/b3/4a60dcb9f601017922859fa11e400c8678bcc3": "4fbaa879483816614619c6c7c345bd22",
".git/objects/b4/6adc7249132882c28caa07b0d30816ce870fb4": "52766d4c2f8324e6831d03da76bafece",
".git/objects/b4/b4e846233df62f23bd2bf10658694a93cfb6cd": "61b5c77303d1e27789132359e0e92828",
".git/objects/b4/e7b9e44dc9447a3a655425118a968dc474c153": "cebfac4aace2ee4fd11d3f3aacdad362",
".git/objects/b5/2425a3369df8f02cd245f2eff56627ff91a8f9": "38405a869368d2cce210f26cc2c4aaaa",
".git/objects/b6/356c1cc26678ca0c35809222ac76e923a0e356": "80d5cd5dc66b89da3239a0ca52b6e4f0",
".git/objects/b7/a03e4cda8675833f86086a69e341660e87a4f5": "cc951f9c65b65585d702e947c2158698",
".git/objects/b7/e3ed0f0b5c01ded77546f4d05a4eac3694fa07": "1f5a70bda8d7931a63f471cfcba1e8bf",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/607d806a29708d2b9c7b92e8991beca7bdd732": "b1873f5dfa7299a95e7cadb515c3bff4",
".git/objects/bb/680a6923b60315ba03e07d43a54d26c72b34ca": "60c19f45b58df1755d39479c43290d01",
".git/objects/bc/0337f511e9482e91b96c68a4d011077865b994": "7c883a5ad28a147e7d87bd12a1b30b3b",
".git/objects/bc/58eba57b766b50212a44c8f8fa4615c714d83c": "cf7390d97306e9eef7a2b7b9c11b7190",
".git/objects/bc/c7483ff6c54903146ec113455ed2a7e102a9ea": "58f4b6a6664bcb834a207b9439fc76b3",
".git/objects/bd/e7c22ee75f8d962f104ae1ff894c96355c7094": "1d7c293da8558212b83e475e943556b6",
".git/objects/bf/095831ab625be5d75253311191d1af4b6c43a4": "a81e739c1fece926127089ee7000ef5c",
".git/objects/c0/9850990799c1a04a41470de791bf6144b2f51a": "2a40079d3f4a3d81390b2b97835d330a",
".git/objects/c0/cd484cbeacceca0fe24eb7fa558328a7f2551b": "51f9d883d94260d42ab6037dffbb101a",
".git/objects/c0/ede0515b85169c8db137469f571f6a599c9cfb": "d36d801fc03485ff90724582dc387e80",
".git/objects/c0/fd440fa382252461e9996ef91a9ac0d265950a": "d3e2288356500ab51142d23006abeb91",
".git/objects/c1/582e74ae2045e10d4caa132eebd8066202e4e8": "65d4bcdd1679d7cf815fa41bd4af0cf4",
".git/objects/c2/3725b448417b57dd41ab4d7289038e18440269": "f8c81c71c630072e79d68eaee68fbb71",
".git/objects/c6/514cc6a09d72600bc06ea4bc98012c4aaec0e2": "4d2714f7baec6773185595f3e0630312",
".git/objects/c6/8a13ba5dc4d17e2bf87a28b7b596aa2b04a3df": "d289e542fc8eb31920738eb63896cdc3",
".git/objects/c8/1b92657748f4b97527ac488974cfaf64c80231": "02d50bd62d05f71f65213dc6d2cce241",
".git/objects/c8/809cdc8e1e6ab1a204a3a38b727539f401ff09": "a1a5e681f18118c05280668a02e0f7bb",
".git/objects/c9/d4cff315eee73482004a5f26ed77d1aec06137": "d069e73f77a298d97b109344ffbb416c",
".git/objects/ca/08f5aaccde56b17c4973d83db29d861c6d8472": "f6a4aaa516c5514c01ac5a013646006b",
".git/objects/ca/3cf311f8cd422ede2f9750b125616a0c4cf027": "3440d8f1ab5ad91623f91a6ae65ebc2b",
".git/objects/ca/f13b77c0b6574e72d3c8c91875500b98f093e3": "1d50006bc6696c47f24c285da840e79b",
".git/objects/cb/034ba2dbd655a06ebf3a83ea4e8e1239ac7070": "efceaca5a440ede6c55ccc76dfe285ec",
".git/objects/cb/5231b29b0770f8a8a7a254059d688d7cea2b28": "8ed07c279baf77dc20b83905c50faa72",
".git/objects/cd/b41a20303c534a9ef4e1703c21dd415eb1dec1": "bee604379de8d30a44d613dc6bfd9fe7",
".git/objects/ce/52c5b10b388e4f9f52a4b57247d030f5dff776": "375f967efcea39cbe0598ea3c54155b4",
".git/objects/d2/c2bed34286dda86d7bb32ebbd703691a9793fc": "50fabc1e7652d2191acadb3e575cc1bd",
".git/objects/d3/bdfe9dd8cf59a0f2276c018f3b0444cb971eaa": "445e01f83b86e502d8d4c7837c3b6e5d",
".git/objects/d4/53dab7549265983aa569887ba14c1e7fd5fe11": "f3c7377d45e65d0f6ea7c64791b8f25e",
".git/objects/d4/e7f3804921d0b11e617e403007e3b779730c0b": "f2710d14661029e7fe9598938db7036a",
".git/objects/d5/ca8eb853fcca48141f82dd23181caaf0359abb": "825ff35cedabd0699002205ba5e1d7fd",
".git/objects/d7/9c6f55089fb7b58feddede711e9124f7a98917": "4e4acb4e55cded7689e2aec655a07192",
".git/objects/d8/c9282a741d72e2265c5f5d17aa65020c22cf9c": "db32191ec37516142c27aaad53805034",
".git/objects/d9/c56f7ff904e581274fd64693c814cec853945f": "690c656054f5d1e1bf4bbede0691f784",
".git/objects/d9/e3e98ffc603ffd81e1afef07e339399487ff29": "e363e90e2e83914ffb3389be6b77d501",
".git/objects/da/c56c12db146465596749706c58a387d7c97ad4": "5af9ea854e80ec6e014efe761c924fff",
".git/objects/db/93744b9924e76ed41b60d76903f811cb39e98d": "0761fb64ff045ac630bd366c282c06de",
".git/objects/dd/9c52907bb69faa52b4eaa4e708dd9d86ed4248": "9ec858987d2d94e409afcbfdb9797477",
".git/objects/dd/ddd066219d9e89b544174ca46e18843e8c29bc": "6f730e2047244814039adf3f8c9736ab",
".git/objects/e2/cdac3664b4676d2ec15494a8db92fe7cc63aa1": "d638a6439813eb65a2e0e8486d8af43e",
".git/objects/e7/c331959b841feb16737985b3e9bcf9b0ba9d45": "389edb167c9a9c737d5d96cdffdba145",
".git/objects/e8/8312b7a8e05d3cae9c3093f6adc011cc85b56d": "c6d4a645bc9fb571b2b362bccdd4f592",
".git/objects/e8/8662835131da687695536414e957f07df422da": "1a82e7888ba2c23b4f961f5ca300d6ea",
".git/objects/eb/60306274be8bb1c59fddfb84c41d17c726e129": "823d51b6f6d204353238f8c07a582bb4",
".git/objects/eb/fbb5c2ad7bcc6d89177c55bedb00b0ff8c49ad": "d3173d00eebeb75ac9620f11c64977aa",
".git/objects/ed/928f5819e96df9f0e90c438becc599953a9239": "6faa2c4dccc60ef66354b49461109af2",
".git/objects/f0/18648c1525e7bdf2dc664ac52edade6dd2b94d": "1feb2ddc463a7a5b7973e68eaeeda124",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/61876b6dd721d5eaa26144ce592e85732434e8": "45c09d066ae81b7d392578f449b45183",
".git/objects/f5/e170744ff58dd9e95fb84a7658ea98b3af9828": "5c283a473cefff1b1f80b1eb07d939a9",
".git/objects/f6/fed8cc436d010eb8e02d72e2a3e7edd630df4f": "6b7b2aebb2edcfa7a6f70764448105a6",
".git/objects/f7/7ea0e4334adb2fb4ab695e6a119cbfabf348a1": "ce6e2000923a40a7b232c5ee8eded326",
".git/objects/f7/8cc4a63bb591fdeeb57bb123c578ed8fab69d3": "3a71d8e8f9990a4973e110ac7df293b4",
".git/objects/f7/d0f41d239e4e7dc22602d385d3ba0e2f1fc2df": "63412fa982050485df1a3fa44cb681ce",
".git/objects/f8/9a7cd4790e1f7197aaeb3b27fff5c3757bbcc5": "43f9f92e413f850933075636e31bed92",
".git/objects/f9/40ecff625a5fe6a1203eed3560c02df53b9eb2": "bd266b239b704f8f1cba63c0e5cfce3f",
".git/objects/f9/6aa9178bf12ad140c562c70e8b98a40e2ce51a": "5d377d5a60c5860c9fba7477384b2f4f",
".git/objects/fa/1912dbe6d176aa96541105553e4566ebef7f16": "9a778692ce6d3becfc4c0ff87ad15504",
".git/objects/fb/aa72ce80e64474d39b46f8893619f3560534a7": "c57273dcab66e701ffa44994a43d3482",
".git/objects/fb/ff5a14154c16b5573007d9cd22f86a5cdc829b": "97671fdc7c194fb32b715e76584a76a3",
".git/objects/fc/27acbd1fef6c8a1f5cd89aa05f3008f2325f60": "94c34e189e481bb15963fc176f697122",
".git/objects/fc/81af2360ed8d23e829b6c55245e1bd545f2470": "37bc936ac44e06ebc13f125fb2155b75",
".git/objects/fd/6bb883d24851fb08272bd93ce9ed92d7feff93": "518acc3d99a226658dbe13f281424d7d",
".git/objects/fe/a156d04c00f8a4c27b174085e48d63a5227d6e": "d2aa16e6096fa261a02ae01a84a4df17",
".git/objects/fe/a79812e66c38fb03d9909ad8e2ed6e6f34abaf": "f150ae27b71290acbbe33b14441ad1fa",
".git/refs/heads/main": "4927dc9c49d58d5bb4e64a921e75985b",
".git/refs/remotes/origin/main": "4927dc9c49d58d5bb4e64a921e75985b",
"assets/AssetManifest.bin": "82422166166772509e628bcc052c55ea",
"assets/AssetManifest.bin.json": "c01bf5d5d7b3c6bdd727e56a13964396",
"assets/AssetManifest.json": "dc7ef94ea8362a603d2dc1c0b7210313",
"assets/assets/images/game_background.png": "36261a63d612c0b90483b0770f2b1874",
"assets/assets/images/game_logo.png": "604ab960d92368b079c020ef493ffcc8",
"assets/assets/images/game_over_bg.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/gate.png": "cca0e66f4bb7be18f78517b90cc74043",
"assets/assets/images/health.png": "753656ed86bc354efcf7ca1e261ea1a8",
"assets/assets/images/intro_background_desktop.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/intro_background_mobile.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/leaderboard_bg.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/trophy.png": "2ecf6a6c938d57eee0215be92cd06d62",
"assets/assets/map/anim/arbuz.png": "88a90d99b565e3e0a8d19aa26a757fed",
"assets/assets/map/anim/arbuz.tsx": "c0a879bfd3932eafca2469a01978a957",
"assets/assets/map/anim/arbuz_idle.png": "b85869e7d4d4aed94cb33292cbcbd24e",
"assets/assets/map/anim/arbuz_idle_new.png": "6bdceeacb403c5e8bd1345dc11d4e1ec",
"assets/assets/map/anim/arbuz_run.png": "85d47a7399ffbeffe8478e14a65ac67c",
"assets/assets/map/anim/arvbspritesheet_dash_jump.png": "15a530e6a25126e2be43f9288a94317f",
"assets/assets/map/anim/spritesh5eet_item_egg.png": "4f4bc2da14f36fe8efb517a1d5d320be",
"assets/assets/map/anim/spritesheet_dash_deathDrown.png": "5c22059a6f6c7255a10893426d836621",
"assets/assets/map/anim/spritesheet_dash_deathDrown.tsx": "d9740badc5006c3bfbc13c689ca2134f",
"assets/assets/map/anim/spritesheet_dash_deathFaint.png": "3989c2ee9ae8a8c892e18ab680f6cc3b",
"assets/assets/map/anim/spritesheet_dash_deathFaint.tsx": "9333035a6ef560095d18401d2cebc41c",
"assets/assets/map/anim/spritesheet_dash_deathPit.png": "a1d94d5863ddc8014a69bc21029dd9f5",
"assets/assets/map/anim/spritesheet_dash_deathPit.tsx": "3cbf386b590ab89c7fc06d6dd837b97b",
"assets/assets/map/anim/spritesheet_dash_edgeGrab.png": "a0cfcbd71ab5bc4514792939fba579ba",
"assets/assets/map/anim/spritesheet_dash_edgeGrab.tsx": "4fd46d50c801a931017290b72ce7d648",
"assets/assets/map/anim/spritesheet_dash_flap.png": "edf38acfdfbbe05de428ffd07c79eacf",
"assets/assets/map/anim/spritesheet_dash_flap.tsx": "8b55ce8a1e41d00baaeedc47e4a7bc76",
"assets/assets/map/anim/spritesheet_dash_idle.png": "a8dd365ed3f4d51072d8c35e1c9538f2",
"assets/assets/map/anim/spritesheet_dash_idle.tsx": "444a425770ecb604a677c2a38fd7e47e",
"assets/assets/map/anim/spritesheet_dash_jump.png": "01acd54753271f34e6d373a73c99b2d9",
"assets/assets/map/anim/spritesheet_dash_jump.tsx": "50a05ab0236e9b8a42ce5b0cd3563edf",
"assets/assets/map/anim/spritesheet_dash_run.png": "c4471c3cc171d1fb49dc74af030606f9",
"assets/assets/map/anim/spritesheet_dash_run.tsx": "daa87e0414f7644a144b4d679753803d",
"assets/assets/map/anim/spritesheet_dash_slide.png": "7de0239821d02b61ab7bd82e8ed0717b",
"assets/assets/map/anim/spritesheet_dash_slide.tsx": "c6470840e0449d72ad9135ce808a1876",
"assets/assets/map/anim/spritesheet_enemy_ant.png": "4d4d0d79339cff64f82ab2d01acd5cec",
"assets/assets/map/anim/spritesheet_enemy_ant.tsx": "c78b9c287c2b48b236364fd0a7c5f04a",
"assets/assets/map/anim/spritesheet_enemy_bee.png": "61ea95300eaae34b3f0c2bfb2e9b149c",
"assets/assets/map/anim/spritesheet_enemy_bee.tsx": "d3db917d6d0173c97a9ad335ba0b433b",
"assets/assets/map/anim/spritesheet_enemy_beetle.png": "c416b1ee54eb937d12e79f90c78d0961",
"assets/assets/map/anim/spritesheet_enemy_beetle.tsx": "a43efc734dc39280d513266c25feb585",
"assets/assets/map/anim/spritesheet_enemy_butterfly.png": "8a026dac19e3a1d32c22056522ba2dc0",
"assets/assets/map/anim/spritesheet_enemy_butterfly.tsx": "a994eb6956f9b16981d89b0de54d70a7",
"assets/assets/map/anim/spritesheet_enemy_dragonfly.png": "93f645a2d0641fd01976ce0a63051dbe",
"assets/assets/map/anim/spritesheet_enemy_grasshopper.png": "f981422e9db89daab4db1eff1eb790c5",
"assets/assets/map/anim/spritesheet_enemy_grasshopper.tsx": "2776e2c1e7170ad6bab02523e557ee35",
"assets/assets/map/anim/spritesheet_fx_large.png": "e460f7d486285200acd464a80ff4d6ee",
"assets/assets/map/anim/spritesheet_fx_large.tsx": "1c769f1431cb2b48c5e6b926d82e793b",
"assets/assets/map/anim/spritesheet_fx_small.png": "9a1e37f977faccb33d2741e709a6d886",
"assets/assets/map/anim/spritesheet_fx_small.tsx": "391ee5542510e60b4fed0d43a34707a4",
"assets/assets/map/anim/spritesheet_item_egg.png": "1acde5c0639b80c4d40b7a1c9a572e61",
"assets/assets/map/anim/spritesheet_item_egg.tsx": "0a006e32aa40018db0061c1a0df30ad6",
"assets/assets/map/anim/spritesheet_item_feather.png": "ab7dd37d11a754761d2ba196ae873585",
"assets/assets/map/anim/spritesheet_item_feather.tsx": "4ed60125d809dd17aa597b859f4539fb",
"assets/assets/map/anim/spritesheet_phoenixDash_doublejump.png": "15c5b8693cff5d4861de16f2bdb648ca",
"assets/assets/map/anim/spritesheet_phoenixDash_doublejump.tsx": "4fe0a7aee204ecfaee123a24caa2e775",
"assets/assets/map/anim/spritesheet_phoenixDash_idle.png": "6fbe4354912e796a1d8f4544902c7967",
"assets/assets/map/anim/spritesheet_phoenixDash_idle.tsx": "cf42cfdd05a223f685d8a2ce57101066",
"assets/assets/map/anim/spritesheet_phoenixDash_jump.png": "f40bc3adf586bf16c3d462a2fd564bc1",
"assets/assets/map/anim/spritesheet_phoenixDash_jump.tsx": "c11615086459f8b0ab8b3ce76a1c5808",
"assets/assets/map/anim/spritesheet_phoenixDash_run.png": "4801237af827ab57aedb0b8538304b11",
"assets/assets/map/anim/spritesheet_phoenixDash_run.tsx": "702d65b533ab2bc1638aa9ed6796b86d",
"assets/assets/map/anim/spritesheet_poof.png": "dcb190f7daec1fbb04d449e4d0e0077f",
"assets/assets/map/anim/spritesheet_poof.tsx": "7ed0ec9a1b5c7451b78e84726b9eee31",
"assets/assets/map/anim/spritesheet_poof_orange.png": "eb28872e8400b0d0e287a5fecd3b33dd",
"assets/assets/map/anim/spritesheet_poof_orange.tsx": "1879ac64b0ca11d4da6648232b750385",
"assets/assets/map/anim/spriteshseet_item_gold.png": "4f4bc2da14f36fe8efb517a1d5d320be",
"assets/assets/map/flutter_runnergame_map_A.tmx": "6b9a37257c5ffb62b7bcfdb527110dc4",
"assets/assets/map/flutter_runnergame_map_B.tmx": "bbcbcfa7e9b16e740f4bb8ab88830c3e",
"assets/assets/map/flutter_runnergame_map_C.tmx": "15ead5749ba3a40a0f80a462868d2a27",
"assets/assets/map/objects/hom.png": "0e805090879aaa22af750e2325f8229f",
"assets/assets/map/objects/hom.tsj": "9eeab67bcec279a6a3a9395685c7faf1",
"assets/assets/map/objects/hom.tsx": "b04c9d38aa42a5045518973bc9f62c86",
"assets/assets/map/objects/hom1.tsj": "2ced5f5bfbdfa6d8ec072cbb8896bfe2",
"assets/assets/map/objects/hom1.tsx": "5f54e9775a6c7391988b131fdc821a9f",
"assets/assets/map/objects/homup.tsj": "e1a2ae981f97d4ae016c8284476818e8",
"assets/assets/map/objects/tile_enemies_v2.png": "75e2822e2a545e4b3e6d7c43279d501b",
"assets/assets/map/objects/tile_enemies_v2.tsx": "d7a3d1be631b7825272435164a818de3",
"assets/assets/map/objects/tile_forest_trees_back_v02.png": "91822cac7cb310b783a1b42f5374de28",
"assets/assets/map/objects/tile_forest_trees_back_v02.tsx": "e341ad0625dcd0e25feda263d375dead",
"assets/assets/map/objects/tile_forest_trees_front_v02.png": "945a620500d2652ea52914b3f67dd2e1",
"assets/assets/map/objects/tile_forest_trees_front_v02.tsx": "5d31c02eb4fcacf5fed92d262df4f302",
"assets/assets/map/objects/tile_gate_lvl5.png": "9d1e58f5ea5b79b443288d4424320005",
"assets/assets/map/objects/tile_gate_lvl5.tsx": "bf6bb8372f1005bbef25f2ecded1e341",
"assets/assets/map/objects/tile_gate_lvl7.png": "2f1c9968745fa30f803c76a4422bd7ad",
"assets/assets/map/objects/tile_gate_lvl7.tsx": "ba4ba845f38f03fdc781ceec3646c668",
"assets/assets/map/objects/tile_items_v2.png": "75b6bff9bdb72457a6cd8f288b21b62b",
"assets/assets/map/objects/tile_items_v2.tsx": "6336fbd68d7a195f71a7af5d4e734d2e",
"assets/assets/map/objects/tile_mountain_tree_v01.png": "3ad29b8386f9b09ba3da0410b6ca0e81",
"assets/assets/map/objects/tile_mountain_tree_v01.tsx": "75e47d9dbf5689df7bfd2ec9adebfb66",
"assets/assets/map/objects/tile_plains_mountains_B.png": "29c70bdf615f949610bc99e5271e31c2",
"assets/assets/map/objects/tile_plains_mountains_B.tsx": "da8437a541d7889fbf968bbaa748d567",
"assets/assets/map/objects/tile_plains_mountains_v01.png": "a243526e736411008b5cf520ec7d91c1",
"assets/assets/map/objects/tile_plains_mountains_v01.tsx": "ad656995b2edc082fd3aa43587de3e18",
"assets/assets/map/tiles/tile_atmos_forest_1.png": "05a2d79c99814ecec87ce0af7732f837",
"assets/assets/map/tiles/tile_atmos_forest_1.tsx": "f757d4a26cd8274c3c37bad30e930449",
"assets/assets/map/tiles/tile_atmos_forest_2.png": "e7383fe8edb7b6762c2de8690e2c4b58",
"assets/assets/map/tiles/tile_atmos_forest_2.tsx": "331819d5782be12bc514805b0cc74ef1",
"assets/assets/map/tiles/tile_atmos_forest_3.png": "b045d7207ab1064411d1664b998a7bf4",
"assets/assets/map/tiles/tile_atmos_forest_3.tsx": "eb51174df7dd1b27b2d4f5b7dbeca6cf",
"assets/assets/map/tiles/tile_clouds_BG.png": "5f19cd356a27a857929dfeedff06b1ab",
"assets/assets/map/tiles/tile_clouds_BG.tsx": "c417f47c7fe0e1cedbe127362bc8cdf9",
"assets/assets/map/tiles/tile_clouds_v02.png": "4ac3f75685d918b6e6107d7496a46e62",
"assets/assets/map/tiles/tile_clouds_v02.tsx": "a8477fa2c0c59a0c1c2649626eb46fa9",
"assets/assets/map/tiles/tile_decorations_v01.png": "499e74dd838d78fa4fd5a8c49fc5e938",
"assets/assets/map/tiles/tile_decorations_v01.tsx": "747d6fe1b147194ae4936735f8a9553f",
"assets/assets/map/tiles/tile_forest_bushes_v02.png": "f5449c16bb75f38004a0bfef82f33367",
"assets/assets/map/tiles/tile_forest_bushes_v02.tsx": "b457d0183e392f947dd4f894b7dd50c7",
"assets/assets/map/tiles/tile_forest_bushes_v03.png": "d00687aae1e9c0b1d22aa9824673c1c4",
"assets/assets/map/tiles/tile_forest_bushes_v03.tsx": "5b119112e14709f3dc3b3b698b97e9e9",
"assets/assets/map/tiles/tile_forest_ground_v02.png": "67d5f731a4b11680dd36c4473a5a9619",
"assets/assets/map/tiles/tile_forest_ground_v02.tsx": "ac45a6a4a54a6a262f35ec5a045fdf6a",
"assets/assets/map/tiles/tile_forest_ground_v03.png": "f5aee5f5ba8dc0f051be273e9f4bfe01",
"assets/assets/map/tiles/tile_forest_ground_v03.tsx": "f5f63b637f0bea57000a6042104a248b",
"assets/assets/map/tiles/tile_forest_ground_v04.png": "e92030c946949e438241a3ebc8d8127b",
"assets/assets/map/tiles/tile_forest_ground_v04.tsx": "b4a5810cfce99f6dd1cbd890d88df7e8",
"assets/assets/map/tiles/tile_forest_ground_v3morning.png": "1d83ee4483ae7993f6d337c74808b770",
"assets/assets/map/tiles/tile_forest_ground_v3morning.tsx": "153d7c838e155b079ca1bc22436a69dc",
"assets/assets/map/tiles/tile_gate_v2.png": "6b3dbdb7276fd973f527b63ec32a0e19",
"assets/assets/map/tiles/tile_gate_v2.tsx": "c1569a12ff833efbefe9413228309f5a",
"assets/assets/map/tiles/tile_ground_transition_v02.png": "86b2c9c7d084fcb24260c363417af29a",
"assets/assets/map/tiles/tile_ground_transition_v02.tsx": "67169fe937416f6f47e2f697a35835c6",
"assets/assets/map/tiles/tile_mountain_ground_v02.png": "a053486a51959c2ad72ea5feb11aaf43",
"assets/assets/map/tiles/tile_mountain_ground_v02.tsx": "eee03901c76b33f9fc850cfdd72d0571",
"assets/assets/map/tiles/tile_mountain_ground_v03.png": "868ea392d678beb101474a0c1d0fd0db",
"assets/assets/map/tiles/tile_mountain_ground_v03.tsx": "3292f58d27df6be13918fdee76832411",
"assets/assets/map/tiles/tile_mountain_mountains_v01.png": "c2df1566b33a214a7a0d7636d1b2f235",
"assets/assets/map/tiles/tile_mountain_mountains_v01.tsx": "cdb9455ed758d7cd9eac0425c612e6f1",
"assets/assets/map/tiles/tile_mountain_stars_v01.png": "96fa3c91e1226d8de86dbe8fabed0910",
"assets/assets/map/tiles/tile_mountain_stars_v01.tsx": "507782f366a295928cc63ce1c803497e",
"assets/assets/map/tiles/tile_plains_ground_v02.png": "64f09ac825436b61d46706568064fa22",
"assets/assets/map/tiles/tile_plains_ground_v02.tsx": "a8daa0e15fdd1959fdf4a6f188854656",
"assets/assets/map/tiles/tile_plains_ground_v03.png": "d0d291c07c9909e3c46d24aa45141376",
"assets/assets/map/tiles/tile_plains_ground_v03.tsx": "e4708e2ac42651f5cc34caa527a33433",
"assets/assets/map/tiles/tile_plains_hills_v01.png": "f738df9b25981dd7d4fb15353ec4a7c4",
"assets/assets/map/tiles/tile_plains_hills_v01.tsx": "81eec53fa7820df1798d93e268ead36e",
"assets/assets/map/tiles/tile_plains_hills_v02.png": "1cd488c837fb4726191b02bb55e6a782",
"assets/assets/map/tiles/tile_plains_hills_v02.tsx": "b522e00833d301019230dc36ba690043",
"assets/assets/map/tiles/tile_sky_v02.png": "9030a06a7ce03162e6f078ba66e1bcf9",
"assets/assets/map/tiles/tile_sky_v02.tsx": "25d82a9a13e0fcf967f90b537d61cbe1",
"assets/assets/map/tiles/tile_treehouse.png": "4929d7af1f12d7e53b7e9b72b7856901",
"assets/assets/map/tiles/tile_treehouse.tsx": "2481217a070db89f6d76f146478d3f2e",
"assets/assets/music/FlutterGame_SunshineAndDewdrops_1_1.mp3": "6c8257c4dcf1e7888eea003218991bc9",
"assets/assets/sfx/Dash_AcornPickup.mp3": "ed5364255793385c6365b08662021901",
"assets/assets/sfx/Dash_EggPickup.mp3": "f96b423f1cb5445ed1783e12fde2949f",
"assets/assets/sfx/Dash_FeatherPowerup.mp3": "7cc26e281b475a11ebfbe10621e09b2e",
"assets/assets/sfx/Dash_Footstep_Run.mp3": "144b07cbd9a8d47342756869998621ac",
"assets/assets/sfx/Dash_Jump.mp3": "fd6eebb05e4046e76130c35218c70ad1",
"assets/assets/sfx/Phoenix_DOUBLEJump.wav": "9540f28092f7806c6bd04992d9f51c5b",
"assets/assets/sfx/Phoenix_Jump.wav": "0b658a1cc9c8cae5e1aac430a0919de6",
"assets/FontManifest.json": "fc6c0f3ea70a3b8ba94163b2e3624a5e",
"assets/fonts/MaterialIcons-Regular.otf": "a1d49234016cd2586c2c6e3f62ee534f",
"assets/NOTICES": "7707bd223fa9e9eec6a22a01937f4085",
"assets/packages/app_ui/assets/fonts/GoogleSansText-Bold.ttf": "a6f5ad76d0ff8168fd7046354d62fc68",
"assets/packages/app_ui/assets/fonts/GoogleSansText-Regular.ttf": "3077fc2d656cc45868d673507772f8d4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ecad68a8f04a0ceee65621eb66dbf571",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"background.svg": "f5d8e8f0e6132dd2610acf577d07609a",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8e604e3166c6401d523bdedd405fbecf",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "f7079730c51fdbdc07fedb65b67a3076",
"icons/Icon-512.png": "7459ea1d42c3f7313b14dbb425e18f25",
"icons/Icon-maskable-192.png": "f7079730c51fdbdc07fedb65b67a3076",
"icons/Icon-maskable-512.png": "7459ea1d42c3f7313b14dbb425e18f25",
"index.html": "ec83cde035e1d686c00809c0d1711183",
"/": "ec83cde035e1d686c00809c0d1711183",
"logo.svg": "2d96d571e2a38ca1977a5430dc0bfbff",
"main.dart.js": "6397b612f0871e793155e0384187ba3a",
"manifest.json": "05f2eb765180ddef406d2fae67ebf489",
"version.json": "af2722840a54587b17def218b8525bc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
