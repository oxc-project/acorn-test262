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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 20,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 47,
        "name": "isFunction",
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
          "start": 48,
          "end": 49,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 52,
          "end": 65,
          "parameterName": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 92,
        "name": "isObject",
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
          "start": 93,
          "end": 94,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 95,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 97,
          "end": 108,
          "parameterName": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 108,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 137,
        "name": "isAnything",
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
          "start": 138,
          "end": 139,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 140,
        "end": 149,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 142,
          "end": 149,
          "parameterName": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 175,
        "name": "isError",
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
          "start": 176,
          "end": 177,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 190,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 180,
          "end": 190,
          "parameterName": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 190,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 190,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 192,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 215,
        "name": "isDate",
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
          "start": 216,
          "end": 217,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 218,
        "end": 229,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 220,
          "end": 229,
          "parameterName": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 225,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 229,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 233,
      "end": 365,
      "test": {
        "type": "CallExpression",
        "start": 237,
        "end": 250,
        "callee": {
          "type": "Identifier",
          "start": 237,
          "end": 247,
          "name": "isFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 252,
        "end": 365,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 318,
            "expression": {
              "type": "CallExpression",
              "start": 314,
              "end": 317,
              "callee": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "name": "x",
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
            "type": "ExpressionStatement",
            "start": 323,
            "end": 334,
            "expression": {
              "type": "CallExpression",
              "start": 323,
              "end": 333,
              "callee": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 325,
                  "end": 326,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 328,
                  "end": 329,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 331,
                  "end": 332,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 339,
            "end": 351,
            "expression": {
              "type": "CallExpression",
              "start": 339,
              "end": 350,
              "callee": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 341,
                  "end": 349,
                  "value": "hello!",
                  "raw": "\"hello!\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 363,
            "expression": {
              "type": "MemberExpression",
              "start": 356,
              "end": 362,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 358,
                "end": 362,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 367,
      "end": 466,
      "test": {
        "type": "CallExpression",
        "start": 371,
        "end": 382,
        "callee": {
          "type": "Identifier",
          "start": 371,
          "end": 379,
          "name": "isObject",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 384,
        "end": 466,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 444,
            "end": 455,
            "expression": {
              "type": "CallExpression",
              "start": 444,
              "end": 454,
              "callee": {
                "type": "MemberExpression",
                "start": 444,
                "end": 452,
                "object": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 452,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 464,
            "expression": {
              "type": "CallExpression",
              "start": 460,
              "end": 463,
              "callee": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 468,
      "end": 591,
      "test": {
        "type": "CallExpression",
        "start": 472,
        "end": 485,
        "callee": {
          "type": "Identifier",
          "start": 472,
          "end": 482,
          "name": "isAnything",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 483,
            "end": 484,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 487,
        "end": 591,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 569,
            "end": 580,
            "expression": {
              "type": "CallExpression",
              "start": 569,
              "end": 579,
              "callee": {
                "type": "MemberExpression",
                "start": 569,
                "end": 577,
                "object": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 570,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 577,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 589,
            "expression": {
              "type": "CallExpression",
              "start": 585,
              "end": 588,
              "callee": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 593,
      "end": 642,
      "test": {
        "type": "CallExpression",
        "start": 597,
        "end": 607,
        "callee": {
          "type": "Identifier",
          "start": 597,
          "end": 604,
          "name": "isError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 609,
        "end": 642,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 626,
            "expression": {
              "type": "MemberExpression",
              "start": 616,
              "end": 625,
              "object": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 618,
                "end": 625,
                "name": "message",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 631,
            "end": 640,
            "expression": {
              "type": "MemberExpression",
              "start": 631,
              "end": 639,
              "object": {
                "type": "Identifier",
                "start": 631,
                "end": 632,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 639,
                "name": "mesage",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 644,
      "end": 697,
      "test": {
        "type": "CallExpression",
        "start": 648,
        "end": 657,
        "callee": {
          "type": "Identifier",
          "start": 648,
          "end": 654,
          "name": "isDate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 655,
            "end": 656,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 659,
        "end": 697,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 665,
            "end": 677,
            "expression": {
              "type": "CallExpression",
              "start": 665,
              "end": 676,
              "callee": {
                "type": "MemberExpression",
                "start": 665,
                "end": 674,
                "object": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 666,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 674,
                  "name": "getDate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 682,
            "end": 695,
            "expression": {
              "type": "CallExpression",
              "start": 682,
              "end": 694,
              "callee": {
                "type": "MemberExpression",
                "start": 682,
                "end": 692,
                "object": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 692,
                  "name": "getHuors",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
