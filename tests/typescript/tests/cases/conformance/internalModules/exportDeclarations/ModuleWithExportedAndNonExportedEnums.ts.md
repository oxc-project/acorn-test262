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
        "start": 10,
        "end": 11
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
                "start": 30,
                "end": 35
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
                      "start": 38,
                      "end": 41
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 38,
                    "end": 41
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 47
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 43,
                    "end": 47
                  }
                ],
                "start": 36,
                "end": 49
              },
              "const": false,
              "declare": false,
              "start": 25,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 49
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Day",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
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
                    "start": 65,
                    "end": 71
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 65,
                  "end": 71
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tuesday",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 80
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 73,
                  "end": 80
                }
              ],
              "start": 63,
              "end": 82
            },
            "const": false,
            "declare": false,
            "start": 54,
            "end": 82
          }
        ],
        "start": 12,
        "end": 84
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 84
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
                    "start": 124,
                    "end": 125
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 131
                  },
                  "start": 124,
                  "end": 131
                },
                "typeArguments": null,
                "start": 124,
                "end": 131
              },
              "start": 122,
              "end": 131
            },
            "start": 121,
            "end": 131
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
                "start": 134,
                "end": 135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 141
              },
              "optional": false,
              "computed": false,
              "start": 134,
              "end": 141
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 145
            },
            "optional": false,
            "computed": false,
            "start": 134,
            "end": 145
          },
          "definite": false,
          "start": 121,
          "end": 145
        }
      ],
      "declare": false,
      "start": 117,
      "end": 146
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
            "start": 174,
            "end": 175
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
                "start": 178,
                "end": 179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Day",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 183
              },
              "optional": false,
              "computed": false,
              "start": 178,
              "end": 183
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Monday",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 190
            },
            "optional": false,
            "computed": false,
            "start": 178,
            "end": 190
          },
          "definite": false,
          "start": 174,
          "end": 190
        }
      ],
      "declare": false,
      "start": 170,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
