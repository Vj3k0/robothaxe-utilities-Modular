package robothaxe.utilities.modular.tests.support;

import robothaxe.utilities.modular.mvcs.ModuleCommand;

class TestCommand extends ModuleCommand {

    public static var isExecuted:Bool;

    public function new() {
        isExecuted = false;
        super();
    }

    override public function execute():Void {
        isExecuted = true;
    }


    public function dispatchTestModuleEvent():Void {
        dispatchToModules(new TestModuleEvent(TestModuleEvent.CUSTOM));
    }

}
