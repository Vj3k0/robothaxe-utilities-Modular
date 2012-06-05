package robothaxe.utilities.modular.mvcs;

import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.utilities.modular.core.IModuleCommandMap;
import robothaxe.mvcs.Command;
import robothaxe.event.Event;

/**
* The ModuleCommand class defines command to be executed in module context.
* It can also use module event dispatcher to dispatch events to modules.
**/
class ModuleCommand extends Command {

    //---------------------------------------------------------------------
    //  Constructor
    //---------------------------------------------------------------------

    /**
    * Create new instance of ModuleCommand.
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
    private function dispatchToModules(event:Event):Bool
    {
        if(moduleEventDispatcher.hasEventListener(event.type))
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

    @inject
    /**
    * Command map which maps module commands.
    **/
    public var moduleCommandMap:IModuleCommandMap;
}
