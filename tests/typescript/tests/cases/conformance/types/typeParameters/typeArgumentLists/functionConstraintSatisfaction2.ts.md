__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 105,
  "end": 813,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 138,
          "end": 142,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 142,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 142,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "T",
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
        "start": 143,
        "end": 146,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 146,
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
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
        "start": 147,
        "end": 160,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 149,
            "end": 158,
            "argument": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 169,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 168,
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 165,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 167,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 187,
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 173,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 174,
            "end": 183,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 180,
              "end": 183,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 206,
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 192,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 193,
            "end": 194,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 196,
            "end": 205,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 205,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 209,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 222,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 254,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 233,
              "end": 254,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 243,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 237,
                      "end": 243
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 245,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 248,
                  "end": 254
                }
              }
            },
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
          "start": 256,
          "end": 260,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 260,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 259,
              "end": 260,
              "typeName": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "T",
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
        "start": 261,
        "end": 264,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 263,
          "end": 264,
          "typeName": {
            "type": "Identifier",
            "start": 263,
            "end": 264,
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
        "start": 265,
        "end": 278,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 267,
            "end": 276,
            "argument": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 280,
      "end": 308,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 287,
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
        "start": 288,
        "end": 308,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 294,
            "end": 306,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 297,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 305,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 345,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 344,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 317,
                "end": 344,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 319,
                    "end": 342,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 324,
                        "end": 333,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 325,
                          "end": 333,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 327,
                            "end": 333
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 334,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 336,
                        "end": 342
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
      "type": "ClassDeclaration",
      "start": 347,
      "end": 374,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 355,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 355,
        "end": 358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 356,
            "end": 357,
            "name": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
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
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 359,
        "end": 374,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 372,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 368,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 370,
                "end": 371,
                "typeName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 405,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 404,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 404,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 384,
                "end": 404,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 386,
                    "end": 402,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 390,
                      "end": 393,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 391,
                          "end": 392,
                          "name": {
                            "type": "Identifier",
                            "start": 391,
                            "end": 392,
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
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 394,
                        "end": 398,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 395,
                          "end": 398,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 397,
                            "end": 398,
                            "typeName": {
                              "type": "Identifier",
                              "start": 397,
                              "end": 398,
                              "decorators": [],
                              "name": "T",
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
                      "start": 399,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 401,
                        "end": 402,
                        "typeName": {
                          "type": "Identifier",
                          "start": 401,
                          "end": 402,
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
      "start": 407,
      "end": 436,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 415,
            "end": 435,
            "callee": {
              "type": "Identifier",
              "start": 415,
              "end": 419,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 420,
                "end": 434,
                "callee": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 432,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
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
      "start": 437,
      "end": 471,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 446,
            "end": 470,
            "callee": {
              "type": "Identifier",
              "start": 446,
              "end": 450,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 451,
                "end": 469,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 452,
                    "end": 463,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 453,
                      "end": 463,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 455,
                        "end": 463,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 455,
                          "end": 461
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
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
      "start": 472,
      "end": 489,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 488,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 478,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 481,
            "end": 488,
            "callee": {
              "type": "Identifier",
              "start": 481,
              "end": 485,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 486,
                "end": 487,
                "decorators": [],
                "name": "C",
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
      "start": 490,
      "end": 507,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 496,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 499,
            "end": 506,
            "callee": {
              "type": "Identifier",
              "start": 499,
              "end": 503,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "decorators": [],
                "name": "b",
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
      "start": 508,
      "end": 538,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 514,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 517,
            "end": 537,
            "callee": {
              "type": "Identifier",
              "start": 517,
              "end": 521,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 522,
                "end": 536,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 522,
                  "end": 525,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 523,
                      "end": 524,
                      "name": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 524,
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
                    "start": 526,
                    "end": 530,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 527,
                      "end": 530,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 529,
                        "end": 530,
                        "typeName": {
                          "type": "Identifier",
                          "start": 529,
                          "end": 530,
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
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
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
      "start": 560,
      "end": 600,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 567,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 570,
            "end": 599,
            "callee": {
              "type": "Identifier",
              "start": 570,
              "end": 574,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 575,
                "end": 598,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 575,
                  "end": 581,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 576,
                      "end": 577,
                      "name": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 577,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 579,
                      "end": 580,
                      "name": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 580,
                        "decorators": [],
                        "name": "V",
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
                    "start": 582,
                    "end": 586,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 583,
                      "end": 586,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 585,
                        "end": 586,
                        "typeName": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 586,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 588,
                    "end": 592,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 589,
                      "end": 592,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 591,
                        "end": 592,
                        "typeName": {
                          "type": "Identifier",
                          "start": 591,
                          "end": 592,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
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
      "start": 601,
      "end": 620,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 605,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 605,
            "end": 608,
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 611,
            "end": 619,
            "callee": {
              "type": "Identifier",
              "start": 611,
              "end": 615,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 616,
                "end": 618,
                "decorators": [],
                "name": "C2",
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
      "start": 621,
      "end": 640,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 639,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 628,
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 631,
            "end": 639,
            "callee": {
              "type": "Identifier",
              "start": 631,
              "end": 635,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 636,
                "end": 638,
                "decorators": [],
                "name": "b2",
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
      "type": "TSInterfaceDeclaration",
      "start": 642,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 652,
        "end": 654,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 663,
          "end": 671,
          "expression": {
            "type": "Identifier",
            "start": 663,
            "end": 671,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 672,
        "end": 688,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 674,
            "end": 686,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 674,
              "end": 677,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 685,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 679,
                "end": 685
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
      "start": 689,
      "end": 700,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 693,
          "end": 699,
          "id": {
            "type": "Identifier",
            "start": 693,
            "end": 699,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 695,
              "end": 699,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 697,
                "end": 699,
                "typeName": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 699,
                  "decorators": [],
                  "name": "F2",
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
      "start": 701,
      "end": 720,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 705,
            "end": 708,
            "decorators": [],
            "name": "r16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 711,
            "end": 719,
            "callee": {
              "type": "Identifier",
              "start": 711,
              "end": 715,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 716,
                "end": 718,
                "decorators": [],
                "name": "f2",
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
      "type": "FunctionDeclaration",
      "start": 722,
      "end": 813,
      "id": {
        "type": "Identifier",
        "start": 731,
        "end": 734,
        "decorators": [],
        "name": "fff",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 734,
        "end": 771,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 735,
            "end": 757,
            "name": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 745,
              "end": 757,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 747,
                  "end": 755,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 749,
                    "end": 755,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 751,
                      "end": 755
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 759,
            "end": 770,
            "name": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 769,
              "end": 770,
              "typeName": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 772,
          "end": 776,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 773,
            "end": 776,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 775,
              "end": 776,
              "typeName": {
                "type": "Identifier",
                "start": 775,
                "end": 776,
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
          "start": 778,
          "end": 782,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 779,
            "end": 782,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 781,
              "end": 782,
              "typeName": {
                "type": "Identifier",
                "start": 781,
                "end": 782,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 784,
        "end": 813,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 790,
            "end": 798,
            "expression": {
              "type": "CallExpression",
              "start": 790,
              "end": 797,
              "callee": {
                "type": "Identifier",
                "start": 790,
                "end": 794,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 803,
            "end": 811,
            "expression": {
              "type": "CallExpression",
              "start": 803,
              "end": 810,
              "callee": {
                "type": "Identifier",
                "start": 803,
                "end": 807,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 808,
                  "end": 809,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
