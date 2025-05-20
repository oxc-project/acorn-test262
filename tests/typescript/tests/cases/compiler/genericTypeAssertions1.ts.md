__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 27,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 26,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 26,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 21,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 20,
                      "end": 21,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 20,
                        "end": 21,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 28,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 38,
            "end": 53,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 43,
              "end": 51,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 44,
                  "end": 50
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
      "start": 55,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 71,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 71,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 71,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 74,
            "end": 92,
            "expression": {
              "type": "NewExpression",
              "start": 85,
              "end": 92,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 84,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 76,
                "end": 84,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 77,
                    "end": 83
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 120,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 120,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 112,
                  "end": 120,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 113,
                      "end": 119
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 123,
            "end": 140,
            "expression": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 124,
              "end": 136,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 125,
                "end": 136,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 135,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 127,
                      "end": 135,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 128,
                          "end": 134
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
