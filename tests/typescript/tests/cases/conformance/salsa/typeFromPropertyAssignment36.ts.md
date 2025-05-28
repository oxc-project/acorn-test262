__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 832,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 21,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 21,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 14,
              "end": 21
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 369,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 29,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 49,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 54,
            "end": 62,
            "expression": {
              "type": "AssignmentExpression",
              "start": 54,
              "end": 62,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 54,
                "end": 57,
                "object": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 60,
                "end": 62,
                "value": 12,
                "raw": "12"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 70,
            "expression": {
              "type": "MemberExpression",
              "start": 67,
              "end": 70,
              "object": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 76,
            "end": 110,
            "test": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 83,
              "end": 110,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 93,
                  "end": 104,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 93,
                    "end": 104,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 93,
                      "end": 96,
                      "object": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 99,
                      "end": 104,
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 157,
            "expression": {
              "type": "MemberExpression",
              "start": 154,
              "end": 157,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 162,
            "end": 232,
            "test": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 169,
              "end": 196,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 179,
                  "end": 190,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 179,
                    "end": 190,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 179,
                      "end": 182,
                      "object": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 185,
                      "end": 190,
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 206,
              "end": 232,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 216,
                  "end": 226,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 216,
                    "end": 226,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 219,
                      "object": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 217,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 222,
                      "end": 226,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 240,
            "expression": {
              "type": "MemberExpression",
              "start": 237,
              "end": 240,
              "object": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 245,
            "end": 308,
            "test": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 252,
              "end": 275,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 269,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 262,
                    "end": 269,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 262,
                      "end": 265,
                      "object": {
                        "type": "Identifier",
                        "start": 262,
                        "end": 263,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 285,
              "end": 308,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 295,
                  "end": 302,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 295,
                    "end": 302,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 295,
                      "end": 298,
                      "object": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 301,
                      "end": 302,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 313,
            "end": 316,
            "expression": {
              "type": "MemberExpression",
              "start": 313,
              "end": 316,
              "object": {
                "type": "Identifier",
                "start": 313,
                "end": 314,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 321,
            "end": 354,
            "test": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 328,
              "end": 354,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 338,
                  "end": 348,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 338,
                    "end": 348,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 338,
                      "end": 341,
                      "object": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 339,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 341,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 344,
                      "end": 348,
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 359,
            "end": 367,
            "argument": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 468,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 456,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 459,
            "end": 468,
            "object": {
              "type": "CallExpression",
              "start": 459,
              "end": 466,
              "callee": {
                "type": "Identifier",
                "start": 459,
                "end": 460,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 461,
                  "end": 465,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 470,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 480,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 486,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 495,
      "expression": {
        "type": "AssignmentExpression",
        "start": 487,
        "end": 495,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 487,
          "end": 490,
          "object": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 489,
            "end": 490,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 493,
          "end": 495,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 499,
      "expression": {
        "type": "MemberExpression",
        "start": 496,
        "end": 499,
        "object": {
          "type": "Identifier",
          "start": 496,
          "end": 497,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 498,
          "end": 499,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 501,
      "end": 533,
      "test": {
        "type": "UnaryExpression",
        "start": 505,
        "end": 512,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 506,
          "end": 512,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 507,
            "end": 512,
            "value": false,
            "raw": "false"
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 514,
        "end": 533,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 531,
            "expression": {
              "type": "AssignmentExpression",
              "start": 520,
              "end": 531,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 520,
                "end": 523,
                "object": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 523,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 526,
                "end": 531,
                "value": false,
                "raw": "false"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 537,
      "expression": {
        "type": "MemberExpression",
        "start": 534,
        "end": 537,
        "object": {
          "type": "Identifier",
          "start": 534,
          "end": 535,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 536,
          "end": 537,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 538,
      "end": 594,
      "test": {
        "type": "UnaryExpression",
        "start": 542,
        "end": 549,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 543,
          "end": 549,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 544,
            "end": 549,
            "value": false,
            "raw": "false"
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 551,
        "end": 570,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 557,
            "end": 568,
            "expression": {
              "type": "AssignmentExpression",
              "start": 557,
              "end": 568,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 557,
                "end": 560,
                "object": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 563,
                "end": 568,
                "value": false,
                "raw": "false"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 576,
        "end": 594,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 582,
            "end": 592,
            "expression": {
              "type": "AssignmentExpression",
              "start": 582,
              "end": 592,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 582,
                "end": 585,
                "object": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 585,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 588,
                "end": 592,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 598,
      "expression": {
        "type": "MemberExpression",
        "start": 595,
        "end": 598,
        "object": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 597,
          "end": 598,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 599,
      "end": 648,
      "test": {
        "type": "UnaryExpression",
        "start": 603,
        "end": 610,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 604,
          "end": 610,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 605,
            "end": 610,
            "value": false,
            "raw": "false"
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 612,
        "end": 627,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 618,
            "end": 625,
            "expression": {
              "type": "AssignmentExpression",
              "start": 618,
              "end": 625,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 618,
                "end": 621,
                "object": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 620,
                  "end": 621,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 624,
                "end": 625,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 633,
        "end": 648,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 639,
            "end": 646,
            "expression": {
              "type": "AssignmentExpression",
              "start": 639,
              "end": 646,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 639,
                "end": 642,
                "object": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 645,
                "end": 646,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 649,
      "end": 652,
      "expression": {
        "type": "MemberExpression",
        "start": 649,
        "end": 652,
        "object": {
          "type": "Identifier",
          "start": 649,
          "end": 650,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 651,
          "end": 652,
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 687,
      "end": 711,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 693,
          "end": 711,
          "id": {
            "type": "Identifier",
            "start": 693,
            "end": 694,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 697,
            "end": 711,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 708,
              "end": 711,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 712,
      "end": 746,
      "test": {
        "type": "UnaryExpression",
        "start": 716,
        "end": 723,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 717,
          "end": 723,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 718,
            "end": 723,
            "value": false,
            "raw": "false"
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 725,
        "end": 746,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 731,
            "end": 744,
            "expression": {
              "type": "AssignmentExpression",
              "start": 731,
              "end": 744,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 731,
                "end": 740,
                "object": {
                  "type": "Identifier",
                  "start": 731,
                  "end": 732,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 740,
                  "decorators": [],
                  "name": "expando",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 743,
                "end": 744,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 747,
      "end": 756,
      "expression": {
        "type": "MemberExpression",
        "start": 747,
        "end": 756,
        "object": {
          "type": "Identifier",
          "start": 747,
          "end": 748,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 749,
          "end": 756,
          "decorators": [],
          "name": "expando",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 767,
      "end": 825,
      "test": {
        "type": "UnaryExpression",
        "start": 771,
        "end": 778,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 772,
          "end": 778,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 773,
            "end": 778,
            "value": false,
            "raw": "false"
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 780,
        "end": 801,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 786,
            "end": 799,
            "expression": {
              "type": "AssignmentExpression",
              "start": 786,
              "end": 799,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 786,
                "end": 792,
                "object": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 792,
                  "decorators": [],
                  "name": "both",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 795,
                "end": 799,
                "value": "hi",
                "raw": "'hi'"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 807,
        "end": 825,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 813,
            "end": 823,
            "expression": {
              "type": "AssignmentExpression",
              "start": 813,
              "end": 823,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 813,
                "end": 819,
                "object": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 814,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 819,
                  "decorators": [],
                  "name": "both",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 822,
                "end": 823,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 826,
      "end": 832,
      "expression": {
        "type": "MemberExpression",
        "start": 826,
        "end": 832,
        "object": {
          "type": "Identifier",
          "start": 826,
          "end": 827,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 828,
          "end": 832,
          "decorators": [],
          "name": "both",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
