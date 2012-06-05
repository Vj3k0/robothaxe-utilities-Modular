package robothaxe.utilities.modular.tests.base;

import robothaxe.utilities.modular.tests.support.TestCommand;
import robothaxe.utilities.modular.tests.support.TestModuleEvent;
import robothaxe.utilities.modular.base.ModuleCommandMap;
import robothaxe.injector.Reflector;
import robothaxe.injector.Injector;
import robothaxe.utilities.modular.base.ModuleEventDispatcher;
import robothaxe.core.IReflector;
import robothaxe.core.IInjector;
import robothaxe.utilities.modular.core.IModuleCommandMap;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.event.Event;
import massive.munit.util.Timer;
import massive.munit.Assert;
import massive.munit.async.AsyncFactory;


/**
* Auto generated MassiveUnit Test Class 
*/
class ModuleCommandMapTest
{
    private var _moduleEventDispatcher:IModuleEventDispatcher;
    private var _commandExecuted:Bool;
    private var _commandMap:IModuleCommandMap;
    private var _injector:IInjector;
    private var _reflector:IReflector;
	
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
        _injector = new Injector();
        _reflector = new Reflector();
        _commandMap = new ModuleCommandMap(_moduleEventDispatcher, _injector, _reflector);
	}
	
	@After
	public function tearDown():Void
	{
        _moduleEventDispatcher = null;
        _injector = null;
        _reflector = null;
        _commandMap = null;
        TestCommand.isExecuted = false;
	}

    @Test
    public function testHasCommandForEvent():Void {
        _commandMap.mapEvent(TestModuleEvent.SAMPLE, TestCommand, TestModuleEvent);
        Assert.isTrue(_commandMap.hasEventCommand(TestModuleEvent.SAMPLE, TestCommand, TestModuleEvent));
    }

    @Test
    public function testExecutesCommand():Void {
        _commandMap.mapEvent(TestModuleEvent.SAMPLE, TestCommand, TestModuleEvent);
        _moduleEventDispatcher.dispatchEvent(new TestModuleEvent(TestModuleEvent.SAMPLE));
        Assert.isTrue(TestCommand.isExecuted);

    }

}