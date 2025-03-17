__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 29,
          "value": "garbage",
          "raw": "\"garbage\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 113,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 113,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 112,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 54,
                  "end": 112,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 60,
                      "end": 84,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 65,
                        "name": "test1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 65,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 67,
                          "end": 83,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 67,
                            "end": 83,
                            "left": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 69,
                              "name": "a1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 83,
                              "name": "connectModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 89,
                      "end": 110,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 91,
                        "end": 109,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 93,
                          "end": 109,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 93,
                            "end": 109,
                            "left": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 95,
                              "name": "a1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 109,
                              "name": "connectExport",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ]
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
