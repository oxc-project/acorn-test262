__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 320,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 87,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 87,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 76,
            "end": 85,
            "argument": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 68,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 68,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 57,
              "end": 68,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 61,
                      "end": 62,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
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
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 52,
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "start": 47,
              "end": 52,
              "literal": {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "raw": "\"foo\"",
                "value": "foo"
              }
            },
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
      "type": "FunctionDeclaration",
      "start": 89,
      "end": 160,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 160,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 149,
            "end": 158,
            "argument": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 101,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 141,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 128,
            "end": 141,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 130,
              "end": 141,
              "params": [
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 135,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 135,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 137,
                "end": 141,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
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
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 125,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 112,
              "end": 125,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 112,
                  "end": 117,
                  "literal": {
                    "type": "Literal",
                    "start": 112,
                    "end": 117,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 120,
                  "end": 125,
                  "literal": {
                    "type": "Literal",
                    "start": 120,
                    "end": 125,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "start": 162,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 170,
            "end": 181,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 174,
                "end": 180,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 173,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 194,
            "decorators": [],
            "name": "fResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 205,
            "arguments": [
              {
                "type": "Literal",
                "start": 199,
                "end": 204,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 229,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 221,
                "end": 227,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 242,
            "decorators": [],
            "name": "gResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 253,
            "arguments": [
              {
                "type": "Literal",
                "start": 247,
                "end": 252,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 275,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 264,
            "end": 275,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 268,
                "end": 274,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 288,
            "decorators": [],
            "name": "hResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 291,
            "end": 299,
            "arguments": [
              {
                "type": "Literal",
                "start": 293,
                "end": 298,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 320,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 301,
        "end": 319,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 301,
          "end": 308,
          "decorators": [],
          "name": "hResult",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 311,
          "end": 319,
          "arguments": [
            {
              "type": "Literal",
              "start": 313,
              "end": 318,
              "raw": "\"bar\"",
              "value": "bar"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 311,
            "end": 312,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
