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
        "start": 30,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 41,
            "end": 92
          }
        ],
        "start": 35,
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
        "start": 104,
        "end": 106
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 115,
            "end": 170
          }
        ],
        "start": 109,
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
        "start": 182,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 193,
            "end": 252
          }
        ],
        "start": 187,
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
        "start": 264,
        "end": 266
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 275,
            "end": 328
          }
        ],
        "start": 269,
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
        "start": 340,
        "end": 342
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 351,
            "end": 405
          }
        ],
        "start": 345,
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
        "start": 417,
        "end": 419
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 428,
            "end": 481
          }
        ],
        "start": 422,
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
        "start": 493,
        "end": 495
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 504,
            "end": 557
          }
        ],
        "start": 498,
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
        "start": 569,
        "end": 571
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 580,
            "end": 638
          }
        ],
        "start": 574,
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
        "start": 650,
        "end": 652
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 661,
            "end": 726
          }
        ],
        "start": 655,
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
        "start": 738,
        "end": 741
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
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
            "start": 750,
            "end": 802
          }
        ],
        "start": 744,
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
