__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
  "end": 787,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 92,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 91,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 106,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 109,
            "end": 124,
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 126,
      "end": 220,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 161,
        "end": 219,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 133,
          "end": 148,
          "local": {
            "type": "Identifier",
            "start": 133,
            "end": 148,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 152,
          "end": 153,
          "imported": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 252,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 234,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 234,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 228,
                "end": 234
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 237,
            "end": 252,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 254,
      "end": 353,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 294,
        "end": 352,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 261,
          "end": 276,
          "local": {
            "type": "Identifier",
            "start": 261,
            "end": 276,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 280,
          "end": 286,
          "imported": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 367,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 359,
              "end": 367,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 361,
                "end": 367
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 370,
            "end": 385,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 387,
      "end": 489,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 430,
        "end": 488,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 394,
          "end": 409,
          "local": {
            "type": "Identifier",
            "start": 394,
            "end": 409,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 413,
          "end": 414,
          "imported": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 416,
          "end": 422,
          "imported": {
            "type": "Identifier",
            "start": 416,
            "end": 417,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 421,
            "end": 422,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 521,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 503,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 503,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 497,
                "end": 503
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 506,
            "end": 521,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 523,
      "end": 624,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 565,
        "end": 623,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 530,
          "end": 545,
          "local": {
            "type": "Identifier",
            "start": 530,
            "end": 545,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 549,
          "end": 555,
          "imported": {
            "type": "Identifier",
            "start": 549,
            "end": 550,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 554,
            "end": 555,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 656,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 638,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 630,
              "end": 638,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 632,
                "end": 638
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 641,
            "end": 656,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 658,
      "end": 754,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 695,
        "end": 753,
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 665,
          "end": 680,
          "local": {
            "type": "Identifier",
            "start": 665,
            "end": 680,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 684,
          "end": 685,
          "imported": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 755,
      "end": 787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 759,
          "end": 786,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 759,
            "end": 768,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 760,
              "end": 768,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 762,
                "end": 768
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 771,
            "end": 786,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
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
