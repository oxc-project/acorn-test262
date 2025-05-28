__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
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
          "decorators": [],
          "name": "IFoo",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
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
          "start": 25,
          "end": 28,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "A",
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
                "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 67,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "A",
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
        "returnType": null,
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
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 93,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
