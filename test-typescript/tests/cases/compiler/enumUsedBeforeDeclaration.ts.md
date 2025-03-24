__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 15,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 15,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 10,
                "end": 15,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 15,
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
            "start": 18,
            "end": 29,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 24,
              "end": 29,
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
      "start": 31,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 51,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 51,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 51,
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
            "start": 54,
            "end": 70,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 64,
              "decorators": [],
              "name": "ConstColor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 70,
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
      "start": 72,
      "end": 103,
      "body": {
        "type": "TSEnumBody",
        "start": 83,
        "end": 103,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 85,
            "end": 88,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 90,
            "end": 95,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 101,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
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
        "start": 77,
        "end": 82,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 104,
      "end": 146,
      "body": {
        "type": "TSEnumBody",
        "start": 126,
        "end": 146,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 128,
            "end": 131,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 133,
            "end": 138,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 138,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 140,
            "end": 144,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 144,
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
        "start": 115,
        "end": 125,
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
