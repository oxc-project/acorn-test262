__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 26,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 25,
              "end": 26,
              "typeName": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 42,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 31,
              "end": 42,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 32,
                  "end": 36,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 35,
                      "end": 36,
                      "typeName": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 44,
          "end": 58,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 58,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 47,
              "end": 58,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 52,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 51,
                      "end": 52,
                      "typeName": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 57,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 103,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 102,
        "callee": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 66,
            "end": 68,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 79,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 75,
              "end": 79,
              "value": null,
              "raw": "null"
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 101,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 86,
              "end": 101,
              "callee": {
                "type": "MemberExpression",
                "start": 86,
                "end": 99,
                "object": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 99,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 176,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 176,
        "end": 179,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 178,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 184,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 186,
          "end": 200,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 200,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 189,
              "end": 200,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 194,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 193,
                      "end": 194,
                      "typeName": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 196,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 202,
          "end": 216,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 216,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 205,
              "end": 216,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 210,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 210,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 210,
                      "typeName": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 215,
                  "end": 216,
                  "typeName": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 217,
        "end": 220,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 220,
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 222,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 240,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 283,
      "expression": {
        "type": "CallExpression",
        "start": 244,
        "end": 282,
        "callee": {
          "type": "Identifier",
          "start": 244,
          "end": 245,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 246,
            "end": 248,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 250,
            "end": 259,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 255,
              "end": 259,
              "value": null,
              "raw": "null"
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 261,
            "end": 281,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 261,
                "end": 262,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 266,
              "end": 281,
              "callee": {
                "type": "MemberExpression",
                "start": 266,
                "end": 279,
                "object": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 267,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 279,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
