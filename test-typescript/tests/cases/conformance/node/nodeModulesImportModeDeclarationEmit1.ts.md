__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 36,
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 36,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 634,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 84,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 53,
          "end": 81,
          "key": {
            "type": "Literal",
            "start": 53,
            "end": 70,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "regex": null,
            "bigint": null
          },
          "value": {
            "type": "Literal",
            "start": 72,
            "end": 81,
            "raw": "\"require\"",
            "value": "require",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 43,
        "raw": "\"pkg\"",
        "value": "pkg",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 30,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 30,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 30,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 85,
      "end": 167,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 137,
          "end": 164,
          "key": {
            "type": "Literal",
            "start": 137,
            "end": 154,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "regex": null,
            "bigint": null
          },
          "value": {
            "type": "Literal",
            "start": 156,
            "end": 164,
            "raw": "\"import\"",
            "value": "import",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 122,
        "end": 127,
        "raw": "\"pkg\"",
        "value": "pkg",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 99,
          "end": 114,
          "imported": {
            "type": "Identifier",
            "start": 99,
            "end": 114,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 114,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 245,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 176,
        "end": 245,
        "body": {
          "type": "TSInterfaceBody",
          "start": 243,
          "end": 245,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 209,
            "end": 225,
            "expression": {
              "type": "Identifier",
              "start": 209,
              "end": 225,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 227,
            "end": 242,
            "expression": {
              "type": "Identifier",
              "start": 227,
              "end": 242,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 186,
          "end": 200,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 247,
      "end": 336,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 305,
          "end": 333,
          "key": {
            "type": "Literal",
            "start": 305,
            "end": 322,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "regex": null,
            "bigint": null
          },
          "value": {
            "type": "Literal",
            "start": 324,
            "end": 333,
            "raw": "\"require\"",
            "value": "require",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 290,
        "end": 295,
        "raw": "\"pkg\"",
        "value": "pkg",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 255,
          "end": 283,
          "imported": {
            "type": "Identifier",
            "start": 260,
            "end": 276,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 337,
      "end": 424,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 394,
          "end": 421,
          "key": {
            "type": "Literal",
            "start": 394,
            "end": 411,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "regex": null,
            "bigint": null
          },
          "value": {
            "type": "Literal",
            "start": 413,
            "end": 421,
            "raw": "\"import\"",
            "value": "import",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 379,
        "end": 384,
        "raw": "\"pkg\"",
        "value": "pkg",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 345,
          "end": 372,
          "imported": {
            "type": "Identifier",
            "start": 350,
            "end": 365,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 369,
            "end": 372,
            "decorators": [],
            "name": "Imp",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 425,
      "end": 465,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 432,
        "end": 465,
        "body": {
          "type": "TSInterfaceBody",
          "start": 463,
          "end": 465,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 454,
            "end": 457,
            "expression": {
              "type": "Identifier",
              "start": 454,
              "end": 457,
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 459,
            "end": 462,
            "expression": {
              "type": "Identifier",
              "start": 459,
              "end": 462,
              "decorators": [],
              "name": "Imp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 442,
          "end": 445,
          "decorators": [],
          "name": "Loc",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 467,
      "end": 551,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 520,
          "end": 548,
          "key": {
            "type": "Literal",
            "start": 520,
            "end": 537,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "regex": null,
            "bigint": null
          },
          "value": {
            "type": "Literal",
            "start": 539,
            "end": 548,
            "raw": "\"require\"",
            "value": "require",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 505,
        "end": 510,
        "raw": "\"pkg\"",
        "value": "pkg",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 481,
          "end": 497,
          "exported": {
            "type": "Identifier",
            "start": 481,
            "end": 497,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 481,
            "end": 497,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 552,
      "end": 634,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 604,
          "end": 631,
          "key": {
            "type": "Literal",
            "start": 604,
            "end": 621,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "regex": null,
            "bigint": null
          },
          "value": {
            "type": "Literal",
            "start": 623,
            "end": 631,
            "raw": "\"import\"",
            "value": "import",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 589,
        "end": 594,
        "raw": "\"pkg\"",
        "value": "pkg",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 566,
          "end": 581,
          "exported": {
            "type": "Identifier",
            "start": 566,
            "end": 581,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 566,
            "end": 581,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
