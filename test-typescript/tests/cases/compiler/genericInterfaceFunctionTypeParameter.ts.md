__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 28,
        "body": {
          "type": "TSInterfaceBody",
          "start": 25,
          "end": 28,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "IFoo",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 24,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 137,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 36,
        "end": 137,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 137,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 87,
              "end": 95,
              "expression": {
                "type": "CallExpression",
                "start": 87,
                "end": 94,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 93,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 52,
            "end": 79,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 79,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 56,
                "end": 79,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 57,
                    "end": 70,
                    "decorators": [],
                    "name": "ifoo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 70,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 67,
                          "end": 70,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 68,
                              "end": 69,
                              "typeName": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 69,
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 67,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 72,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 75,
                    "end": 79
                  }
                }
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 48,
          "end": 51,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 49,
              "end": 50,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
