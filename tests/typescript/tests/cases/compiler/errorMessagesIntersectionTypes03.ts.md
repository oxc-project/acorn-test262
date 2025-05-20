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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 159,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 162,
                          "end": 163,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 163,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 186,
                          "end": 187,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 187,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
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
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 198,
                "end": 205,
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 211,
            "end": 223,
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 240,
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 258,
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 250,
                "end": 257,
                "decorators": [],
                "name": "t_and_b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 263,
            "end": 275,
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 267,
                "end": 274,
                "decorators": [],
                "name": "t_and_b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 280,
            "end": 292,
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 284,
                "end": 291,
                "decorators": [],
                "name": "t_and_b",
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "V",
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
