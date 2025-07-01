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
        "name": "A",
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
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 32
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 38
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 35,
                    "end": 38
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 44
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 40,
                    "end": 44
                  }
                ],
                "start": 33,
                "end": 46
              },
              "const": false,
              "declare": false,
              "start": 22,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 46
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Day",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 59
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Monday",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 68
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 62,
                  "end": 68
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tuesday",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 77
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 70,
                  "end": 77
                }
              ],
              "start": 60,
              "end": 79
            },
            "const": false,
            "declare": false,
            "start": 51,
            "end": 79
          }
        ],
        "start": 9,
        "end": 81
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 81
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 128
                  },
                  "start": 121,
                  "end": 128
                },
                "typeArguments": null,
                "start": 121,
                "end": 128
              },
              "start": 119,
              "end": 128
            },
            "start": 118,
            "end": 128
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 138
              },
              "optional": false,
              "computed": false,
              "start": 131,
              "end": 138
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
            },
            "optional": false,
            "computed": false,
            "start": 131,
            "end": 142
          },
          "definite": false,
          "start": 118,
          "end": 142
        }
      ],
      "declare": false,
      "start": 114,
      "end": 143
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 172
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Day",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 180
              },
              "optional": false,
              "computed": false,
              "start": 175,
              "end": 180
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Monday",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 187
            },
            "optional": false,
            "computed": false,
            "start": 175,
            "end": 187
          },
          "definite": false,
          "start": 171,
          "end": 187
        }
      ],
      "declare": false,
      "start": 167,
      "end": 188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```
