__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
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
      "end": 130,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 109,
        "end": 130,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 120,
          "end": 129,
          "left": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
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
      "start": 131,
      "end": 161,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 138,
        "end": 161,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 142,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 149,
              "name": "bVal",
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
              "start": 152,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
