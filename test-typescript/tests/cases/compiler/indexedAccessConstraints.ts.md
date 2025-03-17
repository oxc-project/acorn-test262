__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 482,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
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
          "start": 31,
          "end": 44,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 44,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 34,
              "end": 44,
              "objectType": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeOperator",
                "start": 36,
                "end": 43,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
        "start": 46,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 69,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 65,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
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
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 316,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 113,
        "end": 316,
        "id": {
          "type": "Identifier",
          "start": 122,
          "end": 136,
          "name": "methodFnLength",
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
            "start": 170,
            "end": 176,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
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
          },
          {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "name": "methodKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "name": "K",
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
          "start": 200,
          "end": 316,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 206,
              "end": 232,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 212,
                  "end": 231,
                  "id": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 214,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 217,
                    "end": 231,
                    "object": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 230,
                      "name": "methodKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 237,
              "end": 292,
              "test": {
                "type": "BinaryExpression",
                "start": 241,
                "end": 265,
                "left": {
                  "type": "UnaryExpression",
                  "start": 241,
                  "end": 250,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 250,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 255,
                  "end": 265,
                  "value": "function",
                  "raw": "'function'"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 267,
                "end": 292,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 277,
                    "end": 286,
                    "argument": {
                      "type": "Literal",
                      "start": 284,
                      "end": 285,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 297,
              "end": 314,
              "argument": {
                "type": "MemberExpression",
                "start": 304,
                "end": 313,
                "object": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 313,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 136,
          "end": 169,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 137,
              "end": 149,
              "name": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 147,
                "end": 149,
                "members": []
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 151,
              "end": 168,
              "name": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 161,
                "end": 168,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 167,
                  "end": 168,
                  "typeName": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 191,
          "end": 199,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 193,
            "end": 199
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 340,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 357,
        "name": "getField",
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
          "start": 376,
          "end": 387,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 377,
            "end": 387,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 379,
              "end": 387,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 379,
                  "end": 380,
                  "typeName": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 380,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 383,
                  "end": 387
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 389,
          "end": 399,
          "name": "k",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 390,
            "end": 399,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 392,
              "end": 399,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 398,
                "end": 399,
                "typeName": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 401,
        "end": 481,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 407,
            "end": 438,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 437,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 419,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 422,
                  "end": 437,
                  "test": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 426,
                    "end": 430,
                    "object": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "name": "k",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 433,
                    "end": 437,
                    "value": null,
                    "raw": "null"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 443,
            "end": 457,
            "argument": {
              "type": "Identifier",
              "start": 450,
              "end": 456,
              "name": "result",
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
        "start": 357,
        "end": 375,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 374,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 368,
              "end": 374
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
