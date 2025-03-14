__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 184,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 62,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 62,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 60,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 53,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 47,
                    "end": 53,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 50,
                      "end": 53,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 51,
                          "end": 52,
                          "typeName": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 52,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 60,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 56,
                "end": 60
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 62,
      "end": 63
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 64,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 78,
        "end": 101,
        "params": [
          {
            "type": "Identifier",
            "start": 79,
            "end": 90,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 90,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 87,
                  "end": 90,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 89,
                      "typeName": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 87,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 92,
          "end": 101,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 95,
            "end": 101,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 98,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 99,
                  "end": 100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 146,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 138,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 138,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 138,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 135,
                "end": 138,
                "params": [
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
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 135,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 139,
        "end": 145,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 141,
          "end": 145
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
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 171,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 171,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 167,
                  "end": 171,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 168,
                      "end": 170,
                      "members": []
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 167,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 183,
      "expression": {
        "type": "AssignmentExpression",
        "start": 173,
        "end": 182,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 173,
          "end": 176,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 179,
          "end": 182,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
