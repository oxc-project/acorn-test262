__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 107,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 22,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
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
                "start": 62,
                "end": 66,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 68,
              "end": 105,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 78,
                  "end": 99,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 82,
                      "end": 98,
                      "id": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 90,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 90,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 85,
                            "end": 90,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 85,
                              "end": 90,
                              "left": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 86,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 90,
                                "name": "abc",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 93,
                        "end": 98,
                        "object": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 94,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 98,
                          "name": "abc",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 34,
              "end": 61,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 35,
                  "end": 60,
                  "name": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 45,
                    "end": 60,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 47,
                        "end": 58,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 50,
                          "name": "abc",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
                          "end": 58,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 52,
                            "end": 58
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
