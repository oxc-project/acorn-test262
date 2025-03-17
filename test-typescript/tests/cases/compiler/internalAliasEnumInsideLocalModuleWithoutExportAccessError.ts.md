__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
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
      "end": 182,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 109,
        "end": 182,
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 135,
                "end": 144,
                "left": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 144,
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 150,
              "end": 180,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 157,
                "end": 180,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 161,
                    "end": 179,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 168,
                      "decorators": [],
                      "name": "bVal",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 165,
                        "end": 168,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 167,
                          "end": 168,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 168,
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
                      "start": 171,
                      "end": 179,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 179,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 199,
            "decorators": [],
            "name": "happyFriday",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 202,
            "end": 212,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 202,
              "end": 205,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 202,
                "end": 203,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 212,
              "decorators": [],
              "name": "Friday",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
