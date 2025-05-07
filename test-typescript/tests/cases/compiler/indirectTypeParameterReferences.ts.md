__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 499,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 42,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 31,
        "end": 42,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 59,
            "decorators": [],
            "name": "flowtypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 251,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 251,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 79,
                  "end": 100,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 92,
                    "decorators": [],
                    "name": "Combined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 95,
                    "end": 100,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 96,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 99,
                        "end": 100,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 104,
                  "end": 163,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 110,
                      "end": 163,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 118,
                        "decorators": [],
                        "name": "combined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 121,
                        "end": 163,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 159,
                          "end": 163,
                          "raw": "null",
                          "value": null,
                          "regex": null,
                          "bigint": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 122,
                            "end": 154,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 124,
                              "end": 154,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 126,
                                "end": 154,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 145,
                                    "decorators": [],
                                    "name": "combined",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 135,
                                      "end": 145,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 137,
                                        "end": 145,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 137,
                                          "end": 145,
                                          "decorators": [],
                                          "name": "Combined",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 147,
                                  "end": 154,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 150,
                                    "end": 154
                                  }
                                },
                                "typeParameters": null
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 166,
                  "end": 219,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 172,
                      "end": 219,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 179,
                        "decorators": [],
                        "name": "literal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 182,
                        "end": 219,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 215,
                          "end": 219,
                          "raw": "null",
                          "value": null,
                          "regex": null,
                          "bigint": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 183,
                            "end": 210,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 185,
                              "end": 210,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 187,
                                "end": 210,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 201,
                                    "decorators": [],
                                    "name": "aPlusB",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 194,
                                      "end": 201,
                                      "typeAnnotation": {
                                        "type": "TSIntersectionType",
                                        "start": 196,
                                        "end": 201,
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 196,
                                            "end": 197,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 196,
                                              "end": 197,
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 200,
                                            "end": 201,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 200,
                                              "end": 201,
                                              "decorators": [],
                                              "name": "B",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 203,
                                  "end": 210,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 206,
                                    "end": 210
                                  }
                                },
                                "typeParameters": null
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 223,
                  "end": 249,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 230,
                    "end": 249,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 231,
                        "end": 239,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 239,
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 239,
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 241,
                        "end": 248,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 248,
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 248,
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
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
                "start": 66,
                "end": 70,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 69,
                    "end": 70,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 62,
              "end": 65,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 63,
                  "end": 64,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 319,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 259,
            "end": 278,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 260,
                "end": 268,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 268,
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 268,
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 270,
                "end": 277,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 277,
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 277,
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 281,
            "end": 319,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 304,
                "end": 318,
                "properties": [
                  {
                    "type": "Property",
                    "start": 305,
                    "end": 317,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 308,
                      "end": 317,
                      "raw": "'b-value'",
                      "value": "b-value",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 281,
              "end": 290,
              "decorators": [],
              "name": "flowtypes",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 290,
              "end": 303,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 291,
                  "end": 302,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 292,
                      "end": 301,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 293,
                        "end": 301,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 295,
                          "end": 301
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 365,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 321,
        "end": 365,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 329,
            "end": 364,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 339,
              "end": 364,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 343,
                  "end": 351,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 343,
                    "end": 351,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 349,
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 354,
                  "end": 362,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 354,
                    "end": 362,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 360,
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "decorators": [],
                      "name": "a",
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
                "start": 329,
                "end": 335,
                "decorators": [],
                "name": "aPlusB",
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
          "start": 321,
          "end": 328,
          "decorators": [],
          "name": "literal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 406,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 406,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 376,
            "end": 405,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 384,
              "end": 405,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 388,
                  "end": 394,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 388,
                    "end": 394,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 392,
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 397,
                  "end": 403,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 397,
                    "end": 403,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 403,
                      "decorators": [],
                      "name": "a",
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
                "start": 376,
                "end": 380,
                "decorators": [],
                "name": "comb",
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
          "start": 367,
          "end": 375,
          "decorators": [],
          "name": "combined",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 430,
      "end": 475,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 447,
        "end": 448,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 452,
          "end": 456,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 453,
            "end": 456,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 455,
              "end": 456,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
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
        "start": 457,
        "end": 474,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 459,
          "end": 474,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 461,
              "end": 472,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 462,
                "end": 472,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 464,
                  "end": 472,
                  "exprName": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 448,
        "end": 451,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 449,
            "end": 450,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
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
      "start": 476,
      "end": 499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 498,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 489,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 481,
              "end": 489,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 483,
                "end": 489
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 492,
            "end": 498,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 492,
              "end": 496,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
