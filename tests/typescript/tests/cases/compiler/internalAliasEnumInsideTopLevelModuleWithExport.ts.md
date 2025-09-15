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
          "start": 17,
          "end": 18
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
                  "start": 37,
                  "end": 44
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
                        "start": 55,
                        "end": 61
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 55,
                      "end": 61
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Saturday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 79
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 71,
                      "end": 79
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 95
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 89,
                      "end": 95
                    }
                  ],
                  "start": 45,
                  "end": 101
                },
                "const": false,
                "declare": false,
                "start": 32,
                "end": 101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 101
            }
          ],
          "start": 19,
          "end": 103
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 103
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
          "start": 119,
          "end": 120
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "weekend",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 132
          },
          "start": 123,
          "end": 132
        },
        "importKind": "value",
        "start": 112,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 133
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
                    "start": 151,
                    "end": 152
                  },
                  "typeArguments": null,
                  "start": 151,
                  "end": 152
                },
                "start": 149,
                "end": 152
              },
              "start": 145,
              "end": 152
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sunday",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 163
              },
              "optional": false,
              "computed": false,
              "start": 155,
              "end": 163
            },
            "definite": false,
            "start": 145,
            "end": 163
          }
        ],
        "declare": false,
        "start": 141,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 164
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
