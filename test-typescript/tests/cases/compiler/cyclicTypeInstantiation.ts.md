__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 334,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 90,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 74,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 73,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 73,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 31,
                      "end": 73,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 41,
                          "end": 46,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 41,
                            "end": 42,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 42,
                            "end": 45,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 44,
                              "end": 45,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 44,
                                "end": 45,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 55,
                          "end": 67,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 56,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 56,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 58,
                              "end": 66,
                              "exprName": {
                                "type": "Identifier",
                                "start": 65,
                                "end": 66,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
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
            "type": "ReturnStatement",
            "start": 79,
            "end": 88,
            "argument": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "x",
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
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
      "start": 92,
      "end": 182,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 182,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 165,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 165,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 123,
                      "end": 165,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 133,
                          "end": 138,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 134,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 134,
                            "end": 137,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 136,
                              "end": 137,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 137,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 147,
                          "end": 159,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 148,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 148,
                            "end": 158,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 150,
                              "end": 158,
                              "exprName": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
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
            "type": "ReturnStatement",
            "start": 171,
            "end": 180,
            "argument": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "x",
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
        "start": 101,
        "end": 104,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 107,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 106,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 192,
            "end": 205,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 195,
              "end": 203,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 196,
                  "end": 202
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
      "start": 207,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 215,
            "end": 228,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 218,
              "end": 226,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 219,
                  "end": 225
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
      "start": 328,
      "end": 334,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 328,
        "end": 333,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 332,
          "end": 333,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
