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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "decorators": [],
                        "name": "Friday",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Saturday",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ]
                },
                "const": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 130,
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
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 161,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 138,
        "end": 161,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 142,
            "end": 160,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "start": 152,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "decorators": [],
                "name": "Sunday",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
