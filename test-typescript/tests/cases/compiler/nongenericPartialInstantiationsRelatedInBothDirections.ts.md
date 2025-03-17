__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "ObjectContaining",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
                "name": "sample",
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
                      "name": "Partial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 201,
            "name": "cafoo",
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
                  "name": "ObjectContaining",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 242,
            "name": "cfoo",
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
                  "name": "ObjectContaining",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Foo",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "cfoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 251,
          "end": 256,
          "name": "cafoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "cafoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 266,
          "end": 270,
          "name": "cfoo",
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
