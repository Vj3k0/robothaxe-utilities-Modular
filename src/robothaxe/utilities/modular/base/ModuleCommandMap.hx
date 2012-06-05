package robothaxe.utilities.modular.base;

import robothaxe.core.IReflector;
import robothaxe.core.IInjector;
import robothaxe.event.IEventDispatcher;
import robothaxe.utilities.modular.core.IModuleCommandMap;
import robothaxe.base.CommandMap;

/**
* The ModuleCommandMap class is used in module context to map module commands.
**/
class ModuleCommandMap extends CommandMap, implements IModuleCommandMap {

    /**
    * Create command mappings that can be triggered by events dispatched on the
    * shared <code>ModuleEventDispatcher</code>.
    */
    public function new(eventDispatcher:IEventDispatcher, injector:IInjector, reflector:IReflector) {
        super(eventDispatcher, injector, reflector);
    }
}
