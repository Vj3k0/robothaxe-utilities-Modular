package robothaxe.utilities.modular.mvcs;

import robothaxe.event.Event;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.mvcs.Actor;

/**
* The ModuleActor class defines actor which can use module event dispatcher
* to dispatch events to modules.
**/
class ModuleActor extends Actor {

    //---------------------------------------------------------------------
    //  Constructor
    //---------------------------------------------------------------------

    /**
    * Create new instance of ModuleActor.
    *
    * <p>Extend this class to create an actor with ability to dispatch
    * events to modules.</p>
    **/
    public function new() {
        super();
    }

    //---------------------------------------------------------------------
    //  Module manipulation
    //---------------------------------------------------------------------

    /**
    * Globally redispatch an event to all modules within an application.
    *
    * @param event Event to be dispatched.
    *
    * @private
    **/
    private function dispatchToModules(event:Event):Bool {
        if (moduleEventDispatcher.hasEventListener(event.type))
            return moduleEventDispatcher.dispatchEvent(event);

        return true;
    }

    //---------------------------------------------------------------------
    //  Properties
    //---------------------------------------------------------------------

    @inject
    /**
    * Event dispatcher shared between modules.
    **/
    public var moduleEventDispatcher:IModuleEventDispatcher;

}
