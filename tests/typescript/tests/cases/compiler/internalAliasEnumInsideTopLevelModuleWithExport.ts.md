__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
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
      "end": 130,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 109,
        "end": 130,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 120,
          "end": 129,
          "left": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
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
      "start": 131,
      "end": 161,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 138,
        "end": 161,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 142,
            "end": 160,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 149,
              "decorators": [],
              "name": "bVal",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 146,
                "end": 149,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 148,
                  "end": 149,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
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
              "start": 152,
              "end": 160,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
