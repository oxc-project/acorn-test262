__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1425,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 556,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Chain",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
        "start": 15,
        "end": 556,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 53,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 33,
                  "end": 48,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 48,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 554,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 554,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 62,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 63,
                    "end": 74,
                    "name": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 73,
                      "end": 74,
                      "typeName": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 74,
                        "decorators": [],
                        "name": "T",
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
                  "start": 76,
                  "end": 91,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 80,
                      "end": 91,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 81,
                          "end": 85,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 82,
                            "end": 85,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 84,
                              "end": 85,
                              "typeName": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 85,
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
                        "start": 87,
                        "end": 91,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 90,
                          "end": 91,
                          "typeName": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 91,
                            "decorators": [],
                            "name": "S",
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
                "start": 92,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 94,
                  "end": 102,
                  "typeName": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 99,
                    "decorators": [],
                    "name": "Chain",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 99,
                    "end": 102,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 100,
                        "end": 101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 554,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 113,
                    "end": 122,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 117,
                        "end": 121,
                        "id": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 121,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 118,
                            "end": 121,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 120,
                              "end": 121,
                              "typeName": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 121,
                                "decorators": [],
                                "name": "T",
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
                    "start": 131,
                    "end": 140,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 135,
                        "end": 139,
                        "id": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 136,
                            "end": 139,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 138,
                              "end": 139,
                              "typeName": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "decorators": [],
                                "name": "S",
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
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 260,
                    "expression": {
                      "type": "CallExpression",
                      "start": 217,
                      "end": 259,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 250,
                        "object": {
                          "type": "CallExpression",
                          "start": 217,
                          "end": 245,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 217,
                            "end": 236,
                            "object": {
                              "type": "NewExpression",
                              "start": 218,
                              "end": 230,
                              "callee": {
                                "type": "Identifier",
                                "start": 222,
                                "end": 227,
                                "decorators": [],
                                "name": "Chain",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 228,
                                  "end": 229,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 236,
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 237,
                              "end": 244,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 239,
                                  "decorators": [],
                                  "name": "tt",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 244,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 250,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 251,
                          "end": 258,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 251,
                              "end": 253,
                              "decorators": [],
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 349,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 348,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 339,
                        "object": {
                          "type": "NewExpression",
                          "start": 321,
                          "end": 333,
                          "callee": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 330,
                            "decorators": [],
                            "name": "Chain",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 331,
                              "end": 332,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 339,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 340,
                          "end": 347,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 340,
                              "end": 342,
                              "decorators": [],
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "start": 346,
                            "end": 347,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 403,
                    "end": 460,
                    "expression": {
                      "type": "CallExpression",
                      "start": 403,
                      "end": 459,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 403,
                        "end": 450,
                        "object": {
                          "type": "CallExpression",
                          "start": 403,
                          "end": 445,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 403,
                            "end": 436,
                            "object": {
                              "type": "CallExpression",
                              "start": 403,
                              "end": 431,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 403,
                                "end": 422,
                                "object": {
                                  "type": "NewExpression",
                                  "start": 404,
                                  "end": 416,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 408,
                                    "end": 413,
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 414,
                                      "end": 415,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 418,
                                  "end": 422,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 423,
                                  "end": 430,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 423,
                                      "end": 425,
                                      "decorators": [],
                                      "name": "tt",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "start": 429,
                                    "end": 430,
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              ],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 436,
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 437,
                              "end": 444,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 437,
                                  "end": 439,
                                  "decorators": [],
                                  "name": "tt",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 443,
                                "end": 444,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 450,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 451,
                          "end": 458,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 451,
                              "end": 453,
                              "decorators": [],
                              "name": "tt",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 458,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 469,
                    "end": 526,
                    "expression": {
                      "type": "CallExpression",
                      "start": 469,
                      "end": 525,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 469,
                        "end": 516,
                        "object": {
                          "type": "CallExpression",
                          "start": 469,
                          "end": 511,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 469,
                            "end": 502,
                            "object": {
                              "type": "CallExpression",
                              "start": 469,
                              "end": 497,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 469,
                                "end": 488,
                                "object": {
                                  "type": "NewExpression",
                                  "start": 470,
                                  "end": 482,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 474,
                                    "end": 479,
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 480,
                                      "end": 481,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 484,
                                  "end": 488,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 489,
                                  "end": 496,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 489,
                                      "end": 491,
                                      "decorators": [],
                                      "name": "ss",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "start": 495,
                                    "end": 496,
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              ],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 498,
                              "end": 502,
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 503,
                              "end": 510,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 503,
                                  "end": 505,
                                  "decorators": [],
                                  "name": "ss",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 509,
                                "end": 510,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 516,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 517,
                          "end": 524,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 517,
                              "end": 519,
                              "decorators": [],
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "start": 523,
                            "end": 524,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 536,
                    "end": 548,
                    "argument": {
                      "type": "Literal",
                      "start": 543,
                      "end": 547,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 665,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 676,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 677,
        "end": 695,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 683,
            "end": 693,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 683,
              "end": 684,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 684,
              "end": 692,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 686,
                "end": 692
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
      "type": "ClassDeclaration",
      "start": 696,
      "end": 1425,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 708,
        "decorators": [],
        "name": "Chain2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 708,
        "end": 721,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 709,
            "end": 720,
            "name": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 719,
              "end": 720,
              "typeName": {
                "type": "Identifier",
                "start": 719,
                "end": 720,
                "decorators": [],
                "name": "I",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 722,
        "end": 1425,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 760,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 728,
              "end": 739,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 739,
              "end": 760,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 740,
                  "end": 755,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 755,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 752,
                      "end": 755,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 754,
                        "end": 755,
                        "typeName": {
                          "type": "Identifier",
                          "start": 754,
                          "end": 755,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 757,
                "end": 760,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 765,
            "end": 1423,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 765,
              "end": 769,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 769,
              "end": 1423,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 769,
                "end": 782,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 770,
                    "end": 781,
                    "name": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 771,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 780,
                      "end": 781,
                      "typeName": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 781,
                        "decorators": [],
                        "name": "T",
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
                  "start": 783,
                  "end": 798,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 785,
                    "end": 798,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 787,
                      "end": 798,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 788,
                          "end": 792,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 789,
                            "end": 792,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 791,
                              "end": 792,
                              "typeName": {
                                "type": "Identifier",
                                "start": 791,
                                "end": 792,
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
                        "start": 794,
                        "end": 798,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 797,
                          "end": 798,
                          "typeName": {
                            "type": "Identifier",
                            "start": 797,
                            "end": 798,
                            "decorators": [],
                            "name": "S",
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
                "start": 799,
                "end": 810,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 801,
                  "end": 810,
                  "typeName": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 807,
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 807,
                    "end": 810,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 808,
                        "end": 809,
                        "typeName": {
                          "type": "Identifier",
                          "start": 808,
                          "end": 809,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 811,
                "end": 1423,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 821,
                    "end": 830,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 825,
                        "end": 829,
                        "id": {
                          "type": "Identifier",
                          "start": 825,
                          "end": 829,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 826,
                            "end": 829,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 828,
                              "end": 829,
                              "typeName": {
                                "type": "Identifier",
                                "start": 828,
                                "end": 829,
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
                    "type": "VariableDeclaration",
                    "start": 839,
                    "end": 848,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 843,
                        "end": 847,
                        "id": {
                          "type": "Identifier",
                          "start": 843,
                          "end": 847,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 844,
                            "end": 847,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 846,
                              "end": 847,
                              "typeName": {
                                "type": "Identifier",
                                "start": 846,
                                "end": 847,
                                "decorators": [],
                                "name": "T",
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
                    "start": 857,
                    "end": 866,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 861,
                        "end": 865,
                        "id": {
                          "type": "Identifier",
                          "start": 861,
                          "end": 865,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 862,
                            "end": 865,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 864,
                              "end": 865,
                              "typeName": {
                                "type": "Identifier",
                                "start": 864,
                                "end": 865,
                                "decorators": [],
                                "name": "S",
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
                    "type": "ExpressionStatement",
                    "start": 1018,
                    "end": 1075,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1018,
                      "end": 1074,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1018,
                        "end": 1069,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1018,
                          "end": 1067,
                          "object": {
                            "type": "CallExpression",
                            "start": 1018,
                            "end": 1061,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1018,
                              "end": 1052,
                              "object": {
                                "type": "CallExpression",
                                "start": 1018,
                                "end": 1047,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1018,
                                  "end": 1038,
                                  "object": {
                                    "type": "NewExpression",
                                    "start": 1019,
                                    "end": 1032,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1023,
                                      "end": 1029,
                                      "decorators": [],
                                      "name": "Chain2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1030,
                                        "end": 1031,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1034,
                                    "end": 1038,
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1039,
                                    "end": 1046,
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1039,
                                        "end": 1041,
                                        "decorators": [],
                                        "name": "ii",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1045,
                                      "end": 1046,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "id": null,
                                    "generator": false
                                  }
                                ],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1048,
                                "end": 1052,
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1053,
                                "end": 1060,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1053,
                                    "end": 1055,
                                    "decorators": [],
                                    "name": "tt",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "start": 1059,
                                  "end": 1060,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "id": null,
                                "generator": false
                              }
                            ],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1062,
                            "end": 1067,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1068,
                          "end": 1069,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1072,
                        "end": 1074,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1216,
                    "end": 1301,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1216,
                      "end": 1300,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1216,
                        "end": 1295,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1216,
                          "end": 1293,
                          "object": {
                            "type": "CallExpression",
                            "start": 1216,
                            "end": 1287,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1216,
                              "end": 1278,
                              "object": {
                                "type": "CallExpression",
                                "start": 1216,
                                "end": 1273,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1216,
                                  "end": 1264,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 1216,
                                    "end": 1259,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1216,
                                      "end": 1250,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 1216,
                                        "end": 1245,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1216,
                                          "end": 1236,
                                          "object": {
                                            "type": "NewExpression",
                                            "start": 1217,
                                            "end": 1230,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 1221,
                                              "end": 1227,
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 1228,
                                                "end": 1229,
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1232,
                                            "end": 1236,
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "start": 1237,
                                            "end": 1244,
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1237,
                                                "end": 1239,
                                                "decorators": [],
                                                "name": "ii",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "start": 1243,
                                              "end": 1244,
                                              "decorators": [],
                                              "name": "t",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "id": null,
                                            "generator": false
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1246,
                                        "end": 1250,
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "start": 1251,
                                        "end": 1258,
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 1251,
                                            "end": 1253,
                                            "decorators": [],
                                            "name": "tt",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Identifier",
                                          "start": 1257,
                                          "end": 1258,
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "id": null,
                                        "generator": false
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1260,
                                    "end": 1264,
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1265,
                                    "end": 1272,
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1265,
                                        "end": 1267,
                                        "decorators": [],
                                        "name": "tt",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1271,
                                      "end": 1272,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "id": null,
                                    "generator": false
                                  }
                                ],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1274,
                                "end": 1278,
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1279,
                                "end": 1286,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1279,
                                    "end": 1281,
                                    "decorators": [],
                                    "name": "tt",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "start": 1285,
                                  "end": 1286,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "id": null,
                                "generator": false
                              }
                            ],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1288,
                            "end": 1293,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1294,
                          "end": 1295,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1298,
                        "end": 1300,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1310,
                    "end": 1395,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1310,
                      "end": 1394,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1310,
                        "end": 1389,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1310,
                          "end": 1387,
                          "object": {
                            "type": "CallExpression",
                            "start": 1310,
                            "end": 1381,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1310,
                              "end": 1372,
                              "object": {
                                "type": "CallExpression",
                                "start": 1310,
                                "end": 1367,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1310,
                                  "end": 1358,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 1310,
                                    "end": 1353,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1310,
                                      "end": 1344,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 1310,
                                        "end": 1339,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1310,
                                          "end": 1330,
                                          "object": {
                                            "type": "NewExpression",
                                            "start": 1311,
                                            "end": 1324,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 1315,
                                              "end": 1321,
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 1322,
                                                "end": 1323,
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1326,
                                            "end": 1330,
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "start": 1331,
                                            "end": 1338,
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1331,
                                                "end": 1333,
                                                "decorators": [],
                                                "name": "ii",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "start": 1337,
                                              "end": 1338,
                                              "decorators": [],
                                              "name": "s",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "id": null,
                                            "generator": false
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1340,
                                        "end": 1344,
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "start": 1345,
                                        "end": 1352,
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 1345,
                                            "end": 1347,
                                            "decorators": [],
                                            "name": "ss",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Identifier",
                                          "start": 1351,
                                          "end": 1352,
                                          "decorators": [],
                                          "name": "s",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "id": null,
                                        "generator": false
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1354,
                                    "end": 1358,
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1359,
                                    "end": 1366,
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1359,
                                        "end": 1361,
                                        "decorators": [],
                                        "name": "ss",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1365,
                                      "end": 1366,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "id": null,
                                    "generator": false
                                  }
                                ],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1368,
                                "end": 1372,
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1373,
                                "end": 1380,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1373,
                                    "end": 1375,
                                    "decorators": [],
                                    "name": "ss",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "start": 1379,
                                  "end": 1380,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "id": null,
                                "generator": false
                              }
                            ],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1382,
                            "end": 1387,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1388,
                          "end": 1389,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1392,
                        "end": 1394,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1405,
                    "end": 1417,
                    "argument": {
                      "type": "Literal",
                      "start": 1412,
                      "end": 1416,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
