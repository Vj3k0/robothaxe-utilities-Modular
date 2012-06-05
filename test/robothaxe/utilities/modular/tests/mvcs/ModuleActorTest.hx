package robothaxe.utilities.modular.tests.mvcs;

import robothaxe.utilities.modular.base.ModuleEventDispatcher;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.event.Event;
import robothaxe.utilities.modular.tests.support.TestModuleEvent;
import robothaxe.utilities.modular.tests.support.TestActor;
import massive.munit.util.Timer;
import massive.munit.Assert;
import massive.munit.async.AsyncFactory;


/**
* Auto generated MassiveUnit Test Class 
*/
class ModuleActorTest 
{

    private var _actor:TestActor;
    private var _moduleEventDispatcher:IModuleEventDispatcher;

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
        _actor = new TestActor();
        _actor.moduleEventDispatcher = _moduleEventDispatcher;
	}
	
	@After
	public function tearDown():Void
	{
        _moduleEventDispatcher = null;
        _actor.moduleEventDispatcher = null;
        _actor = null;
	}

    @Test
    public function testHasModuleEventDispatcher():Void {
        Assert.isNotNull(_actor.moduleEventDispatcher);
    }

    @AsyncTest
    public function testCanDispatchEvent(factory:AsyncFactory):Void
    {
        Assert.isNotNull(_actor.moduleEventDispatcher);
        var handler:Dynamic = factory.createHandler(this, handleEventDispatch, 300);
        _moduleEventDispatcher.addEventListener(TestModuleEvent.CUSTOM, handler);
        _actor.dispatchTestModuleEvent();
    }

    private function handleEventDispatch(event:Event):Void
    {
        Assert.areEqual(TestModuleEvent.CUSTOM, event.type);
    }
}