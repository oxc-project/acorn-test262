__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 43,
  "end": 630,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 51,
            "end": 71,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 52,
                "end": 59,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 58,
                  "end": 59,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 61,
                "end": 70,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 67,
                  "end": 70,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 82,
            "end": 88,
            "callee": {
              "type": "MemberExpression",
              "start": 82,
              "end": 86,
              "object": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
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
      "type": "ClassDeclaration",
      "start": 91,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
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
              "start": 108,
              "end": 116,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
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
      "start": 120,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 128,
            "end": 134,
            "elements": [
              {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 145,
            "end": 155,
            "callee": {
              "type": "MemberExpression",
              "start": 149,
              "end": 153,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 151,
                "end": 152,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
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
      "start": 158,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 210,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 165,
                "end": 210,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 167,
                    "end": 187,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 168,
                        "end": 177,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 169,
                          "end": 177,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 171,
                            "end": 177
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 180,
                        "end": 186
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 188,
                    "end": 208,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 189,
                        "end": 198,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 190,
                          "end": 198,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 192,
                            "end": 198
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
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
      "start": 212,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 264,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 219,
                "end": 264,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 221,
                    "end": 241,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 222,
                        "end": 231,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 223,
                          "end": 231,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 225,
                            "end": 231
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 240,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 234,
                        "end": 240
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 242,
                    "end": 262,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 243,
                        "end": 252,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 244,
                          "end": 252,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
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
      "start": 266,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 312,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 312,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 273,
                "end": 312,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 275,
                    "end": 295,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 276,
                        "end": 285,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 277,
                          "end": 285,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 279,
                            "end": 285
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 286,
                      "end": 294,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 288,
                        "end": 294
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 296,
                    "end": 310,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 297,
                        "end": 303,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 298,
                          "end": 303,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 300,
                            "end": 303
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 304,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 306,
                        "end": 309
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
      "start": 314,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 322,
            "end": 331,
            "elements": [
              {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 326,
                "end": 327,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 342,
            "end": 346,
            "object": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 344,
              "end": 345,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 354,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 357,
            "end": 363,
            "callee": {
              "type": "Identifier",
              "start": 357,
              "end": 359,
              "name": "r4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 360,
                "end": 362,
                "value": "",
                "raw": "''"
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
      "start": 383,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 393,
            "end": 398,
            "callee": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "name": "r4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 396,
                "end": 397,
                "value": 1,
                "raw": "1"
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
      "start": 401,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 451,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 409,
                "end": 451,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 411,
                    "end": 429,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 411,
                      "end": 414,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 412,
                          "end": 413,
                          "name": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 413,
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
                        "start": 415,
                        "end": 419,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 416,
                          "end": 419,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 418,
                            "end": 419,
                            "typeName": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 419,
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
                      "start": 420,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 422,
                        "end": 428
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 430,
                    "end": 450,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 431,
                        "end": 440,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 432,
                          "end": 440,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 434,
                            "end": 440
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 441,
                      "end": 449,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 443,
                        "end": 449
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
      "start": 453,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 504,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 504,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 459,
              "end": 504,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 461,
                "end": 504,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 463,
                    "end": 481,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 463,
                      "end": 466,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 464,
                          "end": 465,
                          "name": {
                            "type": "Identifier",
                            "start": 464,
                            "end": 465,
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
                        "start": 467,
                        "end": 471,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 468,
                          "end": 471,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 470,
                            "end": 471,
                            "typeName": {
                              "type": "Identifier",
                              "start": 470,
                              "end": 471,
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
                      "start": 472,
                      "end": 480,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 474,
                        "end": 480
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 482,
                    "end": 502,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 483,
                        "end": 492,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 484,
                          "end": 492,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 486,
                            "end": 492
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 493,
                      "end": 501,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 495,
                        "end": 501
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
      "start": 506,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 554,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 554,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 514,
                "end": 554,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 516,
                    "end": 536,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 517,
                        "end": 526,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 518,
                          "end": 526,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 520,
                            "end": 526
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 527,
                      "end": 535,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 529,
                        "end": 535
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 537,
                    "end": 552,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 537,
                      "end": 540,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 538,
                          "end": 539,
                          "name": {
                            "type": "Identifier",
                            "start": 538,
                            "end": 539,
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
                        "start": 541,
                        "end": 545,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 542,
                          "end": 545,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 544,
                            "end": 545,
                            "typeName": {
                              "type": "Identifier",
                              "start": 544,
                              "end": 545,
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
                      "start": 546,
                      "end": 551,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 548,
                        "end": 551
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
      "start": 557,
      "end": 579,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 578,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 566,
            "end": 578,
            "elements": [
              {
                "type": "Identifier",
                "start": 567,
                "end": 569,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 571,
                "end": 573,
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 575,
                "end": 577,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 580,
      "end": 595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 586,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 589,
            "end": 594,
            "object": {
              "type": "Identifier",
              "start": 589,
              "end": 591,
              "name": "z2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 592,
              "end": 593,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 596,
      "end": 612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 611,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 602,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 605,
            "end": 611,
            "callee": {
              "type": "Identifier",
              "start": 605,
              "end": 607,
              "name": "r6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 608,
                "end": 610,
                "value": "",
                "raw": "''"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
