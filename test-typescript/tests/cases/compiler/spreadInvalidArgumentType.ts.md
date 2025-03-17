__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1662,
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
      "end": 1661,
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
        "end": 1661,
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
            "start": 310,
            "end": 354,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 314,
                "end": 353,
                "id": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 353,
                  "name": "intersection_generic",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 336,
                      "end": 353,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 336,
                          "end": 337,
                          "typeName": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 340,
                          "end": 353,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 342,
                              "end": 351,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 342,
                                "end": 343,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 343,
                                "end": 351,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 345,
                                  "end": 351
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
            "start": 359,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 363,
                "end": 409,
                "id": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 409,
                  "name": "intersection_primitive",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 387,
                      "end": 409,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 387,
                          "end": 400,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 389,
                              "end": 398,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 389,
                                "end": 390,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 390,
                                "end": 398,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 392,
                                  "end": 398
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 403,
                          "end": 409
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
            "start": 416,
            "end": 432,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 431,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 431,
                  "name": "num",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 431,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
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
            "start": 437,
            "end": 453,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 452,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 452,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 444,
                    "end": 452,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 446,
                      "end": 452
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
            "start": 458,
            "end": 487,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 462,
                "end": 486,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 486,
                  "name": "literal_string",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 478,
                      "end": 486,
                      "literal": {
                        "type": "Literal",
                        "start": 478,
                        "end": 486,
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
            "start": 492,
            "end": 515,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 496,
                "end": 514,
                "id": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 514,
                  "name": "literal_number",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 510,
                    "end": 514,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 512,
                      "end": 514,
                      "literal": {
                        "type": "Literal",
                        "start": 512,
                        "end": 514,
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
            "start": 521,
            "end": 538,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 525,
                "end": 537,
                "id": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 537,
                  "name": "u",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 526,
                    "end": 537,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 528,
                      "end": 537
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
            "start": 543,
            "end": 555,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 547,
                "end": 554,
                "id": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 554,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 548,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 550,
                      "end": 554
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
            "start": 560,
            "end": 571,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 564,
                "end": 570,
                "id": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 565,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 567,
                      "end": 570
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
            "start": 578,
            "end": 587,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 582,
                "end": 586,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 586,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 586,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 585,
                      "end": 586,
                      "typeName": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 586,
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
            "start": 593,
            "end": 612,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 597,
                "end": 611,
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 599,
                  "name": "o1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 602,
                  "end": 611,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 604,
                      "end": 609,
                      "argument": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 609,
                        "name": "p1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 649,
            "end": 668,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 653,
                "end": 667,
                "id": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 655,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 658,
                  "end": 667,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 660,
                      "end": 665,
                      "argument": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 665,
                        "name": "p2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 680,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 684,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 686,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 689,
                  "end": 697,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 691,
                      "end": 695,
                      "argument": {
                        "type": "Identifier",
                        "start": 694,
                        "end": 695,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 734,
            "end": 752,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 738,
                "end": 751,
                "id": {
                  "type": "Identifier",
                  "start": 738,
                  "end": 740,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 743,
                  "end": 751,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 745,
                      "end": 749,
                      "argument": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 782,
            "end": 800,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 786,
                "end": 799,
                "id": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 788,
                  "name": "o5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 791,
                  "end": 799,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 793,
                      "end": 797,
                      "argument": {
                        "type": "Identifier",
                        "start": 796,
                        "end": 797,
                        "name": "k",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 823,
            "end": 854,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 827,
                "end": 853,
                "id": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 829,
                  "name": "o6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 832,
                  "end": 853,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 834,
                      "end": 851,
                      "argument": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 851,
                        "name": "mapped_generic",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 893,
            "end": 916,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 897,
                "end": 915,
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 899,
                  "name": "o7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 902,
                  "end": 915,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 904,
                      "end": 913,
                      "argument": {
                        "type": "Identifier",
                        "start": 907,
                        "end": 913,
                        "name": "mapped",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 954,
            "end": 984,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 958,
                "end": 983,
                "id": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 960,
                  "name": "o8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 963,
                  "end": 983,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 965,
                      "end": 981,
                      "argument": {
                        "type": "Identifier",
                        "start": 968,
                        "end": 981,
                        "name": "union_generic",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1031,
            "end": 1063,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1035,
                "end": 1062,
                "id": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1037,
                  "name": "o9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1040,
                  "end": 1062,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1042,
                      "end": 1060,
                      "argument": {
                        "type": "Identifier",
                        "start": 1045,
                        "end": 1060,
                        "name": "union_primitive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1114,
            "end": 1152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1118,
                "end": 1151,
                "id": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1121,
                  "name": "o10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1124,
                  "end": 1151,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1126,
                      "end": 1149,
                      "argument": {
                        "type": "Identifier",
                        "start": 1129,
                        "end": 1149,
                        "name": "intersection_generic",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1206,
            "end": 1246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1210,
                "end": 1245,
                "id": {
                  "type": "Identifier",
                  "start": 1210,
                  "end": 1213,
                  "name": "o11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1216,
                  "end": 1245,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1218,
                      "end": 1243,
                      "argument": {
                        "type": "Identifier",
                        "start": 1221,
                        "end": 1243,
                        "name": "intersection_primitive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1304,
            "end": 1325,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1308,
                "end": 1324,
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1311,
                  "name": "o12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1314,
                  "end": 1324,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1316,
                      "end": 1322,
                      "argument": {
                        "type": "Identifier",
                        "start": 1319,
                        "end": 1322,
                        "name": "num",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1340,
            "end": 1361,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1344,
                "end": 1360,
                "id": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1347,
                  "name": "o13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1350,
                  "end": 1360,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1352,
                      "end": 1358,
                      "argument": {
                        "type": "Identifier",
                        "start": 1355,
                        "end": 1358,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1377,
            "end": 1396,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1381,
                "end": 1395,
                "id": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1384,
                  "name": "o14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1387,
                  "end": 1395,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1389,
                      "end": 1393,
                      "argument": {
                        "type": "Identifier",
                        "start": 1392,
                        "end": 1393,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1439,
            "end": 1458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1443,
                "end": 1457,
                "id": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1446,
                  "name": "o15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1449,
                  "end": 1457,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1451,
                      "end": 1455,
                      "argument": {
                        "type": "Identifier",
                        "start": 1454,
                        "end": 1455,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1497,
            "end": 1516,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1501,
                "end": 1515,
                "id": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1504,
                  "name": "o16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1507,
                  "end": 1515,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1509,
                      "end": 1513,
                      "argument": {
                        "type": "Identifier",
                        "start": 1512,
                        "end": 1513,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1529,
            "end": 1561,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1533,
                "end": 1560,
                "id": {
                  "type": "Identifier",
                  "start": 1533,
                  "end": 1536,
                  "name": "o17",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1539,
                  "end": 1560,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1541,
                      "end": 1558,
                      "argument": {
                        "type": "Identifier",
                        "start": 1544,
                        "end": 1558,
                        "name": "literal_string",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1576,
            "end": 1608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1580,
                "end": 1607,
                "id": {
                  "type": "Identifier",
                  "start": 1580,
                  "end": 1583,
                  "name": "o18",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1586,
                  "end": 1607,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1588,
                      "end": 1605,
                      "argument": {
                        "type": "Identifier",
                        "start": 1591,
                        "end": 1605,
                        "name": "literal_number",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1624,
            "end": 1643,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1628,
                "end": 1642,
                "id": {
                  "type": "Identifier",
                  "start": 1628,
                  "end": 1631,
                  "name": "o19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1634,
                  "end": 1642,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1636,
                      "end": 1640,
                      "argument": {
                        "type": "Identifier",
                        "start": 1639,
                        "end": 1640,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
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
