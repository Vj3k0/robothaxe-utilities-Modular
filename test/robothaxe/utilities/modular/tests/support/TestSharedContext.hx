package robothaxe.utilities.modular.tests.support;

import robothaxe.core.IViewContainer;
import robothaxe.mvcs.Context;

class TestSharedContext extends Context {

    public function new(?contextView:IViewContainer = null, ?autoStartup:Bool = true) {
        super(contextView, autoStartup);
    }
}
