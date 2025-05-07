__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 28,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 26,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 26,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 21,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 20,
                      "end": 21,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 20,
                        "end": 21,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "ClassDeclaration",
      "start": 29,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 59,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 96,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 96,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 78,
                    "end": 90,
                    "argument": {
                      "type": "Literal",
                      "start": 85,
                      "end": 89,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 67,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 49,
        "end": 52,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
      "start": 100,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 110,
            "end": 125,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 115,
              "end": 123,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 116,
                  "end": 122
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 143,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 143,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 135,
                  "end": 143,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 136,
                      "end": 142
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 146,
            "end": 164,
            "expression": {
              "type": "NewExpression",
              "start": 157,
              "end": 164,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 156,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 148,
                "end": 156,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 149,
                    "end": 155
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 183,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 175,
                  "end": 183,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 176,
                      "end": 182
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 186,
            "end": 204,
            "expression": {
              "type": "NewExpression",
              "start": 197,
              "end": 204,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 196,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 188,
                "end": 196,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 189,
                    "end": 195
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 232,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 232,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 224,
                  "end": 232,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 225,
                      "end": 231
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 235,
            "end": 253,
            "expression": {
              "type": "NewExpression",
              "start": 246,
              "end": 253,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 245,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 237,
                "end": 245,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 238,
                    "end": 244
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 281,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 272,
                "end": 281,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 273,
                  "end": 281,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 274,
                      "end": 280
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 284,
            "end": 302,
            "expression": {
              "type": "NewExpression",
              "start": 295,
              "end": 302,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 285,
              "end": 294,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 286,
                "end": 294,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 321,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 321,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 313,
                  "end": 321,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 314,
                      "end": 320
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 324,
            "end": 337,
            "expression": {
              "type": "ArrayExpression",
              "start": 335,
              "end": 337,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 334,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 326,
                "end": 334,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 327,
                    "end": 333
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
