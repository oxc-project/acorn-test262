__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 698,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 20,
      "end": 66,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 47,
        "decorators": [],
        "name": "isFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 52,
          "end": 65,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 65,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 109,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 92,
        "decorators": [],
        "name": "isObject",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 95,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 97,
          "end": 108,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 108,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 108,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 150,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 137,
        "decorators": [],
        "name": "isAnything",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 139,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 140,
        "end": 149,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 142,
          "end": 149,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 147,
              "end": 149,
              "members": []
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 191,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 175,
        "decorators": [],
        "name": "isError",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 190,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 180,
          "end": 190,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 190,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 190,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 190,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 192,
      "end": 230,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 215,
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 218,
        "end": 229,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 220,
          "end": 229,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 225,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 229,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "IfStatement",
      "start": 233,
      "end": 365,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 252,
        "end": 365,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 318,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 314,
              "end": 317,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 323,
            "end": 334,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 323,
              "end": 333,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 325,
                  "end": 326,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 328,
                  "end": 329,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 331,
                  "end": 332,
                  "raw": "3",
                  "value": 3
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 339,
            "end": 351,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 339,
              "end": 350,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 341,
                  "end": 349,
                  "raw": "\"hello!\"",
                  "value": "hello!"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 363,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 356,
              "end": 362,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 358,
                "end": 362,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 237,
        "end": 250,
        "arguments": [
          {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 237,
          "end": 247,
          "decorators": [],
          "name": "isFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 367,
      "end": 466,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 384,
        "end": 466,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 444,
            "end": 455,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 444,
              "end": 454,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 444,
                "end": 452,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 452,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 464,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 460,
              "end": 463,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 371,
        "end": 382,
        "arguments": [
          {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 371,
          "end": 379,
          "decorators": [],
          "name": "isObject",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 468,
      "end": 591,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 487,
        "end": 591,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 569,
            "end": 580,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 569,
              "end": 579,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 569,
                "end": 577,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 570,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 577,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 589,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 585,
              "end": 588,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 472,
        "end": 485,
        "arguments": [
          {
            "type": "Identifier",
            "start": 483,
            "end": 484,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 472,
          "end": 482,
          "decorators": [],
          "name": "isAnything",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 593,
      "end": 642,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 609,
        "end": 642,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 626,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 616,
              "end": 625,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 618,
                "end": 625,
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 631,
            "end": 640,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 631,
              "end": 639,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 631,
                "end": 632,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 639,
                "decorators": [],
                "name": "mesage",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 597,
        "end": 607,
        "arguments": [
          {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 597,
          "end": 604,
          "decorators": [],
          "name": "isError",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 644,
      "end": 697,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 659,
        "end": 697,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 665,
            "end": 677,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 665,
              "end": 676,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 665,
                "end": 674,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 666,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 674,
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 682,
            "end": 695,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 682,
              "end": 694,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 682,
                "end": 692,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 692,
                  "decorators": [],
                  "name": "getHuors",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 648,
        "end": 657,
        "arguments": [
          {
            "type": "Identifier",
            "start": 655,
            "end": 656,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 648,
          "end": 654,
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
