errorForUsingPropertyOfTypeAsType02.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 107,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 22,
            "end": 105,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 90,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 90,
                                "decorators": [],
                                "name": "abc",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 93,
                        "end": 98,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 94,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 98,
                          "decorators": [],
                          "name": "abc",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 62,
                "end": 66,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 34,
              "end": 61,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 35,
                  "end": 60,
                  "const": false,
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
                        "key": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 50,
                          "decorators": [],
                          "name": "abc",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
                          "end": 58,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 52,
                            "end": 58
                          }
                        }
                      }
                    ]
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
