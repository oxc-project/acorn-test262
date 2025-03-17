__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
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
      "end": 189,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 109,
        "end": 189,
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
          "end": 189,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 124,
              "end": 152,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 131,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 142,
                  "end": 151,
                  "left": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 151,
                    "name": "weekend",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 157,
              "end": 187,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 164,
                "end": 187,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 168,
                    "end": 186,
                    "id": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 175,
                      "name": "bVal",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 172,
                        "end": 175,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 174,
                          "end": 175,
                          "typeName": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 175,
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
                      "start": 178,
                      "end": 186,
                      "object": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 186,
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
