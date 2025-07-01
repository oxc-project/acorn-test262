__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "definite": false,
            "start": 30,
            "end": 35
          }
        ],
        "declare": false,
        "start": 26,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "definite": false,
            "start": 48,
            "end": 53
          }
        ],
        "declare": false,
        "start": 44,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 22
          },
          "start": 7,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "start": 33,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 91
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 114
          },
          "start": 99,
          "end": 114
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "importKind": "value",
          "start": 118,
          "end": 119
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "start": 127,
        "end": 184
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 92,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 194,
                "end": 200
              },
              "start": 192,
              "end": 200
            },
            "start": 190,
            "end": 200
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "definite": false,
          "start": 190,
          "end": 204
        }
      ],
      "declare": false,
      "start": 186,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 228
          },
          "start": 213,
          "end": 228
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 238
          },
          "importKind": "value",
          "start": 232,
          "end": 238
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "start": 246,
        "end": 303
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 304
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              },
              "start": 311,
              "end": 319
            },
            "start": 309,
            "end": 319
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 323
          },
          "definite": false,
          "start": 309,
          "end": 323
        }
      ],
      "declare": false,
      "start": 305,
      "end": 324
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 347
          },
          "start": 332,
          "end": 347
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 352
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 352
          },
          "importKind": "value",
          "start": 351,
          "end": 352
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 355
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 360
          },
          "importKind": "value",
          "start": 354,
          "end": 360
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "start": 368,
        "end": 425
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 325,
      "end": 426
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 435,
                "end": 441
              },
              "start": 433,
              "end": 441
            },
            "start": 431,
            "end": 441
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 445
          },
          "definite": false,
          "start": 431,
          "end": 445
        }
      ],
      "declare": false,
      "start": 427,
      "end": 446
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 455,
                "end": 461
              },
              "start": 453,
              "end": 461
            },
            "start": 451,
            "end": 461
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 465
          },
          "definite": false,
          "start": 451,
          "end": 465
        }
      ],
      "declare": false,
      "start": 447,
      "end": 466
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 489
          },
          "start": 474,
          "end": 489
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 499
          },
          "importKind": "value",
          "start": 493,
          "end": 499
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "start": 509,
        "end": 566
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 467,
      "end": 567
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
            },
            "start": 572,
            "end": 582
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 586
          },
          "definite": false,
          "start": 572,
          "end": 586
        }
      ],
      "declare": false,
      "start": 568,
      "end": 587
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 610
          },
          "start": 595,
          "end": 610
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 615
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 615
          },
          "importKind": "value",
          "start": 614,
          "end": 615
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "start": 625,
        "end": 682
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 588,
      "end": 683
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 692,
                "end": 698
              },
              "start": 690,
              "end": 698
            },
            "start": 688,
            "end": 698
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 702
          },
          "definite": false,
          "start": 688,
          "end": 702
        }
      ],
      "declare": false,
      "start": 684,
      "end": 703
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 703
}
```
