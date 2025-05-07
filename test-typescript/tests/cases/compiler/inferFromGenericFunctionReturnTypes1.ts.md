__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 1541,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 380,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 380,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 121,
            "end": 133,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "decorators": [],
              "name": "_store",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 177,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 147,
                "end": 177,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 153,
                    "end": 173,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 153,
                      "end": 172,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 170,
                          "end": 171,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 153,
                        "end": 169,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 153,
                          "end": 164,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 164,
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 169,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "decorators": [],
                        "name": "A",
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
          },
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 279,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 190,
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 279,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 268,
                        "decorators": [],
                        "name": "transformer",
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 194,
                  "end": 232,
                  "decorators": [],
                  "name": "transformer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 207,
                      "end": 232,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 208,
                          "end": 219,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 209,
                            "end": 219,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 211,
                              "end": 219,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 216,
                                "end": 219,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 217,
                                    "end": 218,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 217,
                                      "end": 218,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 211,
                                "end": 216,
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
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
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 229,
                            "end": 232,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 230,
                                "end": 231,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 230,
                                  "end": 231,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 229,
                            "decorators": [],
                            "name": "SetOf",
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
                "start": 233,
                "end": 243,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 243,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 240,
                    "end": 243,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 242,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 240,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 190,
                "end": 193,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 191,
                    "end": 192,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 283,
            "end": 378,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 290,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 378,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 378,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 374,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 334,
                      "end": 373,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 354,
                          "end": 372,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 364,
                            "end": 372,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 367,
                                "end": 368,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 370,
                                "end": 371,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 364,
                              "end": 366,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 358,
                              "end": 359,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 353,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 334,
                          "end": 345,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 334,
                            "end": 338
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 345,
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 353,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 291,
                  "end": 324,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 295,
                      "end": 324,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 296,
                          "end": 300,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 297,
                            "end": 300,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 299,
                              "end": 300,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 299,
                                "end": 300,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 302,
                          "end": 315,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 307,
                            "end": 315,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 309,
                              "end": 315
                            }
                          }
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 113,
        "decorators": [],
        "name": "SetOf",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "A",
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
      "start": 382,
      "end": 581,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 398,
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 417,
          "end": 447,
          "decorators": [],
          "name": "fnA",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 447,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 422,
              "end": 447,
              "params": [
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 434,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 434,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 431,
                        "end": 434,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 432,
                            "end": 433,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 433,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 431,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 444,
                    "end": 447,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 445,
                        "end": 446,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 444,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 452,
          "end": 482,
          "decorators": [],
          "name": "fnB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 482,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 457,
              "end": 482,
              "params": [
                {
                  "type": "Identifier",
                  "start": 458,
                  "end": 469,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 461,
                      "end": 469,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 466,
                        "end": 469,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 467,
                            "end": 468,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 467,
                              "end": 468,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 466,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 479,
                    "end": 482,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 480,
                        "end": 481,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 479,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 487,
          "end": 517,
          "decorators": [],
          "name": "fnC",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 490,
            "end": 517,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 492,
              "end": 517,
              "params": [
                {
                  "type": "Identifier",
                  "start": 493,
                  "end": 504,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 494,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 496,
                      "end": 504,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 501,
                        "end": 504,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 502,
                            "end": 503,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 502,
                              "end": 503,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 496,
                        "end": 501,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 514,
                    "end": 517,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 515,
                        "end": 516,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 516,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 514,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 521,
          "end": 551,
          "decorators": [],
          "name": "fnD",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 551,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 526,
              "end": 551,
              "params": [
                {
                  "type": "Identifier",
                  "start": 527,
                  "end": 538,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 528,
                    "end": 538,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 530,
                      "end": 538,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 535,
                        "end": 538,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 536,
                            "end": 537,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 536,
                              "end": 537,
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 535,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 548,
                    "end": 551,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 549,
                        "end": 550,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 549,
                          "end": 550,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 548,
                    "decorators": [],
                    "name": "SetOf",
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
        "start": 554,
        "end": 580,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 555,
          "end": 580,
          "params": [
            {
              "type": "Identifier",
              "start": 556,
              "end": 567,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 557,
                "end": 567,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 559,
                  "end": 567,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 564,
                    "end": 567,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 565,
                        "end": 566,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 566,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 564,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 577,
                "end": 580,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 578,
                    "end": 579,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 572,
                "end": 577,
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 398,
        "end": 413,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 399,
            "end": 400,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 402,
            "end": 403,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 405,
            "end": 406,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 408,
            "end": 409,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 412,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 600,
      "end": 719,
      "async": false,
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
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 679,
                "end": 716,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 690,
                    "end": 712,
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 704,
                      "end": 712,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 707,
                          "end": 711,
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 706,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 691,
                        "end": 695,
                        "decorators": [],
                        "name": "prev",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 697,
                        "end": 699,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "Identifier",
                    "start": 714,
                    "end": 715,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 679,
                  "end": 689,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 682,
                    "decorators": [],
                    "name": "fns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 689,
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 670,
                  "end": 674,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 671,
                    "end": 674,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 673,
                      "end": 674,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 673,
                        "end": 674,
                        "decorators": [],
                        "name": "T",
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 616,
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 620,
          "end": 643,
          "argument": {
            "type": "Identifier",
            "start": 623,
            "end": 626,
            "decorators": [],
            "name": "fns",
            "optional": false,
            "typeAnnotation": null
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 630,
                    "end": 634,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 631,
                      "end": 634,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 633,
                        "end": 634,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 634,
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
                  "start": 636,
                  "end": 640,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 639,
                    "end": 640,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 639,
                      "end": 640,
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
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 644,
        "end": 657,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 646,
          "end": 657,
          "params": [
            {
              "type": "Identifier",
              "start": 647,
              "end": 651,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 651,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 651,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
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
            "start": 653,
            "end": 657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 656,
              "end": 657,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 616,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 617,
            "end": 618,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
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
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 904,
      "async": false,
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
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 835,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 825,
                            "end": 835,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 827,
                              "end": 835,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 832,
                                "end": 835,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 833,
                                    "end": 834,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 833,
                                      "end": 834,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 827,
                                "end": 832,
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 838,
                          "end": 849,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 842,
                            "end": 847,
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 855,
                    "end": 884,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 855,
                      "end": 883,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 865,
                          "end": 882,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 870,
                            "end": 882,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 876,
                                "end": 881,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 879,
                                    "end": 880,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 876,
                                  "end": 878,
                                  "decorators": [],
                                  "name": "fn",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 870,
                              "end": 875,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 870,
                                "end": 871,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 872,
                                "end": 875,
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 865,
                              "end": 866,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 855,
                        "end": 864,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 855,
                          "end": 856,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 864,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 889,
                    "end": 898,
                    "argument": {
                      "type": "Identifier",
                      "start": 896,
                      "end": 897,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 796,
                  "end": 807,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 797,
                    "end": 807,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 799,
                      "end": 807,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 804,
                        "end": 807,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 805,
                            "end": 806,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 806,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 799,
                        "end": 804,
                        "decorators": [],
                        "name": "SetOf",
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 733,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 740,
          "end": 755,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 742,
            "end": 755,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 744,
              "end": 755,
              "params": [
                {
                  "type": "Identifier",
                  "start": 745,
                  "end": 749,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 746,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 748,
                      "end": 749,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 755,
                    "decorators": [],
                    "name": "B",
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
        "start": 756,
        "end": 783,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 758,
          "end": 783,
          "params": [
            {
              "type": "Identifier",
              "start": 759,
              "end": 770,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 760,
                "end": 770,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 762,
                  "end": 770,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 767,
                    "end": 770,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 768,
                        "end": 769,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 768,
                          "end": 769,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 767,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 780,
                "end": 783,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 781,
                    "end": 782,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 775,
                "end": 780,
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 733,
        "end": 739,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 734,
            "end": 735,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 737,
            "end": 738,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 906,
      "end": 1138,
      "async": false,
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
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1022,
                          "end": 1028,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 1031,
                          "end": 1045,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1040,
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1040,
                            "end": 1043,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1041,
                                "end": 1042,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1041,
                                  "end": 1042,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                    "start": 1051,
                    "end": 1114,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1051,
                      "end": 1113,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1061,
                          "end": 1112,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1066,
                            "end": 1112,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 1074,
                                "end": 1106,
                                "alternate": null,
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "start": 1092,
                                  "end": 1106,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1092,
                                    "end": 1105,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1103,
                                        "end": 1104,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1092,
                                      "end": 1102,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1092,
                                        "end": 1098,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1099,
                                        "end": 1102,
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "test": {
                                  "type": "CallExpression",
                                  "start": 1078,
                                  "end": 1090,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1088,
                                      "end": 1089,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1078,
                                    "end": 1087,
                                    "decorators": [],
                                    "name": "predicate",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
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
                              "start": 1061,
                              "end": 1062,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1051,
                        "end": 1060,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1051,
                          "end": 1052,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1060,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1118,
                    "end": 1132,
                    "argument": {
                      "type": "Identifier",
                      "start": 1125,
                      "end": 1131,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 994,
                  "end": 1005,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 995,
                    "end": 1005,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 997,
                      "end": 1005,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1002,
                        "end": 1005,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1003,
                            "end": 1004,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1003,
                              "end": 1004,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 1002,
                        "decorators": [],
                        "name": "SetOf",
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 915,
        "end": 921,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 925,
          "end": 953,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 934,
            "end": 953,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 936,
              "end": 953,
              "params": [
                {
                  "type": "Identifier",
                  "start": 937,
                  "end": 941,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 938,
                    "end": 941,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 940,
                      "end": 941,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 940,
                        "end": 941,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 954,
        "end": 981,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 956,
          "end": 981,
          "params": [
            {
              "type": "Identifier",
              "start": 957,
              "end": 968,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 958,
                "end": 968,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 960,
                  "end": 968,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 965,
                    "end": 968,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 966,
                        "end": 967,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 966,
                          "end": 967,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 965,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 978,
                "end": 981,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 979,
                    "end": 980,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 980,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 973,
                "end": 978,
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 921,
        "end": 924,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 922,
            "end": 923,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 922,
              "end": 923,
              "decorators": [],
              "name": "A",
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
      "start": 1140,
      "end": 1176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1146,
          "end": 1175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1146,
            "end": 1153,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1156,
            "end": 1175,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1160,
              "end": 1165,
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1177,
      "end": 1192,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1177,
        "end": 1191,
        "arguments": [
          {
            "type": "Literal",
            "start": 1189,
            "end": 1190,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1177,
          "end": 1188,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1177,
            "end": 1184,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1185,
            "end": 1188,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1193,
      "end": 1208,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1193,
        "end": 1207,
        "arguments": [
          {
            "type": "Literal",
            "start": 1205,
            "end": 1206,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1193,
          "end": 1204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1193,
            "end": 1200,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1201,
            "end": 1204,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1224,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1209,
        "end": 1223,
        "arguments": [
          {
            "type": "Literal",
            "start": 1221,
            "end": 1222,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1209,
          "end": 1220,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1209,
            "end": 1216,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1217,
            "end": 1220,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1226,
      "end": 1367,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1226,
        "end": 1367,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1247,
            "end": 1365,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 1260,
                "end": 1284,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1267,
                    "end": 1283,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1272,
                      "end": 1283,
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1272,
                        "end": 1277,
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "start": 1272,
                          "end": 1273,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1276,
                          "end": 1277,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1282,
                        "end": 1283,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1267,
                        "end": 1268,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1260,
                  "end": 1266,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1290,
                "end": 1305,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1294,
                    "end": 1304,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1299,
                      "end": 1304,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1299,
                        "end": 1300,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1303,
                        "end": 1304,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1294,
                        "end": 1295,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1290,
                  "end": 1293,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1311,
                "end": 1330,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1315,
                    "end": 1329,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1320,
                      "end": 1329,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1320,
                        "end": 1321,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1324,
                        "end": 1329,
                        "raw": "'!!!'",
                        "value": "!!!",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1315,
                        "end": 1316,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1311,
                  "end": 1314,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1336,
                "end": 1361,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1340,
                    "end": 1360,
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 1345,
                      "end": 1360,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1345,
                        "end": 1358,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1345,
                          "end": 1346,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1347,
                          "end": 1358,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1341,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1336,
                  "end": 1339,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1247,
              "end": 1254,
              "decorators": [],
              "name": "compose",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1226,
          "end": 1243,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1226,
            "end": 1233,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1234,
            "end": 1243,
            "decorators": [],
            "name": "transform",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1369,
      "end": 1541,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1369,
        "end": 1541,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1390,
            "end": 1539,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 1403,
                "end": 1427,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1410,
                    "end": 1426,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1415,
                      "end": 1426,
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1415,
                        "end": 1420,
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "start": 1415,
                          "end": 1416,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1419,
                          "end": 1420,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1425,
                        "end": 1426,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1411,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1403,
                  "end": 1409,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1433,
                "end": 1448,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1437,
                    "end": 1447,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1442,
                      "end": 1447,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1442,
                        "end": 1443,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1446,
                        "end": 1447,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1437,
                        "end": 1438,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1433,
                  "end": 1436,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1454,
                "end": 1467,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1458,
                    "end": 1466,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 1463,
                      "end": 1466,
                      "raw": "123",
                      "value": 123,
                      "regex": null,
                      "bigint": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1458,
                        "end": 1459,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1454,
                  "end": 1457,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 1490,
                "end": 1515,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1494,
                    "end": 1514,
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 1499,
                      "end": 1514,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1499,
                        "end": 1512,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1499,
                          "end": 1500,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1512,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1494,
                        "end": 1495,
                        "decorators": [],
                        "name": "x",
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
                  "start": 1490,
                  "end": 1493,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1390,
              "end": 1397,
              "decorators": [],
              "name": "compose",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1369,
          "end": 1386,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1369,
            "end": 1376,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1377,
            "end": 1386,
            "decorators": [],
            "name": "transform",
            "optional": false,
            "typeAnnotation": null
          }
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
