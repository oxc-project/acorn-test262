__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 69,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 69,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 21,
                  "end": 27,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 22,
                      "end": 26,
                      "typeName": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 23,
                        "end": 26,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 24,
                            "end": 25,
                            "typeName": {
                              "type": "Identifier",
                              "start": 24,
                              "end": 25,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 152,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 95,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 92,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 93,
                    "end": 94,
                    "typeName": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 152,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 185,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 163,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 171,
            "end": 182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 175,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 177,
                        "end": 180,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 178,
                            "end": 179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 217,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 196,
            "end": 216,
            "callee": {
              "type": "Identifier",
              "start": 200,
              "end": 203,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 203,
              "end": 214,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 213,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 205,
                    "end": 213,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 206,
                        "end": 212
                      }
                    ]
                  }
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
