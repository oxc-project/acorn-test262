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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 110,
                  "name": "t",
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "name": "u",
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "name": "v",
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
                        "name": "V",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 163,
                  "name": "a_and_b",
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 162,
                          "end": 163,
                          "typeName": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 163,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 187,
                  "name": "t_and_b",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 186,
                          "end": 187,
                          "typeName": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 187,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 198,
                "end": 205,
                "name": "a_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "name": "a_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "name": "a_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 250,
                "end": 257,
                "name": "t_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 267,
                "end": 274,
                "name": "t_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 284,
                "end": 291,
                "name": "t_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 95,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 91,
          "end": 95
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
