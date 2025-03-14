privacyCheckCallbackOfInterfaceMethodWithTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 59,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 59,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 28,
              "end": 56,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 30,
                "decorators": [],
                "name": "f1",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 54,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 41,
                      "end": 54,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 42,
                          "end": 46,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 43,
                            "end": 46,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 45,
                              "end": 46,
                              "typeName": {
                                "type": "Identifier",
                                "start": 45,
                                "end": 46,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 54,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 51,
                          "end": 54
                        }
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "T",
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
      "start": 62,
      "end": 100,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 69,
        "end": 100,
        "body": {
          "type": "TSInterfaceBody",
          "start": 97,
          "end": 100,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 92,
            "end": 96,
            "expression": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 93,
              "end": 96,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 94,
                  "end": 95,
                  "typeName": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 80,
          "end": 83,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 81,
              "end": 82,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "T",
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
    }
  ],
  "sourceType": "script"
}
```
