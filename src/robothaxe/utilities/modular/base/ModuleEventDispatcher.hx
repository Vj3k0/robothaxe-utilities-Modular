package robothaxe.utilities.modular.base;

import robothaxe.event.IEventDispatcher;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.event.EventDispatcher;

/**
* The ModuleEventDispatcher class is used as shared event dispatcher through which
* modules communicate between each other.
**/
class ModuleEventDispatcher extends EventDispatcher, implements IModuleEventDispatcher {

    //---------------------------------------------------------------------
    //  Constructor
    //---------------------------------------------------------------------

    /**
    * Create new instance of ModuleEventDispatcher.
    **/
    public function new(?target : IEventDispatcher) {
        super(target);
    }
}
