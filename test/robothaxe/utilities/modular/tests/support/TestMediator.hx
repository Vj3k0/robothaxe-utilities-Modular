package robothaxe.utilities.modular.tests.support;

import robothaxe.utilities.modular.mvcs.ModuleMediator;
import robothaxe.event.Event;

class TestMediator extends ModuleMediator {

    public var receivedEvent:Bool;

    public function new() {
        receivedEvent = false;
        super();
    }

    public function dispatchTestModuleEvent():Void {
        dispatchToModules(new TestModuleEvent(TestModuleEvent.CUSTOM));
    }

    override public function onRegister():Void {
        addModuleListener(TestModuleEvent.SAMPLE, handleSampleEvent);
    }

    private function handleSampleEvent(event:Event):Void {
        receivedEvent = true;
    }


}
