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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 120,
          "end": 124,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 126,
          "end": 130,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 178,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 161,
            "end": 177,
            "callee": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 222,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 274,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 233,
            "end": 274,
            "expression": false,
            "async": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 240,
                "end": 244,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 246,
                "end": 250,
                "decorators": [],
                "name": "y",
                "optional": false,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 302,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 281,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 284,
            "end": 301,
            "callee": {
              "type": "Identifier",
              "start": 284,
              "end": 286,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 347,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 310,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 313,
            "end": 346,
            "callee": {
              "type": "Identifier",
              "start": 313,
              "end": 315,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 383,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 383,
            "decorators": [],
            "name": "f3",
            "optional": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 372,
                        "end": 376,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
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
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 411,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 390,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 393,
            "end": 410,
            "callee": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 412,
      "end": 456,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 422,
            "end": 455,
            "callee": {
              "type": "Identifier",
              "start": 422,
              "end": 424,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 458,
      "end": 525,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 465,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 466,
        "end": 525,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 472,
            "end": 523,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 523,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 480,
                  "end": 484,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 486,
                  "end": 490,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 526,
      "end": 562,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 561,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 532,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 570,
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 650,
                "end": 654,
                "decorators": [],
                "name": "y",
                "optional": false,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 670,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 670,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 672,
      "end": 700,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 676,
          "end": 699,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 678,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 746,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 705,
            "end": 708,
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 748,
      "end": 816,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 756,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 763,
        "end": 816,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 769,
            "end": 814,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 769,
              "end": 770,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 770,
              "end": 814,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 771,
                  "end": 775,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 777,
                  "end": 781,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 854,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 853,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 823,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 837,
                "end": 838,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 909,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 908,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 862,
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 876,
                "end": 877,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 944,
                "end": 948,
                "decorators": [],
                "name": "y",
                "optional": false,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 960,
          "end": 982,
          "id": {
            "type": "Identifier",
            "start": 960,
            "end": 982,
            "decorators": [],
            "name": "i2",
            "optional": false,
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
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 984,
      "end": 1013,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 988,
          "end": 1012,
          "id": {
            "type": "Identifier",
            "start": 988,
            "end": 990,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 996,
                "end": 997,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1014,
      "end": 1060,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1018,
          "end": 1059,
          "id": {
            "type": "Identifier",
            "start": 1018,
            "end": 1021,
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1027,
                "end": 1028,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
