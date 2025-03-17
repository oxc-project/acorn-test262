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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 21,
        "name": "MyArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 1667,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 59,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 59,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 63,
                  "end": 69
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
            "start": 75,
            "end": 100,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 89,
              "name": "toLocaleString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 89,
              "end": 100,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
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
            "start": 105,
            "end": 147,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "name": "concat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 111,
              "end": 147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 127,
                  "end": 140,
                  "argument": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 135,
                    "name": "items",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 138,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 111,
                "end": 126,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 112,
                    "end": 125,
                    "name": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 122,
                      "end": 125,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 122,
                        "end": 123,
                        "typeName": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "name": "concat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 158,
              "end": 179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 159,
                  "end": 172,
                  "argument": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 167,
                    "name": "items",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 188,
              "name": "join",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 188,
              "end": 217,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 207,
                  "name": "separator",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 201,
                      "end": 207
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 208,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 210,
                  "end": 216
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
            "start": 222,
            "end": 231,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "name": "pop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 225,
              "end": 231,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 230,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 229,
                  "end": 230,
                  "typeName": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 236,
            "end": 264,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 240,
              "name": "push",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 240,
              "end": 264,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 241,
                  "end": 254,
                  "argument": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 249,
                    "name": "items",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 255,
                "end": 263,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 257,
                  "end": 263
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
            "start": 269,
            "end": 284,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 276,
              "name": "reverse",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 276,
              "end": 284,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 289,
            "end": 300,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 294,
              "name": "shift",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 294,
              "end": 300,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 296,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 298,
                  "end": 299,
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 305,
            "end": 346,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 310,
              "name": "slice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 310,
              "end": 346,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 311,
                  "end": 325,
                  "name": "start",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 319,
                      "end": 325
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 339,
                  "name": "end",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 333,
                      "end": 339
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 351,
            "end": 398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 355,
              "name": "sort",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 355,
              "end": 398,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 390,
                  "name": "compareFn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 366,
                    "end": 390,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 368,
                      "end": 390,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 369,
                          "end": 373,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 370,
                            "end": 373,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 372,
                              "end": 373,
                              "typeName": {
                                "type": "Identifier",
                                "start": 372,
                                "end": 373,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 375,
                          "end": 379,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 376,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 378,
                              "end": 379,
                              "typeName": {
                                "type": "Identifier",
                                "start": 378,
                                "end": 379,
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
                        "start": 381,
                        "end": 390,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 391,
                "end": 397,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 393,
                  "end": 397
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
            "start": 403,
            "end": 430,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 403,
              "end": 409,
              "name": "splice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 409,
              "end": 430,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 410,
                  "end": 423,
                  "name": "start",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 435,
            "end": 498,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 441,
              "name": "splice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 441,
              "end": 498,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 455,
                  "name": "start",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 455,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 449,
                      "end": 455
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 457,
                  "end": 476,
                  "name": "deleteCount",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 468,
                    "end": 476,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 470,
                      "end": 476
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 478,
                  "end": 491,
                  "argument": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 486,
                    "name": "items",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 489,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 495,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 503,
            "end": 534,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 510,
              "name": "unshift",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 510,
              "end": 534,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 511,
                  "end": 524,
                  "argument": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 519,
                    "name": "items",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 521,
                          "end": 522,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 525,
                "end": 533,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
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
            "start": 540,
            "end": 594,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 547,
              "name": "indexOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 547,
              "end": 594,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 548,
                  "end": 564,
                  "name": "searchElement",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 561,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 563,
                      "end": 564,
                      "typeName": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 564,
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
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 584,
                  "name": "fromIndex",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 576,
                    "end": 584,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 578,
                      "end": 584
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 585,
                "end": 593,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 587,
                  "end": 593
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
            "start": 599,
            "end": 657,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 599,
              "end": 610,
              "name": "lastIndexOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 610,
              "end": 657,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 611,
                  "end": 627,
                  "name": "searchElement",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 624,
                    "end": 627,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 626,
                      "end": 627,
                      "typeName": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
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
                },
                {
                  "type": "Identifier",
                  "start": 629,
                  "end": 647,
                  "name": "fromIndex",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 639,
                    "end": 647,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 641,
                      "end": 647
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 656,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 650,
                  "end": 656
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
            "start": 662,
            "end": 754,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 667,
              "name": "every",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 667,
              "end": 754,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 728,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 678,
                    "end": 728,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 680,
                      "end": 728,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 681,
                          "end": 689,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 686,
                            "end": 689,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 688,
                              "end": 689,
                              "typeName": {
                                "type": "Identifier",
                                "start": 688,
                                "end": 689,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 691,
                          "end": 704,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 696,
                            "end": 704,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 698,
                              "end": 704
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 706,
                          "end": 716,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 713,
                                  "end": 714,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 730,
                  "end": 743,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 738,
                    "end": 743,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 740,
                      "end": 743
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 744,
                "end": 753,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 746,
                  "end": 753
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
            "start": 759,
            "end": 850,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 759,
              "end": 763,
              "name": "some",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 763,
              "end": 850,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 764,
                  "end": 824,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 774,
                    "end": 824,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 776,
                      "end": 824,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 777,
                          "end": 785,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 782,
                            "end": 785,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 784,
                              "end": 785,
                              "typeName": {
                                "type": "Identifier",
                                "start": 784,
                                "end": 785,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 787,
                          "end": 800,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 792,
                            "end": 800,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 794,
                              "end": 800
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 802,
                          "end": 812,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 809,
                                  "end": 810,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 826,
                  "end": 839,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 834,
                    "end": 839,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 836,
                      "end": 839
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 840,
                "end": 849,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 842,
                  "end": 849
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
            "start": 855,
            "end": 943,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 855,
              "end": 862,
              "name": "forEach",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 862,
              "end": 943,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 863,
                  "end": 920,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 873,
                    "end": 920,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 875,
                      "end": 920,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 876,
                          "end": 884,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 881,
                            "end": 884,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 883,
                              "end": 884,
                              "typeName": {
                                "type": "Identifier",
                                "start": 883,
                                "end": 884,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 886,
                          "end": 899,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 891,
                            "end": 899,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 893,
                              "end": 899
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 901,
                          "end": 911,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 908,
                                  "end": 909,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 922,
                  "end": 935,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 930,
                    "end": 935,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 932,
                      "end": 935
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 936,
                "end": 942,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 938,
                  "end": 942
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
            "start": 948,
            "end": 1031,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 948,
              "end": 951,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 951,
              "end": 1031,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 955,
                  "end": 1009,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 965,
                    "end": 1009,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 967,
                      "end": 1009,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 968,
                          "end": 976,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 973,
                            "end": 976,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 975,
                              "end": 976,
                              "typeName": {
                                "type": "Identifier",
                                "start": 975,
                                "end": 976,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 978,
                          "end": 991,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 983,
                            "end": 991,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 985,
                              "end": 991
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 993,
                          "end": 1003,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1000,
                                  "end": 1001,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1009,
                            "name": "U",
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
                },
                {
                  "type": "Identifier",
                  "start": 1011,
                  "end": 1024,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1024,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1021,
                      "end": 1024
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 951,
                "end": 954,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 952,
                    "end": 953,
                    "name": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "name": "U",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1027,
                      "end": 1028,
                      "name": "U",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1036,
            "end": 1125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1036,
              "end": 1042,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1042,
              "end": 1125,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1043,
                  "end": 1103,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1053,
                    "end": 1103,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1055,
                      "end": 1103,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1056,
                          "end": 1064,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1061,
                            "end": 1064,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1063,
                              "end": 1064,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1063,
                                "end": 1064,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1066,
                          "end": 1079,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1071,
                            "end": 1079,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1073,
                              "end": 1079
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1091,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1088,
                                  "end": 1089,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1118,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1113,
                    "end": 1118,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1115,
                      "end": 1118
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1121,
                      "end": 1122,
                      "name": "T",
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1130,
            "end": 1246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1130,
              "end": 1136,
              "name": "reduce",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1136,
              "end": 1246,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1223,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1147,
                    "end": 1223,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1149,
                      "end": 1223,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1150,
                          "end": 1166,
                          "name": "previousValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1163,
                            "end": 1166,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1165,
                              "end": 1166,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1165,
                                "end": 1166,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1168,
                          "end": 1183,
                          "name": "currentValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1180,
                            "end": 1183,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1182,
                              "end": 1183,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1182,
                                "end": 1183,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1185,
                          "end": 1205,
                          "name": "currentIndex",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1197,
                            "end": 1205,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1199,
                              "end": 1205
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1217,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1214,
                                  "end": 1215,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1222,
                            "end": 1223,
                            "name": "T",
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
                },
                {
                  "type": "Identifier",
                  "start": 1225,
                  "end": 1241,
                  "name": "initialValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1238,
                    "end": 1241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1240,
                      "end": 1241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1240,
                        "end": 1241,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1242,
                "end": 1245,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1244,
                  "end": 1245,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1245,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 1251,
            "end": 1369,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1251,
              "end": 1257,
              "name": "reduce",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1257,
              "end": 1369,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1347,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1271,
                    "end": 1347,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1273,
                      "end": 1347,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1274,
                          "end": 1290,
                          "name": "previousValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1287,
                            "end": 1290,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1289,
                              "end": 1290,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1289,
                                "end": 1290,
                                "name": "U",
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
                          "start": 1292,
                          "end": 1307,
                          "name": "currentValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1304,
                            "end": 1307,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1306,
                              "end": 1307,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1306,
                                "end": 1307,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1309,
                          "end": 1329,
                          "name": "currentIndex",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1321,
                            "end": 1329,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1323,
                              "end": 1329
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1341,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1338,
                                  "end": 1339,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1346,
                            "end": 1347,
                            "name": "U",
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
                },
                {
                  "type": "Identifier",
                  "start": 1349,
                  "end": 1364,
                  "name": "initialValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1361,
                    "end": 1364,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1363,
                      "end": 1364,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1364,
                        "name": "U",
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
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1257,
                "end": 1260,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1258,
                    "end": 1259,
                    "name": {
                      "type": "Identifier",
                      "start": 1258,
                      "end": 1259,
                      "name": "U",
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
                "start": 1365,
                "end": 1368,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1367,
                  "end": 1368,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1367,
                    "end": 1368,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 1374,
            "end": 1495,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1374,
              "end": 1385,
              "name": "reduceRight",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1385,
              "end": 1495,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1386,
                  "end": 1472,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1396,
                    "end": 1472,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1398,
                      "end": 1472,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1399,
                          "end": 1415,
                          "name": "previousValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1412,
                            "end": 1415,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1414,
                              "end": 1415,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1414,
                                "end": 1415,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1417,
                          "end": 1432,
                          "name": "currentValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1429,
                            "end": 1432,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1431,
                              "end": 1432,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1431,
                                "end": 1432,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1434,
                          "end": 1454,
                          "name": "currentIndex",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1446,
                            "end": 1454,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1448,
                              "end": 1454
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1456,
                          "end": 1466,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1463,
                                  "end": 1464,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1471,
                            "end": 1472,
                            "name": "T",
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
                },
                {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1490,
                  "name": "initialValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1487,
                    "end": 1490,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1489,
                      "end": 1490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1489,
                        "end": 1490,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1491,
                "end": 1494,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1493,
                  "end": 1494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1494,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 1500,
            "end": 1623,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1500,
              "end": 1511,
              "name": "reduceRight",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1511,
              "end": 1623,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1515,
                  "end": 1601,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1525,
                    "end": 1601,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1527,
                      "end": 1601,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1528,
                          "end": 1544,
                          "name": "previousValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1541,
                            "end": 1544,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1543,
                              "end": 1544,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1543,
                                "end": 1544,
                                "name": "U",
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
                          "start": 1546,
                          "end": 1561,
                          "name": "currentValue",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1558,
                            "end": 1561,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1560,
                              "end": 1561,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1560,
                                "end": 1561,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1563,
                          "end": 1583,
                          "name": "currentIndex",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1575,
                            "end": 1583,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1577,
                              "end": 1583
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1585,
                          "end": 1595,
                          "name": "array",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1592,
                                  "end": 1593,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1600,
                            "end": 1601,
                            "name": "U",
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
                },
                {
                  "type": "Identifier",
                  "start": 1603,
                  "end": 1618,
                  "name": "initialValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1615,
                    "end": 1618,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1617,
                      "end": 1618,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1617,
                        "end": 1618,
                        "name": "U",
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
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1511,
                "end": 1514,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1512,
                    "end": 1513,
                    "name": {
                      "type": "Identifier",
                      "start": 1512,
                      "end": 1513,
                      "name": "U",
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
                "start": 1619,
                "end": 1622,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1621,
                  "end": 1622,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1621,
                    "end": 1622,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1629,
            "end": 1644,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1629,
              "end": 1635,
              "name": "length",
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
              "start": 1635,
              "end": 1643,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1637,
                "end": 1643
              }
            },
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1650,
            "end": 1665,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1651,
                "end": 1660,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1652,
                  "end": 1660,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1654,
                    "end": 1660
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1661,
              "end": 1664,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1663,
                "end": 1664,
                "typeName": {
                  "type": "Identifier",
                  "start": 1663,
                  "end": 1664,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 36,
          "end": 44,
          "expression": {
            "type": "Identifier",
            "start": 36,
            "end": 41,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
