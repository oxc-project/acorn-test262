__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 336,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "sum",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 59,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 59,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 48,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 48,
                "end": 59,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 52,
                    "end": 58
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 71,
              "end": 77
            },
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
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
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
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 121,
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
                "left": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 120,
                  "object": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 136,
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
                "object": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 186,
        "decorators": [],
        "name": "realSum",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 186,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 214,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 197,
              "end": 214,
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 203,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 203,
                "end": 214,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 204,
                    "end": 205,
                    "typeName": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 232,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 226,
              "end": 232
            },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
            "left": {
              "type": "VariableDeclaration",
              "start": 271,
              "end": 278,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 277,
                  "end": 278,
                  "id": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 282,
              "end": 284,
              "decorators": [],
              "name": "vs",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 286,
              "end": 334,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 296,
                  "end": 309,
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
                      "left": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 308,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 305,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 318,
                  "end": 328,
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
                      "object": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
