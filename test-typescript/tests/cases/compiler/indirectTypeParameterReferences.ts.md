__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 500,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 31,
        "end": 42,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 41,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
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
      "start": 44,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 59,
            "name": "flowtypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 251,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 66,
                "end": 70,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 69,
                    "end": 70,
                    "typeName": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "B",
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
              "start": 75,
              "end": 251,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 79,
                  "end": 100,
                  "id": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 92,
                    "name": "Combined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 95,
                    "end": 100,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 96,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 99,
                        "end": 100,
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 118,
                        "name": "combined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 121,
                        "end": 163,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 122,
                            "end": 154,
                            "name": "fn",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 124,
                              "end": 154,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 126,
                                "end": 154,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 145,
                                    "name": "combined",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 135,
                                      "end": 145,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 137,
                                        "end": 145,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 137,
                                          "end": 145,
                                          "name": "Combined",
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
                                  "start": 147,
                                  "end": 154,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 150,
                                    "end": 154
                                  }
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 159,
                          "end": 163,
                          "value": null,
                          "raw": "null"
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 179,
                        "name": "literal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 182,
                        "end": 219,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 183,
                            "end": 210,
                            "name": "fn",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 185,
                              "end": 210,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 187,
                                "end": 210,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 201,
                                    "name": "aPlusB",
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
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 196,
                                              "end": 197,
                                              "name": "A",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 200,
                                            "end": 201,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 200,
                                              "end": 201,
                                              "name": "B",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
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
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 215,
                          "end": 219,
                          "value": null,
                          "raw": "null"
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 239,
                          "name": "combined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 239,
                          "name": "combined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 241,
                        "end": 248,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 248,
                          "name": "literal",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 248,
                          "name": "literal",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 62,
              "end": 65,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 63,
                  "end": 64,
                  "name": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "name": "A",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 259,
            "end": 278,
            "properties": [
              {
                "type": "Property",
                "start": 260,
                "end": 268,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 268,
                  "name": "combined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 268,
                  "name": "combined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 270,
                "end": 277,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 277,
                  "name": "literal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 277,
                  "name": "literal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 281,
            "end": 319,
            "callee": {
              "type": "Identifier",
              "start": 281,
              "end": 290,
              "name": "flowtypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 308,
                      "end": 317,
                      "value": "b-value",
                      "raw": "'b-value'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 293,
                        "end": 301,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 295,
                          "end": 301
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 365,
      "expression": {
        "type": "CallExpression",
        "start": 321,
        "end": 365,
        "callee": {
          "type": "Identifier",
          "start": 321,
          "end": 328,
          "name": "literal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 329,
            "end": 364,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "name": "aPlusB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 339,
              "end": 364,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 343,
                  "end": 351,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 343,
                    "end": 351,
                    "object": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 349,
                      "name": "aPlusB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 354,
                  "end": 362,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 354,
                    "end": 362,
                    "object": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 360,
                      "name": "aPlusB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "name": "a",
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
      "start": 367,
      "end": 406,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 406,
        "callee": {
          "type": "Identifier",
          "start": 367,
          "end": 375,
          "name": "combined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 376,
            "end": 405,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 376,
                "end": 380,
                "name": "comb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 384,
              "end": 405,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 388,
                  "end": 394,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 388,
                    "end": 394,
                    "object": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 392,
                      "name": "comb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 397,
                  "end": 403,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 397,
                    "end": 403,
                    "object": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "name": "comb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 403,
                      "name": "a",
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
      "type": "TSDeclareFunction",
      "start": 430,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 447,
        "end": 448,
        "name": "f",
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
          "start": 452,
          "end": 456,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 453,
            "end": 456,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 455,
              "end": 456,
              "typeName": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 448,
        "end": 451,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 449,
            "end": 450,
            "name": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
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
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 489,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 481,
              "end": 489,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 483,
                "end": 489
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 492,
            "end": 498,
            "object": {
              "type": "CallExpression",
              "start": 492,
              "end": 496,
              "callee": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
