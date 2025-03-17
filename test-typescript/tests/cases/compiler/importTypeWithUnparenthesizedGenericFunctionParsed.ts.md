__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 70,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 70,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 69,
              "name": "fail1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 28,
                  "end": 69,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 35,
                    "end": 43,
                    "literal": {
                      "type": "Literal",
                      "start": 35,
                      "end": 43,
                      "value": "module",
                      "raw": "\"module\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 53,
                    "name": "Modifier",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 53,
                    "end": 69,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 54,
                        "end": 68,
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 58,
                            "end": 62,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 59,
                              "end": 62,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 61,
                                "end": 62,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 61,
                                  "end": 62,
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
                          "start": 64,
                          "end": 68,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 67,
                            "end": 68,
                            "typeName": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 68,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
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
        "kind": "const",
        "declare": true
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
