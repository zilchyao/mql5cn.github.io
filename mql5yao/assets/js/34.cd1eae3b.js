(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{460:function(e,t,_){"use strict";_.r(t);var r=_(14),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",[e._v("MetaQuotes Language 5 ")]),e._v(" "),t("p",[e._v("(MQL5)前身是一种内置式计算机语言，现在几乎已经是一种高级编程语言， 专门运用于金融交易自动化领域，为开发技术分析指标、EA交易程序和其它实用程序而设计。 MQL5是由MetaQuotes Software Corp. 公司基于长期的网上交易平台经验开发的。 这个语言的语法非常接近于C++，使程序员能够在面向对象编程(OOP)风格中进行开发。")]),e._v(" "),t("p",[e._v("除了MQL5语言之外，MT4/5 客户端程序的安装包中还包含了高级代码编写工具 MetaEditor IDE， 可以帮助用户完成一些自动生成模板的工具，如代码片段、调试、概要分析等功能，以及内置的代码文件版本管理工具MQL5存储。")]),e._v(" "),t("p",[e._v("有关MQL5语言的帮助支持还可参考MQL5.community网站，其中包含一个大型 免费代码库和大量的 文章。")]),e._v(" "),t("p",[e._v("这些文章涵盖了现代交易的所有方面，包括神经网络、统计和分析、高频交易、套利、测试和优化交易策略、使用EA交易等。")]),e._v(" "),t("p",[e._v("交易员和MQL5程序开发人员可以在论坛上进行沟通，使用自由职业者服务下订单并开发应用程序， 以及在自动交易应用程序市场中购买和出售受保护的程序。")]),e._v(" "),t("p",[e._v("MQL5语言提供了专门的(第十八章)交易函数 和预定义(第十三章)事件处理程序， 以帮助程序员开发EA交易，根据特定的交易规则自动控制交易流程。除了EA交易之外， MQL5还可以开发自定义(第二十三章)技术指标、脚本和程序库。")]),e._v(" "),t("p",[e._v("MQL5语言参考(即本手册)包括函数，操作符(指令语句)，关键字和其它划分为几个类别的语言结构。本手册还提供了一些 标准程序库(见另册)、类的描述，可用于开发交易策略、控制面板、自定义图形和存取文件等功能。")]),e._v(" "),t("p",[e._v("另外，代码库还包含了ALGLIB(英文版)数值分析库， 可用于解决各种数学问题。")]),e._v(" "),t("h3",{attrs:{id:"mql5应用程序类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mql5应用程序类型"}},[e._v("#")]),e._v(" MQL5应用程序类型")]),e._v(" "),t("p",[e._v("MQL5 可以编写不同用途的程序代码：")]),e._v(" "),t("ul",[t("li",[e._v("EA交易程序(简称EA)\n是一个自动交易系统，必须连接到一个图表上才能工作。 EA交易程序包含了管理预定义事件的 事件处理程序， 激活执行适当的交易策略元素。 例如，程序初始化和去初始化的事件，收到新的报价，计时器事件、市场深度变化、图表和自定义事件。\n除了根据已实现的规则计算交易信号外，EA还可以自动执行交易并将其直接发送到交易服务器。EA程序通常存储在：")])]),e._v(" "),t("p",[t("code",[e._v("Terminal_Directory\\MQL5\\Experts")])]),e._v(" "),t("ul",[t("li",[e._v("自定义指标是一种由用户开发的技术指标，MT4/5 客户端也集成了一些标准指标。 自定义指标，以及标准指标都不能自动交易，它们是用于实现分析功能。 自定义指标可以利用其它指标的值进行计算，也可以从EA交易程序中调用。 自定义指标存储在")])]),e._v(" "),t("p",[t("code",[e._v("Terminal_Directory\\MQL5\\Indicators")])]),e._v(" "),t("ul",[t("li",[e._v("脚本是一种单独执行操作的程序。 与EA交易不同，除了触发器、初始化和去初始化之外，脚本不处理任何事件。 脚本代码必须包括OnStart()函数。脚本存储在")])]),e._v(" "),t("p",[t("code",[e._v("Terminal_DIrectory\\MQL5\\Scripts")])]),e._v(" "),t("ul",[t("li",[e._v("程序库是一组自定义函数。 程序库用来存储和分配常用的自定义程序算法。程序库存储在\nTerminal_Directory\\MQL5\\Libraries\n包含文件是经常使用的自定义程序块的源代码文本。 这些文件存在于编译阶段的EA交易、脚本、自定义指标和程序库的源代码文本中。 使用 包含文件 比使用 程序库 更可取，因为在调用 程序库 函数时容易产生额外的负担。 包含文件可以存储在与源文件相同的目录中。在这种情况下，使用双引号的指令。")])]),e._v(" "),t("p",[t("code",[e._v('#include "abc.mqh"')])]),e._v(" "),t("p",[e._v('另一种可能是包含文件存储在\nTerminal_Directory\\MQL5\\Include\n这时，应该使用尖括号"< >"')]),e._v(" "),t("p",[t("code",[e._v("#include <abc.mqh>")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.metaquotes.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaQuotes 软件公司"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);