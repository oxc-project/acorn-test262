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
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 117
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 144
                },
                "start": 135,
                "end": 144
              },
              "importKind": "value",
              "start": 124,
              "end": 145
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
                            "start": 167,
                            "end": 168
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 168
                        },
                        "start": 165,
                        "end": 168
                      },
                      "start": 161,
                      "end": 168
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 172
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 179
                      },
                      "optional": false,
                      "computed": false,
                      "start": 171,
                      "end": 179
                    },
                    "definite": false,
                    "start": 161,
                    "end": 179
                  }
                ],
                "declare": false,
                "start": 157,
                "end": 180
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 150,
              "end": 180
            }
          ],
          "start": 118,
          "end": 182
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 109,
        "end": 182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 182
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "happyFriday",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 199
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 203
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "optional": false,
              "computed": false,
              "start": 202,
              "end": 205
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Friday",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 212
            },
            "optional": false,
            "computed": false,
            "start": 202,
            "end": 212
          },
          "definite": false,
          "start": 188,
          "end": 212
        }
      ],
      "declare": false,
      "start": 184,
      "end": 213
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 213
}
```
