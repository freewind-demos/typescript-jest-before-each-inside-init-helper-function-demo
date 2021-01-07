TypeScript Jest "beforeEach" Inside Init Helper Demo
===========================

这是一个非常有用的特性，可以帮助我们更好的组织初始化代码。可以在初始化函数内部调用`beforeEach`，进行重设操作，
它们将会在每次测试前被调用。

另外，还可以同时调用`jest.restoreAllMocks`来将spy重置，让被测对象不会在不同用例中被影响。

注：
专门测试了一下`jest.resetAllMocks`对于`restoreAllMocks`的影响，发现没有影响。似乎只要`restoreAllMocks`被调用了，
则`resetAllMocks`不会再影响那些spy（不确定对mock的影响）

```
npm install
npm test
```
