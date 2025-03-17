__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 1060,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "f",
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
          "start": 120,
          "end": 124,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
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
        {
          "type": "Identifier",
          "start": 126,
          "end": 130,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 130,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 129,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 151,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 149,
            "argument": {
              "type": "Literal",
              "start": 144,
              "end": 148,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 134,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 133,
          "end": 134,
          "typeName": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 161,
            "end": 177,
            "callee": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 171,
                "end": 172,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 174,
                "end": 176,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 162,
              "end": 170,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 163,
                  "end": 169
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 218,
                "end": 220,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 190,
              "end": 214,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 191,
                  "end": 197
                },
                {
                  "type": "TSStringKeyword",
                  "start": 199,
                  "end": 205
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 207,
                  "end": 213
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 233,
            "end": 274,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 240,
                "end": 244,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 241,
                  "end": 244,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 244,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
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
              {
                "type": "Identifier",
                "start": 246,
                "end": 250,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 247,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 249,
                    "end": 250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 258,
              "end": 274,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 260,
                  "end": 272,
                  "argument": {
                    "type": "Literal",
                    "start": 267,
                    "end": 271,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 233,
              "end": 239,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 234,
                  "end": 235,
                  "name": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 237,
                  "end": 238,
                  "name": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 281,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 284,
            "end": 301,
            "callee": {
              "type": "Identifier",
              "start": 284,
              "end": 286,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 295,
                "end": 296,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 298,
                "end": 300,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 286,
              "end": 294,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 287,
                  "end": 293
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 310,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 313,
            "end": 346,
            "callee": {
              "type": "Identifier",
              "start": 313,
              "end": 315,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 340,
                "end": 341,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 343,
                "end": 345,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 315,
              "end": 339,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 316,
                  "end": 322
                },
                {
                  "type": "TSStringKeyword",
                  "start": 324,
                  "end": 330
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 332,
                  "end": 338
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 383,
            "name": "f3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 383,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 357,
                "end": 383,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 359,
                    "end": 381,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 359,
                      "end": 365,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 360,
                          "end": 361,
                          "name": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 361,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 363,
                          "end": 364,
                          "name": {
                            "type": "Identifier",
                            "start": 363,
                            "end": 364,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 366,
                        "end": 370,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 367,
                          "end": 370,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 369,
                            "end": 370,
                            "typeName": {
                              "type": "Identifier",
                              "start": 369,
                              "end": 370,
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
                      {
                        "type": "Identifier",
                        "start": 372,
                        "end": 376,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 373,
                          "end": 376,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 375,
                            "end": 376,
                            "typeName": {
                              "type": "Identifier",
                              "start": 375,
                              "end": 376,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 377,
                      "end": 380,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 379,
                        "end": 380,
                        "typeName": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 380,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
      "type": "VariableDeclaration",
      "start": 384,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 390,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 393,
            "end": 410,
            "callee": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 404,
                "end": 405,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 407,
                "end": 409,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 395,
              "end": 403,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 396,
                  "end": 402
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 412,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 422,
            "end": 455,
            "callee": {
              "type": "Identifier",
              "start": 422,
              "end": 424,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 449,
                "end": 450,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 452,
                "end": 454,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 424,
              "end": 448,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 425,
                  "end": 431
                },
                {
                  "type": "TSStringKeyword",
                  "start": 433,
                  "end": 439
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 441,
                  "end": 447
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 458,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 465,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 466,
        "end": 525,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 472,
            "end": 523,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 523,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 480,
                  "end": 484,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 484,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 483,
                      "end": 484,
                      "typeName": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
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
                {
                  "type": "Identifier",
                  "start": 486,
                  "end": 490,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 487,
                    "end": 490,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 489,
                      "end": 490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 495,
                "end": 523,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 505,
                    "end": 517,
                    "argument": {
                      "type": "Literal",
                      "start": 512,
                      "end": 516,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 473,
                "end": 479,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 474,
                    "end": 475,
                    "name": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 475,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 477,
                    "end": 478,
                    "name": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 478,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 491,
                "end": 494,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 493,
                  "end": 494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "VariableDeclaration",
      "start": 526,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 561,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 532,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 535,
            "end": 561,
            "callee": {
              "type": "MemberExpression",
              "start": 535,
              "end": 546,
              "object": {
                "type": "NewExpression",
                "start": 536,
                "end": 543,
                "callee": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "name": "f",
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
                "start": 555,
                "end": 556,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 558,
                "end": 560,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 546,
              "end": 554,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 547,
                  "end": 553
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 570,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 573,
            "end": 615,
            "callee": {
              "type": "MemberExpression",
              "start": 573,
              "end": 584,
              "object": {
                "type": "NewExpression",
                "start": 574,
                "end": 581,
                "callee": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 579,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "name": "f",
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
                "start": 609,
                "end": 610,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 612,
                "end": 614,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 584,
              "end": 608,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 585,
                  "end": 591
                },
                {
                  "type": "TSStringKeyword",
                  "start": 593,
                  "end": 599
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 601,
                  "end": 607
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 618,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 629,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 630,
        "end": 661,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 636,
            "end": 659,
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 637,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 637,
              "end": 643,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 638,
                  "end": 639,
                  "name": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 639,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 641,
                  "end": 642,
                  "name": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 642,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 644,
                "end": 648,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 645,
                  "end": 648,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 647,
                    "end": 648,
                    "typeName": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
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
              {
                "type": "Identifier",
                "start": 650,
                "end": 654,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 651,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 653,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 654,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 655,
              "end": 658,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 657,
                "end": 658,
                "typeName": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 658,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 662,
      "end": 671,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 670,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 670,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 670,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 669,
                "end": 670,
                "typeName": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "name": "I",
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
      "start": 672,
      "end": 700,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 676,
          "end": 699,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 678,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 681,
            "end": 699,
            "callee": {
              "type": "MemberExpression",
              "start": 681,
              "end": 684,
              "object": {
                "type": "Identifier",
                "start": 681,
                "end": 682,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "name": "f",
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
                "start": 693,
                "end": 694,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 696,
                "end": 698,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 684,
              "end": 692,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 685,
                  "end": 691
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 705,
            "end": 708,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 711,
            "end": 745,
            "callee": {
              "type": "MemberExpression",
              "start": 711,
              "end": 714,
              "object": {
                "type": "Identifier",
                "start": 711,
                "end": 712,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "name": "f",
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
                "start": 739,
                "end": 740,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 742,
                "end": 744,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 714,
              "end": 738,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 715,
                  "end": 721
                },
                {
                  "type": "TSStringKeyword",
                  "start": 723,
                  "end": 729
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 731,
                  "end": 737
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 748,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 756,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 763,
        "end": 816,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 769,
            "end": 814,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 769,
              "end": 770,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 770,
              "end": 814,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 771,
                  "end": 775,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 772,
                    "end": 775,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 774,
                      "end": 775,
                      "typeName": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
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
                {
                  "type": "Identifier",
                  "start": 777,
                  "end": 781,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 778,
                    "end": 781,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 780,
                      "end": 781,
                      "typeName": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 781,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 786,
                "end": 814,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 796,
                    "end": 808,
                    "argument": {
                      "type": "Literal",
                      "start": 803,
                      "end": 807,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 782,
                "end": 785,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 784,
                  "end": 785,
                  "typeName": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 785,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 756,
        "end": 762,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 757,
            "end": 758,
            "name": {
              "type": "Identifier",
              "start": 757,
              "end": 758,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 760,
            "end": 761,
            "name": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 853,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 823,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 826,
            "end": 853,
            "callee": {
              "type": "MemberExpression",
              "start": 826,
              "end": 838,
              "object": {
                "type": "NewExpression",
                "start": 827,
                "end": 835,
                "callee": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 833,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 837,
                "end": 838,
                "name": "f",
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
                "start": 847,
                "end": 848,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 850,
                "end": 852,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 838,
              "end": 846,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 839,
                  "end": 845
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 908,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 862,
            "name": "r6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 865,
            "end": 908,
            "callee": {
              "type": "MemberExpression",
              "start": 865,
              "end": 877,
              "object": {
                "type": "NewExpression",
                "start": 866,
                "end": 874,
                "callee": {
                  "type": "Identifier",
                  "start": 870,
                  "end": 872,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 876,
                "end": 877,
                "name": "f",
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
                "start": 902,
                "end": 903,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 905,
                "end": 907,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 877,
              "end": 901,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 878,
                  "end": 884
                },
                {
                  "type": "TSStringKeyword",
                  "start": 886,
                  "end": 892
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 894,
                  "end": 900
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 911,
      "end": 955,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 923,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 923,
        "end": 929,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 924,
            "end": 925,
            "name": {
              "type": "Identifier",
              "start": 924,
              "end": 925,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 927,
            "end": 928,
            "name": {
              "type": "Identifier",
              "start": 927,
              "end": 928,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 930,
        "end": 955,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 936,
            "end": 953,
            "key": {
              "type": "Identifier",
              "start": 936,
              "end": 937,
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
                "start": 938,
                "end": 942,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 939,
                  "end": 942,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 941,
                    "end": 942,
                    "typeName": {
                      "type": "Identifier",
                      "start": 941,
                      "end": 942,
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
              {
                "type": "Identifier",
                "start": 944,
                "end": 948,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 945,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 947,
                    "end": 948,
                    "typeName": {
                      "type": "Identifier",
                      "start": 947,
                      "end": 948,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 949,
              "end": 952,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 951,
                "end": 952,
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 952,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 956,
      "end": 983,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 960,
          "end": 982,
          "id": {
            "type": "Identifier",
            "start": 960,
            "end": 982,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 962,
              "end": 982,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 964,
                "end": 982,
                "typeName": {
                  "type": "Identifier",
                  "start": 964,
                  "end": 966,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 966,
                  "end": 982,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 967,
                      "end": 973
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 975,
                      "end": 981
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 984,
      "end": 1013,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 988,
          "end": 1012,
          "id": {
            "type": "Identifier",
            "start": 988,
            "end": 990,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 993,
            "end": 1012,
            "callee": {
              "type": "MemberExpression",
              "start": 993,
              "end": 997,
              "object": {
                "type": "Identifier",
                "start": 993,
                "end": 995,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 996,
                "end": 997,
                "name": "f",
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
                "start": 1006,
                "end": 1007,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1009,
                "end": 1011,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 997,
              "end": 1005,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 998,
                  "end": 1004
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1014,
      "end": 1060,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1018,
          "end": 1059,
          "id": {
            "type": "Identifier",
            "start": 1018,
            "end": 1021,
            "name": "r7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1024,
            "end": 1059,
            "callee": {
              "type": "MemberExpression",
              "start": 1024,
              "end": 1028,
              "object": {
                "type": "Identifier",
                "start": 1024,
                "end": 1026,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1027,
                "end": 1028,
                "name": "f",
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
                "start": 1053,
                "end": 1054,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1056,
                "end": 1058,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1028,
              "end": 1052,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1029,
                  "end": 1035
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1037,
                  "end": 1043
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1045,
                  "end": 1051
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
