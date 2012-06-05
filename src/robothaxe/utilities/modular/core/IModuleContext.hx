package robothaxe.utilities.modular.core;

import robothaxe.core.IContext;

/**
* The IModuleContext interface is implemented by context which
* needs to communicate to other modules which may have different context.
**/
interface IModuleContext implements IContext {

    /**
    * Module context needs to dispose all resources allocated to
    * make them available for garbage collection.
    **/
    function dispose():Void;

}
