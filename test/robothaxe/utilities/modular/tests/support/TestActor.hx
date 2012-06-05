package robothaxe.utilities.modular.tests.support;

import robothaxe.utilities.modular.mvcs.ModuleActor;

class TestActor extends ModuleActor {

    public function new() {
        super();
    }

    public function dispatchTestModuleEvent():Void {
        dispatchToModules(new TestModuleEvent(TestModuleEvent.CUSTOM));
    }
}
