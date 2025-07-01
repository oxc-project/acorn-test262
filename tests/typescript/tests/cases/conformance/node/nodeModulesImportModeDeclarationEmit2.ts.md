__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 33,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 30
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 30
          },
          "importKind": "value",
          "start": 14,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 38,
        "end": 43
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 53,
            "end": 70
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 72,
            "end": 81
          },
          "start": 53,
          "end": 81
        }
      ],
      "importKind": "type",
      "start": 0,
      "end": 84
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 114
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 114
          },
          "importKind": "value",
          "start": 99,
          "end": 114
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 122,
        "end": 127
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 137,
            "end": 154
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 156,
            "end": 164
          },
          "start": 137,
          "end": 164
        }
      ],
      "importKind": "type",
      "start": 85,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 200
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 225
            },
            "typeArguments": null,
            "start": 209,
            "end": 225
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 242
            },
            "typeArguments": null,
            "start": 227,
            "end": 242
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 243,
          "end": 245
        },
        "declare": false,
        "start": 176,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 169,
      "end": 245
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 276
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "importKind": "type",
          "start": 255,
          "end": 283
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 290,
        "end": 295
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 305,
            "end": 322
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 324,
            "end": 333
          },
          "start": 305,
          "end": 333
        }
      ],
      "importKind": "value",
      "start": 247,
      "end": 336
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 365
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Imp",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 372
          },
          "importKind": "type",
          "start": 345,
          "end": 372
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 379,
        "end": 384
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 394,
            "end": 411
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 413,
            "end": 421
          },
          "start": 394,
          "end": 421
        }
      ],
      "importKind": "value",
      "start": 337,
      "end": 424
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Loc",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 445
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "typeArguments": null,
            "start": 454,
            "end": 457
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Imp",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 462
            },
            "typeArguments": null,
            "start": 459,
            "end": 462
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 463,
          "end": 465
        },
        "declare": false,
        "start": 432,
        "end": 465
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 425,
      "end": 465
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 497
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 497
          },
          "exportKind": "value",
          "start": 481,
          "end": 497
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 505,
        "end": 510
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 520,
            "end": 537
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 539,
            "end": 548
          },
          "start": 520,
          "end": 548
        }
      ],
      "start": 467,
      "end": 551
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 581
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 581
          },
          "exportKind": "value",
          "start": 566,
          "end": 581
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 589,
        "end": 594
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 604,
            "end": 621
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 623,
            "end": 631
          },
          "start": 604,
          "end": 631
        }
      ],
      "start": 552,
      "end": 634
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 634
}
```
