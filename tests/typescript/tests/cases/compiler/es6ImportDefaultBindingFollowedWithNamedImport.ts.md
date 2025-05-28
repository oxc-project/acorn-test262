__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 54,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 54,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 55,
      "end": 73,
      "declaration": {
        "type": "ObjectExpression",
        "start": 70,
        "end": 72,
        "properties": []
      },
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
  "end": 673,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 86,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 85,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 175,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 94,
          "end": 109,
          "local": {
            "type": "Identifier",
            "start": 94,
            "end": 109,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 113,
          "end": 114,
          "imported": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 122,
        "end": 174,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 195,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 190,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 196,
      "end": 289,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 203,
          "end": 218,
          "local": {
            "type": "Identifier",
            "start": 203,
            "end": 218,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 222,
          "end": 228,
          "imported": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 236,
        "end": 288,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 309,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 308,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 304,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 304,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 310,
      "end": 406,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 317,
          "end": 332,
          "local": {
            "type": "Identifier",
            "start": 317,
            "end": 332,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 336,
          "end": 337,
          "imported": {
            "type": "Identifier",
            "start": 336,
            "end": 337,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 336,
            "end": 337,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 339,
          "end": 345,
          "imported": {
            "type": "Identifier",
            "start": 339,
            "end": 340,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 344,
            "end": 345,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 353,
        "end": 405,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 426,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 421,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 413,
              "end": 421,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 415,
                "end": 421
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 446,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 445,
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 447,
      "end": 542,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 454,
          "end": 469,
          "local": {
            "type": "Identifier",
            "start": 454,
            "end": 469,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 473,
          "end": 479,
          "imported": {
            "type": "Identifier",
            "start": 473,
            "end": 474,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 489,
        "end": 541,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 562,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 561,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 557,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 557,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 551,
                "end": 557
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 560,
            "end": 561,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 563,
      "end": 653,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 570,
          "end": 585,
          "local": {
            "type": "Identifier",
            "start": 570,
            "end": 585,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 589,
          "end": 590,
          "imported": {
            "type": "Identifier",
            "start": 589,
            "end": 590,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 589,
            "end": 590,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 600,
        "end": 652,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 654,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 658,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 668,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 660,
              "end": 668,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 662,
                "end": 668
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 671,
            "end": 672,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
