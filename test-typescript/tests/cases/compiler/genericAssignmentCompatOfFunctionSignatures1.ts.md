genericAssignmentCompatOfFunctionSignatures1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 9,
            "end": 72,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 69,
              "end": 72,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 63,
                "end": 67,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 22,
              "end": 56,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 23,
                  "end": 24,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 26,
                  "end": 55,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 36,
                    "end": 55,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 38,
                        "end": 43,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 39,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 41,
                            "end": 42,
                            "typeName": {
                              "type": "Identifier",
                              "start": 41,
                              "end": 42,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 44,
                        "end": 53,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 45,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 45,
                          "end": 53,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 47,
                            "end": 53
                          }
                        }
                      }
                    ]
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 82,
            "end": 145,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 142,
              "end": 145,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 134,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 134,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 140,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 95,
              "end": 129,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 96,
                  "end": 97,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 99,
                  "end": 128,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 109,
                    "end": 128,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 111,
                        "end": 116,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 112,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 115,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 114,
                            "end": 115,
                            "typeName": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 115,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 117,
                        "end": 126,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 118,
                          "end": 126,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 120,
                            "end": 126
                          }
                        }
                      }
                    ]
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 154,
          "decorators": [],
          "name": "x2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 158,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 163,
          "decorators": [],
          "name": "x1",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
