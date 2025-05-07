__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 529,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 79,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 57,
            "end": 77,
            "argument": {
              "type": "CallExpression",
              "start": 64,
              "end": 76,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 64,
                "end": 73,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 69,
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
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
        "end": 12,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 29,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 26,
              "end": 29,
              "elementType": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 31,
          "end": 45,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 45,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 34,
              "end": 45,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 39,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
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
                "start": 41,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 44,
                  "end": 45,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "U",
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
        "start": 46,
        "end": 51,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 48,
          "end": 51,
          "elementType": {
            "type": "TSTypeReference",
            "start": 48,
            "end": 49,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "U",
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
      "start": 81,
      "end": 125,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 125,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 114,
            "end": 123,
            "argument": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "x",
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
        "start": 90,
        "end": 98,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 102,
          "end": 106,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 106,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
      "start": 127,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 174,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 161,
            "end": 172,
            "argument": {
              "type": "ArrayExpression",
              "start": 168,
              "end": 171,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 145,
        "decorators": [],
        "name": "singleton",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 149,
          "end": 153,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 152,
              "end": 153,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 145,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 147,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
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
      "start": 176,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 185,
            "end": 194,
            "elements": [
              {
                "type": "Literal",
                "start": 186,
                "end": 187,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 189,
                "end": 190,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 192,
                "end": 193,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 266,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 266,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 258,
                "end": 266,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 258,
                  "end": 264
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 293,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 274,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 277,
            "end": 293,
            "arguments": [
              {
                "type": "Identifier",
                "start": 284,
                "end": 292,
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 277,
              "end": 283,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 277,
                "end": 279,
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 283,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 351,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 331,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 334,
            "end": 351,
            "arguments": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 340,
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 342,
                "end": 350,
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 401,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 401,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 391,
                "end": 401,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 391,
                  "end": 399,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 391,
                    "end": 397
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 412,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 438,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 418,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 421,
            "end": 438,
            "arguments": [
              {
                "type": "Identifier",
                "start": 428,
                "end": 437,
                "decorators": [],
                "name": "singleton",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 421,
              "end": 427,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 471,
      "end": 499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 475,
          "end": 498,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 477,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 480,
            "end": 498,
            "arguments": [
              {
                "type": "Identifier",
                "start": 484,
                "end": 486,
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 488,
                "end": 497,
                "decorators": [],
                "name": "singleton",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
