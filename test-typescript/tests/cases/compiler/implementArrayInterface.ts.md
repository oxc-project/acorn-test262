__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1668,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1667,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 1667,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 59,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 59,
              "end": 70,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 63,
                  "end": 69
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 89,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 89,
              "end": 100,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 111,
              "end": 147,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 127,
                  "end": 140,
                  "argument": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 135,
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 137,
                      "end": 140,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 137,
                        "end": 138,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 138,
                          "decorators": [],
                          "name": "U",
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
                "start": 141,
                "end": 146,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 143,
                  "end": 146,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 144,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 111,
                "end": 126,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 112,
                    "end": 125,
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 122,
                      "end": 125,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 122,
                        "end": 123,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "U",
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
            "start": 152,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 158,
              "end": 179,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 159,
                  "end": 172,
                  "argument": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 167,
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 167,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 169,
                      "end": 172,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 170,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
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
                "start": 173,
                "end": 178,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 175,
                  "end": 178,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 176,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 217,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 188,
              "decorators": [],
              "name": "join",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 188,
              "end": 217,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 207,
                  "decorators": [],
                  "name": "separator",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 201,
                      "end": 207
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 208,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 210,
                  "end": 216
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "pop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 225,
              "end": 231,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 230,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 229,
                  "end": 230,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
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
          {
            "type": "MethodDefinition",
            "start": 236,
            "end": 264,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 240,
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 240,
              "end": 264,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 241,
                  "end": 254,
                  "argument": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 249,
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 251,
                      "end": 254,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 251,
                        "end": 252,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
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
                "start": 255,
                "end": 263,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 257,
                  "end": 263
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 269,
            "end": 284,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 276,
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 276,
              "end": 284,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 278,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 280,
                  "end": 283,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 280,
                    "end": 281,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 289,
            "end": 300,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 294,
              "decorators": [],
              "name": "shift",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 294,
              "end": 300,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 296,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 298,
                  "end": 299,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
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
          {
            "type": "MethodDefinition",
            "start": 305,
            "end": 346,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 310,
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 310,
              "end": 346,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 311,
                  "end": 325,
                  "decorators": [],
                  "name": "start",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 319,
                      "end": 325
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 339,
                  "decorators": [],
                  "name": "end",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 333,
                      "end": 339
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 345,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 342,
                  "end": 345,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 342,
                    "end": 343,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 351,
            "end": 398,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 355,
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 355,
              "end": 398,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 390,
                  "decorators": [],
                  "name": "compareFn",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 366,
                    "end": 390,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 368,
                      "end": 390,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 369,
                          "end": 373,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 370,
                            "end": 373,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 372,
                              "end": 373,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 372,
                                "end": 373,
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
                          "start": 375,
                          "end": 379,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 376,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 378,
                              "end": 379,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 378,
                                "end": 379,
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
                        "start": 381,
                        "end": 390,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 391,
                "end": 397,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 393,
                  "end": 397
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 403,
            "end": 430,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 403,
              "end": 409,
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 409,
              "end": 430,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 410,
                  "end": 423,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 424,
                "end": 429,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 426,
                  "end": 429,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 426,
                    "end": 427,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 435,
            "end": 498,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 441,
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 441,
              "end": 498,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 455,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 455,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 449,
                      "end": 455
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 457,
                  "end": 476,
                  "decorators": [],
                  "name": "deleteCount",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 468,
                    "end": 476,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 470,
                      "end": 476
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 478,
                  "end": 491,
                  "argument": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 486,
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 491,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 488,
                      "end": 491,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 488,
                        "end": 489,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 489,
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
                "start": 492,
                "end": 497,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 494,
                  "end": 497,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 494,
                    "end": 495,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 495,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 503,
            "end": 534,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 510,
              "decorators": [],
              "name": "unshift",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 510,
              "end": 534,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 511,
                  "end": 524,
                  "argument": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 519,
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 524,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 521,
                      "end": 524,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 521,
                        "end": 522,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 521,
                          "end": 522,
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
                "start": 525,
                "end": 533,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 540,
            "end": 594,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 547,
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 547,
              "end": 594,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 548,
                  "end": 564,
                  "decorators": [],
                  "name": "searchElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 561,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 584,
                  "decorators": [],
                  "name": "fromIndex",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 576,
                    "end": 584,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 578,
                      "end": 584
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 585,
                "end": 593,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 587,
                  "end": 593
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 599,
            "end": 657,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 599,
              "end": 610,
              "decorators": [],
              "name": "lastIndexOf",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 610,
              "end": 657,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 611,
                  "end": 627,
                  "decorators": [],
                  "name": "searchElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 624,
                    "end": 627,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 626,
                      "end": 627,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
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
                  "start": 629,
                  "end": 647,
                  "decorators": [],
                  "name": "fromIndex",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 639,
                    "end": 647,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 641,
                      "end": 647
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 656,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 650,
                  "end": 656
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 662,
            "end": 754,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 667,
              "decorators": [],
              "name": "every",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 667,
              "end": 754,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 728,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 678,
                    "end": 728,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 680,
                      "end": 728,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 681,
                          "end": 689,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 686,
                            "end": 689,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 688,
                              "end": 689,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 688,
                                "end": 689,
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
                          "start": 691,
                          "end": 704,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 696,
                            "end": 704,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 698,
                              "end": 704
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 706,
                          "end": 716,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 711,
                            "end": 716,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 713,
                              "end": 716,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 713,
                                "end": 714,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 713,
                                  "end": 714,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 718,
                        "end": 728,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 721,
                          "end": 728
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 730,
                  "end": 743,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 738,
                    "end": 743,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 740,
                      "end": 743
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 744,
                "end": 753,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 746,
                  "end": 753
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 759,
            "end": 850,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 759,
              "end": 763,
              "decorators": [],
              "name": "some",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 763,
              "end": 850,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 764,
                  "end": 824,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 774,
                    "end": 824,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 776,
                      "end": 824,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 777,
                          "end": 785,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 782,
                            "end": 785,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 784,
                              "end": 785,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 784,
                                "end": 785,
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
                          "start": 787,
                          "end": 800,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 792,
                            "end": 800,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 794,
                              "end": 800
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 802,
                          "end": 812,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 807,
                            "end": 812,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 809,
                              "end": 812,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 809,
                                "end": 810,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 809,
                                  "end": 810,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 814,
                        "end": 824,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 817,
                          "end": 824
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 826,
                  "end": 839,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 834,
                    "end": 839,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 836,
                      "end": 839
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 840,
                "end": 849,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 842,
                  "end": 849
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 855,
            "end": 943,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 855,
              "end": 862,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 862,
              "end": 943,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 863,
                  "end": 920,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 873,
                    "end": 920,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 875,
                      "end": 920,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 876,
                          "end": 884,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 881,
                            "end": 884,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 883,
                              "end": 884,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 883,
                                "end": 884,
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
                          "start": 886,
                          "end": 899,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 891,
                            "end": 899,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 893,
                              "end": 899
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 901,
                          "end": 911,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 906,
                            "end": 911,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 908,
                              "end": 911,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 908,
                                "end": 909,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 908,
                                  "end": 909,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 913,
                        "end": 920,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 916,
                          "end": 920
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 922,
                  "end": 935,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 930,
                    "end": 935,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 932,
                      "end": 935
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 936,
                "end": 942,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 938,
                  "end": 942
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 948,
            "end": 1031,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 948,
              "end": 951,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 951,
              "end": 1031,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 955,
                  "end": 1009,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 965,
                    "end": 1009,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 967,
                      "end": 1009,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 968,
                          "end": 976,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 973,
                            "end": 976,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 975,
                              "end": 976,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 975,
                                "end": 976,
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
                          "start": 978,
                          "end": 991,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 983,
                            "end": 991,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 985,
                              "end": 991
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 993,
                          "end": 1003,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 998,
                            "end": 1003,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1000,
                              "end": 1003,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1000,
                                "end": 1001,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1000,
                                  "end": 1001,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1005,
                        "end": 1009,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1008,
                          "end": 1009,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1009,
                            "decorators": [],
                            "name": "U",
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
                  "start": 1011,
                  "end": 1024,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1024,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1021,
                      "end": 1024
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1025,
                "end": 1030,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1027,
                  "end": 1030,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1027,
                    "end": 1028,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1027,
                      "end": 1028,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 951,
                "end": 954,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 952,
                    "end": 953,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "decorators": [],
                      "name": "U",
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
            "start": 1036,
            "end": 1125,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1036,
              "end": 1042,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1042,
              "end": 1125,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1043,
                  "end": 1103,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1053,
                    "end": 1103,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1055,
                      "end": 1103,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1056,
                          "end": 1064,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1061,
                            "end": 1064,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1063,
                              "end": 1064,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1063,
                                "end": 1064,
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
                          "start": 1066,
                          "end": 1079,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1071,
                            "end": 1079,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1073,
                              "end": 1079
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1091,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1086,
                            "end": 1091,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1088,
                              "end": 1091,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1088,
                                "end": 1089,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1088,
                                  "end": 1089,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1093,
                        "end": 1103,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1096,
                          "end": 1103
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1118,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1113,
                    "end": 1118,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1115,
                      "end": 1118
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1119,
                "end": 1124,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1121,
                  "end": 1124,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1121,
                    "end": 1122,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1121,
                      "end": 1122,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1130,
            "end": 1246,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1130,
              "end": 1136,
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1136,
              "end": 1246,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1223,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1147,
                    "end": 1223,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1149,
                      "end": 1223,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1150,
                          "end": 1166,
                          "decorators": [],
                          "name": "previousValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1163,
                            "end": 1166,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1165,
                              "end": 1166,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1165,
                                "end": 1166,
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
                          "start": 1168,
                          "end": 1183,
                          "decorators": [],
                          "name": "currentValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1180,
                            "end": 1183,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1182,
                              "end": 1183,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1182,
                                "end": 1183,
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
                          "start": 1185,
                          "end": 1205,
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1197,
                            "end": 1205,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1199,
                              "end": 1205
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1217,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1212,
                            "end": 1217,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1214,
                              "end": 1217,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1214,
                                "end": 1215,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1214,
                                  "end": 1215,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1219,
                        "end": 1223,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1222,
                          "end": 1223,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1222,
                            "end": 1223,
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
                {
                  "type": "Identifier",
                  "start": 1225,
                  "end": 1241,
                  "decorators": [],
                  "name": "initialValue",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1238,
                    "end": 1241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1240,
                      "end": 1241,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1240,
                        "end": 1241,
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
                "start": 1242,
                "end": 1245,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1244,
                  "end": 1245,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1245,
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
          {
            "type": "MethodDefinition",
            "start": 1251,
            "end": 1369,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1251,
              "end": 1257,
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1257,
              "end": 1369,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1347,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1271,
                    "end": 1347,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1273,
                      "end": 1347,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1274,
                          "end": 1290,
                          "decorators": [],
                          "name": "previousValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1287,
                            "end": 1290,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1289,
                              "end": 1290,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1289,
                                "end": 1290,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1292,
                          "end": 1307,
                          "decorators": [],
                          "name": "currentValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1304,
                            "end": 1307,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1306,
                              "end": 1307,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1306,
                                "end": 1307,
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
                          "start": 1309,
                          "end": 1329,
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1321,
                            "end": 1329,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1323,
                              "end": 1329
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1341,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1336,
                            "end": 1341,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1338,
                              "end": 1341,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1338,
                                "end": 1339,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1338,
                                  "end": 1339,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1343,
                        "end": 1347,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1346,
                          "end": 1347,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1346,
                            "end": 1347,
                            "decorators": [],
                            "name": "U",
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
                  "start": 1349,
                  "end": 1364,
                  "decorators": [],
                  "name": "initialValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1361,
                    "end": 1364,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1363,
                      "end": 1364,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1364,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1365,
                "end": 1368,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1367,
                  "end": 1368,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1367,
                    "end": 1368,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1257,
                "end": 1260,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1258,
                    "end": 1259,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1258,
                      "end": 1259,
                      "decorators": [],
                      "name": "U",
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
            "start": 1374,
            "end": 1495,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1374,
              "end": 1385,
              "decorators": [],
              "name": "reduceRight",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1385,
              "end": 1495,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1386,
                  "end": 1472,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1396,
                    "end": 1472,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1398,
                      "end": 1472,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1399,
                          "end": 1415,
                          "decorators": [],
                          "name": "previousValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1412,
                            "end": 1415,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1414,
                              "end": 1415,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1414,
                                "end": 1415,
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
                          "start": 1417,
                          "end": 1432,
                          "decorators": [],
                          "name": "currentValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1429,
                            "end": 1432,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1431,
                              "end": 1432,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1431,
                                "end": 1432,
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
                          "start": 1434,
                          "end": 1454,
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1446,
                            "end": 1454,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1448,
                              "end": 1454
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1456,
                          "end": 1466,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1461,
                            "end": 1466,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1463,
                              "end": 1466,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1463,
                                "end": 1464,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1463,
                                  "end": 1464,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1468,
                        "end": 1472,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1471,
                          "end": 1472,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1471,
                            "end": 1472,
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
                {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1490,
                  "decorators": [],
                  "name": "initialValue",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1487,
                    "end": 1490,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1489,
                      "end": 1490,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1489,
                        "end": 1490,
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
                "start": 1491,
                "end": 1494,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1493,
                  "end": 1494,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1494,
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
          {
            "type": "MethodDefinition",
            "start": 1500,
            "end": 1623,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1500,
              "end": 1511,
              "decorators": [],
              "name": "reduceRight",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1511,
              "end": 1623,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1515,
                  "end": 1601,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1525,
                    "end": 1601,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1527,
                      "end": 1601,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1528,
                          "end": 1544,
                          "decorators": [],
                          "name": "previousValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1541,
                            "end": 1544,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1543,
                              "end": 1544,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1543,
                                "end": 1544,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1561,
                          "decorators": [],
                          "name": "currentValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1558,
                            "end": 1561,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1560,
                              "end": 1561,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1560,
                                "end": 1561,
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
                          "start": 1563,
                          "end": 1583,
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1575,
                            "end": 1583,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1577,
                              "end": 1583
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1585,
                          "end": 1595,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1590,
                            "end": 1595,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1592,
                              "end": 1595,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1592,
                                "end": 1593,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1592,
                                  "end": 1593,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1597,
                        "end": 1601,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1600,
                          "end": 1601,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1600,
                            "end": 1601,
                            "decorators": [],
                            "name": "U",
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
                  "start": 1603,
                  "end": 1618,
                  "decorators": [],
                  "name": "initialValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1615,
                    "end": 1618,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1617,
                      "end": 1618,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1617,
                        "end": 1618,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1619,
                "end": 1622,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1621,
                  "end": 1622,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1621,
                    "end": 1622,
                    "decorators": [],
                    "name": "U",
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
                      "name": "U",
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
            "type": "PropertyDefinition",
            "start": 1629,
            "end": 1644,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1629,
              "end": 1635,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1635,
              "end": 1643,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1637,
                "end": 1643
              }
            },
            "value": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1650,
            "end": 1665,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1651,
                "end": 1660,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1652,
                  "end": 1660,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1654,
                    "end": 1660
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1661,
              "end": 1664,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1663,
                "end": 1664,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1663,
                  "end": 1664,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 21,
        "decorators": [],
        "name": "MyArray",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 36,
          "end": 44,
          "expression": {
            "type": "Identifier",
            "start": 36,
            "end": 41,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 41,
            "end": 44,
            "params": [
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
