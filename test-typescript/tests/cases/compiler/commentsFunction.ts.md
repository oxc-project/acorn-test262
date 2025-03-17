__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 1419,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 100,
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 173,
        "name": "fooWithParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 203,
          "end": 212,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 212,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 206,
              "end": 212
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 259,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 259,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 253,
              "end": 259
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 279,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 267,
            "end": 277,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 271,
                "end": 276,
                "id": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 339,
      "expression": {
        "type": "CallExpression",
        "start": 312,
        "end": 338,
        "callee": {
          "type": "Identifier",
          "start": 312,
          "end": 329,
          "name": "fooWithParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 330,
            "end": 333,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "Literal",
            "start": 335,
            "end": 337,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 378,
            "name": "fooFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 381,
            "end": 465,
            "id": {
              "type": "Identifier",
              "start": 390,
              "end": 406,
              "name": "FooFunctionValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 437,
                "end": 446,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 438,
                  "end": 446,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 440,
                    "end": 446
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 448,
              "end": 465,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 454,
                  "end": 463,
                  "argument": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 505,
            "name": "lambdaFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 537,
            "end": 592,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 550,
                "end": 559,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 551,
                  "end": 559,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 553,
                    "end": 559
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 573,
                "end": 582,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 574,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 576,
                    "end": 582
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 587,
              "end": 592,
              "left": {
                "type": "Identifier",
                "start": 587,
                "end": 588,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 591,
                "end": 592,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 711,
          "id": {
            "type": "Identifier",
            "start": 598,
            "end": 617,
            "name": "lambddaNoVarComment",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 656,
            "end": 711,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 669,
                "end": 678,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 670,
                  "end": 678,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 672,
                    "end": 678
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 692,
                "end": 701,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 693,
                  "end": 701,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 695,
                    "end": 701
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 706,
              "end": 711,
              "left": {
                "type": "Identifier",
                "start": 706,
                "end": 707,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 710,
                "end": 711,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 713,
      "end": 731,
      "expression": {
        "type": "CallExpression",
        "start": 713,
        "end": 730,
        "callee": {
          "type": "Identifier",
          "start": 713,
          "end": 722,
          "name": "lambdaFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 723,
            "end": 725,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 727,
            "end": 729,
            "value": 20,
            "raw": "20"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 732,
      "end": 760,
      "expression": {
        "type": "CallExpression",
        "start": 732,
        "end": 759,
        "callee": {
          "type": "Identifier",
          "start": 732,
          "end": 751,
          "name": "lambddaNoVarComment",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 752,
            "end": 754,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 756,
            "end": 758,
            "value": 20,
            "raw": "20"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 762,
      "end": 834,
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 775,
        "name": "blah",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 776,
          "end": 785,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 777,
            "end": 785,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 779,
              "end": 785
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 831,
        "end": 834,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 836,
      "end": 923,
      "id": {
        "type": "Identifier",
        "start": 845,
        "end": 850,
        "name": "blah2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 851,
          "end": 860,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 852,
            "end": 860,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 854,
              "end": 860
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 920,
        "end": 923,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 925,
      "end": 990,
      "id": {
        "type": "Identifier",
        "start": 934,
        "end": 939,
        "name": "blah3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 940,
          "end": 949,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 941,
            "end": 949,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 943,
              "end": 949
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 987,
        "end": 990,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 992,
      "end": 1020,
      "expression": {
        "type": "AssignmentExpression",
        "start": 992,
        "end": 1019,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 992,
          "end": 1001,
          "name": "lambdaFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1004,
          "end": 1019,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1005,
              "end": 1006,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1008,
              "end": 1009,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BinaryExpression",
            "start": 1014,
            "end": 1019,
            "left": {
              "type": "Identifier",
              "start": 1014,
              "end": 1015,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1069,
      "end": 1077,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 1069,
        "end": 1076,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "Literal",
          "start": 1075,
          "end": 1076,
          "value": 0,
          "raw": "0"
        },
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1173,
      "end": 1183,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 1174,
        "end": 1181,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "Literal",
          "start": 1180,
          "end": 1181,
          "value": 0,
          "raw": "0"
        },
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1204,
      "end": 1263,
      "id": {
        "type": "Identifier",
        "start": 1213,
        "end": 1218,
        "name": "blah4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1224,
          "end": 1233,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1225,
            "end": 1233,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1227,
              "end": 1233
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1244,
          "end": 1253,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1245,
            "end": 1253,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1247,
              "end": 1253
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1260,
        "end": 1263,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1265,
      "end": 1309,
      "id": {
        "type": "Identifier",
        "start": 1274,
        "end": 1278,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1281,
        "end": 1309,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1311,
      "end": 1418,
      "id": {
        "type": "Identifier",
        "start": 1320,
        "end": 1324,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1327,
        "end": 1418,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
