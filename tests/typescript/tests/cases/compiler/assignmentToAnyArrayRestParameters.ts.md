__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 587,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 338,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 54,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 46,
              "end": 54,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 46,
                "end": 52
              }
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
          "start": 61,
          "end": 105,
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 105,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 65,
              "end": 105,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 75,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 77,
                  "end": 94,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 84,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 86,
                      "end": 94,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 96,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 99,
                  "end": 105
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 111,
          "end": 148,
          "decorators": [],
          "name": "fb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 148,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 115,
              "end": 148,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 116,
                  "end": 125,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 119,
                      "end": 125
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 127,
                  "end": 137,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 134,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 137,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 139,
                "end": 148,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 142,
                  "end": 148
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 338,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 157,
            "end": 197,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 196,
                "id": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 191,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 167,
                      "end": 191,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 168,
                          "end": 180,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 171,
                            "end": 175,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 175,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 177,
                              "end": 180
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 182,
                        "end": 191,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 185,
                          "end": 191
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 196,
                  "decorators": [],
                  "name": "fa",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 202,
            "end": 244,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 208,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 238,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 212,
                      "end": 238,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 213,
                          "end": 227,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 220,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 220,
                            "end": 227,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 222,
                              "end": 227,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 222,
                                "end": 225
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 229,
                        "end": 238,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 232,
                          "end": 238
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 243,
                  "decorators": [],
                  "name": "fa",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 249,
            "end": 289,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 255,
                "end": 288,
                "id": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 283,
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 259,
                      "end": 283,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 260,
                          "end": 272,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 267,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 267,
                            "end": 272,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 269,
                              "end": 272
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 274,
                        "end": 283,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 277,
                          "end": 283
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 288,
                  "decorators": [],
                  "name": "fb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 336,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 300,
                "end": 335,
                "id": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 330,
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 304,
                      "end": 330,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 305,
                          "end": 319,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 312,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 312,
                            "end": 319,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 314,
                              "end": 319,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 314,
                                "end": 317
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 321,
                        "end": 330,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 324,
                          "end": 330
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 335,
                  "decorators": [],
                  "name": "fb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 340,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 352,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 352,
        "end": 390,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 353,
            "end": 371,
            "name": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 363,
              "end": 371,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 363,
                "end": 369
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 373,
            "end": 389,
            "name": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 383,
              "end": 389
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 393,
        "end": 587,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 399,
            "end": 424,
            "id": {
              "type": "Identifier",
              "start": 404,
              "end": 407,
              "decorators": [],
              "name": "T00",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 410,
              "end": 423,
              "objectType": {
                "type": "TSArrayType",
                "start": 410,
                "end": 418,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 410,
                  "end": 416
                }
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 419,
                "end": 422,
                "literal": {
                  "type": "Literal",
                  "start": 419,
                  "end": 422,
                  "value": "0",
                  "raw": "\"0\""
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 429,
            "end": 456,
            "id": {
              "type": "Identifier",
              "start": 434,
              "end": 437,
              "decorators": [],
              "name": "T01",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 440,
              "end": 455,
              "objectType": {
                "type": "TSArrayType",
                "start": 440,
                "end": 448,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 440,
                  "end": 446
                }
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 449,
                "end": 454,
                "literal": {
                  "type": "Literal",
                  "start": 449,
                  "end": 454,
                  "value": "0.0",
                  "raw": "\"0.0\""
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 471,
            "end": 500,
            "id": {
              "type": "Identifier",
              "start": 476,
              "end": 479,
              "decorators": [],
              "name": "T02",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 482,
              "end": 499,
              "objectType": {
                "type": "TSArrayType",
                "start": 482,
                "end": 490,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 482,
                  "end": 488
                }
              },
              "indexType": {
                "type": "TSUnionType",
                "start": 491,
                "end": 498,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 491,
                    "end": 492,
                    "typeName": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 492,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 495,
                    "end": 498,
                    "literal": {
                      "type": "Literal",
                      "start": 495,
                      "end": 498,
                      "value": "0",
                      "raw": "\"0\""
                    }
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 505,
            "end": 523,
            "id": {
              "type": "Identifier",
              "start": 510,
              "end": 513,
              "decorators": [],
              "name": "T10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 516,
              "end": 522,
              "objectType": {
                "type": "TSTypeReference",
                "start": 516,
                "end": 517,
                "typeName": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 517,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 518,
                "end": 521,
                "literal": {
                  "type": "Literal",
                  "start": 518,
                  "end": 521,
                  "value": "0",
                  "raw": "\"0\""
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 528,
            "end": 548,
            "id": {
              "type": "Identifier",
              "start": 533,
              "end": 536,
              "decorators": [],
              "name": "T11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 539,
              "end": 547,
              "objectType": {
                "type": "TSTypeReference",
                "start": 539,
                "end": 540,
                "typeName": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 541,
                "end": 546,
                "literal": {
                  "type": "Literal",
                  "start": 541,
                  "end": 546,
                  "value": "0.0",
                  "raw": "\"0.0\""
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 563,
            "end": 585,
            "id": {
              "type": "Identifier",
              "start": 568,
              "end": 571,
              "decorators": [],
              "name": "T12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 574,
              "end": 584,
              "objectType": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 575,
                "typeName": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 575,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSUnionType",
                "start": 576,
                "end": 583,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 576,
                    "end": 577,
                    "typeName": {
                      "type": "Identifier",
                      "start": 576,
                      "end": 577,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 580,
                    "end": 583,
                    "literal": {
                      "type": "Literal",
                      "start": 580,
                      "end": 583,
                      "value": "0",
                      "raw": "\"0\""
                    }
                  }
                ]
              }
            },
            "declare": false
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
