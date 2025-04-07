__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1983,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Either",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 20,
        "end": 44,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 20,
            "end": 30,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 24,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 25,
                  "end": 26,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 29,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
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
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "Left",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 33,
            "end": 44,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 38,
              "end": 44,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 39,
                  "end": 40,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
              "start": 33,
              "end": 38,
              "decorators": [],
              "name": "Right",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "type": "ClassDeclaration",
      "start": 47,
      "end": 402,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 402,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 85,
                "end": 91,
                "literal": {
                  "type": "Literal",
                  "start": 85,
                  "end": 91,
                  "raw": "'Left'",
                  "value": "Left"
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 94,
              "end": 100,
              "raw": "'Left'",
              "value": "Left"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 116,
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "decorators": [],
              "name": "_L",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 140,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 156,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 178,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 157,
                  "end": 174,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 174,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 173,
                        "end": 174,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 245,
            "end": 314,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 248,
              "end": 314,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 314,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 308,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 297,
                      "end": 308,
                      "expression": {
                        "type": "ThisExpression",
                        "start": 297,
                        "end": 301
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 305,
                        "end": 308
                      }
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
                  "start": 252,
                  "end": 266,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 253,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 255,
                      "end": 266,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 256,
                          "end": 260,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 257,
                            "end": 260,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 259,
                              "end": 260,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 260,
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
                        "start": 262,
                        "end": 266,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 265,
                          "end": 266,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 265,
                            "end": 266,
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
                "start": 267,
                "end": 281,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 281,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 275,
                    "end": 281,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 276,
                        "end": 277,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 277,
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 279,
                        "end": 280,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
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
                    "start": 269,
                    "end": 275,
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 248,
                "end": 251,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 249,
                    "end": 250,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
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
            "start": 319,
            "end": 400,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 321,
              "decorators": [],
              "name": "ap",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 321,
              "end": 400,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 368,
                "end": 400,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 376,
                    "end": 394,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 383,
                      "end": 394,
                      "expression": {
                        "type": "Literal",
                        "start": 383,
                        "end": 387,
                        "raw": "null",
                        "value": null
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 391,
                        "end": 394
                      }
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
                  "start": 325,
                  "end": 352,
                  "decorators": [],
                  "name": "fab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 328,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 330,
                      "end": 352,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 336,
                        "end": 352,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 337,
                            "end": 338,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 337,
                              "end": 338,
                              "decorators": [],
                              "name": "L",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "start": 340,
                            "end": 351,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 341,
                                "end": 345,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 342,
                                  "end": 345,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 344,
                                    "end": 345,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 344,
                                      "end": 345,
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
                              "start": 347,
                              "end": 351,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 350,
                                "end": 351,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 350,
                                  "end": 351,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 336,
                        "decorators": [],
                        "name": "Either",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 353,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 355,
                  "end": 367,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 361,
                    "end": 367,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 362,
                        "end": 363,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 363,
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 365,
                        "end": 366,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
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
                    "start": 355,
                    "end": 361,
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 321,
                "end": 324,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 322,
                    "end": 323,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 57,
        "decorators": [],
        "name": "Left",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
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
      "type": "ClassDeclaration",
      "start": 404,
      "end": 714,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 422,
        "end": 714,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 428,
            "end": 460,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 441,
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 441,
              "end": 450,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 443,
                "end": 450,
                "literal": {
                  "type": "Literal",
                  "start": 443,
                  "end": 450,
                  "raw": "'Right'",
                  "value": "Right"
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 453,
              "end": 460,
              "raw": "'Right'",
              "value": "Right"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 465,
            "end": 480,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 474,
              "end": 476,
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 479,
                "end": 480,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 485,
            "end": 500,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 494,
              "end": 496,
              "decorators": [],
              "name": "_L",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 500,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 499,
                "end": 500,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 538,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 516,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 516,
              "end": 538,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 536,
                "end": 538,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 517,
                  "end": 534,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 534,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 531,
                      "end": 534,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 533,
                        "end": 534,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 533,
                          "end": 534,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 543,
            "end": 625,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 546,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 546,
              "end": 625,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 580,
                "end": 625,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 588,
                    "end": 619,
                    "argument": {
                      "type": "NewExpression",
                      "start": 595,
                      "end": 619,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 605,
                          "end": 618,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 607,
                              "end": 617,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 607,
                                "end": 611
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 612,
                                "end": 617,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 605,
                            "end": 606,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 604,
                        "decorators": [],
                        "name": "Right",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                  "start": 550,
                  "end": 564,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 551,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 553,
                      "end": 564,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 554,
                          "end": 558,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 555,
                            "end": 558,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 557,
                              "end": 558,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 557,
                                "end": 558,
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
                        "start": 560,
                        "end": 564,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 563,
                          "end": 564,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 563,
                            "end": 564,
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
                "start": 565,
                "end": 579,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 567,
                  "end": 579,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 573,
                    "end": 579,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 574,
                        "end": 575,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 575,
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 577,
                        "end": 578,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 578,
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
                    "start": 567,
                    "end": 573,
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 546,
                "end": 549,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 547,
                    "end": 548,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 548,
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
            "start": 630,
            "end": 712,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 630,
              "end": 632,
              "decorators": [],
              "name": "ap",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 632,
              "end": 712,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 679,
                "end": 712,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 687,
                    "end": 706,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 694,
                      "end": 705,
                      "expression": {
                        "type": "Literal",
                        "start": 694,
                        "end": 698,
                        "raw": "null",
                        "value": null
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 702,
                        "end": 705
                      }
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
                  "start": 636,
                  "end": 663,
                  "decorators": [],
                  "name": "fab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 639,
                    "end": 663,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 641,
                      "end": 663,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 647,
                        "end": 663,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 648,
                            "end": 649,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 649,
                              "decorators": [],
                              "name": "L",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "start": 651,
                            "end": 662,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 652,
                                "end": 656,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 653,
                                  "end": 656,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 655,
                                    "end": 656,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 655,
                                      "end": 656,
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
                              "start": 658,
                              "end": 662,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 661,
                                "end": 662,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 661,
                                  "end": 662,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 641,
                        "end": 647,
                        "decorators": [],
                        "name": "Either",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 664,
                "end": 678,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 666,
                  "end": 678,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 672,
                    "end": 678,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 673,
                        "end": 674,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 673,
                          "end": 674,
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 676,
                        "end": 677,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 677,
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
                    "start": 666,
                    "end": 672,
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 632,
                "end": 635,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 633,
                    "end": 634,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 415,
        "decorators": [],
        "name": "Right",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 415,
        "end": 421,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 416,
            "end": 417,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 419,
            "end": 420,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 419,
              "end": 420,
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
      "type": "ClassDeclaration",
      "start": 716,
      "end": 1321,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 750,
        "end": 1321,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 754,
            "end": 770,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 763,
              "end": 765,
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 766,
              "end": 769,
              "typeAnnotation": {
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
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 773,
            "end": 789,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 782,
              "end": 784,
              "decorators": [],
              "name": "_O",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 788,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 787,
                "end": 788,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 788,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 792,
            "end": 808,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 801,
              "end": 803,
              "decorators": [],
              "name": "_I",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 804,
              "end": 807,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 806,
                "end": 807,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 807,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 811,
            "end": 1207,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 822,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 822,
              "end": 1207,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1205,
                "end": 1207,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 868,
                  "end": 889,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 877,
                    "end": 889,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 881,
                      "end": 889,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 883,
                        "end": 889
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 926,
                  "end": 961,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 935,
                    "end": 961,
                    "decorators": [],
                    "name": "is",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 937,
                      "end": 961,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 939,
                        "end": 961,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 940,
                            "end": 950,
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 941,
                              "end": 950,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 943,
                                "end": 950
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 952,
                          "end": 961,
                          "typeAnnotation": {
                            "type": "TSTypePredicate",
                            "start": 955,
                            "end": 961,
                            "asserts": false,
                            "parameterName": {
                              "type": "Identifier",
                              "start": 955,
                              "end": 956,
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 960,
                              "end": 961,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 960,
                                "end": 961,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 960,
                                  "end": 961,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1044,
                  "end": 1107,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1053,
                    "end": 1107,
                    "decorators": [],
                    "name": "validate",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1061,
                      "end": 1107,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1063,
                        "end": 1107,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1064,
                            "end": 1072,
                            "decorators": [],
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1069,
                              "end": 1072,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1071,
                                "end": 1072,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1071,
                                  "end": 1072,
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1074,
                            "end": 1087,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1081,
                              "end": 1087,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1083,
                                "end": 1087,
                                "elementType": {
                                  "type": "TSTypeLiteral",
                                  "start": 1083,
                                  "end": 1085,
                                  "members": []
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1089,
                          "end": 1107,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1092,
                            "end": 1107,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1098,
                              "end": 1107,
                              "params": [
                                {
                                  "type": "TSArrayType",
                                  "start": 1099,
                                  "end": 1103,
                                  "elementType": {
                                    "type": "TSTypeLiteral",
                                    "start": 1099,
                                    "end": 1101,
                                    "members": []
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1105,
                                  "end": 1106,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1105,
                                    "end": 1106,
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
                              "start": 1092,
                              "end": 1098,
                              "decorators": [],
                              "name": "Either",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1172,
                  "end": 1200,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1181,
                    "end": 1200,
                    "decorators": [],
                    "name": "encode",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1187,
                      "end": 1200,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1189,
                        "end": 1200,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1190,
                            "end": 1194,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1191,
                              "end": 1194,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1193,
                                "end": 1194,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1193,
                                  "end": 1194,
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
                          "start": 1196,
                          "end": 1200,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1199,
                            "end": 1200,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1199,
                              "end": 1200,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1266,
            "end": 1319,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1266,
              "end": 1272,
              "decorators": [],
              "name": "decode",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1272,
              "end": 1319,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1296,
                "end": 1319,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1298,
                    "end": 1317,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 1305,
                      "end": 1316,
                      "expression": {
                        "type": "Literal",
                        "start": 1305,
                        "end": 1309,
                        "raw": "null",
                        "value": null
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1313,
                        "end": 1316
                      }
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
                  "start": 1273,
                  "end": 1277,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1274,
                    "end": 1277,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1276,
                      "end": 1277,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1276,
                        "end": 1277,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1278,
                "end": 1295,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1280,
                  "end": 1295,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1286,
                    "end": 1295,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 1287,
                        "end": 1291,
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "start": 1287,
                          "end": 1289,
                          "members": []
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1293,
                        "end": 1294,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1293,
                          "end": 1294,
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
                    "start": 1280,
                    "end": 1286,
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 722,
        "end": 726,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 726,
        "end": 749,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 727,
            "end": 728,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 727,
              "end": 728,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 730,
            "end": 735,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 734,
              "end": 735,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 734,
                "end": 735,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 730,
              "end": 731,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 737,
            "end": 748,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 741,
              "end": 748
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1323,
      "end": 1367,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1365,
        "end": 1367,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1345,
          "end": 1364,
          "expression": {
            "type": "Identifier",
            "start": 1345,
            "end": 1349,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1349,
            "end": 1364,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1350,
                "end": 1353
              },
              {
                "type": "TSAnyKeyword",
                "start": 1355,
                "end": 1358
              },
              {
                "type": "TSAnyKeyword",
                "start": 1360,
                "end": 1363
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1333,
        "end": 1336,
        "decorators": [],
        "name": "Any",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1369,
      "end": 1406,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1374,
        "end": 1380,
        "decorators": [],
        "name": "TypeOf",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1398,
        "end": 1405,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1400,
          "end": 1404,
          "literal": {
            "type": "Literal",
            "start": 1400,
            "end": 1404,
            "raw": "\"_A\"",
            "value": "_A"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 1398,
          "end": 1399,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1398,
            "end": 1399,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1380,
        "end": 1395,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1381,
            "end": 1394,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1391,
              "end": 1394,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1391,
                "end": 1394,
                "decorators": [],
                "name": "Any",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1381,
              "end": 1382,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1408,
      "end": 1502,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1413,
        "end": 1416,
        "decorators": [],
        "name": "ToB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1469,
        "end": 1501,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1477,
          "end": 1484,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1483,
            "end": 1484,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1483,
              "end": 1484,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1472,
          "end": 1473,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1487,
          "end": 1499,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1493,
            "end": 1499,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1494,
                "end": 1498,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1496,
                  "end": 1497,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1496,
                    "end": 1497,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1494,
                  "end": 1495,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1495,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1487,
            "end": 1493,
            "decorators": [],
            "name": "TypeOf",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1416,
        "end": 1466,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1417,
            "end": 1465,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 1427,
              "end": 1465,
              "constraint": {
                "type": "TSUnionType",
                "start": 1434,
                "end": 1458,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1434,
                    "end": 1440
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1443,
                    "end": 1449
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 1452,
                    "end": 1458
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 1429,
                "end": 1430,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1461,
                "end": 1464,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1464,
                  "decorators": [],
                  "name": "Any",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1417,
              "end": 1418,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1503,
      "end": 1548,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1508,
        "end": 1511,
        "decorators": [],
        "name": "ToA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1517,
        "end": 1547,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1525,
          "end": 1532,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1531,
            "end": 1532,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1531,
              "end": 1532,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1520,
          "end": 1521,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1535,
          "end": 1545,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1539,
            "end": 1545,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1540,
                "end": 1544,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1542,
                  "end": 1543,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1542,
                    "end": 1543,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1540,
                  "end": 1541,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1540,
                    "end": 1541,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1535,
            "end": 1539,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1511,
        "end": 1514,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1512,
            "end": 1513,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1512,
              "end": 1513,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1550,
      "end": 1631,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1555,
        "end": 1565,
        "decorators": [],
        "name": "NeededInfo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1592,
        "end": 1630,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1596,
            "end": 1628,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1596,
              "end": 1603,
              "decorators": [],
              "name": "ASchema",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1603,
              "end": 1627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1605,
                "end": 1627,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1608,
                  "end": 1627,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1609,
                      "end": 1626,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1609,
                        "end": 1626,
                        "decorators": [],
                        "name": "MyNamespaceSchema",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1605,
                  "end": 1608,
                  "decorators": [],
                  "name": "ToA",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1565,
        "end": 1589,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1566,
            "end": 1588,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 1586,
              "end": 1588,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1566,
              "end": 1583,
              "decorators": [],
              "name": "MyNamespaceSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1633,
      "end": 1691,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1640,
        "end": 1691,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1645,
          "end": 1651,
          "decorators": [],
          "name": "MyInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1654,
          "end": 1690,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1664,
            "end": 1690,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1665,
                "end": 1689,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1668,
                  "end": 1689,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1669,
                      "end": 1688,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1671,
                          "end": 1686,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1671,
                            "end": 1681,
                            "decorators": [],
                            "name": "initialize",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1681,
                            "end": 1686,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1683,
                              "end": 1686
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1665,
                  "end": 1668,
                  "decorators": [],
                  "name": "ToB",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1654,
            "end": 1664,
            "decorators": [],
            "name": "NeededInfo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1693,
      "end": 1720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1699,
          "end": 1719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1699,
            "end": 1711,
            "decorators": [],
            "name": "tmp1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1703,
              "end": 1711,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1705,
                "end": 1711,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1705,
                  "end": 1711,
                  "decorators": [],
                  "name": "MyInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 1714,
            "end": 1719,
            "expression": {
              "type": "Literal",
              "start": 1714,
              "end": 1718,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1721,
      "end": 1765,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1763,
        "end": 1765,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1730,
        "end": 1734,
        "decorators": [],
        "name": "tmp2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1757,
          "end": 1761,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1758,
            "end": 1761,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1760,
              "end": 1761,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1760,
                "end": 1761,
                "decorators": [],
                "name": "N",
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
        "start": 1734,
        "end": 1756,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1735,
            "end": 1755,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1745,
              "end": 1755,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1745,
                "end": 1755,
                "decorators": [],
                "name": "NeededInfo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1735,
              "end": 1736,
              "decorators": [],
              "name": "N",
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
      "start": 1766,
      "end": 1777,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1766,
        "end": 1776,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1771,
            "end": 1775,
            "decorators": [],
            "name": "tmp1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1766,
          "end": 1770,
          "decorators": [],
          "name": "tmp2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1862,
      "end": 1899,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1897,
        "end": 1899,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1868,
        "end": 1874,
        "decorators": [],
        "name": "Server",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1874,
        "end": 1896,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1875,
            "end": 1895,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1885,
              "end": 1895,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1885,
                "end": 1895,
                "decorators": [],
                "name": "NeededInfo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1875,
              "end": 1876,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1900,
      "end": 1947,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1907,
        "end": 1947,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 1945,
          "end": 1947,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1913,
          "end": 1921,
          "decorators": [],
          "name": "MyServer",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 1930,
          "end": 1936,
          "decorators": [],
          "name": "Server",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1936,
          "end": 1944,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1937,
              "end": 1943,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1937,
                "end": 1943,
                "decorators": [],
                "name": "MyInfo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
