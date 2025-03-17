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
        "name": "TShirtSize",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 21,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 26,
            "name": "Small",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Medium",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Large",
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
              "name": "Small",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Medium",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Large",
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
      "start": 50,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "name": "mySize",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 63,
            "end": 79,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 73,
              "name": "TShirtSize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "name": "Large",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 92,
            "end": 110,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 102,
              "name": "TShirtSize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "name": "mySize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
