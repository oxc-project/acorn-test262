__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 105,
  "end": 814,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "name": "foo",
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
          "start": 138,
          "end": 142,
          "name": "x",
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
        }
      ],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 167,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 174,
            "end": 183,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 180,
              "end": 183,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 205,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "foo2",
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
          "start": 256,
          "end": 260,
          "name": "x",
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
        }
      ],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 237,
                      "end": 243
                    }
                  },
                  "decorators": [],
                  "optional": false
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
      "type": "ClassDeclaration",
      "start": 280,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 287,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 288,
        "end": 308,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 294,
            "end": 306,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 297,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "start": 310,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 344,
            "name": "b",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 325,
                          "end": 333,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 327,
                            "end": 333
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "type": "ClassDeclaration",
      "start": 347,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 355,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 359,
        "end": 374,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 372,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 368,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
      "start": 376,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 404,
            "name": "b2",
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
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 394,
                        "end": 398,
                        "name": "x",
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
      "start": 407,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 415,
            "end": 435,
            "callee": {
              "type": "Identifier",
              "start": 415,
              "end": 419,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 420,
                "end": 434,
                "callee": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 432,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 437,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 446,
            "end": 470,
            "callee": {
              "type": "Identifier",
              "start": 446,
              "end": 450,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 451,
                "end": 469,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 452,
                    "end": 463,
                    "name": "x",
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 472,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 488,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 478,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 481,
            "end": 488,
            "callee": {
              "type": "Identifier",
              "start": 481,
              "end": 485,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 486,
                "end": 487,
                "name": "C",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 496,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 499,
            "end": 506,
            "callee": {
              "type": "Identifier",
              "start": 499,
              "end": 503,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "name": "b",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 514,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 517,
            "end": 537,
            "callee": {
              "type": "Identifier",
              "start": 517,
              "end": 521,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 522,
                "end": 536,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 526,
                    "end": 530,
                    "name": "x",
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
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 567,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 570,
            "end": 599,
            "callee": {
              "type": "Identifier",
              "start": 570,
              "end": 574,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 575,
                "end": 598,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 582,
                    "end": 586,
                    "name": "x",
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
                  },
                  {
                    "type": "Identifier",
                    "start": 588,
                    "end": 592,
                    "name": "y",
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
                          "name": "V",
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
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 579,
                      "end": 580,
                      "name": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 580,
                        "name": "V",
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
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 601,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 605,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 605,
            "end": 608,
            "name": "r13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 611,
            "end": 619,
            "callee": {
              "type": "Identifier",
              "start": 611,
              "end": 615,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 616,
                "end": 618,
                "name": "C2",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 621,
      "end": 640,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 639,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 628,
            "name": "r14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 631,
            "end": 639,
            "callee": {
              "type": "Identifier",
              "start": 631,
              "end": 635,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 636,
                "end": 638,
                "name": "b2",
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
      "kind": "var",
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
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 663,
          "end": 671,
          "expression": {
            "type": "Identifier",
            "start": 663,
            "end": 671,
            "name": "Function",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 693,
          "end": 699,
          "id": {
            "type": "Identifier",
            "start": 693,
            "end": 699,
            "name": "f2",
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
                  "name": "F2",
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
      "start": 701,
      "end": 720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 705,
            "end": 708,
            "name": "r16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 711,
            "end": 719,
            "callee": {
              "type": "Identifier",
              "start": 711,
              "end": 715,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 716,
                "end": 718,
                "name": "f2",
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
      "kind": "var",
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
        "name": "fff",
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
          "start": 772,
          "end": 776,
          "name": "x",
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
          "start": 778,
          "end": 782,
          "name": "y",
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
                "name": "foo2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
                "name": "foo2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 808,
                  "end": 809,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 769,
              "end": 770,
              "typeName": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
