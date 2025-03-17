__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 154,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 131,
                "end": 154,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 136,
                    "end": 145,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 145,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 139,
                        "end": 145
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 166,
            "name": "t",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 205,
            "name": "a",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 180,
                        "end": 203,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 185,
                            "end": 194,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 186,
                              "end": 194,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 188,
                                "end": 194
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "declare": false
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 234,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 269,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 244,
                "end": 269,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 249,
                    "end": 258,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 250,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 252,
                        "end": 258
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 281,
            "name": "s",
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
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 323,
            "name": "a2",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 294,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 294,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 296,
                        "end": 321,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 301,
                            "end": 310,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 302,
                              "end": 310,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 304,
                                "end": 310
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "declare": false
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 329,
          "end": 330,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 336,
          "end": 338,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 344,
          "end": 345,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 351,
          "end": 353,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 370,
          "end": 377,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 376,
            "end": 377,
            "value": 1,
            "raw": "1"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 383,
          "end": 418,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 393,
              "end": 402,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 394,
                "end": 402,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 396,
                  "end": 402
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 423,
          "end": 430,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 429,
            "end": 430,
            "value": 1,
            "raw": "1"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 436,
          "end": 471,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 446,
              "end": 455,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 447,
                "end": 455,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 449,
                  "end": 455
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 473,
      "end": 513,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 485,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 486,
        "end": 513,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 492,
            "end": 511,
            "key": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 494,
                "end": 503,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 495,
                  "end": 503,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 497,
                    "end": 503
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 518,
            "end": 524,
            "name": "s2",
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
                  "name": "S2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 556,
            "name": "a3",
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
                    "key": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 538,
                        "end": 547,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 539,
                          "end": 547,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 541,
                            "end": 547
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "declare": false
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 582,
          "end": 584,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 590,
          "end": 592,
          "name": "a3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 598,
          "end": 614,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 599,
              "end": 608,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 600,
                "end": 608,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 602,
                  "end": 608
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Literal",
            "start": 613,
            "end": 614,
            "value": 1,
            "raw": "1"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 620,
          "end": 655,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 630,
              "end": 639,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 631,
                "end": 639,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 633,
                  "end": 639
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 660,
          "end": 662,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 668,
          "end": 670,
          "name": "a3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 676,
          "end": 692,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 677,
              "end": 686,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 678,
                "end": 686,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 680,
                  "end": 686
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Literal",
            "start": 691,
            "end": 692,
            "value": 1,
            "raw": "1"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 698,
          "end": 733,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 708,
              "end": 717,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 709,
                "end": 717,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 711,
                  "end": 717
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "value": "",
                  "raw": "''"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
