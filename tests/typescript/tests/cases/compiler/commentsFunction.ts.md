__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 56,
        "end": 59
      },
      "expression": false,
      "start": 41,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 98
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 95,
        "end": 100
      },
      "directive": null,
      "start": 95,
      "end": 101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 206,
              "end": 212
            },
            "start": 204,
            "end": 212
          },
          "start": 203,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 253,
              "end": 259
            },
            "start": 251,
            "end": 259
          },
          "start": 250,
          "end": 259
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 276
                },
                "definite": false,
                "start": 271,
                "end": 276
              }
            ],
            "declare": false,
            "start": 267,
            "end": 277
          }
        ],
        "start": 261,
        "end": 279
      },
      "expression": false,
      "start": 147,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 330,
            "end": 333
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 335,
            "end": 337
          }
        ],
        "optional": false,
        "start": 312,
        "end": 338
      },
      "directive": null,
      "start": 312,
      "end": 339
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
            "name": "fooFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 378
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooFunctionValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 406
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 440,
                    "end": 446
                  },
                  "start": 438,
                  "end": 446
                },
                "start": 437,
                "end": 446
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "start": 454,
                  "end": 463
                }
              ],
              "start": 448,
              "end": 465
            },
            "expression": false,
            "start": 381,
            "end": 465
          },
          "definite": false,
          "start": 371,
          "end": 465
        }
      ],
      "declare": false,
      "start": 367,
      "end": 465
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
            "name": "lambdaFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 505
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 553,
                    "end": 559
                  },
                  "start": 551,
                  "end": 559
                },
                "start": 550,
                "end": 559
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 576,
                    "end": 582
                  },
                  "start": 574,
                  "end": 582
                },
                "start": 573,
                "end": 582
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 588
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 592
              },
              "start": 587,
              "end": 592
            },
            "id": null,
            "generator": false,
            "start": 537,
            "end": 592
          },
          "definite": false,
          "start": 496,
          "end": 592
        }
      ],
      "declare": false,
      "start": 492,
      "end": 593
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
            "name": "lambddaNoVarComment",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 617
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 672,
                    "end": 678
                  },
                  "start": 670,
                  "end": 678
                },
                "start": 669,
                "end": 678
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 695,
                    "end": 701
                  },
                  "start": 693,
                  "end": 701
                },
                "start": 692,
                "end": 701
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 707
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 711
              },
              "start": 706,
              "end": 711
            },
            "id": null,
            "generator": false,
            "start": 656,
            "end": 711
          },
          "definite": false,
          "start": 598,
          "end": 711
        }
      ],
      "declare": false,
      "start": 594,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambdaFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 722
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 723,
            "end": 725
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 727,
            "end": 729
          }
        ],
        "optional": false,
        "start": 713,
        "end": 730
      },
      "directive": null,
      "start": 713,
      "end": 731
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambddaNoVarComment",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 751
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 752,
            "end": 754
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 756,
            "end": 758
          }
        ],
        "optional": false,
        "start": 732,
        "end": 759
      },
      "directive": null,
      "start": 732,
      "end": 760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 775
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 779,
              "end": 785
            },
            "start": 777,
            "end": 785
          },
          "start": 776,
          "end": 785
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 831,
        "end": 834
      },
      "expression": false,
      "start": 762,
      "end": 834
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah2",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 850
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 854,
              "end": 860
            },
            "start": 852,
            "end": 860
          },
          "start": 851,
          "end": 860
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 920,
        "end": 923
      },
      "expression": false,
      "start": 836,
      "end": 923
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah3",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 939
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 943,
              "end": 949
            },
            "start": 941,
            "end": 949
          },
          "start": 940,
          "end": 949
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 987,
        "end": 990
      },
      "expression": false,
      "start": 925,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambdaFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 992,
          "end": 1001
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1006
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1009
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
            },
            "start": 1014,
            "end": 1019
          },
          "id": null,
          "generator": false,
          "start": 1004,
          "end": 1019
        },
        "start": 992,
        "end": 1019
      },
      "directive": null,
      "start": 992,
      "end": 1020
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1075,
          "end": 1076
        },
        "id": null,
        "generator": false,
        "start": 1069,
        "end": 1076
      },
      "directive": null,
      "start": 1069,
      "end": 1077
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1180,
          "end": 1181
        },
        "id": null,
        "generator": false,
        "start": 1174,
        "end": 1181
      },
      "directive": null,
      "start": 1173,
      "end": 1183
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1218
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1227,
              "end": 1233
            },
            "start": 1225,
            "end": 1233
          },
          "start": 1224,
          "end": 1233
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1247,
              "end": 1253
            },
            "start": 1245,
            "end": 1253
          },
          "start": 1244,
          "end": 1253
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1260,
        "end": 1263
      },
      "expression": false,
      "start": 1204,
      "end": 1263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1274,
        "end": 1278
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1281,
        "end": 1309
      },
      "expression": false,
      "start": 1265,
      "end": 1309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1320,
        "end": 1324
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1327,
        "end": 1418
      },
      "expression": false,
      "start": 1311,
      "end": 1418
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 1418
}
```
