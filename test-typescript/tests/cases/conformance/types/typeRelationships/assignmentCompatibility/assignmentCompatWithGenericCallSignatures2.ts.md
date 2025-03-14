__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 105,
  "end": 253,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 153,
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 153,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 123,
            "end": 151,
            "params": [
              {
                "type": "Identifier",
                "start": 127,
                "end": 131,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 128,
                  "end": 131,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 130,
                    "end": 131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 133,
                "end": 144,
                "argument": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 139,
                    "end": 144,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 139,
                      "end": 142,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 139,
                        "end": 140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 151,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 147,
                "end": 151
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 123,
              "end": 126,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 124,
                  "end": 125,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 201,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 201,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 173,
            "end": 199,
            "params": [
              {
                "type": "Identifier",
                "start": 177,
                "end": 181,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 178,
                  "end": 181,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 181,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 183,
                "end": 192,
                "argument": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 187,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 189,
                    "end": 192,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 190,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 199,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 195,
                "end": 199
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 173,
              "end": 176,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 174,
                  "end": 175,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "start": 213,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 221,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "B",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 239,
      "end": 245,
      "expression": {
        "type": "AssignmentExpression",
        "start": 239,
        "end": 244,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 252,
      "expression": {
        "type": "AssignmentExpression",
        "start": 246,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 250,
          "end": 251,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
