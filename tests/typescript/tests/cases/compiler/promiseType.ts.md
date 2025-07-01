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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 22
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 23,
                      "end": 30
                    }
                  ],
                  "start": 22,
                  "end": 31
                },
                "start": 15,
                "end": 31
              },
              "start": 13,
              "end": 31
            },
            "start": 12,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 31
        }
      ],
      "declare": true,
      "start": 0,
      "end": 32
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
              },
              "start": 46,
              "end": 51
            },
            "start": 45,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 51
        }
      ],
      "declare": true,
      "start": 33,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 70
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "start": 89,
                  "end": 96
                },
                "definite": false,
                "start": 85,
                "end": 96
              }
            ],
            "declare": false,
            "start": 79,
            "end": 97
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "start": 102,
            "end": 111
          }
        ],
        "start": 73,
        "end": 113
      },
      "expression": false,
      "start": 54,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "start": 150,
                  "end": 157
                },
                "definite": false,
                "start": 146,
                "end": 157
              }
            ],
            "declare": false,
            "start": 140,
            "end": 158
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 170,
              "end": 171
            },
            "start": 163,
            "end": 172
          }
        ],
        "start": 134,
        "end": 174
      },
      "expression": false,
      "start": 115,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 192
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 222
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "start": 225,
                        "end": 232
                      },
                      "definite": false,
                      "start": 221,
                      "end": 232
                    }
                  ],
                  "declare": false,
                  "start": 215,
                  "end": 233
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 249,
                    "end": 250
                  },
                  "start": 242,
                  "end": 251
                }
              ],
              "start": 205,
              "end": 257
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "error",
                      "raw": "'error'",
                      "start": 289,
                      "end": 296
                    },
                    "start": 282,
                    "end": 297
                  }
                ],
                "start": 272,
                "end": 303
              },
              "start": 262,
              "end": 303
            },
            "finalizer": null,
            "start": 201,
            "end": 303
          }
        ],
        "start": 195,
        "end": 305
      },
      "expression": false,
      "start": 176,
      "end": 305
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 323
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 353
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 362,
                          "end": 363
                        },
                        "start": 356,
                        "end": 363
                      },
                      "definite": false,
                      "start": 352,
                      "end": 363
                    }
                  ],
                  "declare": false,
                  "start": 346,
                  "end": 364
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 380,
                    "end": 381
                  },
                  "start": 373,
                  "end": 382
                }
              ],
              "start": 336,
              "end": 388
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 403,
                "end": 410
              },
              "start": 393,
              "end": 410
            },
            "finalizer": null,
            "start": 332,
            "end": 410
          }
        ],
        "start": 326,
        "end": 412
      },
      "expression": false,
      "start": 307,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 430
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 460
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 470
                        },
                        "start": 463,
                        "end": 470
                      },
                      "definite": false,
                      "start": 459,
                      "end": 470
                    }
                  ],
                  "declare": false,
                  "start": 453,
                  "end": 471
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 487,
                    "end": 488
                  },
                  "start": 480,
                  "end": 489
                }
              ],
              "start": 443,
              "end": 495
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 526,
                        "end": 531
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 526,
                      "end": 533
                    },
                    "start": 520,
                    "end": 534
                  }
                ],
                "start": 510,
                "end": 540
              },
              "start": 500,
              "end": 540
            },
            "finalizer": null,
            "start": 439,
            "end": 540
          }
        ],
        "start": 433,
        "end": 542
      },
      "expression": false,
      "start": 414,
      "end": 542
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 560
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 599,
                          "end": 600
                        },
                        "start": 593,
                        "end": 600
                      },
                      "definite": false,
                      "start": 589,
                      "end": 600
                    }
                  ],
                  "declare": false,
                  "start": 583,
                  "end": 601
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 617,
                    "end": 618
                  },
                  "start": 610,
                  "end": 619
                }
              ],
              "start": 573,
              "end": 625
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 638
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 657,
                          "end": 664
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 671
                        },
                        "optional": false,
                        "computed": false,
                        "start": 657,
                        "end": 671
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 672,
                            "end": 677
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 672,
                          "end": 679
                        }
                      ],
                      "optional": false,
                      "start": 657,
                      "end": 680
                    },
                    "start": 650,
                    "end": 681
                  }
                ],
                "start": 640,
                "end": 687
              },
              "start": 630,
              "end": 687
            },
            "finalizer": null,
            "start": 569,
            "end": 687
          }
        ],
        "start": 563,
        "end": 689
      },
      "expression": false,
      "start": 544,
      "end": 689
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 707
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 736,
                        "end": 737
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 746,
                          "end": 747
                        },
                        "start": 740,
                        "end": 747
                      },
                      "definite": false,
                      "start": 736,
                      "end": 747
                    }
                  ],
                  "declare": false,
                  "start": 730,
                  "end": 748
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "start": 757,
                  "end": 766
                }
              ],
              "start": 720,
              "end": 772
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 797,
                    "end": 804
                  }
                ],
                "start": 787,
                "end": 810
              },
              "start": 777,
              "end": 810
            },
            "finalizer": null,
            "start": 716,
            "end": 810
          }
        ],
        "start": 710,
        "end": 812
      },
      "expression": false,
      "start": 691,
      "end": 812
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 829,
        "end": 830
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 859,
                        "end": 860
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 869,
                          "end": 870
                        },
                        "start": 863,
                        "end": 870
                      },
                      "definite": false,
                      "start": 859,
                      "end": 870
                    }
                  ],
                  "declare": false,
                  "start": 853,
                  "end": 871
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 888
                  },
                  "start": 880,
                  "end": 889
                }
              ],
              "start": 843,
              "end": 895
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 908
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 931
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 926,
                      "end": 933
                    },
                    "start": 920,
                    "end": 934
                  }
                ],
                "start": 910,
                "end": 940
              },
              "start": 900,
              "end": 940
            },
            "finalizer": null,
            "start": 839,
            "end": 940
          }
        ],
        "start": 833,
        "end": 942
      },
      "expression": false,
      "start": 814,
      "end": 942
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 960
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 989,
                        "end": 990
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 999,
                          "end": 1000
                        },
                        "start": 993,
                        "end": 1000
                      },
                      "definite": false,
                      "start": 989,
                      "end": 1000
                    }
                  ],
                  "declare": false,
                  "start": 983,
                  "end": 1001
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1017,
                    "end": 1018
                  },
                  "start": 1010,
                  "end": 1019
                }
              ],
              "start": 973,
              "end": 1025
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1038
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1057,
                          "end": 1064
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1065,
                          "end": 1071
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1057,
                        "end": 1071
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1072,
                            "end": 1077
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1072,
                          "end": 1079
                        }
                      ],
                      "optional": false,
                      "start": 1057,
                      "end": 1080
                    },
                    "start": 1050,
                    "end": 1081
                  }
                ],
                "start": 1040,
                "end": 1087
              },
              "start": 1030,
              "end": 1087
            },
            "finalizer": null,
            "start": 969,
            "end": 1087
          }
        ],
        "start": 963,
        "end": 1089
      },
      "expression": false,
      "start": 944,
      "end": 1089
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p00",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1139,
                "end": 1144
              },
              "optional": false,
              "computed": false,
              "start": 1137,
              "end": 1144
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1137,
            "end": 1146
          },
          "definite": false,
          "start": 1131,
          "end": 1146
        }
      ],
      "declare": false,
      "start": 1125,
      "end": 1147
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p01",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1157
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1161
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1166
              },
              "optional": false,
              "computed": false,
              "start": 1160,
              "end": 1166
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1160,
            "end": 1168
          },
          "definite": false,
          "start": 1154,
          "end": 1168
        }
      ],
      "declare": false,
      "start": 1148,
      "end": 1169
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1180
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1183,
                "end": 1184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1185,
                "end": 1190
              },
              "optional": false,
              "computed": false,
              "start": 1183,
              "end": 1190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1191,
                "end": 1200
              }
            ],
            "optional": false,
            "start": 1183,
            "end": 1201
          },
          "definite": false,
          "start": 1177,
          "end": 1201
        }
      ],
      "declare": false,
      "start": 1171,
      "end": 1202
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1212
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1216
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1222
              },
              "optional": false,
              "computed": false,
              "start": 1215,
              "end": 1222
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1223,
                "end": 1227
              }
            ],
            "optional": false,
            "start": 1215,
            "end": 1228
          },
          "definite": false,
          "start": 1209,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 1203,
      "end": 1229
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1236,
            "end": 1239
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1244,
                "end": 1249
              },
              "optional": false,
              "computed": false,
              "start": 1242,
              "end": 1249
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1256,
                  "end": 1257
                },
                "id": null,
                "generator": false,
                "start": 1250,
                "end": 1257
              }
            ],
            "optional": false,
            "start": 1242,
            "end": 1258
          },
          "definite": false,
          "start": 1236,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1230,
      "end": 1259
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1266,
            "end": 1269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1272,
                "end": 1273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1279
              },
              "optional": false,
              "computed": false,
              "start": 1272,
              "end": 1279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1286,
                  "end": 1287
                },
                "id": null,
                "generator": false,
                "start": 1280,
                "end": 1287
              }
            ],
            "optional": false,
            "start": 1272,
            "end": 1288
          },
          "definite": false,
          "start": 1266,
          "end": 1288
        }
      ],
      "declare": false,
      "start": 1260,
      "end": 1289
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1299
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1309
              },
              "optional": false,
              "computed": false,
              "start": 1302,
              "end": 1309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1325
                },
                "id": null,
                "generator": false,
                "start": 1310,
                "end": 1325
              }
            ],
            "optional": false,
            "start": 1302,
            "end": 1326
          },
          "definite": false,
          "start": 1296,
          "end": 1326
        }
      ],
      "declare": false,
      "start": 1290,
      "end": 1327
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1334,
            "end": 1337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1347
              },
              "optional": false,
              "computed": false,
              "start": 1340,
              "end": 1347
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1354,
                  "end": 1358
                },
                "id": null,
                "generator": false,
                "start": 1348,
                "end": 1358
              }
            ],
            "optional": false,
            "start": 1340,
            "end": 1359
          },
          "definite": false,
          "start": 1334,
          "end": 1359
        }
      ],
      "declare": false,
      "start": 1328,
      "end": 1360
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1367,
            "end": 1370
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1375,
                "end": 1380
              },
              "optional": false,
              "computed": false,
              "start": 1373,
              "end": 1380
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1387,
                  "end": 1389
                },
                "id": null,
                "generator": false,
                "start": 1381,
                "end": 1389
              }
            ],
            "optional": false,
            "start": 1373,
            "end": 1390
          },
          "definite": false,
          "start": 1367,
          "end": 1390
        }
      ],
      "declare": false,
      "start": 1361,
      "end": 1391
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1401
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1404,
                "end": 1405
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1411
              },
              "optional": false,
              "computed": false,
              "start": 1404,
              "end": 1411
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1425,
                        "end": 1426
                      },
                      "start": 1419,
                      "end": 1426
                    }
                  ],
                  "start": 1418,
                  "end": 1427
                },
                "id": null,
                "generator": false,
                "start": 1412,
                "end": 1427
              }
            ],
            "optional": false,
            "start": 1404,
            "end": 1428
          },
          "definite": false,
          "start": 1398,
          "end": 1428
        }
      ],
      "declare": false,
      "start": 1392,
      "end": 1429
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1439
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1442,
                "end": 1443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1449
              },
              "optional": false,
              "computed": false,
              "start": 1442,
              "end": 1449
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1456,
                      "end": 1463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1464,
                      "end": 1470
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1456,
                    "end": 1470
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1471,
                      "end": 1472
                    }
                  ],
                  "optional": false,
                  "start": 1456,
                  "end": 1473
                },
                "id": null,
                "generator": false,
                "start": 1450,
                "end": 1473
              }
            ],
            "optional": false,
            "start": 1442,
            "end": 1474
          },
          "definite": false,
          "start": 1436,
          "end": 1474
        }
      ],
      "declare": false,
      "start": 1430,
      "end": 1475
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1482,
            "end": 1485
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1488,
                "end": 1489
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1495
              },
              "optional": false,
              "computed": false,
              "start": 1488,
              "end": 1495
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1502,
                      "end": 1509
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1510,
                      "end": 1517
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1502,
                    "end": 1517
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1518,
                      "end": 1519
                    }
                  ],
                  "optional": false,
                  "start": 1502,
                  "end": 1520
                },
                "id": null,
                "generator": false,
                "start": 1496,
                "end": 1520
              }
            ],
            "optional": false,
            "start": 1488,
            "end": 1521
          },
          "definite": false,
          "start": 1482,
          "end": 1521
        }
      ],
      "declare": false,
      "start": 1476,
      "end": 1522
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1530,
            "end": 1533
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1538,
                "end": 1542
              },
              "optional": false,
              "computed": false,
              "start": 1536,
              "end": 1542
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1552
              }
            ],
            "optional": false,
            "start": 1536,
            "end": 1553
          },
          "definite": false,
          "start": 1530,
          "end": 1553
        }
      ],
      "declare": false,
      "start": 1524,
      "end": 1554
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1564
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1568
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1569,
                "end": 1573
              },
              "optional": false,
              "computed": false,
              "start": 1567,
              "end": 1573
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1574,
                "end": 1578
              }
            ],
            "optional": false,
            "start": 1567,
            "end": 1579
          },
          "definite": false,
          "start": 1561,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1555,
      "end": 1580
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1587,
            "end": 1590
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1599
              },
              "optional": false,
              "computed": false,
              "start": 1593,
              "end": 1599
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1606,
                  "end": 1607
                },
                "id": null,
                "generator": false,
                "start": 1600,
                "end": 1607
              }
            ],
            "optional": false,
            "start": 1593,
            "end": 1608
          },
          "definite": false,
          "start": 1587,
          "end": 1608
        }
      ],
      "declare": false,
      "start": 1581,
      "end": 1609
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1616,
            "end": 1619
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1623
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1624,
                "end": 1628
              },
              "optional": false,
              "computed": false,
              "start": 1622,
              "end": 1628
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1635,
                  "end": 1636
                },
                "id": null,
                "generator": false,
                "start": 1629,
                "end": 1636
              }
            ],
            "optional": false,
            "start": 1622,
            "end": 1637
          },
          "definite": false,
          "start": 1616,
          "end": 1637
        }
      ],
      "declare": false,
      "start": 1610,
      "end": 1638
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p24",
            "optional": false,
            "typeAnnotation": null,
            "start": 1645,
            "end": 1648
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1651,
                "end": 1652
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1653,
                "end": 1657
              },
              "optional": false,
              "computed": false,
              "start": 1651,
              "end": 1657
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1673
                },
                "id": null,
                "generator": false,
                "start": 1658,
                "end": 1673
              }
            ],
            "optional": false,
            "start": 1651,
            "end": 1674
          },
          "definite": false,
          "start": 1645,
          "end": 1674
        }
      ],
      "declare": false,
      "start": 1639,
      "end": 1675
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p25",
            "optional": false,
            "typeAnnotation": null,
            "start": 1682,
            "end": 1685
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1688,
                "end": 1689
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1690,
                "end": 1694
              },
              "optional": false,
              "computed": false,
              "start": 1688,
              "end": 1694
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1701,
                  "end": 1705
                },
                "id": null,
                "generator": false,
                "start": 1695,
                "end": 1705
              }
            ],
            "optional": false,
            "start": 1688,
            "end": 1706
          },
          "definite": false,
          "start": 1682,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1676,
      "end": 1707
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p26",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1720,
                "end": 1721
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1722,
                "end": 1726
              },
              "optional": false,
              "computed": false,
              "start": 1720,
              "end": 1726
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1733,
                  "end": 1735
                },
                "id": null,
                "generator": false,
                "start": 1727,
                "end": 1735
              }
            ],
            "optional": false,
            "start": 1720,
            "end": 1736
          },
          "definite": false,
          "start": 1714,
          "end": 1736
        }
      ],
      "declare": false,
      "start": 1708,
      "end": 1737
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p27",
            "optional": false,
            "typeAnnotation": null,
            "start": 1744,
            "end": 1747
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1751
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1756
              },
              "optional": false,
              "computed": false,
              "start": 1750,
              "end": 1756
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1770,
                        "end": 1771
                      },
                      "start": 1764,
                      "end": 1771
                    }
                  ],
                  "start": 1763,
                  "end": 1772
                },
                "id": null,
                "generator": false,
                "start": 1757,
                "end": 1772
              }
            ],
            "optional": false,
            "start": 1750,
            "end": 1773
          },
          "definite": false,
          "start": 1744,
          "end": 1773
        }
      ],
      "declare": false,
      "start": 1738,
      "end": 1774
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p28",
            "optional": false,
            "typeAnnotation": null,
            "start": 1781,
            "end": 1784
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1787,
                "end": 1788
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1789,
                "end": 1793
              },
              "optional": false,
              "computed": false,
              "start": 1787,
              "end": 1793
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1807
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1815
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1800,
                    "end": 1815
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1816,
                      "end": 1817
                    }
                  ],
                  "optional": false,
                  "start": 1800,
                  "end": 1818
                },
                "id": null,
                "generator": false,
                "start": 1794,
                "end": 1818
              }
            ],
            "optional": false,
            "start": 1787,
            "end": 1819
          },
          "definite": false,
          "start": 1781,
          "end": 1819
        }
      ],
      "declare": false,
      "start": 1775,
      "end": 1820
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p29",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1830
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1833,
                "end": 1834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1835,
                "end": 1839
              },
              "optional": false,
              "computed": false,
              "start": 1833,
              "end": 1839
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1846,
                      "end": 1853
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1854,
                      "end": 1860
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1846,
                    "end": 1860
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1861,
                      "end": 1862
                    }
                  ],
                  "optional": false,
                  "start": 1846,
                  "end": 1863
                },
                "id": null,
                "generator": false,
                "start": 1840,
                "end": 1863
              }
            ],
            "optional": false,
            "start": 1833,
            "end": 1864
          },
          "definite": false,
          "start": 1827,
          "end": 1864
        }
      ],
      "declare": false,
      "start": 1821,
      "end": 1865
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p30",
            "optional": false,
            "typeAnnotation": null,
            "start": 1873,
            "end": 1876
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1879,
                "end": 1880
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1881,
                "end": 1885
              },
              "optional": false,
              "computed": false,
              "start": 1879,
              "end": 1885
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1886,
                "end": 1895
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1897,
                "end": 1906
              }
            ],
            "optional": false,
            "start": 1879,
            "end": 1907
          },
          "definite": false,
          "start": 1873,
          "end": 1907
        }
      ],
      "declare": false,
      "start": 1867,
      "end": 1908
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p31",
            "optional": false,
            "typeAnnotation": null,
            "start": 1915,
            "end": 1918
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1921,
                "end": 1922
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1923,
                "end": 1927
              },
              "optional": false,
              "computed": false,
              "start": 1921,
              "end": 1927
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1928,
                "end": 1937
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1939,
                "end": 1943
              }
            ],
            "optional": false,
            "start": 1921,
            "end": 1944
          },
          "definite": false,
          "start": 1915,
          "end": 1944
        }
      ],
      "declare": false,
      "start": 1909,
      "end": 1945
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p32",
            "optional": false,
            "typeAnnotation": null,
            "start": 1952,
            "end": 1955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1959
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1960,
                "end": 1964
              },
              "optional": false,
              "computed": false,
              "start": 1958,
              "end": 1964
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1965,
                "end": 1974
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1982,
                  "end": 1983
                },
                "id": null,
                "generator": false,
                "start": 1976,
                "end": 1983
              }
            ],
            "optional": false,
            "start": 1958,
            "end": 1984
          },
          "definite": false,
          "start": 1952,
          "end": 1984
        }
      ],
      "declare": false,
      "start": 1946,
      "end": 1985
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p33",
            "optional": false,
            "typeAnnotation": null,
            "start": 1992,
            "end": 1995
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1998,
                "end": 1999
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2000,
                "end": 2004
              },
              "optional": false,
              "computed": false,
              "start": 1998,
              "end": 2004
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2005,
                "end": 2014
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2022,
                  "end": 2023
                },
                "id": null,
                "generator": false,
                "start": 2016,
                "end": 2023
              }
            ],
            "optional": false,
            "start": 1998,
            "end": 2024
          },
          "definite": false,
          "start": 1992,
          "end": 2024
        }
      ],
      "declare": false,
      "start": 1986,
      "end": 2025
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p34",
            "optional": false,
            "typeAnnotation": null,
            "start": 2032,
            "end": 2035
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2038,
                "end": 2039
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2044
              },
              "optional": false,
              "computed": false,
              "start": 2038,
              "end": 2044
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2045,
                "end": 2054
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2062,
                  "end": 2071
                },
                "id": null,
                "generator": false,
                "start": 2056,
                "end": 2071
              }
            ],
            "optional": false,
            "start": 2038,
            "end": 2072
          },
          "definite": false,
          "start": 2032,
          "end": 2072
        }
      ],
      "declare": false,
      "start": 2026,
      "end": 2073
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p35",
            "optional": false,
            "typeAnnotation": null,
            "start": 2080,
            "end": 2083
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2086,
                "end": 2087
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2088,
                "end": 2092
              },
              "optional": false,
              "computed": false,
              "start": 2086,
              "end": 2092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2093,
                "end": 2102
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2110,
                  "end": 2114
                },
                "id": null,
                "generator": false,
                "start": 2104,
                "end": 2114
              }
            ],
            "optional": false,
            "start": 2086,
            "end": 2115
          },
          "definite": false,
          "start": 2080,
          "end": 2115
        }
      ],
      "declare": false,
      "start": 2074,
      "end": 2116
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p36",
            "optional": false,
            "typeAnnotation": null,
            "start": 2123,
            "end": 2126
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2129,
                "end": 2130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2131,
                "end": 2135
              },
              "optional": false,
              "computed": false,
              "start": 2129,
              "end": 2135
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2136,
                "end": 2145
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2153,
                  "end": 2155
                },
                "id": null,
                "generator": false,
                "start": 2147,
                "end": 2155
              }
            ],
            "optional": false,
            "start": 2129,
            "end": 2156
          },
          "definite": false,
          "start": 2123,
          "end": 2156
        }
      ],
      "declare": false,
      "start": 2117,
      "end": 2157
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p37",
            "optional": false,
            "typeAnnotation": null,
            "start": 2164,
            "end": 2167
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2170,
                "end": 2171
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2172,
                "end": 2176
              },
              "optional": false,
              "computed": false,
              "start": 2170,
              "end": 2176
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2177,
                "end": 2186
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2201,
                        "end": 2202
                      },
                      "start": 2195,
                      "end": 2202
                    }
                  ],
                  "start": 2194,
                  "end": 2203
                },
                "id": null,
                "generator": false,
                "start": 2188,
                "end": 2203
              }
            ],
            "optional": false,
            "start": 2170,
            "end": 2204
          },
          "definite": false,
          "start": 2164,
          "end": 2204
        }
      ],
      "declare": false,
      "start": 2158,
      "end": 2205
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p38",
            "optional": false,
            "typeAnnotation": null,
            "start": 2212,
            "end": 2215
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2218,
                "end": 2219
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2220,
                "end": 2224
              },
              "optional": false,
              "computed": false,
              "start": 2218,
              "end": 2224
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2225,
                "end": 2234
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2242,
                      "end": 2249
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2257
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2242,
                    "end": 2257
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2258,
                      "end": 2259
                    }
                  ],
                  "optional": false,
                  "start": 2242,
                  "end": 2260
                },
                "id": null,
                "generator": false,
                "start": 2236,
                "end": 2260
              }
            ],
            "optional": false,
            "start": 2218,
            "end": 2261
          },
          "definite": false,
          "start": 2212,
          "end": 2261
        }
      ],
      "declare": false,
      "start": 2206,
      "end": 2262
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p39",
            "optional": false,
            "typeAnnotation": null,
            "start": 2269,
            "end": 2272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2275,
                "end": 2276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2277,
                "end": 2281
              },
              "optional": false,
              "computed": false,
              "start": 2275,
              "end": 2281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2282,
                "end": 2291
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2306
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2313
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2299,
                    "end": 2313
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2314,
                      "end": 2315
                    }
                  ],
                  "optional": false,
                  "start": 2299,
                  "end": 2316
                },
                "id": null,
                "generator": false,
                "start": 2293,
                "end": 2316
              }
            ],
            "optional": false,
            "start": 2275,
            "end": 2317
          },
          "definite": false,
          "start": 2269,
          "end": 2317
        }
      ],
      "declare": false,
      "start": 2263,
      "end": 2318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p40",
            "optional": false,
            "typeAnnotation": null,
            "start": 2326,
            "end": 2329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2332,
                "end": 2333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2334,
                "end": 2338
              },
              "optional": false,
              "computed": false,
              "start": 2332,
              "end": 2338
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2339,
                "end": 2343
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2345,
                "end": 2354
              }
            ],
            "optional": false,
            "start": 2332,
            "end": 2355
          },
          "definite": false,
          "start": 2326,
          "end": 2355
        }
      ],
      "declare": false,
      "start": 2320,
      "end": 2356
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p41",
            "optional": false,
            "typeAnnotation": null,
            "start": 2363,
            "end": 2366
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2369,
                "end": 2370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2371,
                "end": 2375
              },
              "optional": false,
              "computed": false,
              "start": 2369,
              "end": 2375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2376,
                "end": 2380
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2382,
                "end": 2386
              }
            ],
            "optional": false,
            "start": 2369,
            "end": 2387
          },
          "definite": false,
          "start": 2363,
          "end": 2387
        }
      ],
      "declare": false,
      "start": 2357,
      "end": 2388
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p42",
            "optional": false,
            "typeAnnotation": null,
            "start": 2395,
            "end": 2398
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2401,
                "end": 2402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2407
              },
              "optional": false,
              "computed": false,
              "start": 2401,
              "end": 2407
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2408,
                "end": 2412
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2420,
                  "end": 2421
                },
                "id": null,
                "generator": false,
                "start": 2414,
                "end": 2421
              }
            ],
            "optional": false,
            "start": 2401,
            "end": 2422
          },
          "definite": false,
          "start": 2395,
          "end": 2422
        }
      ],
      "declare": false,
      "start": 2389,
      "end": 2423
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p43",
            "optional": false,
            "typeAnnotation": null,
            "start": 2430,
            "end": 2433
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2438,
                "end": 2442
              },
              "optional": false,
              "computed": false,
              "start": 2436,
              "end": 2442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2443,
                "end": 2447
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2455,
                  "end": 2456
                },
                "id": null,
                "generator": false,
                "start": 2449,
                "end": 2456
              }
            ],
            "optional": false,
            "start": 2436,
            "end": 2457
          },
          "definite": false,
          "start": 2430,
          "end": 2457
        }
      ],
      "declare": false,
      "start": 2424,
      "end": 2458
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p44",
            "optional": false,
            "typeAnnotation": null,
            "start": 2465,
            "end": 2468
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2471,
                "end": 2472
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2473,
                "end": 2477
              },
              "optional": false,
              "computed": false,
              "start": 2471,
              "end": 2477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2478,
                "end": 2482
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2490,
                  "end": 2499
                },
                "id": null,
                "generator": false,
                "start": 2484,
                "end": 2499
              }
            ],
            "optional": false,
            "start": 2471,
            "end": 2500
          },
          "definite": false,
          "start": 2465,
          "end": 2500
        }
      ],
      "declare": false,
      "start": 2459,
      "end": 2501
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p45",
            "optional": false,
            "typeAnnotation": null,
            "start": 2508,
            "end": 2511
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2514,
                "end": 2515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2516,
                "end": 2520
              },
              "optional": false,
              "computed": false,
              "start": 2514,
              "end": 2520
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2521,
                "end": 2525
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2533,
                  "end": 2537
                },
                "id": null,
                "generator": false,
                "start": 2527,
                "end": 2537
              }
            ],
            "optional": false,
            "start": 2514,
            "end": 2538
          },
          "definite": false,
          "start": 2508,
          "end": 2538
        }
      ],
      "declare": false,
      "start": 2502,
      "end": 2539
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p46",
            "optional": false,
            "typeAnnotation": null,
            "start": 2546,
            "end": 2549
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2552,
                "end": 2553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2554,
                "end": 2558
              },
              "optional": false,
              "computed": false,
              "start": 2552,
              "end": 2558
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2559,
                "end": 2563
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2571,
                  "end": 2573
                },
                "id": null,
                "generator": false,
                "start": 2565,
                "end": 2573
              }
            ],
            "optional": false,
            "start": 2552,
            "end": 2574
          },
          "definite": false,
          "start": 2546,
          "end": 2574
        }
      ],
      "declare": false,
      "start": 2540,
      "end": 2575
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p47",
            "optional": false,
            "typeAnnotation": null,
            "start": 2582,
            "end": 2585
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2588,
                "end": 2589
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2590,
                "end": 2594
              },
              "optional": false,
              "computed": false,
              "start": 2588,
              "end": 2594
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2595,
                "end": 2599
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2614,
                        "end": 2615
                      },
                      "start": 2608,
                      "end": 2615
                    }
                  ],
                  "start": 2607,
                  "end": 2616
                },
                "id": null,
                "generator": false,
                "start": 2601,
                "end": 2616
              }
            ],
            "optional": false,
            "start": 2588,
            "end": 2617
          },
          "definite": false,
          "start": 2582,
          "end": 2617
        }
      ],
      "declare": false,
      "start": 2576,
      "end": 2618
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p48",
            "optional": false,
            "typeAnnotation": null,
            "start": 2625,
            "end": 2628
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2631,
                "end": 2632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2633,
                "end": 2637
              },
              "optional": false,
              "computed": false,
              "start": 2631,
              "end": 2637
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2638,
                "end": 2642
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2650,
                      "end": 2657
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2658,
                      "end": 2665
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2650,
                    "end": 2665
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2666,
                      "end": 2667
                    }
                  ],
                  "optional": false,
                  "start": 2650,
                  "end": 2668
                },
                "id": null,
                "generator": false,
                "start": 2644,
                "end": 2668
              }
            ],
            "optional": false,
            "start": 2631,
            "end": 2669
          },
          "definite": false,
          "start": 2625,
          "end": 2669
        }
      ],
      "declare": false,
      "start": 2619,
      "end": 2670
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p49",
            "optional": false,
            "typeAnnotation": null,
            "start": 2677,
            "end": 2680
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2683,
                "end": 2684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2685,
                "end": 2689
              },
              "optional": false,
              "computed": false,
              "start": 2683,
              "end": 2689
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2690,
                "end": 2694
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2702,
                      "end": 2709
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2710,
                      "end": 2716
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2702,
                    "end": 2716
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2717,
                      "end": 2718
                    }
                  ],
                  "optional": false,
                  "start": 2702,
                  "end": 2719
                },
                "id": null,
                "generator": false,
                "start": 2696,
                "end": 2719
              }
            ],
            "optional": false,
            "start": 2683,
            "end": 2720
          },
          "definite": false,
          "start": 2677,
          "end": 2720
        }
      ],
      "declare": false,
      "start": 2671,
      "end": 2721
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p50",
            "optional": false,
            "typeAnnotation": null,
            "start": 2729,
            "end": 2732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2735,
                "end": 2736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2737,
                "end": 2741
              },
              "optional": false,
              "computed": false,
              "start": 2735,
              "end": 2741
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2748,
                  "end": 2751
                },
                "id": null,
                "generator": false,
                "start": 2742,
                "end": 2751
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2753,
                "end": 2762
              }
            ],
            "optional": false,
            "start": 2735,
            "end": 2763
          },
          "definite": false,
          "start": 2729,
          "end": 2763
        }
      ],
      "declare": false,
      "start": 2723,
      "end": 2764
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p51",
            "optional": false,
            "typeAnnotation": null,
            "start": 2771,
            "end": 2774
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2777,
                "end": 2778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2779,
                "end": 2783
              },
              "optional": false,
              "computed": false,
              "start": 2777,
              "end": 2783
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2790,
                  "end": 2793
                },
                "id": null,
                "generator": false,
                "start": 2784,
                "end": 2793
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2795,
                "end": 2799
              }
            ],
            "optional": false,
            "start": 2777,
            "end": 2800
          },
          "definite": false,
          "start": 2771,
          "end": 2800
        }
      ],
      "declare": false,
      "start": 2765,
      "end": 2801
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p52",
            "optional": false,
            "typeAnnotation": null,
            "start": 2808,
            "end": 2811
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2814,
                "end": 2815
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2816,
                "end": 2820
              },
              "optional": false,
              "computed": false,
              "start": 2814,
              "end": 2820
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2827,
                  "end": 2830
                },
                "id": null,
                "generator": false,
                "start": 2821,
                "end": 2830
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2838,
                  "end": 2839
                },
                "id": null,
                "generator": false,
                "start": 2832,
                "end": 2839
              }
            ],
            "optional": false,
            "start": 2814,
            "end": 2840
          },
          "definite": false,
          "start": 2808,
          "end": 2840
        }
      ],
      "declare": false,
      "start": 2802,
      "end": 2841
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p53",
            "optional": false,
            "typeAnnotation": null,
            "start": 2848,
            "end": 2851
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2854,
                "end": 2855
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2856,
                "end": 2860
              },
              "optional": false,
              "computed": false,
              "start": 2854,
              "end": 2860
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2867,
                  "end": 2870
                },
                "id": null,
                "generator": false,
                "start": 2861,
                "end": 2870
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2878,
                  "end": 2879
                },
                "id": null,
                "generator": false,
                "start": 2872,
                "end": 2879
              }
            ],
            "optional": false,
            "start": 2854,
            "end": 2880
          },
          "definite": false,
          "start": 2848,
          "end": 2880
        }
      ],
      "declare": false,
      "start": 2842,
      "end": 2881
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p54",
            "optional": false,
            "typeAnnotation": null,
            "start": 2888,
            "end": 2891
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2894,
                "end": 2895
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2896,
                "end": 2900
              },
              "optional": false,
              "computed": false,
              "start": 2894,
              "end": 2900
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2907,
                  "end": 2910
                },
                "id": null,
                "generator": false,
                "start": 2901,
                "end": 2910
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2918,
                  "end": 2927
                },
                "id": null,
                "generator": false,
                "start": 2912,
                "end": 2927
              }
            ],
            "optional": false,
            "start": 2894,
            "end": 2928
          },
          "definite": false,
          "start": 2888,
          "end": 2928
        }
      ],
      "declare": false,
      "start": 2882,
      "end": 2929
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p55",
            "optional": false,
            "typeAnnotation": null,
            "start": 2936,
            "end": 2939
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2942,
                "end": 2943
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2944,
                "end": 2948
              },
              "optional": false,
              "computed": false,
              "start": 2942,
              "end": 2948
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2955,
                  "end": 2958
                },
                "id": null,
                "generator": false,
                "start": 2949,
                "end": 2958
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2966,
                  "end": 2970
                },
                "id": null,
                "generator": false,
                "start": 2960,
                "end": 2970
              }
            ],
            "optional": false,
            "start": 2942,
            "end": 2971
          },
          "definite": false,
          "start": 2936,
          "end": 2971
        }
      ],
      "declare": false,
      "start": 2930,
      "end": 2972
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p56",
            "optional": false,
            "typeAnnotation": null,
            "start": 2979,
            "end": 2982
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2985,
                "end": 2986
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2987,
                "end": 2991
              },
              "optional": false,
              "computed": false,
              "start": 2985,
              "end": 2991
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2998,
                  "end": 3001
                },
                "id": null,
                "generator": false,
                "start": 2992,
                "end": 3001
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3009,
                  "end": 3011
                },
                "id": null,
                "generator": false,
                "start": 3003,
                "end": 3011
              }
            ],
            "optional": false,
            "start": 2985,
            "end": 3012
          },
          "definite": false,
          "start": 2979,
          "end": 3012
        }
      ],
      "declare": false,
      "start": 2973,
      "end": 3013
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p57",
            "optional": false,
            "typeAnnotation": null,
            "start": 3020,
            "end": 3023
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3026,
                "end": 3027
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3028,
                "end": 3032
              },
              "optional": false,
              "computed": false,
              "start": 3026,
              "end": 3032
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 3039,
                  "end": 3042
                },
                "id": null,
                "generator": false,
                "start": 3033,
                "end": 3042
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3057,
                        "end": 3058
                      },
                      "start": 3051,
                      "end": 3058
                    }
                  ],
                  "start": 3050,
                  "end": 3059
                },
                "id": null,
                "generator": false,
                "start": 3044,
                "end": 3059
              }
            ],
            "optional": false,
            "start": 3026,
            "end": 3060
          },
          "definite": false,
          "start": 3020,
          "end": 3060
        }
      ],
      "declare": false,
      "start": 3014,
      "end": 3061
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p58",
            "optional": false,
            "typeAnnotation": null,
            "start": 3068,
            "end": 3071
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3074,
                "end": 3075
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3076,
                "end": 3080
              },
              "optional": false,
              "computed": false,
              "start": 3074,
              "end": 3080
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 3087,
                  "end": 3090
                },
                "id": null,
                "generator": false,
                "start": 3081,
                "end": 3090
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3098,
                      "end": 3105
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3106,
                      "end": 3113
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3098,
                    "end": 3113
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3114,
                      "end": 3115
                    }
                  ],
                  "optional": false,
                  "start": 3098,
                  "end": 3116
                },
                "id": null,
                "generator": false,
                "start": 3092,
                "end": 3116
              }
            ],
            "optional": false,
            "start": 3074,
            "end": 3117
          },
          "definite": false,
          "start": 3068,
          "end": 3117
        }
      ],
      "declare": false,
      "start": 3062,
      "end": 3118
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p59",
            "optional": false,
            "typeAnnotation": null,
            "start": 3125,
            "end": 3128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3131,
                "end": 3132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3133,
                "end": 3137
              },
              "optional": false,
              "computed": false,
              "start": 3131,
              "end": 3137
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 3144,
                  "end": 3147
                },
                "id": null,
                "generator": false,
                "start": 3138,
                "end": 3147
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3155,
                      "end": 3162
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3163,
                      "end": 3169
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3155,
                    "end": 3169
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3170,
                      "end": 3171
                    }
                  ],
                  "optional": false,
                  "start": 3155,
                  "end": 3172
                },
                "id": null,
                "generator": false,
                "start": 3149,
                "end": 3172
              }
            ],
            "optional": false,
            "start": 3131,
            "end": 3173
          },
          "definite": false,
          "start": 3125,
          "end": 3173
        }
      ],
      "declare": false,
      "start": 3119,
      "end": 3174
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p60",
            "optional": false,
            "typeAnnotation": null,
            "start": 3182,
            "end": 3185
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3188,
                "end": 3189
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3190,
                "end": 3194
              },
              "optional": false,
              "computed": false,
              "start": 3188,
              "end": 3194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3201,
                  "end": 3202
                },
                "id": null,
                "generator": false,
                "start": 3195,
                "end": 3202
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 3204,
                "end": 3213
              }
            ],
            "optional": false,
            "start": 3188,
            "end": 3214
          },
          "definite": false,
          "start": 3182,
          "end": 3214
        }
      ],
      "declare": false,
      "start": 3176,
      "end": 3215
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p61",
            "optional": false,
            "typeAnnotation": null,
            "start": 3222,
            "end": 3225
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3228,
                "end": 3229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3230,
                "end": 3234
              },
              "optional": false,
              "computed": false,
              "start": 3228,
              "end": 3234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3241,
                  "end": 3242
                },
                "id": null,
                "generator": false,
                "start": 3235,
                "end": 3242
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3244,
                "end": 3248
              }
            ],
            "optional": false,
            "start": 3228,
            "end": 3249
          },
          "definite": false,
          "start": 3222,
          "end": 3249
        }
      ],
      "declare": false,
      "start": 3216,
      "end": 3250
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p62",
            "optional": false,
            "typeAnnotation": null,
            "start": 3257,
            "end": 3260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3263,
                "end": 3264
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3265,
                "end": 3269
              },
              "optional": false,
              "computed": false,
              "start": 3263,
              "end": 3269
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3276,
                  "end": 3277
                },
                "id": null,
                "generator": false,
                "start": 3270,
                "end": 3277
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3285,
                  "end": 3286
                },
                "id": null,
                "generator": false,
                "start": 3279,
                "end": 3286
              }
            ],
            "optional": false,
            "start": 3263,
            "end": 3287
          },
          "definite": false,
          "start": 3257,
          "end": 3287
        }
      ],
      "declare": false,
      "start": 3251,
      "end": 3288
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p63",
            "optional": false,
            "typeAnnotation": null,
            "start": 3295,
            "end": 3298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3301,
                "end": 3302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3303,
                "end": 3307
              },
              "optional": false,
              "computed": false,
              "start": 3301,
              "end": 3307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3314,
                  "end": 3315
                },
                "id": null,
                "generator": false,
                "start": 3308,
                "end": 3315
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3323,
                  "end": 3324
                },
                "id": null,
                "generator": false,
                "start": 3317,
                "end": 3324
              }
            ],
            "optional": false,
            "start": 3301,
            "end": 3325
          },
          "definite": false,
          "start": 3295,
          "end": 3325
        }
      ],
      "declare": false,
      "start": 3289,
      "end": 3326
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p64",
            "optional": false,
            "typeAnnotation": null,
            "start": 3333,
            "end": 3336
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3339,
                "end": 3340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3341,
                "end": 3345
              },
              "optional": false,
              "computed": false,
              "start": 3339,
              "end": 3345
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3352,
                  "end": 3353
                },
                "id": null,
                "generator": false,
                "start": 3346,
                "end": 3353
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3361,
                  "end": 3370
                },
                "id": null,
                "generator": false,
                "start": 3355,
                "end": 3370
              }
            ],
            "optional": false,
            "start": 3339,
            "end": 3371
          },
          "definite": false,
          "start": 3333,
          "end": 3371
        }
      ],
      "declare": false,
      "start": 3327,
      "end": 3372
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p65",
            "optional": false,
            "typeAnnotation": null,
            "start": 3379,
            "end": 3382
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3385,
                "end": 3386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3391
              },
              "optional": false,
              "computed": false,
              "start": 3385,
              "end": 3391
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3398,
                  "end": 3399
                },
                "id": null,
                "generator": false,
                "start": 3392,
                "end": 3399
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3407,
                  "end": 3411
                },
                "id": null,
                "generator": false,
                "start": 3401,
                "end": 3411
              }
            ],
            "optional": false,
            "start": 3385,
            "end": 3412
          },
          "definite": false,
          "start": 3379,
          "end": 3412
        }
      ],
      "declare": false,
      "start": 3373,
      "end": 3413
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p66",
            "optional": false,
            "typeAnnotation": null,
            "start": 3420,
            "end": 3423
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3426,
                "end": 3427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3428,
                "end": 3432
              },
              "optional": false,
              "computed": false,
              "start": 3426,
              "end": 3432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3439,
                  "end": 3440
                },
                "id": null,
                "generator": false,
                "start": 3433,
                "end": 3440
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3448,
                  "end": 3450
                },
                "id": null,
                "generator": false,
                "start": 3442,
                "end": 3450
              }
            ],
            "optional": false,
            "start": 3426,
            "end": 3451
          },
          "definite": false,
          "start": 3420,
          "end": 3451
        }
      ],
      "declare": false,
      "start": 3414,
      "end": 3452
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p67",
            "optional": false,
            "typeAnnotation": null,
            "start": 3459,
            "end": 3462
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3465,
                "end": 3466
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3467,
                "end": 3471
              },
              "optional": false,
              "computed": false,
              "start": 3465,
              "end": 3471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3478,
                  "end": 3479
                },
                "id": null,
                "generator": false,
                "start": 3472,
                "end": 3479
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3494,
                        "end": 3495
                      },
                      "start": 3488,
                      "end": 3495
                    }
                  ],
                  "start": 3487,
                  "end": 3496
                },
                "id": null,
                "generator": false,
                "start": 3481,
                "end": 3496
              }
            ],
            "optional": false,
            "start": 3465,
            "end": 3497
          },
          "definite": false,
          "start": 3459,
          "end": 3497
        }
      ],
      "declare": false,
      "start": 3453,
      "end": 3498
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p68",
            "optional": false,
            "typeAnnotation": null,
            "start": 3505,
            "end": 3508
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3511,
                "end": 3512
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3513,
                "end": 3517
              },
              "optional": false,
              "computed": false,
              "start": 3511,
              "end": 3517
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3524,
                  "end": 3525
                },
                "id": null,
                "generator": false,
                "start": 3518,
                "end": 3525
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3533,
                      "end": 3540
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3541,
                      "end": 3548
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3533,
                    "end": 3548
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3549,
                      "end": 3550
                    }
                  ],
                  "optional": false,
                  "start": 3533,
                  "end": 3551
                },
                "id": null,
                "generator": false,
                "start": 3527,
                "end": 3551
              }
            ],
            "optional": false,
            "start": 3511,
            "end": 3552
          },
          "definite": false,
          "start": 3505,
          "end": 3552
        }
      ],
      "declare": false,
      "start": 3499,
      "end": 3553
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p69",
            "optional": false,
            "typeAnnotation": null,
            "start": 3560,
            "end": 3563
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3566,
                "end": 3567
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3568,
                "end": 3572
              },
              "optional": false,
              "computed": false,
              "start": 3566,
              "end": 3572
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3579,
                  "end": 3580
                },
                "id": null,
                "generator": false,
                "start": 3573,
                "end": 3580
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3588,
                      "end": 3595
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3596,
                      "end": 3602
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3588,
                    "end": 3602
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3603,
                      "end": 3604
                    }
                  ],
                  "optional": false,
                  "start": 3588,
                  "end": 3605
                },
                "id": null,
                "generator": false,
                "start": 3582,
                "end": 3605
              }
            ],
            "optional": false,
            "start": 3566,
            "end": 3606
          },
          "definite": false,
          "start": 3560,
          "end": 3606
        }
      ],
      "declare": false,
      "start": 3554,
      "end": 3607
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p70",
            "optional": false,
            "typeAnnotation": null,
            "start": 3615,
            "end": 3618
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3621,
                "end": 3622
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3623,
                "end": 3627
              },
              "optional": false,
              "computed": false,
              "start": 3621,
              "end": 3627
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3634,
                  "end": 3643
                },
                "id": null,
                "generator": false,
                "start": 3628,
                "end": 3643
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 3645,
                "end": 3654
              }
            ],
            "optional": false,
            "start": 3621,
            "end": 3655
          },
          "definite": false,
          "start": 3615,
          "end": 3655
        }
      ],
      "declare": false,
      "start": 3609,
      "end": 3656
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p71",
            "optional": false,
            "typeAnnotation": null,
            "start": 3663,
            "end": 3666
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3669,
                "end": 3670
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3671,
                "end": 3675
              },
              "optional": false,
              "computed": false,
              "start": 3669,
              "end": 3675
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3682,
                  "end": 3691
                },
                "id": null,
                "generator": false,
                "start": 3676,
                "end": 3691
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3693,
                "end": 3697
              }
            ],
            "optional": false,
            "start": 3669,
            "end": 3698
          },
          "definite": false,
          "start": 3663,
          "end": 3698
        }
      ],
      "declare": false,
      "start": 3657,
      "end": 3699
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p72",
            "optional": false,
            "typeAnnotation": null,
            "start": 3706,
            "end": 3709
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3713
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3714,
                "end": 3718
              },
              "optional": false,
              "computed": false,
              "start": 3712,
              "end": 3718
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3725,
                  "end": 3734
                },
                "id": null,
                "generator": false,
                "start": 3719,
                "end": 3734
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3742,
                  "end": 3743
                },
                "id": null,
                "generator": false,
                "start": 3736,
                "end": 3743
              }
            ],
            "optional": false,
            "start": 3712,
            "end": 3744
          },
          "definite": false,
          "start": 3706,
          "end": 3744
        }
      ],
      "declare": false,
      "start": 3700,
      "end": 3745
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p73",
            "optional": false,
            "typeAnnotation": null,
            "start": 3752,
            "end": 3755
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3758,
                "end": 3759
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3760,
                "end": 3764
              },
              "optional": false,
              "computed": false,
              "start": 3758,
              "end": 3764
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3771,
                  "end": 3780
                },
                "id": null,
                "generator": false,
                "start": 3765,
                "end": 3780
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3788,
                  "end": 3789
                },
                "id": null,
                "generator": false,
                "start": 3782,
                "end": 3789
              }
            ],
            "optional": false,
            "start": 3758,
            "end": 3790
          },
          "definite": false,
          "start": 3752,
          "end": 3790
        }
      ],
      "declare": false,
      "start": 3746,
      "end": 3791
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p74",
            "optional": false,
            "typeAnnotation": null,
            "start": 3798,
            "end": 3801
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3804,
                "end": 3805
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3806,
                "end": 3810
              },
              "optional": false,
              "computed": false,
              "start": 3804,
              "end": 3810
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3826
                },
                "id": null,
                "generator": false,
                "start": 3811,
                "end": 3826
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3834,
                  "end": 3843
                },
                "id": null,
                "generator": false,
                "start": 3828,
                "end": 3843
              }
            ],
            "optional": false,
            "start": 3804,
            "end": 3844
          },
          "definite": false,
          "start": 3798,
          "end": 3844
        }
      ],
      "declare": false,
      "start": 3792,
      "end": 3845
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p75",
            "optional": false,
            "typeAnnotation": null,
            "start": 3852,
            "end": 3855
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3858,
                "end": 3859
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3860,
                "end": 3864
              },
              "optional": false,
              "computed": false,
              "start": 3858,
              "end": 3864
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3871,
                  "end": 3880
                },
                "id": null,
                "generator": false,
                "start": 3865,
                "end": 3880
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3888,
                  "end": 3892
                },
                "id": null,
                "generator": false,
                "start": 3882,
                "end": 3892
              }
            ],
            "optional": false,
            "start": 3858,
            "end": 3893
          },
          "definite": false,
          "start": 3852,
          "end": 3893
        }
      ],
      "declare": false,
      "start": 3846,
      "end": 3894
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p76",
            "optional": false,
            "typeAnnotation": null,
            "start": 3901,
            "end": 3904
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3907,
                "end": 3908
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3909,
                "end": 3913
              },
              "optional": false,
              "computed": false,
              "start": 3907,
              "end": 3913
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3920,
                  "end": 3929
                },
                "id": null,
                "generator": false,
                "start": 3914,
                "end": 3929
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3937,
                  "end": 3939
                },
                "id": null,
                "generator": false,
                "start": 3931,
                "end": 3939
              }
            ],
            "optional": false,
            "start": 3907,
            "end": 3940
          },
          "definite": false,
          "start": 3901,
          "end": 3940
        }
      ],
      "declare": false,
      "start": 3895,
      "end": 3941
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p77",
            "optional": false,
            "typeAnnotation": null,
            "start": 3948,
            "end": 3951
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3954,
                "end": 3955
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3956,
                "end": 3960
              },
              "optional": false,
              "computed": false,
              "start": 3954,
              "end": 3960
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3967,
                  "end": 3976
                },
                "id": null,
                "generator": false,
                "start": 3961,
                "end": 3976
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3991,
                        "end": 3992
                      },
                      "start": 3985,
                      "end": 3992
                    }
                  ],
                  "start": 3984,
                  "end": 3993
                },
                "id": null,
                "generator": false,
                "start": 3978,
                "end": 3993
              }
            ],
            "optional": false,
            "start": 3954,
            "end": 3994
          },
          "definite": false,
          "start": 3948,
          "end": 3994
        }
      ],
      "declare": false,
      "start": 3942,
      "end": 3995
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p78",
            "optional": false,
            "typeAnnotation": null,
            "start": 4002,
            "end": 4005
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4008,
                "end": 4009
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4010,
                "end": 4014
              },
              "optional": false,
              "computed": false,
              "start": 4008,
              "end": 4014
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4021,
                  "end": 4030
                },
                "id": null,
                "generator": false,
                "start": 4015,
                "end": 4030
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4038,
                      "end": 4045
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4046,
                      "end": 4053
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4038,
                    "end": 4053
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4054,
                      "end": 4055
                    }
                  ],
                  "optional": false,
                  "start": 4038,
                  "end": 4056
                },
                "id": null,
                "generator": false,
                "start": 4032,
                "end": 4056
              }
            ],
            "optional": false,
            "start": 4008,
            "end": 4057
          },
          "definite": false,
          "start": 4002,
          "end": 4057
        }
      ],
      "declare": false,
      "start": 3996,
      "end": 4058
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p79",
            "optional": false,
            "typeAnnotation": null,
            "start": 4065,
            "end": 4068
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4071,
                "end": 4072
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4073,
                "end": 4077
              },
              "optional": false,
              "computed": false,
              "start": 4071,
              "end": 4077
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4084,
                  "end": 4093
                },
                "id": null,
                "generator": false,
                "start": 4078,
                "end": 4093
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4108
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4109,
                      "end": 4115
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4101,
                    "end": 4115
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4116,
                      "end": 4117
                    }
                  ],
                  "optional": false,
                  "start": 4101,
                  "end": 4118
                },
                "id": null,
                "generator": false,
                "start": 4095,
                "end": 4118
              }
            ],
            "optional": false,
            "start": 4071,
            "end": 4119
          },
          "definite": false,
          "start": 4065,
          "end": 4119
        }
      ],
      "declare": false,
      "start": 4059,
      "end": 4120
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p80",
            "optional": false,
            "typeAnnotation": null,
            "start": 4128,
            "end": 4131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4134,
                "end": 4135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4136,
                "end": 4140
              },
              "optional": false,
              "computed": false,
              "start": 4134,
              "end": 4140
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4147,
                  "end": 4151
                },
                "id": null,
                "generator": false,
                "start": 4141,
                "end": 4151
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4153,
                "end": 4162
              }
            ],
            "optional": false,
            "start": 4134,
            "end": 4163
          },
          "definite": false,
          "start": 4128,
          "end": 4163
        }
      ],
      "declare": false,
      "start": 4122,
      "end": 4164
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p81",
            "optional": false,
            "typeAnnotation": null,
            "start": 4171,
            "end": 4174
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4177,
                "end": 4178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4179,
                "end": 4183
              },
              "optional": false,
              "computed": false,
              "start": 4177,
              "end": 4183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4190,
                  "end": 4194
                },
                "id": null,
                "generator": false,
                "start": 4184,
                "end": 4194
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4196,
                "end": 4200
              }
            ],
            "optional": false,
            "start": 4177,
            "end": 4201
          },
          "definite": false,
          "start": 4171,
          "end": 4201
        }
      ],
      "declare": false,
      "start": 4165,
      "end": 4202
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p82",
            "optional": false,
            "typeAnnotation": null,
            "start": 4209,
            "end": 4212
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4215,
                "end": 4216
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4217,
                "end": 4221
              },
              "optional": false,
              "computed": false,
              "start": 4215,
              "end": 4221
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4228,
                  "end": 4232
                },
                "id": null,
                "generator": false,
                "start": 4222,
                "end": 4232
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4240,
                  "end": 4241
                },
                "id": null,
                "generator": false,
                "start": 4234,
                "end": 4241
              }
            ],
            "optional": false,
            "start": 4215,
            "end": 4242
          },
          "definite": false,
          "start": 4209,
          "end": 4242
        }
      ],
      "declare": false,
      "start": 4203,
      "end": 4243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p83",
            "optional": false,
            "typeAnnotation": null,
            "start": 4250,
            "end": 4253
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4256,
                "end": 4257
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4258,
                "end": 4262
              },
              "optional": false,
              "computed": false,
              "start": 4256,
              "end": 4262
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4269,
                  "end": 4273
                },
                "id": null,
                "generator": false,
                "start": 4263,
                "end": 4273
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4281,
                  "end": 4282
                },
                "id": null,
                "generator": false,
                "start": 4275,
                "end": 4282
              }
            ],
            "optional": false,
            "start": 4256,
            "end": 4283
          },
          "definite": false,
          "start": 4250,
          "end": 4283
        }
      ],
      "declare": false,
      "start": 4244,
      "end": 4284
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p84",
            "optional": false,
            "typeAnnotation": null,
            "start": 4291,
            "end": 4294
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4297,
                "end": 4298
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4299,
                "end": 4303
              },
              "optional": false,
              "computed": false,
              "start": 4297,
              "end": 4303
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4310,
                  "end": 4314
                },
                "id": null,
                "generator": false,
                "start": 4304,
                "end": 4314
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4322,
                  "end": 4331
                },
                "id": null,
                "generator": false,
                "start": 4316,
                "end": 4331
              }
            ],
            "optional": false,
            "start": 4297,
            "end": 4332
          },
          "definite": false,
          "start": 4291,
          "end": 4332
        }
      ],
      "declare": false,
      "start": 4285,
      "end": 4333
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p85",
            "optional": false,
            "typeAnnotation": null,
            "start": 4340,
            "end": 4343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4346,
                "end": 4347
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4348,
                "end": 4352
              },
              "optional": false,
              "computed": false,
              "start": 4346,
              "end": 4352
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4359,
                  "end": 4363
                },
                "id": null,
                "generator": false,
                "start": 4353,
                "end": 4363
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4371,
                  "end": 4375
                },
                "id": null,
                "generator": false,
                "start": 4365,
                "end": 4375
              }
            ],
            "optional": false,
            "start": 4346,
            "end": 4376
          },
          "definite": false,
          "start": 4340,
          "end": 4376
        }
      ],
      "declare": false,
      "start": 4334,
      "end": 4377
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p86",
            "optional": false,
            "typeAnnotation": null,
            "start": 4384,
            "end": 4387
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4390,
                "end": 4391
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4392,
                "end": 4396
              },
              "optional": false,
              "computed": false,
              "start": 4390,
              "end": 4396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4403,
                  "end": 4407
                },
                "id": null,
                "generator": false,
                "start": 4397,
                "end": 4407
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4415,
                  "end": 4417
                },
                "id": null,
                "generator": false,
                "start": 4409,
                "end": 4417
              }
            ],
            "optional": false,
            "start": 4390,
            "end": 4418
          },
          "definite": false,
          "start": 4384,
          "end": 4418
        }
      ],
      "declare": false,
      "start": 4378,
      "end": 4419
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p87",
            "optional": false,
            "typeAnnotation": null,
            "start": 4426,
            "end": 4429
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4432,
                "end": 4433
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4434,
                "end": 4438
              },
              "optional": false,
              "computed": false,
              "start": 4432,
              "end": 4438
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4445,
                  "end": 4449
                },
                "id": null,
                "generator": false,
                "start": 4439,
                "end": 4449
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4464,
                        "end": 4465
                      },
                      "start": 4458,
                      "end": 4465
                    }
                  ],
                  "start": 4457,
                  "end": 4466
                },
                "id": null,
                "generator": false,
                "start": 4451,
                "end": 4466
              }
            ],
            "optional": false,
            "start": 4432,
            "end": 4467
          },
          "definite": false,
          "start": 4426,
          "end": 4467
        }
      ],
      "declare": false,
      "start": 4420,
      "end": 4468
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p88",
            "optional": false,
            "typeAnnotation": null,
            "start": 4475,
            "end": 4478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4481,
                "end": 4482
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4483,
                "end": 4487
              },
              "optional": false,
              "computed": false,
              "start": 4481,
              "end": 4487
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4494,
                  "end": 4498
                },
                "id": null,
                "generator": false,
                "start": 4488,
                "end": 4498
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4506,
                      "end": 4513
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4514,
                      "end": 4521
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4506,
                    "end": 4521
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4522,
                      "end": 4523
                    }
                  ],
                  "optional": false,
                  "start": 4506,
                  "end": 4524
                },
                "id": null,
                "generator": false,
                "start": 4500,
                "end": 4524
              }
            ],
            "optional": false,
            "start": 4481,
            "end": 4525
          },
          "definite": false,
          "start": 4475,
          "end": 4525
        }
      ],
      "declare": false,
      "start": 4469,
      "end": 4526
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p89",
            "optional": false,
            "typeAnnotation": null,
            "start": 4533,
            "end": 4536
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4539,
                "end": 4540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4541,
                "end": 4545
              },
              "optional": false,
              "computed": false,
              "start": 4539,
              "end": 4545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4552,
                  "end": 4556
                },
                "id": null,
                "generator": false,
                "start": 4546,
                "end": 4556
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4564,
                      "end": 4571
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4572,
                      "end": 4578
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4564,
                    "end": 4578
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4579,
                      "end": 4580
                    }
                  ],
                  "optional": false,
                  "start": 4564,
                  "end": 4581
                },
                "id": null,
                "generator": false,
                "start": 4558,
                "end": 4581
              }
            ],
            "optional": false,
            "start": 4539,
            "end": 4582
          },
          "definite": false,
          "start": 4533,
          "end": 4582
        }
      ],
      "declare": false,
      "start": 4527,
      "end": 4583
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p90",
            "optional": false,
            "typeAnnotation": null,
            "start": 4591,
            "end": 4594
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4597,
                "end": 4598
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4599,
                "end": 4603
              },
              "optional": false,
              "computed": false,
              "start": 4597,
              "end": 4603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4610,
                  "end": 4612
                },
                "id": null,
                "generator": false,
                "start": 4604,
                "end": 4612
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4614,
                "end": 4623
              }
            ],
            "optional": false,
            "start": 4597,
            "end": 4624
          },
          "definite": false,
          "start": 4591,
          "end": 4624
        }
      ],
      "declare": false,
      "start": 4585,
      "end": 4625
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p91",
            "optional": false,
            "typeAnnotation": null,
            "start": 4632,
            "end": 4635
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4638,
                "end": 4639
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4640,
                "end": 4644
              },
              "optional": false,
              "computed": false,
              "start": 4638,
              "end": 4644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4651,
                  "end": 4653
                },
                "id": null,
                "generator": false,
                "start": 4645,
                "end": 4653
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4655,
                "end": 4659
              }
            ],
            "optional": false,
            "start": 4638,
            "end": 4660
          },
          "definite": false,
          "start": 4632,
          "end": 4660
        }
      ],
      "declare": false,
      "start": 4626,
      "end": 4661
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p92",
            "optional": false,
            "typeAnnotation": null,
            "start": 4668,
            "end": 4671
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4674,
                "end": 4675
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4676,
                "end": 4680
              },
              "optional": false,
              "computed": false,
              "start": 4674,
              "end": 4680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4687,
                  "end": 4689
                },
                "id": null,
                "generator": false,
                "start": 4681,
                "end": 4689
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4697,
                  "end": 4698
                },
                "id": null,
                "generator": false,
                "start": 4691,
                "end": 4698
              }
            ],
            "optional": false,
            "start": 4674,
            "end": 4699
          },
          "definite": false,
          "start": 4668,
          "end": 4699
        }
      ],
      "declare": false,
      "start": 4662,
      "end": 4700
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p93",
            "optional": false,
            "typeAnnotation": null,
            "start": 4707,
            "end": 4710
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4713,
                "end": 4714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4715,
                "end": 4719
              },
              "optional": false,
              "computed": false,
              "start": 4713,
              "end": 4719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4726,
                  "end": 4728
                },
                "id": null,
                "generator": false,
                "start": 4720,
                "end": 4728
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4736,
                  "end": 4737
                },
                "id": null,
                "generator": false,
                "start": 4730,
                "end": 4737
              }
            ],
            "optional": false,
            "start": 4713,
            "end": 4738
          },
          "definite": false,
          "start": 4707,
          "end": 4738
        }
      ],
      "declare": false,
      "start": 4701,
      "end": 4739
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p94",
            "optional": false,
            "typeAnnotation": null,
            "start": 4746,
            "end": 4749
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4752,
                "end": 4753
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4754,
                "end": 4758
              },
              "optional": false,
              "computed": false,
              "start": 4752,
              "end": 4758
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4765,
                  "end": 4767
                },
                "id": null,
                "generator": false,
                "start": 4759,
                "end": 4767
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4775,
                  "end": 4784
                },
                "id": null,
                "generator": false,
                "start": 4769,
                "end": 4784
              }
            ],
            "optional": false,
            "start": 4752,
            "end": 4785
          },
          "definite": false,
          "start": 4746,
          "end": 4785
        }
      ],
      "declare": false,
      "start": 4740,
      "end": 4786
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p95",
            "optional": false,
            "typeAnnotation": null,
            "start": 4793,
            "end": 4796
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4800
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4801,
                "end": 4805
              },
              "optional": false,
              "computed": false,
              "start": 4799,
              "end": 4805
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4812,
                  "end": 4814
                },
                "id": null,
                "generator": false,
                "start": 4806,
                "end": 4814
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4822,
                  "end": 4826
                },
                "id": null,
                "generator": false,
                "start": 4816,
                "end": 4826
              }
            ],
            "optional": false,
            "start": 4799,
            "end": 4827
          },
          "definite": false,
          "start": 4793,
          "end": 4827
        }
      ],
      "declare": false,
      "start": 4787,
      "end": 4828
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p96",
            "optional": false,
            "typeAnnotation": null,
            "start": 4835,
            "end": 4838
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4841,
                "end": 4842
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4843,
                "end": 4847
              },
              "optional": false,
              "computed": false,
              "start": 4841,
              "end": 4847
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4854,
                  "end": 4856
                },
                "id": null,
                "generator": false,
                "start": 4848,
                "end": 4856
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4864,
                  "end": 4866
                },
                "id": null,
                "generator": false,
                "start": 4858,
                "end": 4866
              }
            ],
            "optional": false,
            "start": 4841,
            "end": 4867
          },
          "definite": false,
          "start": 4835,
          "end": 4867
        }
      ],
      "declare": false,
      "start": 4829,
      "end": 4868
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p97",
            "optional": false,
            "typeAnnotation": null,
            "start": 4875,
            "end": 4878
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4881,
                "end": 4882
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4883,
                "end": 4887
              },
              "optional": false,
              "computed": false,
              "start": 4881,
              "end": 4887
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4894,
                  "end": 4896
                },
                "id": null,
                "generator": false,
                "start": 4888,
                "end": 4896
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4911,
                        "end": 4912
                      },
                      "start": 4905,
                      "end": 4912
                    }
                  ],
                  "start": 4904,
                  "end": 4913
                },
                "id": null,
                "generator": false,
                "start": 4898,
                "end": 4913
              }
            ],
            "optional": false,
            "start": 4881,
            "end": 4914
          },
          "definite": false,
          "start": 4875,
          "end": 4914
        }
      ],
      "declare": false,
      "start": 4869,
      "end": 4915
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p98",
            "optional": false,
            "typeAnnotation": null,
            "start": 4922,
            "end": 4925
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4928,
                "end": 4929
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4930,
                "end": 4934
              },
              "optional": false,
              "computed": false,
              "start": 4928,
              "end": 4934
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4941,
                  "end": 4943
                },
                "id": null,
                "generator": false,
                "start": 4935,
                "end": 4943
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4951,
                      "end": 4958
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4959,
                      "end": 4966
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4951,
                    "end": 4966
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4967,
                      "end": 4968
                    }
                  ],
                  "optional": false,
                  "start": 4951,
                  "end": 4969
                },
                "id": null,
                "generator": false,
                "start": 4945,
                "end": 4969
              }
            ],
            "optional": false,
            "start": 4928,
            "end": 4970
          },
          "definite": false,
          "start": 4922,
          "end": 4970
        }
      ],
      "declare": false,
      "start": 4916,
      "end": 4971
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p99",
            "optional": false,
            "typeAnnotation": null,
            "start": 4978,
            "end": 4981
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4984,
                "end": 4985
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4986,
                "end": 4990
              },
              "optional": false,
              "computed": false,
              "start": 4984,
              "end": 4990
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4997,
                  "end": 4999
                },
                "id": null,
                "generator": false,
                "start": 4991,
                "end": 4999
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5007,
                      "end": 5014
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5015,
                      "end": 5021
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5007,
                    "end": 5021
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5022,
                      "end": 5023
                    }
                  ],
                  "optional": false,
                  "start": 5007,
                  "end": 5024
                },
                "id": null,
                "generator": false,
                "start": 5001,
                "end": 5024
              }
            ],
            "optional": false,
            "start": 4984,
            "end": 5025
          },
          "definite": false,
          "start": 4978,
          "end": 5025
        }
      ],
      "declare": false,
      "start": 4972,
      "end": 5026
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa0",
            "optional": false,
            "typeAnnotation": null,
            "start": 5034,
            "end": 5037
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5040,
                "end": 5041
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5042,
                "end": 5046
              },
              "optional": false,
              "computed": false,
              "start": 5040,
              "end": 5046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5060,
                        "end": 5061
                      },
                      "start": 5054,
                      "end": 5061
                    }
                  ],
                  "start": 5053,
                  "end": 5062
                },
                "id": null,
                "generator": false,
                "start": 5047,
                "end": 5062
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5064,
                "end": 5073
              }
            ],
            "optional": false,
            "start": 5040,
            "end": 5074
          },
          "definite": false,
          "start": 5034,
          "end": 5074
        }
      ],
      "declare": false,
      "start": 5028,
      "end": 5075
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5082,
            "end": 5085
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5088,
                "end": 5089
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5090,
                "end": 5094
              },
              "optional": false,
              "computed": false,
              "start": 5088,
              "end": 5094
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5108,
                        "end": 5109
                      },
                      "start": 5102,
                      "end": 5109
                    }
                  ],
                  "start": 5101,
                  "end": 5110
                },
                "id": null,
                "generator": false,
                "start": 5095,
                "end": 5110
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5112,
                "end": 5116
              }
            ],
            "optional": false,
            "start": 5088,
            "end": 5117
          },
          "definite": false,
          "start": 5082,
          "end": 5117
        }
      ],
      "declare": false,
      "start": 5076,
      "end": 5118
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5125,
            "end": 5128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5131,
                "end": 5132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5133,
                "end": 5137
              },
              "optional": false,
              "computed": false,
              "start": 5131,
              "end": 5137
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5151,
                        "end": 5152
                      },
                      "start": 5145,
                      "end": 5152
                    }
                  ],
                  "start": 5144,
                  "end": 5153
                },
                "id": null,
                "generator": false,
                "start": 5138,
                "end": 5153
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5161,
                  "end": 5162
                },
                "id": null,
                "generator": false,
                "start": 5155,
                "end": 5162
              }
            ],
            "optional": false,
            "start": 5131,
            "end": 5163
          },
          "definite": false,
          "start": 5125,
          "end": 5163
        }
      ],
      "declare": false,
      "start": 5119,
      "end": 5164
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5171,
            "end": 5174
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5177,
                "end": 5178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5179,
                "end": 5183
              },
              "optional": false,
              "computed": false,
              "start": 5177,
              "end": 5183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5197,
                        "end": 5198
                      },
                      "start": 5191,
                      "end": 5198
                    }
                  ],
                  "start": 5190,
                  "end": 5199
                },
                "id": null,
                "generator": false,
                "start": 5184,
                "end": 5199
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5207,
                  "end": 5208
                },
                "id": null,
                "generator": false,
                "start": 5201,
                "end": 5208
              }
            ],
            "optional": false,
            "start": 5177,
            "end": 5209
          },
          "definite": false,
          "start": 5171,
          "end": 5209
        }
      ],
      "declare": false,
      "start": 5165,
      "end": 5210
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5217,
            "end": 5220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5223,
                "end": 5224
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5225,
                "end": 5229
              },
              "optional": false,
              "computed": false,
              "start": 5223,
              "end": 5229
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5243,
                        "end": 5244
                      },
                      "start": 5237,
                      "end": 5244
                    }
                  ],
                  "start": 5236,
                  "end": 5245
                },
                "id": null,
                "generator": false,
                "start": 5230,
                "end": 5245
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5253,
                  "end": 5262
                },
                "id": null,
                "generator": false,
                "start": 5247,
                "end": 5262
              }
            ],
            "optional": false,
            "start": 5223,
            "end": 5263
          },
          "definite": false,
          "start": 5217,
          "end": 5263
        }
      ],
      "declare": false,
      "start": 5211,
      "end": 5264
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5271,
            "end": 5274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5277,
                "end": 5278
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5279,
                "end": 5283
              },
              "optional": false,
              "computed": false,
              "start": 5277,
              "end": 5283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5297,
                        "end": 5298
                      },
                      "start": 5291,
                      "end": 5298
                    }
                  ],
                  "start": 5290,
                  "end": 5299
                },
                "id": null,
                "generator": false,
                "start": 5284,
                "end": 5299
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 5307,
                  "end": 5311
                },
                "id": null,
                "generator": false,
                "start": 5301,
                "end": 5311
              }
            ],
            "optional": false,
            "start": 5277,
            "end": 5312
          },
          "definite": false,
          "start": 5271,
          "end": 5312
        }
      ],
      "declare": false,
      "start": 5265,
      "end": 5313
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5320,
            "end": 5323
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5326,
                "end": 5327
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5328,
                "end": 5332
              },
              "optional": false,
              "computed": false,
              "start": 5326,
              "end": 5332
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5346,
                        "end": 5347
                      },
                      "start": 5340,
                      "end": 5347
                    }
                  ],
                  "start": 5339,
                  "end": 5348
                },
                "id": null,
                "generator": false,
                "start": 5333,
                "end": 5348
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 5356,
                  "end": 5358
                },
                "id": null,
                "generator": false,
                "start": 5350,
                "end": 5358
              }
            ],
            "optional": false,
            "start": 5326,
            "end": 5359
          },
          "definite": false,
          "start": 5320,
          "end": 5359
        }
      ],
      "declare": false,
      "start": 5314,
      "end": 5360
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5367,
            "end": 5370
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5373,
                "end": 5374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5375,
                "end": 5379
              },
              "optional": false,
              "computed": false,
              "start": 5373,
              "end": 5379
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5393,
                        "end": 5394
                      },
                      "start": 5387,
                      "end": 5394
                    }
                  ],
                  "start": 5386,
                  "end": 5395
                },
                "id": null,
                "generator": false,
                "start": 5380,
                "end": 5395
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5410,
                        "end": 5411
                      },
                      "start": 5404,
                      "end": 5411
                    }
                  ],
                  "start": 5403,
                  "end": 5412
                },
                "id": null,
                "generator": false,
                "start": 5397,
                "end": 5412
              }
            ],
            "optional": false,
            "start": 5373,
            "end": 5413
          },
          "definite": false,
          "start": 5367,
          "end": 5413
        }
      ],
      "declare": false,
      "start": 5361,
      "end": 5414
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa8",
            "optional": false,
            "typeAnnotation": null,
            "start": 5421,
            "end": 5424
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5427,
                "end": 5428
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5429,
                "end": 5433
              },
              "optional": false,
              "computed": false,
              "start": 5427,
              "end": 5433
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5447,
                        "end": 5448
                      },
                      "start": 5441,
                      "end": 5448
                    }
                  ],
                  "start": 5440,
                  "end": 5449
                },
                "id": null,
                "generator": false,
                "start": 5434,
                "end": 5449
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5457,
                      "end": 5464
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5465,
                      "end": 5472
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5457,
                    "end": 5472
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5473,
                      "end": 5474
                    }
                  ],
                  "optional": false,
                  "start": 5457,
                  "end": 5475
                },
                "id": null,
                "generator": false,
                "start": 5451,
                "end": 5475
              }
            ],
            "optional": false,
            "start": 5427,
            "end": 5476
          },
          "definite": false,
          "start": 5421,
          "end": 5476
        }
      ],
      "declare": false,
      "start": 5415,
      "end": 5477
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pa9",
            "optional": false,
            "typeAnnotation": null,
            "start": 5484,
            "end": 5487
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5490,
                "end": 5491
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5492,
                "end": 5496
              },
              "optional": false,
              "computed": false,
              "start": 5490,
              "end": 5496
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5510,
                        "end": 5511
                      },
                      "start": 5504,
                      "end": 5511
                    }
                  ],
                  "start": 5503,
                  "end": 5512
                },
                "id": null,
                "generator": false,
                "start": 5497,
                "end": 5512
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5520,
                      "end": 5527
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5528,
                      "end": 5534
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5520,
                    "end": 5534
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5535,
                      "end": 5536
                    }
                  ],
                  "optional": false,
                  "start": 5520,
                  "end": 5537
                },
                "id": null,
                "generator": false,
                "start": 5514,
                "end": 5537
              }
            ],
            "optional": false,
            "start": 5490,
            "end": 5538
          },
          "definite": false,
          "start": 5484,
          "end": 5538
        }
      ],
      "declare": false,
      "start": 5478,
      "end": 5539
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb0",
            "optional": false,
            "typeAnnotation": null,
            "start": 5547,
            "end": 5550
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5553,
                "end": 5554
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5555,
                "end": 5559
              },
              "optional": false,
              "computed": false,
              "start": 5553,
              "end": 5559
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5566,
                      "end": 5573
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5574,
                      "end": 5581
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5566,
                    "end": 5581
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5582,
                      "end": 5585
                    }
                  ],
                  "optional": false,
                  "start": 5566,
                  "end": 5586
                },
                "id": null,
                "generator": false,
                "start": 5560,
                "end": 5586
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5588,
                "end": 5597
              }
            ],
            "optional": false,
            "start": 5553,
            "end": 5598
          },
          "definite": false,
          "start": 5547,
          "end": 5598
        }
      ],
      "declare": false,
      "start": 5541,
      "end": 5599
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5606,
            "end": 5609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5612,
                "end": 5613
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5614,
                "end": 5618
              },
              "optional": false,
              "computed": false,
              "start": 5612,
              "end": 5618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5625,
                      "end": 5632
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5633,
                      "end": 5640
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5625,
                    "end": 5640
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5641,
                      "end": 5644
                    }
                  ],
                  "optional": false,
                  "start": 5625,
                  "end": 5645
                },
                "id": null,
                "generator": false,
                "start": 5619,
                "end": 5645
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5647,
                "end": 5651
              }
            ],
            "optional": false,
            "start": 5612,
            "end": 5652
          },
          "definite": false,
          "start": 5606,
          "end": 5652
        }
      ],
      "declare": false,
      "start": 5600,
      "end": 5653
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5660,
            "end": 5663
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5666,
                "end": 5667
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5668,
                "end": 5672
              },
              "optional": false,
              "computed": false,
              "start": 5666,
              "end": 5672
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5679,
                      "end": 5686
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5687,
                      "end": 5694
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5679,
                    "end": 5694
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5695,
                      "end": 5698
                    }
                  ],
                  "optional": false,
                  "start": 5679,
                  "end": 5699
                },
                "id": null,
                "generator": false,
                "start": 5673,
                "end": 5699
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5707,
                  "end": 5708
                },
                "id": null,
                "generator": false,
                "start": 5701,
                "end": 5708
              }
            ],
            "optional": false,
            "start": 5666,
            "end": 5709
          },
          "definite": false,
          "start": 5660,
          "end": 5709
        }
      ],
      "declare": false,
      "start": 5654,
      "end": 5710
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5717,
            "end": 5720
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5723,
                "end": 5724
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5725,
                "end": 5729
              },
              "optional": false,
              "computed": false,
              "start": 5723,
              "end": 5729
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5736,
                      "end": 5743
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5744,
                      "end": 5751
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5736,
                    "end": 5751
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5752,
                      "end": 5755
                    }
                  ],
                  "optional": false,
                  "start": 5736,
                  "end": 5756
                },
                "id": null,
                "generator": false,
                "start": 5730,
                "end": 5756
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5764,
                  "end": 5765
                },
                "id": null,
                "generator": false,
                "start": 5758,
                "end": 5765
              }
            ],
            "optional": false,
            "start": 5723,
            "end": 5766
          },
          "definite": false,
          "start": 5717,
          "end": 5766
        }
      ],
      "declare": false,
      "start": 5711,
      "end": 5767
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5774,
            "end": 5777
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5780,
                "end": 5781
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5782,
                "end": 5786
              },
              "optional": false,
              "computed": false,
              "start": 5780,
              "end": 5786
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5793,
                      "end": 5800
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5801,
                      "end": 5808
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5793,
                    "end": 5808
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5809,
                      "end": 5812
                    }
                  ],
                  "optional": false,
                  "start": 5793,
                  "end": 5813
                },
                "id": null,
                "generator": false,
                "start": 5787,
                "end": 5813
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5821,
                  "end": 5830
                },
                "id": null,
                "generator": false,
                "start": 5815,
                "end": 5830
              }
            ],
            "optional": false,
            "start": 5780,
            "end": 5831
          },
          "definite": false,
          "start": 5774,
          "end": 5831
        }
      ],
      "declare": false,
      "start": 5768,
      "end": 5832
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5839,
            "end": 5842
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5845,
                "end": 5846
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5847,
                "end": 5851
              },
              "optional": false,
              "computed": false,
              "start": 5845,
              "end": 5851
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5858,
                      "end": 5865
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5866,
                      "end": 5873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5858,
                    "end": 5873
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5874,
                      "end": 5877
                    }
                  ],
                  "optional": false,
                  "start": 5858,
                  "end": 5878
                },
                "id": null,
                "generator": false,
                "start": 5852,
                "end": 5878
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 5886,
                  "end": 5890
                },
                "id": null,
                "generator": false,
                "start": 5880,
                "end": 5890
              }
            ],
            "optional": false,
            "start": 5845,
            "end": 5891
          },
          "definite": false,
          "start": 5839,
          "end": 5891
        }
      ],
      "declare": false,
      "start": 5833,
      "end": 5892
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5899,
            "end": 5902
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5905,
                "end": 5906
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5907,
                "end": 5911
              },
              "optional": false,
              "computed": false,
              "start": 5905,
              "end": 5911
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5918,
                      "end": 5925
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5926,
                      "end": 5933
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5918,
                    "end": 5933
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5934,
                      "end": 5937
                    }
                  ],
                  "optional": false,
                  "start": 5918,
                  "end": 5938
                },
                "id": null,
                "generator": false,
                "start": 5912,
                "end": 5938
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 5946,
                  "end": 5948
                },
                "id": null,
                "generator": false,
                "start": 5940,
                "end": 5948
              }
            ],
            "optional": false,
            "start": 5905,
            "end": 5949
          },
          "definite": false,
          "start": 5899,
          "end": 5949
        }
      ],
      "declare": false,
      "start": 5893,
      "end": 5950
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5957,
            "end": 5960
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5963,
                "end": 5964
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5965,
                "end": 5969
              },
              "optional": false,
              "computed": false,
              "start": 5963,
              "end": 5969
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5976,
                      "end": 5983
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5984,
                      "end": 5991
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5976,
                    "end": 5991
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5992,
                      "end": 5995
                    }
                  ],
                  "optional": false,
                  "start": 5976,
                  "end": 5996
                },
                "id": null,
                "generator": false,
                "start": 5970,
                "end": 5996
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6011,
                        "end": 6012
                      },
                      "start": 6005,
                      "end": 6012
                    }
                  ],
                  "start": 6004,
                  "end": 6013
                },
                "id": null,
                "generator": false,
                "start": 5998,
                "end": 6013
              }
            ],
            "optional": false,
            "start": 5963,
            "end": 6014
          },
          "definite": false,
          "start": 5957,
          "end": 6014
        }
      ],
      "declare": false,
      "start": 5951,
      "end": 6015
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6022,
            "end": 6025
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6028,
                "end": 6029
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6030,
                "end": 6034
              },
              "optional": false,
              "computed": false,
              "start": 6028,
              "end": 6034
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6041,
                      "end": 6048
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6049,
                      "end": 6056
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6041,
                    "end": 6056
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6057,
                      "end": 6060
                    }
                  ],
                  "optional": false,
                  "start": 6041,
                  "end": 6061
                },
                "id": null,
                "generator": false,
                "start": 6035,
                "end": 6061
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6069,
                      "end": 6076
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6077,
                      "end": 6084
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6069,
                    "end": 6084
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6085,
                      "end": 6086
                    }
                  ],
                  "optional": false,
                  "start": 6069,
                  "end": 6087
                },
                "id": null,
                "generator": false,
                "start": 6063,
                "end": 6087
              }
            ],
            "optional": false,
            "start": 6028,
            "end": 6088
          },
          "definite": false,
          "start": 6022,
          "end": 6088
        }
      ],
      "declare": false,
      "start": 6016,
      "end": 6089
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pb9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6096,
            "end": 6099
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6102,
                "end": 6103
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6104,
                "end": 6108
              },
              "optional": false,
              "computed": false,
              "start": 6102,
              "end": 6108
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6115,
                      "end": 6122
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6123,
                      "end": 6130
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6115,
                    "end": 6130
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6131,
                      "end": 6134
                    }
                  ],
                  "optional": false,
                  "start": 6115,
                  "end": 6135
                },
                "id": null,
                "generator": false,
                "start": 6109,
                "end": 6135
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6143,
                      "end": 6150
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6151,
                      "end": 6157
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6143,
                    "end": 6157
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6158,
                      "end": 6159
                    }
                  ],
                  "optional": false,
                  "start": 6143,
                  "end": 6160
                },
                "id": null,
                "generator": false,
                "start": 6137,
                "end": 6160
              }
            ],
            "optional": false,
            "start": 6102,
            "end": 6161
          },
          "definite": false,
          "start": 6096,
          "end": 6161
        }
      ],
      "declare": false,
      "start": 6090,
      "end": 6162
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc0",
            "optional": false,
            "typeAnnotation": null,
            "start": 6170,
            "end": 6173
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6176,
                "end": 6177
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6178,
                "end": 6182
              },
              "optional": false,
              "computed": false,
              "start": 6176,
              "end": 6182
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6189,
                      "end": 6196
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6197,
                      "end": 6203
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6189,
                    "end": 6203
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6204,
                      "end": 6207
                    }
                  ],
                  "optional": false,
                  "start": 6189,
                  "end": 6208
                },
                "id": null,
                "generator": false,
                "start": 6183,
                "end": 6208
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 6210,
                "end": 6219
              }
            ],
            "optional": false,
            "start": 6176,
            "end": 6220
          },
          "definite": false,
          "start": 6170,
          "end": 6220
        }
      ],
      "declare": false,
      "start": 6164,
      "end": 6221
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6228,
            "end": 6231
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6234,
                "end": 6235
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6236,
                "end": 6240
              },
              "optional": false,
              "computed": false,
              "start": 6234,
              "end": 6240
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6247,
                      "end": 6254
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6255,
                      "end": 6261
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6247,
                    "end": 6261
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6262,
                      "end": 6265
                    }
                  ],
                  "optional": false,
                  "start": 6247,
                  "end": 6266
                },
                "id": null,
                "generator": false,
                "start": 6241,
                "end": 6266
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 6268,
                "end": 6272
              }
            ],
            "optional": false,
            "start": 6234,
            "end": 6273
          },
          "definite": false,
          "start": 6228,
          "end": 6273
        }
      ],
      "declare": false,
      "start": 6222,
      "end": 6274
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6281,
            "end": 6284
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6287,
                "end": 6288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6289,
                "end": 6293
              },
              "optional": false,
              "computed": false,
              "start": 6287,
              "end": 6293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6300,
                      "end": 6307
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6308,
                      "end": 6314
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6300,
                    "end": 6314
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6315,
                      "end": 6318
                    }
                  ],
                  "optional": false,
                  "start": 6300,
                  "end": 6319
                },
                "id": null,
                "generator": false,
                "start": 6294,
                "end": 6319
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 6327,
                  "end": 6328
                },
                "id": null,
                "generator": false,
                "start": 6321,
                "end": 6328
              }
            ],
            "optional": false,
            "start": 6287,
            "end": 6329
          },
          "definite": false,
          "start": 6281,
          "end": 6329
        }
      ],
      "declare": false,
      "start": 6275,
      "end": 6330
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc3",
            "optional": false,
            "typeAnnotation": null,
            "start": 6337,
            "end": 6340
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6343,
                "end": 6344
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6345,
                "end": 6349
              },
              "optional": false,
              "computed": false,
              "start": 6343,
              "end": 6349
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6356,
                      "end": 6363
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6364,
                      "end": 6370
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6356,
                    "end": 6370
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6371,
                      "end": 6374
                    }
                  ],
                  "optional": false,
                  "start": 6356,
                  "end": 6375
                },
                "id": null,
                "generator": false,
                "start": 6350,
                "end": 6375
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6383,
                  "end": 6384
                },
                "id": null,
                "generator": false,
                "start": 6377,
                "end": 6384
              }
            ],
            "optional": false,
            "start": 6343,
            "end": 6385
          },
          "definite": false,
          "start": 6337,
          "end": 6385
        }
      ],
      "declare": false,
      "start": 6331,
      "end": 6386
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc4",
            "optional": false,
            "typeAnnotation": null,
            "start": 6393,
            "end": 6396
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6399,
                "end": 6400
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6401,
                "end": 6405
              },
              "optional": false,
              "computed": false,
              "start": 6399,
              "end": 6405
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6412,
                      "end": 6419
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6420,
                      "end": 6426
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6412,
                    "end": 6426
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6427,
                      "end": 6430
                    }
                  ],
                  "optional": false,
                  "start": 6412,
                  "end": 6431
                },
                "id": null,
                "generator": false,
                "start": 6406,
                "end": 6431
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6439,
                  "end": 6448
                },
                "id": null,
                "generator": false,
                "start": 6433,
                "end": 6448
              }
            ],
            "optional": false,
            "start": 6399,
            "end": 6449
          },
          "definite": false,
          "start": 6393,
          "end": 6449
        }
      ],
      "declare": false,
      "start": 6387,
      "end": 6450
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc5",
            "optional": false,
            "typeAnnotation": null,
            "start": 6457,
            "end": 6460
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6463,
                "end": 6464
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6465,
                "end": 6469
              },
              "optional": false,
              "computed": false,
              "start": 6463,
              "end": 6469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6476,
                      "end": 6483
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6484,
                      "end": 6490
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6476,
                    "end": 6490
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6491,
                      "end": 6494
                    }
                  ],
                  "optional": false,
                  "start": 6476,
                  "end": 6495
                },
                "id": null,
                "generator": false,
                "start": 6470,
                "end": 6495
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 6503,
                  "end": 6507
                },
                "id": null,
                "generator": false,
                "start": 6497,
                "end": 6507
              }
            ],
            "optional": false,
            "start": 6463,
            "end": 6508
          },
          "definite": false,
          "start": 6457,
          "end": 6508
        }
      ],
      "declare": false,
      "start": 6451,
      "end": 6509
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc6",
            "optional": false,
            "typeAnnotation": null,
            "start": 6516,
            "end": 6519
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6522,
                "end": 6523
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6524,
                "end": 6528
              },
              "optional": false,
              "computed": false,
              "start": 6522,
              "end": 6528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6535,
                      "end": 6542
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6543,
                      "end": 6549
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6535,
                    "end": 6549
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6550,
                      "end": 6553
                    }
                  ],
                  "optional": false,
                  "start": 6535,
                  "end": 6554
                },
                "id": null,
                "generator": false,
                "start": 6529,
                "end": 6554
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 6562,
                  "end": 6564
                },
                "id": null,
                "generator": false,
                "start": 6556,
                "end": 6564
              }
            ],
            "optional": false,
            "start": 6522,
            "end": 6565
          },
          "definite": false,
          "start": 6516,
          "end": 6565
        }
      ],
      "declare": false,
      "start": 6510,
      "end": 6566
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc7",
            "optional": false,
            "typeAnnotation": null,
            "start": 6573,
            "end": 6576
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6579,
                "end": 6580
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6581,
                "end": 6585
              },
              "optional": false,
              "computed": false,
              "start": 6579,
              "end": 6585
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6592,
                      "end": 6599
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6600,
                      "end": 6606
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6592,
                    "end": 6606
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6607,
                      "end": 6610
                    }
                  ],
                  "optional": false,
                  "start": 6592,
                  "end": 6611
                },
                "id": null,
                "generator": false,
                "start": 6586,
                "end": 6611
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6626,
                        "end": 6627
                      },
                      "start": 6620,
                      "end": 6627
                    }
                  ],
                  "start": 6619,
                  "end": 6628
                },
                "id": null,
                "generator": false,
                "start": 6613,
                "end": 6628
              }
            ],
            "optional": false,
            "start": 6579,
            "end": 6629
          },
          "definite": false,
          "start": 6573,
          "end": 6629
        }
      ],
      "declare": false,
      "start": 6567,
      "end": 6630
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6637,
            "end": 6640
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6643,
                "end": 6644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6645,
                "end": 6649
              },
              "optional": false,
              "computed": false,
              "start": 6643,
              "end": 6649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6656,
                      "end": 6663
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6664,
                      "end": 6670
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6656,
                    "end": 6670
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6671,
                      "end": 6674
                    }
                  ],
                  "optional": false,
                  "start": 6656,
                  "end": 6675
                },
                "id": null,
                "generator": false,
                "start": 6650,
                "end": 6675
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6683,
                      "end": 6690
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6691,
                      "end": 6698
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6683,
                    "end": 6698
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6699,
                      "end": 6700
                    }
                  ],
                  "optional": false,
                  "start": 6683,
                  "end": 6701
                },
                "id": null,
                "generator": false,
                "start": 6677,
                "end": 6701
              }
            ],
            "optional": false,
            "start": 6643,
            "end": 6702
          },
          "definite": false,
          "start": 6637,
          "end": 6702
        }
      ],
      "declare": false,
      "start": 6631,
      "end": 6703
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pc9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6710,
            "end": 6713
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6716,
                "end": 6717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6718,
                "end": 6722
              },
              "optional": false,
              "computed": false,
              "start": 6716,
              "end": 6722
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6729,
                      "end": 6736
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6737,
                      "end": 6743
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6729,
                    "end": 6743
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6744,
                      "end": 6747
                    }
                  ],
                  "optional": false,
                  "start": 6729,
                  "end": 6748
                },
                "id": null,
                "generator": false,
                "start": 6723,
                "end": 6748
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6756,
                      "end": 6763
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6764,
                      "end": 6770
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6756,
                    "end": 6770
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6771,
                      "end": 6772
                    }
                  ],
                  "optional": false,
                  "start": 6756,
                  "end": 6773
                },
                "id": null,
                "generator": false,
                "start": 6750,
                "end": 6773
              }
            ],
            "optional": false,
            "start": 6716,
            "end": 6774
          },
          "definite": false,
          "start": 6710,
          "end": 6774
        }
      ],
      "declare": false,
      "start": 6704,
      "end": 6775
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 6777,
            "end": 6784
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 6785,
            "end": 6792
          },
          "optional": false,
          "computed": false,
          "start": 6777,
          "end": 6792
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 6793,
              "end": 6802
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6806,
                    "end": 6813
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6814,
                        "end": 6820
                      }
                    ],
                    "start": 6813,
                    "end": 6821
                  },
                  "start": 6806,
                  "end": 6821
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 6824,
                  "end": 6830
                }
              ],
              "start": 6806,
              "end": 6830
            },
            "start": 6793,
            "end": 6830
          }
        ],
        "optional": false,
        "start": 6777,
        "end": 6831
      },
      "directive": null,
      "start": 6777,
      "end": 6832
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 6833,
            "end": 6840
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 6841,
            "end": 6848
          },
          "optional": false,
          "computed": false,
          "start": 6833,
          "end": 6848
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 6849,
              "end": 6858
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6862,
                "end": 6869
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6870,
                      "end": 6877
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6878,
                          "end": 6884
                        }
                      ],
                      "start": 6877,
                      "end": 6885
                    },
                    "start": 6870,
                    "end": 6885
                  }
                ],
                "start": 6869,
                "end": 6886
              },
              "start": 6862,
              "end": 6886
            },
            "start": 6849,
            "end": 6886
          }
        ],
        "optional": false,
        "start": 6833,
        "end": 6887
      },
      "directive": null,
      "start": 6833,
      "end": 6888
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 6889,
            "end": 6896
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 6897,
            "end": 6904
          },
          "optional": false,
          "computed": false,
          "start": 6889,
          "end": 6904
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 6905,
              "end": 6914
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 6918,
                  "end": 6924
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6927,
                    "end": 6934
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6935,
                          "end": 6942
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 6943,
                              "end": 6949
                            }
                          ],
                          "start": 6942,
                          "end": 6950
                        },
                        "start": 6935,
                        "end": 6950
                      }
                    ],
                    "start": 6934,
                    "end": 6951
                  },
                  "start": 6927,
                  "end": 6951
                }
              ],
              "start": 6918,
              "end": 6951
            },
            "start": 6905,
            "end": 6951
          }
        ],
        "optional": false,
        "start": 6889,
        "end": 6952
      },
      "directive": null,
      "start": 6889,
      "end": 6953
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 6954,
            "end": 6961
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 6962,
            "end": 6969
          },
          "optional": false,
          "computed": false,
          "start": 6954,
          "end": 6969
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 6970,
              "end": 6979
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6983,
                    "end": 6990
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6991,
                        "end": 6997
                      }
                    ],
                    "start": 6990,
                    "end": 6998
                  },
                  "start": 6983,
                  "end": 6998
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7001,
                    "end": 7008
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7009,
                          "end": 7016
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 7017,
                              "end": 7023
                            }
                          ],
                          "start": 7016,
                          "end": 7024
                        },
                        "start": 7009,
                        "end": 7024
                      }
                    ],
                    "start": 7008,
                    "end": 7025
                  },
                  "start": 7001,
                  "end": 7025
                }
              ],
              "start": 6983,
              "end": 7025
            },
            "start": 6970,
            "end": 7025
          }
        ],
        "optional": false,
        "start": 6954,
        "end": 7026
      },
      "directive": null,
      "start": 6954,
      "end": 7027
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 7028,
            "end": 7035
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 7036,
            "end": 7043
          },
          "optional": false,
          "computed": false,
          "start": 7028,
          "end": 7043
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 7044,
              "end": 7053
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7057,
                "end": 7064
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 7065,
                        "end": 7071
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7074,
                          "end": 7081
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7082,
                                "end": 7089
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 7090,
                                    "end": 7096
                                  }
                                ],
                                "start": 7089,
                                "end": 7097
                              },
                              "start": 7082,
                              "end": 7097
                            }
                          ],
                          "start": 7081,
                          "end": 7098
                        },
                        "start": 7074,
                        "end": 7098
                      }
                    ],
                    "start": 7065,
                    "end": 7098
                  }
                ],
                "start": 7064,
                "end": 7099
              },
              "start": 7057,
              "end": 7099
            },
            "start": 7044,
            "end": 7099
          }
        ],
        "optional": false,
        "start": 7028,
        "end": 7100
      },
      "directive": null,
      "start": 7028,
      "end": 7101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7101
}
```
