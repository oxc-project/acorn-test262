__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 100,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 100,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 98,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 29,
                "end": 98,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 41,
                  "name": "weekend",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 52,
                    "end": 58,
                    "id": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 58,
                      "name": "Friday",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 68,
                    "end": 76,
                    "id": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 76,
                      "name": "Saturday",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 86,
                    "end": 92,
                    "id": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 92,
                      "name": "Sunday",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ],
                "const": false,
                "declare": false,
                "body": {
                  "type": "TSEnumBody",
                  "start": 42,
                  "end": 98,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 52,
                      "end": 58,
                      "id": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 58,
                        "name": "Friday",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 68,
                      "end": 76,
                      "id": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 76,
                        "name": "Saturday",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 86,
                      "end": 92,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 92,
                        "name": "Sunday",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ]
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 182,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 109,
        "end": 182,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 118,
          "end": 182,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 124,
              "end": 145,
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 135,
                "end": 144,
                "left": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 144,
                  "name": "weekend",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 150,
              "end": 180,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 157,
                "end": 180,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 161,
                    "end": 179,
                    "id": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 168,
                      "name": "bVal",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 165,
                        "end": 168,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 167,
                          "end": 168,
                          "typeName": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 168,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 171,
                      "end": 179,
                      "object": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 179,
                        "name": "Sunday",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
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
