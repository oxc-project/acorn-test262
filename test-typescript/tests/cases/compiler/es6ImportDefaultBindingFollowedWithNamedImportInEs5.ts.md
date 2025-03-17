__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 54,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 704,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 91,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 22,
            "name": "defaultBinding1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 90,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 92,
      "end": 185,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 99,
          "end": 114,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 114,
            "name": "defaultBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 118,
          "end": 119,
          "imported": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 127,
        "end": 184,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 200,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 200,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 194,
                "end": 200
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 206,
      "end": 304,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 213,
          "end": 228,
          "local": {
            "type": "Identifier",
            "start": 213,
            "end": 228,
            "name": "defaultBinding3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 232,
          "end": 238,
          "imported": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 246,
        "end": 303,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 319,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 325,
      "end": 426,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 332,
          "end": 347,
          "local": {
            "type": "Identifier",
            "start": 332,
            "end": 347,
            "name": "defaultBinding4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 351,
          "end": 352,
          "imported": {
            "type": "Identifier",
            "start": 351,
            "end": 352,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 351,
            "end": 352,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 354,
          "end": 360,
          "imported": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 359,
            "end": 360,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 368,
        "end": 425,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 445,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 441,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 441,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 435,
                "end": 441
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 461,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 461,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 455,
                "end": 461
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 467,
      "end": 567,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 474,
          "end": 489,
          "local": {
            "type": "Identifier",
            "start": 474,
            "end": 489,
            "name": "defaultBinding5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 493,
          "end": 499,
          "imported": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 498,
            "end": 499,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 509,
        "end": 566,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 582,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 585,
            "end": 586,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 588,
      "end": 683,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 595,
          "end": 610,
          "local": {
            "type": "Identifier",
            "start": 595,
            "end": 610,
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 614,
          "end": 615,
          "imported": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 625,
        "end": 682,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 684,
      "end": 703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 688,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 688,
            "end": 698,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 690,
              "end": 698,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 692,
                "end": 698
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 701,
            "end": 702,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
