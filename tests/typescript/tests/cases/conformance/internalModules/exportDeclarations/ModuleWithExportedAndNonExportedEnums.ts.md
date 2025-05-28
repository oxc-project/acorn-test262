__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Blue",
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
          },
          {
            "type": "TSEnumDeclaration",
            "start": 51,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "Day",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "Monday",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Tuesday",
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 142,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 128,
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "Red",
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
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "Day",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "decorators": [],
              "name": "Monday",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
