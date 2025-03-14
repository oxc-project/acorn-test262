assignmentCompatWithConstructSignatures2.ts
```json
{
  "type": "Program",
  "start": 110,
  "end": 734,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 110,
      "end": 157,
      "body": {
        "type": "TSInterfaceBody",
        "start": 122,
        "end": 157,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 128,
            "end": 155,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 154,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 131,
                "end": 154,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 136,
                    "end": 145,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 145,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 139,
                        "end": 145
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 150,
                    "end": 154
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "T",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 166,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
      "start": 168,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 205,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 175,
                "end": 205,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 177,
                    "end": 203,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 180,
                        "end": 203,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 185,
                            "end": 194,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 186,
                              "end": 194,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 188,
                                "end": 194
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 196,
                          "end": 203,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 199,
                            "end": 203
                          }
                        }
                      }
                    }
                  }
                ]
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
      "start": 208,
      "end": 214,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 213,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 221,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 220,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 215,
          "end": 216,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "t",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 272,
      "body": {
        "type": "TSInterfaceBody",
        "start": 235,
        "end": 272,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 241,
            "end": 270,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 269,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 244,
                "end": 269,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 249,
                    "end": 258,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 250,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 252,
                        "end": 258
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 269,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 263,
                    "end": 269
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 234,
        "decorators": [],
        "name": "S",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 281,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "S",
                  "optional": false
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
      "start": 283,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 323,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 323,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 291,
                "end": 323,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 293,
                    "end": 321,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 294,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 294,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 296,
                        "end": 321,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 301,
                            "end": 310,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 302,
                              "end": 310,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 304,
                                "end": 310
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 312,
                          "end": 321,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 315,
                            "end": 321
                          }
                        }
                      }
                    }
                  }
                ]
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
      "start": 325,
      "end": 331,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 325,
          "end": 326,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 329,
          "end": 330,
          "decorators": [],
          "name": "s",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 339,
      "expression": {
        "type": "AssignmentExpression",
        "start": 332,
        "end": 338,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 332,
          "end": 333,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 336,
          "end": 338,
          "decorators": [],
          "name": "a2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 346,
      "expression": {
        "type": "AssignmentExpression",
        "start": 340,
        "end": 345,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 340,
          "end": 341,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 344,
          "end": 345,
          "decorators": [],
          "name": "s",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 347,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 347,
          "end": 348,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 351,
          "end": 353,
          "decorators": [],
          "name": "a2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 378,
      "expression": {
        "type": "AssignmentExpression",
        "start": 366,
        "end": 377,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 370,
          "end": 377,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 376,
            "end": 377,
            "raw": "1",
            "value": 1
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 418,
      "expression": {
        "type": "AssignmentExpression",
        "start": 379,
        "end": 418,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 379,
          "end": 380,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 383,
          "end": 418,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 404,
            "end": 418,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 406,
                "end": 416,
                "argument": {
                  "type": "Literal",
                  "start": 413,
                  "end": 415,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 393,
              "end": 402,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 394,
                "end": 402,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 396,
                  "end": 402
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 431,
      "expression": {
        "type": "AssignmentExpression",
        "start": 419,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 419,
          "end": 420,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 423,
          "end": 430,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 429,
            "end": 430,
            "raw": "1",
            "value": 1
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 471,
      "expression": {
        "type": "AssignmentExpression",
        "start": 432,
        "end": 471,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 432,
          "end": 433,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 436,
          "end": 471,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 457,
            "end": 471,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 459,
                "end": 469,
                "argument": {
                  "type": "Literal",
                  "start": 466,
                  "end": 468,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 446,
              "end": 455,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 447,
                "end": 455,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 449,
                  "end": 455
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 473,
      "end": 513,
      "body": {
        "type": "TSInterfaceBody",
        "start": 486,
        "end": 513,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 492,
            "end": 511,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 494,
                "end": 503,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 495,
                  "end": 503,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 497,
                    "end": 503
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 510,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 506,
                "end": 510
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 485,
        "decorators": [],
        "name": "S2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 514,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 518,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 518,
            "end": 524,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 524,
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 524,
                  "decorators": [],
                  "name": "S2",
                  "optional": false
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
      "start": 526,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 556,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 556,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 556,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 534,
                "end": 556,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 536,
                    "end": 554,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 538,
                        "end": 547,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 539,
                          "end": 547,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 541,
                            "end": 547
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 548,
                      "end": 554,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 550,
                        "end": 554
                      }
                    },
                    "static": false
                  }
                ]
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
      "start": 578,
      "end": 585,
      "expression": {
        "type": "AssignmentExpression",
        "start": 578,
        "end": 584,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 578,
          "end": 579,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 582,
          "end": 584,
          "decorators": [],
          "name": "s2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 593,
      "expression": {
        "type": "AssignmentExpression",
        "start": 586,
        "end": 592,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 586,
          "end": 587,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 590,
          "end": 592,
          "decorators": [],
          "name": "a3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 594,
      "end": 615,
      "expression": {
        "type": "AssignmentExpression",
        "start": 594,
        "end": 614,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 594,
          "end": 595,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 598,
          "end": 614,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 613,
            "end": 614,
            "raw": "1",
            "value": 1
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 599,
              "end": 608,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 600,
                "end": 608,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 602,
                  "end": 608
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 655,
      "expression": {
        "type": "AssignmentExpression",
        "start": 616,
        "end": 655,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 616,
          "end": 617,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 620,
          "end": 655,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 641,
            "end": 655,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 643,
                "end": 653,
                "argument": {
                  "type": "Literal",
                  "start": 650,
                  "end": 652,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 630,
              "end": 639,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 631,
                "end": 639,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 633,
                  "end": 639
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 656,
      "end": 663,
      "expression": {
        "type": "AssignmentExpression",
        "start": 656,
        "end": 662,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 656,
          "end": 657,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 660,
          "end": 662,
          "decorators": [],
          "name": "s2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 664,
      "end": 671,
      "expression": {
        "type": "AssignmentExpression",
        "start": 664,
        "end": 670,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 664,
          "end": 665,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 668,
          "end": 670,
          "decorators": [],
          "name": "a3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 672,
      "end": 693,
      "expression": {
        "type": "AssignmentExpression",
        "start": 672,
        "end": 692,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 672,
          "end": 673,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 676,
          "end": 692,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 691,
            "end": 692,
            "raw": "1",
            "value": 1
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 677,
              "end": 686,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 678,
                "end": 686,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 680,
                  "end": 686
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 694,
      "end": 733,
      "expression": {
        "type": "AssignmentExpression",
        "start": 694,
        "end": 733,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 694,
          "end": 695,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 698,
          "end": 733,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 719,
            "end": 733,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 721,
                "end": 731,
                "argument": {
                  "type": "Literal",
                  "start": 728,
                  "end": 730,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 708,
              "end": 717,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 709,
                "end": 717,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 711,
                  "end": 717
                }
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
