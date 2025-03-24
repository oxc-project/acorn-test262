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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 60,
        "end": 118,
        "objectType": {
          "type": "TSIntersectionType",
          "start": 61,
          "end": 108,
          "types": [
            {
              "type": "TSMappedType",
              "start": 61,
              "end": 85,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 64,
                "end": 76,
                "name": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 69,
                  "end": 76,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 75,
                    "end": 76,
                    "typeName": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
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
                "start": 79,
                "end": 83,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "K",
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
                "start": 69,
                "end": 76,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 75,
                  "end": 76,
                  "typeName": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
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
                "start": 64,
                "end": 65,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 88,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 110,
          "end": 117,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 117,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 120,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 127,
        "name": "P1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 133,
        "end": 147,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 145,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 142,
                  "end": 145,
                  "params": [
                    {
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
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 149,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
        "name": "P2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 162,
        "end": 176,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 164,
            "end": 174,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 168,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 174,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 171,
                  "end": 174,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 173,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 179,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 190,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 190,
        "end": 193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 191,
            "end": 192,
            "name": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 270,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 200,
            "end": 268,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 202,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 202,
              "end": 221,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 203,
                  "end": 220,
                  "name": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 213,
                    "end": 220,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 220,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
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
            "params": [
              {
                "type": "Identifier",
                "start": 222,
                "end": 240,
                "name": "p1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 224,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 240,
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 228,
                      "name": "P1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 228,
                      "end": 240,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 229,
                          "end": 239,
                          "typeName": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 233,
                            "name": "Pick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 233,
                            "end": 239,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 234,
                                "end": 235,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 234,
                                  "end": 235,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 237,
                                "end": 238,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 238,
                                  "name": "K",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 242,
                "end": 260,
                "name": "p2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 244,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 246,
                    "end": 260,
                    "typeName": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 248,
                      "name": "P2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 248,
                      "end": 260,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 249,
                          "end": 259,
                          "typeName": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 253,
                            "name": "Pick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 253,
                            "end": 259,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 254,
                                "end": 255,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 255,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 257,
                                "end": 258,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 257,
                                  "end": 258,
                                  "name": "K",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 289,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 289,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 284,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 287,
                          "end": 288,
                          "typeName": {
                            "type": "Identifier",
                            "start": 287,
                            "end": 288,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 292,
            "end": 303,
            "expression": {
              "type": "Literal",
              "start": 292,
              "end": 296,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 300,
              "end": 303
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 320,
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 313,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 320,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 317,
                  "name": "P2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 317,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 318,
                      "end": 319,
                      "typeName": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 323,
            "end": 334,
            "expression": {
              "type": "Literal",
              "start": 323,
              "end": 327,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 331,
              "end": 334
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 443,
      "expression": {
        "type": "CallExpression",
        "start": 421,
        "end": 442,
        "callee": {
          "type": "MemberExpression",
          "start": 421,
          "end": 425,
          "object": {
            "type": "Identifier",
            "start": 421,
            "end": 422,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 426,
            "end": 437,
            "expression": {
              "type": "Literal",
              "start": 426,
              "end": 430,
              "value": null,
              "raw": "null"
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
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 459,
            "name": "_i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 455,
                "end": 459,
                "typeName": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 456,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 456,
                  "end": 459,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 457,
                      "end": 458,
                      "typeName": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 462,
            "end": 463,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
