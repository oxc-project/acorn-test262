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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "VariableDeclaration",
      "start": 26,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 34,
            "end": 41,
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 52,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 72,
            "name": "c3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 75,
            "end": 90,
            "callee": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 106,
            "name": "c4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 116,
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 157,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 152,
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
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
                "start": 154,
                "end": 157,
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
        "start": 126,
        "end": 129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 128,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
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
      "type": "VariableDeclaration",
      "start": 161,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 169,
            "end": 180,
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 179,
                "value": null,
                "raw": "null"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 191,
            "end": 199,
            "callee": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 210,
            "end": 223,
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 221,
                "end": 222,
                "value": 1,
                "raw": "1"
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "name": "d4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 234,
            "end": 247,
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 240,
                "end": 246,
                "expression": {
                  "type": "Literal",
                  "start": 245,
                  "end": 246,
                  "value": 1,
                  "raw": "1"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 241,
                  "end": 244
                }
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 263,
            "name": "d5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 263,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 266,
            "end": 277,
            "callee": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 272,
                "end": 276,
                "value": null,
                "raw": "null"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 280,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 292,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 292,
        "end": 295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 293,
            "end": 294,
            "name": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
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
        "start": 297,
        "end": 300,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 299,
          "end": 300,
          "typeName": {
            "type": "Identifier",
            "start": 299,
            "end": 300,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 324,
        "callee": {
          "type": "Identifier",
          "start": 319,
          "end": 322,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 337,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 336,
        "callee": {
          "type": "Identifier",
          "start": 326,
          "end": 329,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
