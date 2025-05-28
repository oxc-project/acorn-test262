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
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 92,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 96,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 136,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 135,
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
            "callee": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 124,
                "end": 134,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 134,
                  "decorators": [],
                  "name": "res1",
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
      "type": "TSDeclareFunction",
      "start": 138,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 158,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 158,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 160,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 163,
        "end": 198,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 165,
          "end": 198,
          "typeParameters": null,
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
                  "typeParameters": null,
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
                  }
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
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
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
                "start": 191,
                "end": 198,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 194,
                  "end": 198
                }
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 231,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 230,
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
            "callee": {
              "type": "CallExpression",
              "start": 213,
              "end": 218,
              "callee": {
                "type": "Identifier",
                "start": 213,
                "end": 216,
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 219,
                "end": 229,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 229,
                  "decorators": [],
                  "name": "res2",
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
      "type": "TSDeclareFunction",
      "start": 233,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 253,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 255,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 258,
        "end": 304,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 260,
          "end": 304,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 260,
            "end": 264,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 261,
                "end": 263,
                "name": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 263,
                  "decorators": [],
                  "name": "T2",
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
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 277,
                            "decorators": [],
                            "name": "T2",
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
                    "start": 279,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 282,
                      "end": 285
                    }
                  }
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
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
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
                "start": 297,
                "end": 304,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 300,
                  "end": 304
                }
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 337,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 336,
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
            "callee": {
              "type": "CallExpression",
              "start": 319,
              "end": 324,
              "callee": {
                "type": "Identifier",
                "start": 319,
                "end": 322,
                "decorators": [],
                "name": "fn3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 325,
                "end": 335,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 335,
                  "decorators": [],
                  "name": "res3",
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
      "type": "FunctionDeclaration",
      "start": 396,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 408,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "objectType": {
                "type": "TSTypeReference",
                "start": 414,
                "end": 436,
                "typeName": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 424,
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 437,
                "end": 438,
                "literal": {
                  "type": "Literal",
                  "start": 437,
                  "end": 438,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 474,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "callee": {
                "type": "Identifier",
                "start": 501,
                "end": 504,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
              "optional": false
            }
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
