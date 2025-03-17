__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 1542,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 113,
        "name": "SetOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 380,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 121,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "name": "_store",
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
              "start": 127,
              "end": 132,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 129,
                "end": 132,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 130,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "name": "A",
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
                "start": 147,
                "end": 177,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 153,
                    "end": 173,
                    "expression": {
                      "type": "CallExpression",
                      "start": 153,
                      "end": 172,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 153,
                        "end": 169,
                        "object": {
                          "type": "MemberExpression",
                          "start": 153,
                          "end": 164,
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 164,
                            "name": "_store",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 169,
                          "name": "push",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 170,
                          "end": 171,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 279,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 190,
              "name": "transform",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 194,
                  "end": 232,
                  "name": "transformer",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 207,
                      "end": 232,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 208,
                          "end": 219,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 209,
                            "end": 219,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 211,
                              "end": 219,
                              "typeName": {
                                "type": "Identifier",
                                "start": 211,
                                "end": 216,
                                "name": "SetOf",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 216,
                                "end": 219,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 217,
                                    "end": 218,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 217,
                                      "end": 218,
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 221,
                        "end": 232,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 224,
                          "end": 232,
                          "typeName": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 229,
                            "name": "SetOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 229,
                            "end": 232,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 230,
                                "end": 231,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 230,
                                  "end": 231,
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 279,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 250,
                    "end": 275,
                    "argument": {
                      "type": "CallExpression",
                      "start": 257,
                      "end": 274,
                      "callee": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 268,
                        "name": "transformer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 190,
                "end": 193,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 191,
                    "end": 192,
                    "name": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "name": "B",
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
                "start": 233,
                "end": 243,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 243,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 240,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 240,
                    "end": 243,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 242,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 283,
            "end": 378,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 290,
              "name": "forEach",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 378,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 291,
                  "end": 324,
                  "name": "fn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 295,
                      "end": 324,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 296,
                          "end": 300,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 297,
                            "end": 300,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 299,
                              "end": 300,
                              "typeName": {
                                "type": "Identifier",
                                "start": 299,
                                "end": 300,
                                "name": "A",
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
                          "start": 302,
                          "end": 315,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 307,
                            "end": 315,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 309,
                              "end": 315
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 317,
                        "end": 324,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 320,
                          "end": 324
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 378,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 374,
                    "expression": {
                      "type": "CallExpression",
                      "start": 334,
                      "end": 373,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 353,
                        "object": {
                          "type": "MemberExpression",
                          "start": 334,
                          "end": 345,
                          "object": {
                            "type": "ThisExpression",
                            "start": 334,
                            "end": 338
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 345,
                            "name": "_store",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 353,
                          "name": "forEach",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 354,
                          "end": 372,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 358,
                              "end": 359,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 364,
                            "end": 372,
                            "callee": {
                              "type": "Identifier",
                              "start": 364,
                              "end": 366,
                              "name": "fn",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 367,
                                "end": 368,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 370,
                                "end": 371,
                                "name": "i",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
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
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 382,
      "end": 581,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 398,
        "name": "compose",
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
          "start": 417,
          "end": 447,
          "name": "fnA",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 447,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 422,
              "end": 447,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 434,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 431,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 431,
                        "end": 434,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 432,
                            "end": 433,
                            "typeName": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 433,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 436,
                "end": 447,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 439,
                  "end": 447,
                  "typeName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 444,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 444,
                    "end": 447,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 445,
                        "end": 446,
                        "typeName": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 452,
          "end": 482,
          "name": "fnB",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 482,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 457,
              "end": 482,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 458,
                  "end": 469,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 461,
                      "end": 469,
                      "typeName": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 466,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 466,
                        "end": 469,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 467,
                            "end": 468,
                            "typeName": {
                              "type": "Identifier",
                              "start": 467,
                              "end": 468,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 471,
                "end": 482,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 474,
                  "end": 482,
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 479,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 479,
                    "end": 482,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 480,
                        "end": 481,
                        "typeName": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 487,
          "end": 517,
          "name": "fnC",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 490,
            "end": 517,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 492,
              "end": 517,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 493,
                  "end": 504,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 494,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 496,
                      "end": 504,
                      "typeName": {
                        "type": "Identifier",
                        "start": 496,
                        "end": 501,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 501,
                        "end": 504,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 502,
                            "end": 503,
                            "typeName": {
                              "type": "Identifier",
                              "start": 502,
                              "end": 503,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 506,
                "end": 517,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 509,
                  "end": 517,
                  "typeName": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 514,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 514,
                    "end": 517,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 515,
                        "end": 516,
                        "typeName": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 516,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 521,
          "end": 551,
          "name": "fnD",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 551,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 526,
              "end": 551,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 527,
                  "end": 538,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 528,
                    "end": 538,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 530,
                      "end": 538,
                      "typeName": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 535,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 535,
                        "end": 538,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 536,
                            "end": 537,
                            "typeName": {
                              "type": "Identifier",
                              "start": 536,
                              "end": 537,
                              "name": "D",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 540,
                "end": 551,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 543,
                  "end": 551,
                  "typeName": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 548,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 548,
                    "end": 551,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 549,
                        "end": 550,
                        "typeName": {
                          "type": "Identifier",
                          "start": 549,
                          "end": 550,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 398,
        "end": 413,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 399,
            "end": 400,
            "name": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 402,
            "end": 403,
            "name": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 405,
            "end": 406,
            "name": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 408,
            "end": 409,
            "name": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 412,
            "name": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "name": "E",
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
        "start": 554,
        "end": 580,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 555,
          "end": 580,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 556,
              "end": 567,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 557,
                "end": 567,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 559,
                  "end": 567,
                  "typeName": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 564,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 564,
                    "end": 567,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 565,
                        "end": 566,
                        "typeName": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 566,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 569,
            "end": 580,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 572,
              "end": 580,
              "typeName": {
                "type": "Identifier",
                "start": 572,
                "end": 577,
                "name": "SetOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 577,
                "end": 580,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 578,
                    "end": 579,
                    "typeName": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 600,
      "end": 719,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 616,
        "name": "compose",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 620,
          "end": 643,
          "argument": {
            "type": "Identifier",
            "start": 623,
            "end": 626,
            "name": "fns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 643,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 628,
              "end": 643,
              "elementType": {
                "type": "TSFunctionType",
                "start": 629,
                "end": 640,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 630,
                    "end": 634,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 631,
                      "end": 634,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 633,
                        "end": 634,
                        "typeName": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 634,
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
                  "start": 636,
                  "end": 640,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 639,
                    "end": 640,
                    "typeName": {
                      "type": "Identifier",
                      "start": 639,
                      "end": 640,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 658,
        "end": 719,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 662,
            "end": 717,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 669,
              "end": 716,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 670,
                  "end": 674,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 671,
                    "end": 674,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 673,
                      "end": 674,
                      "typeName": {
                        "type": "Identifier",
                        "start": 673,
                        "end": 674,
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
              "body": {
                "type": "CallExpression",
                "start": 679,
                "end": 716,
                "callee": {
                  "type": "MemberExpression",
                  "start": 679,
                  "end": 689,
                  "object": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 682,
                    "name": "fns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 689,
                    "name": "reduce",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 690,
                    "end": 712,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 691,
                        "end": 695,
                        "name": "prev",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 697,
                        "end": 699,
                        "name": "fn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 704,
                      "end": 712,
                      "callee": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 706,
                        "name": "fn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 707,
                          "end": 711,
                          "name": "prev",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "Identifier",
                    "start": 714,
                    "end": 715,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 616,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 617,
            "end": 618,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
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
        "start": 644,
        "end": 657,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 646,
          "end": 657,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 647,
              "end": 651,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 651,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 651,
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
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
            "start": 653,
            "end": 657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 656,
              "end": 657,
              "typeName": {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 904,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 733,
        "name": "map",
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
          "start": 740,
          "end": 755,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 742,
            "end": 755,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 744,
              "end": 755,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 745,
                  "end": 749,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 746,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 748,
                      "end": 749,
                      "typeName": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "name": "A",
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
                "start": 751,
                "end": 755,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 754,
                  "end": 755,
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 755,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 784,
        "end": 904,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 788,
            "end": 902,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 795,
              "end": 902,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 796,
                  "end": 807,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 797,
                    "end": 807,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 799,
                      "end": 807,
                      "typeName": {
                        "type": "Identifier",
                        "start": 799,
                        "end": 804,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 804,
                        "end": 807,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 805,
                            "end": 806,
                            "typeName": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 806,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 812,
                "end": 902,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 818,
                    "end": 850,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 824,
                        "end": 849,
                        "id": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 835,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 825,
                            "end": 835,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 827,
                              "end": 835,
                              "typeName": {
                                "type": "Identifier",
                                "start": 827,
                                "end": 832,
                                "name": "SetOf",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 832,
                                "end": 835,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 833,
                                    "end": 834,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 833,
                                      "end": 834,
                                      "name": "B",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 838,
                          "end": 849,
                          "callee": {
                            "type": "Identifier",
                            "start": 842,
                            "end": 847,
                            "name": "SetOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 855,
                    "end": 884,
                    "expression": {
                      "type": "CallExpression",
                      "start": 855,
                      "end": 883,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 855,
                        "end": 864,
                        "object": {
                          "type": "Identifier",
                          "start": 855,
                          "end": 856,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 864,
                          "name": "forEach",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 865,
                          "end": 882,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 865,
                              "end": 866,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 870,
                            "end": 882,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 870,
                              "end": 875,
                              "object": {
                                "type": "Identifier",
                                "start": 870,
                                "end": 871,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 872,
                                "end": 875,
                                "name": "add",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 876,
                                "end": 881,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 876,
                                  "end": 878,
                                  "name": "fn",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 879,
                                    "end": 880,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
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
                    "type": "ReturnStatement",
                    "start": 889,
                    "end": 898,
                    "argument": {
                      "type": "Identifier",
                      "start": 896,
                      "end": 897,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 733,
        "end": 739,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 734,
            "end": 735,
            "name": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 737,
            "end": 738,
            "name": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
              "name": "B",
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
        "start": 756,
        "end": 783,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 758,
          "end": 783,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 759,
              "end": 770,
              "name": "s",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 760,
                "end": 770,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 762,
                  "end": 770,
                  "typeName": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 767,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 767,
                    "end": 770,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 768,
                        "end": 769,
                        "typeName": {
                          "type": "Identifier",
                          "start": 768,
                          "end": 769,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 772,
            "end": 783,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 775,
              "end": 783,
              "typeName": {
                "type": "Identifier",
                "start": 775,
                "end": 780,
                "name": "SetOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 780,
                "end": 783,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 781,
                    "end": 782,
                    "typeName": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 906,
      "end": 1138,
      "id": {
        "type": "Identifier",
        "start": 915,
        "end": 921,
        "name": "filter",
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
          "start": 925,
          "end": 953,
          "name": "predicate",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 934,
            "end": 953,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 936,
              "end": 953,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 937,
                  "end": 941,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 938,
                    "end": 941,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 940,
                      "end": 941,
                      "typeName": {
                        "type": "Identifier",
                        "start": 940,
                        "end": 941,
                        "name": "A",
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
                "start": 943,
                "end": 953,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 946,
                  "end": 953
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 982,
        "end": 1138,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 986,
            "end": 1136,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 993,
              "end": 1136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 994,
                  "end": 1005,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 995,
                    "end": 1005,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 997,
                      "end": 1005,
                      "typeName": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 1002,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1002,
                        "end": 1005,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1003,
                            "end": 1004,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1003,
                              "end": 1004,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1010,
                "end": 1136,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1016,
                    "end": 1046,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1022,
                        "end": 1045,
                        "id": {
                          "type": "Identifier",
                          "start": 1022,
                          "end": 1028,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 1031,
                          "end": 1045,
                          "callee": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1040,
                            "name": "SetOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1040,
                            "end": 1043,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1041,
                                "end": 1042,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1041,
                                  "end": 1042,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                    "start": 1051,
                    "end": 1114,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1051,
                      "end": 1113,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1051,
                        "end": 1060,
                        "object": {
                          "type": "Identifier",
                          "start": 1051,
                          "end": 1052,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1060,
                          "name": "forEach",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1061,
                          "end": 1112,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1061,
                              "end": 1062,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1066,
                            "end": 1112,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 1074,
                                "end": 1106,
                                "test": {
                                  "type": "CallExpression",
                                  "start": 1078,
                                  "end": 1090,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1078,
                                    "end": 1087,
                                    "name": "predicate",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1088,
                                      "end": 1089,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "start": 1092,
                                  "end": 1106,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1092,
                                    "end": 1105,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1092,
                                      "end": 1102,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1092,
                                        "end": 1098,
                                        "name": "result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1099,
                                        "end": 1102,
                                        "name": "add",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1103,
                                        "end": 1104,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                },
                                "alternate": null
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
                    "type": "ReturnStatement",
                    "start": 1118,
                    "end": 1132,
                    "argument": {
                      "type": "Identifier",
                      "start": 1125,
                      "end": 1131,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 921,
        "end": 924,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 922,
            "end": 923,
            "name": {
              "type": "Identifier",
              "start": 922,
              "end": 923,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 954,
        "end": 981,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 956,
          "end": 981,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 957,
              "end": 968,
              "name": "s",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 958,
                "end": 968,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 960,
                  "end": 968,
                  "typeName": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 965,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 965,
                    "end": 968,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 966,
                        "end": 967,
                        "typeName": {
                          "type": "Identifier",
                          "start": 966,
                          "end": 967,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 970,
            "end": 981,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 973,
              "end": 981,
              "typeName": {
                "type": "Identifier",
                "start": 973,
                "end": 978,
                "name": "SetOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 978,
                "end": 981,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 979,
                    "end": 980,
                    "typeName": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 980,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1140,
      "end": 1176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1146,
          "end": 1175,
          "id": {
            "type": "Identifier",
            "start": 1146,
            "end": 1153,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1156,
            "end": 1175,
            "callee": {
              "type": "Identifier",
              "start": 1160,
              "end": 1165,
              "name": "SetOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1165,
              "end": 1173,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1166,
                  "end": 1172
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
      "start": 1177,
      "end": 1192,
      "expression": {
        "type": "CallExpression",
        "start": 1177,
        "end": 1191,
        "callee": {
          "type": "MemberExpression",
          "start": 1177,
          "end": 1188,
          "object": {
            "type": "Identifier",
            "start": 1177,
            "end": 1184,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1185,
            "end": 1188,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1189,
            "end": 1190,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1193,
      "end": 1208,
      "expression": {
        "type": "CallExpression",
        "start": 1193,
        "end": 1207,
        "callee": {
          "type": "MemberExpression",
          "start": 1193,
          "end": 1204,
          "object": {
            "type": "Identifier",
            "start": 1193,
            "end": 1200,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1201,
            "end": 1204,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1205,
            "end": 1206,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1224,
      "expression": {
        "type": "CallExpression",
        "start": 1209,
        "end": 1223,
        "callee": {
          "type": "MemberExpression",
          "start": 1209,
          "end": 1220,
          "object": {
            "type": "Identifier",
            "start": 1209,
            "end": 1216,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1217,
            "end": 1220,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1221,
            "end": 1222,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1226,
      "end": 1367,
      "expression": {
        "type": "CallExpression",
        "start": 1226,
        "end": 1367,
        "callee": {
          "type": "MemberExpression",
          "start": 1226,
          "end": 1243,
          "object": {
            "type": "Identifier",
            "start": 1226,
            "end": 1233,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1234,
            "end": 1243,
            "name": "transform",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1247,
            "end": 1365,
            "callee": {
              "type": "Identifier",
              "start": 1247,
              "end": 1254,
              "name": "compose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 1260,
                "end": 1284,
                "callee": {
                  "type": "Identifier",
                  "start": 1260,
                  "end": 1266,
                  "name": "filter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1267,
                    "end": 1283,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1267,
                        "end": 1268,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1272,
                      "end": 1283,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1272,
                        "end": 1277,
                        "left": {
                          "type": "Identifier",
                          "start": 1272,
                          "end": 1273,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "start": 1276,
                          "end": 1277,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 1282,
                        "end": 1283,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1290,
                "end": 1305,
                "callee": {
                  "type": "Identifier",
                  "start": 1290,
                  "end": 1293,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1294,
                    "end": 1304,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1294,
                        "end": 1295,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1299,
                      "end": 1304,
                      "left": {
                        "type": "Identifier",
                        "start": 1299,
                        "end": 1300,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1303,
                        "end": 1304,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1311,
                "end": 1330,
                "callee": {
                  "type": "Identifier",
                  "start": 1311,
                  "end": 1314,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1315,
                    "end": 1329,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1315,
                        "end": 1316,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1320,
                      "end": 1329,
                      "left": {
                        "type": "Identifier",
                        "start": 1320,
                        "end": 1321,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 1324,
                        "end": 1329,
                        "value": "!!!",
                        "raw": "'!!!'"
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1336,
                "end": 1361,
                "callee": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1339,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1340,
                    "end": 1360,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1341,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 1345,
                      "end": 1360,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1345,
                        "end": 1358,
                        "object": {
                          "type": "Identifier",
                          "start": 1345,
                          "end": 1346,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1347,
                          "end": 1358,
                          "name": "toUpperCase",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1369,
      "end": 1541,
      "expression": {
        "type": "CallExpression",
        "start": 1369,
        "end": 1541,
        "callee": {
          "type": "MemberExpression",
          "start": 1369,
          "end": 1386,
          "object": {
            "type": "Identifier",
            "start": 1369,
            "end": 1376,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1377,
            "end": 1386,
            "name": "transform",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1390,
            "end": 1539,
            "callee": {
              "type": "Identifier",
              "start": 1390,
              "end": 1397,
              "name": "compose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 1403,
                "end": 1427,
                "callee": {
                  "type": "Identifier",
                  "start": 1403,
                  "end": 1409,
                  "name": "filter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1410,
                    "end": 1426,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1411,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1415,
                      "end": 1426,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1415,
                        "end": 1420,
                        "left": {
                          "type": "Identifier",
                          "start": 1415,
                          "end": 1416,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "start": 1419,
                          "end": 1420,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 1425,
                        "end": 1426,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1433,
                "end": 1448,
                "callee": {
                  "type": "Identifier",
                  "start": 1433,
                  "end": 1436,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1437,
                    "end": 1447,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1437,
                        "end": 1438,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1442,
                      "end": 1447,
                      "left": {
                        "type": "Identifier",
                        "start": 1442,
                        "end": 1443,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1446,
                        "end": 1447,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1454,
                "end": 1467,
                "callee": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1457,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1458,
                    "end": 1466,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1458,
                        "end": 1459,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 1463,
                      "end": 1466,
                      "value": 123,
                      "raw": "123"
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1490,
                "end": 1515,
                "callee": {
                  "type": "Identifier",
                  "start": 1490,
                  "end": 1493,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1494,
                    "end": 1514,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1494,
                        "end": 1495,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 1499,
                      "end": 1514,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1499,
                        "end": 1512,
                        "object": {
                          "type": "Identifier",
                          "start": 1499,
                          "end": 1500,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1512,
                          "name": "toUpperCase",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
