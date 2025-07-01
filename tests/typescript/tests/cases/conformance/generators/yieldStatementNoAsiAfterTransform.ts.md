__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 82,
                  "end": 85
                },
                "start": 77,
                "end": 85
              },
              "start": 42,
              "end": 91
            },
            "directive": null,
            "start": 42,
            "end": 92
          }
        ],
        "start": 36,
        "end": 94
      },
      "expression": false,
      "start": 21,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 107
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 156,
                    "end": 159
                  },
                  "start": 151,
                  "end": 159
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 168,
                  "end": 169
                },
                "start": 122,
                "end": 169
              },
              "start": 116,
              "end": 169
            },
            "directive": null,
            "start": 116,
            "end": 170
          }
        ],
        "start": 110,
        "end": 172
      },
      "expression": false,
      "start": 95,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 185
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 234,
                    "end": 237
                  },
                  "start": 229,
                  "end": 237
                },
                "consequent": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 246,
                  "end": 247
                },
                "alternate": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 250,
                  "end": 251
                },
                "start": 200,
                "end": 251
              },
              "start": 194,
              "end": 251
            },
            "directive": null,
            "start": 194,
            "end": 252
          }
        ],
        "start": 188,
        "end": 254
      },
      "expression": false,
      "start": 173,
      "end": 254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t4",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 267
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 316,
                    "end": 319
                  },
                  "start": 311,
                  "end": 319
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "optional": false,
                "computed": false,
                "start": 282,
                "end": 327
              },
              "start": 276,
              "end": 327
            },
            "directive": null,
            "start": 276,
            "end": 328
          }
        ],
        "start": 270,
        "end": 330
      },
      "expression": false,
      "start": 255,
      "end": 330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 343
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 388
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 392,
                    "end": 395
                  },
                  "start": 387,
                  "end": 395
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 403
                },
                "optional": false,
                "computed": true,
                "start": 358,
                "end": 404
              },
              "start": 352,
              "end": 404
            },
            "directive": null,
            "start": 352,
            "end": 405
          }
        ],
        "start": 346,
        "end": 407
      },
      "expression": false,
      "start": 331,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t6",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 469,
                    "end": 472
                  },
                  "start": 464,
                  "end": 472
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 435,
                "end": 480
              },
              "start": 429,
              "end": 480
            },
            "directive": null,
            "start": 429,
            "end": 481
          }
        ],
        "start": 423,
        "end": 483
      },
      "expression": false,
      "start": 408,
      "end": 483
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t7",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 496
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 545,
                    "end": 548
                  },
                  "start": 540,
                  "end": 548
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 554,
                      "end": 556
                    }
                  ],
                  "expressions": [],
                  "start": 554,
                  "end": 556
                },
                "start": 511,
                "end": 556
              },
              "start": 505,
              "end": 556
            },
            "directive": null,
            "start": 505,
            "end": 557
          }
        ],
        "start": 499,
        "end": 559
      },
      "expression": false,
      "start": 484,
      "end": 559
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t8",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 572
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 616,
                    "end": 617
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 621,
                    "end": 624
                  },
                  "start": 616,
                  "end": 624
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 634,
                  "end": 637
                },
                "start": 587,
                "end": 637
              },
              "start": 581,
              "end": 637
            },
            "directive": null,
            "start": 581,
            "end": 638
          }
        ],
        "start": 575,
        "end": 640
      },
      "expression": false,
      "start": 560,
      "end": 640
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t9",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 653
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 702,
                    "end": 705
                  },
                  "start": 697,
                  "end": 705
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 722,
                  "end": 725
                },
                "start": 668,
                "end": 725
              },
              "start": 662,
              "end": 725
            },
            "directive": null,
            "start": 662,
            "end": 726
          }
        ],
        "start": 656,
        "end": 728
      },
      "expression": false,
      "start": 641,
      "end": 728
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t10",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 742
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 791,
                    "end": 794
                  },
                  "start": 786,
                  "end": 794
                },
                "start": 757,
                "end": 801
              },
              "start": 751,
              "end": 801
            },
            "directive": null,
            "start": 751,
            "end": 802
          }
        ],
        "start": 745,
        "end": 804
      },
      "expression": false,
      "start": 729,
      "end": 804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 804
}
```
