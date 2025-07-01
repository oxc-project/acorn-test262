__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
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
                "start": 27,
                "end": 34
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
                      "start": 45,
                      "end": 51
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 45,
                    "end": 51
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Saturday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 69
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 61,
                    "end": 69
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sunday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 85
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 79,
                    "end": 85
                  }
                ],
                "start": 35,
                "end": 91
              },
              "const": false,
              "declare": false,
              "start": 22,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 91
          }
        ],
        "start": 9,
        "end": 93
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
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
              "start": 117,
              "end": 118
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "weekend",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 130
              },
              "start": 121,
              "end": 130
            },
            "importKind": "value",
            "start": 110,
            "end": 131
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
                          "start": 153,
                          "end": 154
                        },
                        "typeArguments": null,
                        "start": 153,
                        "end": 154
                      },
                      "start": 151,
                      "end": 154
                    },
                    "start": 147,
                    "end": 154
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 158
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sunday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 165
                    },
                    "optional": false,
                    "computed": false,
                    "start": 157,
                    "end": 165
                  },
                  "definite": false,
                  "start": 147,
                  "end": 165
                }
              ],
              "declare": false,
              "start": 143,
              "end": 166
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 166
          }
        ],
        "start": 104,
        "end": 168
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 95,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
