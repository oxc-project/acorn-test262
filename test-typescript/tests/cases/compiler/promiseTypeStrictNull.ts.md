__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6775,
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
          "definite": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 22,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "VariableDeclaration",
      "start": 33,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 51,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 113,
      "async": true,
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
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 174,
      "async": true,
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
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 172,
            "argument": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 305,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 242,
                  "end": 251,
                  "argument": {
                    "type": "Literal",
                    "start": 249,
                    "end": 250,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 262,
              "end": 303,
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
                      "raw": "'error'",
                      "value": "error",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 192,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 412,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 373,
                  "end": 382,
                  "argument": {
                    "type": "Literal",
                    "start": 380,
                    "end": 381,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 393,
              "end": 410,
              "body": {
                "type": "BlockStatement",
                "start": 403,
                "end": 410,
                "body": []
              },
              "param": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 414,
      "end": 542,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 480,
                  "end": 489,
                  "argument": {
                    "type": "Literal",
                    "start": 487,
                    "end": 488,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 500,
              "end": 540,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 526,
                        "end": 531,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 430,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 544,
      "end": 689,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 610,
                  "end": 619,
                  "argument": {
                    "type": "Literal",
                    "start": 617,
                    "end": 618,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 630,
              "end": 687,
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
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 672,
                          "end": 679,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 677,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 657,
                        "end": 671,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 657,
                          "end": 664,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 671,
                          "decorators": [],
                          "name": "reject",
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
              "param": {
                "type": "Identifier",
                "start": 637,
                "end": 638,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 560,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 691,
      "end": 812,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
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
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 777,
              "end": 810,
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
              },
              "param": {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 707,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 814,
      "end": 942,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
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
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 900,
              "end": 940,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 931,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 907,
                "end": 908,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 829,
        "end": 830,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 944,
      "end": 1089,
      "async": true,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
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
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 1030,
              "end": 1087,
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
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 1072,
                          "end": 1079,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 1072,
                            "end": 1077,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1057,
                        "end": 1071,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1057,
                          "end": 1064,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1065,
                          "end": 1071,
                          "decorators": [],
                          "name": "reject",
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
              "param": {
                "type": "Identifier",
                "start": 1037,
                "end": 1038,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 960,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1137,
              "end": 1144,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1139,
                "end": 1144,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1160,
              "end": 1166,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1160,
                "end": 1161,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1162,
                "end": 1166,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "callee": {
              "type": "MemberExpression",
              "start": 1183,
              "end": 1190,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1183,
                "end": 1184,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1185,
                "end": 1190,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 1223,
                "end": 1227,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1215,
              "end": 1222,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1215,
                "end": 1216,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1217,
                "end": 1222,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1250,
                "end": 1257,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1256,
                  "end": 1257,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1242,
              "end": 1249,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1242,
                "end": 1243,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1244,
                "end": 1249,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1280,
                "end": 1287,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1287,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1272,
              "end": 1279,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1274,
                "end": 1279,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1310,
                "end": 1325,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1325,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1302,
              "end": 1309,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1302,
                "end": 1303,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1304,
                "end": 1309,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1348,
                "end": 1358,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1354,
                  "end": 1358,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1340,
              "end": 1347,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1340,
                "end": 1341,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1342,
                "end": 1347,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1381,
                "end": 1389,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1387,
                  "end": 1389,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1373,
              "end": 1380,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1373,
                "end": 1374,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1375,
                "end": 1380,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1412,
                "end": 1427,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1404,
              "end": 1411,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1404,
                "end": 1405,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1406,
                "end": 1411,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1450,
                "end": 1473,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1456,
                  "end": 1473,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1471,
                      "end": 1472,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1456,
                    "end": 1470,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1456,
                      "end": 1463,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1470,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1442,
              "end": 1449,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1442,
                "end": 1443,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1444,
                "end": 1449,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1496,
                "end": 1520,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1502,
                  "end": 1520,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1518,
                      "end": 1519,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1502,
                    "end": 1517,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1502,
                      "end": 1509,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1510,
                      "end": 1517,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1488,
              "end": 1495,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1488,
                "end": 1489,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1490,
                "end": 1495,
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "callee": {
              "type": "MemberExpression",
              "start": 1536,
              "end": 1542,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1538,
                "end": 1542,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 1574,
                "end": 1578,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1567,
              "end": 1573,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1567,
                "end": 1568,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1569,
                "end": 1573,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1600,
                "end": 1607,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1606,
                  "end": 1607,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1593,
              "end": 1599,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1593,
                "end": 1594,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1595,
                "end": 1599,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1629,
                "end": 1636,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1635,
                  "end": 1636,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1622,
              "end": 1628,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1622,
                "end": 1623,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1624,
                "end": 1628,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1658,
                "end": 1673,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1673,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1651,
              "end": 1657,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1651,
                "end": 1652,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1653,
                "end": 1657,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1695,
                "end": 1705,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1701,
                  "end": 1705,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1688,
              "end": 1694,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1688,
                "end": 1689,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1690,
                "end": 1694,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1727,
                "end": 1735,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1733,
                  "end": 1735,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1720,
              "end": 1726,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1720,
                "end": 1721,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1722,
                "end": 1726,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1757,
                "end": 1772,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1750,
              "end": 1756,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1750,
                "end": 1751,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1752,
                "end": 1756,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1794,
                "end": 1818,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1800,
                  "end": 1818,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1816,
                      "end": 1817,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1800,
                    "end": 1815,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1807,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1808,
                      "end": 1815,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1787,
              "end": 1793,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1787,
                "end": 1788,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1789,
                "end": 1793,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1840,
                "end": 1863,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1846,
                  "end": 1863,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1861,
                      "end": 1862,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1846,
                    "end": 1860,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1846,
                      "end": 1853,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1854,
                      "end": 1860,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1833,
              "end": 1839,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1833,
                "end": 1834,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1835,
                "end": 1839,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "callee": {
              "type": "MemberExpression",
              "start": 1879,
              "end": 1885,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1879,
                "end": 1880,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1881,
                "end": 1885,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1921,
              "end": 1927,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1921,
                "end": 1922,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1923,
                "end": 1927,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1982,
                  "end": 1983,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1958,
              "end": 1964,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1958,
                "end": 1959,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1960,
                "end": 1964,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2022,
                  "end": 2023,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1998,
              "end": 2004,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1998,
                "end": 1999,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2000,
                "end": 2004,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2062,
                  "end": 2071,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2038,
              "end": 2044,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2038,
                "end": 2039,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2040,
                "end": 2044,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2110,
                  "end": 2114,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2086,
              "end": 2092,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2086,
                "end": 2087,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2088,
                "end": 2092,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2153,
                  "end": 2155,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2129,
              "end": 2135,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2129,
                "end": 2130,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2131,
                "end": 2135,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2170,
              "end": 2176,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2170,
                "end": 2171,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2172,
                "end": 2176,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 2242,
                  "end": 2260,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2258,
                      "end": 2259,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2242,
                    "end": 2257,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2242,
                      "end": 2249,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2257,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2218,
              "end": 2224,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2218,
                "end": 2219,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2220,
                "end": 2224,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 2299,
                  "end": 2316,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2314,
                      "end": 2315,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2299,
                    "end": 2313,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2299,
                      "end": 2306,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2307,
                      "end": 2313,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2275,
              "end": 2281,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2275,
                "end": 2276,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2277,
                "end": 2281,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2339,
                "end": 2343,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 2332,
              "end": 2338,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2332,
                "end": 2333,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2334,
                "end": 2338,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2376,
                "end": 2380,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 2382,
                "end": 2386,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2369,
              "end": 2375,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2369,
                "end": 2370,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2371,
                "end": 2375,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2408,
                "end": 2412,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2414,
                "end": 2421,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2420,
                  "end": 2421,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2401,
              "end": 2407,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2401,
                "end": 2402,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2403,
                "end": 2407,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2443,
                "end": 2447,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2449,
                "end": 2456,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2455,
                  "end": 2456,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2436,
              "end": 2442,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2436,
                "end": 2437,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2438,
                "end": 2442,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2478,
                "end": 2482,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2484,
                "end": 2499,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2490,
                  "end": 2499,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2471,
              "end": 2477,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2471,
                "end": 2472,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2473,
                "end": 2477,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2521,
                "end": 2525,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2527,
                "end": 2537,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2533,
                  "end": 2537,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2514,
              "end": 2520,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2514,
                "end": 2515,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2516,
                "end": 2520,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2559,
                "end": 2563,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2565,
                "end": 2573,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2571,
                  "end": 2573,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2552,
              "end": 2558,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2552,
                "end": 2553,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2554,
                "end": 2558,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2595,
                "end": 2599,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2601,
                "end": 2616,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2588,
              "end": 2594,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2588,
                "end": 2589,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2590,
                "end": 2594,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2638,
                "end": 2642,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2644,
                "end": 2668,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 2650,
                  "end": 2668,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2666,
                      "end": 2667,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2650,
                    "end": 2665,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2650,
                      "end": 2657,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2658,
                      "end": 2665,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2631,
              "end": 2637,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2631,
                "end": 2632,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2633,
                "end": 2637,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2690,
                "end": 2694,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2696,
                "end": 2719,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 2702,
                  "end": 2719,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2717,
                      "end": 2718,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2702,
                    "end": 2716,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2702,
                      "end": 2709,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2716,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2683,
              "end": 2689,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2683,
                "end": 2684,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2685,
                "end": 2689,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2742,
                "end": 2751,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2748,
                  "end": 2751,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 2735,
              "end": 2741,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2735,
                "end": 2736,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2737,
                "end": 2741,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2784,
                "end": 2793,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2790,
                  "end": 2793,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 2795,
                "end": 2799,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2777,
              "end": 2783,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2777,
                "end": 2778,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2779,
                "end": 2783,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2821,
                "end": 2830,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2827,
                  "end": 2830,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2832,
                "end": 2839,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2838,
                  "end": 2839,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2814,
              "end": 2820,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2814,
                "end": 2815,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2816,
                "end": 2820,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2861,
                "end": 2870,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2867,
                  "end": 2870,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2872,
                "end": 2879,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2878,
                  "end": 2879,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2854,
              "end": 2860,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2854,
                "end": 2855,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2856,
                "end": 2860,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2901,
                "end": 2910,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2907,
                  "end": 2910,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2912,
                "end": 2927,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2918,
                  "end": 2927,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2894,
              "end": 2900,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2894,
                "end": 2895,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2896,
                "end": 2900,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2949,
                "end": 2958,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2955,
                  "end": 2958,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2960,
                "end": 2970,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2966,
                  "end": 2970,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2942,
              "end": 2948,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2942,
                "end": 2943,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2944,
                "end": 2948,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2992,
                "end": 3001,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 2998,
                  "end": 3001,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3003,
                "end": 3011,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3009,
                  "end": 3011,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2985,
              "end": 2991,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2985,
                "end": 2986,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2987,
                "end": 2991,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3033,
                "end": 3042,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3039,
                  "end": 3042,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3044,
                "end": 3059,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3026,
              "end": 3032,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3026,
                "end": 3027,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3028,
                "end": 3032,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3081,
                "end": 3090,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3087,
                  "end": 3090,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3092,
                "end": 3116,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 3098,
                  "end": 3116,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3114,
                      "end": 3115,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3098,
                    "end": 3113,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3098,
                      "end": 3105,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3106,
                      "end": 3113,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3074,
              "end": 3080,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3074,
                "end": 3075,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3076,
                "end": 3080,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3138,
                "end": 3147,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3144,
                  "end": 3147,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3149,
                "end": 3172,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 3155,
                  "end": 3172,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3170,
                      "end": 3171,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3155,
                    "end": 3169,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3155,
                      "end": 3162,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3163,
                      "end": 3169,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3131,
              "end": 3137,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3131,
                "end": 3132,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3133,
                "end": 3137,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3195,
                "end": 3202,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3201,
                  "end": 3202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 3188,
              "end": 3194,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3188,
                "end": 3189,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3190,
                "end": 3194,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3235,
                "end": 3242,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3241,
                  "end": 3242,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 3244,
                "end": 3248,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3228,
              "end": 3234,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3228,
                "end": 3229,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3230,
                "end": 3234,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3270,
                "end": 3277,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3276,
                  "end": 3277,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3279,
                "end": 3286,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3285,
                  "end": 3286,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3263,
              "end": 3269,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3263,
                "end": 3264,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3265,
                "end": 3269,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3308,
                "end": 3315,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3314,
                  "end": 3315,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3317,
                "end": 3324,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3323,
                  "end": 3324,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3301,
              "end": 3307,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3301,
                "end": 3302,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3303,
                "end": 3307,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3346,
                "end": 3353,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3352,
                  "end": 3353,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3355,
                "end": 3370,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3361,
                  "end": 3370,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3339,
              "end": 3345,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3339,
                "end": 3340,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3341,
                "end": 3345,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3392,
                "end": 3399,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3398,
                  "end": 3399,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3401,
                "end": 3411,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3407,
                  "end": 3411,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3385,
              "end": 3391,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3385,
                "end": 3386,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3387,
                "end": 3391,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3433,
                "end": 3440,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3439,
                  "end": 3440,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3442,
                "end": 3450,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3448,
                  "end": 3450,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3426,
              "end": 3432,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3426,
                "end": 3427,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3428,
                "end": 3432,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3472,
                "end": 3479,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3478,
                  "end": 3479,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3481,
                "end": 3496,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3465,
              "end": 3471,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3465,
                "end": 3466,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3467,
                "end": 3471,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3518,
                "end": 3525,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3524,
                  "end": 3525,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3527,
                "end": 3551,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 3533,
                  "end": 3551,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3549,
                      "end": 3550,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3533,
                    "end": 3548,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3533,
                      "end": 3540,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3541,
                      "end": 3548,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3511,
              "end": 3517,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3511,
                "end": 3512,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3513,
                "end": 3517,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3573,
                "end": 3580,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3579,
                  "end": 3580,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3582,
                "end": 3605,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 3588,
                  "end": 3605,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3603,
                      "end": 3604,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3588,
                    "end": 3602,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3588,
                      "end": 3595,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3596,
                      "end": 3602,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3566,
              "end": 3572,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3566,
                "end": 3567,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3568,
                "end": 3572,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3628,
                "end": 3643,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3634,
                  "end": 3643,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 3621,
              "end": 3627,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3621,
                "end": 3622,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3623,
                "end": 3627,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3676,
                "end": 3691,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3682,
                  "end": 3691,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 3693,
                "end": 3697,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3669,
              "end": 3675,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3669,
                "end": 3670,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3671,
                "end": 3675,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3719,
                "end": 3734,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3725,
                  "end": 3734,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3736,
                "end": 3743,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3742,
                  "end": 3743,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3712,
              "end": 3718,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3712,
                "end": 3713,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3714,
                "end": 3718,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3765,
                "end": 3780,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3771,
                  "end": 3780,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3782,
                "end": 3789,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3788,
                  "end": 3789,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3758,
              "end": 3764,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3758,
                "end": 3759,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3760,
                "end": 3764,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3811,
                "end": 3826,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3817,
                  "end": 3826,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3828,
                "end": 3843,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3834,
                  "end": 3843,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3804,
              "end": 3810,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3804,
                "end": 3805,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3806,
                "end": 3810,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3865,
                "end": 3880,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3871,
                  "end": 3880,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3882,
                "end": 3892,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3888,
                  "end": 3892,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3858,
              "end": 3864,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3858,
                "end": 3859,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3860,
                "end": 3864,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3914,
                "end": 3929,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3920,
                  "end": 3929,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3931,
                "end": 3939,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3937,
                  "end": 3939,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3907,
              "end": 3913,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3907,
                "end": 3908,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3909,
                "end": 3913,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3961,
                "end": 3976,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3967,
                  "end": 3976,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3978,
                "end": 3993,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3954,
              "end": 3960,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3954,
                "end": 3955,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3956,
                "end": 3960,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4015,
                "end": 4030,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 4021,
                  "end": 4030,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4032,
                "end": 4056,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 4038,
                  "end": 4056,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4054,
                      "end": 4055,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4038,
                    "end": 4053,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4038,
                      "end": 4045,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4046,
                      "end": 4053,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4008,
              "end": 4014,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4008,
                "end": 4009,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4010,
                "end": 4014,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4078,
                "end": 4093,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 4084,
                  "end": 4093,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4095,
                "end": 4118,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 4101,
                  "end": 4118,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4116,
                      "end": 4117,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4101,
                    "end": 4115,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4101,
                      "end": 4108,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4109,
                      "end": 4115,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4071,
              "end": 4077,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4071,
                "end": 4072,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4073,
                "end": 4077,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4141,
                "end": 4151,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4147,
                  "end": 4151,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 4134,
              "end": 4140,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4134,
                "end": 4135,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4136,
                "end": 4140,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4184,
                "end": 4194,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4190,
                  "end": 4194,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 4196,
                "end": 4200,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4177,
              "end": 4183,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4177,
                "end": 4178,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4179,
                "end": 4183,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4222,
                "end": 4232,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4228,
                  "end": 4232,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4234,
                "end": 4241,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4240,
                  "end": 4241,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4215,
              "end": 4221,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4215,
                "end": 4216,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4217,
                "end": 4221,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4263,
                "end": 4273,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4269,
                  "end": 4273,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4275,
                "end": 4282,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 4281,
                  "end": 4282,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4256,
              "end": 4262,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4256,
                "end": 4257,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4258,
                "end": 4262,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4304,
                "end": 4314,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4310,
                  "end": 4314,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4316,
                "end": 4331,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 4322,
                  "end": 4331,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4297,
              "end": 4303,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4297,
                "end": 4298,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4299,
                "end": 4303,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4353,
                "end": 4363,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4359,
                  "end": 4363,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4365,
                "end": 4375,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4371,
                  "end": 4375,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4346,
              "end": 4352,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4346,
                "end": 4347,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4348,
                "end": 4352,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4397,
                "end": 4407,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4403,
                  "end": 4407,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4409,
                "end": 4417,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4415,
                  "end": 4417,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4390,
              "end": 4396,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4390,
                "end": 4391,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4392,
                "end": 4396,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4439,
                "end": 4449,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4445,
                  "end": 4449,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4451,
                "end": 4466,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4432,
              "end": 4438,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4432,
                "end": 4433,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4434,
                "end": 4438,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4488,
                "end": 4498,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4494,
                  "end": 4498,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4500,
                "end": 4524,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 4506,
                  "end": 4524,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4522,
                      "end": 4523,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4506,
                    "end": 4521,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4506,
                      "end": 4513,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4514,
                      "end": 4521,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4481,
              "end": 4487,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4481,
                "end": 4482,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4483,
                "end": 4487,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4546,
                "end": 4556,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4552,
                  "end": 4556,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4558,
                "end": 4581,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 4564,
                  "end": 4581,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4579,
                      "end": 4580,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4564,
                    "end": 4578,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4564,
                      "end": 4571,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4572,
                      "end": 4578,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4539,
              "end": 4545,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4539,
                "end": 4540,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4541,
                "end": 4545,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4604,
                "end": 4612,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4610,
                  "end": 4612,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 4597,
              "end": 4603,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4597,
                "end": 4598,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4599,
                "end": 4603,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4645,
                "end": 4653,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4651,
                  "end": 4653,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 4655,
                "end": 4659,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4638,
              "end": 4644,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4638,
                "end": 4639,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4640,
                "end": 4644,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4681,
                "end": 4689,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4687,
                  "end": 4689,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4691,
                "end": 4698,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4697,
                  "end": 4698,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4674,
              "end": 4680,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4674,
                "end": 4675,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4676,
                "end": 4680,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4720,
                "end": 4728,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4726,
                  "end": 4728,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4730,
                "end": 4737,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 4736,
                  "end": 4737,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4713,
              "end": 4719,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4713,
                "end": 4714,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4715,
                "end": 4719,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4759,
                "end": 4767,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4765,
                  "end": 4767,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4769,
                "end": 4784,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 4775,
                  "end": 4784,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4752,
              "end": 4758,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4752,
                "end": 4753,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4754,
                "end": 4758,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4806,
                "end": 4814,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4812,
                  "end": 4814,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4816,
                "end": 4826,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 4822,
                  "end": 4826,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4799,
              "end": 4805,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4799,
                "end": 4800,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4801,
                "end": 4805,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4848,
                "end": 4856,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4854,
                  "end": 4856,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4858,
                "end": 4866,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4864,
                  "end": 4866,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4841,
              "end": 4847,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4841,
                "end": 4842,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4843,
                "end": 4847,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4888,
                "end": 4896,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4894,
                  "end": 4896,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4898,
                "end": 4913,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4881,
              "end": 4887,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4881,
                "end": 4882,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4883,
                "end": 4887,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4935,
                "end": 4943,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4941,
                  "end": 4943,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4945,
                "end": 4969,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 4951,
                  "end": 4969,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4967,
                      "end": 4968,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4951,
                    "end": 4966,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4951,
                      "end": 4958,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4959,
                      "end": 4966,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4928,
              "end": 4934,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4928,
                "end": 4929,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4930,
                "end": 4934,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4991,
                "end": 4999,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4997,
                  "end": 4999,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5001,
                "end": 5024,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5007,
                  "end": 5024,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5022,
                      "end": 5023,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5007,
                    "end": 5021,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5007,
                      "end": 5014,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5015,
                      "end": 5021,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4984,
              "end": 4990,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4984,
                "end": 4985,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4986,
                "end": 4990,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5047,
                "end": 5062,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 5040,
              "end": 5046,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5040,
                "end": 5041,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5042,
                "end": 5046,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5095,
                "end": 5110,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 5112,
                "end": 5116,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5088,
              "end": 5094,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5088,
                "end": 5089,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5090,
                "end": 5094,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5138,
                "end": 5153,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5155,
                "end": 5162,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 5161,
                  "end": 5162,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5131,
              "end": 5137,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5131,
                "end": 5132,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5133,
                "end": 5137,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5184,
                "end": 5199,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5201,
                "end": 5208,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 5207,
                  "end": 5208,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5177,
              "end": 5183,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5177,
                "end": 5178,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5179,
                "end": 5183,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5230,
                "end": 5245,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5247,
                "end": 5262,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 5253,
                  "end": 5262,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5223,
              "end": 5229,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5223,
                "end": 5224,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5225,
                "end": 5229,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5284,
                "end": 5299,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5301,
                "end": 5311,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 5307,
                  "end": 5311,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5277,
              "end": 5283,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5277,
                "end": 5278,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5279,
                "end": 5283,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5333,
                "end": 5348,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5350,
                "end": 5358,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 5356,
                  "end": 5358,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5326,
              "end": 5332,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5326,
                "end": 5327,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5328,
                "end": 5332,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5380,
                "end": 5395,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5397,
                "end": 5412,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5373,
              "end": 5379,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5373,
                "end": 5374,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5375,
                "end": 5379,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5434,
                "end": 5449,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5451,
                "end": 5475,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5457,
                  "end": 5475,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5473,
                      "end": 5474,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5457,
                    "end": 5472,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5457,
                      "end": 5464,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5465,
                      "end": 5472,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5427,
              "end": 5433,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5427,
                "end": 5428,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5429,
                "end": 5433,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5497,
                "end": 5512,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5514,
                "end": 5537,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5520,
                  "end": 5537,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5535,
                      "end": 5536,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5520,
                    "end": 5534,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5520,
                      "end": 5527,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5528,
                      "end": 5534,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5490,
              "end": 5496,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5490,
                "end": 5491,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5492,
                "end": 5496,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5560,
                "end": 5586,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5566,
                  "end": 5586,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5582,
                      "end": 5585,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5566,
                    "end": 5581,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5566,
                      "end": 5573,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5574,
                      "end": 5581,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 5553,
              "end": 5559,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5553,
                "end": 5554,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5555,
                "end": 5559,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5619,
                "end": 5645,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5625,
                  "end": 5645,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5641,
                      "end": 5644,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5625,
                    "end": 5640,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5625,
                      "end": 5632,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5633,
                      "end": 5640,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 5647,
                "end": 5651,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5612,
              "end": 5618,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5612,
                "end": 5613,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5614,
                "end": 5618,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5673,
                "end": 5699,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5679,
                  "end": 5699,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5695,
                      "end": 5698,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5679,
                    "end": 5694,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5679,
                      "end": 5686,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5687,
                      "end": 5694,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5701,
                "end": 5708,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 5707,
                  "end": 5708,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5666,
              "end": 5672,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5666,
                "end": 5667,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5668,
                "end": 5672,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5730,
                "end": 5756,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5736,
                  "end": 5756,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5752,
                      "end": 5755,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5736,
                    "end": 5751,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5736,
                      "end": 5743,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5744,
                      "end": 5751,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5758,
                "end": 5765,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 5764,
                  "end": 5765,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5723,
              "end": 5729,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5723,
                "end": 5724,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5725,
                "end": 5729,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5787,
                "end": 5813,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5793,
                  "end": 5813,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5809,
                      "end": 5812,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5793,
                    "end": 5808,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5793,
                      "end": 5800,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5801,
                      "end": 5808,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5815,
                "end": 5830,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 5821,
                  "end": 5830,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5780,
              "end": 5786,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5780,
                "end": 5781,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5782,
                "end": 5786,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5852,
                "end": 5878,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5858,
                  "end": 5878,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5874,
                      "end": 5877,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5858,
                    "end": 5873,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5858,
                      "end": 5865,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5866,
                      "end": 5873,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5880,
                "end": 5890,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 5886,
                  "end": 5890,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5845,
              "end": 5851,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5845,
                "end": 5846,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5847,
                "end": 5851,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5912,
                "end": 5938,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5918,
                  "end": 5938,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5934,
                      "end": 5937,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5918,
                    "end": 5933,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5918,
                      "end": 5925,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5926,
                      "end": 5933,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5940,
                "end": 5948,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 5946,
                  "end": 5948,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5905,
              "end": 5911,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5905,
                "end": 5906,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5907,
                "end": 5911,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 5970,
                "end": 5996,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 5976,
                  "end": 5996,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 5992,
                      "end": 5995,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5976,
                    "end": 5991,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5976,
                      "end": 5983,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5984,
                      "end": 5991,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 5998,
                "end": 6013,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5963,
              "end": 5969,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5963,
                "end": 5964,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5965,
                "end": 5969,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6035,
                "end": 6061,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6041,
                  "end": 6061,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6057,
                      "end": 6060,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6041,
                    "end": 6056,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6041,
                      "end": 6048,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6049,
                      "end": 6056,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6063,
                "end": 6087,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6069,
                  "end": 6087,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6085,
                      "end": 6086,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6069,
                    "end": 6084,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6069,
                      "end": 6076,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6077,
                      "end": 6084,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6028,
              "end": 6034,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6028,
                "end": 6029,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6030,
                "end": 6034,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6109,
                "end": 6135,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6115,
                  "end": 6135,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6131,
                      "end": 6134,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6115,
                    "end": 6130,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6115,
                      "end": 6122,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6123,
                      "end": 6130,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6137,
                "end": 6160,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6143,
                  "end": 6160,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6158,
                      "end": 6159,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6143,
                    "end": 6157,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6143,
                      "end": 6150,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6151,
                      "end": 6157,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6102,
              "end": 6108,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6102,
                "end": 6103,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6104,
                "end": 6108,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6183,
                "end": 6208,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6189,
                  "end": 6208,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6204,
                      "end": 6207,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6189,
                    "end": 6203,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6189,
                      "end": 6196,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6197,
                      "end": 6203,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
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
            "callee": {
              "type": "MemberExpression",
              "start": 6176,
              "end": 6182,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6176,
                "end": 6177,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6178,
                "end": 6182,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6241,
                "end": 6266,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6247,
                  "end": 6266,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6262,
                      "end": 6265,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6247,
                    "end": 6261,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6247,
                      "end": 6254,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6255,
                      "end": 6261,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 6268,
                "end": 6272,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6234,
              "end": 6240,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6234,
                "end": 6235,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6236,
                "end": 6240,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6294,
                "end": 6319,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6300,
                  "end": 6319,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6315,
                      "end": 6318,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6300,
                    "end": 6314,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6300,
                      "end": 6307,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6308,
                      "end": 6314,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6321,
                "end": 6328,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 6327,
                  "end": 6328,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6287,
              "end": 6293,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6287,
                "end": 6288,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6289,
                "end": 6293,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6350,
                "end": 6375,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6356,
                  "end": 6375,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6371,
                      "end": 6374,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6356,
                    "end": 6370,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6356,
                      "end": 6363,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6364,
                      "end": 6370,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6377,
                "end": 6384,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 6383,
                  "end": 6384,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6343,
              "end": 6349,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6343,
                "end": 6344,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6345,
                "end": 6349,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6406,
                "end": 6431,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6412,
                  "end": 6431,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6427,
                      "end": 6430,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6412,
                    "end": 6426,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6412,
                      "end": 6419,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6420,
                      "end": 6426,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6433,
                "end": 6448,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 6439,
                  "end": 6448,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6399,
              "end": 6405,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6399,
                "end": 6400,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6401,
                "end": 6405,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6470,
                "end": 6495,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6476,
                  "end": 6495,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6491,
                      "end": 6494,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6476,
                    "end": 6490,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6476,
                      "end": 6483,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6484,
                      "end": 6490,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6497,
                "end": 6507,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 6503,
                  "end": 6507,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6463,
              "end": 6469,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6463,
                "end": 6464,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6465,
                "end": 6469,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6529,
                "end": 6554,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6535,
                  "end": 6554,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6550,
                      "end": 6553,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6535,
                    "end": 6549,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6535,
                      "end": 6542,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6543,
                      "end": 6549,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6556,
                "end": 6564,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 6562,
                  "end": 6564,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6522,
              "end": 6528,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6522,
                "end": 6523,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6524,
                "end": 6528,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6586,
                "end": 6611,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6592,
                  "end": 6611,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6607,
                      "end": 6610,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6592,
                    "end": 6606,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6592,
                      "end": 6599,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6600,
                      "end": 6606,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6613,
                "end": 6628,
                "async": false,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6579,
              "end": 6585,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6579,
                "end": 6580,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6581,
                "end": 6585,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6650,
                "end": 6675,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6656,
                  "end": 6675,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6671,
                      "end": 6674,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6656,
                    "end": 6670,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6656,
                      "end": 6663,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6664,
                      "end": 6670,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6677,
                "end": 6701,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6683,
                  "end": 6701,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6699,
                      "end": 6700,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6683,
                    "end": 6698,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6683,
                      "end": 6690,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6691,
                      "end": 6698,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6643,
              "end": 6649,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6643,
                "end": 6644,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6645,
                "end": 6649,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 6723,
                "end": 6748,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6729,
                  "end": 6748,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6744,
                      "end": 6747,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6729,
                    "end": 6743,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6729,
                      "end": 6736,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6737,
                      "end": 6743,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 6750,
                "end": 6773,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 6756,
                  "end": 6773,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 6771,
                      "end": 6772,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6756,
                    "end": 6770,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 6756,
                      "end": 6763,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 6764,
                      "end": 6770,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6716,
              "end": 6722,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6716,
                "end": 6717,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6718,
                "end": 6722,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
