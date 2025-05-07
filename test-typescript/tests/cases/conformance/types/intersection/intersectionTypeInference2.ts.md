__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 36,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 36,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 25,
              "end": 36,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 27,
                  "end": 34,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 31,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 33,
                      "end": 34,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 39,
          "end": 40,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 43,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 95,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 95,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 60,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 60,
                    "end": 76,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 62,
                        "end": 74,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 66,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 66,
                          "end": 74,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 68,
                            "end": 74
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 79,
                    "end": 95,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 81,
                        "end": 93,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 85,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 87,
                            "end": 93
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
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 139,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 114,
                "end": 139,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 116,
                    "end": 137,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 120,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 120,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 122,
                        "end": 137,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 122,
                            "end": 128
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 131,
                            "end": 137
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 146,
        "arguments": [
          {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 158,
        "end": 162,
        "arguments": [
          {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 197,
      "end": 288,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 216,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 268,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 244,
            "end": 268,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 246,
              "end": 268,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 253,
                "end": 260,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 259,
                  "end": 260,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 260,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
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
                "start": 263,
                "end": 267,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 265,
                  "end": 266,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 263,
                  "end": 264,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 270,
          "end": 278,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 278,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 278,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 278,
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 279,
        "end": 287,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 281,
          "end": 287,
          "indexType": {
            "type": "TSTypeReference",
            "start": 283,
            "end": 286,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 281,
            "end": 282,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
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
        "start": 216,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 217,
            "end": 218,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 239,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 232,
              "end": 239,
              "operator": "keyof",
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
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
              "decorators": [],
              "name": "Key",
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
      "start": 290,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 338,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 338,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 309,
                "end": 338,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 309,
                    "end": 322,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 311,
                        "end": 320,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
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
                          "start": 312,
                          "end": 320,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 314,
                            "end": 320
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 325,
                    "end": 338,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 327,
                        "end": 336,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
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
                          "start": 328,
                          "end": 336,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 330,
                            "end": 336
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 353,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 340,
        "end": 352,
        "arguments": [
          {
            "type": "Identifier",
            "start": 343,
            "end": 346,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 348,
            "end": 351,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 340,
          "end": 342,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 354,
      "end": 367,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 354,
        "end": 366,
        "arguments": [
          {
            "type": "Identifier",
            "start": 357,
            "end": 360,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 362,
            "end": 365,
            "raw": "'b'",
            "value": "b",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 354,
          "end": 356,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
