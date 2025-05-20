__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 369,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 51,
                "end": 56,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
        "end": 13,
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 29,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 69,
      "end": 246,
      "async": false,
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
              "alternate": {
                "type": "CallExpression",
                "start": 221,
                "end": 243,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 230,
                    "end": 242,
                    "raw": "'No values.'",
                    "value": "No values."
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 229,
                  "decorators": [],
                  "name": "haveNone",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 203,
                "end": 218,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 211,
                    "end": 217,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 210,
                  "decorators": [],
                  "name": "haveFew",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "test": {
                "type": "BinaryExpression",
                "start": 183,
                "end": 200,
                "operator": ">",
                "left": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 196,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 189,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 196,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 199,
                  "end": 200,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 85,
        "decorators": [],
        "name": "withFew",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 103,
          "decorators": [],
          "name": "values",
          "optional": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 105,
          "end": 132,
          "decorators": [],
          "name": "haveFew",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 132,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 114,
              "end": 132,
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 126,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 134,
          "end": 165,
          "decorators": [],
          "name": "haveNone",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 165,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 144,
              "end": 165,
              "params": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 159,
                  "decorators": [],
                  "name": "reason",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "decorators": [],
                    "name": "r",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 169,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 168,
          "end": 169,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 91,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 90,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "r",
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
      "start": 247,
      "end": 293,
      "async": false,
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
              "decorators": [],
              "name": "value",
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
        "start": 256,
        "end": 258,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 262,
          "end": 270,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 270,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 272,
        "end": 275,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 274,
          "end": 275,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 258,
        "end": 261,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 260,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "decorators": [],
              "name": "a",
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
      "start": 294,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 306,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 309,
            "end": 337,
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
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 321,
                    "end": 322,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 324,
                    "end": 325,
                    "raw": "3",
                    "value": 3
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 330,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 309,
              "end": 316,
              "decorators": [],
              "name": "withFew",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
