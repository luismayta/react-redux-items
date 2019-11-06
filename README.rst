|license|

:Version: 0.0.0
:Web: https://github.com/luismayta/react-redux-items
:Download: https://github.com/luismayta/react-redux-items
:Source: https://github.com/luismayta/react-redux-items
:Keywords: React Redux Items

.. contents:: Table of Contents:
    :local:


React Redux Items
=================


License
-------

The code in this repository is licensed under the GPL unless
otherwise noted.

Please see LICENSE_ for details.

How To Contribute
-----------------

Contributions are very welcome.

Please read `How To Contribute` CONTRIBUTING_ for details.

Issue report template should be automatically applied if you are sending it from bitbucket UI as well; otherwise you
can find it at `ISSUE_TEMPLATE.md <https://github.com/luismayta/react-redux-items/blob/master/.github/issue_templates/ISSUE_TEMPLATE.md>`_

Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@luismayta.com.

Requirements
------------

This is a list of applications that need to be installed previously to
enjoy all the goodies of this configuration:

- `Pyenv`_
- `Docker`_
- `Tfenv`_
- `Terragrunt`_


Quickstart
----------

Project Start
^^^^^^^^^^^^^

.. code:: bash

    $ make environment
    $ pipenv shell --fancy
    $ make setup
    $ make yarn.install

Start Application
^^^^^^^^^^^^^^^^^

.. code:: bash

    $ make yarn.start

Troubleshooting
---------------

Wrong pre-commit with pyenv
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Execute the next:

.. code:: bash

    pyenv shell 3.7.3


License
=======

GNU

Changelog
---------

Please see `CHANGELOG`_ for more information what
has changed recently.

Contributing
============

Please see `CONTRIBUTING`_ for details.


Versioning
----------

Releases are managed using gitlab release feature. We use [Semantic Versioning](http://semver.org) for all
the releases. Every change made to the code base will be referred to in the release notes (except for
cleanups and refactorings).

Credits
-------

-  `CONTRIBUTORS`_

Made with :heart: :coffee: and :pizza: by `luismayta`_.

.. |license| image:: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
  :target: LICENSE
  :alt: License

.. Links
.. _`CHANGELOG`: docs/source/CHANGELOG.rst
.. _`CONTRIBUTORS`: docs/source/AUTHORS.rst
.. _`CONTRIBUTING`: docs/source/CONTRIBUTING.rst
.. _`LICENSE`: LICENSE


.. _`luismayta`: https://github.com/luismayta

.. dependences
.. _`Pyenv`: https://github.com/pyenv/pyenv
.. _`Docker`: https://www.docker.com/
.. _`Tfenv`: https://github.com/tfutils/tfenv
.. _`Terragrunt`: https://github.com/gruntwork-io/terragrunt
