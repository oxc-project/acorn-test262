__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 337,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 169,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 121,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 108,
              "end": 120,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 112,
                "end": 120,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 120,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 136,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 126,
              "end": 135,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 131,
                "end": 135,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "sum",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 88,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 88,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 82,
              "end": 88
            }
          }
        },
        {
          "type": "Identifier",
          "start": 90,
          "end": 94,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 94,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 94,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
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
          "start": 96,
          "end": 100,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 100,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "K",
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
        "start": 31,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 59,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 59,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 48,
                "end": 59,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 50,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 52,
                    "end": 58
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 48,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 77,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 71,
              "end": 77
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
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
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 336,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 260,
        "end": 336,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 266,
            "end": 334,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 286,
              "end": 334,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 296,
                  "end": 309,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 296,
                    "end": 308,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 300,
                      "end": 308,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 308,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 305,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 318,
                  "end": 328,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 318,
                    "end": 327,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 323,
                      "end": 327,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 271,
              "end": 278,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 277,
                  "end": 278,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 282,
              "end": 284,
              "decorators": [],
              "name": "vs",
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
        "start": 179,
        "end": 186,
        "decorators": [],
        "name": "realSum",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 243,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 237,
              "end": 243
            }
          }
        },
        {
          "type": "Identifier",
          "start": 245,
          "end": 252,
          "decorators": [],
          "name": "vs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 247,
            "end": 252,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 249,
              "end": 252,
              "elementType": {
                "type": "TSTypeReference",
                "start": 249,
                "end": 250,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
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
          "start": 254,
          "end": 258,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 257,
              "end": 258,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "K",
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
        "start": 186,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 214,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 197,
              "end": 214,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 203,
                "end": 214,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 204,
                    "end": 205,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 203,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 232,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 226,
              "end": 232
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "K",
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
