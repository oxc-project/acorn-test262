__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
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
          "start": 22,
          "end": 59,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 28,
              "end": 56,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 30,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 54,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 41,
                      "end": 54,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 42,
                          "end": 46,
                          "name": "p",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
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
      "start": 62,
      "end": 100,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 69,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 92,
            "end": 96,
            "expression": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
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
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 80,
          "end": 83,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 81,
              "end": 82,
              "name": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
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
          "start": 97,
          "end": 100,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
