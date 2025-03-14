badExternalModuleReference.ts
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
        "decorators": [],
        "name": "a1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 29,
          "raw": "\"garbage\"",
          "value": "garbage"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 113,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 113,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 112,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 112,
              "decorators": [],
              "name": "a",
              "optional": false,
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
                      "key": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 65,
                        "decorators": [],
                        "name": "test1",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                              "decorators": [],
                              "name": "a1",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 83,
                              "decorators": [],
                              "name": "connectModule",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 89,
                      "end": 110,
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
                              "decorators": [],
                              "name": "a1",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 109,
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "var"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
