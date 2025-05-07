__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 464,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 119,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 60,
        "end": 118,
        "indexType": {
          "type": "TSTypeOperator",
          "start": 110,
          "end": 117,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 117,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "start": 61,
          "end": 108,
          "types": [
            {
              "type": "TSMappedType",
              "start": 61,
              "end": 85,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 69,
                "end": 76,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 75,
                  "end": 76,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 79,
                "end": 83,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 88,
              "end": 108,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 94,
                "end": 108,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 103,
                    "end": 107
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 56,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
      "start": 120,
      "end": 148,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 127,
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 133,
        "end": 147,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 145,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 145,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 142,
                  "end": 145,
                  "params": [
                    {
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
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 127,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 129,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
      "start": 149,
      "end": 177,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 162,
        "end": 176,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 164,
            "end": 174,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 168,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 174,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 171,
                  "end": 174,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 173,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 156,
        "end": 159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 158,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
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
      "type": "TSInterfaceDeclaration",
      "start": 179,
      "end": 270,
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 270,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 200,
            "end": 268,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 202,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 222,
                "end": 240,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 224,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 240,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 228,
                      "end": 240,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 229,
                          "end": 239,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 233,
                            "end": 239,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 234,
                                "end": 235,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 234,
                                  "end": 235,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 237,
                                "end": 238,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 238,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 233,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 228,
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 242,
                "end": 260,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 244,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 246,
                    "end": 260,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 248,
                      "end": 260,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 249,
                          "end": 259,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 253,
                            "end": 259,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 254,
                                "end": 255,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 255,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 257,
                                "end": 258,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 257,
                                  "end": 258,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 253,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 248,
                      "decorators": [],
                      "name": "P2",
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
              "start": 261,
              "end": 267,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 263,
                "end": 267
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 202,
              "end": 221,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 203,
                  "end": 220,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 213,
                    "end": 220,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 220,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
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
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 190,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 272,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 289,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 289,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 282,
                  "end": 289,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 283,
                      "end": 288,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 283,
                          "end": 284,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 284,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 287,
                          "end": 288,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 287,
                            "end": 288,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 292,
            "end": 303,
            "expression": {
              "type": "Literal",
              "start": 292,
              "end": 296,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 300,
              "end": 303
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 320,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 313,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 320,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 317,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 318,
                      "end": 319,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
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
                  "start": 315,
                  "end": 317,
                  "decorators": [],
                  "name": "P2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 323,
            "end": 334,
            "expression": {
              "type": "Literal",
              "start": 323,
              "end": 327,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 331,
              "end": 334
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 443,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 421,
        "end": 442,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 426,
            "end": 437,
            "expression": {
              "type": "Literal",
              "start": 426,
              "end": 430,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 434,
              "end": 437
            }
          },
          {
            "type": "Identifier",
            "start": 439,
            "end": 441,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 421,
          "end": 425,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 421,
            "end": 422,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 463,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 459,
            "decorators": [],
            "name": "_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 455,
                "end": 459,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 456,
                  "end": 459,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 457,
                      "end": 458,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
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
                  "start": 455,
                  "end": 456,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
