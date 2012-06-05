package robothaxe.utilities.modular.tests.support;

import robothaxe.event.Event;

class TestModuleEvent extends Event {

    public inline static var CUSTOM:String = "custom event";
    public inline static var SAMPLE:String = "sample event";

    public function new(inType : String) {
        super(inType);
    }
}
