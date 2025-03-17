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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 100,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 100,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 98,
              "attributes": [],
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 29,
                "end": 98,
                "body": {
                  "type": "TSEnumBody",
                  "start": 42,
                  "end": 98,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 52,
                      "end": 58,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 58,
                        "decorators": [],
                        "name": "Friday",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 68,
                      "end": 76,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 76,
                        "decorators": [],
                        "name": "Saturday",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 86,
                      "end": 92,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 92,
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null
                    }
                  ]
                },
                "const": false,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 41,
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 189,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 109,
        "end": 189,
        "body": {
          "type": "TSModuleBlock",
          "start": 118,
          "end": 189,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 124,
              "end": 152,
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 131,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 142,
                  "end": 151,
                  "left": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 151,
                    "decorators": [],
                    "name": "weekend",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 157,
              "end": 187,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 164,
                "end": 187,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 168,
                    "end": 186,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 175,
                      "decorators": [],
                      "name": "bVal",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 172,
                        "end": 175,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 174,
                          "end": 175,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 175,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 178,
                      "end": 186,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 186,
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
