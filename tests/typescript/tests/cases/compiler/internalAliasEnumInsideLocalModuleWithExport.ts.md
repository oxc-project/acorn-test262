__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 41
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Friday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 58
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 52,
                      "end": 58
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Saturday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 76
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 68,
                      "end": 76
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 92
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 86,
                      "end": 92
                    }
                  ],
                  "start": 42,
                  "end": 98
                },
                "const": false,
                "declare": false,
                "start": 29,
                "end": 98
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 22,
              "end": 98
            }
          ],
          "start": 16,
          "end": 100
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 100
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 100
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 117
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "weekend",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 151
                  },
                  "start": 142,
                  "end": 151
                },
                "importKind": "value",
                "start": 131,
                "end": 152
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 124,
              "end": 152
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
                      "name": "bVal",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 175
                          },
                          "typeArguments": null,
                          "start": 174,
                          "end": 175
                        },
                        "start": 172,
                        "end": 175
                      },
                      "start": 168,
                      "end": 175
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 179
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 186
                      },
                      "optional": false,
                      "computed": false,
                      "start": 178,
                      "end": 186
                    },
                    "definite": false,
                    "start": 168,
                    "end": 186
                  }
                ],
                "declare": false,
                "start": 164,
                "end": 187
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 157,
              "end": 187
            }
          ],
          "start": 118,
          "end": 189
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 109,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
