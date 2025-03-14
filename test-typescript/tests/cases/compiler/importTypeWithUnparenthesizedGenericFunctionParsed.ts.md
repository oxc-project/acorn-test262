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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 70,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 69,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 69,
              "decorators": [],
              "name": "fail1",
              "optional": false,
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
                      "raw": "\"module\"",
                      "value": "module"
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 53,
                    "decorators": [],
                    "name": "Modifier",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 58,
                            "end": 62,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
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
                              "const": false,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 55,
                                "end": 56,
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
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
