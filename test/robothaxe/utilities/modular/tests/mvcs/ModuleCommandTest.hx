package robothaxe.utilities.modular.tests.mvcs;

import robothaxe.utilities.modular.base.ModuleEventDispatcher;
import robothaxe.utilities.modular.tests.support.TestCommand;
import robothaxe.utilities.modular.tests.support.TestModuleEvent;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.event.Event;
import massive.munit.util.Timer;
import massive.munit.Assert;
import massive.munit.async.AsyncFactory;


/**
* Auto generated MassiveUnit Test Class 
*/
class ModuleCommandTest 
{
    private var _moduleEventDispatcher:IModuleEventDispatcher;
    private var _command:TestCommand;
	
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
        _command = new TestCommand();
        _command.moduleEventDispatcher = _moduleEventDispatcher;
    }

    @After
    public function tearDown():Void
    {
        _moduleEventDispatcher = null;
        _command.moduleEventDispatcher = null;
        _command = null;
    }

    @Test
    public function testHasModuleEventDispatcher():Void {
        Assert.isNotNull(_command.moduleEventDispatcher);
    }

    @AsyncTest
    public function testCanDispatchEvent(factory:AsyncFactory):Void
    {
        Assert.isNotNull(_command.moduleEventDispatcher);
        var handler:Dynamic = factory.createHandler(this, handleEventDispatch, 300);
        _moduleEventDispatcher.addEventListener(TestModuleEvent.CUSTOM, handler);
        _command.dispatchTestModuleEvent();
    }

    private function handleEventDispatch(event:Event):Void
    {
        Assert.areEqual(TestModuleEvent.CUSTOM, event.type);
    }

}