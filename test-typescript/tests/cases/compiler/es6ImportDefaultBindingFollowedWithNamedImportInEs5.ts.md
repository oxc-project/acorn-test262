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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 53,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
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
  "end": 704,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 91,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 90,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 22,
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 92,
      "end": 185,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 127,
        "end": 184,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 99,
          "end": 114,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 114,
            "decorators": [],
            "name": "defaultBinding2",
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
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 200,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 200,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 194,
                "end": 200
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 206,
      "end": 304,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 246,
        "end": 303,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 213,
          "end": 228,
          "local": {
            "type": "Identifier",
            "start": 213,
            "end": 228,
            "decorators": [],
            "name": "defaultBinding3",
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
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 319,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 325,
      "end": 426,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 368,
        "end": 425,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 332,
          "end": 347,
          "local": {
            "type": "Identifier",
            "start": 332,
            "end": 347,
            "decorators": [],
            "name": "defaultBinding4",
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
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 351,
            "end": 352,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 354,
          "end": 360,
          "imported": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 359,
            "end": 360,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 441,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 441,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 435,
                "end": 441
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 461,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 461,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 455,
                "end": 461
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 467,
      "end": 567,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 509,
        "end": 566,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 474,
          "end": 489,
          "local": {
            "type": "Identifier",
            "start": 474,
            "end": 489,
            "decorators": [],
            "name": "defaultBinding5",
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
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 498,
            "end": 499,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 582,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 585,
            "end": 586,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 588,
      "end": 683,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 625,
        "end": 682,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImportInEs5_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 595,
          "end": 610,
          "local": {
            "type": "Identifier",
            "start": 595,
            "end": 610,
            "decorators": [],
            "name": "defaultBinding6",
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
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 688,
            "end": 698,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 690,
              "end": 698,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 692,
                "end": 698
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 701,
            "end": 702,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
