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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
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
          "start": 54,
          "end": 68,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 68,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 57,
              "end": 68,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 61,
                      "end": 62,
                      "typeName": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
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
                "start": 64,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 47,
              "end": 52,
              "literal": {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "value": "foo",
                "raw": "\"foo\""
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 89,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 101,
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
          "start": 127,
          "end": 141,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 128,
            "end": 141,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 130,
              "end": 141,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 135,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
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
                "start": 137,
                "end": 141,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "foo",
                    "raw": "\"foo\""
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 170,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 173,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 174,
                "end": 180,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 194,
            "name": "fResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 205,
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 199,
                "end": 204,
                "value": "foo",
                "raw": "\"foo\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 229,
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 221,
                "end": 227,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 242,
            "name": "gResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 247,
                "end": 252,
                "value": "foo",
                "raw": "\"foo\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 264,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 268,
                "end": 274,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 288,
            "name": "hResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 291,
            "end": 299,
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 293,
                "end": 298,
                "value": "foo",
                "raw": "\"foo\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 320,
      "expression": {
        "type": "AssignmentExpression",
        "start": 301,
        "end": 319,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 301,
          "end": 308,
          "name": "hResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 311,
          "end": 319,
          "callee": {
            "type": "Identifier",
            "start": 311,
            "end": 312,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 313,
              "end": 318,
              "value": "bar",
              "raw": "\"bar\""
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
