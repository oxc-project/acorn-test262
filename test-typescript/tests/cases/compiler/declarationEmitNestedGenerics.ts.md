__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 14,
          "end": 18,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
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
        "start": 20,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 69,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 54,
                  "name": "g",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 33,
                      "end": 54,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 33,
                        "end": 36,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 34,
                            "end": 35,
                            "name": {
                              "type": "Identifier",
                              "start": 34,
                              "end": 35,
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
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 37,
                          "end": 41,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 38,
                            "end": 41,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 40,
                              "end": 41,
                              "typeName": {
                                "type": "Identifier",
                                "start": 40,
                                "end": 41,
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
                        "start": 43,
                        "end": 54,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 46,
                          "end": 54,
                          "exprName": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 54,
                            "name": "p",
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
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 57,
                  "end": 68,
                  "expression": {
                    "type": "Literal",
                    "start": 57,
                    "end": 61,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 65,
                    "end": 68
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 83,
            "argument": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "g",
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
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "start": 87,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "g",
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
          "start": 101,
          "end": 105,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
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
        "start": 107,
        "end": 194,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 178,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 177,
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 163,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 120,
                      "end": 163,
                      "checkType": {
                        "type": "TSTypeQuery",
                        "start": 120,
                        "end": 128,
                        "exprName": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSArrayType",
                        "start": 137,
                        "end": 148,
                        "elementType": {
                          "type": "TSInferType",
                          "start": 138,
                          "end": 145,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 144,
                            "end": 145,
                            "name": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
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
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 151,
                        "end": 152,
                        "typeName": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "falseType": {
                        "type": "TSTypeQuery",
                        "start": 155,
                        "end": 163,
                        "exprName": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 163,
                          "name": "x",
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
                "init": {
                  "type": "TSAsExpression",
                  "start": 166,
                  "end": 177,
                  "expression": {
                    "type": "Literal",
                    "start": 166,
                    "end": 170,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 174,
                    "end": 177
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 183,
            "end": 192,
            "argument": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "name": "y",
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
        "start": 97,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
