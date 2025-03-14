__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 930,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 38,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 38,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 36,
            "argument": {
              "type": "Literal",
              "start": 34,
              "end": 35,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 24,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 15,
          "end": 24,
          "exprName": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "fn",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "fn",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 88,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 88,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 88,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 82,
                    "end": 88
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 91,
            "end": 93,
            "decorators": [],
            "name": "fn",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 123,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 123,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 109,
                "end": 123,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 115,
                    "end": 123,
                    "exprName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 146,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 146,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 132,
                "end": 146,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 146,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 138,
                    "end": 146,
                    "exprName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 178,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 173,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 173,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 164,
              "end": 173,
              "exprName": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "decorators": [],
                "name": "f1",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 180,
      "end": 208,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 205,
        "end": 208,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 191,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 193,
        "end": 204,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 195,
          "end": 204,
          "exprName": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "g2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 210,
      "end": 238,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 235,
        "end": 238,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 221,
        "decorators": [],
        "name": "g2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 223,
        "end": 234,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 225,
          "end": 234,
          "exprName": {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "decorators": [],
            "name": "f2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 259,
      "body": {
        "type": "TSInterfaceBody",
        "start": 256,
        "end": 259,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 252,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 254,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 288,
        "end": 302,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 290,
            "end": 300,
            "argument": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "decorators": [],
              "name": "f3",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 271,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 273,
        "end": 287,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 275,
          "end": 287,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 276,
            "end": 287,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 277,
                "end": 286,
                "exprName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 286,
                  "decorators": [],
                  "name": "f3",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 275,
            "end": 276,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 317,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 317,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 311,
                "end": 317
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 320,
            "end": 322,
            "decorators": [],
            "name": "f3",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 334,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 375,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 375,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 372,
                "end": 375,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 358,
                  "end": 371,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 361,
                      "end": 371,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 368,
                        "end": 371,
                        "left": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 369,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 371,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 341,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 378,
      "end": 385,
      "expression": {
        "type": "CallExpression",
        "start": 378,
        "end": 384,
        "arguments": [
          {
            "type": "Literal",
            "start": 382,
            "end": 383,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 378,
          "end": 381,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 378,
            "end": 379,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 419,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 419,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 404,
                "end": 419,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 419,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 410,
                    "end": 419,
                    "exprName": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 419,
                      "decorators": [],
                      "name": "f4",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 428,
      "expression": {
        "type": "AssignmentExpression",
        "start": 421,
        "end": 427,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 421,
          "end": 423,
          "decorators": [],
          "name": "f4",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 426,
          "end": 427,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 439,
      "end": 467,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 453,
        "end": 467,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 455,
            "end": 465,
            "argument": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
              "decorators": [],
              "name": "f5",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 448,
        "end": 450,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 469,
      "end": 494,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 480,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 482,
        "end": 493,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 484,
          "end": 493,
          "exprName": {
            "type": "Identifier",
            "start": 491,
            "end": 493,
            "decorators": [],
            "name": "f6",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 495,
      "end": 535,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 506,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 507,
          "end": 519,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 508,
            "end": 519,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 510,
              "end": 519,
              "exprName": {
                "type": "Identifier",
                "start": 517,
                "end": 519,
                "decorators": [],
                "name": "f6",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 520,
        "end": 534,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 522,
          "end": 534,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 525,
            "end": 534,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 528,
              "end": 534
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 536,
      "end": 571,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 557,
        "end": 571,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 559,
            "end": 569,
            "argument": {
              "type": "Identifier",
              "start": 566,
              "end": 568,
              "decorators": [],
              "name": "f6",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 545,
        "end": 547,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 548,
          "end": 555,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 550,
            "end": 555,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 552,
              "end": 555
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 573,
      "end": 583,
      "expression": {
        "type": "CallExpression",
        "start": 573,
        "end": 582,
        "arguments": [
          {
            "type": "Literal",
            "start": 576,
            "end": 578,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 580,
            "end": 581,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 573,
          "end": 575,
          "decorators": [],
          "name": "f6",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 617,
      "expression": {
        "type": "CallExpression",
        "start": 610,
        "end": 616,
        "arguments": [
          {
            "type": "Literal",
            "start": 613,
            "end": 615,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 610,
          "end": 612,
          "decorators": [],
          "name": "f6",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 654,
      "end": 659,
      "expression": {
        "type": "CallExpression",
        "start": 654,
        "end": 658,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 654,
          "end": 656,
          "decorators": [],
          "name": "f6",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 667,
      "end": 700,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 684,
        "end": 686,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 688,
        "end": 699,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 690,
          "end": 699,
          "exprName": {
            "type": "Identifier",
            "start": 697,
            "end": 699,
            "decorators": [],
            "name": "f7",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 701,
      "end": 749,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 718,
        "end": 720,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 721,
          "end": 733,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 722,
            "end": 733,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 724,
              "end": 733,
              "exprName": {
                "type": "Identifier",
                "start": 731,
                "end": 733,
                "decorators": [],
                "name": "f7",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 734,
        "end": 748,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 736,
          "end": 748,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 739,
            "end": 748,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 742,
              "end": 748
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 750,
      "end": 789,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 767,
        "end": 769,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 770,
          "end": 779,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 771,
            "end": 779,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 773,
              "end": 779
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 780,
        "end": 788,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 782,
          "end": 788
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 790,
      "end": 836,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 807,
        "end": 809,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 810,
          "end": 823,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 823,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 814,
              "end": 823,
              "exprName": {
                "type": "Identifier",
                "start": 821,
                "end": 823,
                "decorators": [],
                "name": "f7",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 824,
        "end": 835,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 826,
          "end": 835,
          "exprName": {
            "type": "Identifier",
            "start": 833,
            "end": 835,
            "decorators": [],
            "name": "f7",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 838,
      "end": 848,
      "expression": {
        "type": "CallExpression",
        "start": 838,
        "end": 847,
        "arguments": [
          {
            "type": "Literal",
            "start": 841,
            "end": 843,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 845,
            "end": 846,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 838,
          "end": 840,
          "decorators": [],
          "name": "f7",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 875,
      "end": 882,
      "expression": {
        "type": "CallExpression",
        "start": 875,
        "end": 881,
        "arguments": [
          {
            "type": "Literal",
            "start": 878,
            "end": 880,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 875,
          "end": 877,
          "decorators": [],
          "name": "f7",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 924,
      "expression": {
        "type": "CallExpression",
        "start": 919,
        "end": 923,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 919,
          "end": 921,
          "decorators": [],
          "name": "f7",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
