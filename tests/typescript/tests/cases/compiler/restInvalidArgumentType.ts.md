__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1638,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 17,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 11,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 1638,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 54,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 41,
              "end": 54,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 43,
                  "end": 52,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
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
          "start": 56,
          "end": 61,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 61,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 60,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 63,
          "end": 70,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 70,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 67,
              "end": 70,
              "elementType": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 1638,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 87,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 86,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 86,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
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
            "start": 93,
            "end": 107,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 106,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 100,
                      "end": 106,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 100,
                        "end": 101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 102,
                        "end": 105,
                        "literal": {
                          "type": "Literal",
                          "start": 102,
                          "end": 105,
                          "value": "b",
                          "raw": "\"b\""
                        }
                      }
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
            "start": 112,
            "end": 127,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 116,
                "end": 126,
                "id": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 126,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 119,
                      "end": 126,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
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
            "start": 133,
            "end": 176,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 175,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 175,
                  "decorators": [],
                  "name": "mapped_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 153,
                      "end": 175,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 160,
                        "end": 167,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 167,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 170,
                        "end": 174,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 170,
                          "end": 171,
                          "typeName": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 171,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 172,
                          "end": 173,
                          "typeName": {
                            "type": "Identifier",
                            "start": 172,
                            "end": 173,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": false,
                      "readonly": null
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
            "start": 181,
            "end": 212,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 211,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 211,
                  "decorators": [],
                  "name": "mapped",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 211,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 193,
                      "end": 211,
                      "key": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSLiteralType",
                        "start": 200,
                        "end": 203,
                        "literal": {
                          "type": "Literal",
                          "start": 200,
                          "end": 203,
                          "value": "b",
                          "raw": "\"b\""
                        }
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 206,
                        "end": 210,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 206,
                          "end": 207,
                          "typeName": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 207,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 208,
                          "end": 209,
                          "typeName": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 209,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": false,
                      "readonly": null
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
            "start": 218,
            "end": 255,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 254,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 254,
                  "decorators": [],
                  "name": "union_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 237,
                      "end": 254,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 238,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 238,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 241,
                          "end": 254,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 243,
                              "end": 252,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 244,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 244,
                                "end": 252,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 246,
                                  "end": 252
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
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
            "start": 260,
            "end": 304,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 303,
                  "decorators": [],
                  "name": "union_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 279,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 281,
                      "end": 303,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 281,
                          "end": 294,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 283,
                              "end": 292,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 283,
                                "end": 284,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 284,
                                "end": 292,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 286,
                                  "end": 292
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
                        }
                      ]
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
            "start": 309,
            "end": 353,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 352,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 352,
                  "decorators": [],
                  "name": "intersection_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 335,
                      "end": 352,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 335,
                          "end": 336,
                          "typeName": {
                            "type": "Identifier",
                            "start": 335,
                            "end": 336,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 339,
                          "end": 352,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 341,
                              "end": 350,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 341,
                                "end": 342,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 342,
                                "end": 350,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 344,
                                  "end": 350
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
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
            "start": 358,
            "end": 409,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 362,
                "end": 408,
                "id": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 408,
                  "decorators": [],
                  "name": "intersection_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 408,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 386,
                      "end": 408,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 386,
                          "end": 399,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 388,
                              "end": 397,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 388,
                                "end": 389,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 389,
                                "end": 397,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 391,
                                  "end": 397
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 402,
                          "end": 408
                        }
                      ]
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
            "start": 414,
            "end": 430,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 418,
                "end": 429,
                "id": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 429,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 421,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 423,
                      "end": 429
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
            "start": 435,
            "end": 451,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 439,
                "end": 450,
                "id": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 450,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 444,
                      "end": 450
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
            "start": 456,
            "end": 485,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 460,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 484,
                  "decorators": [],
                  "name": "literal_string",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 474,
                    "end": 484,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 476,
                      "end": 484,
                      "literal": {
                        "type": "Literal",
                        "start": 476,
                        "end": 484,
                        "value": "string",
                        "raw": "\"string\""
                      }
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
            "start": 490,
            "end": 513,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 512,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 512,
                  "decorators": [],
                  "name": "literal_number",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 508,
                    "end": 512,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 510,
                      "end": 512,
                      "literal": {
                        "type": "Literal",
                        "start": 510,
                        "end": 512,
                        "value": 42,
                        "raw": "42"
                      }
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
            "start": 518,
            "end": 527,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 522,
                "end": 526,
                "id": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 526,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 523,
                    "end": 526,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 525,
                      "end": 526,
                      "typeName": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
                        "decorators": [],
                        "name": "E",
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
            "start": 533,
            "end": 550,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 549,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 549,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 538,
                    "end": 549,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 540,
                      "end": 549
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
            "start": 555,
            "end": 567,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 559,
                "end": 566,
                "id": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 566,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 566,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 562,
                      "end": 566
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
            "start": 573,
            "end": 584,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 577,
                "end": 583,
                "id": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 583,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 583,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 580,
                      "end": 583
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
            "start": 590,
            "end": 607,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 594,
                "end": 606,
                "id": {
                  "type": "ObjectPattern",
                  "start": 594,
                  "end": 601,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 595,
                      "end": 600,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 600,
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 606,
                  "decorators": [],
                  "name": "p1",
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
            "start": 648,
            "end": 665,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 652,
                "end": 664,
                "id": {
                  "type": "ObjectPattern",
                  "start": 652,
                  "end": 659,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 653,
                      "end": 658,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 658,
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 664,
                  "decorators": [],
                  "name": "p2",
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
            "start": 678,
            "end": 694,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 693,
                "id": {
                  "type": "ObjectPattern",
                  "start": 682,
                  "end": 689,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 683,
                      "end": 688,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 688,
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 693,
                  "decorators": [],
                  "name": "t",
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
            "start": 733,
            "end": 749,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 737,
                "end": 748,
                "id": {
                  "type": "ObjectPattern",
                  "start": 737,
                  "end": 744,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 738,
                      "end": 743,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 743,
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 748,
                  "decorators": [],
                  "name": "i",
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
            "start": 779,
            "end": 795,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 783,
                "end": 794,
                "id": {
                  "type": "ObjectPattern",
                  "start": 783,
                  "end": 790,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 784,
                      "end": 789,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 787,
                        "end": 789,
                        "decorators": [],
                        "name": "r5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 794,
                  "decorators": [],
                  "name": "k",
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
            "start": 819,
            "end": 848,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 823,
                "end": 847,
                "id": {
                  "type": "ObjectPattern",
                  "start": 823,
                  "end": 830,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 824,
                      "end": 829,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 829,
                        "decorators": [],
                        "name": "r6",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 833,
                  "end": 847,
                  "decorators": [],
                  "name": "mapped_generic",
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
            "start": 890,
            "end": 911,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 894,
                "end": 910,
                "id": {
                  "type": "ObjectPattern",
                  "start": 894,
                  "end": 901,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 895,
                      "end": 900,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 900,
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 910,
                  "decorators": [],
                  "name": "mapped",
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
            "start": 949,
            "end": 977,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 953,
                "end": 976,
                "id": {
                  "type": "ObjectPattern",
                  "start": 953,
                  "end": 960,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 954,
                      "end": 959,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 957,
                        "end": 959,
                        "decorators": [],
                        "name": "r8",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 963,
                  "end": 976,
                  "decorators": [],
                  "name": "union_generic",
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
            "start": 1027,
            "end": 1057,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1031,
                "end": 1056,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1031,
                  "end": 1038,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1032,
                      "end": 1037,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1035,
                        "end": 1037,
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1056,
                  "decorators": [],
                  "name": "union_primitive",
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
            "start": 1108,
            "end": 1144,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1112,
                "end": 1143,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1112,
                  "end": 1120,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1113,
                      "end": 1119,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1116,
                        "end": 1119,
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1123,
                  "end": 1143,
                  "decorators": [],
                  "name": "intersection_generic",
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
            "start": 1201,
            "end": 1239,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1205,
                "end": 1238,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1205,
                  "end": 1213,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1206,
                      "end": 1212,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1209,
                        "end": 1212,
                        "decorators": [],
                        "name": "r11",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1238,
                  "decorators": [],
                  "name": "intersection_primitive",
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
            "start": 1297,
            "end": 1316,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1301,
                "end": 1315,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1301,
                  "end": 1309,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1302,
                      "end": 1308,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1305,
                        "end": 1308,
                        "decorators": [],
                        "name": "r12",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1315,
                  "decorators": [],
                  "name": "num",
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
            "start": 1331,
            "end": 1350,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1335,
                "end": 1349,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1335,
                  "end": 1343,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1336,
                      "end": 1342,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1339,
                        "end": 1342,
                        "decorators": [],
                        "name": "r13",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1346,
                  "end": 1349,
                  "decorators": [],
                  "name": "str",
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
            "start": 1366,
            "end": 1383,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1370,
                "end": 1382,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1370,
                  "end": 1378,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1371,
                      "end": 1377,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1374,
                        "end": 1377,
                        "decorators": [],
                        "name": "r14",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1382,
                  "decorators": [],
                  "name": "u",
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
            "start": 1426,
            "end": 1443,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1430,
                "end": 1442,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1430,
                  "end": 1438,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1431,
                      "end": 1437,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1434,
                        "end": 1437,
                        "decorators": [],
                        "name": "r15",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1441,
                  "end": 1442,
                  "decorators": [],
                  "name": "n",
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
            "start": 1482,
            "end": 1499,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1486,
                "end": 1498,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1486,
                  "end": 1494,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1487,
                      "end": 1493,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1490,
                        "end": 1493,
                        "decorators": [],
                        "name": "r16",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1497,
                  "end": 1498,
                  "decorators": [],
                  "name": "a",
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
            "start": 1512,
            "end": 1542,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1516,
                "end": 1541,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1516,
                  "end": 1524,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1517,
                      "end": 1523,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1520,
                        "end": 1523,
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1541,
                  "decorators": [],
                  "name": "literal_string",
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
            "start": 1557,
            "end": 1587,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1561,
                "end": 1586,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1561,
                  "end": 1569,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1562,
                      "end": 1568,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1565,
                        "end": 1568,
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1572,
                  "end": 1586,
                  "decorators": [],
                  "name": "literal_number",
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
            "start": 1603,
            "end": 1620,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1607,
                "end": 1619,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1607,
                  "end": 1615,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1608,
                      "end": 1614,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1611,
                        "end": 1614,
                        "decorators": [],
                        "name": "r19",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1618,
                  "end": 1619,
                  "decorators": [],
                  "name": "e",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
