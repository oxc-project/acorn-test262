__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 530,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "map",
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
          "start": 19,
          "end": 29,
          "name": "items",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 31,
          "end": 45,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 45,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 34,
              "end": 45,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 39,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 39,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
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
                "start": 41,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 44,
                  "end": 45,
                  "typeName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "U",
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
              "callee": {
                "type": "MemberExpression",
                "start": 64,
                "end": 73,
                "object": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 69,
                  "name": "items",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "U",
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
            "typeName": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 98,
        "name": "identity",
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
          "start": 102,
          "end": 106,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 106,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
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
              "name": "x",
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
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 145,
        "name": "singleton",
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
          "start": 149,
          "end": 153,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 152,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
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
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 145,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 147,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
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
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "name": "xs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 189,
                "end": 190,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 192,
                "end": 193,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 266,
            "name": "v1",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 274,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 277,
            "end": 293,
            "callee": {
              "type": "MemberExpression",
              "start": 277,
              "end": 283,
              "object": {
                "type": "Identifier",
                "start": 277,
                "end": 279,
                "name": "xs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 283,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 284,
                "end": 292,
                "name": "identity",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 331,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 334,
            "end": 351,
            "callee": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 340,
                "name": "xs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 342,
                "end": 350,
                "name": "identity",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 401,
            "name": "v2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 418,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 421,
            "end": 438,
            "callee": {
              "type": "MemberExpression",
              "start": 421,
              "end": 427,
              "object": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "name": "xs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 428,
                "end": 437,
                "name": "singleton",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 477,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 480,
            "end": 498,
            "callee": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 484,
                "end": 486,
                "name": "xs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 488,
                "end": 497,
                "name": "singleton",
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
