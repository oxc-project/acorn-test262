__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TShirtSize",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Small",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 26
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 26
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Medium",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "initializer": null,
            "computed": false,
            "start": 31,
            "end": 37
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Large",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 42,
            "end": 47
          }
        ],
        "start": 16,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 49
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
            "name": "mySize",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 60
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TShirtSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 73
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Large",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 79
            },
            "optional": false,
            "computed": false,
            "start": 63,
            "end": 79
          },
          "definite": false,
          "start": 54,
          "end": 79
        }
      ],
      "declare": false,
      "start": 50,
      "end": 80
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 89
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TShirtSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 102
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "mySize",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 109
            },
            "optional": false,
            "computed": true,
            "start": 92,
            "end": 110
          },
          "definite": false,
          "start": 85,
          "end": 110
        }
      ],
      "declare": false,
      "start": 81,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 204
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 207,
          "end": 209
        },
        "start": 200,
        "end": 209
      },
      "directive": null,
      "start": 200,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 209
}
```
