__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 7101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 31,
            "decorators": [],
            "name": "p",
            "optional": false,
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 51,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 97,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 85,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 89,
                  "end": 96,
                  "argument": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 140,
            "end": 158,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 157,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 150,
                  "end": 157,
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 192,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 221,
                      "end": 232,
                      "id": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 225,
                        "end": 232,
                        "argument": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 352,
                      "end": 363,
                      "id": {
                        "type": "Identifier",
                        "start": 352,
                        "end": 353,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 356,
                        "end": 363,
                        "argument": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 363,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 414,
      "end": 542,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 430,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 459,
                      "end": 470,
                      "id": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 460,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 463,
                        "end": 470,
                        "argument": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 544,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 560,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 589,
                      "end": 600,
                      "id": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 593,
                        "end": 600,
                        "argument": {
                          "type": "Identifier",
                          "start": 599,
                          "end": 600,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 671,
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 672,
                          "end": 679,
                          "callee": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 677,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 691,
      "end": 812,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 707,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 736,
                      "end": 747,
                      "id": {
                        "type": "Identifier",
                        "start": 736,
                        "end": 737,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 740,
                        "end": 747,
                        "argument": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 747,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 814,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 829,
        "end": 830,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 859,
                      "end": 870,
                      "id": {
                        "type": "Identifier",
                        "start": 859,
                        "end": 860,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 863,
                        "end": 870,
                        "argument": {
                          "type": "Identifier",
                          "start": 869,
                          "end": 870,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 944,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 960,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 989,
                      "end": 1000,
                      "id": {
                        "type": "Identifier",
                        "start": 989,
                        "end": 990,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 993,
                        "end": 1000,
                        "argument": {
                          "type": "Identifier",
                          "start": 999,
                          "end": 1000,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1065,
                          "end": 1071,
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 1072,
                          "end": 1079,
                          "callee": {
                            "type": "Identifier",
                            "start": 1072,
                            "end": 1077,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1125,
      "end": 1147,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1131,
          "end": 1146,
          "id": {
            "type": "Identifier",
            "start": 1131,
            "end": 1134,
            "decorators": [],
            "name": "p00",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1139,
                "end": 1144,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1148,
      "end": 1169,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1154,
          "end": 1168,
          "id": {
            "type": "Identifier",
            "start": 1154,
            "end": 1157,
            "decorators": [],
            "name": "p01",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1162,
                "end": 1166,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1171,
      "end": 1202,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1177,
          "end": 1201,
          "id": {
            "type": "Identifier",
            "start": 1177,
            "end": 1180,
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1185,
                "end": 1190,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1191,
                "end": 1200,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1203,
      "end": 1229,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1228,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1212,
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1217,
                "end": 1222,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1223,
                "end": 1227,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1230,
      "end": 1259,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1236,
          "end": 1258,
          "id": {
            "type": "Identifier",
            "start": 1236,
            "end": 1239,
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1244,
                "end": 1249,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1250,
                "end": 1257,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1256,
                  "end": 1257,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1260,
      "end": 1289,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1266,
          "end": 1288,
          "id": {
            "type": "Identifier",
            "start": 1266,
            "end": 1269,
            "decorators": [],
            "name": "p13",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1274,
                "end": 1279,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1280,
                "end": 1287,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1287,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1290,
      "end": 1327,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1296,
          "end": 1326,
          "id": {
            "type": "Identifier",
            "start": 1296,
            "end": 1299,
            "decorators": [],
            "name": "p14",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1304,
                "end": 1309,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1310,
                "end": 1325,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1325,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1328,
      "end": 1360,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1334,
          "end": 1359,
          "id": {
            "type": "Identifier",
            "start": 1334,
            "end": 1337,
            "decorators": [],
            "name": "p15",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1342,
                "end": 1347,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1348,
                "end": 1358,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1354,
                  "end": 1358,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1361,
      "end": 1391,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1367,
          "end": 1390,
          "id": {
            "type": "Identifier",
            "start": 1367,
            "end": 1370,
            "decorators": [],
            "name": "p16",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1375,
                "end": 1380,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1381,
                "end": 1389,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1387,
                  "end": 1389,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1392,
      "end": 1429,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1398,
          "end": 1428,
          "id": {
            "type": "Identifier",
            "start": 1398,
            "end": 1401,
            "decorators": [],
            "name": "p17",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1406,
                "end": 1411,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1412,
                "end": 1427,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1430,
      "end": 1475,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1436,
          "end": 1474,
          "id": {
            "type": "Identifier",
            "start": 1436,
            "end": 1439,
            "decorators": [],
            "name": "p18",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1444,
                "end": 1449,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1450,
                "end": 1473,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1470,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1471,
                      "end": 1472,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1476,
      "end": 1522,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1482,
          "end": 1521,
          "id": {
            "type": "Identifier",
            "start": 1482,
            "end": 1485,
            "decorators": [],
            "name": "p19",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1490,
                "end": 1495,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1496,
                "end": 1520,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1510,
                      "end": 1517,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1518,
                      "end": 1519,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1524,
      "end": 1554,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1530,
          "end": 1553,
          "id": {
            "type": "Identifier",
            "start": 1530,
            "end": 1533,
            "decorators": [],
            "name": "p20",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1538,
                "end": 1542,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1543,
                "end": 1552,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1555,
      "end": 1580,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1561,
          "end": 1579,
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1564,
            "decorators": [],
            "name": "p21",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1569,
                "end": 1573,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1574,
                "end": 1578,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1581,
      "end": 1609,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1587,
          "end": 1608,
          "id": {
            "type": "Identifier",
            "start": 1587,
            "end": 1590,
            "decorators": [],
            "name": "p22",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1595,
                "end": 1599,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1600,
                "end": 1607,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1606,
                  "end": 1607,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1610,
      "end": 1638,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1616,
          "end": 1637,
          "id": {
            "type": "Identifier",
            "start": 1616,
            "end": 1619,
            "decorators": [],
            "name": "p23",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1624,
                "end": 1628,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1629,
                "end": 1636,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 1635,
                  "end": 1636,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1639,
      "end": 1675,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1645,
          "end": 1674,
          "id": {
            "type": "Identifier",
            "start": 1645,
            "end": 1648,
            "decorators": [],
            "name": "p24",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1653,
                "end": 1657,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1658,
                "end": 1673,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1673,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1676,
      "end": 1707,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1682,
          "end": 1706,
          "id": {
            "type": "Identifier",
            "start": 1682,
            "end": 1685,
            "decorators": [],
            "name": "p25",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1690,
                "end": 1694,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1695,
                "end": 1705,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1701,
                  "end": 1705,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1708,
      "end": 1737,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1714,
          "end": 1736,
          "id": {
            "type": "Identifier",
            "start": 1714,
            "end": 1717,
            "decorators": [],
            "name": "p26",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1722,
                "end": 1726,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1727,
                "end": 1735,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1733,
                  "end": 1735,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1738,
      "end": 1774,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1744,
          "end": 1773,
          "id": {
            "type": "Identifier",
            "start": 1744,
            "end": 1747,
            "decorators": [],
            "name": "p27",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1752,
                "end": 1756,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1757,
                "end": 1772,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1775,
      "end": 1820,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1781,
          "end": 1819,
          "id": {
            "type": "Identifier",
            "start": 1781,
            "end": 1784,
            "decorators": [],
            "name": "p28",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1789,
                "end": 1793,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1794,
                "end": 1818,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1808,
                      "end": 1815,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1816,
                      "end": 1817,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1821,
      "end": 1865,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1827,
          "end": 1864,
          "id": {
            "type": "Identifier",
            "start": 1827,
            "end": 1830,
            "decorators": [],
            "name": "p29",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1835,
                "end": 1839,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1840,
                "end": 1863,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1854,
                      "end": 1860,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1861,
                      "end": 1862,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1867,
      "end": 1908,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1873,
          "end": 1907,
          "id": {
            "type": "Identifier",
            "start": 1873,
            "end": 1876,
            "decorators": [],
            "name": "p30",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1881,
                "end": 1885,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1886,
                "end": 1895,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1897,
                "end": 1906,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1909,
      "end": 1945,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1915,
          "end": 1944,
          "id": {
            "type": "Identifier",
            "start": 1915,
            "end": 1918,
            "decorators": [],
            "name": "p31",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1923,
                "end": 1927,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1928,
                "end": 1937,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1939,
                "end": 1943,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1946,
      "end": 1985,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1952,
          "end": 1984,
          "id": {
            "type": "Identifier",
            "start": 1952,
            "end": 1955,
            "decorators": [],
            "name": "p32",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1960,
                "end": 1964,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1965,
                "end": 1974,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1976,
                "end": 1983,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1982,
                  "end": 1983,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1986,
      "end": 2025,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1992,
          "end": 2024,
          "id": {
            "type": "Identifier",
            "start": 1992,
            "end": 1995,
            "decorators": [],
            "name": "p33",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2000,
                "end": 2004,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2005,
                "end": 2014,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2016,
                "end": 2023,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 2022,
                  "end": 2023,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2026,
      "end": 2073,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2032,
          "end": 2072,
          "id": {
            "type": "Identifier",
            "start": 2032,
            "end": 2035,
            "decorators": [],
            "name": "p34",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2040,
                "end": 2044,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2045,
                "end": 2054,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2056,
                "end": 2071,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 2062,
                  "end": 2071,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2074,
      "end": 2116,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2080,
          "end": 2115,
          "id": {
            "type": "Identifier",
            "start": 2080,
            "end": 2083,
            "decorators": [],
            "name": "p35",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2088,
                "end": 2092,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2093,
                "end": 2102,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2104,
                "end": 2114,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2110,
                  "end": 2114,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2117,
      "end": 2157,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2123,
          "end": 2156,
          "id": {
            "type": "Identifier",
            "start": 2123,
            "end": 2126,
            "decorators": [],
            "name": "p36",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2131,
                "end": 2135,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2136,
                "end": 2145,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2147,
                "end": 2155,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2153,
                  "end": 2155,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2158,
      "end": 2205,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2164,
          "end": 2204,
          "id": {
            "type": "Identifier",
            "start": 2164,
            "end": 2167,
            "decorators": [],
            "name": "p37",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2172,
                "end": 2176,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2177,
                "end": 2186,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2188,
                "end": 2203,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2206,
      "end": 2262,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2212,
          "end": 2261,
          "id": {
            "type": "Identifier",
            "start": 2212,
            "end": 2215,
            "decorators": [],
            "name": "p38",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2220,
                "end": 2224,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2225,
                "end": 2234,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2236,
                "end": 2260,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2257,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2258,
                      "end": 2259,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2263,
      "end": 2318,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2269,
          "end": 2317,
          "id": {
            "type": "Identifier",
            "start": 2269,
            "end": 2272,
            "decorators": [],
            "name": "p39",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2277,
                "end": 2281,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2282,
                "end": 2291,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2293,
                "end": 2316,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2307,
                      "end": 2313,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2314,
                      "end": 2315,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2320,
      "end": 2356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2326,
          "end": 2355,
          "id": {
            "type": "Identifier",
            "start": 2326,
            "end": 2329,
            "decorators": [],
            "name": "p40",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2334,
                "end": 2338,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2357,
      "end": 2388,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2363,
          "end": 2387,
          "id": {
            "type": "Identifier",
            "start": 2363,
            "end": 2366,
            "decorators": [],
            "name": "p41",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2371,
                "end": 2375,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2389,
      "end": 2423,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2395,
          "end": 2422,
          "id": {
            "type": "Identifier",
            "start": 2395,
            "end": 2398,
            "decorators": [],
            "name": "p42",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2403,
                "end": 2407,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2420,
                  "end": 2421,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2424,
      "end": 2458,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2430,
          "end": 2457,
          "id": {
            "type": "Identifier",
            "start": 2430,
            "end": 2433,
            "decorators": [],
            "name": "p43",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2438,
                "end": 2442,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 2455,
                  "end": 2456,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2459,
      "end": 2501,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2465,
          "end": 2500,
          "id": {
            "type": "Identifier",
            "start": 2465,
            "end": 2468,
            "decorators": [],
            "name": "p44",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2473,
                "end": 2477,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 2490,
                  "end": 2499,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2502,
      "end": 2539,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2508,
          "end": 2538,
          "id": {
            "type": "Identifier",
            "start": 2508,
            "end": 2511,
            "decorators": [],
            "name": "p45",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2516,
                "end": 2520,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2533,
                  "end": 2537,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2540,
      "end": 2575,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2546,
          "end": 2574,
          "id": {
            "type": "Identifier",
            "start": 2546,
            "end": 2549,
            "decorators": [],
            "name": "p46",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2554,
                "end": 2558,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2571,
                  "end": 2573,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2576,
      "end": 2618,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2582,
          "end": 2617,
          "id": {
            "type": "Identifier",
            "start": 2582,
            "end": 2585,
            "decorators": [],
            "name": "p47",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2590,
                "end": 2594,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2619,
      "end": 2670,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2625,
          "end": 2669,
          "id": {
            "type": "Identifier",
            "start": 2625,
            "end": 2628,
            "decorators": [],
            "name": "p48",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2633,
                "end": 2637,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2658,
                      "end": 2665,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2666,
                      "end": 2667,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2671,
      "end": 2721,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2677,
          "end": 2720,
          "id": {
            "type": "Identifier",
            "start": 2677,
            "end": 2680,
            "decorators": [],
            "name": "p49",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2685,
                "end": 2689,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2716,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2717,
                      "end": 2718,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2723,
      "end": 2764,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2729,
          "end": 2763,
          "id": {
            "type": "Identifier",
            "start": 2729,
            "end": 2732,
            "decorators": [],
            "name": "p50",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2737,
                "end": 2741,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2742,
                "end": 2751,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2748,
                  "end": 2751,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 2753,
                "end": 2762,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2765,
      "end": 2801,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2771,
          "end": 2800,
          "id": {
            "type": "Identifier",
            "start": 2771,
            "end": 2774,
            "decorators": [],
            "name": "p51",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2779,
                "end": 2783,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2784,
                "end": 2793,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2790,
                  "end": 2793,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 2795,
                "end": 2799,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2802,
      "end": 2841,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2808,
          "end": 2840,
          "id": {
            "type": "Identifier",
            "start": 2808,
            "end": 2811,
            "decorators": [],
            "name": "p52",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2816,
                "end": 2820,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2821,
                "end": 2830,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2827,
                  "end": 2830,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2832,
                "end": 2839,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2838,
                  "end": 2839,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2842,
      "end": 2881,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2848,
          "end": 2880,
          "id": {
            "type": "Identifier",
            "start": 2848,
            "end": 2851,
            "decorators": [],
            "name": "p53",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2856,
                "end": 2860,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2861,
                "end": 2870,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2867,
                  "end": 2870,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2872,
                "end": 2879,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 2878,
                  "end": 2879,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2882,
      "end": 2929,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2888,
          "end": 2928,
          "id": {
            "type": "Identifier",
            "start": 2888,
            "end": 2891,
            "decorators": [],
            "name": "p54",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2896,
                "end": 2900,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2901,
                "end": 2910,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2907,
                  "end": 2910,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2912,
                "end": 2927,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 2918,
                  "end": 2927,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2930,
      "end": 2972,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2936,
          "end": 2971,
          "id": {
            "type": "Identifier",
            "start": 2936,
            "end": 2939,
            "decorators": [],
            "name": "p55",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2944,
                "end": 2948,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2949,
                "end": 2958,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2955,
                  "end": 2958,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2960,
                "end": 2970,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2966,
                  "end": 2970,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2973,
      "end": 3013,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2979,
          "end": 3012,
          "id": {
            "type": "Identifier",
            "start": 2979,
            "end": 2982,
            "decorators": [],
            "name": "p56",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2987,
                "end": 2991,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2992,
                "end": 3001,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 2998,
                  "end": 3001,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3003,
                "end": 3011,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3009,
                  "end": 3011,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3014,
      "end": 3061,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3020,
          "end": 3060,
          "id": {
            "type": "Identifier",
            "start": 3020,
            "end": 3023,
            "decorators": [],
            "name": "p57",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3028,
                "end": 3032,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3033,
                "end": 3042,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3039,
                  "end": 3042,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3044,
                "end": 3059,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3062,
      "end": 3118,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3068,
          "end": 3117,
          "id": {
            "type": "Identifier",
            "start": 3068,
            "end": 3071,
            "decorators": [],
            "name": "p58",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3076,
                "end": 3080,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3081,
                "end": 3090,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3087,
                  "end": 3090,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3092,
                "end": 3116,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3106,
                      "end": 3113,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3114,
                      "end": 3115,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3119,
      "end": 3174,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3125,
          "end": 3173,
          "id": {
            "type": "Identifier",
            "start": 3125,
            "end": 3128,
            "decorators": [],
            "name": "p59",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3133,
                "end": 3137,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3138,
                "end": 3147,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3144,
                  "end": 3147,
                  "value": "1",
                  "raw": "\"1\""
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3149,
                "end": 3172,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3163,
                      "end": 3169,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3170,
                      "end": 3171,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3176,
      "end": 3215,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3182,
          "end": 3214,
          "id": {
            "type": "Identifier",
            "start": 3182,
            "end": 3185,
            "decorators": [],
            "name": "p60",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3190,
                "end": 3194,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3195,
                "end": 3202,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3201,
                  "end": 3202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 3204,
                "end": 3213,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3216,
      "end": 3250,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3222,
          "end": 3249,
          "id": {
            "type": "Identifier",
            "start": 3222,
            "end": 3225,
            "decorators": [],
            "name": "p61",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3230,
                "end": 3234,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3235,
                "end": 3242,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3241,
                  "end": 3242,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 3244,
                "end": 3248,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3251,
      "end": 3288,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3257,
          "end": 3287,
          "id": {
            "type": "Identifier",
            "start": 3257,
            "end": 3260,
            "decorators": [],
            "name": "p62",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3265,
                "end": 3269,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3270,
                "end": 3277,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3276,
                  "end": 3277,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3279,
                "end": 3286,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3285,
                  "end": 3286,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3289,
      "end": 3326,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3295,
          "end": 3325,
          "id": {
            "type": "Identifier",
            "start": 3295,
            "end": 3298,
            "decorators": [],
            "name": "p63",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3303,
                "end": 3307,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3308,
                "end": 3315,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3314,
                  "end": 3315,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3317,
                "end": 3324,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3323,
                  "end": 3324,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3327,
      "end": 3372,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3333,
          "end": 3371,
          "id": {
            "type": "Identifier",
            "start": 3333,
            "end": 3336,
            "decorators": [],
            "name": "p64",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3341,
                "end": 3345,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3346,
                "end": 3353,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3352,
                  "end": 3353,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3355,
                "end": 3370,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3361,
                  "end": 3370,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3373,
      "end": 3413,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3379,
          "end": 3412,
          "id": {
            "type": "Identifier",
            "start": 3379,
            "end": 3382,
            "decorators": [],
            "name": "p65",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3387,
                "end": 3391,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3392,
                "end": 3399,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3398,
                  "end": 3399,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3401,
                "end": 3411,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3407,
                  "end": 3411,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3414,
      "end": 3452,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3420,
          "end": 3451,
          "id": {
            "type": "Identifier",
            "start": 3420,
            "end": 3423,
            "decorators": [],
            "name": "p66",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3428,
                "end": 3432,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3433,
                "end": 3440,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3439,
                  "end": 3440,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3442,
                "end": 3450,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3448,
                  "end": 3450,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3453,
      "end": 3498,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3459,
          "end": 3497,
          "id": {
            "type": "Identifier",
            "start": 3459,
            "end": 3462,
            "decorators": [],
            "name": "p67",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3467,
                "end": 3471,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3472,
                "end": 3479,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3478,
                  "end": 3479,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3481,
                "end": 3496,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3499,
      "end": 3553,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3505,
          "end": 3552,
          "id": {
            "type": "Identifier",
            "start": 3505,
            "end": 3508,
            "decorators": [],
            "name": "p68",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3513,
                "end": 3517,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3518,
                "end": 3525,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3524,
                  "end": 3525,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3527,
                "end": 3551,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3541,
                      "end": 3548,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3549,
                      "end": 3550,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3554,
      "end": 3607,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3560,
          "end": 3606,
          "id": {
            "type": "Identifier",
            "start": 3560,
            "end": 3563,
            "decorators": [],
            "name": "p69",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3568,
                "end": 3572,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3573,
                "end": 3580,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3579,
                  "end": 3580,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3582,
                "end": 3605,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3596,
                      "end": 3602,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3603,
                      "end": 3604,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3609,
      "end": 3656,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3615,
          "end": 3655,
          "id": {
            "type": "Identifier",
            "start": 3615,
            "end": 3618,
            "decorators": [],
            "name": "p70",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3623,
                "end": 3627,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3628,
                "end": 3643,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3634,
                  "end": 3643,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 3645,
                "end": 3654,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3657,
      "end": 3699,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3663,
          "end": 3698,
          "id": {
            "type": "Identifier",
            "start": 3663,
            "end": 3666,
            "decorators": [],
            "name": "p71",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3671,
                "end": 3675,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3676,
                "end": 3691,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3682,
                  "end": 3691,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 3693,
                "end": 3697,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3700,
      "end": 3745,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3706,
          "end": 3744,
          "id": {
            "type": "Identifier",
            "start": 3706,
            "end": 3709,
            "decorators": [],
            "name": "p72",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3714,
                "end": 3718,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3719,
                "end": 3734,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3725,
                  "end": 3734,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3736,
                "end": 3743,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3742,
                  "end": 3743,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3746,
      "end": 3791,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3752,
          "end": 3790,
          "id": {
            "type": "Identifier",
            "start": 3752,
            "end": 3755,
            "decorators": [],
            "name": "p73",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3760,
                "end": 3764,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3765,
                "end": 3780,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3771,
                  "end": 3780,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3782,
                "end": 3789,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3788,
                  "end": 3789,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3792,
      "end": 3845,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3798,
          "end": 3844,
          "id": {
            "type": "Identifier",
            "start": 3798,
            "end": 3801,
            "decorators": [],
            "name": "p74",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3806,
                "end": 3810,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3811,
                "end": 3826,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3817,
                  "end": 3826,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3828,
                "end": 3843,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3834,
                  "end": 3843,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3846,
      "end": 3894,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3852,
          "end": 3893,
          "id": {
            "type": "Identifier",
            "start": 3852,
            "end": 3855,
            "decorators": [],
            "name": "p75",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3860,
                "end": 3864,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3865,
                "end": 3880,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3871,
                  "end": 3880,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3882,
                "end": 3892,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 3888,
                  "end": 3892,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3895,
      "end": 3941,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3901,
          "end": 3940,
          "id": {
            "type": "Identifier",
            "start": 3901,
            "end": 3904,
            "decorators": [],
            "name": "p76",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3909,
                "end": 3913,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3914,
                "end": 3929,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3920,
                  "end": 3929,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3931,
                "end": 3939,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3937,
                  "end": 3939,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3942,
      "end": 3995,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3948,
          "end": 3994,
          "id": {
            "type": "Identifier",
            "start": 3948,
            "end": 3951,
            "decorators": [],
            "name": "p77",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3956,
                "end": 3960,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3961,
                "end": 3976,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 3967,
                  "end": 3976,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3978,
                "end": 3993,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3996,
      "end": 4058,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4002,
          "end": 4057,
          "id": {
            "type": "Identifier",
            "start": 4002,
            "end": 4005,
            "decorators": [],
            "name": "p78",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4010,
                "end": 4014,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4015,
                "end": 4030,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 4021,
                  "end": 4030,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4032,
                "end": 4056,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4046,
                      "end": 4053,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4054,
                      "end": 4055,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4059,
      "end": 4120,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4065,
          "end": 4119,
          "id": {
            "type": "Identifier",
            "start": 4065,
            "end": 4068,
            "decorators": [],
            "name": "p79",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4073,
                "end": 4077,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4078,
                "end": 4093,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 4084,
                  "end": 4093,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4095,
                "end": 4118,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4109,
                      "end": 4115,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4116,
                      "end": 4117,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4122,
      "end": 4164,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4128,
          "end": 4163,
          "id": {
            "type": "Identifier",
            "start": 4128,
            "end": 4131,
            "decorators": [],
            "name": "p80",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4136,
                "end": 4140,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4141,
                "end": 4151,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4147,
                  "end": 4151,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 4153,
                "end": 4162,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4165,
      "end": 4202,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4171,
          "end": 4201,
          "id": {
            "type": "Identifier",
            "start": 4171,
            "end": 4174,
            "decorators": [],
            "name": "p81",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4179,
                "end": 4183,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4184,
                "end": 4194,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4190,
                  "end": 4194,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 4196,
                "end": 4200,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4203,
      "end": 4243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4209,
          "end": 4242,
          "id": {
            "type": "Identifier",
            "start": 4209,
            "end": 4212,
            "decorators": [],
            "name": "p82",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4217,
                "end": 4221,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4222,
                "end": 4232,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4228,
                  "end": 4232,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4234,
                "end": 4241,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4240,
                  "end": 4241,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4244,
      "end": 4284,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4250,
          "end": 4283,
          "id": {
            "type": "Identifier",
            "start": 4250,
            "end": 4253,
            "decorators": [],
            "name": "p83",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4258,
                "end": 4262,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4263,
                "end": 4273,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4269,
                  "end": 4273,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4275,
                "end": 4282,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 4281,
                  "end": 4282,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4285,
      "end": 4333,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4291,
          "end": 4332,
          "id": {
            "type": "Identifier",
            "start": 4291,
            "end": 4294,
            "decorators": [],
            "name": "p84",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4299,
                "end": 4303,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4304,
                "end": 4314,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4310,
                  "end": 4314,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4316,
                "end": 4331,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 4322,
                  "end": 4331,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4334,
      "end": 4377,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4340,
          "end": 4376,
          "id": {
            "type": "Identifier",
            "start": 4340,
            "end": 4343,
            "decorators": [],
            "name": "p85",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4348,
                "end": 4352,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4353,
                "end": 4363,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4359,
                  "end": 4363,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4365,
                "end": 4375,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4371,
                  "end": 4375,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4378,
      "end": 4419,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4384,
          "end": 4418,
          "id": {
            "type": "Identifier",
            "start": 4384,
            "end": 4387,
            "decorators": [],
            "name": "p86",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4392,
                "end": 4396,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4397,
                "end": 4407,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4403,
                  "end": 4407,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4409,
                "end": 4417,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4415,
                  "end": 4417,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4420,
      "end": 4468,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4426,
          "end": 4467,
          "id": {
            "type": "Identifier",
            "start": 4426,
            "end": 4429,
            "decorators": [],
            "name": "p87",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4434,
                "end": 4438,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4439,
                "end": 4449,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4445,
                  "end": 4449,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4451,
                "end": 4466,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4469,
      "end": 4526,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4475,
          "end": 4525,
          "id": {
            "type": "Identifier",
            "start": 4475,
            "end": 4478,
            "decorators": [],
            "name": "p88",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4483,
                "end": 4487,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4488,
                "end": 4498,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4494,
                  "end": 4498,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4500,
                "end": 4524,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4514,
                      "end": 4521,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4522,
                      "end": 4523,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4527,
      "end": 4583,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4533,
          "end": 4582,
          "id": {
            "type": "Identifier",
            "start": 4533,
            "end": 4536,
            "decorators": [],
            "name": "p89",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4541,
                "end": 4545,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4546,
                "end": 4556,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4552,
                  "end": 4556,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4558,
                "end": 4581,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4572,
                      "end": 4578,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4579,
                      "end": 4580,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4585,
      "end": 4625,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4591,
          "end": 4624,
          "id": {
            "type": "Identifier",
            "start": 4591,
            "end": 4594,
            "decorators": [],
            "name": "p90",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4599,
                "end": 4603,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4604,
                "end": 4612,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4610,
                  "end": 4612,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 4614,
                "end": 4623,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4626,
      "end": 4661,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4632,
          "end": 4660,
          "id": {
            "type": "Identifier",
            "start": 4632,
            "end": 4635,
            "decorators": [],
            "name": "p91",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4640,
                "end": 4644,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4645,
                "end": 4653,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4651,
                  "end": 4653,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 4655,
                "end": 4659,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4662,
      "end": 4700,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4668,
          "end": 4699,
          "id": {
            "type": "Identifier",
            "start": 4668,
            "end": 4671,
            "decorators": [],
            "name": "p92",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4676,
                "end": 4680,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4681,
                "end": 4689,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4687,
                  "end": 4689,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4691,
                "end": 4698,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4697,
                  "end": 4698,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4701,
      "end": 4739,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4707,
          "end": 4738,
          "id": {
            "type": "Identifier",
            "start": 4707,
            "end": 4710,
            "decorators": [],
            "name": "p93",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4715,
                "end": 4719,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4720,
                "end": 4728,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4726,
                  "end": 4728,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4730,
                "end": 4737,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 4736,
                  "end": 4737,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4740,
      "end": 4786,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4746,
          "end": 4785,
          "id": {
            "type": "Identifier",
            "start": 4746,
            "end": 4749,
            "decorators": [],
            "name": "p94",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4754,
                "end": 4758,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4759,
                "end": 4767,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4765,
                  "end": 4767,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4769,
                "end": 4784,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 4775,
                  "end": 4784,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4787,
      "end": 4828,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4793,
          "end": 4827,
          "id": {
            "type": "Identifier",
            "start": 4793,
            "end": 4796,
            "decorators": [],
            "name": "p95",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4801,
                "end": 4805,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4806,
                "end": 4814,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4812,
                  "end": 4814,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4816,
                "end": 4826,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 4822,
                  "end": 4826,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4829,
      "end": 4868,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4835,
          "end": 4867,
          "id": {
            "type": "Identifier",
            "start": 4835,
            "end": 4838,
            "decorators": [],
            "name": "p96",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4843,
                "end": 4847,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4848,
                "end": 4856,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4854,
                  "end": 4856,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4858,
                "end": 4866,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4864,
                  "end": 4866,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4869,
      "end": 4915,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4875,
          "end": 4914,
          "id": {
            "type": "Identifier",
            "start": 4875,
            "end": 4878,
            "decorators": [],
            "name": "p97",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4883,
                "end": 4887,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4888,
                "end": 4896,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4894,
                  "end": 4896,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4898,
                "end": 4913,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4916,
      "end": 4971,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4922,
          "end": 4970,
          "id": {
            "type": "Identifier",
            "start": 4922,
            "end": 4925,
            "decorators": [],
            "name": "p98",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4930,
                "end": 4934,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4935,
                "end": 4943,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4941,
                  "end": 4943,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4945,
                "end": 4969,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4959,
                      "end": 4966,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4967,
                      "end": 4968,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4972,
      "end": 5026,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4978,
          "end": 5025,
          "id": {
            "type": "Identifier",
            "start": 4978,
            "end": 4981,
            "decorators": [],
            "name": "p99",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4986,
                "end": 4990,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4991,
                "end": 4999,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 4997,
                  "end": 4999,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5001,
                "end": 5024,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5015,
                      "end": 5021,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5022,
                      "end": 5023,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5028,
      "end": 5075,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5034,
          "end": 5074,
          "id": {
            "type": "Identifier",
            "start": 5034,
            "end": 5037,
            "decorators": [],
            "name": "pa0",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5042,
                "end": 5046,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5047,
                "end": 5062,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 5064,
                "end": 5073,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5076,
      "end": 5118,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5082,
          "end": 5117,
          "id": {
            "type": "Identifier",
            "start": 5082,
            "end": 5085,
            "decorators": [],
            "name": "pa1",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5090,
                "end": 5094,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5095,
                "end": 5110,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 5112,
                "end": 5116,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5119,
      "end": 5164,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5125,
          "end": 5163,
          "id": {
            "type": "Identifier",
            "start": 5125,
            "end": 5128,
            "decorators": [],
            "name": "pa2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5133,
                "end": 5137,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5138,
                "end": 5153,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5155,
                "end": 5162,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 5161,
                  "end": 5162,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5165,
      "end": 5210,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5171,
          "end": 5209,
          "id": {
            "type": "Identifier",
            "start": 5171,
            "end": 5174,
            "decorators": [],
            "name": "pa3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5179,
                "end": 5183,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5184,
                "end": 5199,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5201,
                "end": 5208,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 5207,
                  "end": 5208,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5211,
      "end": 5264,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5217,
          "end": 5263,
          "id": {
            "type": "Identifier",
            "start": 5217,
            "end": 5220,
            "decorators": [],
            "name": "pa4",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5225,
                "end": 5229,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5230,
                "end": 5245,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5247,
                "end": 5262,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 5253,
                  "end": 5262,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5265,
      "end": 5313,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5271,
          "end": 5312,
          "id": {
            "type": "Identifier",
            "start": 5271,
            "end": 5274,
            "decorators": [],
            "name": "pa5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5279,
                "end": 5283,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5284,
                "end": 5299,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5301,
                "end": 5311,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 5307,
                  "end": 5311,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5314,
      "end": 5360,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5320,
          "end": 5359,
          "id": {
            "type": "Identifier",
            "start": 5320,
            "end": 5323,
            "decorators": [],
            "name": "pa6",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5328,
                "end": 5332,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5333,
                "end": 5348,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5350,
                "end": 5358,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 5356,
                  "end": 5358,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5361,
      "end": 5414,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5367,
          "end": 5413,
          "id": {
            "type": "Identifier",
            "start": 5367,
            "end": 5370,
            "decorators": [],
            "name": "pa7",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5375,
                "end": 5379,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5380,
                "end": 5395,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5397,
                "end": 5412,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5415,
      "end": 5477,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5421,
          "end": 5476,
          "id": {
            "type": "Identifier",
            "start": 5421,
            "end": 5424,
            "decorators": [],
            "name": "pa8",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5429,
                "end": 5433,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5434,
                "end": 5449,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5451,
                "end": 5475,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5465,
                      "end": 5472,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5473,
                      "end": 5474,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5478,
      "end": 5539,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5484,
          "end": 5538,
          "id": {
            "type": "Identifier",
            "start": 5484,
            "end": 5487,
            "decorators": [],
            "name": "pa9",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5492,
                "end": 5496,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5497,
                "end": 5512,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5514,
                "end": 5537,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5528,
                      "end": 5534,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5535,
                      "end": 5536,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5541,
      "end": 5599,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5547,
          "end": 5598,
          "id": {
            "type": "Identifier",
            "start": 5547,
            "end": 5550,
            "decorators": [],
            "name": "pb0",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5555,
                "end": 5559,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5560,
                "end": 5586,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5574,
                      "end": 5581,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5582,
                      "end": 5585,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 5588,
                "end": 5597,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5600,
      "end": 5653,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5606,
          "end": 5652,
          "id": {
            "type": "Identifier",
            "start": 5606,
            "end": 5609,
            "decorators": [],
            "name": "pb1",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5614,
                "end": 5618,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5619,
                "end": 5645,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5633,
                      "end": 5640,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5641,
                      "end": 5644,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 5647,
                "end": 5651,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5654,
      "end": 5710,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5660,
          "end": 5709,
          "id": {
            "type": "Identifier",
            "start": 5660,
            "end": 5663,
            "decorators": [],
            "name": "pb2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5668,
                "end": 5672,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5673,
                "end": 5699,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5687,
                      "end": 5694,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5695,
                      "end": 5698,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5701,
                "end": 5708,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 5707,
                  "end": 5708,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5711,
      "end": 5767,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5717,
          "end": 5766,
          "id": {
            "type": "Identifier",
            "start": 5717,
            "end": 5720,
            "decorators": [],
            "name": "pb3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5725,
                "end": 5729,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5730,
                "end": 5756,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5744,
                      "end": 5751,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5752,
                      "end": 5755,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5758,
                "end": 5765,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 5764,
                  "end": 5765,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5768,
      "end": 5832,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5774,
          "end": 5831,
          "id": {
            "type": "Identifier",
            "start": 5774,
            "end": 5777,
            "decorators": [],
            "name": "pb4",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5782,
                "end": 5786,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5787,
                "end": 5813,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5801,
                      "end": 5808,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5809,
                      "end": 5812,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5815,
                "end": 5830,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 5821,
                  "end": 5830,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5833,
      "end": 5892,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5839,
          "end": 5891,
          "id": {
            "type": "Identifier",
            "start": 5839,
            "end": 5842,
            "decorators": [],
            "name": "pb5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5847,
                "end": 5851,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5852,
                "end": 5878,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5866,
                      "end": 5873,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5874,
                      "end": 5877,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5880,
                "end": 5890,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 5886,
                  "end": 5890,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5893,
      "end": 5950,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5899,
          "end": 5949,
          "id": {
            "type": "Identifier",
            "start": 5899,
            "end": 5902,
            "decorators": [],
            "name": "pb6",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5907,
                "end": 5911,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5912,
                "end": 5938,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5926,
                      "end": 5933,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5934,
                      "end": 5937,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5940,
                "end": 5948,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 5946,
                  "end": 5948,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5951,
      "end": 6015,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5957,
          "end": 6014,
          "id": {
            "type": "Identifier",
            "start": 5957,
            "end": 5960,
            "decorators": [],
            "name": "pb7",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5965,
                "end": 5969,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5970,
                "end": 5996,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5984,
                      "end": 5991,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5992,
                      "end": 5995,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5998,
                "end": 6013,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6016,
      "end": 6089,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6022,
          "end": 6088,
          "id": {
            "type": "Identifier",
            "start": 6022,
            "end": 6025,
            "decorators": [],
            "name": "pb8",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6030,
                "end": 6034,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6035,
                "end": 6061,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6049,
                      "end": 6056,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6057,
                      "end": 6060,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6063,
                "end": 6087,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6077,
                      "end": 6084,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6085,
                      "end": 6086,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6090,
      "end": 6162,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6096,
          "end": 6161,
          "id": {
            "type": "Identifier",
            "start": 6096,
            "end": 6099,
            "decorators": [],
            "name": "pb9",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6104,
                "end": 6108,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6109,
                "end": 6135,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6123,
                      "end": 6130,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6131,
                      "end": 6134,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6137,
                "end": 6160,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6151,
                      "end": 6157,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6158,
                      "end": 6159,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6164,
      "end": 6221,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6170,
          "end": 6220,
          "id": {
            "type": "Identifier",
            "start": 6170,
            "end": 6173,
            "decorators": [],
            "name": "pc0",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6178,
                "end": 6182,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6183,
                "end": 6208,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6197,
                      "end": 6203,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6204,
                      "end": 6207,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Identifier",
                "start": 6210,
                "end": 6219,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6222,
      "end": 6274,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6228,
          "end": 6273,
          "id": {
            "type": "Identifier",
            "start": 6228,
            "end": 6231,
            "decorators": [],
            "name": "pc1",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6236,
                "end": 6240,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6241,
                "end": 6266,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6255,
                      "end": 6261,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6262,
                      "end": 6265,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 6268,
                "end": 6272,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6275,
      "end": 6330,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6281,
          "end": 6329,
          "id": {
            "type": "Identifier",
            "start": 6281,
            "end": 6284,
            "decorators": [],
            "name": "pc2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6289,
                "end": 6293,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6294,
                "end": 6319,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6308,
                      "end": 6314,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6315,
                      "end": 6318,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6321,
                "end": 6328,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 6327,
                  "end": 6328,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6331,
      "end": 6386,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6337,
          "end": 6385,
          "id": {
            "type": "Identifier",
            "start": 6337,
            "end": 6340,
            "decorators": [],
            "name": "pc3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6345,
                "end": 6349,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6350,
                "end": 6375,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6364,
                      "end": 6370,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6371,
                      "end": 6374,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6377,
                "end": 6384,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 6383,
                  "end": 6384,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6387,
      "end": 6450,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6393,
          "end": 6449,
          "id": {
            "type": "Identifier",
            "start": 6393,
            "end": 6396,
            "decorators": [],
            "name": "pc4",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6401,
                "end": 6405,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6406,
                "end": 6431,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6420,
                      "end": 6426,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6427,
                      "end": 6430,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6433,
                "end": 6448,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 6439,
                  "end": 6448,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6451,
      "end": 6509,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6457,
          "end": 6508,
          "id": {
            "type": "Identifier",
            "start": 6457,
            "end": 6460,
            "decorators": [],
            "name": "pc5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6465,
                "end": 6469,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6470,
                "end": 6495,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6484,
                      "end": 6490,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6491,
                      "end": 6494,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6497,
                "end": 6507,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 6503,
                  "end": 6507,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6510,
      "end": 6566,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6516,
          "end": 6565,
          "id": {
            "type": "Identifier",
            "start": 6516,
            "end": 6519,
            "decorators": [],
            "name": "pc6",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6524,
                "end": 6528,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6529,
                "end": 6554,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6543,
                      "end": 6549,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6550,
                      "end": 6553,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6556,
                "end": 6564,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 6562,
                  "end": 6564,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6567,
      "end": 6630,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6573,
          "end": 6629,
          "id": {
            "type": "Identifier",
            "start": 6573,
            "end": 6576,
            "decorators": [],
            "name": "pc7",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6581,
                "end": 6585,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6586,
                "end": 6611,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6600,
                      "end": 6606,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6607,
                      "end": 6610,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6613,
                "end": 6628,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6631,
      "end": 6703,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6637,
          "end": 6702,
          "id": {
            "type": "Identifier",
            "start": 6637,
            "end": 6640,
            "decorators": [],
            "name": "pc8",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6645,
                "end": 6649,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6650,
                "end": 6675,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6664,
                      "end": 6670,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6671,
                      "end": 6674,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6677,
                "end": 6701,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6691,
                      "end": 6698,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6699,
                      "end": 6700,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6704,
      "end": 6775,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6710,
          "end": 6774,
          "id": {
            "type": "Identifier",
            "start": 6710,
            "end": 6713,
            "decorators": [],
            "name": "pc9",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6718,
                "end": 6722,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6723,
                "end": 6748,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6737,
                      "end": 6743,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6744,
                      "end": 6747,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6750,
                "end": 6773,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6764,
                      "end": 6770,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6771,
                      "end": 6772,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 6777,
      "end": 6832,
      "expression": {
        "type": "CallExpression",
        "start": 6777,
        "end": 6831,
        "callee": {
          "type": "MemberExpression",
          "start": 6777,
          "end": 6792,
          "object": {
            "type": "Identifier",
            "start": 6777,
            "end": 6784,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 6785,
            "end": 6792,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 6793,
            "end": 6830,
            "expression": {
              "type": "Identifier",
              "start": 6793,
              "end": 6802,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6806,
              "end": 6830,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 6806,
                  "end": 6821,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6806,
                    "end": 6813,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6813,
                    "end": 6821,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6814,
                        "end": 6820
                      }
                    ]
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 6824,
                  "end": 6830
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6833,
      "end": 6888,
      "expression": {
        "type": "CallExpression",
        "start": 6833,
        "end": 6887,
        "callee": {
          "type": "MemberExpression",
          "start": 6833,
          "end": 6848,
          "object": {
            "type": "Identifier",
            "start": 6833,
            "end": 6840,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 6841,
            "end": 6848,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 6849,
            "end": 6886,
            "expression": {
              "type": "Identifier",
              "start": 6849,
              "end": 6858,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6862,
              "end": 6886,
              "typeName": {
                "type": "Identifier",
                "start": 6862,
                "end": 6869,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 6869,
                "end": 6886,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 6870,
                    "end": 6885,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6870,
                      "end": 6877,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6877,
                      "end": 6885,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6878,
                          "end": 6884
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6889,
      "end": 6953,
      "expression": {
        "type": "CallExpression",
        "start": 6889,
        "end": 6952,
        "callee": {
          "type": "MemberExpression",
          "start": 6889,
          "end": 6904,
          "object": {
            "type": "Identifier",
            "start": 6889,
            "end": 6896,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 6897,
            "end": 6904,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 6905,
            "end": 6951,
            "expression": {
              "type": "Identifier",
              "start": 6905,
              "end": 6914,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6918,
              "end": 6951,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 6918,
                  "end": 6924
                },
                {
                  "type": "TSTypeReference",
                  "start": 6927,
                  "end": 6951,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6927,
                    "end": 6934,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6934,
                    "end": 6951,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6935,
                        "end": 6950,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6935,
                          "end": 6942,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 6942,
                          "end": 6950,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 6943,
                              "end": 6949
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6954,
      "end": 7027,
      "expression": {
        "type": "CallExpression",
        "start": 6954,
        "end": 7026,
        "callee": {
          "type": "MemberExpression",
          "start": 6954,
          "end": 6969,
          "object": {
            "type": "Identifier",
            "start": 6954,
            "end": 6961,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 6962,
            "end": 6969,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 6970,
            "end": 7025,
            "expression": {
              "type": "Identifier",
              "start": 6970,
              "end": 6979,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6983,
              "end": 7025,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 6983,
                  "end": 6998,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6983,
                    "end": 6990,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6990,
                    "end": 6998,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6991,
                        "end": 6997
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 7001,
                  "end": 7025,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7001,
                    "end": 7008,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7008,
                    "end": 7025,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7009,
                        "end": 7024,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7009,
                          "end": 7016,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7016,
                          "end": 7024,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 7017,
                              "end": 7023
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 7028,
      "end": 7101,
      "expression": {
        "type": "CallExpression",
        "start": 7028,
        "end": 7100,
        "callee": {
          "type": "MemberExpression",
          "start": 7028,
          "end": 7043,
          "object": {
            "type": "Identifier",
            "start": 7028,
            "end": 7035,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7036,
            "end": 7043,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 7044,
            "end": 7099,
            "expression": {
              "type": "Identifier",
              "start": 7044,
              "end": 7053,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7057,
              "end": 7099,
              "typeName": {
                "type": "Identifier",
                "start": 7057,
                "end": 7064,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 7064,
                "end": 7099,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 7065,
                    "end": 7098,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 7065,
                        "end": 7071
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 7074,
                        "end": 7098,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7074,
                          "end": 7081,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7081,
                          "end": 7098,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 7082,
                              "end": 7097,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7082,
                                "end": 7089,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 7089,
                                "end": 7097,
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 7090,
                                    "end": 7096
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
