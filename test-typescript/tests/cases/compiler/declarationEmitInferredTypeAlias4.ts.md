__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 91,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 91,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 22,
            "end": 54,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 36,
              "end": 53,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 36,
                  "end": 37,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 40,
                  "end": 53,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 42,
                      "end": 51,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
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
                        "start": 43,
                        "end": 51,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 45,
                          "end": 51,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 48,
                            "end": 51,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 49,
                                "end": 50,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 49,
                                  "end": 50,
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
                            "start": 45,
                            "end": 48,
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
              "start": 30,
              "end": 33,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 31,
                  "end": 32,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
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
            "start": 59,
            "end": 75,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 63,
                "end": 74,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 74,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 69,
                        "end": 74,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 70,
                            "end": 73,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 70,
                              "end": 71,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 70,
                                "end": 71,
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
                        "start": 66,
                        "end": 69,
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
            "start": 80,
            "end": 89,
            "argument": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
