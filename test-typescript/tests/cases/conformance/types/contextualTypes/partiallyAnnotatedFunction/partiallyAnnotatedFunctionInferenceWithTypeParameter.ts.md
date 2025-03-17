__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 608,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 16,
              "name": "test",
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
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
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
      "type": "ClassDeclaration",
      "start": 28,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "name": "test2",
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
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
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
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "name": "test",
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
          "start": 102,
          "end": 126,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 126,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 105,
              "end": 126,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 110,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
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
                  "start": 112,
                  "end": 117,
                  "name": "t1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
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
                "start": 119,
                "end": 126,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 122,
                  "end": 126
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 88,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 100,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 100,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "C",
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
      "type": "TSDeclareFunction",
      "start": 132,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 157,
        "name": "testRest",
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
          "start": 171,
          "end": 207,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 207,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 174,
              "end": 207,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
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
                  "start": 181,
                  "end": 186,
                  "name": "t1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 186,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 186,
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
                  "type": "RestElement",
                  "start": 188,
                  "end": 198,
                  "argument": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 193,
                    "name": "ts",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 193,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 195,
                      "end": 198,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 195,
                        "end": 196,
                        "typeName": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 200,
                "end": 207,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 203,
                  "end": 207
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 157,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 169,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "name": "C",
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
        "start": 208,
        "end": 211,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 210,
          "end": 211,
          "typeName": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
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
      "start": 225,
      "end": 258,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 258,
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 229,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 230,
            "end": 257,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "name": "t1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 233,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 235,
                    "end": 236,
                    "typeName": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 236,
                      "name": "D",
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
                "start": 238,
                "end": 240,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 245,
              "end": 257,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 247,
                  "end": 255,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 247,
                    "end": 255,
                    "object": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 249,
                      "name": "t2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 255,
                      "name": "test2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
      "type": "ExpressionStatement",
      "start": 259,
      "end": 292,
      "expression": {
        "type": "CallExpression",
        "start": 259,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 259,
          "end": 263,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 264,
            "end": 291,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 265,
                "end": 267,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 269,
                "end": 274,
                "name": "t2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 271,
                  "end": 274,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "name": "D",
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
              "start": 279,
              "end": 291,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 281,
                  "end": 289,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 281,
                    "end": 289,
                    "object": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 283,
                      "name": "t2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 289,
                      "name": "test2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
      "type": "ExpressionStatement",
      "start": 306,
      "end": 320,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 320,
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 310,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 319,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 317,
              "end": 319,
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
      "type": "ExpressionStatement",
      "start": 336,
      "end": 355,
      "expression": {
        "type": "CallExpression",
        "start": 336,
        "end": 355,
        "callee": {
          "type": "Identifier",
          "start": 336,
          "end": 340,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 341,
            "end": 354,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 347,
                "name": "t1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 344,
                  "end": 347,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 346,
                    "end": 347,
                    "typeName": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 347,
                      "name": "D",
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
              "start": 352,
              "end": 354,
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
      "type": "ExpressionStatement",
      "start": 369,
      "end": 393,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 393,
        "callee": {
          "type": "Identifier",
          "start": 369,
          "end": 373,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 374,
            "end": 392,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 375,
                "end": 385,
                "argument": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 380,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 380,
                  "end": 385,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 382,
                    "end": 385,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 382,
                      "end": 383,
                      "typeName": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 392,
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
      "type": "ExpressionStatement",
      "start": 427,
      "end": 450,
      "expression": {
        "type": "CallExpression",
        "start": 427,
        "end": 450,
        "callee": {
          "type": "Identifier",
          "start": 427,
          "end": 435,
          "name": "testRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 436,
            "end": 449,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 437,
                "end": 442,
                "name": "t1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 439,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 442,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
                      "name": "D",
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
              "start": 447,
              "end": 449,
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
      "type": "ExpressionStatement",
      "start": 451,
      "end": 479,
      "expression": {
        "type": "CallExpression",
        "start": 451,
        "end": 479,
        "callee": {
          "type": "Identifier",
          "start": 451,
          "end": 459,
          "name": "testRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 460,
            "end": 478,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 461,
                "end": 463,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 465,
                "end": 467,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 469,
                "end": 471,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 476,
              "end": 478,
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
      "type": "ExpressionStatement",
      "start": 480,
      "end": 511,
      "expression": {
        "type": "CallExpression",
        "start": 480,
        "end": 511,
        "callee": {
          "type": "Identifier",
          "start": 480,
          "end": 488,
          "name": "testRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 489,
            "end": 510,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 490,
                "end": 495,
                "name": "t1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 492,
                  "end": 495,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 494,
                    "end": 495,
                    "typeName": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 495,
                      "name": "D",
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
                "start": 497,
                "end": 499,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 501,
                "end": 503,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 508,
              "end": 510,
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
      "type": "ExpressionStatement",
      "start": 512,
      "end": 543,
      "expression": {
        "type": "CallExpression",
        "start": 512,
        "end": 543,
        "callee": {
          "type": "Identifier",
          "start": 512,
          "end": 520,
          "name": "testRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 521,
            "end": 542,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 522,
                "end": 524,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 526,
                "end": 531,
                "name": "t2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 528,
                  "end": 531,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 530,
                    "end": 531,
                    "typeName": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 531,
                      "name": "D",
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
                "start": 533,
                "end": 535,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 540,
              "end": 542,
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
      "type": "ExpressionStatement",
      "start": 544,
      "end": 574,
      "expression": {
        "type": "CallExpression",
        "start": 544,
        "end": 574,
        "callee": {
          "type": "Identifier",
          "start": 544,
          "end": 552,
          "name": "testRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 553,
            "end": 573,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 559,
                "name": "t2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 556,
                  "end": 559,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 558,
                    "end": 559,
                    "typeName": {
                      "type": "Identifier",
                      "start": 558,
                      "end": 559,
                      "name": "D",
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
                "type": "RestElement",
                "start": 561,
                "end": 566,
                "argument": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 566,
                  "name": "t3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 571,
              "end": 573,
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
      "type": "ExpressionStatement",
      "start": 575,
      "end": 607,
      "expression": {
        "type": "CallExpression",
        "start": 575,
        "end": 607,
        "callee": {
          "type": "Identifier",
          "start": 575,
          "end": 583,
          "name": "testRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 606,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 589,
                "end": 599,
                "argument": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 594,
                  "name": "t3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 594,
                  "end": 599,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 596,
                    "end": 599,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 596,
                      "end": 597,
                      "typeName": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 604,
              "end": 606,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
