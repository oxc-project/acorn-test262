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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 28,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "name": "IFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 24,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 25,
          "end": 28,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 137,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 36,
        "end": 137,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
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
            "start": 52,
            "end": 79,
            "name": "fn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 79,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 56,
                "end": 79,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 57,
                    "end": 70,
                    "name": "ifoo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 70,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 67,
                          "name": "IFoo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "A",
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
                  "start": 72,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 75,
                    "end": 79
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "callee": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 93,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 48,
          "end": 51,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 49,
              "end": 50,
              "name": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
