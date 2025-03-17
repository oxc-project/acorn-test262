__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 11,
      "body": {
        "type": "TSEnumBody",
        "start": 6,
        "end": 11,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 8,
            "end": 9,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "a",
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
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 33,
            "end": 36,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
