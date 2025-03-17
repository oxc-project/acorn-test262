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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 28,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 26,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 26,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 59,
            "end": 96,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 96,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 67,
                  "typeName": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
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
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 49,
        "end": 52,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 110,
            "end": 125,
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 143,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 143,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 146,
            "end": 164,
            "expression": {
              "type": "NewExpression",
              "start": 157,
              "end": 164,
              "callee": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 156,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 186,
            "end": 204,
            "expression": {
              "type": "NewExpression",
              "start": 197,
              "end": 204,
              "callee": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 196,
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 232,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 235,
            "end": 253,
            "expression": {
              "type": "NewExpression",
              "start": 246,
              "end": 253,
              "callee": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 245,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 281,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 272,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 284,
            "end": 302,
            "expression": {
              "type": "NewExpression",
              "start": 295,
              "end": 302,
              "callee": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 285,
              "end": 294,
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 321,
            "name": "r5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
