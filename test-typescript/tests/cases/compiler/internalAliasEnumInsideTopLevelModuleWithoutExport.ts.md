__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
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
      "type": "TSImportEqualsDeclaration",
      "start": 102,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 113,
        "end": 122,
        "left": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 115,
          "end": 122,
          "decorators": [],
          "name": "weekend",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 154,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 154,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 135,
            "end": 153,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 142,
              "decorators": [],
              "name": "bVal",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 139,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 141,
                  "end": 142,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
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
              "start": 145,
              "end": 153,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 147,
                "end": 153,
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
  "sourceType": "script",
  "hashbang": null
}
```
