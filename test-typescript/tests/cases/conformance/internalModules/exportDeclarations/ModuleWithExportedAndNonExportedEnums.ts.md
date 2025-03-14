__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 22,
              "end": 46,
              "body": {
                "type": "TSEnumBody",
                "start": 33,
                "end": 46,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 35,
                    "end": 38,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 38,
                      "decorators": [],
                      "name": "Red",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 40,
                    "end": 44,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 44,
                      "decorators": [],
                      "name": "Blue",
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
                "end": 32,
                "decorators": [],
                "name": "Color",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSEnumDeclaration",
            "start": 51,
            "end": 79,
            "body": {
              "type": "TSEnumBody",
              "start": 60,
              "end": 79,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 62,
                  "end": 68,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 68,
                    "decorators": [],
                    "name": "Monday",
                    "optional": false
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 70,
                  "end": 77,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 77,
                    "decorators": [],
                    "name": "Tuesday",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "Day",
              "optional": false
            }
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
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 128,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 128,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 121,
                  "end": 128,
                  "left": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 128,
                    "decorators": [],
                    "name": "Color",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 142,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 131,
              "end": 138,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "decorators": [],
                "name": "Color",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "Red",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 187,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 175,
              "end": 180,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "Day",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "decorators": [],
              "name": "Monday",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
