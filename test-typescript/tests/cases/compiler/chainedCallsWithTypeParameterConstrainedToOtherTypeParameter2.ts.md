chainedCallsWithTypeParameterConstrainedToOtherTypeParameter2.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 556,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 554,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 554,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 554,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 113,
                    "end": 122,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 117,
                        "end": 121,
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 131,
                    "end": 140,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 135,
                        "end": 139,
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 260,
                    "expression": {
                      "type": "CallExpression",
                      "start": 217,
                      "end": 259,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 251,
                          "end": 258,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "decorators": [],
                            "name": "t",
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 251,
                              "end": 253,
                              "decorators": [],
                              "name": "ss",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 250,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 217,
                          "end": 245,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 237,
                              "end": 244,
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 244,
                                "decorators": [],
                                "name": "s",
                                "optional": false
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 239,
                                  "decorators": [],
                                  "name": "tt",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 217,
                            "end": 236,
                            "computed": false,
                            "object": {
                              "type": "NewExpression",
                              "start": 218,
                              "end": 230,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 228,
                                  "end": 229,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 222,
                                "end": 227,
                                "decorators": [],
                                "name": "Chain",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 236,
                              "decorators": [],
                              "name": "then",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 250,
                          "decorators": [],
                          "name": "then",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 349,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 348,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 340,
                          "end": 347,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 346,
                            "end": 347,
                            "decorators": [],
                            "name": "t",
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 340,
                              "end": 342,
                              "decorators": [],
                              "name": "ss",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 339,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 321,
                          "end": 333,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 331,
                              "end": 332,
                              "decorators": [],
                              "name": "s",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 330,
                            "decorators": [],
                            "name": "Chain",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 339,
                          "decorators": [],
                          "name": "then",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 403,
                    "end": 460,
                    "expression": {
                      "type": "CallExpression",
                      "start": 403,
                      "end": 459,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 451,
                          "end": 458,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 458,
                            "decorators": [],
                            "name": "t",
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 451,
                              "end": 453,
                              "decorators": [],
                              "name": "tt",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 403,
                        "end": 450,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 403,
                          "end": 445,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 437,
                              "end": 444,
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "start": 443,
                                "end": 444,
                                "decorators": [],
                                "name": "t",
                                "optional": false
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 437,
                                  "end": 439,
                                  "decorators": [],
                                  "name": "tt",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 403,
                            "end": 436,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 403,
                              "end": 431,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 423,
                                  "end": 430,
                                  "async": false,
                                  "body": {
                                    "type": "Identifier",
                                    "start": 429,
                                    "end": 430,
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 423,
                                      "end": 425,
                                      "decorators": [],
                                      "name": "tt",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 403,
                                "end": 422,
                                "computed": false,
                                "object": {
                                  "type": "NewExpression",
                                  "start": 404,
                                  "end": 416,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 414,
                                      "end": 415,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 408,
                                    "end": 413,
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 418,
                                  "end": 422,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 436,
                              "decorators": [],
                              "name": "then",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 450,
                          "decorators": [],
                          "name": "then",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 469,
                    "end": 526,
                    "expression": {
                      "type": "CallExpression",
                      "start": 469,
                      "end": 525,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 517,
                          "end": 524,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 523,
                            "end": 524,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 517,
                              "end": 519,
                              "decorators": [],
                              "name": "ss",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 469,
                        "end": 516,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 469,
                          "end": 511,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 503,
                              "end": 510,
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "start": 509,
                                "end": 510,
                                "decorators": [],
                                "name": "s",
                                "optional": false
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 503,
                                  "end": 505,
                                  "decorators": [],
                                  "name": "ss",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 469,
                            "end": 502,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 469,
                              "end": 497,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 489,
                                  "end": 496,
                                  "async": false,
                                  "body": {
                                    "type": "Identifier",
                                    "start": 495,
                                    "end": 496,
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 489,
                                      "end": 491,
                                      "decorators": [],
                                      "name": "ss",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 469,
                                "end": 488,
                                "computed": false,
                                "object": {
                                  "type": "NewExpression",
                                  "start": 470,
                                  "end": 482,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 480,
                                      "end": 481,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 474,
                                    "end": 479,
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 484,
                                  "end": 488,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 498,
                              "end": 502,
                              "decorators": [],
                              "name": "then",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 516,
                          "decorators": [],
                          "name": "then",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 536,
                    "end": 548,
                    "argument": {
                      "type": "Literal",
                      "start": 543,
                      "end": 547,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                                "optional": false
                              }
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
                            "optional": false
                          }
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
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 99,
                    "decorators": [],
                    "name": "Chain",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 62,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 63,
                    "end": 74,
                    "const": false,
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
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Chain",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 665,
      "end": 695,
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
            "key": {
              "type": "Identifier",
              "start": 683,
              "end": 684,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 684,
              "end": 692,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 686,
                "end": 692
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 676,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 696,
      "end": 1425,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 722,
        "end": 1425,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 760,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 728,
              "end": 739,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 739,
              "end": 760,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 757,
                "end": 760,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 765,
            "end": 1423,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 765,
              "end": 769,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 769,
              "end": 1423,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 811,
                "end": 1423,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 821,
                    "end": 830,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 825,
                        "end": 829,
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 839,
                    "end": 848,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 843,
                        "end": 847,
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 857,
                    "end": 866,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 861,
                        "end": 865,
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1018,
                          "end": 1067,
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "start": 1018,
                            "end": 1061,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1053,
                                "end": 1060,
                                "async": false,
                                "body": {
                                  "type": "Identifier",
                                  "start": 1059,
                                  "end": 1060,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1053,
                                    "end": 1055,
                                    "decorators": [],
                                    "name": "tt",
                                    "optional": false
                                  }
                                ]
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1018,
                              "end": 1052,
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "start": 1018,
                                "end": 1047,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1039,
                                    "end": 1046,
                                    "async": false,
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1045,
                                      "end": 1046,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false
                                    },
                                    "expression": true,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1039,
                                        "end": 1041,
                                        "decorators": [],
                                        "name": "ii",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1018,
                                  "end": 1038,
                                  "computed": false,
                                  "object": {
                                    "type": "NewExpression",
                                    "start": 1019,
                                    "end": 1032,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1030,
                                        "end": 1031,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1023,
                                      "end": 1029,
                                      "decorators": [],
                                      "name": "Chain2",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1034,
                                    "end": 1038,
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1048,
                                "end": 1052,
                                "decorators": [],
                                "name": "then",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1062,
                            "end": 1067,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1068,
                          "end": 1069,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1072,
                        "end": 1074,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
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
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1216,
                          "end": 1293,
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "start": 1216,
                            "end": 1287,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1279,
                                "end": 1286,
                                "async": false,
                                "body": {
                                  "type": "Identifier",
                                  "start": 1285,
                                  "end": 1286,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1279,
                                    "end": 1281,
                                    "decorators": [],
                                    "name": "tt",
                                    "optional": false
                                  }
                                ]
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1216,
                              "end": 1278,
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "start": 1216,
                                "end": 1273,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1265,
                                    "end": 1272,
                                    "async": false,
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1271,
                                      "end": 1272,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false
                                    },
                                    "expression": true,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1265,
                                        "end": 1267,
                                        "decorators": [],
                                        "name": "tt",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1216,
                                  "end": 1264,
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 1216,
                                    "end": 1259,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "start": 1251,
                                        "end": 1258,
                                        "async": false,
                                        "body": {
                                          "type": "Identifier",
                                          "start": 1257,
                                          "end": 1258,
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false
                                        },
                                        "expression": true,
                                        "generator": false,
                                        "id": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 1251,
                                            "end": 1253,
                                            "decorators": [],
                                            "name": "tt",
                                            "optional": false
                                          }
                                        ]
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1216,
                                      "end": 1250,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 1216,
                                        "end": 1245,
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "start": 1237,
                                            "end": 1244,
                                            "async": false,
                                            "body": {
                                              "type": "Identifier",
                                              "start": 1243,
                                              "end": 1244,
                                              "decorators": [],
                                              "name": "t",
                                              "optional": false
                                            },
                                            "expression": true,
                                            "generator": false,
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1237,
                                                "end": 1239,
                                                "decorators": [],
                                                "name": "ii",
                                                "optional": false
                                              }
                                            ]
                                          }
                                        ],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1216,
                                          "end": 1236,
                                          "computed": false,
                                          "object": {
                                            "type": "NewExpression",
                                            "start": 1217,
                                            "end": 1230,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 1228,
                                                "end": 1229,
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false
                                              }
                                            ],
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 1221,
                                              "end": 1227,
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1232,
                                            "end": 1236,
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1246,
                                        "end": 1250,
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1260,
                                    "end": 1264,
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1274,
                                "end": 1278,
                                "decorators": [],
                                "name": "then",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1288,
                            "end": 1293,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1294,
                          "end": 1295,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1298,
                        "end": 1300,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
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
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1310,
                          "end": 1387,
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "start": 1310,
                            "end": 1381,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1373,
                                "end": 1380,
                                "async": false,
                                "body": {
                                  "type": "Identifier",
                                  "start": 1379,
                                  "end": 1380,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1373,
                                    "end": 1375,
                                    "decorators": [],
                                    "name": "ss",
                                    "optional": false
                                  }
                                ]
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1310,
                              "end": 1372,
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "start": 1310,
                                "end": 1367,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1359,
                                    "end": 1366,
                                    "async": false,
                                    "body": {
                                      "type": "Identifier",
                                      "start": 1365,
                                      "end": 1366,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false
                                    },
                                    "expression": true,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1359,
                                        "end": 1361,
                                        "decorators": [],
                                        "name": "ss",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1310,
                                  "end": 1358,
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 1310,
                                    "end": 1353,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "start": 1345,
                                        "end": 1352,
                                        "async": false,
                                        "body": {
                                          "type": "Identifier",
                                          "start": 1351,
                                          "end": 1352,
                                          "decorators": [],
                                          "name": "s",
                                          "optional": false
                                        },
                                        "expression": true,
                                        "generator": false,
                                        "id": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 1345,
                                            "end": 1347,
                                            "decorators": [],
                                            "name": "ss",
                                            "optional": false
                                          }
                                        ]
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1310,
                                      "end": 1344,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 1310,
                                        "end": 1339,
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "start": 1331,
                                            "end": 1338,
                                            "async": false,
                                            "body": {
                                              "type": "Identifier",
                                              "start": 1337,
                                              "end": 1338,
                                              "decorators": [],
                                              "name": "s",
                                              "optional": false
                                            },
                                            "expression": true,
                                            "generator": false,
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1331,
                                                "end": 1333,
                                                "decorators": [],
                                                "name": "ii",
                                                "optional": false
                                              }
                                            ]
                                          }
                                        ],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1310,
                                          "end": 1330,
                                          "computed": false,
                                          "object": {
                                            "type": "NewExpression",
                                            "start": 1311,
                                            "end": 1324,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 1322,
                                                "end": 1323,
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false
                                              }
                                            ],
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 1315,
                                              "end": 1321,
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1326,
                                            "end": 1330,
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1340,
                                        "end": 1344,
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1354,
                                    "end": 1358,
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1368,
                                "end": 1372,
                                "decorators": [],
                                "name": "then",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1382,
                            "end": 1387,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1388,
                          "end": 1389,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1392,
                        "end": 1394,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1405,
                    "end": 1417,
                    "argument": {
                      "type": "Literal",
                      "start": 1412,
                      "end": 1416,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                                "optional": false
                              }
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
                            "optional": false
                          }
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
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 807,
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 769,
                "end": 782,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 770,
                    "end": 781,
                    "const": false,
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
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 771,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 708,
        "decorators": [],
        "name": "Chain2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 708,
        "end": 721,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 709,
            "end": 720,
            "const": false,
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
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
