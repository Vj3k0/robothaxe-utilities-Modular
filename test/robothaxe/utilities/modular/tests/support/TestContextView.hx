package robothaxe.utilities.modular.tests.support;

import robothaxe.core.IViewContainer;

class TestContextView implements IViewContainer  {

    public function new() {
    }

    public var viewAdded:Dynamic -> Void;
    public var viewRemoved:Dynamic -> Void;

    public function isAdded(view:Dynamic):Bool {
        return true; //Only mock for testing
    }
}
