__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1176,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "func1",
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
        "start": 17,
        "end": 262,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 23,
            "end": 31,
            "expression": {
              "type": "CallExpression",
              "start": 23,
              "end": 30,
              "callee": {
                "type": "Identifier",
                "start": 23,
                "end": 28,
                "name": "aFunc",
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
            "start": 37,
            "end": 62,
            "expression": {
              "type": "CallExpression",
              "start": 37,
              "end": 61,
              "callee": {
                "type": "MemberExpression",
                "start": 37,
                "end": 48,
                "object": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 44,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 49,
                  "end": 60,
                  "object": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 54,
                    "name": "EnumA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 60,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 92,
            "expression": {
              "type": "CallExpression",
              "start": 67,
              "end": 91,
              "callee": {
                "type": "MemberExpression",
                "start": 67,
                "end": 78,
                "object": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 74,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 78,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 79,
                  "end": 90,
                  "object": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 84,
                    "name": "EnumB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 90,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 105,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 111,
            "end": 203,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "name": "aFunc",
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
              "start": 128,
              "end": 203,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 138,
                  "end": 163,
                  "expression": {
                    "type": "CallExpression",
                    "start": 138,
                    "end": 162,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 138,
                      "end": 149,
                      "object": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 145,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 149,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 161,
                        "object": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 155,
                          "name": "EnumA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 161,
                          "name": "Value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 172,
                  "end": 197,
                  "expression": {
                    "type": "CallExpression",
                    "start": 172,
                    "end": 196,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 172,
                      "end": 183,
                      "object": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 179,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 183,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 184,
                        "end": 195,
                        "object": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 189,
                          "name": "EnumB",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 195,
                          "name": "Value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSEnumDeclaration",
            "start": 209,
            "end": 229,
            "id": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "name": "EnumA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 222,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 227,
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 220,
              "end": 229,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 222,
                  "end": 227,
                  "id": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 227,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 234,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 250,
              "name": "EnumB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 253,
                "end": 258,
                "id": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 258,
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": true,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 251,
              "end": 260,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 253,
                  "end": 258,
                  "id": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 258,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 278,
        "name": "func2",
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
        "start": 281,
        "end": 431,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 287,
            "end": 295,
            "expression": {
              "type": "CallExpression",
              "start": 287,
              "end": 294,
              "callee": {
                "type": "Identifier",
                "start": 287,
                "end": 292,
                "name": "aFunc",
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
            "start": 301,
            "end": 326,
            "expression": {
              "type": "CallExpression",
              "start": 301,
              "end": 325,
              "callee": {
                "type": "MemberExpression",
                "start": 301,
                "end": 312,
                "object": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 308,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 312,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 313,
                  "end": 324,
                  "object": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 318,
                    "name": "EnumA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 324,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 332,
            "end": 339,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 345,
            "end": 403,
            "id": {
              "type": "Identifier",
              "start": 354,
              "end": 359,
              "name": "aFunc",
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
              "start": 362,
              "end": 403,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 372,
                  "end": 397,
                  "expression": {
                    "type": "CallExpression",
                    "start": 372,
                    "end": 396,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 372,
                      "end": 383,
                      "object": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 379,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 383,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 384,
                        "end": 395,
                        "object": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 389,
                          "name": "EnumA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 395,
                          "name": "Value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSEnumDeclaration",
            "start": 409,
            "end": 429,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 419,
              "name": "EnumA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 422,
                "end": 427,
                "id": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 427,
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 420,
              "end": 429,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 422,
                  "end": 427,
                  "id": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 427,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 433,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 447,
        "name": "func3",
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
        "start": 450,
        "end": 606,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 456,
            "end": 464,
            "expression": {
              "type": "CallExpression",
              "start": 456,
              "end": 463,
              "callee": {
                "type": "Identifier",
                "start": 456,
                "end": 461,
                "name": "aFunc",
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
            "start": 470,
            "end": 495,
            "expression": {
              "type": "CallExpression",
              "start": 470,
              "end": 494,
              "callee": {
                "type": "MemberExpression",
                "start": 470,
                "end": 481,
                "object": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 477,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 481,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 482,
                  "end": 493,
                  "object": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 487,
                    "name": "EnumB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 493,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 501,
            "end": 508,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 514,
            "end": 572,
            "id": {
              "type": "Identifier",
              "start": 523,
              "end": 528,
              "name": "aFunc",
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
              "start": 531,
              "end": 572,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 541,
                  "end": 566,
                  "expression": {
                    "type": "CallExpression",
                    "start": 541,
                    "end": 565,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 541,
                      "end": 552,
                      "object": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 548,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 552,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 553,
                        "end": 564,
                        "object": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 558,
                          "name": "EnumB",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 564,
                          "name": "Value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSEnumDeclaration",
            "start": 578,
            "end": 604,
            "id": {
              "type": "Identifier",
              "start": 589,
              "end": 594,
              "name": "EnumB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 597,
                "end": 602,
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 602,
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": true,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 595,
              "end": 604,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 597,
                  "end": 602,
                  "id": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 602,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 608,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 622,
        "name": "func4",
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
        "start": 625,
        "end": 794,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 631,
            "end": 639,
            "expression": {
              "type": "CallExpression",
              "start": 631,
              "end": 638,
              "callee": {
                "type": "Identifier",
                "start": 631,
                "end": 636,
                "name": "aFunc",
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
            "start": 645,
            "end": 671,
            "expression": {
              "type": "CallExpression",
              "start": 645,
              "end": 670,
              "callee": {
                "type": "MemberExpression",
                "start": 645,
                "end": 656,
                "object": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 652,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 656,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 657,
                  "end": 669,
                  "object": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 663,
                    "name": "ClassA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 669,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 677,
            "end": 684,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 690,
            "end": 749,
            "id": {
              "type": "Identifier",
              "start": 699,
              "end": 704,
              "name": "aFunc",
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
              "start": 707,
              "end": 749,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 717,
                  "end": 743,
                  "expression": {
                    "type": "CallExpression",
                    "start": 717,
                    "end": 742,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 717,
                      "end": 728,
                      "object": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 724,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 725,
                        "end": 728,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 729,
                        "end": 741,
                        "object": {
                          "type": "Identifier",
                          "start": 729,
                          "end": 735,
                          "name": "ClassA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 736,
                          "end": 741,
                          "name": "Value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ClassDeclaration",
            "start": 755,
            "end": 792,
            "id": {
              "type": "Identifier",
              "start": 761,
              "end": 767,
              "name": "ClassA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 768,
              "end": 792,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 770,
                  "end": 790,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 782,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 785,
                    "end": 789,
                    "value": 1234,
                    "raw": "1234"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 796,
      "end": 1175,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 810,
        "name": "func5",
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
        "start": 813,
        "end": 1175,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 816,
            "end": 824,
            "expression": {
              "type": "CallExpression",
              "start": 816,
              "end": 823,
              "callee": {
                "type": "Identifier",
                "start": 816,
                "end": 821,
                "name": "aFunc",
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
            "start": 827,
            "end": 846,
            "expression": {
              "type": "CallExpression",
              "start": 827,
              "end": 845,
              "callee": {
                "type": "MemberExpression",
                "start": 827,
                "end": 838,
                "object": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 834,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 838,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 839,
                  "end": 844,
                  "object": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 842,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 844,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 848,
            "end": 871,
            "expression": {
              "type": "CallExpression",
              "start": 848,
              "end": 870,
              "callee": {
                "type": "MemberExpression",
                "start": 848,
                "end": 859,
                "object": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 855,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 859,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 860,
                  "end": 869,
                  "object": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 864,
                    "name": "blah",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 869,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 873,
            "end": 895,
            "expression": {
              "type": "CallExpression",
              "start": 873,
              "end": 895,
              "callee": {
                "type": "MemberExpression",
                "start": 873,
                "end": 884,
                "object": {
                  "type": "Identifier",
                  "start": 873,
                  "end": 880,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 884,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "NewExpression",
                  "start": 885,
                  "end": 894,
                  "callee": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 892,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 897,
            "end": 920,
            "expression": {
              "type": "CallExpression",
              "start": 897,
              "end": 919,
              "callee": {
                "type": "MemberExpression",
                "start": 897,
                "end": 908,
                "object": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 904,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 908,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 909,
                  "end": 918,
                  "object": {
                    "type": "Identifier",
                    "start": 909,
                    "end": 912,
                    "name": "Baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 913,
                    "end": 918,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 924,
            "end": 931,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 934,
            "end": 1054,
            "id": {
              "type": "Identifier",
              "start": 943,
              "end": 948,
              "name": "aFunc",
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
              "start": 951,
              "end": 1054,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 955,
                  "end": 974,
                  "expression": {
                    "type": "CallExpression",
                    "start": 955,
                    "end": 973,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 955,
                      "end": 966,
                      "object": {
                        "type": "Identifier",
                        "start": 955,
                        "end": 962,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 966,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 967,
                        "end": 972,
                        "object": {
                          "type": "Identifier",
                          "start": 967,
                          "end": 970,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 971,
                          "end": 972,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 977,
                  "end": 1000,
                  "expression": {
                    "type": "CallExpression",
                    "start": 977,
                    "end": 999,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 977,
                      "end": 988,
                      "object": {
                        "type": "Identifier",
                        "start": 977,
                        "end": 984,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 985,
                        "end": 988,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 989,
                        "end": 998,
                        "object": {
                          "type": "Identifier",
                          "start": 989,
                          "end": 993,
                          "name": "blah",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 994,
                          "end": 998,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1003,
                  "end": 1025,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1003,
                    "end": 1025,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1003,
                      "end": 1014,
                      "object": {
                        "type": "Identifier",
                        "start": 1003,
                        "end": 1010,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1014,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "NewExpression",
                        "start": 1015,
                        "end": 1024,
                        "callee": {
                          "type": "Identifier",
                          "start": 1019,
                          "end": 1022,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1028,
                  "end": 1051,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1028,
                    "end": 1050,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1028,
                      "end": 1039,
                      "object": {
                        "type": "Identifier",
                        "start": 1028,
                        "end": 1035,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1039,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 1040,
                        "end": 1049,
                        "object": {
                          "type": "Identifier",
                          "start": 1040,
                          "end": 1043,
                          "name": "Baz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1049,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1057,
            "end": 1085,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1063,
                "end": 1084,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1067,
                  "name": "blah",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1070,
                  "end": 1084,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1072,
                      "end": 1082,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1072,
                        "end": 1076,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1078,
                        "end": 1082,
                        "value": 1234,
                        "raw": "1234"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1088,
            "end": 1102,
            "id": {
              "type": "Identifier",
              "start": 1093,
              "end": 1096,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 1099,
                "end": 1100,
                "id": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1100,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 1097,
              "end": 1102,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1099,
                  "end": 1100,
                  "id": {
                    "type": "Identifier",
                    "start": 1099,
                    "end": 1100,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1105,
            "end": 1127,
            "id": {
              "type": "Identifier",
              "start": 1111,
              "end": 1114,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1115,
              "end": 1127,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1117,
                  "end": 1125,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1117,
                    "end": 1118,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1121,
                    "end": 1125,
                    "value": 1234,
                    "raw": "1234"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1130,
            "end": 1173,
            "id": {
              "type": "Identifier",
              "start": 1140,
              "end": 1143,
              "name": "Baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1144,
              "end": 1173,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1146,
                  "end": 1171,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1153,
                    "end": 1171,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1159,
                        "end": 1171,
                        "id": {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1164,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1167,
                          "end": 1171,
                          "value": 1234,
                          "raw": "1234"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
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
