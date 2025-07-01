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
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 117
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 121
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "weekend",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 129
          },
          "start": 120,
          "end": 129
        },
        "importKind": "value",
        "start": 109,
        "end": 130
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 130
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
                    "start": 148,
                    "end": 149
                  },
                  "typeArguments": null,
                  "start": 148,
                  "end": 149
                },
                "start": 146,
                "end": 149
              },
              "start": 142,
              "end": 149
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sunday",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 160
            },
            "definite": false,
            "start": 142,
            "end": 160
          }
        ],
        "declare": false,
        "start": 138,
        "end": 161
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 161
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
