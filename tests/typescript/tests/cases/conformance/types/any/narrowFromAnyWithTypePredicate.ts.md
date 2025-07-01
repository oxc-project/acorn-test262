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
            "name": "x",
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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 65
              },
              "typeArguments": null,
              "start": 57,
              "end": 65
            },
            "start": 57,
            "end": 65
          },
          "start": 52,
          "end": 65
        },
        "start": 50,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 20,
      "end": 66
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 92
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 94
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 108
              },
              "typeArguments": null,
              "start": 102,
              "end": 108
            },
            "start": 102,
            "end": 108
          },
          "start": 97,
          "end": 108
        },
        "start": 95,
        "end": 108
      },
      "body": null,
      "expression": false,
      "start": 67,
      "end": 109
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAnything",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 139
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 147,
              "end": 149
            },
            "start": 147,
            "end": 149
          },
          "start": 142,
          "end": 149
        },
        "start": 140,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 110,
      "end": 150
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isError",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 181
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 190
              },
              "typeArguments": null,
              "start": 185,
              "end": 190
            },
            "start": 185,
            "end": 190
          },
          "start": 180,
          "end": 190
        },
        "start": 178,
        "end": 190
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 191
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 215
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 217
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 229
              },
              "typeArguments": null,
              "start": 225,
              "end": 229
            },
            "start": 225,
            "end": 229
          },
          "start": 220,
          "end": 229
        },
        "start": 218,
        "end": 229
      },
      "body": null,
      "expression": false,
      "start": 192,
      "end": 230
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 247
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          }
        ],
        "optional": false,
        "start": 237,
        "end": 250
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 315
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 314,
              "end": 317
            },
            "directive": null,
            "start": 314,
            "end": 318
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 324
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 325,
                  "end": 326
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 328,
                  "end": 329
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 331,
                  "end": 332
                }
              ],
              "optional": false,
              "start": 323,
              "end": 333
            },
            "directive": null,
            "start": 323,
            "end": 334
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello!",
                  "raw": "\"hello!\"",
                  "start": 341,
                  "end": 349
                }
              ],
              "optional": false,
              "start": 339,
              "end": 350
            },
            "directive": null,
            "start": 339,
            "end": 351
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 362
              },
              "optional": false,
              "computed": false,
              "start": 356,
              "end": 362
            },
            "directive": null,
            "start": 356,
            "end": 363
          }
        ],
        "start": 252,
        "end": 365
      },
      "alternate": null,
      "start": 233,
      "end": 365
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 379
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          }
        ],
        "optional": false,
        "start": 371,
        "end": 382
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 445
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 452
                },
                "optional": false,
                "computed": false,
                "start": 444,
                "end": 452
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 444,
              "end": 454
            },
            "directive": null,
            "start": 444,
            "end": 455
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 460,
              "end": 463
            },
            "directive": null,
            "start": 460,
            "end": 464
          }
        ],
        "start": 384,
        "end": 466
      },
      "alternate": null,
      "start": 367,
      "end": 466
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isAnything",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 482
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 484
          }
        ],
        "optional": false,
        "start": 472,
        "end": 485
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 570
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 577
                },
                "optional": false,
                "computed": false,
                "start": 569,
                "end": 577
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 569,
              "end": 579
            },
            "directive": null,
            "start": 569,
            "end": 580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 586
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 585,
              "end": 588
            },
            "directive": null,
            "start": 585,
            "end": 589
          }
        ],
        "start": 487,
        "end": 591
      },
      "alternate": null,
      "start": 468,
      "end": 591
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isError",
          "optional": false,
          "typeAnnotation": null,
          "start": 597,
          "end": 604
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 606
          }
        ],
        "optional": false,
        "start": 597,
        "end": 607
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 617
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 625
              },
              "optional": false,
              "computed": false,
              "start": 616,
              "end": 625
            },
            "directive": null,
            "start": 616,
            "end": 626
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mesage",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 639
              },
              "optional": false,
              "computed": false,
              "start": 631,
              "end": 639
            },
            "directive": null,
            "start": 631,
            "end": 640
          }
        ],
        "start": 609,
        "end": 642
      },
      "alternate": null,
      "start": 593,
      "end": 642
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 656
          }
        ],
        "optional": false,
        "start": 648,
        "end": 657
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 666
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 674
                },
                "optional": false,
                "computed": false,
                "start": 665,
                "end": 674
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 665,
              "end": 676
            },
            "directive": null,
            "start": 665,
            "end": 677
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 683
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getHuors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 692
                },
                "optional": false,
                "computed": false,
                "start": 682,
                "end": 692
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 682,
              "end": 694
            },
            "directive": null,
            "start": 682,
            "end": 695
          }
        ],
        "start": 659,
        "end": 697
      },
      "alternate": null,
      "start": 644,
      "end": 697
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 697
}
```
