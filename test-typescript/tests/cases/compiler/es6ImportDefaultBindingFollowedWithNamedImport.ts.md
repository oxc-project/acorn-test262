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
  "end": 674,
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
        "end": 85,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
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
            "name": "defaultBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
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
        "start": 122,
        "end": 174,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 190,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
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
            "name": "defaultBinding3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
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
        "start": 236,
        "end": 288,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 308,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 304,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 304,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
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
            "name": "defaultBinding4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 336,
            "end": 337,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 344,
            "end": 345,
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
        "start": 353,
        "end": 405,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 421,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 413,
              "end": 421,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 415,
                "end": 421
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
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
            "name": "defaultBinding5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
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
        "start": 489,
        "end": 541,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 561,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 557,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 557,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 551,
                "end": 557
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 560,
            "end": 561,
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
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 589,
            "end": 590,
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
        "start": 600,
        "end": 652,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 654,
      "end": 673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 658,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 668,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 660,
              "end": 668,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 662,
                "end": 668
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 671,
            "end": 672,
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
