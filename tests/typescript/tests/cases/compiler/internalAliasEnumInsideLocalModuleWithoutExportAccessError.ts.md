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
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 123
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
                "start": 137,
                "end": 138
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 150
                },
                "start": 141,
                "end": 150
              },
              "importKind": "value",
              "start": 130,
              "end": 151
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
                            "start": 173,
                            "end": 174
                          },
                          "typeArguments": null,
                          "start": 173,
                          "end": 174
                        },
                        "start": 171,
                        "end": 174
                      },
                      "start": 167,
                      "end": 174
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 185
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 185
                    },
                    "definite": false,
                    "start": 167,
                    "end": 185
                  }
                ],
                "declare": false,
                "start": 163,
                "end": 186
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 156,
              "end": 186
            }
          ],
          "start": 124,
          "end": 188
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 112,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 188
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
            "start": 194,
            "end": 205
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
                "start": 208,
                "end": 209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "optional": false,
              "computed": false,
              "start": 208,
              "end": 211
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Friday",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 218
            },
            "optional": false,
            "computed": false,
            "start": 208,
            "end": 218
          },
          "definite": false,
          "start": 194,
          "end": 218
        }
      ],
      "declare": false,
      "start": 190,
      "end": 219
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 219
}
```
