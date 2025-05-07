__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 512,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 61,
      "end": 106,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 96,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 96,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 89,
              "end": 96,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 92,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 96,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 105,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 99,
          "end": 105
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
      "type": "VariableDeclaration",
      "start": 107,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "res1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 120,
            "end": 135,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 124,
                "end": 134,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 134,
                  "decorators": [],
                  "name": "res1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 138,
      "end": 199,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 158,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 163,
        "end": 198,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 165,
          "end": 198,
          "params": [
            {
              "type": "Identifier",
              "start": 166,
              "end": 179,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 168,
                "end": 179,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 170,
                  "end": 179,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 176,
                      "end": 179
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 198,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 184,
              "end": 198,
              "params": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 189,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
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
                "start": 191,
                "end": 198,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 194,
                  "end": 198
                }
              },
              "typeParameters": null
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 158,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 160,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
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
      "type": "VariableDeclaration",
      "start": 200,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 210,
            "decorators": [],
            "name": "res2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 213,
            "end": 230,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 219,
                "end": 229,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 229,
                  "decorators": [],
                  "name": "res2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 213,
              "end": 218,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 213,
                "end": 216,
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 233,
      "end": 305,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 253,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 258,
        "end": 304,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 260,
          "end": 304,
          "params": [
            {
              "type": "Identifier",
              "start": 265,
              "end": 285,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 267,
                "end": 285,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 269,
                  "end": 285,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 273,
                        "end": 277,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 275,
                          "end": 277,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 277,
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 279,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 282,
                      "end": 285
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 287,
            "end": 304,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 290,
              "end": 304,
              "params": [
                {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 292,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 294,
                      "end": 295,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
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
                "start": 297,
                "end": 304,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 300,
                  "end": 304
                }
              },
              "typeParameters": null
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 260,
            "end": 264,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 261,
                "end": 263,
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 263,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            ]
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 255,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
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
      "type": "VariableDeclaration",
      "start": 306,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
            "decorators": [],
            "name": "res3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 319,
            "end": 336,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 325,
                "end": 335,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 335,
                  "decorators": [],
                  "name": "res3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 319,
              "end": 324,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 319,
                "end": 322,
                "decorators": [],
                "name": "fn3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 396,
      "end": 460,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 460,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 447,
            "end": 458,
            "argument": {
              "type": "Identifier",
              "start": 454,
              "end": 457,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 408,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 409,
          "end": 439,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 439,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 414,
              "end": 439,
              "indexType": {
                "type": "TSLiteralType",
                "start": 437,
                "end": 438,
                "literal": {
                  "type": "Literal",
                  "start": 437,
                  "end": 438,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 414,
                "end": 436,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 424,
                  "end": 436,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 425,
                      "end": 435,
                      "exprName": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 435,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 424,
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 512,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 488,
        "end": 512,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 494,
            "end": 510,
            "argument": {
              "type": "CallExpression",
              "start": 501,
              "end": 509,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 505,
                  "end": 508,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 501,
                "end": 504,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 474,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 475,
          "end": 486,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 486,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 480,
              "end": 486
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
