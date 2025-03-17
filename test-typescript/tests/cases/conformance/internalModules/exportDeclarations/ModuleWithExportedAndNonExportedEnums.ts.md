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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 46,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 22,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 32,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 35,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 38,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 40,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 44,
                    "name": "Blue",
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
                "start": 33,
                "end": 46,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 35,
                    "end": 38,
                    "id": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 38,
                      "name": "Red",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 40,
                    "end": 44,
                    "id": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 44,
                      "name": "Blue",
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
          },
          {
            "type": "TSEnumDeclaration",
            "start": 51,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "name": "Day",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 62,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 68,
                  "name": "Monday",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 70,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 77,
                  "name": "Tuesday",
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
              "start": 60,
              "end": 79,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 62,
                  "end": 68,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 68,
                    "name": "Monday",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 70,
                  "end": 77,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 77,
                    "name": "Tuesday",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 128,
            "name": "a",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 128,
                    "name": "Color",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 142,
            "object": {
              "type": "MemberExpression",
              "start": 131,
              "end": 138,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "Red",
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
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 187,
            "object": {
              "type": "MemberExpression",
              "start": 175,
              "end": 180,
              "object": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "name": "Day",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "name": "Monday",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
