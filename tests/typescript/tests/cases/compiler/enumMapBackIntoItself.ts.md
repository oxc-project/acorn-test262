__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 209,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "TShirtSize",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 16,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 26,
              "decorators": [],
              "name": "Small",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "decorators": [],
              "name": "Medium",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "Large",
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
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "mySize",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 63,
            "end": 79,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 73,
              "decorators": [],
              "name": "TShirtSize",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "decorators": [],
              "name": "Large",
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
      "start": 81,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 92,
            "end": 110,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 102,
              "decorators": [],
              "name": "TShirtSize",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "decorators": [],
              "name": "mySize",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 209,
      "expression": {
        "type": "BinaryExpression",
        "start": 200,
        "end": 209,
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 204,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 207,
          "end": 209,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
