internalAliasEnum.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 91,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 22,
              "end": 91,
              "body": {
                "type": "TSEnumBody",
                "start": 35,
                "end": 91,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 45,
                    "end": 51,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 51,
                      "decorators": [],
                      "name": "Friday",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 61,
                    "end": 69,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 69,
                      "decorators": [],
                      "name": "Saturday",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 79,
                    "end": 85,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 85,
                      "decorators": [],
                      "name": "Sunday",
                      "optional": false
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 34,
                "decorators": [],
                "name": "weekend",
                "optional": false
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 95,
      "end": 168,
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
              "optional": false
            },
            "importKind": "value",
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
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 130,
                "decorators": [],
                "name": "weekend",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 166,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 166,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 147,
                  "end": 165,
                  "definite": false,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 157,
                    "end": 165,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 158,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 165,
                      "decorators": [],
                      "name": "Sunday",
                      "optional": false
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
