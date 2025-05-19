__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 736,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "decorators": [],
        "name": "ExpandRecursively",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 28,
        "end": 59,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 28,
            "end": 30,
            "members": []
          },
          {
            "type": "TSMappedType",
            "start": 33,
            "end": 59,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 43,
              "end": 50,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 50,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 53,
              "end": 57,
              "indexType": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 323,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 82,
        "end": 322,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 86,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 106,
              "decorators": [],
              "name": "readonlyProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 111,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 115,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 123,
              "typeAnnotation": {
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
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 127,
            "end": 143,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 133,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 138,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 138,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 137,
                    "end": 138,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 146,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 153,
              "decorators": [],
              "name": "fnField",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 166,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 155,
                "end": 166,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 156,
                    "end": 160,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 157,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 159,
                        "end": 160,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 160,
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
                  "start": 162,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
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
            "type": "TSMethodSignature",
            "start": 170,
            "end": 198,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 191,
              "decorators": [],
              "name": "writeOnlyProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 192,
                "end": 196,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 193,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 196,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 201,
            "end": 219,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 213,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 218,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 222,
            "end": 241,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 234,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 239,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 239,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 244,
            "end": 280,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 265,
              "decorators": [],
              "name": "divergentProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 279,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 269,
                "end": 279,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 269,
                    "end": 275
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 279,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 283,
            "end": 320,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 304,
              "decorators": [],
              "name": "divergentProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 305,
                "end": 318,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 306,
                  "end": 318,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 308,
                    "end": 318,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 317,
                        "end": 318,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 78,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSStringKeyword",
              "start": 72,
              "end": 78
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "type": "ExportNamedDeclaration",
      "start": 325,
      "end": 382,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 332,
        "end": 382,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 338,
            "end": 381,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 342,
              "end": 381,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 343,
                "end": 378,
                "async": false,
                "body": {
                  "type": "TSAsExpression",
                  "start": 349,
                  "end": 378,
                  "expression": {
                    "type": "TSNonNullExpression",
                    "start": 349,
                    "end": 354,
                    "expression": {
                      "type": "Literal",
                      "start": 349,
                      "end": 353,
                      "raw": "null",
                      "value": null
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 358,
                    "end": 378,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 375,
                      "end": 378,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 376,
                          "end": 377,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 376,
                            "end": 377,
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 375,
                      "decorators": [],
                      "name": "ExpandRecursively",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 385,
      "end": 709,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 402,
        "end": 709,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 406,
            "end": 679,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 418,
              "end": 679,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 424,
                  "end": 450,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 444,
                    "decorators": [],
                    "name": "readonlyProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 446,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 449,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSPropertySignature",
                  "start": 455,
                  "end": 464,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 460,
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 460,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 462,
                      "end": 463,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 462,
                        "end": 463,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 469,
                  "end": 485,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 475,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 476,
                      "end": 480,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 484,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 483,
                      "end": 484,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSPropertySignature",
                  "start": 490,
                  "end": 511,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 497,
                    "decorators": [],
                    "name": "fnField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 497,
                    "end": 510,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 499,
                      "end": 510,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 500,
                          "end": 504,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 501,
                            "end": 504,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 503,
                              "end": 504,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 503,
                                "end": 504,
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
                        "start": 506,
                        "end": 510,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 509,
                          "end": 510,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 509,
                            "end": 510,
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
                  "type": "TSMethodSignature",
                  "start": 516,
                  "end": 544,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 537,
                    "decorators": [],
                    "name": "writeOnlyProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 538,
                      "end": 542,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 539,
                        "end": 542,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 541,
                          "end": 542,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 541,
                            "end": 542,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": null,
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 549,
                  "end": 567,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 561,
                    "decorators": [],
                    "name": "property",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 566,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 565,
                      "end": 566,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 566,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 572,
                  "end": 591,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 576,
                    "end": 584,
                    "decorators": [],
                    "name": "property",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 585,
                      "end": 589,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 586,
                        "end": 589,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 588,
                          "end": 589,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 588,
                            "end": 589,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": null,
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 596,
                  "end": 632,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 617,
                    "decorators": [],
                    "name": "divergentProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 619,
                    "end": 631,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 621,
                      "end": 631,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 621,
                          "end": 627
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 630,
                          "end": 631,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 630,
                            "end": 631,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 637,
                  "end": 674,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 658,
                    "decorators": [],
                    "name": "divergentProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 659,
                      "end": 672,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 660,
                        "end": 672,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 662,
                          "end": 672,
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 662,
                              "end": 668
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 671,
                              "end": 672,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 671,
                                "end": 672,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": null,
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 412,
              "end": 415,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 413,
                  "end": 414,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
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
            "type": "ReturnStatement",
            "start": 682,
            "end": 707,
            "argument": {
              "type": "TSAsExpression",
              "start": 689,
              "end": 707,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 689,
                "end": 694,
                "expression": {
                  "type": "Literal",
                  "start": 689,
                  "end": 693,
                  "raw": "null",
                  "value": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 698,
                "end": 707,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 699,
                  "end": 707,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 700,
                      "end": 706
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 699,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 399,
        "decorators": [],
        "name": "makeV",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 711,
      "end": 736,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 718,
        "end": 736,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 724,
            "end": 735,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 728,
              "end": 735,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 728,
                "end": 733,
                "decorators": [],
                "name": "makeV",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
