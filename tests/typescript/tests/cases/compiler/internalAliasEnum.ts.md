__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "weekend",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "start": 61,
                    "end": 69,
                    "id": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 69,
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
                    "start": 79,
                    "end": 85,
                    "id": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 85,
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
    {
      "type": "TSModuleDeclaration",
      "start": 95,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 121,
              "end": 130,
              "left": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 130,
                "decorators": [],
                "name": "weekend",
                "optional": false,
                "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 147,
                  "end": 165,
                  "id": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 154,
                    "decorators": [],
                    "name": "bVal",
                    "optional": false,
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
                    "start": 157,
                    "end": 165,
                    "object": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 158,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 165,
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
