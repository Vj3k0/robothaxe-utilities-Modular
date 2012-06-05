package robothaxe.utilities.modular.tests.mvcs;

import robothaxe.utilities.modular.tests.support.TestActor;
import robothaxe.utilities.modular.tests.support.TestModuleEvent;
import robothaxe.utilities.modular.tests.support.TestContext;
import robothaxe.utilities.modular.tests.support.TestContextView;
import robothaxe.utilities.modular.tests.support.TestSharedContext;
import robothaxe.event.Event;
import massive.munit.util.Timer;
import massive.munit.Assert;
import massive.munit.async.AsyncFactory;


/**
* Auto generated MassiveUnit Test Class 
*/
class ModuleContextTest 
{
    private var _contextView:TestContextView;
    private var _sharedContext:TestSharedContext;
    private var _context:TestContext;

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
        _contextView = new TestContextView();
        _sharedContext = new TestSharedContext(_contextView);
	}
	
	@After
	public function tearDown():Void
	{
        _contextView = null;
        _sharedContext = null;
        _context = null;
	}

    @Test
    public function testIsInitialized():Void {
        _context = new TestContext(_contextView, true, _sharedContext.injector);
        Assert.isTrue(_context.startupComplete);
        Assert.isTrue(_context.isInitialized);
    }

    @Test
    public function testSharedInjection():Void {
        _context = new TestContext(_contextView, true, _sharedContext.injector);
        _sharedContext.injector.mapSingleton(TestActor);
        Assert.isTrue(_context.injector.hasMapping(TestActor));
    }
}