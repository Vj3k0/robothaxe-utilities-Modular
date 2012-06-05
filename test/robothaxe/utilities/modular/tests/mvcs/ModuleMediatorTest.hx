package robothaxe.utilities.modular.tests.mvcs;

import robothaxe.utilities.modular.tests.support.TestMediator;
import robothaxe.utilities.modular.tests.support.TestModuleEvent;
import robothaxe.utilities.modular.base.ModuleEventDispatcher;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.event.Event;
import massive.munit.util.Timer;
import massive.munit.Assert;
import massive.munit.async.AsyncFactory;


/**
* Auto generated MassiveUnit Test Class 
*/
class ModuleMediatorTest 
{
    private var _moduleEventDispatcher:IModuleEventDispatcher;
    private var _mediator:TestMediator;
	
	public function new() 
	{
	}
	
	@BeforeClass
	public function beforeClass():Void
	{
	}
	
	@AfterClass
	public function afterClass():Void
	{
	}

    @Before
    public function setup():Void
    {
        _moduleEventDispatcher = new ModuleEventDispatcher();
        _mediator = new TestMediator();
        _mediator.moduleEventDispatcher = _moduleEventDispatcher;
    }

    @After
    public function tearDown():Void
    {
        _moduleEventDispatcher = null;
        _mediator.moduleEventDispatcher = null;
        _mediator = null;
    }

    @Test
    public function testHasModuleEventDispatcher():Void {
        Assert.isNotNull(_mediator.moduleEventDispatcher);
    }

    @AsyncTest
    public function testCanDispatchEvent(factory:AsyncFactory):Void
    {
        Assert.isNotNull(_mediator.moduleEventDispatcher);
        var handler:Dynamic = factory.createHandler(this, handleEventDispatch, 300);
        _moduleEventDispatcher.addEventListener(TestModuleEvent.CUSTOM, handler);
        _mediator.dispatchTestModuleEvent();
    }

    private function handleEventDispatch(event:Event):Void
    {
        Assert.areEqual(TestModuleEvent.CUSTOM, event.type);
    }

    @Test
    public function testCanReceiveEvent():Void
    {
        Assert.isNotNull(_mediator.moduleEventDispatcher);
        _moduleEventDispatcher.dispatchEvent(new TestModuleEvent(TestModuleEvent.SAMPLE));
        Assert.isTrue(_mediator.receivedEvent);
    }
}