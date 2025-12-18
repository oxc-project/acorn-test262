__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 4,
    "end": 13,
    "range": [
      4,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 31,
    "end": 33,
    "range": [
      31,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 43,
    "end": 52,
    "range": [
      43,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 71,
    "end": 80,
    "range": [
      71,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 82,
    "end": 84,
    "range": [
      82,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 92,
    "end": 101,
    "range": [
      92,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 102,
    "end": 105,
    "range": [
      102,
      105
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 106,
    "end": 114,
    "range": [
      106,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 119,
    "end": 122,
    "range": [
      119,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 147,
    "end": 156,
    "range": [
      147,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 161,
    "end": 169,
    "range": [
      161,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 173,
    "end": 182,
    "range": [
      173,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 185,
    "end": 193,
    "range": [
      185,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 200,
    "end": 204,
    "range": [
      200,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 206,
    "end": 213,
    "range": [
      206,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 224,
    "end": 233,
    "range": [
      224,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 234,
    "end": 237,
    "range": [
      234,
      237
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 238,
    "end": 247,
    "range": [
      238,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 251,
    "end": 260,
    "range": [
      251,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 271,
    "end": 274,
    "range": [
      271,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 275,
    "end": 281,
    "range": [
      275,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 300,
    "end": 309,
    "range": [
      300,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 314,
    "end": 323,
    "range": [
      314,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 327,
    "end": 336,
    "range": [
      327,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 339,
    "end": 347,
    "range": [
      339,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "bool2",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 361,
    "end": 368,
    "range": [
      361,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 372,
    "end": 378,
    "range": [
      372,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 379,
    "end": 388,
    "range": [
      379,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 393,
    "end": 401,
    "range": [
      393,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 405,
    "end": 414,
    "range": [
      405,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 417,
    "end": 422,
    "range": [
      417,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 427,
    "end": 429,
    "range": [
      427,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 439,
    "end": 448,
    "range": [
      439,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 449,
    "end": 452,
    "range": [
      449,
      452
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 453,
    "end": 461,
    "range": [
      453,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 462,
    "end": 464,
    "range": [
      462,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 466,
    "end": 475,
    "range": [
      466,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 477,
    "end": 479,
    "range": [
      477,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 480,
    "end": 486,
    "range": [
      480,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 487,
    "end": 496,
    "range": [
      487,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 497,
    "end": 500,
    "range": [
      497,
      500
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 501,
    "end": 510,
    "range": [
      501,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 519,
    "end": 524,
    "range": [
      519,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 536,
    "end": 542,
    "range": [
      536,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 543,
    "end": 552,
    "range": [
      543,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 553,
    "end": 556,
    "range": [
      553,
      556
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 557,
    "end": 565,
    "range": [
      557,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 569,
    "end": 578,
    "range": [
      569,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 581,
    "end": 589,
    "range": [
      581,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 592,
    "end": 595,
    "range": [
      592,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 596,
    "end": 600,
    "range": [
      596,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 602,
    "end": 609,
    "range": [
      602,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 620,
    "end": 629,
    "range": [
      620,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 634,
    "end": 643,
    "range": [
      634,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 647,
    "end": 656,
    "range": [
      647,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 659,
    "end": 664,
    "range": [
      659,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 667,
    "end": 670,
    "range": [
      667,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 671,
    "end": 677,
    "range": [
      671,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 689,
    "end": 695,
    "range": [
      689,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 696,
    "end": 705,
    "range": [
      696,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 706,
    "end": 709,
    "range": [
      706,
      709
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 710,
    "end": 719,
    "range": [
      710,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 723,
    "end": 732,
    "range": [
      723,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 735,
    "end": 743,
    "range": [
      735,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 746,
    "end": 749,
    "range": [
      746,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "bool2",
    "start": 750,
    "end": 755,
    "range": [
      750,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 757,
    "end": 764,
    "range": [
      757,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 768,
    "end": 774,
    "range": [
      768,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 775,
    "end": 784,
    "range": [
      775,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 785,
    "end": 788,
    "range": [
      785,
      788
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 789,
    "end": 797,
    "range": [
      789,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 801,
    "end": 810,
    "range": [
      801,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 813,
    "end": 818,
    "range": [
      813,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  }
]
```
