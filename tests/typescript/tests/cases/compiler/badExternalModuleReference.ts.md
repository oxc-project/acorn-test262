__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "garbage",
          "raw": "\"garbage\"",
          "start": 20,
          "end": 29
        },
        "start": 12,
        "end": 30
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 65
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 67,
                              "end": 69
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 83
                            },
                            "start": 67,
                            "end": 83
                          },
                          "typeArguments": null,
                          "start": 67,
                          "end": 83
                        },
                        "start": 65,
                        "end": 83
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 60,
                      "end": 84
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 95
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 96,
                              "end": 109
                            },
                            "start": 93,
                            "end": 109
                          },
                          "typeArguments": null,
                          "start": 93,
                          "end": 109
                        },
                        "start": 91,
                        "end": 109
                      },
                      "start": 89,
                      "end": 110
                    }
                  ],
                  "start": 54,
                  "end": 112
                },
                "start": 52,
                "end": 112
              },
              "start": 51,
              "end": 112
            },
            "init": null,
            "definite": false,
            "start": 51,
            "end": 112
          }
        ],
        "declare": true,
        "start": 39,
        "end": 113
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 32,
      "end": 113
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
