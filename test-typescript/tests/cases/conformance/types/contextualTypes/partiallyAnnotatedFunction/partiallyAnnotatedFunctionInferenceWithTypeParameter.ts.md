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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 16,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 130,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 102,
          "end": 126,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 126,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 105,
              "end": 126,
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 110,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 112,
                  "end": 117,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 117,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 127,
        "end": 130,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 129,
          "end": 130,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 88,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 100,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 100,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 132,
      "end": 211,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 157,
        "decorators": [],
        "name": "testRest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 207,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 207,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 174,
              "end": 207,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 181,
                  "end": 186,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 186,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 186,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 188,
                  "end": 198,
                  "argument": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 193,
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 208,
        "end": 211,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 210,
          "end": 211,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 157,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 169,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 169,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 258,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 258,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 230,
            "end": 257,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 245,
              "end": 257,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 247,
                  "end": 255,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 247,
                    "end": 255,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 249,
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 255,
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 233,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 235,
                    "end": 236,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 236,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 238,
                "end": 240,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 229,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 292,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 259,
        "end": 292,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 264,
            "end": 291,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 279,
              "end": 291,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 281,
                  "end": 289,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 281,
                    "end": 289,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 283,
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 289,
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 265,
                "end": 267,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 269,
                "end": 274,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 271,
                  "end": 274,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 259,
          "end": 263,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 320,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 320,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 319,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 317,
              "end": 319,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 310,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 336,
      "end": 355,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 336,
        "end": 355,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 341,
            "end": 354,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 352,
              "end": 354,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 347,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 344,
                  "end": 347,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 346,
                    "end": 347,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 347,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 336,
          "end": 340,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 393,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 393,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 374,
            "end": 392,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 392,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 375,
                "end": 385,
                "argument": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 380,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 369,
          "end": 373,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 450,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 427,
        "end": 450,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 436,
            "end": 449,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 447,
              "end": 449,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 437,
                "end": 442,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 439,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 442,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 427,
          "end": 435,
          "decorators": [],
          "name": "testRest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 479,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 451,
        "end": 479,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 460,
            "end": 478,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 476,
              "end": 478,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 461,
                "end": 463,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 465,
                "end": 467,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 469,
                "end": 471,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 451,
          "end": 459,
          "decorators": [],
          "name": "testRest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 511,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 480,
        "end": 511,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 489,
            "end": 510,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 508,
              "end": 510,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 490,
                "end": 495,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 492,
                  "end": 495,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 494,
                    "end": 495,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 495,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 497,
                "end": 499,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 501,
                "end": 503,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 480,
          "end": 488,
          "decorators": [],
          "name": "testRest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 543,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 512,
        "end": 543,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 521,
            "end": 542,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 540,
              "end": 542,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 522,
                "end": 524,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 526,
                "end": 531,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 528,
                  "end": 531,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 530,
                    "end": 531,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 531,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 533,
                "end": 535,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 512,
          "end": 520,
          "decorators": [],
          "name": "testRest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 574,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 544,
        "end": 574,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 553,
            "end": 573,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 571,
              "end": 573,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 559,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 556,
                  "end": 559,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 558,
                    "end": 559,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 558,
                      "end": 559,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 561,
                "end": 566,
                "argument": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 566,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 544,
          "end": 552,
          "decorators": [],
          "name": "testRest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 575,
      "end": 607,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 575,
        "end": 607,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 606,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 604,
              "end": 606,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 589,
                "end": 599,
                "argument": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 594,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 575,
          "end": 583,
          "decorators": [],
          "name": "testRest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
