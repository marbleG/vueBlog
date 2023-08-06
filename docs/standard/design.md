## 设计流程

### 6.详细设计

> 详细设计: 具体指导开发的设计部分，包括流程、数据模型、具体用到的算法、和客户端的接口，等等.这一部分很重要，如果没做好，没对齐，那么搞不好就要返工，耽误进度。

1. 流程设计
    2. 流程图或时序图描述业务流程
2. 算法设计
3. 数据模型设计
4. 接口设计
5. 异常处理

## 任务管理器

### ovirt-engine 任务流程

1. bll 每个操作在ActionType 枚举中都有一个值.每个枚举值都有一个对应的类，类由工厂通过反射实例化。
2. Backend.RunAction：入口，通过 CommandFactory.CreateCommand 接收枚举值和命令参数，并实例化相应的命令。然后，该命令实例通过command.executeAction（）运行，
   1. 首先运行所有命令的基类：CommandBase的executeAction初始实现。
   2. CommandBase.executeAction 首先检查命令范围的验证，然后运行派生的命令实现。
   3. 在验证阶段，填充字段“returnValue”，包括其子字段“canDoAction”和“errorMessage”。
   4. 命令的行为与函数非常相似，因此其“returnValue”字段充当函数实际返回值的隐喻。如果验证成功，则开始执行阶段，其中填充“成功”和“异常”。
3. 当用户一次运行多个命令时，后端使用MultipleActionsRunner，execute方法同时异步运行所有命令的验证，然后等待所有验证线程，完成所有验证后，两种：1.全部通过 2.每个命令执行通过验证
4. internalValidate() 验证命令 和 execute() 执行命令