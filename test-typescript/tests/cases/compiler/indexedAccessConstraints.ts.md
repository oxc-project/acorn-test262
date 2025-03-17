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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 65,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
          "start": 31,
          "end": 44,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 44,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 34,
              "end": 44,
              "indexType": {
                "type": "TSTypeOperator",
                "start": 36,
                "end": 43,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 29,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
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
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 316,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 113,
        "end": 316,
        "async": false,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 214,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 217,
                    "end": 231,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 230,
                      "decorators": [],
                      "name": "methodKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 237,
              "end": 292,
              "alternate": null,
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
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 241,
                "end": 265,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 241,
                  "end": 250,
                  "argument": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 250,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 255,
                  "end": 265,
                  "raw": "'function'",
                  "value": "function"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 297,
              "end": 314,
              "argument": {
                "type": "MemberExpression",
                "start": 304,
                "end": 313,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 313,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
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
          "start": 122,
          "end": 136,
          "decorators": [],
          "name": "methodFnLength",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 170,
            "end": 176,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 176,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "decorators": [],
            "name": "methodKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 191,
          "end": 199,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 193,
            "end": 199
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 136,
          "end": 169,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 137,
              "end": 149,
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 147,
                "end": 149,
                "members": []
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 151,
              "end": 168,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 161,
                "end": 168,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 167,
                  "end": 168,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 340,
      "end": 481,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 419,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 422,
                  "end": 437,
                  "alternate": {
                    "type": "Literal",
                    "start": 433,
                    "end": 437,
                    "raw": "null",
                    "value": null
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 426,
                    "end": 430,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 443,
            "end": 457,
            "argument": {
              "type": "Identifier",
              "start": 450,
              "end": 456,
              "decorators": [],
              "name": "result",
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
        "start": 349,
        "end": 357,
        "decorators": [],
        "name": "getField",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 376,
          "end": 387,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 380,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 383,
                  "end": 387
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 389,
          "end": 399,
          "decorators": [],
          "name": "k",
          "optional": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 375,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 374,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 368,
              "end": 374
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
