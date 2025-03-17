__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 91,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 22,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 34,
                "name": "weekend",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 45,
                  "end": 51,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 51,
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
                  "start": 61,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 69,
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
                  "start": 79,
                  "end": 85,
                  "id": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 85,
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
                "start": 35,
                "end": 91,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 45,
                    "end": 51,
                    "id": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 51,
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
                    "start": 61,
                    "end": 69,
                    "id": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 69,
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
                    "start": 79,
                    "end": 85,
                    "id": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 85,
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
    {
      "type": "TSModuleDeclaration",
      "start": 95,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 104,
        "end": 168,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 110,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 121,
              "end": 130,
              "left": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 130,
                "name": "weekend",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 166,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 166,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 147,
                  "end": 165,
                  "id": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 154,
                    "name": "bVal",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 151,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 153,
                        "end": 154,
                        "typeName": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 154,
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
                    "start": 157,
                    "end": 165,
                    "object": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 158,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 165,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
