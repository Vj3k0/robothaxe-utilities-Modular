package robothaxe.utilities.modular.mvcs;

import robothaxe.utilities.modular.core.IModuleCommandMap;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.mvcs.Mediator;
import robothaxe.event.Event;

/**
* The ModuleMediator class extends Mediator functionality to include support for
* listening and dispatching events to other modules through module event dispatcher.
**/
class ModuleMediator extends Mediator {

    //---------------------------------------------------------------------
    //  Constructor
    //---------------------------------------------------------------------

    /**
    * Create new instance of ModuleMediator.
    **/
    public function new() {
        super();
    }

    //---------------------------------------------------------------------
    //  Module manipulation
    //---------------------------------------------------------------------

    /**
    * Map an event type to globally redispatch to all modules within an application.
    * <p/>
    * <listing version="3.0">
    * mapRedispatchToModules(MyEvent.SOME_EVENT);
    * </listing>
    *
    * @param event
    *
    */
    private function addModuleListener(type:String, listener:Dynamic, ?eventClass:Class<Dynamic> = null, ?useCapture:Bool = false, ?priority:Int = 0, ?useWeakReference:Bool = true):Void {
        eventMap.mapListener(moduleEventDispatcher, type, listener, eventClass, useCapture, priority, useWeakReference);
    }

    /**
    * Globally redispatch an event to all modules within an application.
    * <p/>
    * <listing version="3.0">
    * eventMap.mapEvent(view, MyEvent.SOME_EVENT, redispatchToModule);
    * </listing>
    *
    * @param event Event to be dispatched.
    *
    * @private
    */
    private function dispatchToModules(event:Event):Bool {
        if(moduleEventDispatcher.hasEventListener(event.type))
            return moduleEventDispatcher.dispatchEvent(event);
        return false;
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
