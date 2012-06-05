package robothaxe.utilities.modular.tests.support;

import robothaxe.core.IInjector;
import robothaxe.core.IViewContainer;
import robothaxe.utilities.modular.mvcs.ModuleContext;

class TestContext extends ModuleContext {

    public var startupComplete:Bool;

    public function new(?contextView:IViewContainer=null, ?autoStartup:Bool=true, ?parentInjector:IInjector = null) {
        startupComplete = false;
        super(contextView, autoStartup, parentInjector);
    }

    override public function startup():Void {
        startupComplete = true;

        super.startup();
    }

    public var isInitialized(get_isInitialized, null):Bool;

    private function get_isInitialized():Bool {
        var initialized:Bool = true;
        initialized = (moduleCommandMap != null) && initialized;
        initialized = (moduleDispatcher != null) && initialized;
        return initialized;
    }

    public function dispatchTestModuleEvent():Void {
        dispatchToModules(new TestModuleEvent(TestModuleEvent.CUSTOM));
    }




}
