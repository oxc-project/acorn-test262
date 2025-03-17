__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6776,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 31,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 15,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 22,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 22,
                  "end": 31,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 23,
                      "end": 30
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 33,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 51,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
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
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 97,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 85,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 89,
                  "end": 96,
                  "argument": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 102,
            "end": 111,
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "a",
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
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 140,
            "end": 158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 157,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 150,
                  "end": 157,
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 172,
            "argument": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "value": 1,
              "raw": "1"
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
      "start": 176,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 192,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 305,
        "body": [
          {
            "type": "TryStatement",
            "start": 201,
            "end": 303,
            "block": {
              "type": "BlockStatement",
              "start": 205,
              "end": 257,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 215,
                  "end": 233,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 221,
                      "end": 232,
                      "id": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 225,
                        "end": 232,
                        "argument": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 242,
                  "end": 251,
                  "argument": {
                    "type": "Literal",
                    "start": 249,
                    "end": 250,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 262,
              "end": 303,
              "param": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 303,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 282,
                    "end": 297,
                    "argument": {
                      "type": "Literal",
                      "start": 289,
                      "end": 296,
                      "value": "error",
                      "raw": "'error'"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 326,
        "end": 412,
        "body": [
          {
            "type": "TryStatement",
            "start": 332,
            "end": 410,
            "block": {
              "type": "BlockStatement",
              "start": 336,
              "end": 388,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 346,
                  "end": 364,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 352,
                      "end": 363,
                      "id": {
                        "type": "Identifier",
                        "start": 352,
                        "end": 353,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 356,
                        "end": 363,
                        "argument": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 363,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 373,
                  "end": 382,
                  "argument": {
                    "type": "Literal",
                    "start": 380,
                    "end": 381,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 393,
              "end": 410,
              "param": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 403,
                "end": 410,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 414,
      "end": 542,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 430,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 433,
        "end": 542,
        "body": [
          {
            "type": "TryStatement",
            "start": 439,
            "end": 540,
            "block": {
              "type": "BlockStatement",
              "start": 443,
              "end": 495,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 453,
                  "end": 471,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 459,
                      "end": 470,
                      "id": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 460,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 463,
                        "end": 470,
                        "argument": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 480,
                  "end": 489,
                  "argument": {
                    "type": "Literal",
                    "start": 487,
                    "end": 488,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 500,
              "end": 540,
              "param": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 510,
                "end": 540,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 520,
                    "end": 534,
                    "argument": {
                      "type": "CallExpression",
                      "start": 526,
                      "end": 533,
                      "callee": {
                        "type": "Identifier",
                        "start": 526,
                        "end": 531,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 544,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 560,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 563,
        "end": 689,
        "body": [
          {
            "type": "TryStatement",
            "start": 569,
            "end": 687,
            "block": {
              "type": "BlockStatement",
              "start": 573,
              "end": 625,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 583,
                  "end": 601,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 589,
                      "end": 600,
                      "id": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 593,
                        "end": 600,
                        "argument": {
                          "type": "Identifier",
                          "start": 599,
                          "end": 600,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 610,
                  "end": 619,
                  "argument": {
                    "type": "Literal",
                    "start": 617,
                    "end": 618,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 630,
              "end": 687,
              "param": {
                "type": "Identifier",
                "start": 637,
                "end": 638,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 640,
                "end": 687,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 650,
                    "end": 681,
                    "argument": {
                      "type": "CallExpression",
                      "start": 657,
                      "end": 680,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 657,
                        "end": 671,
                        "object": {
                          "type": "Identifier",
                          "start": 657,
                          "end": 664,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 671,
                          "name": "reject",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 672,
                          "end": 679,
                          "callee": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 677,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 691,
      "end": 812,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 707,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 710,
        "end": 812,
        "body": [
          {
            "type": "TryStatement",
            "start": 716,
            "end": 810,
            "block": {
              "type": "BlockStatement",
              "start": 720,
              "end": 772,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 730,
                  "end": 748,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 736,
                      "end": 747,
                      "id": {
                        "type": "Identifier",
                        "start": 736,
                        "end": 737,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 740,
                        "end": 747,
                        "argument": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 747,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 757,
                  "end": 766,
                  "argument": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 777,
              "end": 810,
              "param": {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 787,
                "end": 810,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 797,
                    "end": 804,
                    "argument": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 814,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 829,
        "end": 830,
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 833,
        "end": 942,
        "body": [
          {
            "type": "TryStatement",
            "start": 839,
            "end": 940,
            "block": {
              "type": "BlockStatement",
              "start": 843,
              "end": 895,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 853,
                  "end": 871,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 859,
                      "end": 870,
                      "id": {
                        "type": "Identifier",
                        "start": 859,
                        "end": 860,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 863,
                        "end": 870,
                        "argument": {
                          "type": "Identifier",
                          "start": 869,
                          "end": 870,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 880,
                  "end": 889,
                  "argument": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 888,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 900,
              "end": 940,
              "param": {
                "type": "Identifier",
                "start": 907,
                "end": 908,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 910,
                "end": 940,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 920,
                    "end": 934,
                    "argument": {
                      "type": "CallExpression",
                      "start": 926,
                      "end": 933,
                      "callee": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 931,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 944,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 960,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 963,
        "end": 1089,
        "body": [
          {
            "type": "TryStatement",
            "start": 969,
            "end": 1087,
            "block": {
              "type": "BlockStatement",
              "start": 973,
              "end": 1025,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 983,
                  "end": 1001,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 989,
                      "end": 1000,
                      "id": {
                        "type": "Identifier",
                        "start": 989,
                        "end": 990,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 993,
                        "end": 1000,
                        "argument": {
                          "type": "Identifier",
                          "start": 999,
                          "end": 1000,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 1010,
                  "end": 1019,
                  "argument": {
                    "type": "Identifier",
                    "start": 1017,
                    "end": 1018,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1030,
              "end": 1087,
              "param": {
                "type": "Identifier",
                "start": 1037,
                "end": 1038,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 1040,
                "end": 1087,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1050,
                    "end": 1081,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1057,
                      "end": 1080,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1057,
                        "end": 1071,
                        "object": {
                          "type": "Identifier",
                          "start": 1057,
                          "end": 1064,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1065,
                          "end": 1071,
                          "name": "reject",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 1072,
                          "end": 1079,
                          "callee": {
                            "type": "Identifier",
                            "start": 1072,
                            "end": 1077,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1125,
      "end": 1147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1131,
          "end": 1146,
          "id": {
            "type": "Identifier",
            "start": 1131,
            "end": 1134,
            "name": "p00",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1137,
            "end": 1146,
            "callee": {
              "type": "MemberExpression",
              "start": 1137,
              "end": 1144,
              "object": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1139,
                "end": 1144,
                "name": "catch",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1148,
      "end": 1169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1154,
          "end": 1168,
          "id": {
            "type": "Identifier",
            "start": 1154,
            "end": 1157,
            "name": "p01",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1160,
            "end": 1168,
            "callee": {
              "type": "MemberExpression",
              "start": 1160,
              "end": 1166,
              "object": {
                "type": "Identifier",
                "start": 1160,
                "end": 1161,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1162,
                "end": 1166,
                "name": "then",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1171,
      "end": 1202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1177,
          "end": 1201,
          "id": {
            "type": "Identifier",
            "start": 1177,
            "end": 1180,
            "name": "p10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1183,
            "end": 1201,
            "callee": {
              "type": "MemberExpression",
              "start": 1183,
              "end": 1190,
              "object": {
                "type": "Identifier",
                "start": 1183,
                "end": 1184,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1185,
                "end": 1190,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1191,
                "end": 1200,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1203,
      "end": 1229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1228,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1212,
            "name": "p11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1215,
            "end": 1228,
            "callee": {
              "type": "MemberExpression",
              "start": 1215,
              "end": 1222,
              "object": {
                "type": "Identifier",
                "start": 1215,
                "end": 1216,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1217,
                "end": 1222,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1223,
                "end": 1227,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1230,
      "end": 1259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1236,
          "end": 1258,
          "id": {
            "type": "Identifier",
            "start": 1236,
            "end": 1239,
            "name": "p12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1242,
            "end": 1258,
            "callee": {
              "type": "MemberExpression",
              "start": 1242,
              "end": 1249,
              "object": {
                "type": "Identifier",
                "start": 1242,
                "end": 1243,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1244,
                "end": 1249,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1250,
                "end": 1257,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 1256,
                  "end": 1257,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1260,
      "end": 1289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1266,
          "end": 1288,
          "id": {
            "type": "Identifier",
            "start": 1266,
            "end": 1269,
            "name": "p13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1272,
            "end": 1288,
            "callee": {
              "type": "MemberExpression",
              "start": 1272,
              "end": 1279,
              "object": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1274,
                "end": 1279,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1280,
                "end": 1287,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1287,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1290,
      "end": 1327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1296,
          "end": 1326,
          "id": {
            "type": "Identifier",
            "start": 1296,
            "end": 1299,
            "name": "p14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1302,
            "end": 1326,
            "callee": {
              "type": "MemberExpression",
              "start": 1302,
              "end": 1309,
              "object": {
                "type": "Identifier",
                "start": 1302,
                "end": 1303,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1304,
                "end": 1309,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1310,
                "end": 1325,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1325,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1328,
      "end": 1360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1334,
          "end": 1359,
          "id": {
            "type": "Identifier",
            "start": 1334,
            "end": 1337,
            "name": "p15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1340,
            "end": 1359,
            "callee": {
              "type": "MemberExpression",
              "start": 1340,
              "end": 1347,
              "object": {
                "type": "Identifier",
                "start": 1340,
                "end": 1341,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1342,
                "end": 1347,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1348,
                "end": 1358,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 1354,
                  "end": 1358,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1361,
      "end": 1391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1367,
          "end": 1390,
          "id": {
            "type": "Identifier",
            "start": 1367,
            "end": 1370,
            "name": "p16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1373,
            "end": 1390,
            "callee": {
              "type": "MemberExpression",
              "start": 1373,
              "end": 1380,
              "object": {
                "type": "Identifier",
                "start": 1373,
                "end": 1374,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1375,
                "end": 1380,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1381,
                "end": 1389,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1387,
                  "end": 1389,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1392,
      "end": 1429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1398,
          "end": 1428,
          "id": {
            "type": "Identifier",
            "start": 1398,
            "end": 1401,
            "name": "p17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1404,
            "end": 1428,
            "callee": {
              "type": "MemberExpression",
              "start": 1404,
              "end": 1411,
              "object": {
                "type": "Identifier",
                "start": 1404,
                "end": 1405,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1406,
                "end": 1411,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1412,
                "end": 1427,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1418,
                  "end": 1427,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 1419,
                      "end": 1426,
                      "argument": {
                        "type": "Literal",
                        "start": 1425,
                        "end": 1426,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1430,
      "end": 1475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1436,
          "end": 1474,
          "id": {
            "type": "Identifier",
            "start": 1436,
            "end": 1439,
            "name": "p18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1442,
            "end": 1474,
            "callee": {
              "type": "MemberExpression",
              "start": 1442,
              "end": 1449,
              "object": {
                "type": "Identifier",
                "start": 1442,
                "end": 1443,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1444,
                "end": 1449,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1450,
                "end": 1473,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 1456,
                  "end": 1473,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1456,
                    "end": 1470,
                    "object": {
                      "type": "Identifier",
                      "start": 1456,
                      "end": 1463,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1470,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1471,
                      "end": 1472,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1476,
      "end": 1522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1482,
          "end": 1521,
          "id": {
            "type": "Identifier",
            "start": 1482,
            "end": 1485,
            "name": "p19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1488,
            "end": 1521,
            "callee": {
              "type": "MemberExpression",
              "start": 1488,
              "end": 1495,
              "object": {
                "type": "Identifier",
                "start": 1488,
                "end": 1489,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1490,
                "end": 1495,
                "name": "catch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1496,
                "end": 1520,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 1502,
                  "end": 1520,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1502,
                    "end": 1517,
                    "object": {
                      "type": "Identifier",
                      "start": 1502,
                      "end": 1509,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1510,
                      "end": 1517,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1518,
                      "end": 1519,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1524,
      "end": 1554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1530,
          "end": 1553,
          "id": {
            "type": "Identifier",
            "start": 1530,
            "end": 1533,
            "name": "p20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1536,
            "end": 1553,
            "callee": {
              "type": "MemberExpression",
              "start": 1536,
              "end": 1542,
              "object": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1538,
                "end": 1542,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1543,
                "end": 1552,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1555,
      "end": 1580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1561,
          "end": 1579,
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1564,
            "name": "p21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1567,
            "end": 1579,
            "callee": {
              "type": "MemberExpression",
              "start": 1567,
              "end": 1573,
              "object": {
                "type": "Identifier",
                "start": 1567,
                "end": 1568,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1569,
                "end": 1573,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1574,
                "end": 1578,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1581,
      "end": 1609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1587,
          "end": 1608,
          "id": {
            "type": "Identifier",
            "start": 1587,
            "end": 1590,
            "name": "p22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1593,
            "end": 1608,
            "callee": {
              "type": "MemberExpression",
              "start": 1593,
              "end": 1599,
              "object": {
                "type": "Identifier",
                "start": 1593,
                "end": 1594,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1595,
                "end": 1599,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1600,
                "end": 1607,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 1606,
                  "end": 1607,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1610,
      "end": 1638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1616,
          "end": 1637,
          "id": {
            "type": "Identifier",
            "start": 1616,
            "end": 1619,
            "name": "p23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1622,
            "end": 1637,
            "callee": {
              "type": "MemberExpression",
              "start": 1622,
              "end": 1628,
              "object": {
                "type": "Identifier",
                "start": 1622,
                "end": 1623,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1624,
                "end": 1628,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1629,
                "end": 1636,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1635,
                  "end": 1636,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1639,
      "end": 1675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1645,
          "end": 1674,
          "id": {
            "type": "Identifier",
            "start": 1645,
            "end": 1648,
            "name": "p24",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1651,
            "end": 1674,
            "callee": {
              "type": "MemberExpression",
              "start": 1651,
              "end": 1657,
              "object": {
                "type": "Identifier",
                "start": 1651,
                "end": 1652,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1653,
                "end": 1657,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1658,
                "end": 1673,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1673,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1676,
      "end": 1707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1682,
          "end": 1706,
          "id": {
            "type": "Identifier",
            "start": 1682,
            "end": 1685,
            "name": "p25",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1688,
            "end": 1706,
            "callee": {
              "type": "MemberExpression",
              "start": 1688,
              "end": 1694,
              "object": {
                "type": "Identifier",
                "start": 1688,
                "end": 1689,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1690,
                "end": 1694,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1695,
                "end": 1705,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 1701,
                  "end": 1705,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1708,
      "end": 1737,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1714,
          "end": 1736,
          "id": {
            "type": "Identifier",
            "start": 1714,
            "end": 1717,
            "name": "p26",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1720,
            "end": 1736,
            "callee": {
              "type": "MemberExpression",
              "start": 1720,
              "end": 1726,
              "object": {
                "type": "Identifier",
                "start": 1720,
                "end": 1721,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1722,
                "end": 1726,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1727,
                "end": 1735,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1733,
                  "end": 1735,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1738,
      "end": 1774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1744,
          "end": 1773,
          "id": {
            "type": "Identifier",
            "start": 1744,
            "end": 1747,
            "name": "p27",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1750,
            "end": 1773,
            "callee": {
              "type": "MemberExpression",
              "start": 1750,
              "end": 1756,
              "object": {
                "type": "Identifier",
                "start": 1750,
                "end": 1751,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1752,
                "end": 1756,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1757,
                "end": 1772,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1763,
                  "end": 1772,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 1764,
                      "end": 1771,
                      "argument": {
                        "type": "Literal",
                        "start": 1770,
                        "end": 1771,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1775,
      "end": 1820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1781,
          "end": 1819,
          "id": {
            "type": "Identifier",
            "start": 1781,
            "end": 1784,
            "name": "p28",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1787,
            "end": 1819,
            "callee": {
              "type": "MemberExpression",
              "start": 1787,
              "end": 1793,
              "object": {
                "type": "Identifier",
                "start": 1787,
                "end": 1788,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1789,
                "end": 1793,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1794,
                "end": 1818,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 1800,
                  "end": 1818,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1800,
                    "end": 1815,
                    "object": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1807,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1808,
                      "end": 1815,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1816,
                      "end": 1817,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1821,
      "end": 1865,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1827,
          "end": 1864,
          "id": {
            "type": "Identifier",
            "start": 1827,
            "end": 1830,
            "name": "p29",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1833,
            "end": 1864,
            "callee": {
              "type": "MemberExpression",
              "start": 1833,
              "end": 1839,
              "object": {
                "type": "Identifier",
                "start": 1833,
                "end": 1834,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1835,
                "end": 1839,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1840,
                "end": 1863,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 1846,
                  "end": 1863,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1846,
                    "end": 1860,
                    "object": {
                      "type": "Identifier",
                      "start": 1846,
                      "end": 1853,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1854,
                      "end": 1860,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1861,
                      "end": 1862,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1867,
      "end": 1908,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1873,
          "end": 1907,
          "id": {
            "type": "Identifier",
            "start": 1873,
            "end": 1876,
            "name": "p30",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1879,
            "end": 1907,
            "callee": {
              "type": "MemberExpression",
              "start": 1879,
              "end": 1885,
              "object": {
                "type": "Identifier",
                "start": 1879,
                "end": 1880,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1881,
                "end": 1885,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1886,
                "end": 1895,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1897,
                "end": 1906,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1909,
      "end": 1945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1915,
          "end": 1944,
          "id": {
            "type": "Identifier",
            "start": 1915,
            "end": 1918,
            "name": "p31",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1921,
            "end": 1944,
            "callee": {
              "type": "MemberExpression",
              "start": 1921,
              "end": 1927,
              "object": {
                "type": "Identifier",
                "start": 1921,
                "end": 1922,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1923,
                "end": 1927,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1928,
                "end": 1937,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1939,
                "end": 1943,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1946,
      "end": 1985,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1952,
          "end": 1984,
          "id": {
            "type": "Identifier",
            "start": 1952,
            "end": 1955,
            "name": "p32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1958,
            "end": 1984,
            "callee": {
              "type": "MemberExpression",
              "start": 1958,
              "end": 1964,
              "object": {
                "type": "Identifier",
                "start": 1958,
                "end": 1959,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1960,
                "end": 1964,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1965,
                "end": 1974,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1976,
                "end": 1983,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 1982,
                  "end": 1983,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1986,
      "end": 2025,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1992,
          "end": 2024,
          "id": {
            "type": "Identifier",
            "start": 1992,
            "end": 1995,
            "name": "p33",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1998,
            "end": 2024,
            "callee": {
              "type": "MemberExpression",
              "start": 1998,
              "end": 2004,
              "object": {
                "type": "Identifier",
                "start": 1998,
                "end": 1999,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2000,
                "end": 2004,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2005,
                "end": 2014,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2016,
                "end": 2023,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 2022,
                  "end": 2023,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2026,
      "end": 2073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2032,
          "end": 2072,
          "id": {
            "type": "Identifier",
            "start": 2032,
            "end": 2035,
            "name": "p34",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2038,
            "end": 2072,
            "callee": {
              "type": "MemberExpression",
              "start": 2038,
              "end": 2044,
              "object": {
                "type": "Identifier",
                "start": 2038,
                "end": 2039,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2040,
                "end": 2044,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2045,
                "end": 2054,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2056,
                "end": 2071,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 2062,
                  "end": 2071,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2074,
      "end": 2116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2080,
          "end": 2115,
          "id": {
            "type": "Identifier",
            "start": 2080,
            "end": 2083,
            "name": "p35",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2086,
            "end": 2115,
            "callee": {
              "type": "MemberExpression",
              "start": 2086,
              "end": 2092,
              "object": {
                "type": "Identifier",
                "start": 2086,
                "end": 2087,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2088,
                "end": 2092,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2093,
                "end": 2102,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2104,
                "end": 2114,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2110,
                  "end": 2114,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2117,
      "end": 2157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2123,
          "end": 2156,
          "id": {
            "type": "Identifier",
            "start": 2123,
            "end": 2126,
            "name": "p36",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2129,
            "end": 2156,
            "callee": {
              "type": "MemberExpression",
              "start": 2129,
              "end": 2135,
              "object": {
                "type": "Identifier",
                "start": 2129,
                "end": 2130,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2131,
                "end": 2135,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2136,
                "end": 2145,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2147,
                "end": 2155,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2153,
                  "end": 2155,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2158,
      "end": 2205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2164,
          "end": 2204,
          "id": {
            "type": "Identifier",
            "start": 2164,
            "end": 2167,
            "name": "p37",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2170,
            "end": 2204,
            "callee": {
              "type": "MemberExpression",
              "start": 2170,
              "end": 2176,
              "object": {
                "type": "Identifier",
                "start": 2170,
                "end": 2171,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2172,
                "end": 2176,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2177,
                "end": 2186,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2188,
                "end": 2203,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2194,
                  "end": 2203,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 2195,
                      "end": 2202,
                      "argument": {
                        "type": "Literal",
                        "start": 2201,
                        "end": 2202,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2206,
      "end": 2262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2212,
          "end": 2261,
          "id": {
            "type": "Identifier",
            "start": 2212,
            "end": 2215,
            "name": "p38",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2218,
            "end": 2261,
            "callee": {
              "type": "MemberExpression",
              "start": 2218,
              "end": 2224,
              "object": {
                "type": "Identifier",
                "start": 2218,
                "end": 2219,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2220,
                "end": 2224,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2225,
                "end": 2234,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2236,
                "end": 2260,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 2242,
                  "end": 2260,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2242,
                    "end": 2257,
                    "object": {
                      "type": "Identifier",
                      "start": 2242,
                      "end": 2249,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2257,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2258,
                      "end": 2259,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2263,
      "end": 2318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2269,
          "end": 2317,
          "id": {
            "type": "Identifier",
            "start": 2269,
            "end": 2272,
            "name": "p39",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2275,
            "end": 2317,
            "callee": {
              "type": "MemberExpression",
              "start": 2275,
              "end": 2281,
              "object": {
                "type": "Identifier",
                "start": 2275,
                "end": 2276,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2277,
                "end": 2281,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2282,
                "end": 2291,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2293,
                "end": 2316,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 2299,
                  "end": 2316,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2299,
                    "end": 2313,
                    "object": {
                      "type": "Identifier",
                      "start": 2299,
                      "end": 2306,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2307,
                      "end": 2313,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2314,
                      "end": 2315,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2320,
      "end": 2356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2326,
          "end": 2355,
          "id": {
            "type": "Identifier",
            "start": 2326,
            "end": 2329,
            "name": "p40",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2332,
            "end": 2355,
            "callee": {
              "type": "MemberExpression",
              "start": 2332,
              "end": 2338,
              "object": {
                "type": "Identifier",
                "start": 2332,
                "end": 2333,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2334,
                "end": 2338,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2339,
                "end": 2343,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 2345,
                "end": 2354,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2357,
      "end": 2388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2363,
          "end": 2387,
          "id": {
            "type": "Identifier",
            "start": 2363,
            "end": 2366,
            "name": "p41",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2369,
            "end": 2387,
            "callee": {
              "type": "MemberExpression",
              "start": 2369,
              "end": 2375,
              "object": {
                "type": "Identifier",
                "start": 2369,
                "end": 2370,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2371,
                "end": 2375,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2376,
                "end": 2380,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Literal",
                "start": 2382,
                "end": 2386,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2389,
      "end": 2423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2395,
          "end": 2422,
          "id": {
            "type": "Identifier",
            "start": 2395,
            "end": 2398,
            "name": "p42",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2401,
            "end": 2422,
            "callee": {
              "type": "MemberExpression",
              "start": 2401,
              "end": 2407,
              "object": {
                "type": "Identifier",
                "start": 2401,
                "end": 2402,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2403,
                "end": 2407,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2408,
                "end": 2412,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2414,
                "end": 2421,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2420,
                  "end": 2421,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2424,
      "end": 2458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2430,
          "end": 2457,
          "id": {
            "type": "Identifier",
            "start": 2430,
            "end": 2433,
            "name": "p43",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2436,
            "end": 2457,
            "callee": {
              "type": "MemberExpression",
              "start": 2436,
              "end": 2442,
              "object": {
                "type": "Identifier",
                "start": 2436,
                "end": 2437,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2438,
                "end": 2442,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2443,
                "end": 2447,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2449,
                "end": 2456,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 2455,
                  "end": 2456,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2459,
      "end": 2501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2465,
          "end": 2500,
          "id": {
            "type": "Identifier",
            "start": 2465,
            "end": 2468,
            "name": "p44",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2471,
            "end": 2500,
            "callee": {
              "type": "MemberExpression",
              "start": 2471,
              "end": 2477,
              "object": {
                "type": "Identifier",
                "start": 2471,
                "end": 2472,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2473,
                "end": 2477,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2478,
                "end": 2482,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2484,
                "end": 2499,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 2490,
                  "end": 2499,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2502,
      "end": 2539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2508,
          "end": 2538,
          "id": {
            "type": "Identifier",
            "start": 2508,
            "end": 2511,
            "name": "p45",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2514,
            "end": 2538,
            "callee": {
              "type": "MemberExpression",
              "start": 2514,
              "end": 2520,
              "object": {
                "type": "Identifier",
                "start": 2514,
                "end": 2515,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2516,
                "end": 2520,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2521,
                "end": 2525,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2527,
                "end": 2537,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2533,
                  "end": 2537,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2540,
      "end": 2575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2546,
          "end": 2574,
          "id": {
            "type": "Identifier",
            "start": 2546,
            "end": 2549,
            "name": "p46",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2552,
            "end": 2574,
            "callee": {
              "type": "MemberExpression",
              "start": 2552,
              "end": 2558,
              "object": {
                "type": "Identifier",
                "start": 2552,
                "end": 2553,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2554,
                "end": 2558,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2559,
                "end": 2563,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2565,
                "end": 2573,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2571,
                  "end": 2573,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2576,
      "end": 2618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2582,
          "end": 2617,
          "id": {
            "type": "Identifier",
            "start": 2582,
            "end": 2585,
            "name": "p47",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2588,
            "end": 2617,
            "callee": {
              "type": "MemberExpression",
              "start": 2588,
              "end": 2594,
              "object": {
                "type": "Identifier",
                "start": 2588,
                "end": 2589,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2590,
                "end": 2594,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2595,
                "end": 2599,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2601,
                "end": 2616,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2607,
                  "end": 2616,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 2608,
                      "end": 2615,
                      "argument": {
                        "type": "Literal",
                        "start": 2614,
                        "end": 2615,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2619,
      "end": 2670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2625,
          "end": 2669,
          "id": {
            "type": "Identifier",
            "start": 2625,
            "end": 2628,
            "name": "p48",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2631,
            "end": 2669,
            "callee": {
              "type": "MemberExpression",
              "start": 2631,
              "end": 2637,
              "object": {
                "type": "Identifier",
                "start": 2631,
                "end": 2632,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2633,
                "end": 2637,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2638,
                "end": 2642,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2644,
                "end": 2668,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 2650,
                  "end": 2668,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2650,
                    "end": 2665,
                    "object": {
                      "type": "Identifier",
                      "start": 2650,
                      "end": 2657,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2658,
                      "end": 2665,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2666,
                      "end": 2667,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2671,
      "end": 2721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2677,
          "end": 2720,
          "id": {
            "type": "Identifier",
            "start": 2677,
            "end": 2680,
            "name": "p49",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2683,
            "end": 2720,
            "callee": {
              "type": "MemberExpression",
              "start": 2683,
              "end": 2689,
              "object": {
                "type": "Identifier",
                "start": 2683,
                "end": 2684,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2685,
                "end": 2689,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2690,
                "end": 2694,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2696,
                "end": 2719,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 2702,
                  "end": 2719,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2702,
                    "end": 2716,
                    "object": {
                      "type": "Identifier",
                      "start": 2702,
                      "end": 2709,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2716,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2717,
                      "end": 2718,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2723,
      "end": 2764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2729,
          "end": 2763,
          "id": {
            "type": "Identifier",
            "start": 2729,
            "end": 2732,
            "name": "p50",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2735,
            "end": 2763,
            "callee": {
              "type": "MemberExpression",
              "start": 2735,
              "end": 2741,
              "object": {
                "type": "Identifier",
                "start": 2735,
                "end": 2736,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2737,
                "end": 2741,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2742,
                "end": 2751,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2748,
                  "end": 2751,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 2753,
                "end": 2762,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2765,
      "end": 2801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2771,
          "end": 2800,
          "id": {
            "type": "Identifier",
            "start": 2771,
            "end": 2774,
            "name": "p51",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2777,
            "end": 2800,
            "callee": {
              "type": "MemberExpression",
              "start": 2777,
              "end": 2783,
              "object": {
                "type": "Identifier",
                "start": 2777,
                "end": 2778,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2779,
                "end": 2783,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2784,
                "end": 2793,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2790,
                  "end": 2793,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 2795,
                "end": 2799,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2802,
      "end": 2841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2808,
          "end": 2840,
          "id": {
            "type": "Identifier",
            "start": 2808,
            "end": 2811,
            "name": "p52",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2814,
            "end": 2840,
            "callee": {
              "type": "MemberExpression",
              "start": 2814,
              "end": 2820,
              "object": {
                "type": "Identifier",
                "start": 2814,
                "end": 2815,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2816,
                "end": 2820,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2821,
                "end": 2830,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2827,
                  "end": 2830,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2832,
                "end": 2839,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2838,
                  "end": 2839,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2842,
      "end": 2881,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2848,
          "end": 2880,
          "id": {
            "type": "Identifier",
            "start": 2848,
            "end": 2851,
            "name": "p53",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2854,
            "end": 2880,
            "callee": {
              "type": "MemberExpression",
              "start": 2854,
              "end": 2860,
              "object": {
                "type": "Identifier",
                "start": 2854,
                "end": 2855,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2856,
                "end": 2860,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2861,
                "end": 2870,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2867,
                  "end": 2870,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2872,
                "end": 2879,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 2878,
                  "end": 2879,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2882,
      "end": 2929,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2888,
          "end": 2928,
          "id": {
            "type": "Identifier",
            "start": 2888,
            "end": 2891,
            "name": "p54",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2894,
            "end": 2928,
            "callee": {
              "type": "MemberExpression",
              "start": 2894,
              "end": 2900,
              "object": {
                "type": "Identifier",
                "start": 2894,
                "end": 2895,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2896,
                "end": 2900,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2901,
                "end": 2910,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2907,
                  "end": 2910,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2912,
                "end": 2927,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 2918,
                  "end": 2927,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2930,
      "end": 2972,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2936,
          "end": 2971,
          "id": {
            "type": "Identifier",
            "start": 2936,
            "end": 2939,
            "name": "p55",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2942,
            "end": 2971,
            "callee": {
              "type": "MemberExpression",
              "start": 2942,
              "end": 2948,
              "object": {
                "type": "Identifier",
                "start": 2942,
                "end": 2943,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2944,
                "end": 2948,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2949,
                "end": 2958,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2955,
                  "end": 2958,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2960,
                "end": 2970,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2966,
                  "end": 2970,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2973,
      "end": 3013,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2979,
          "end": 3012,
          "id": {
            "type": "Identifier",
            "start": 2979,
            "end": 2982,
            "name": "p56",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2985,
            "end": 3012,
            "callee": {
              "type": "MemberExpression",
              "start": 2985,
              "end": 2991,
              "object": {
                "type": "Identifier",
                "start": 2985,
                "end": 2986,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2987,
                "end": 2991,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2992,
                "end": 3001,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 2998,
                  "end": 3001,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3003,
                "end": 3011,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3009,
                  "end": 3011,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3014,
      "end": 3061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3020,
          "end": 3060,
          "id": {
            "type": "Identifier",
            "start": 3020,
            "end": 3023,
            "name": "p57",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3026,
            "end": 3060,
            "callee": {
              "type": "MemberExpression",
              "start": 3026,
              "end": 3032,
              "object": {
                "type": "Identifier",
                "start": 3026,
                "end": 3027,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3028,
                "end": 3032,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3033,
                "end": 3042,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3039,
                  "end": 3042,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3044,
                "end": 3059,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3050,
                  "end": 3059,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 3051,
                      "end": 3058,
                      "argument": {
                        "type": "Literal",
                        "start": 3057,
                        "end": 3058,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3062,
      "end": 3118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3068,
          "end": 3117,
          "id": {
            "type": "Identifier",
            "start": 3068,
            "end": 3071,
            "name": "p58",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3074,
            "end": 3117,
            "callee": {
              "type": "MemberExpression",
              "start": 3074,
              "end": 3080,
              "object": {
                "type": "Identifier",
                "start": 3074,
                "end": 3075,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3076,
                "end": 3080,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3081,
                "end": 3090,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3087,
                  "end": 3090,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3092,
                "end": 3116,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 3098,
                  "end": 3116,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3098,
                    "end": 3113,
                    "object": {
                      "type": "Identifier",
                      "start": 3098,
                      "end": 3105,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3106,
                      "end": 3113,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3114,
                      "end": 3115,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3119,
      "end": 3174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3125,
          "end": 3173,
          "id": {
            "type": "Identifier",
            "start": 3125,
            "end": 3128,
            "name": "p59",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3131,
            "end": 3173,
            "callee": {
              "type": "MemberExpression",
              "start": 3131,
              "end": 3137,
              "object": {
                "type": "Identifier",
                "start": 3131,
                "end": 3132,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3133,
                "end": 3137,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3138,
                "end": 3147,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3144,
                  "end": 3147,
                  "value": "1",
                  "raw": "\"1\""
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3149,
                "end": 3172,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 3155,
                  "end": 3172,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3155,
                    "end": 3169,
                    "object": {
                      "type": "Identifier",
                      "start": 3155,
                      "end": 3162,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3163,
                      "end": 3169,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3170,
                      "end": 3171,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3176,
      "end": 3215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3182,
          "end": 3214,
          "id": {
            "type": "Identifier",
            "start": 3182,
            "end": 3185,
            "name": "p60",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3188,
            "end": 3214,
            "callee": {
              "type": "MemberExpression",
              "start": 3188,
              "end": 3194,
              "object": {
                "type": "Identifier",
                "start": 3188,
                "end": 3189,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3190,
                "end": 3194,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3195,
                "end": 3202,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3201,
                  "end": 3202,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 3204,
                "end": 3213,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3216,
      "end": 3250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3222,
          "end": 3249,
          "id": {
            "type": "Identifier",
            "start": 3222,
            "end": 3225,
            "name": "p61",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3228,
            "end": 3249,
            "callee": {
              "type": "MemberExpression",
              "start": 3228,
              "end": 3234,
              "object": {
                "type": "Identifier",
                "start": 3228,
                "end": 3229,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3230,
                "end": 3234,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3235,
                "end": 3242,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3241,
                  "end": 3242,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 3244,
                "end": 3248,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3251,
      "end": 3288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3257,
          "end": 3287,
          "id": {
            "type": "Identifier",
            "start": 3257,
            "end": 3260,
            "name": "p62",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3263,
            "end": 3287,
            "callee": {
              "type": "MemberExpression",
              "start": 3263,
              "end": 3269,
              "object": {
                "type": "Identifier",
                "start": 3263,
                "end": 3264,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3265,
                "end": 3269,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3270,
                "end": 3277,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3276,
                  "end": 3277,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3279,
                "end": 3286,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3285,
                  "end": 3286,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3289,
      "end": 3326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3295,
          "end": 3325,
          "id": {
            "type": "Identifier",
            "start": 3295,
            "end": 3298,
            "name": "p63",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3301,
            "end": 3325,
            "callee": {
              "type": "MemberExpression",
              "start": 3301,
              "end": 3307,
              "object": {
                "type": "Identifier",
                "start": 3301,
                "end": 3302,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3303,
                "end": 3307,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3308,
                "end": 3315,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3314,
                  "end": 3315,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3317,
                "end": 3324,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3323,
                  "end": 3324,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3327,
      "end": 3372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3333,
          "end": 3371,
          "id": {
            "type": "Identifier",
            "start": 3333,
            "end": 3336,
            "name": "p64",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3339,
            "end": 3371,
            "callee": {
              "type": "MemberExpression",
              "start": 3339,
              "end": 3345,
              "object": {
                "type": "Identifier",
                "start": 3339,
                "end": 3340,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3341,
                "end": 3345,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3346,
                "end": 3353,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3352,
                  "end": 3353,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3355,
                "end": 3370,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3361,
                  "end": 3370,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3373,
      "end": 3413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3379,
          "end": 3412,
          "id": {
            "type": "Identifier",
            "start": 3379,
            "end": 3382,
            "name": "p65",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3385,
            "end": 3412,
            "callee": {
              "type": "MemberExpression",
              "start": 3385,
              "end": 3391,
              "object": {
                "type": "Identifier",
                "start": 3385,
                "end": 3386,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3387,
                "end": 3391,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3392,
                "end": 3399,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3398,
                  "end": 3399,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3401,
                "end": 3411,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3407,
                  "end": 3411,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3414,
      "end": 3452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3420,
          "end": 3451,
          "id": {
            "type": "Identifier",
            "start": 3420,
            "end": 3423,
            "name": "p66",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3426,
            "end": 3451,
            "callee": {
              "type": "MemberExpression",
              "start": 3426,
              "end": 3432,
              "object": {
                "type": "Identifier",
                "start": 3426,
                "end": 3427,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3428,
                "end": 3432,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3433,
                "end": 3440,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3439,
                  "end": 3440,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3442,
                "end": 3450,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3448,
                  "end": 3450,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3453,
      "end": 3498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3459,
          "end": 3497,
          "id": {
            "type": "Identifier",
            "start": 3459,
            "end": 3462,
            "name": "p67",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3465,
            "end": 3497,
            "callee": {
              "type": "MemberExpression",
              "start": 3465,
              "end": 3471,
              "object": {
                "type": "Identifier",
                "start": 3465,
                "end": 3466,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3467,
                "end": 3471,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3472,
                "end": 3479,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3478,
                  "end": 3479,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3481,
                "end": 3496,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3487,
                  "end": 3496,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 3488,
                      "end": 3495,
                      "argument": {
                        "type": "Literal",
                        "start": 3494,
                        "end": 3495,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3499,
      "end": 3553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3505,
          "end": 3552,
          "id": {
            "type": "Identifier",
            "start": 3505,
            "end": 3508,
            "name": "p68",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3511,
            "end": 3552,
            "callee": {
              "type": "MemberExpression",
              "start": 3511,
              "end": 3517,
              "object": {
                "type": "Identifier",
                "start": 3511,
                "end": 3512,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3513,
                "end": 3517,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3518,
                "end": 3525,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3524,
                  "end": 3525,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3527,
                "end": 3551,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 3533,
                  "end": 3551,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3533,
                    "end": 3548,
                    "object": {
                      "type": "Identifier",
                      "start": 3533,
                      "end": 3540,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3541,
                      "end": 3548,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3549,
                      "end": 3550,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3554,
      "end": 3607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3560,
          "end": 3606,
          "id": {
            "type": "Identifier",
            "start": 3560,
            "end": 3563,
            "name": "p69",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3566,
            "end": 3606,
            "callee": {
              "type": "MemberExpression",
              "start": 3566,
              "end": 3572,
              "object": {
                "type": "Identifier",
                "start": 3566,
                "end": 3567,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3568,
                "end": 3572,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3573,
                "end": 3580,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3579,
                  "end": 3580,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3582,
                "end": 3605,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 3588,
                  "end": 3605,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3588,
                    "end": 3602,
                    "object": {
                      "type": "Identifier",
                      "start": 3588,
                      "end": 3595,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3596,
                      "end": 3602,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3603,
                      "end": 3604,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3609,
      "end": 3656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3615,
          "end": 3655,
          "id": {
            "type": "Identifier",
            "start": 3615,
            "end": 3618,
            "name": "p70",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3621,
            "end": 3655,
            "callee": {
              "type": "MemberExpression",
              "start": 3621,
              "end": 3627,
              "object": {
                "type": "Identifier",
                "start": 3621,
                "end": 3622,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3623,
                "end": 3627,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3628,
                "end": 3643,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3634,
                  "end": 3643,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 3645,
                "end": 3654,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3657,
      "end": 3699,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3663,
          "end": 3698,
          "id": {
            "type": "Identifier",
            "start": 3663,
            "end": 3666,
            "name": "p71",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3669,
            "end": 3698,
            "callee": {
              "type": "MemberExpression",
              "start": 3669,
              "end": 3675,
              "object": {
                "type": "Identifier",
                "start": 3669,
                "end": 3670,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3671,
                "end": 3675,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3676,
                "end": 3691,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3682,
                  "end": 3691,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 3693,
                "end": 3697,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3700,
      "end": 3745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3706,
          "end": 3744,
          "id": {
            "type": "Identifier",
            "start": 3706,
            "end": 3709,
            "name": "p72",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3712,
            "end": 3744,
            "callee": {
              "type": "MemberExpression",
              "start": 3712,
              "end": 3718,
              "object": {
                "type": "Identifier",
                "start": 3712,
                "end": 3713,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3714,
                "end": 3718,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3719,
                "end": 3734,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3725,
                  "end": 3734,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3736,
                "end": 3743,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3742,
                  "end": 3743,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3746,
      "end": 3791,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3752,
          "end": 3790,
          "id": {
            "type": "Identifier",
            "start": 3752,
            "end": 3755,
            "name": "p73",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3758,
            "end": 3790,
            "callee": {
              "type": "MemberExpression",
              "start": 3758,
              "end": 3764,
              "object": {
                "type": "Identifier",
                "start": 3758,
                "end": 3759,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3760,
                "end": 3764,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3765,
                "end": 3780,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3771,
                  "end": 3780,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3782,
                "end": 3789,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3788,
                  "end": 3789,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3792,
      "end": 3845,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3798,
          "end": 3844,
          "id": {
            "type": "Identifier",
            "start": 3798,
            "end": 3801,
            "name": "p74",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3804,
            "end": 3844,
            "callee": {
              "type": "MemberExpression",
              "start": 3804,
              "end": 3810,
              "object": {
                "type": "Identifier",
                "start": 3804,
                "end": 3805,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3806,
                "end": 3810,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3811,
                "end": 3826,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3817,
                  "end": 3826,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3828,
                "end": 3843,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3834,
                  "end": 3843,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3846,
      "end": 3894,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3852,
          "end": 3893,
          "id": {
            "type": "Identifier",
            "start": 3852,
            "end": 3855,
            "name": "p75",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3858,
            "end": 3893,
            "callee": {
              "type": "MemberExpression",
              "start": 3858,
              "end": 3864,
              "object": {
                "type": "Identifier",
                "start": 3858,
                "end": 3859,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3860,
                "end": 3864,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3865,
                "end": 3880,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3871,
                  "end": 3880,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3882,
                "end": 3892,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3888,
                  "end": 3892,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3895,
      "end": 3941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3901,
          "end": 3940,
          "id": {
            "type": "Identifier",
            "start": 3901,
            "end": 3904,
            "name": "p76",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3907,
            "end": 3940,
            "callee": {
              "type": "MemberExpression",
              "start": 3907,
              "end": 3913,
              "object": {
                "type": "Identifier",
                "start": 3907,
                "end": 3908,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3909,
                "end": 3913,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3914,
                "end": 3929,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3920,
                  "end": 3929,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3931,
                "end": 3939,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3937,
                  "end": 3939,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3942,
      "end": 3995,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3948,
          "end": 3994,
          "id": {
            "type": "Identifier",
            "start": 3948,
            "end": 3951,
            "name": "p77",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3954,
            "end": 3994,
            "callee": {
              "type": "MemberExpression",
              "start": 3954,
              "end": 3960,
              "object": {
                "type": "Identifier",
                "start": 3954,
                "end": 3955,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3956,
                "end": 3960,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3961,
                "end": 3976,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 3967,
                  "end": 3976,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3978,
                "end": 3993,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3984,
                  "end": 3993,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 3985,
                      "end": 3992,
                      "argument": {
                        "type": "Literal",
                        "start": 3991,
                        "end": 3992,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3996,
      "end": 4058,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4002,
          "end": 4057,
          "id": {
            "type": "Identifier",
            "start": 4002,
            "end": 4005,
            "name": "p78",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4008,
            "end": 4057,
            "callee": {
              "type": "MemberExpression",
              "start": 4008,
              "end": 4014,
              "object": {
                "type": "Identifier",
                "start": 4008,
                "end": 4009,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4010,
                "end": 4014,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4015,
                "end": 4030,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 4021,
                  "end": 4030,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4032,
                "end": 4056,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 4038,
                  "end": 4056,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4038,
                    "end": 4053,
                    "object": {
                      "type": "Identifier",
                      "start": 4038,
                      "end": 4045,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4046,
                      "end": 4053,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4054,
                      "end": 4055,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4059,
      "end": 4120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4065,
          "end": 4119,
          "id": {
            "type": "Identifier",
            "start": 4065,
            "end": 4068,
            "name": "p79",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4071,
            "end": 4119,
            "callee": {
              "type": "MemberExpression",
              "start": 4071,
              "end": 4077,
              "object": {
                "type": "Identifier",
                "start": 4071,
                "end": 4072,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4073,
                "end": 4077,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4078,
                "end": 4093,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 4084,
                  "end": 4093,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4095,
                "end": 4118,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 4101,
                  "end": 4118,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4101,
                    "end": 4115,
                    "object": {
                      "type": "Identifier",
                      "start": 4101,
                      "end": 4108,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4109,
                      "end": 4115,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4116,
                      "end": 4117,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4122,
      "end": 4164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4128,
          "end": 4163,
          "id": {
            "type": "Identifier",
            "start": 4128,
            "end": 4131,
            "name": "p80",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4134,
            "end": 4163,
            "callee": {
              "type": "MemberExpression",
              "start": 4134,
              "end": 4140,
              "object": {
                "type": "Identifier",
                "start": 4134,
                "end": 4135,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4136,
                "end": 4140,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4141,
                "end": 4151,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4147,
                  "end": 4151,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 4153,
                "end": 4162,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4165,
      "end": 4202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4171,
          "end": 4201,
          "id": {
            "type": "Identifier",
            "start": 4171,
            "end": 4174,
            "name": "p81",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4177,
            "end": 4201,
            "callee": {
              "type": "MemberExpression",
              "start": 4177,
              "end": 4183,
              "object": {
                "type": "Identifier",
                "start": 4177,
                "end": 4178,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4179,
                "end": 4183,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4184,
                "end": 4194,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4190,
                  "end": 4194,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 4196,
                "end": 4200,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4203,
      "end": 4243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4209,
          "end": 4242,
          "id": {
            "type": "Identifier",
            "start": 4209,
            "end": 4212,
            "name": "p82",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4215,
            "end": 4242,
            "callee": {
              "type": "MemberExpression",
              "start": 4215,
              "end": 4221,
              "object": {
                "type": "Identifier",
                "start": 4215,
                "end": 4216,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4217,
                "end": 4221,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4222,
                "end": 4232,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4228,
                  "end": 4232,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4234,
                "end": 4241,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4240,
                  "end": 4241,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4244,
      "end": 4284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4250,
          "end": 4283,
          "id": {
            "type": "Identifier",
            "start": 4250,
            "end": 4253,
            "name": "p83",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4256,
            "end": 4283,
            "callee": {
              "type": "MemberExpression",
              "start": 4256,
              "end": 4262,
              "object": {
                "type": "Identifier",
                "start": 4256,
                "end": 4257,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4258,
                "end": 4262,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4263,
                "end": 4273,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4269,
                  "end": 4273,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4275,
                "end": 4282,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 4281,
                  "end": 4282,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4285,
      "end": 4333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4291,
          "end": 4332,
          "id": {
            "type": "Identifier",
            "start": 4291,
            "end": 4294,
            "name": "p84",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4297,
            "end": 4332,
            "callee": {
              "type": "MemberExpression",
              "start": 4297,
              "end": 4303,
              "object": {
                "type": "Identifier",
                "start": 4297,
                "end": 4298,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4299,
                "end": 4303,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4304,
                "end": 4314,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4310,
                  "end": 4314,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4316,
                "end": 4331,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 4322,
                  "end": 4331,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4334,
      "end": 4377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4340,
          "end": 4376,
          "id": {
            "type": "Identifier",
            "start": 4340,
            "end": 4343,
            "name": "p85",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4346,
            "end": 4376,
            "callee": {
              "type": "MemberExpression",
              "start": 4346,
              "end": 4352,
              "object": {
                "type": "Identifier",
                "start": 4346,
                "end": 4347,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4348,
                "end": 4352,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4353,
                "end": 4363,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4359,
                  "end": 4363,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4365,
                "end": 4375,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4371,
                  "end": 4375,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4378,
      "end": 4419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4384,
          "end": 4418,
          "id": {
            "type": "Identifier",
            "start": 4384,
            "end": 4387,
            "name": "p86",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4390,
            "end": 4418,
            "callee": {
              "type": "MemberExpression",
              "start": 4390,
              "end": 4396,
              "object": {
                "type": "Identifier",
                "start": 4390,
                "end": 4391,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4392,
                "end": 4396,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4397,
                "end": 4407,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4403,
                  "end": 4407,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4409,
                "end": 4417,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4415,
                  "end": 4417,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4420,
      "end": 4468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4426,
          "end": 4467,
          "id": {
            "type": "Identifier",
            "start": 4426,
            "end": 4429,
            "name": "p87",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4432,
            "end": 4467,
            "callee": {
              "type": "MemberExpression",
              "start": 4432,
              "end": 4438,
              "object": {
                "type": "Identifier",
                "start": 4432,
                "end": 4433,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4434,
                "end": 4438,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4439,
                "end": 4449,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4445,
                  "end": 4449,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4451,
                "end": 4466,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4457,
                  "end": 4466,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 4458,
                      "end": 4465,
                      "argument": {
                        "type": "Literal",
                        "start": 4464,
                        "end": 4465,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4469,
      "end": 4526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4475,
          "end": 4525,
          "id": {
            "type": "Identifier",
            "start": 4475,
            "end": 4478,
            "name": "p88",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4481,
            "end": 4525,
            "callee": {
              "type": "MemberExpression",
              "start": 4481,
              "end": 4487,
              "object": {
                "type": "Identifier",
                "start": 4481,
                "end": 4482,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4483,
                "end": 4487,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4488,
                "end": 4498,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4494,
                  "end": 4498,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4500,
                "end": 4524,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 4506,
                  "end": 4524,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4506,
                    "end": 4521,
                    "object": {
                      "type": "Identifier",
                      "start": 4506,
                      "end": 4513,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4514,
                      "end": 4521,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4522,
                      "end": 4523,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4527,
      "end": 4583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4533,
          "end": 4582,
          "id": {
            "type": "Identifier",
            "start": 4533,
            "end": 4536,
            "name": "p89",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4539,
            "end": 4582,
            "callee": {
              "type": "MemberExpression",
              "start": 4539,
              "end": 4545,
              "object": {
                "type": "Identifier",
                "start": 4539,
                "end": 4540,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4541,
                "end": 4545,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4546,
                "end": 4556,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4552,
                  "end": 4556,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4558,
                "end": 4581,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 4564,
                  "end": 4581,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4564,
                    "end": 4578,
                    "object": {
                      "type": "Identifier",
                      "start": 4564,
                      "end": 4571,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4572,
                      "end": 4578,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4579,
                      "end": 4580,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4585,
      "end": 4625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4591,
          "end": 4624,
          "id": {
            "type": "Identifier",
            "start": 4591,
            "end": 4594,
            "name": "p90",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4597,
            "end": 4624,
            "callee": {
              "type": "MemberExpression",
              "start": 4597,
              "end": 4603,
              "object": {
                "type": "Identifier",
                "start": 4597,
                "end": 4598,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4599,
                "end": 4603,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4604,
                "end": 4612,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4610,
                  "end": 4612,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 4614,
                "end": 4623,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4626,
      "end": 4661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4632,
          "end": 4660,
          "id": {
            "type": "Identifier",
            "start": 4632,
            "end": 4635,
            "name": "p91",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4638,
            "end": 4660,
            "callee": {
              "type": "MemberExpression",
              "start": 4638,
              "end": 4644,
              "object": {
                "type": "Identifier",
                "start": 4638,
                "end": 4639,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4640,
                "end": 4644,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4645,
                "end": 4653,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4651,
                  "end": 4653,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 4655,
                "end": 4659,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4662,
      "end": 4700,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4668,
          "end": 4699,
          "id": {
            "type": "Identifier",
            "start": 4668,
            "end": 4671,
            "name": "p92",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4674,
            "end": 4699,
            "callee": {
              "type": "MemberExpression",
              "start": 4674,
              "end": 4680,
              "object": {
                "type": "Identifier",
                "start": 4674,
                "end": 4675,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4676,
                "end": 4680,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4681,
                "end": 4689,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4687,
                  "end": 4689,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4691,
                "end": 4698,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4697,
                  "end": 4698,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4701,
      "end": 4739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4707,
          "end": 4738,
          "id": {
            "type": "Identifier",
            "start": 4707,
            "end": 4710,
            "name": "p93",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4713,
            "end": 4738,
            "callee": {
              "type": "MemberExpression",
              "start": 4713,
              "end": 4719,
              "object": {
                "type": "Identifier",
                "start": 4713,
                "end": 4714,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4715,
                "end": 4719,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4720,
                "end": 4728,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4726,
                  "end": 4728,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4730,
                "end": 4737,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 4736,
                  "end": 4737,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4740,
      "end": 4786,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4746,
          "end": 4785,
          "id": {
            "type": "Identifier",
            "start": 4746,
            "end": 4749,
            "name": "p94",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4752,
            "end": 4785,
            "callee": {
              "type": "MemberExpression",
              "start": 4752,
              "end": 4758,
              "object": {
                "type": "Identifier",
                "start": 4752,
                "end": 4753,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4754,
                "end": 4758,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4759,
                "end": 4767,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4765,
                  "end": 4767,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4769,
                "end": 4784,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 4775,
                  "end": 4784,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4787,
      "end": 4828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4793,
          "end": 4827,
          "id": {
            "type": "Identifier",
            "start": 4793,
            "end": 4796,
            "name": "p95",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4799,
            "end": 4827,
            "callee": {
              "type": "MemberExpression",
              "start": 4799,
              "end": 4805,
              "object": {
                "type": "Identifier",
                "start": 4799,
                "end": 4800,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4801,
                "end": 4805,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4806,
                "end": 4814,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4812,
                  "end": 4814,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4816,
                "end": 4826,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 4822,
                  "end": 4826,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4829,
      "end": 4868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4835,
          "end": 4867,
          "id": {
            "type": "Identifier",
            "start": 4835,
            "end": 4838,
            "name": "p96",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4841,
            "end": 4867,
            "callee": {
              "type": "MemberExpression",
              "start": 4841,
              "end": 4847,
              "object": {
                "type": "Identifier",
                "start": 4841,
                "end": 4842,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4843,
                "end": 4847,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4848,
                "end": 4856,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4854,
                  "end": 4856,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4858,
                "end": 4866,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4864,
                  "end": 4866,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4869,
      "end": 4915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4875,
          "end": 4914,
          "id": {
            "type": "Identifier",
            "start": 4875,
            "end": 4878,
            "name": "p97",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4881,
            "end": 4914,
            "callee": {
              "type": "MemberExpression",
              "start": 4881,
              "end": 4887,
              "object": {
                "type": "Identifier",
                "start": 4881,
                "end": 4882,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4883,
                "end": 4887,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4888,
                "end": 4896,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4894,
                  "end": 4896,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4898,
                "end": 4913,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4904,
                  "end": 4913,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 4905,
                      "end": 4912,
                      "argument": {
                        "type": "Literal",
                        "start": 4911,
                        "end": 4912,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4916,
      "end": 4971,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4922,
          "end": 4970,
          "id": {
            "type": "Identifier",
            "start": 4922,
            "end": 4925,
            "name": "p98",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4928,
            "end": 4970,
            "callee": {
              "type": "MemberExpression",
              "start": 4928,
              "end": 4934,
              "object": {
                "type": "Identifier",
                "start": 4928,
                "end": 4929,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4930,
                "end": 4934,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4935,
                "end": 4943,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4941,
                  "end": 4943,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4945,
                "end": 4969,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 4951,
                  "end": 4969,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4951,
                    "end": 4966,
                    "object": {
                      "type": "Identifier",
                      "start": 4951,
                      "end": 4958,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4959,
                      "end": 4966,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4967,
                      "end": 4968,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4972,
      "end": 5026,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4978,
          "end": 5025,
          "id": {
            "type": "Identifier",
            "start": 4978,
            "end": 4981,
            "name": "p99",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4984,
            "end": 5025,
            "callee": {
              "type": "MemberExpression",
              "start": 4984,
              "end": 4990,
              "object": {
                "type": "Identifier",
                "start": 4984,
                "end": 4985,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4986,
                "end": 4990,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4991,
                "end": 4999,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 4997,
                  "end": 4999,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5001,
                "end": 5024,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5007,
                  "end": 5024,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5007,
                    "end": 5021,
                    "object": {
                      "type": "Identifier",
                      "start": 5007,
                      "end": 5014,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5015,
                      "end": 5021,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5022,
                      "end": 5023,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5028,
      "end": 5075,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5034,
          "end": 5074,
          "id": {
            "type": "Identifier",
            "start": 5034,
            "end": 5037,
            "name": "pa0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5040,
            "end": 5074,
            "callee": {
              "type": "MemberExpression",
              "start": 5040,
              "end": 5046,
              "object": {
                "type": "Identifier",
                "start": 5040,
                "end": 5041,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5042,
                "end": 5046,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5047,
                "end": 5062,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5053,
                  "end": 5062,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5054,
                      "end": 5061,
                      "argument": {
                        "type": "Literal",
                        "start": 5060,
                        "end": 5061,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 5064,
                "end": 5073,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5076,
      "end": 5118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5082,
          "end": 5117,
          "id": {
            "type": "Identifier",
            "start": 5082,
            "end": 5085,
            "name": "pa1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5088,
            "end": 5117,
            "callee": {
              "type": "MemberExpression",
              "start": 5088,
              "end": 5094,
              "object": {
                "type": "Identifier",
                "start": 5088,
                "end": 5089,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5090,
                "end": 5094,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5095,
                "end": 5110,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5101,
                  "end": 5110,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5102,
                      "end": 5109,
                      "argument": {
                        "type": "Literal",
                        "start": 5108,
                        "end": 5109,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 5112,
                "end": 5116,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5119,
      "end": 5164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5125,
          "end": 5163,
          "id": {
            "type": "Identifier",
            "start": 5125,
            "end": 5128,
            "name": "pa2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5131,
            "end": 5163,
            "callee": {
              "type": "MemberExpression",
              "start": 5131,
              "end": 5137,
              "object": {
                "type": "Identifier",
                "start": 5131,
                "end": 5132,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5133,
                "end": 5137,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5138,
                "end": 5153,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5144,
                  "end": 5153,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5145,
                      "end": 5152,
                      "argument": {
                        "type": "Literal",
                        "start": 5151,
                        "end": 5152,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5155,
                "end": 5162,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 5161,
                  "end": 5162,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5165,
      "end": 5210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5171,
          "end": 5209,
          "id": {
            "type": "Identifier",
            "start": 5171,
            "end": 5174,
            "name": "pa3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5177,
            "end": 5209,
            "callee": {
              "type": "MemberExpression",
              "start": 5177,
              "end": 5183,
              "object": {
                "type": "Identifier",
                "start": 5177,
                "end": 5178,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5179,
                "end": 5183,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5184,
                "end": 5199,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5190,
                  "end": 5199,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5191,
                      "end": 5198,
                      "argument": {
                        "type": "Literal",
                        "start": 5197,
                        "end": 5198,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5201,
                "end": 5208,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 5207,
                  "end": 5208,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5211,
      "end": 5264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5217,
          "end": 5263,
          "id": {
            "type": "Identifier",
            "start": 5217,
            "end": 5220,
            "name": "pa4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5223,
            "end": 5263,
            "callee": {
              "type": "MemberExpression",
              "start": 5223,
              "end": 5229,
              "object": {
                "type": "Identifier",
                "start": 5223,
                "end": 5224,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5225,
                "end": 5229,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5230,
                "end": 5245,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5236,
                  "end": 5245,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5237,
                      "end": 5244,
                      "argument": {
                        "type": "Literal",
                        "start": 5243,
                        "end": 5244,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5247,
                "end": 5262,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 5253,
                  "end": 5262,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5265,
      "end": 5313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5271,
          "end": 5312,
          "id": {
            "type": "Identifier",
            "start": 5271,
            "end": 5274,
            "name": "pa5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5277,
            "end": 5312,
            "callee": {
              "type": "MemberExpression",
              "start": 5277,
              "end": 5283,
              "object": {
                "type": "Identifier",
                "start": 5277,
                "end": 5278,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5279,
                "end": 5283,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5284,
                "end": 5299,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5290,
                  "end": 5299,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5291,
                      "end": 5298,
                      "argument": {
                        "type": "Literal",
                        "start": 5297,
                        "end": 5298,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5301,
                "end": 5311,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 5307,
                  "end": 5311,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5314,
      "end": 5360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5320,
          "end": 5359,
          "id": {
            "type": "Identifier",
            "start": 5320,
            "end": 5323,
            "name": "pa6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5326,
            "end": 5359,
            "callee": {
              "type": "MemberExpression",
              "start": 5326,
              "end": 5332,
              "object": {
                "type": "Identifier",
                "start": 5326,
                "end": 5327,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5328,
                "end": 5332,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5333,
                "end": 5348,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5339,
                  "end": 5348,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5340,
                      "end": 5347,
                      "argument": {
                        "type": "Literal",
                        "start": 5346,
                        "end": 5347,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5350,
                "end": 5358,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5356,
                  "end": 5358,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5361,
      "end": 5414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5367,
          "end": 5413,
          "id": {
            "type": "Identifier",
            "start": 5367,
            "end": 5370,
            "name": "pa7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5373,
            "end": 5413,
            "callee": {
              "type": "MemberExpression",
              "start": 5373,
              "end": 5379,
              "object": {
                "type": "Identifier",
                "start": 5373,
                "end": 5374,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5375,
                "end": 5379,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5380,
                "end": 5395,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5386,
                  "end": 5395,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5387,
                      "end": 5394,
                      "argument": {
                        "type": "Literal",
                        "start": 5393,
                        "end": 5394,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5397,
                "end": 5412,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5403,
                  "end": 5412,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5404,
                      "end": 5411,
                      "argument": {
                        "type": "Literal",
                        "start": 5410,
                        "end": 5411,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5415,
      "end": 5477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5421,
          "end": 5476,
          "id": {
            "type": "Identifier",
            "start": 5421,
            "end": 5424,
            "name": "pa8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5427,
            "end": 5476,
            "callee": {
              "type": "MemberExpression",
              "start": 5427,
              "end": 5433,
              "object": {
                "type": "Identifier",
                "start": 5427,
                "end": 5428,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5429,
                "end": 5433,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5434,
                "end": 5449,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5440,
                  "end": 5449,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5441,
                      "end": 5448,
                      "argument": {
                        "type": "Literal",
                        "start": 5447,
                        "end": 5448,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5451,
                "end": 5475,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5457,
                  "end": 5475,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5457,
                    "end": 5472,
                    "object": {
                      "type": "Identifier",
                      "start": 5457,
                      "end": 5464,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5465,
                      "end": 5472,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5473,
                      "end": 5474,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5478,
      "end": 5539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5484,
          "end": 5538,
          "id": {
            "type": "Identifier",
            "start": 5484,
            "end": 5487,
            "name": "pa9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5490,
            "end": 5538,
            "callee": {
              "type": "MemberExpression",
              "start": 5490,
              "end": 5496,
              "object": {
                "type": "Identifier",
                "start": 5490,
                "end": 5491,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5492,
                "end": 5496,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5497,
                "end": 5512,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5503,
                  "end": 5512,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 5504,
                      "end": 5511,
                      "argument": {
                        "type": "Literal",
                        "start": 5510,
                        "end": 5511,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5514,
                "end": 5537,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5520,
                  "end": 5537,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5520,
                    "end": 5534,
                    "object": {
                      "type": "Identifier",
                      "start": 5520,
                      "end": 5527,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5528,
                      "end": 5534,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5535,
                      "end": 5536,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5541,
      "end": 5599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5547,
          "end": 5598,
          "id": {
            "type": "Identifier",
            "start": 5547,
            "end": 5550,
            "name": "pb0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5553,
            "end": 5598,
            "callee": {
              "type": "MemberExpression",
              "start": 5553,
              "end": 5559,
              "object": {
                "type": "Identifier",
                "start": 5553,
                "end": 5554,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5555,
                "end": 5559,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5560,
                "end": 5586,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5566,
                  "end": 5586,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5566,
                    "end": 5581,
                    "object": {
                      "type": "Identifier",
                      "start": 5566,
                      "end": 5573,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5574,
                      "end": 5581,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5582,
                      "end": 5585,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 5588,
                "end": 5597,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5600,
      "end": 5653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5606,
          "end": 5652,
          "id": {
            "type": "Identifier",
            "start": 5606,
            "end": 5609,
            "name": "pb1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5612,
            "end": 5652,
            "callee": {
              "type": "MemberExpression",
              "start": 5612,
              "end": 5618,
              "object": {
                "type": "Identifier",
                "start": 5612,
                "end": 5613,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5614,
                "end": 5618,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5619,
                "end": 5645,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5625,
                  "end": 5645,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5625,
                    "end": 5640,
                    "object": {
                      "type": "Identifier",
                      "start": 5625,
                      "end": 5632,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5633,
                      "end": 5640,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5641,
                      "end": 5644,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 5647,
                "end": 5651,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5654,
      "end": 5710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5660,
          "end": 5709,
          "id": {
            "type": "Identifier",
            "start": 5660,
            "end": 5663,
            "name": "pb2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5666,
            "end": 5709,
            "callee": {
              "type": "MemberExpression",
              "start": 5666,
              "end": 5672,
              "object": {
                "type": "Identifier",
                "start": 5666,
                "end": 5667,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5668,
                "end": 5672,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5673,
                "end": 5699,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5679,
                  "end": 5699,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5679,
                    "end": 5694,
                    "object": {
                      "type": "Identifier",
                      "start": 5679,
                      "end": 5686,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5687,
                      "end": 5694,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5695,
                      "end": 5698,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5701,
                "end": 5708,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 5707,
                  "end": 5708,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5711,
      "end": 5767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5717,
          "end": 5766,
          "id": {
            "type": "Identifier",
            "start": 5717,
            "end": 5720,
            "name": "pb3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5723,
            "end": 5766,
            "callee": {
              "type": "MemberExpression",
              "start": 5723,
              "end": 5729,
              "object": {
                "type": "Identifier",
                "start": 5723,
                "end": 5724,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5725,
                "end": 5729,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5730,
                "end": 5756,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5736,
                  "end": 5756,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5736,
                    "end": 5751,
                    "object": {
                      "type": "Identifier",
                      "start": 5736,
                      "end": 5743,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5744,
                      "end": 5751,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5752,
                      "end": 5755,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5758,
                "end": 5765,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 5764,
                  "end": 5765,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5768,
      "end": 5832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5774,
          "end": 5831,
          "id": {
            "type": "Identifier",
            "start": 5774,
            "end": 5777,
            "name": "pb4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5780,
            "end": 5831,
            "callee": {
              "type": "MemberExpression",
              "start": 5780,
              "end": 5786,
              "object": {
                "type": "Identifier",
                "start": 5780,
                "end": 5781,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5782,
                "end": 5786,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5787,
                "end": 5813,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5793,
                  "end": 5813,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5793,
                    "end": 5808,
                    "object": {
                      "type": "Identifier",
                      "start": 5793,
                      "end": 5800,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5801,
                      "end": 5808,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5809,
                      "end": 5812,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5815,
                "end": 5830,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 5821,
                  "end": 5830,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5833,
      "end": 5892,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5839,
          "end": 5891,
          "id": {
            "type": "Identifier",
            "start": 5839,
            "end": 5842,
            "name": "pb5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5845,
            "end": 5891,
            "callee": {
              "type": "MemberExpression",
              "start": 5845,
              "end": 5851,
              "object": {
                "type": "Identifier",
                "start": 5845,
                "end": 5846,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5847,
                "end": 5851,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5852,
                "end": 5878,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5858,
                  "end": 5878,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5858,
                    "end": 5873,
                    "object": {
                      "type": "Identifier",
                      "start": 5858,
                      "end": 5865,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5866,
                      "end": 5873,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5874,
                      "end": 5877,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5880,
                "end": 5890,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 5886,
                  "end": 5890,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5893,
      "end": 5950,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5899,
          "end": 5949,
          "id": {
            "type": "Identifier",
            "start": 5899,
            "end": 5902,
            "name": "pb6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5905,
            "end": 5949,
            "callee": {
              "type": "MemberExpression",
              "start": 5905,
              "end": 5911,
              "object": {
                "type": "Identifier",
                "start": 5905,
                "end": 5906,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5907,
                "end": 5911,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5912,
                "end": 5938,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5918,
                  "end": 5938,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5918,
                    "end": 5933,
                    "object": {
                      "type": "Identifier",
                      "start": 5918,
                      "end": 5925,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5926,
                      "end": 5933,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5934,
                      "end": 5937,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5940,
                "end": 5948,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 5946,
                  "end": 5948,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5951,
      "end": 6015,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5957,
          "end": 6014,
          "id": {
            "type": "Identifier",
            "start": 5957,
            "end": 5960,
            "name": "pb7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5963,
            "end": 6014,
            "callee": {
              "type": "MemberExpression",
              "start": 5963,
              "end": 5969,
              "object": {
                "type": "Identifier",
                "start": 5963,
                "end": 5964,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5965,
                "end": 5969,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5970,
                "end": 5996,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 5976,
                  "end": 5996,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5976,
                    "end": 5991,
                    "object": {
                      "type": "Identifier",
                      "start": 5976,
                      "end": 5983,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5984,
                      "end": 5991,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5992,
                      "end": 5995,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5998,
                "end": 6013,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 6004,
                  "end": 6013,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 6005,
                      "end": 6012,
                      "argument": {
                        "type": "Literal",
                        "start": 6011,
                        "end": 6012,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6016,
      "end": 6089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6022,
          "end": 6088,
          "id": {
            "type": "Identifier",
            "start": 6022,
            "end": 6025,
            "name": "pb8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6028,
            "end": 6088,
            "callee": {
              "type": "MemberExpression",
              "start": 6028,
              "end": 6034,
              "object": {
                "type": "Identifier",
                "start": 6028,
                "end": 6029,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6030,
                "end": 6034,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6035,
                "end": 6061,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6041,
                  "end": 6061,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6041,
                    "end": 6056,
                    "object": {
                      "type": "Identifier",
                      "start": 6041,
                      "end": 6048,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6049,
                      "end": 6056,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6057,
                      "end": 6060,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6063,
                "end": 6087,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6069,
                  "end": 6087,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6069,
                    "end": 6084,
                    "object": {
                      "type": "Identifier",
                      "start": 6069,
                      "end": 6076,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6077,
                      "end": 6084,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6085,
                      "end": 6086,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6090,
      "end": 6162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6096,
          "end": 6161,
          "id": {
            "type": "Identifier",
            "start": 6096,
            "end": 6099,
            "name": "pb9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6102,
            "end": 6161,
            "callee": {
              "type": "MemberExpression",
              "start": 6102,
              "end": 6108,
              "object": {
                "type": "Identifier",
                "start": 6102,
                "end": 6103,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6104,
                "end": 6108,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6109,
                "end": 6135,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6115,
                  "end": 6135,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6115,
                    "end": 6130,
                    "object": {
                      "type": "Identifier",
                      "start": 6115,
                      "end": 6122,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6123,
                      "end": 6130,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6131,
                      "end": 6134,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6137,
                "end": 6160,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6143,
                  "end": 6160,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6143,
                    "end": 6157,
                    "object": {
                      "type": "Identifier",
                      "start": 6143,
                      "end": 6150,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6151,
                      "end": 6157,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6158,
                      "end": 6159,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6164,
      "end": 6221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6170,
          "end": 6220,
          "id": {
            "type": "Identifier",
            "start": 6170,
            "end": 6173,
            "name": "pc0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6176,
            "end": 6220,
            "callee": {
              "type": "MemberExpression",
              "start": 6176,
              "end": 6182,
              "object": {
                "type": "Identifier",
                "start": 6176,
                "end": 6177,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6178,
                "end": 6182,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6183,
                "end": 6208,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6189,
                  "end": 6208,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6189,
                    "end": 6203,
                    "object": {
                      "type": "Identifier",
                      "start": 6189,
                      "end": 6196,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6197,
                      "end": 6203,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6204,
                      "end": 6207,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Identifier",
                "start": 6210,
                "end": 6219,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6222,
      "end": 6274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6228,
          "end": 6273,
          "id": {
            "type": "Identifier",
            "start": 6228,
            "end": 6231,
            "name": "pc1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6234,
            "end": 6273,
            "callee": {
              "type": "MemberExpression",
              "start": 6234,
              "end": 6240,
              "object": {
                "type": "Identifier",
                "start": 6234,
                "end": 6235,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6236,
                "end": 6240,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6241,
                "end": 6266,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6247,
                  "end": 6266,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6247,
                    "end": 6261,
                    "object": {
                      "type": "Identifier",
                      "start": 6247,
                      "end": 6254,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6255,
                      "end": 6261,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6262,
                      "end": 6265,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 6268,
                "end": 6272,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6275,
      "end": 6330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6281,
          "end": 6329,
          "id": {
            "type": "Identifier",
            "start": 6281,
            "end": 6284,
            "name": "pc2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6287,
            "end": 6329,
            "callee": {
              "type": "MemberExpression",
              "start": 6287,
              "end": 6293,
              "object": {
                "type": "Identifier",
                "start": 6287,
                "end": 6288,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6289,
                "end": 6293,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6294,
                "end": 6319,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6300,
                  "end": 6319,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6300,
                    "end": 6314,
                    "object": {
                      "type": "Identifier",
                      "start": 6300,
                      "end": 6307,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6308,
                      "end": 6314,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6315,
                      "end": 6318,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6321,
                "end": 6328,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 6327,
                  "end": 6328,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6331,
      "end": 6386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6337,
          "end": 6385,
          "id": {
            "type": "Identifier",
            "start": 6337,
            "end": 6340,
            "name": "pc3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6343,
            "end": 6385,
            "callee": {
              "type": "MemberExpression",
              "start": 6343,
              "end": 6349,
              "object": {
                "type": "Identifier",
                "start": 6343,
                "end": 6344,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6345,
                "end": 6349,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6350,
                "end": 6375,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6356,
                  "end": 6375,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6356,
                    "end": 6370,
                    "object": {
                      "type": "Identifier",
                      "start": 6356,
                      "end": 6363,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6364,
                      "end": 6370,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6371,
                      "end": 6374,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6377,
                "end": 6384,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 6383,
                  "end": 6384,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6387,
      "end": 6450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6393,
          "end": 6449,
          "id": {
            "type": "Identifier",
            "start": 6393,
            "end": 6396,
            "name": "pc4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6399,
            "end": 6449,
            "callee": {
              "type": "MemberExpression",
              "start": 6399,
              "end": 6405,
              "object": {
                "type": "Identifier",
                "start": 6399,
                "end": 6400,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6401,
                "end": 6405,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6406,
                "end": 6431,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6412,
                  "end": 6431,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6412,
                    "end": 6426,
                    "object": {
                      "type": "Identifier",
                      "start": 6412,
                      "end": 6419,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6420,
                      "end": 6426,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6427,
                      "end": 6430,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6433,
                "end": 6448,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 6439,
                  "end": 6448,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6451,
      "end": 6509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6457,
          "end": 6508,
          "id": {
            "type": "Identifier",
            "start": 6457,
            "end": 6460,
            "name": "pc5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6463,
            "end": 6508,
            "callee": {
              "type": "MemberExpression",
              "start": 6463,
              "end": 6469,
              "object": {
                "type": "Identifier",
                "start": 6463,
                "end": 6464,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6465,
                "end": 6469,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6470,
                "end": 6495,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6476,
                  "end": 6495,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6476,
                    "end": 6490,
                    "object": {
                      "type": "Identifier",
                      "start": 6476,
                      "end": 6483,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6484,
                      "end": 6490,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6491,
                      "end": 6494,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6497,
                "end": 6507,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 6503,
                  "end": 6507,
                  "value": null,
                  "raw": "null"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6510,
      "end": 6566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6516,
          "end": 6565,
          "id": {
            "type": "Identifier",
            "start": 6516,
            "end": 6519,
            "name": "pc6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6522,
            "end": 6565,
            "callee": {
              "type": "MemberExpression",
              "start": 6522,
              "end": 6528,
              "object": {
                "type": "Identifier",
                "start": 6522,
                "end": 6523,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6524,
                "end": 6528,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6529,
                "end": 6554,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6535,
                  "end": 6554,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6535,
                    "end": 6549,
                    "object": {
                      "type": "Identifier",
                      "start": 6535,
                      "end": 6542,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6543,
                      "end": 6549,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6550,
                      "end": 6553,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6556,
                "end": 6564,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 6562,
                  "end": 6564,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6567,
      "end": 6630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6573,
          "end": 6629,
          "id": {
            "type": "Identifier",
            "start": 6573,
            "end": 6576,
            "name": "pc7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6579,
            "end": 6629,
            "callee": {
              "type": "MemberExpression",
              "start": 6579,
              "end": 6585,
              "object": {
                "type": "Identifier",
                "start": 6579,
                "end": 6580,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6581,
                "end": 6585,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6586,
                "end": 6611,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6592,
                  "end": 6611,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6592,
                    "end": 6606,
                    "object": {
                      "type": "Identifier",
                      "start": 6592,
                      "end": 6599,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6600,
                      "end": 6606,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6607,
                      "end": 6610,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6613,
                "end": 6628,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 6619,
                  "end": 6628,
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "start": 6620,
                      "end": 6627,
                      "argument": {
                        "type": "Literal",
                        "start": 6626,
                        "end": 6627,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6631,
      "end": 6703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6637,
          "end": 6702,
          "id": {
            "type": "Identifier",
            "start": 6637,
            "end": 6640,
            "name": "pc8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6643,
            "end": 6702,
            "callee": {
              "type": "MemberExpression",
              "start": 6643,
              "end": 6649,
              "object": {
                "type": "Identifier",
                "start": 6643,
                "end": 6644,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6645,
                "end": 6649,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6650,
                "end": 6675,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6656,
                  "end": 6675,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6656,
                    "end": 6670,
                    "object": {
                      "type": "Identifier",
                      "start": 6656,
                      "end": 6663,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6664,
                      "end": 6670,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6671,
                      "end": 6674,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6677,
                "end": 6701,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6683,
                  "end": 6701,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6683,
                    "end": 6698,
                    "object": {
                      "type": "Identifier",
                      "start": 6683,
                      "end": 6690,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6691,
                      "end": 6698,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6699,
                      "end": 6700,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6704,
      "end": 6775,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6710,
          "end": 6774,
          "id": {
            "type": "Identifier",
            "start": 6710,
            "end": 6713,
            "name": "pc9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6716,
            "end": 6774,
            "callee": {
              "type": "MemberExpression",
              "start": 6716,
              "end": 6722,
              "object": {
                "type": "Identifier",
                "start": 6716,
                "end": 6717,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6718,
                "end": 6722,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6723,
                "end": 6748,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6729,
                  "end": 6748,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6729,
                    "end": 6743,
                    "object": {
                      "type": "Identifier",
                      "start": 6729,
                      "end": 6736,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6737,
                      "end": 6743,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6744,
                      "end": 6747,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6750,
                "end": 6773,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 6756,
                  "end": 6773,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6756,
                    "end": 6770,
                    "object": {
                      "type": "Identifier",
                      "start": 6756,
                      "end": 6763,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6764,
                      "end": 6770,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6771,
                      "end": 6772,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
