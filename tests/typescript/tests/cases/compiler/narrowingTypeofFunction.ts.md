__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 399,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 27,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 12,
        "end": 27,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 54,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 42,
            "end": 52,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 46,
                "end": 52
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 92,
        "end": 175,
        "body": [
          {
            "type": "IfStatement",
            "start": 98,
            "end": 173,
            "alternate": {
              "type": "BlockStatement",
              "start": 155,
              "end": 173,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 165,
                  "end": 167,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 127,
              "end": 145,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 137,
                  "end": 139,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 102,
              "end": 125,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 102,
                "end": 110,
                "argument": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 115,
                "end": 125,
                "raw": "\"function\"",
                "value": "function"
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
        "start": 65,
        "end": 67,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 90,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 90,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 71,
              "end": 90,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 72,
                  "end": 80,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 72,
                      "end": 73,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 76,
                      "end": 80,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 80,
                        "decorators": [],
                        "name": "Meta",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSStringKeyword",
                  "start": 84,
                  "end": 90
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 300,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 300,
        "body": [
          {
            "type": "IfStatement",
            "start": 223,
            "end": 298,
            "alternate": {
              "type": "BlockStatement",
              "start": 280,
              "end": 298,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 290,
                  "end": 292,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 252,
              "end": 270,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 264,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 227,
              "end": 250,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 227,
                "end": 235,
                "argument": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 240,
                "end": 250,
                "raw": "\"function\"",
                "value": "function"
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
        "start": 186,
        "end": 188,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 215,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 193,
            "end": 215,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 195,
              "end": 215,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 196,
                  "end": 201,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 196,
                      "end": 197,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 200,
                      "end": 201,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 201,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSIntersectionType",
                  "start": 205,
                  "end": 215,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 206,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 209,
                      "end": 215
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
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
      "start": 302,
      "end": 399,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 344,
        "end": 399,
        "body": [
          {
            "type": "IfStatement",
            "start": 350,
            "end": 397,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 379,
              "end": 397,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 389,
                  "end": 391,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 390,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 354,
              "end": 377,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 354,
                "end": 362,
                "argument": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 367,
                "end": 377,
                "raw": "\"function\"",
                "value": "function"
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
        "start": 311,
        "end": 313,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 314,
          "end": 342,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 342,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 317,
              "end": 342,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 317,
                  "end": 333,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 319,
                      "end": 331,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 323,
                        "decorators": [],
                        "name": "_foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 323,
                        "end": 331,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 325,
                          "end": 331
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 336,
                  "end": 342
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
