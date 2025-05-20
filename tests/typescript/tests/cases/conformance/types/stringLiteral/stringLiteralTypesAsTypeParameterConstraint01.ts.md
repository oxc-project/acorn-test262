__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 63,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 63,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 52,
            "end": 61,
            "argument": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 44,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 44,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 44,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 37,
                      "end": 38,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
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
                "start": 40,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
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
        "start": 12,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 28,
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "start": 23,
              "end": 28,
              "literal": {
                "type": "Literal",
                "start": 23,
                "end": 28,
                "raw": "\"foo\"",
                "value": "foo"
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 65,
      "end": 136,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 136,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 134,
            "argument": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
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
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 117,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 117,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 106,
              "end": 117,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 110,
                      "end": 111,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
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
                "start": 113,
                "end": 117,
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
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 88,
              "end": 101,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 88,
                  "end": 93,
                  "literal": {
                    "type": "Literal",
                    "start": 88,
                    "end": 93,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 96,
                  "end": 101,
                  "literal": {
                    "type": "Literal",
                    "start": 96,
                    "end": 101,
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
              "start": 78,
              "end": 79,
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
      "start": 138,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 146,
            "end": 157,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 150,
                "end": 156,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
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
                    "start": 150,
                    "end": 151,
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
              "start": 146,
              "end": 149,
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
      "start": 159,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 170,
            "decorators": [],
            "name": "fResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 173,
            "end": 181,
            "arguments": [
              {
                "type": "Literal",
                "start": 175,
                "end": 180,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
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
      "start": 184,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 192,
            "end": 205,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 197,
                "end": 203,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
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
                    "start": 197,
                    "end": 198,
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
              "start": 192,
              "end": 195,
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
      "start": 207,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 218,
            "decorators": [],
            "name": "gResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 229,
            "arguments": [
              {
                "type": "Literal",
                "start": 223,
                "end": 228,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
      "start": 232,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 240,
            "end": 251,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 244,
                "end": 250,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
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
                    "start": 244,
                    "end": 245,
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
              "start": 240,
              "end": 243,
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
      "start": 253,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 275,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 264,
            "decorators": [],
            "name": "hResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 267,
            "end": 275,
            "arguments": [
              {
                "type": "Literal",
                "start": 269,
                "end": 274,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
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
      "start": 277,
      "end": 296,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 277,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 277,
          "end": 284,
          "decorators": [],
          "name": "hResult",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 287,
          "end": 295,
          "arguments": [
            {
              "type": "Literal",
              "start": 289,
              "end": 294,
              "raw": "\"bar\"",
              "value": "bar"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
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
