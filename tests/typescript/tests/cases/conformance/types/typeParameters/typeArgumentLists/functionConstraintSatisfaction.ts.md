__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 1237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 120,
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
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 96,
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
              "type": "TSTypeReference",
              "start": 88,
              "end": 96,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 96,
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
          "start": 98,
          "end": 102,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 102,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 101,
              "end": 102,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
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
        "start": 103,
        "end": 106,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 105,
          "end": 106,
          "typeName": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
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
        "start": 107,
        "end": 120,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 109,
            "end": 118,
            "argument": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
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
      "start": 122,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 134,
        "end": 153,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 140,
            "end": 151,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 163,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 162,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
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
      "start": 165,
      "end": 193,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 172,
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
        "start": 173,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 179,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
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
      "start": 195,
      "end": 217,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 216,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 202,
                "end": 216,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 204,
                    "end": 214,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 208,
                        "end": 214
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
      "start": 218,
      "end": 244,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 243,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 225,
                "end": 243,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 227,
                    "end": 241,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 241,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 235,
                        "end": 241
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
      "start": 245,
      "end": 280,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 279,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 252,
                "end": 279,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 254,
                    "end": 265,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 258,
                        "end": 264
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 266,
                    "end": 277,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 267,
                        "end": 268,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
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
      "start": 282,
      "end": 310,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 309,
            "callee": {
              "type": "Identifier",
              "start": 290,
              "end": 293,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 294,
                "end": 308,
                "callee": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 306,
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
      "start": 311,
      "end": 334,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 333,
            "callee": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 324,
                "end": 332,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
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
      "start": 335,
      "end": 368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 344,
            "end": 367,
            "callee": {
              "type": "Identifier",
              "start": 344,
              "end": 347,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 348,
                "end": 366,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 349,
                    "end": 360,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 360,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 352,
                        "end": 360,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 352,
                          "end": 358
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 366,
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
      "start": 369,
      "end": 409,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 375,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 378,
            "end": 408,
            "callee": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 382,
                "end": 407,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 395,
                  "end": 407,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 397,
                      "end": 405,
                      "argument": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 405,
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
      "start": 410,
      "end": 460,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 416,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 419,
            "end": 459,
            "callee": {
              "type": "Identifier",
              "start": 419,
              "end": 422,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 423,
                "end": 458,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 433,
                    "end": 444,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 444,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 436,
                        "end": 444,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 436,
                          "end": 442
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 446,
                  "end": 458,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 448,
                      "end": 456,
                      "argument": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 456,
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
      "start": 461,
      "end": 477,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 467,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 470,
            "end": 476,
            "callee": {
              "type": "Identifier",
              "start": 470,
              "end": 473,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 474,
                "end": 475,
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
      "start": 478,
      "end": 494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 484,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 487,
            "end": 493,
            "callee": {
              "type": "Identifier",
              "start": 487,
              "end": 490,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 491,
                "end": 492,
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
      "start": 495,
      "end": 511,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 501,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 504,
            "end": 510,
            "callee": {
              "type": "Identifier",
              "start": 504,
              "end": 507,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 508,
                "end": 509,
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
      "start": 512,
      "end": 528,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 521,
            "end": 527,
            "callee": {
              "type": "Identifier",
              "start": 521,
              "end": 524,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 525,
                "end": 526,
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
      "start": 530,
      "end": 564,
      "id": {
        "type": "Identifier",
        "start": 540,
        "end": 542,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 542,
        "end": 545,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 543,
            "end": 544,
            "name": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
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
        "start": 546,
        "end": 564,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 552,
            "end": 562,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 553,
                "end": 557,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 554,
                  "end": 557,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 556,
                    "end": 557,
                    "typeName": {
                      "type": "Identifier",
                      "start": 556,
                      "end": 557,
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
              "start": 558,
              "end": 561,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 560,
                "end": 561,
                "typeName": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
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
      "start": 565,
      "end": 584,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 583,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 573,
                "end": 583,
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 575,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 575,
                  "end": 583,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 576,
                      "end": 582
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
      "start": 586,
      "end": 613,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 594,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 594,
        "end": 597,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 595,
            "end": 596,
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
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
        "start": 598,
        "end": 613,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 604,
            "end": 611,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 604,
              "end": 607,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 610,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 609,
                "end": 610,
                "typeName": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 610,
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
      "start": 615,
      "end": 640,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 619,
          "end": 639,
          "id": {
            "type": "Identifier",
            "start": 619,
            "end": 639,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 621,
              "end": 639,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 623,
                "end": 639,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 625,
                    "end": 637,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 625,
                      "end": 628,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 626,
                          "end": 627,
                          "name": {
                            "type": "Identifier",
                            "start": 626,
                            "end": 627,
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
                        "start": 629,
                        "end": 633,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 630,
                          "end": 633,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 632,
                            "end": 633,
                            "typeName": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
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
                      "start": 634,
                      "end": 637,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 636,
                        "end": 637,
                        "typeName": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 637,
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
      "start": 641,
      "end": 670,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 645,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 669,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 669,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 649,
                "end": 669,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 651,
                    "end": 667,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 655,
                      "end": 658,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 656,
                          "end": 657,
                          "name": {
                            "type": "Identifier",
                            "start": 656,
                            "end": 657,
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
                        "start": 659,
                        "end": 663,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 660,
                          "end": 663,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 662,
                            "end": 663,
                            "typeName": {
                              "type": "Identifier",
                              "start": 662,
                              "end": 663,
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
                      "start": 664,
                      "end": 667,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 666,
                        "end": 667,
                        "typeName": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 667,
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
      "start": 671,
      "end": 716,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 715,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 715,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 715,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 679,
                "end": 715,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 681,
                    "end": 694,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 681,
                      "end": 684,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 682,
                          "end": 683,
                          "name": {
                            "type": "Identifier",
                            "start": 682,
                            "end": 683,
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
                        "start": 685,
                        "end": 689,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 686,
                          "end": 689,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 688,
                            "end": 689,
                            "typeName": {
                              "type": "Identifier",
                              "start": 688,
                              "end": 689,
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
                      "start": 690,
                      "end": 693,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 692,
                        "end": 693,
                        "typeName": {
                          "type": "Identifier",
                          "start": 692,
                          "end": 693,
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
                    "start": 695,
                    "end": 713,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 695,
                      "end": 698,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 696,
                          "end": 697,
                          "name": {
                            "type": "Identifier",
                            "start": 696,
                            "end": 697,
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
                        "start": 699,
                        "end": 703,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 700,
                          "end": 703,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 702,
                            "end": 703,
                            "typeName": {
                              "type": "Identifier",
                              "start": 702,
                              "end": 703,
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
                        "start": 705,
                        "end": 709,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 706,
                          "end": 709,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 708,
                            "end": 709,
                            "typeName": {
                              "type": "Identifier",
                              "start": 708,
                              "end": 709,
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
                      "start": 710,
                      "end": 713,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 712,
                        "end": 713,
                        "typeName": {
                          "type": "Identifier",
                          "start": 712,
                          "end": 713,
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
      "start": 718,
      "end": 747,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 746,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 724,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 727,
            "end": 746,
            "callee": {
              "type": "Identifier",
              "start": 727,
              "end": 730,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 731,
                "end": 745,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 731,
                  "end": 734,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 732,
                      "end": 733,
                      "name": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 733,
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
                    "start": 735,
                    "end": 739,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 736,
                      "end": 739,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 738,
                        "end": 739,
                        "typeName": {
                          "type": "Identifier",
                          "start": 738,
                          "end": 739,
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
                  "start": 744,
                  "end": 745,
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
      "start": 748,
      "end": 796,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 755,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 758,
            "end": 795,
            "callee": {
              "type": "Identifier",
              "start": 758,
              "end": 761,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 762,
                "end": 794,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 771,
                  "end": 774,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 772,
                      "end": 773,
                      "name": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 773,
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
                    "start": 775,
                    "end": 779,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 776,
                      "end": 779,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 778,
                        "end": 779,
                        "typeName": {
                          "type": "Identifier",
                          "start": 778,
                          "end": 779,
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
                  "start": 781,
                  "end": 794,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 783,
                      "end": 792,
                      "argument": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 791,
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
      "start": 797,
      "end": 840,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 801,
          "end": 839,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 804,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 807,
            "end": 839,
            "callee": {
              "type": "Identifier",
              "start": 807,
              "end": 810,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 811,
                "end": 838,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 811,
                  "end": 827,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 812,
                      "end": 826,
                      "name": {
                        "type": "Identifier",
                        "start": 812,
                        "end": 813,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 822,
                        "end": 826,
                        "typeName": {
                          "type": "Identifier",
                          "start": 822,
                          "end": 826,
                          "decorators": [],
                          "name": "Date",
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
                    "start": 828,
                    "end": 832,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 829,
                      "end": 832,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 831,
                        "end": 832,
                        "typeName": {
                          "type": "Identifier",
                          "start": 831,
                          "end": 832,
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
                  "start": 837,
                  "end": 838,
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
      "start": 841,
      "end": 880,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 845,
          "end": 879,
          "id": {
            "type": "Identifier",
            "start": 845,
            "end": 848,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 851,
            "end": 879,
            "callee": {
              "type": "Identifier",
              "start": 851,
              "end": 854,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 855,
                "end": 878,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 855,
                  "end": 861,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 856,
                      "end": 857,
                      "name": {
                        "type": "Identifier",
                        "start": 856,
                        "end": 857,
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
                      "start": 859,
                      "end": 860,
                      "name": {
                        "type": "Identifier",
                        "start": 859,
                        "end": 860,
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
                    "start": 862,
                    "end": 866,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 863,
                      "end": 866,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 865,
                        "end": 866,
                        "typeName": {
                          "type": "Identifier",
                          "start": 865,
                          "end": 866,
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
                    "start": 868,
                    "end": 872,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 869,
                      "end": 872,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 872,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
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
                  "start": 877,
                  "end": 878,
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
      "start": 881,
      "end": 899,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 885,
          "end": 898,
          "id": {
            "type": "Identifier",
            "start": 885,
            "end": 888,
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 891,
            "end": 898,
            "callee": {
              "type": "Identifier",
              "start": 891,
              "end": 894,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 895,
                "end": 897,
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
      "start": 900,
      "end": 918,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 904,
          "end": 917,
          "id": {
            "type": "Identifier",
            "start": 904,
            "end": 907,
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 910,
            "end": 917,
            "callee": {
              "type": "Identifier",
              "start": 910,
              "end": 913,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 914,
                "end": 916,
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
      "start": 919,
      "end": 937,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 923,
          "end": 936,
          "id": {
            "type": "Identifier",
            "start": 923,
            "end": 926,
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 929,
            "end": 936,
            "callee": {
              "type": "Identifier",
              "start": 929,
              "end": 932,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 933,
                "end": 935,
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
      "type": "VariableDeclaration",
      "start": 938,
      "end": 956,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 942,
          "end": 955,
          "id": {
            "type": "Identifier",
            "start": 942,
            "end": 945,
            "decorators": [],
            "name": "r16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 948,
            "end": 955,
            "callee": {
              "type": "Identifier",
              "start": 948,
              "end": 951,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 952,
                "end": 954,
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 958,
      "end": 1004,
      "id": {
        "type": "Identifier",
        "start": 968,
        "end": 970,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 979,
          "end": 987,
          "expression": {
            "type": "Identifier",
            "start": 979,
            "end": 987,
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
        "start": 988,
        "end": 1004,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 990,
            "end": 1002,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 990,
              "end": 993,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 993,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 995,
                "end": 1001
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
      "start": 1005,
      "end": 1016,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1015,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1011,
              "end": 1015,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1013,
                "end": 1015,
                "typeName": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1015,
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
      "start": 1017,
      "end": 1035,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1021,
          "end": 1034,
          "id": {
            "type": "Identifier",
            "start": 1021,
            "end": 1024,
            "decorators": [],
            "name": "r17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1027,
            "end": 1034,
            "callee": {
              "type": "Identifier",
              "start": 1027,
              "end": 1030,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1031,
                "end": 1033,
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
      "start": 1037,
      "end": 1138,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1050,
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
        "start": 1050,
        "end": 1098,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1051,
            "end": 1073,
            "name": {
              "type": "Identifier",
              "start": 1051,
              "end": 1052,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1061,
              "end": 1073,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1063,
                  "end": 1071,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1065,
                    "end": 1071,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1067,
                      "end": 1071
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
            "start": 1075,
            "end": 1097,
            "name": {
              "type": "Identifier",
              "start": 1075,
              "end": 1076,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1085,
              "end": 1097,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1087,
                  "end": 1095,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1089,
                    "end": 1095,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1091,
                      "end": 1095
                    }
                  }
                }
              ]
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
          "start": 1099,
          "end": 1103,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1100,
            "end": 1103,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1102,
              "end": 1103,
              "typeName": {
                "type": "Identifier",
                "start": 1102,
                "end": 1103,
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
          "start": 1105,
          "end": 1109,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1106,
            "end": 1109,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1108,
              "end": 1109,
              "typeName": {
                "type": "Identifier",
                "start": 1108,
                "end": 1109,
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
        "start": 1111,
        "end": 1138,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1117,
            "end": 1124,
            "expression": {
              "type": "CallExpression",
              "start": 1117,
              "end": 1123,
              "callee": {
                "type": "Identifier",
                "start": 1117,
                "end": 1120,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1122,
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
            "start": 1129,
            "end": 1136,
            "expression": {
              "type": "CallExpression",
              "start": 1129,
              "end": 1135,
              "callee": {
                "type": "Identifier",
                "start": 1129,
                "end": 1132,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1134,
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
