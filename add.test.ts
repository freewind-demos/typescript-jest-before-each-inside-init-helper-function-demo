import {Hello} from './Hello';

beforeEach(() => {
  // "resetAllMocks" doesn't affect the spies if "restoreAllMocks" called in other place
  jest.resetAllMocks()
})

function createHello() {
  const hello = new Hello();
  beforeEach(() => {
    console.log('### beforeEach')
    jest.restoreAllMocks();
    hello.name = 'init';
  })
  return {
    hello
  }
}


describe('test', () => {
  const {hello} = createHello();

  it('test1', () => {
    expect(hello.name).toBe('init');
    hello.name = 'new-test1'
    jest.spyOn(hello, 'hello').mockReturnValue('new-hello-value');
    expect(hello.hello()).toBe('new-hello-value');
  })

  it('test2', () => {
    expect(hello.name).toBe('init')
    expect(hello.hello()).toBe('Hello, init!');
  })
})
