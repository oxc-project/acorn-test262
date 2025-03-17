__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 115,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 115,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 115,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 46,
            "end": 78,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 60,
              "end": 77,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 64,
                  "end": 77,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 66,
                      "end": 75,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 67,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 75,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 72,
                            "end": 75,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 73,
                                "end": 74,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 74,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 72,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 54,
              "end": 57,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 55,
                  "end": 56,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
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
            "start": 83,
            "end": 99,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 98,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 98,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 98,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 93,
                        "end": 98,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 94,
                            "end": 97,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 94,
                              "end": 95,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 95,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 93,
                        "decorators": [],
                        "name": "Foo",
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
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 113,
            "argument": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
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
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "A",
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
