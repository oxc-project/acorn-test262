__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "fail",
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
          "start": 14,
          "end": 29,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 68,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 41,
            "end": 66,
            "argument": {
              "type": "NewExpression",
              "start": 47,
              "end": 65,
              "callee": {
                "type": "Identifier",
                "start": 51,
                "end": 56,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "message",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 69,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 85,
        "name": "withFew",
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
          "start": 92,
          "end": 103,
          "name": "values",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 103,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 100,
              "end": 103,
              "elementType": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 105,
          "end": 132,
          "name": "haveFew",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 132,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 114,
              "end": 132,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 126,
                  "name": "values",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 123,
                      "end": 126,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 123,
                        "end": 124,
                        "typeName": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 128,
                "end": 132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "name": "r",
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
        },
        {
          "type": "Identifier",
          "start": 134,
          "end": 165,
          "name": "haveNone",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 165,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 144,
              "end": 165,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 159,
                  "name": "reason",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 161,
                "end": 165,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "name": "r",
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
        "start": 170,
        "end": 246,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 176,
            "end": 244,
            "argument": {
              "type": "ConditionalExpression",
              "start": 183,
              "end": 243,
              "test": {
                "type": "BinaryExpression",
                "start": 183,
                "end": 200,
                "left": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 196,
                  "object": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 189,
                    "name": "values",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 196,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "start": 199,
                  "end": 200,
                  "value": 0,
                  "raw": "0"
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 203,
                "end": 218,
                "callee": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 210,
                  "name": "haveFew",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 211,
                    "end": 217,
                    "name": "values",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "alternate": {
                "type": "CallExpression",
                "start": 221,
                "end": 243,
                "callee": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 229,
                  "name": "haveNone",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 230,
                    "end": 242,
                    "value": "No values.",
                    "raw": "'No values.'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 91,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 90,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "r",
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
        "start": 166,
        "end": 169,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 168,
          "end": 169,
          "typeName": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 247,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 258,
        "name": "id",
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
          "start": 262,
          "end": 270,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 270,
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "name": "a",
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
        "start": 276,
        "end": 293,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 278,
            "end": 291,
            "argument": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "name": "value",
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
        "start": 258,
        "end": 261,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 260,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "name": "a",
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
        "start": 272,
        "end": 275,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 274,
          "end": 275,
          "typeName": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 306,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 309,
            "end": 337,
            "callee": {
              "type": "Identifier",
              "start": 309,
              "end": 316,
              "name": "withFew",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 317,
                "end": 326,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 318,
                    "end": 319,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 321,
                    "end": 322,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 324,
                    "end": 325,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 330,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
