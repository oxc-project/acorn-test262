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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 62,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 60,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 53,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 47,
                    "end": 53,
                    "typeName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
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
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 78,
        "end": 101,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 79,
            "end": 90,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 87,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "name": "foo",
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
          "start": 127,
          "end": 138,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 138,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 138,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 135,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 139,
        "end": 145,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 141,
          "end": 145
        }
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
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 171,
            "name": "bar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 167,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 179,
          "end": 182,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
