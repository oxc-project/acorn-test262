typeParameterDiamond1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 335,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 335,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 33,
            "end": 333,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 88,
              "end": 333,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 98,
                  "end": 327,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 145,
                    "end": 327,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 159,
                        "end": 172,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 163,
                            "end": 171,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 171,
                              "decorators": [],
                              "name": "top",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 166,
                                "end": 171,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 168,
                                  "end": 171,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 168,
                                    "end": 171,
                                    "decorators": [],
                                    "name": "Top",
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
                        "start": 185,
                        "end": 203,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 189,
                            "end": 202,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 189,
                              "end": 202,
                              "decorators": [],
                              "name": "middle",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 195,
                                "end": 202,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 197,
                                  "end": 202,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 197,
                                      "end": 198,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 197,
                                        "end": 198,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 201,
                                      "end": 202,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 201,
                                        "end": 202,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false
                                      }
                                    }
                                  ]
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
                        "start": 216,
                        "end": 235,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 220,
                            "end": 234,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 234,
                              "decorators": [],
                              "name": "bottom",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 226,
                                "end": 234,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 228,
                                  "end": 234,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 228,
                                    "end": 234,
                                    "decorators": [],
                                    "name": "Bottom",
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
                        "start": 249,
                        "end": 262,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 249,
                          "end": 261,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 252,
                            "decorators": [],
                            "name": "top",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 261,
                            "decorators": [],
                            "name": "middle",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 275,
                        "end": 291,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 275,
                          "end": 290,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 281,
                            "decorators": [],
                            "name": "middle",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 290,
                            "decorators": [],
                            "name": "bottom",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 304,
                        "end": 317,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 304,
                          "end": 316,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 307,
                            "decorators": [],
                            "name": "top",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 310,
                            "end": 316,
                            "decorators": [],
                            "name": "bottom",
                            "optional": false
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
                    "start": 107,
                    "end": 120,
                    "decorators": [],
                    "name": "diamondBottom",
                    "optional": false
                  },
                  "params": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 120,
                    "end": 142,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 121,
                        "end": 141,
                        "const": false,
                        "constraint": {
                          "type": "TSUnionType",
                          "start": 136,
                          "end": 141,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 136,
                              "end": 137,
                              "typeName": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 137,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 140,
                              "end": 141,
                              "typeName": {
                                "type": "Identifier",
                                "start": 140,
                                "end": 141,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 127,
                          "decorators": [],
                          "name": "Bottom",
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
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 55,
              "decorators": [],
              "name": "diamondMiddle",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 55,
              "end": 85,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 56,
                  "end": 69,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 69,
                      "decorators": [],
                      "name": "Top",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 84,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 84,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 84,
                      "decorators": [],
                      "name": "Top",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "U",
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "diamondTop",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "Top",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
