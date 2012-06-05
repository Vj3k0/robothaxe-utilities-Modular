package robothaxe.utilities.modular.mvcs;

import robothaxe.base.ContextEvent;
import robothaxe.utilities.modular.base.ModuleEventDispatcher;
import robothaxe.utilities.modular.base.ModuleCommandMap;
import robothaxe.utilities.modular.core.IModuleCommandMap;
import robothaxe.utilities.modular.core.IModuleEventDispatcher;
import robothaxe.base.MediatorMap;
import robothaxe.core.IMediatorMap;
import robothaxe.core.IInjector;
import robothaxe.core.IViewContainer;
import robothaxe.event.Event;
import robothaxe.utilities.modular.core.IModuleContext;
import robothaxe.mvcs.Context;

/**
* Contains additional mappings and facilitates the use of a parent injector
* to create a child injector for a module.
**/
class ModuleContext extends Context, implements IModuleContext {

    //---------------------------------------------------------------------
    //  Constructor
    //---------------------------------------------------------------------

    /**
     * Create new instance of ModuleContext.
     *
     * <p>Extend this class to create a module context.</p>
     *
     * @param contextView The root view node of the context. The context will listen for ADDED_TO_STAGE events on this node
     * @param autoStartup Should this context automatically invoke it's <code>startup</code> method when it's <code>contextView</code> arrives on Stage?
     * @param parentInjector Injector which will be used to create child injector for context.
     */
    public function new(?contextView:IViewContainer=null, ?autoStartup:Bool=true, ?parentInjector:IInjector = null)
    {
        if(parentInjector != null) {
            injector = parentInjector.createChildInjector();
        }

        super(contextView, autoStartup);
    }

    //---------------------------------------------------------------------
    //  Context initialization
    //---------------------------------------------------------------------

    /**
    * Map injections for modules.
    **/
    override function mapInjections():Void {
        super.mapInjections();
        initializeModuleEventDispatcher();
        injector.mapValue(IModuleCommandMap, moduleCommandMap);
    }

    /**
    * Create new module event dispatcher and map it to injector, or fetch
    * one from injector if it already exists.
    *
    * @private
    **/
    private function initializeModuleEventDispatcher():Void {
        if(injector.hasMapping(IModuleEventDispatcher) )
        {
            moduleDispatcher = injector.getInstance(IModuleEventDispatcher);
        }
        else
        {
            moduleDispatcher = new ModuleEventDispatcher(this);
            injector.mapValue(IModuleEventDispatcher, moduleDispatcher);
        }
    }

    //---------------------------------------------------------------------
    //  Module manipulation
    //---------------------------------------------------------------------

    /**
    * Dispatch target event to all modules.
    *
    * @private
    **/
    private function dispatchToModules(event:Event):Bool
    {
        if(moduleDispatcher.hasEventListener(event.type))
            return moduleDispatcher.dispatchEvent(event);
        return true;
    }

    //---------------------------------------------------------------------
    //  Disposing
    //---------------------------------------------------------------------

    /**
    * Clean and remove all instances used in module context.
    **/
    public function dispose():Void
    {
        dispatchEvent(new ContextEvent(ContextEvent.SHUTDOWN));
        commandMap.unmapEvents();
        moduleCommandMap.unmapEvents();
        moduleCommandMap = null;
        moduleDispatcher = null;
        contextView = null;
        injector = null;
        reflector = null;
        commandMap = null;
        mediatorMap = null;
        viewMap = null;
        eventDispatcher = null;
    }


    //---------------------------------------------------------------------
    //  Properties
    //---------------------------------------------------------------------

    /**
    * Event dispatcher shared between modules.
    **/
    public var moduleDispatcher(default, null):IModuleEventDispatcher;

    /**
    * Command map which maps module commands.
    **/
    public var moduleCommandMap(get_moduleCommandMap, null):IModuleCommandMap;

    /** @private **/
    private function get_moduleCommandMap():IModuleCommandMap {
        if (moduleCommandMap == null)
        {
            moduleCommandMap = new ModuleCommandMap(moduleDispatcher, createChildInjector(), reflector);
        }

        return moduleCommandMap;
    }

}
