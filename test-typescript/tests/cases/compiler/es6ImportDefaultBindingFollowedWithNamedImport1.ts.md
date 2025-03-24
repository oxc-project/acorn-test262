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
            "value": 10
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
  "end": 751,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 85,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 84,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0"
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
      "start": 86,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 100,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 103,
            "end": 118,
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
      "start": 120,
      "end": 207,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 155,
        "end": 206,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 127,
          "end": 142,
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 142,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 146,
          "end": 147,
          "imported": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
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
      "start": 208,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 222,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 222,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 216,
                "end": 222
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 225,
            "end": 240,
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
      "start": 242,
      "end": 334,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 282,
        "end": 333,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 249,
          "end": 264,
          "local": {
            "type": "Identifier",
            "start": 249,
            "end": 264,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 268,
          "end": 274,
          "imported": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
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
      "start": 335,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 349,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 349,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 343,
                "end": 349
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 352,
            "end": 367,
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
      "start": 369,
      "end": 464,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 412,
        "end": 463,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 376,
          "end": 391,
          "local": {
            "type": "Identifier",
            "start": 376,
            "end": 391,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 395,
          "end": 396,
          "imported": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 398,
          "end": 404,
          "imported": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
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
      "start": 465,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 497,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 479,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 479,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 473,
                "end": 479
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 482,
            "end": 497,
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
      "start": 499,
      "end": 593,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 541,
        "end": 592,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 506,
          "end": 521,
          "local": {
            "type": "Identifier",
            "start": 506,
            "end": 521,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 525,
          "end": 531,
          "imported": {
            "type": "Identifier",
            "start": 525,
            "end": 526,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
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
      "start": 594,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 626,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 598,
            "end": 608,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 600,
              "end": 608,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 602,
                "end": 608
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 611,
            "end": 626,
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
      "start": 628,
      "end": 717,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 665,
        "end": 716,
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 635,
          "end": 650,
          "local": {
            "type": "Identifier",
            "start": 635,
            "end": 650,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 654,
          "end": 655,
          "imported": {
            "type": "Identifier",
            "start": 654,
            "end": 655,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 654,
            "end": 655,
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
      "start": 718,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 750,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 732,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 732,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 726,
                "end": 732
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 735,
            "end": 750,
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
