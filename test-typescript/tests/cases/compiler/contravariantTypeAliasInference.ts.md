__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Func1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
        "type": "TSFunctionType",
        "start": 16,
        "end": 30,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
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
          "start": 23,
          "end": 30,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 26,
            "end": 30
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 32,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 42,
        "name": "Func2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
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
        "type": "TSUnionType",
        "start": 48,
        "end": 76,
        "types": [
          {
            "type": "TSFunctionType",
            "start": 49,
            "end": 63,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
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
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 67,
            "end": 76
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 108,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "name": "Func1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 100,
                  "end": 108,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    }
                  ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 136,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 131,
                  "name": "Func1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 132,
                      "end": 135,
                      "literal": {
                        "type": "Literal",
                        "start": 132,
                        "end": 135,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 139,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 159,
        "name": "foo",
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
          "start": 163,
          "end": 175,
          "name": "f1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 165,
            "end": 175,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 167,
              "end": 175,
              "typeName": {
                "type": "Identifier",
                "start": 167,
                "end": 172,
                "name": "Func1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 172,
                "end": 175,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 177,
          "end": 189,
          "name": "f2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "name": "Func1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 186,
                "end": 189,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 187,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 196,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 199,
        "end": 210,
        "callee": {
          "type": "Identifier",
          "start": 199,
          "end": 202,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 203,
            "end": 205,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "name": "f2",
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
      "start": 213,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 242,
            "name": "g1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 242,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 234,
                  "name": "Func2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 242,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 235,
                      "end": 241
                    }
                  ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 270,
            "name": "g2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 265,
                  "name": "Func2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 265,
                  "end": 270,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 266,
                      "end": 269,
                      "literal": {
                        "type": "Literal",
                        "start": 266,
                        "end": 269,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 273,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 293,
        "name": "bar",
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
          "start": 297,
          "end": 309,
          "name": "g1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 309,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 301,
              "end": 309,
              "typeName": {
                "type": "Identifier",
                "start": 301,
                "end": 306,
                "name": "Func2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 306,
                "end": 309,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 308,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 311,
          "end": 323,
          "name": "g2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 323,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 320,
                "name": "Func2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 320,
                "end": 323,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 321,
                    "end": 322,
                    "typeName": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 293,
        "end": 296,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 294,
            "end": 295,
            "name": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 324,
        "end": 330,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 326,
          "end": 330
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 345,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 344,
        "callee": {
          "type": "Identifier",
          "start": 333,
          "end": 336,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 341,
            "end": 343,
            "name": "f2",
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
      "type": "ExpressionStatement",
      "start": 346,
      "end": 358,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 357,
        "callee": {
          "type": "Identifier",
          "start": 346,
          "end": 349,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "name": "g1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 354,
            "end": 356,
            "name": "g2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
