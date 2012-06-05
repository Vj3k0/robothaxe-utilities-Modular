import massive.munit.TestSuite;

import ExampleTest;
import robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest;
import robothaxe.utilities.modular.tests.mvcs.ModuleContextTest;
import robothaxe.utilities.modular.tests.mvcs.ModuleActorTest;
import robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest;
import robothaxe.utilities.modular.tests.base.ModuleCommandMapTest;

/**
 * Auto generated Test Suite for MassiveUnit.
 * Refer to munit command line tool for more information (haxelib run munit)
 */

class TestSuite extends massive.munit.TestSuite
{		

	public function new()
	{
		super();

		add(ExampleTest);
		add(robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest);
		add(robothaxe.utilities.modular.tests.mvcs.ModuleContextTest);
		add(robothaxe.utilities.modular.tests.mvcs.ModuleActorTest);
		add(robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest);
		add(robothaxe.utilities.modular.tests.base.ModuleCommandMapTest);
	}
}
