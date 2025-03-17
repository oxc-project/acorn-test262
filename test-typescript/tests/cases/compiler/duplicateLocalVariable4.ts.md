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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 8,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "a",
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
        "start": 6,
        "end": 11,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 8,
            "end": 9,
            "id": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "a",
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
      "type": "VariableDeclaration",
      "start": 14,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 25,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 33,
            "end": 36,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "a",
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
