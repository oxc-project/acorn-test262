__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            },
            "value": null
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
        "name": "C",
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
      "type": "VariableDeclaration",
      "start": 26,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 34,
            "end": 41,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 52,
            "end": 64,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 57,
              "end": 62,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 58,
                  "end": 61
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
      "start": 66,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 72,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 75,
            "end": 90,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 80,
              "end": 88,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
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
      "start": 92,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 106,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 106,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 101,
                  "end": 106,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 102,
                      "end": 105
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 116,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 159,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 157,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 152,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
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
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 126,
        "end": 129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 128,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
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
      "start": 161,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 169,
            "end": 180,
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 179,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 191,
            "end": 199,
            "arguments": [
              {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 210,
            "end": 223,
            "arguments": [
              {
                "type": "Literal",
                "start": 221,
                "end": 222,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 215,
              "end": 220,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 216,
                  "end": 219
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
      "start": 225,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 234,
            "end": 247,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 240,
                "end": 246,
                "expression": {
                  "type": "Literal",
                  "start": 245,
                  "end": 246,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 241,
                  "end": 244
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 263,
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 263,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 258,
                  "end": 263,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 259,
                      "end": 262
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 266,
            "end": 277,
            "arguments": [
              {
                "type": "Literal",
                "start": 272,
                "end": 276,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 280,
      "end": 317,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 317,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 303,
            "end": 315,
            "argument": {
              "type": "Literal",
              "start": 310,
              "end": 314,
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
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 292,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 297,
        "end": 300,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 299,
          "end": 300,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 299,
            "end": 300,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 292,
        "end": 295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 293,
            "end": 294,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
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
      "type": "EmptyStatement",
      "start": 317,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 324,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 324,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 319,
          "end": 322,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 337,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 336,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 326,
          "end": 329,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 329,
          "end": 334,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 330,
              "end": 333
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
