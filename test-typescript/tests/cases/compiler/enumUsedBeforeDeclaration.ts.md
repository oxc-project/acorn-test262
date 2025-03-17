__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 148,
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
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 15,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 15,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 10,
                "end": 15,
                "typeName": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 15,
                  "name": "Color",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 18,
            "end": 29,
            "object": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 24,
              "end": 29,
              "name": "Green",
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 51,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 51,
                  "name": "ConstColor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 54,
            "end": 70,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 64,
              "name": "ConstColor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 70,
              "name": "Green",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 72,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 82,
        "name": "Color",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 85,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
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
          "start": 90,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 95,
            "name": "Green",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 97,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
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
        "start": 83,
        "end": 103,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 85,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
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
            "start": 90,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "name": "Green",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
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
    {
      "type": "TSEnumDeclaration",
      "start": 104,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 125,
        "name": "ConstColor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 128,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
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
          "start": 133,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 138,
            "name": "Green",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 140,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 144,
            "name": "Blue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 126,
        "end": 146,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 128,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
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
            "start": 133,
            "end": 138,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 138,
              "name": "Green",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 140,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 144,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
