__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 817,
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
                "type": "TSStringKeyword",
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
                "type": "TSStringKeyword",
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
      "type": "VariableDeclaration",
      "start": 49,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 78,
            "decorators": [],
            "name": "sa1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 66,
                "end": 78,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 68,
                    "end": 76,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 71,
                        "end": 76,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 71,
                            "end": 72,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 72,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 116,
            "decorators": [],
            "name": "sa2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 116,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 97,
                "end": 116,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 97,
                    "end": 105,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 99,
                        "end": 103,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 100,
                          "end": 103,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 102,
                            "end": 103,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 102,
                              "end": 103,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 108,
                    "end": 116,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 110,
                        "end": 114,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 114,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 113,
                            "end": 114,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 159,
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 135,
                "end": 159,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 137,
                    "end": 157,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 149,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 141,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 143,
                            "end": 149
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 150,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 152,
                        "end": 157,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 152,
                            "end": 153,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 152,
                              "end": 153,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 156,
                            "end": 157,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 221,
            "decorators": [],
            "name": "ta2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 221,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 178,
                "end": 221,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 178,
                    "end": 198,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 180,
                        "end": 196,
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 181,
                            "end": 192,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 184,
                              "end": 192,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 186,
                                "end": 192
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 201,
                    "end": 221,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 203,
                        "end": 219,
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 204,
                            "end": 215,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 207,
                              "end": 215,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 209,
                                "end": 215
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 216,
                          "end": 219,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 218,
                            "end": 219,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 219,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 234,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 224,
        "end": 233,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 224,
          "end": 227,
          "decorators": [],
          "name": "ta1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 230,
          "end": 233,
          "decorators": [],
          "name": "sa1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 245,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 235,
        "end": 244,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 235,
          "end": 238,
          "decorators": [],
          "name": "ta1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 241,
          "end": 244,
          "decorators": [],
          "name": "sa2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 256,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 246,
        "end": 255,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 246,
          "end": 249,
          "decorators": [],
          "name": "ta2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 252,
          "end": 255,
          "decorators": [],
          "name": "sa1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 267,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 257,
        "end": 266,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 257,
          "end": 260,
          "decorators": [],
          "name": "ta2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 263,
          "end": 266,
          "decorators": [],
          "name": "sa2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 269,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 305,
            "decorators": [],
            "name": "sb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 305,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 286,
                "end": 305,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 286,
                    "end": 294,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 288,
                        "end": 292,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 289,
                          "end": 292,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 291,
                            "end": 292,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 297,
                    "end": 305,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 299,
                        "end": 303,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 300,
                          "end": 303,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 302,
                            "end": 303,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 344,
            "decorators": [],
            "name": "tb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 324,
                "end": 344,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 326,
                    "end": 342,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 327,
                        "end": 338,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 330,
                          "end": 338,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 332,
                            "end": 338
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 339,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 341,
                        "end": 342,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 342,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 357,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 347,
        "end": 356,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 347,
          "end": 350,
          "decorators": [],
          "name": "tb1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 353,
          "end": 356,
          "decorators": [],
          "name": "sb1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 391,
      "end": 496,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 402,
        "decorators": [],
        "name": "constr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 418,
        "end": 495,
        "types": [
          {
            "type": "TSMappedType",
            "start": 418,
            "end": 449,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 426,
              "end": 438,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 432,
                "end": 438,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 438,
                  "decorators": [],
                  "name": "Source",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": null,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 441,
              "end": 447
            }
          },
          {
            "type": "TSTypeReference",
            "start": 452,
            "end": 495,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 456,
              "end": 495,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 457,
                  "end": 460,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 460,
                    "decorators": [],
                    "name": "Tgt",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 462,
                  "end": 494,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 469,
                    "end": 494,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 470,
                        "end": 479,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 476,
                          "end": 479,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 476,
                            "end": 479,
                            "decorators": [],
                            "name": "Tgt",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "start": 481,
                        "end": 493,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 487,
                          "end": 493,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 493,
                            "decorators": [],
                            "name": "Source",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 469,
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 452,
              "end": 456,
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 402,
        "end": 415,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 409,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 409,
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 414,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "decorators": [],
              "name": "Tgt",
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
      "start": 498,
      "end": 552,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 504,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 507,
        "end": 551,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 513,
          "end": 551,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 514,
              "end": 516,
              "members": []
            },
            {
              "type": "TSTypeLiteral",
              "start": 518,
              "end": 550,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 520,
                  "end": 548,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 521,
                      "end": 532,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 524,
                        "end": 532,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 526,
                          "end": 532
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 548,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 535,
                      "end": 548,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 537,
                          "end": 546,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 537,
                            "end": 538,
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
                            "start": 538,
                            "end": 546,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 540,
                              "end": 546
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 507,
          "end": 513,
          "decorators": [],
          "name": "constr",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 572,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 572,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 569,
              "end": 572,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 571,
                "end": 572,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 595,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 574,
        "end": 594,
        "arguments": [
          {
            "type": "Literal",
            "start": 592,
            "end": 593,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 574,
          "end": 591,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 574,
            "end": 584,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 574,
              "end": 582,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 574,
                "end": 575,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 576,
                "end": 581,
                "raw": "\"asd\"",
                "value": "asd"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 585,
            "end": 591,
            "decorators": [],
            "name": "substr",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 607,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 596,
        "end": 606,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 596,
          "end": 604,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 598,
            "end": 603,
            "raw": "\"asd\"",
            "value": "asd"
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 605,
          "end": 606,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 669,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 626,
              "end": 669,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 628,
                "end": 669,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 630,
                    "end": 667,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 631,
                        "end": 642,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 634,
                          "end": 642,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 636,
                            "end": 642
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 643,
                      "end": 667,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 645,
                        "end": 667,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 646,
                            "end": 656,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 646,
                              "end": 647,
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
                              "start": 647,
                              "end": 655,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 649,
                                "end": 655
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 657,
                            "end": 666,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 657,
                              "end": 658,
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
                              "start": 658,
                              "end": 666,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 660,
                                "end": 666
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 672,
            "end": 673,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 720,
          "end": 753,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 720,
            "end": 753,
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 722,
              "end": 753,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 724,
                "end": 753,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 724,
                    "end": 737,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 726,
                        "end": 735,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 727,
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
                          "start": 727,
                          "end": 735,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 729,
                            "end": 735
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 740,
                    "end": 753,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 742,
                        "end": 751,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 743,
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
                          "start": 743,
                          "end": 751,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 745,
                            "end": 751
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 755,
      "end": 797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 796,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 796,
            "decorators": [],
            "name": "tt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 769,
              "end": 796,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 771,
                "end": 796,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 773,
                    "end": 794,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 774,
                        "end": 785,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 777,
                          "end": 785,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 779,
                            "end": 785
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 786,
                      "end": 794,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 788,
                        "end": 794
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 798,
      "end": 806,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 798,
        "end": 805,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 798,
          "end": 800,
          "decorators": [],
          "name": "tt",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 803,
          "end": 805,
          "decorators": [],
          "name": "ss",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
