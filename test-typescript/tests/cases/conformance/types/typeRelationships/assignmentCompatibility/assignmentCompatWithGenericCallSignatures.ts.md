__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 113,
  "end": 237,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 161,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 161,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 120,
                "end": 161,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 148,
                    "end": 152,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 151,
                        "end": 152,
                        "typeName": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 157,
                    "end": 161
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 120,
                  "end": 147,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 121,
                      "end": 146,
                      "const": false,
                      "constraint": {
                        "type": "TSArrayType",
                        "start": 131,
                        "end": 146,
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "start": 131,
                          "end": 144,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 133,
                              "end": 142,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 133,
                                "end": 134,
                                "decorators": [],
                                "name": "p",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 134,
                                "end": 142,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 136,
                                  "end": 142
                                }
                              }
                            }
                          ]
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 162,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 210,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 210,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 169,
                "end": 210,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 195,
                    "end": 201,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 198,
                        "end": 201,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 198,
                          "end": 199,
                          "typeName": {
                            "type": "Identifier",
                            "start": 198,
                            "end": 199,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 203,
                  "end": 210,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 206,
                    "end": 210
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 169,
                  "end": 194,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 170,
                      "end": 193,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeLiteral",
                        "start": 180,
                        "end": 193,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 182,
                            "end": 191,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 183,
                              "decorators": [],
                              "name": "p",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 183,
                              "end": 191,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 185,
                                "end": 191
                              }
                            }
                          }
                        ]
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 212,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "decorators": [],
          "name": "g",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 230,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
