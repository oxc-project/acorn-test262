__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 64,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 62,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 91,
        "decorators": [],
        "name": "ObjectContaining",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 137,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 99,
            "end": 135,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 104,
                "end": 122,
                "decorators": [],
                "name": "sample",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 119,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 119,
                      "end": 122,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 120,
                          "end": 121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
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
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 132,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 132,
                  "end": 135,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 133,
                      "end": 134,
                      "typeName": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 202,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 201,
            "decorators": [],
            "name": "cafoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 173,
                  "decorators": [],
                  "name": "ObjectContaining",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 173,
                  "end": 201,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 174,
                      "end": 200,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 176,
                          "end": 186,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 177,
                            "end": 185,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 179,
                              "end": 185
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 187,
                          "end": 198,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 187,
                            "end": 190,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 190,
                            "end": 198,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 192,
                              "end": 198
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 243,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 242,
            "decorators": [],
            "name": "cfoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 242,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 237,
                  "decorators": [],
                  "name": "ObjectContaining",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 237,
                  "end": 242,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 241,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 257,
      "expression": {
        "type": "AssignmentExpression",
        "start": 244,
        "end": 256,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 244,
          "end": 248,
          "decorators": [],
          "name": "cfoo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 251,
          "end": 256,
          "decorators": [],
          "name": "cafoo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 271,
      "expression": {
        "type": "AssignmentExpression",
        "start": 258,
        "end": 270,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 258,
          "end": 263,
          "decorators": [],
          "name": "cafoo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 266,
          "end": 270,
          "decorators": [],
          "name": "cfoo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
