__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 10,
            "end": 27
          }
        ],
        "start": 8,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  }
                ],
                "start": 46,
                "end": 61
              },
              "start": 44,
              "end": 61
            },
            "start": 36,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 61
        }
      ],
      "declare": false,
      "start": 32,
      "end": 62
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 78,
                    "end": 84
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 87,
                    "end": 94
                  }
                ],
                "start": 78,
                "end": 94
              },
              "start": 76,
              "end": 94
            },
            "start": 67,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 94
        }
      ],
      "declare": false,
      "start": 63,
      "end": 95
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 120,
                    "end": 127
                  }
                ],
                "start": 111,
                "end": 127
              },
              "start": 109,
              "end": 127
            },
            "start": 100,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 127
        }
      ],
      "declare": false,
      "start": 96,
      "end": 127
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "typeArguments": null,
                    "start": 149,
                    "end": 150
                  }
                ],
                "start": 140,
                "end": 150
              },
              "start": 138,
              "end": 150
            },
            "start": 132,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 150
        }
      ],
      "declare": false,
      "start": 128,
      "end": 151
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 217
          },
          "prefix": true,
          "start": 202,
          "end": 217
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 221,
          "end": 229
        },
        "start": 202,
        "end": 229
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 243
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 254
                },
                "definite": false,
                "start": 241,
                "end": 254
              }
            ],
            "declare": false,
            "start": 237,
            "end": 255
          }
        ],
        "start": 231,
        "end": 276
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 294
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 305
                },
                "definite": false,
                "start": 292,
                "end": 305
              }
            ],
            "declare": false,
            "start": 288,
            "end": 306
          }
        ],
        "start": 282,
        "end": 327
      },
      "start": 198,
      "end": 327
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 349
          },
          "prefix": true,
          "start": 333,
          "end": 349
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 353,
          "end": 362
        },
        "start": 333,
        "end": 362
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 376
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 388
                },
                "definite": false,
                "start": 374,
                "end": 388
              }
            ],
            "declare": false,
            "start": 370,
            "end": 389
          }
        ],
        "start": 364,
        "end": 411
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 441
                },
                "definite": false,
                "start": 427,
                "end": 441
              }
            ],
            "declare": false,
            "start": 423,
            "end": 442
          }
        ],
        "start": 417,
        "end": 464
      },
      "start": 329,
      "end": 464
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 486
          },
          "prefix": true,
          "start": 470,
          "end": 486
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 490,
          "end": 498
        },
        "start": 470,
        "end": 498
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 512
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 524
                },
                "definite": false,
                "start": 510,
                "end": 524
              }
            ],
            "declare": false,
            "start": 506,
            "end": 525
          }
        ],
        "start": 500,
        "end": 547
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 565
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 577
                },
                "definite": false,
                "start": 563,
                "end": 577
              }
            ],
            "declare": false,
            "start": 559,
            "end": 578
          }
        ],
        "start": 553,
        "end": 600
      },
      "start": 466,
      "end": 600
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 619
          },
          "prefix": true,
          "start": 606,
          "end": 619
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 623,
          "end": 631
        },
        "start": 606,
        "end": 631
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 654
                },
                "definite": false,
                "start": 643,
                "end": 654
              }
            ],
            "declare": false,
            "start": 639,
            "end": 655
          }
        ],
        "start": 633,
        "end": 671
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 689
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 698
                },
                "definite": false,
                "start": 687,
                "end": 698
              }
            ],
            "declare": false,
            "start": 683,
            "end": 699
          }
        ],
        "start": 677,
        "end": 715
      },
      "start": 602,
      "end": 715
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 715
}
```
