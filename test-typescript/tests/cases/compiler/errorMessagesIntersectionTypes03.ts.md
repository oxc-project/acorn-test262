__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 20,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 294,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 294,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 110,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 110,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 125,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 124,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 130,
            "end": 139,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 134,
                "end": 138,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 138,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 145,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 163,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 163,
                  "decorators": [],
                  "name": "a_and_b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 158,
                      "end": 163,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 158,
                          "end": 159,
                          "typeName": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 159,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 162,
                          "end": 163,
                          "typeName": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 163,
                            "decorators": [],
                            "name": "B",
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
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 188,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 187,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 187,
                  "decorators": [],
                  "name": "t_and_b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 180,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 182,
                      "end": 187,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 182,
                          "end": 183,
                          "typeName": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 186,
                          "end": 187,
                          "typeName": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 187,
                            "decorators": [],
                            "name": "B",
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
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 206,
            "expression": {
              "type": "AssignmentExpression",
              "start": 194,
              "end": 205,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 198,
                "end": 205,
                "decorators": [],
                "name": "a_and_b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 211,
            "end": 223,
            "expression": {
              "type": "AssignmentExpression",
              "start": 211,
              "end": 222,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "decorators": [],
                "name": "a_and_b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 240,
            "expression": {
              "type": "AssignmentExpression",
              "start": 228,
              "end": 239,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "decorators": [],
                "name": "a_and_b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 258,
            "expression": {
              "type": "AssignmentExpression",
              "start": 246,
              "end": 257,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 250,
                "end": 257,
                "decorators": [],
                "name": "t_and_b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 263,
            "end": 275,
            "expression": {
              "type": "AssignmentExpression",
              "start": 263,
              "end": 274,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 267,
                "end": 274,
                "decorators": [],
                "name": "t_and_b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 280,
            "end": 292,
            "expression": {
              "type": "AssignmentExpression",
              "start": 280,
              "end": 291,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 284,
                "end": 291,
                "decorators": [],
                "name": "t_and_b",
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 95,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 91,
          "end": 95
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 73,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 86,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "V",
              "optional": false
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
