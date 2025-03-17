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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
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
        "start": 40,
        "end": 115,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 46,
            "end": 78,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
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
              "type": "TSUnionType",
              "start": 60,
              "end": 77,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 67,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 75,
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 72,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 72,
                            "end": 75,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 73,
                                "end": 74,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 74,
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
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 98,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 98,
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 93,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 95,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
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
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 113,
            "argument": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "A",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
