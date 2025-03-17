__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1639,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 9,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "v1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "v2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
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
        "name": "f",
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
          "start": 56,
          "end": 61,
          "name": "p1",
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
          "start": 63,
          "end": 70,
          "name": "p2",
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
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 1638,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 86,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 86,
                  "name": "t",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 107,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 106,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "name": "i",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 112,
            "end": 127,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 116,
                "end": 126,
                "id": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 126,
                  "name": "k",
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 175,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 175,
                  "name": "mapped_generic",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 153,
                      "end": 175,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 155,
                        "end": 167,
                        "name": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 156,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 181,
            "end": 212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 211,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 211,
                  "name": "mapped",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 211,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 193,
                      "end": 211,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 195,
                        "end": 203,
                        "name": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
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
                      "key": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 218,
            "end": 255,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 254,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 254,
                  "name": "union_generic",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 260,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 303,
                  "name": "union_primitive",
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 309,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 352,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 352,
                  "name": "intersection_generic",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 358,
            "end": 409,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 362,
                "end": 408,
                "id": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 408,
                  "name": "intersection_primitive",
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 414,
            "end": 430,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 418,
                "end": 429,
                "id": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 429,
                  "name": "num",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 421,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 423,
                      "end": 429
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 435,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 439,
                "end": 450,
                "id": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 450,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 444,
                      "end": 450
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 456,
            "end": 485,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 460,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 484,
                  "name": "literal_string",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 513,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 512,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 512,
                  "name": "literal_number",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 518,
            "end": 527,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 522,
                "end": 526,
                "id": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 526,
                  "name": "e",
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
                        "name": "E",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 533,
            "end": 550,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 549,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 549,
                  "name": "u",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 538,
                    "end": 549,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 540,
                      "end": 549
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 555,
            "end": 567,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 559,
                "end": 566,
                "id": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 566,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 566,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 562,
                      "end": 566
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 573,
            "end": 584,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 577,
                "end": 583,
                "id": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 583,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 583,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 580,
                      "end": 583
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 590,
            "end": 607,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 594,
                "end": 606,
                "id": {
                  "type": "ObjectPattern",
                  "start": 594,
                  "end": 601,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 595,
                      "end": 600,
                      "argument": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 600,
                        "name": "r1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 606,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 648,
            "end": 665,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 652,
                "end": 664,
                "id": {
                  "type": "ObjectPattern",
                  "start": 652,
                  "end": 659,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 653,
                      "end": 658,
                      "argument": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 658,
                        "name": "r2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 664,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 678,
            "end": 694,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 693,
                "id": {
                  "type": "ObjectPattern",
                  "start": 682,
                  "end": 689,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 683,
                      "end": 688,
                      "argument": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 688,
                        "name": "r3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 693,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 733,
            "end": 749,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 737,
                "end": 748,
                "id": {
                  "type": "ObjectPattern",
                  "start": 737,
                  "end": 744,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 738,
                      "end": 743,
                      "argument": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 743,
                        "name": "r4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 748,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 779,
            "end": 795,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 783,
                "end": 794,
                "id": {
                  "type": "ObjectPattern",
                  "start": 783,
                  "end": 790,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 784,
                      "end": 789,
                      "argument": {
                        "type": "Identifier",
                        "start": 787,
                        "end": 789,
                        "name": "r5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 794,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 819,
            "end": 848,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 823,
                "end": 847,
                "id": {
                  "type": "ObjectPattern",
                  "start": 823,
                  "end": 830,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 824,
                      "end": 829,
                      "argument": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 829,
                        "name": "r6",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 833,
                  "end": 847,
                  "name": "mapped_generic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 890,
            "end": 911,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 894,
                "end": 910,
                "id": {
                  "type": "ObjectPattern",
                  "start": 894,
                  "end": 901,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 895,
                      "end": 900,
                      "argument": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 900,
                        "name": "r7",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 910,
                  "name": "mapped",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 949,
            "end": 977,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 953,
                "end": 976,
                "id": {
                  "type": "ObjectPattern",
                  "start": 953,
                  "end": 960,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 954,
                      "end": 959,
                      "argument": {
                        "type": "Identifier",
                        "start": 957,
                        "end": 959,
                        "name": "r8",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 963,
                  "end": 976,
                  "name": "union_generic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1027,
            "end": 1057,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1031,
                "end": 1056,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1031,
                  "end": 1038,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1032,
                      "end": 1037,
                      "argument": {
                        "type": "Identifier",
                        "start": 1035,
                        "end": 1037,
                        "name": "r9",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1056,
                  "name": "union_primitive",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1108,
            "end": 1144,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1112,
                "end": 1143,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1112,
                  "end": 1120,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1113,
                      "end": 1119,
                      "argument": {
                        "type": "Identifier",
                        "start": 1116,
                        "end": 1119,
                        "name": "r10",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1123,
                  "end": 1143,
                  "name": "intersection_generic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1201,
            "end": 1239,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1205,
                "end": 1238,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1205,
                  "end": 1213,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1206,
                      "end": 1212,
                      "argument": {
                        "type": "Identifier",
                        "start": 1209,
                        "end": 1212,
                        "name": "r11",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1238,
                  "name": "intersection_primitive",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1297,
            "end": 1316,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1301,
                "end": 1315,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1301,
                  "end": 1309,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1302,
                      "end": 1308,
                      "argument": {
                        "type": "Identifier",
                        "start": 1305,
                        "end": 1308,
                        "name": "r12",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1315,
                  "name": "num",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1331,
            "end": 1350,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1335,
                "end": 1349,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1335,
                  "end": 1343,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1336,
                      "end": 1342,
                      "argument": {
                        "type": "Identifier",
                        "start": 1339,
                        "end": 1342,
                        "name": "r13",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1346,
                  "end": 1349,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1366,
            "end": 1383,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1370,
                "end": 1382,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1370,
                  "end": 1378,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1371,
                      "end": 1377,
                      "argument": {
                        "type": "Identifier",
                        "start": 1374,
                        "end": 1377,
                        "name": "r14",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1382,
                  "name": "u",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1426,
            "end": 1443,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1430,
                "end": 1442,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1430,
                  "end": 1438,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1431,
                      "end": 1437,
                      "argument": {
                        "type": "Identifier",
                        "start": 1434,
                        "end": 1437,
                        "name": "r15",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1441,
                  "end": 1442,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1482,
            "end": 1499,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1486,
                "end": 1498,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1486,
                  "end": 1494,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1487,
                      "end": 1493,
                      "argument": {
                        "type": "Identifier",
                        "start": 1490,
                        "end": 1493,
                        "name": "r16",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1497,
                  "end": 1498,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1512,
            "end": 1542,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1516,
                "end": 1541,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1516,
                  "end": 1524,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1517,
                      "end": 1523,
                      "argument": {
                        "type": "Identifier",
                        "start": 1520,
                        "end": 1523,
                        "name": "r17",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1541,
                  "name": "literal_string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1557,
            "end": 1587,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1561,
                "end": 1586,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1561,
                  "end": 1569,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1562,
                      "end": 1568,
                      "argument": {
                        "type": "Identifier",
                        "start": 1565,
                        "end": 1568,
                        "name": "r18",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1572,
                  "end": 1586,
                  "name": "literal_number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1603,
            "end": 1620,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1607,
                "end": 1619,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1607,
                  "end": 1615,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1608,
                      "end": 1614,
                      "argument": {
                        "type": "Identifier",
                        "start": 1611,
                        "end": 1614,
                        "name": "r19",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1618,
                  "end": 1619,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
