__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 795,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
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
        "start": 77,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 88,
              "end": 109,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 109,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
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
          "start": 111,
          "end": 115,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
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
        "start": 116,
        "end": 119,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 119,
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
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
        "start": 120,
        "end": 133,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 122,
            "end": 131,
            "argument": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
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
      "type": "TSInterfaceDeclaration",
      "start": 135,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 146,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 166,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 153,
            "end": 164,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 176,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
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
      "type": "ClassDeclaration",
      "start": 178,
      "end": 206,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
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
        "start": 186,
        "end": 206,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 192,
            "end": 204,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
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
      "start": 208,
      "end": 230,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 229,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 215,
                "end": 229,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 217,
                    "end": 227,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 219,
                      "end": 227,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 221,
                        "end": 227
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
      "start": 231,
      "end": 257,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 256,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 238,
                "end": 256,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 240,
                    "end": 254,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 248,
                        "end": 254
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
      "start": 258,
      "end": 293,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 292,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 265,
                "end": 292,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 267,
                    "end": 278,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 269,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 271,
                        "end": 277
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 279,
                    "end": 290,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 280,
                        "end": 281,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 284,
                        "end": 290
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
      "start": 295,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 317,
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 308,
                "end": 316,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 309,
                    "end": 310,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
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
      "start": 319,
      "end": 350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 328,
            "end": 349,
            "callee": {
              "type": "Identifier",
              "start": 328,
              "end": 331,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 332,
                "end": 348,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 333,
                    "end": 342,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
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
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
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
      "start": 351,
      "end": 391,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 357,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 360,
            "end": 390,
            "callee": {
              "type": "Identifier",
              "start": 360,
              "end": 363,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 364,
                "end": 389,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 377,
                  "end": 389,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 379,
                      "end": 387,
                      "argument": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
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
      "start": 392,
      "end": 440,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 439,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 401,
            "end": 439,
            "callee": {
              "type": "Identifier",
              "start": 401,
              "end": 404,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 405,
                "end": 438,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 415,
                    "end": 424,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 416,
                      "end": 424,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 418,
                        "end": 424
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 426,
                  "end": 438,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 428,
                      "end": 436,
                      "argument": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
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
      "start": 441,
      "end": 457,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 447,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 450,
            "end": 456,
            "callee": {
              "type": "Identifier",
              "start": 450,
              "end": 453,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "decorators": [],
                "name": "i",
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
      "start": 458,
      "end": 474,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 473,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 464,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 467,
            "end": 473,
            "callee": {
              "type": "Identifier",
              "start": 467,
              "end": 470,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "c",
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
      "start": 476,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 488,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 488,
        "end": 491,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 489,
            "end": 490,
            "name": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 492,
        "end": 510,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 498,
            "end": 508,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 499,
                "end": 503,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 500,
                  "end": 503,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 502,
                    "end": 503,
                    "typeName": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 503,
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
              "start": 504,
              "end": 507,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 506,
                "end": 507,
                "typeName": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 530,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 529,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 529,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 529,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 519,
                "end": 529,
                "typeName": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 521,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 521,
                  "end": 529,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 522,
                      "end": 528
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
      "type": "ClassDeclaration",
      "start": 532,
      "end": 559,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 540,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 540,
        "end": 543,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 541,
            "end": 542,
            "name": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
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
        "start": 544,
        "end": 559,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 550,
            "end": 557,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 550,
              "end": 553,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 553,
              "end": 556,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 555,
                "end": 556,
                "typeName": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 556,
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
      "start": 561,
      "end": 586,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 585,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 585,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 569,
                "end": 585,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 571,
                    "end": 583,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 571,
                      "end": 574,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 572,
                          "end": 573,
                          "name": {
                            "type": "Identifier",
                            "start": 572,
                            "end": 573,
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
                        "start": 575,
                        "end": 579,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 576,
                          "end": 579,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 578,
                            "end": 579,
                            "typeName": {
                              "type": "Identifier",
                              "start": 578,
                              "end": 579,
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
                      "start": 580,
                      "end": 583,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 582,
                        "end": 583,
                        "typeName": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 583,
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
      "start": 587,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 615,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 593,
              "end": 615,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 595,
                "end": 615,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 597,
                    "end": 613,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 601,
                      "end": 604,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 602,
                          "end": 603,
                          "name": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 603,
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
                        "start": 605,
                        "end": 609,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 606,
                          "end": 609,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 608,
                            "end": 609,
                            "typeName": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 609,
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
                      "start": 610,
                      "end": 613,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 612,
                        "end": 613,
                        "typeName": {
                          "type": "Identifier",
                          "start": 612,
                          "end": 613,
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
      "start": 617,
      "end": 662,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 661,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 661,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 661,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 625,
                "end": 661,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 627,
                    "end": 640,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 627,
                      "end": 630,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 628,
                          "end": 629,
                          "name": {
                            "type": "Identifier",
                            "start": 628,
                            "end": 629,
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
                        "start": 631,
                        "end": 635,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 632,
                          "end": 635,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 634,
                            "end": 635,
                            "typeName": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 635,
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
                      "start": 636,
                      "end": 639,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 638,
                        "end": 639,
                        "typeName": {
                          "type": "Identifier",
                          "start": 638,
                          "end": 639,
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
                    "type": "TSCallSignatureDeclaration",
                    "start": 641,
                    "end": 659,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 641,
                      "end": 644,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 642,
                          "end": 643,
                          "name": {
                            "type": "Identifier",
                            "start": 642,
                            "end": 643,
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
                        "start": 645,
                        "end": 649,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 646,
                          "end": 649,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 648,
                            "end": 649,
                            "typeName": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 649,
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
                        "start": 651,
                        "end": 655,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 652,
                          "end": 655,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 654,
                            "end": 655,
                            "typeName": {
                              "type": "Identifier",
                              "start": 654,
                              "end": 655,
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
                      "start": 656,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 658,
                        "end": 659,
                        "typeName": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 659,
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
      "start": 664,
      "end": 711,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 668,
          "end": 710,
          "id": {
            "type": "Identifier",
            "start": 668,
            "end": 670,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 673,
            "end": 710,
            "callee": {
              "type": "Identifier",
              "start": 673,
              "end": 676,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 677,
                "end": 709,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 686,
                  "end": 689,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 687,
                      "end": 688,
                      "name": {
                        "type": "Identifier",
                        "start": 687,
                        "end": 688,
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
                    "start": 690,
                    "end": 694,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 691,
                      "end": 694,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 693,
                        "end": 694,
                        "typeName": {
                          "type": "Identifier",
                          "start": 693,
                          "end": 694,
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
                  "start": 696,
                  "end": 709,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 698,
                      "end": 707,
                      "argument": {
                        "type": "Identifier",
                        "start": 705,
                        "end": 706,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
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
      "start": 712,
      "end": 757,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 716,
          "end": 756,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 719,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 722,
            "end": 756,
            "callee": {
              "type": "Identifier",
              "start": 722,
              "end": 725,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 726,
                "end": 755,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 726,
                  "end": 744,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 727,
                      "end": 743,
                      "name": {
                        "type": "Identifier",
                        "start": 727,
                        "end": 728,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 737,
                        "end": 743
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
                    "start": 745,
                    "end": 749,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 746,
                      "end": 749,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 748,
                        "end": 749,
                        "typeName": {
                          "type": "Identifier",
                          "start": 748,
                          "end": 749,
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
                  "start": 754,
                  "end": 755,
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
      "start": 758,
      "end": 776,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 775,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 765,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 768,
            "end": 775,
            "callee": {
              "type": "Identifier",
              "start": 768,
              "end": 771,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 772,
                "end": 774,
                "decorators": [],
                "name": "i2",
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
      "start": 777,
      "end": 795,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 794,
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 784,
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 787,
            "end": 794,
            "callee": {
              "type": "Identifier",
              "start": 787,
              "end": 790,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 791,
                "end": 793,
                "decorators": [],
                "name": "c2",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
