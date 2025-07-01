__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 22,
                    "end": 29
                  }
                ],
                "start": 15,
                "end": 29
              },
              "start": 13,
              "end": 29
            },
            "start": 4,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
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
                "start": 43,
                "end": 52
              },
              "prefix": true,
              "start": 36,
              "end": 52
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "boolean",
              "raw": "'boolean'",
              "start": 57,
              "end": 66
            },
            "start": 36,
            "end": 66
          },
          "operator": "&&",
          "right": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 80
            },
            "prefix": true,
            "start": 70,
            "end": 80
          },
          "start": 36,
          "end": 80
        },
        "operator": "||",
        "right": {
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
              "start": 92,
              "end": 101
            },
            "prefix": true,
            "start": 85,
            "end": 101
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "'string'",
            "start": 106,
            "end": 114
          },
          "start": 85,
          "end": 114
        },
        "start": 35,
        "end": 114
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
                  },
                  "start": 123,
                  "end": 136
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 147,
                        "end": 156
                      },
                      "prefix": true,
                      "start": 140,
                      "end": 156
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 161,
                      "end": 169
                    },
                    "start": 140,
                    "end": 169
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 182
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 185,
                    "end": 193
                  },
                  "start": 139,
                  "end": 193
                },
                "definite": false,
                "start": 123,
                "end": 193
              }
            ],
            "declare": false,
            "start": 119,
            "end": 194
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 206,
                      "end": 213
                    },
                    "start": 204,
                    "end": 213
                  },
                  "start": 200,
                  "end": 213
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 224,
                        "end": 233
                      },
                      "prefix": true,
                      "start": 217,
                      "end": 233
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'",
                      "start": 238,
                      "end": 247
                    },
                    "start": 217,
                    "end": 247
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 260
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 263,
                    "end": 268
                  },
                  "start": 216,
                  "end": 268
                },
                "definite": false,
                "start": 200,
                "end": 268
              }
            ],
            "declare": false,
            "start": 196,
            "end": 269
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 283,
                      "end": 289
                    },
                    "start": 281,
                    "end": 289
                  },
                  "start": 275,
                  "end": 289
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 300,
                        "end": 309
                      },
                      "prefix": true,
                      "start": 293,
                      "end": 309
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'",
                      "start": 314,
                      "end": 323
                    },
                    "start": 293,
                    "end": 323
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 336
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 339,
                    "end": 347
                  },
                  "start": 292,
                  "end": 347
                },
                "definite": false,
                "start": 275,
                "end": 347
              }
            ],
            "declare": false,
            "start": 271,
            "end": 348
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 361,
                      "end": 368
                    },
                    "start": 359,
                    "end": 368
                  },
                  "start": 354,
                  "end": 368
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 379,
                        "end": 388
                      },
                      "prefix": true,
                      "start": 372,
                      "end": 388
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 393,
                      "end": 401
                    },
                    "start": 372,
                    "end": 401
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 414
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 417,
                    "end": 422
                  },
                  "start": 371,
                  "end": 422
                },
                "definite": false,
                "start": 354,
                "end": 422
              }
            ],
            "declare": false,
            "start": 350,
            "end": 423
          }
        ],
        "start": 116,
        "end": 425
      },
      "alternate": null,
      "start": 31,
      "end": 425
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
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
                "start": 439,
                "end": 448
              },
              "prefix": true,
              "start": 432,
              "end": 448
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 453,
              "end": 461
            },
            "start": 432,
            "end": 461
          },
          "operator": "&&",
          "right": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 475
            },
            "prefix": true,
            "start": 465,
            "end": 475
          },
          "start": 432,
          "end": 475
        },
        "operator": "||",
        "right": {
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
              "start": 487,
              "end": 496
            },
            "prefix": true,
            "start": 480,
            "end": 496
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "'boolean'",
            "start": 501,
            "end": 510
          },
          "start": 480,
          "end": 510
        },
        "start": 431,
        "end": 510
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 526,
                      "end": 532
                    },
                    "start": 524,
                    "end": 532
                  },
                  "start": 519,
                  "end": 532
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 543,
                        "end": 552
                      },
                      "prefix": true,
                      "start": 536,
                      "end": 552
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 557,
                      "end": 565
                    },
                    "start": 536,
                    "end": 565
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 578
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 581,
                    "end": 589
                  },
                  "start": 535,
                  "end": 589
                },
                "definite": false,
                "start": 519,
                "end": 589
              }
            ],
            "declare": false,
            "start": 515,
            "end": 590
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 602,
                      "end": 609
                    },
                    "start": 600,
                    "end": 609
                  },
                  "start": 596,
                  "end": 609
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 620,
                        "end": 629
                      },
                      "prefix": true,
                      "start": 613,
                      "end": 629
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'",
                      "start": 634,
                      "end": 643
                    },
                    "start": 613,
                    "end": 643
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 656
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 659,
                    "end": 664
                  },
                  "start": 612,
                  "end": 664
                },
                "definite": false,
                "start": 596,
                "end": 664
              }
            ],
            "declare": false,
            "start": 592,
            "end": 665
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 679,
                      "end": 685
                    },
                    "start": 677,
                    "end": 685
                  },
                  "start": 671,
                  "end": 685
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 696,
                        "end": 705
                      },
                      "prefix": true,
                      "start": 689,
                      "end": 705
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'",
                      "start": 710,
                      "end": 719
                    },
                    "start": 689,
                    "end": 719
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 732
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 735,
                    "end": 743
                  },
                  "start": 688,
                  "end": 743
                },
                "definite": false,
                "start": 671,
                "end": 743
              }
            ],
            "declare": false,
            "start": 667,
            "end": 744
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 757,
                      "end": 764
                    },
                    "start": 755,
                    "end": 764
                  },
                  "start": 750,
                  "end": 764
                },
                "init": {
                  "type": "ConditionalExpression",
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
                        "start": 775,
                        "end": 784
                      },
                      "prefix": true,
                      "start": 768,
                      "end": 784
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 789,
                      "end": 797
                    },
                    "start": 768,
                    "end": 797
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 801,
                    "end": 810
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 813,
                    "end": 818
                  },
                  "start": 767,
                  "end": 818
                },
                "definite": false,
                "start": 750,
                "end": 818
              }
            ],
            "declare": false,
            "start": 746,
            "end": 819
          }
        ],
        "start": 512,
        "end": 821
      },
      "alternate": null,
      "start": 427,
      "end": 821
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 821
}
```
