__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 14,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 14,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 14,
                  "decorators": [],
                  "name": "Color",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 17,
            "end": 28,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 50,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 50,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 50,
                  "decorators": [],
                  "name": "ConstColor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 53,
            "end": 69,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 53,
              "end": 63,
              "decorators": [],
              "name": "ConstColor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 64,
              "end": 69,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 71,
      "end": 102,
      "body": {
        "type": "TSEnumBody",
        "start": 82,
        "end": 102,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 87,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 89,
            "end": 94,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 94,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 100,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 81,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 103,
      "end": 145,
      "body": {
        "type": "TSEnumBody",
        "start": 125,
        "end": 145,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 127,
            "end": 130,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 132,
            "end": 137,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 137,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 139,
            "end": 143,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 143,
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 124,
        "decorators": [],
        "name": "ConstColor",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
