enumMapBackIntoItself.ts
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
      "body": {
        "type": "TSEnumBody",
        "start": 16,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 26,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 26,
              "decorators": [],
              "name": "Small",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 37,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "decorators": [],
              "name": "Medium",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 47,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "Large",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "TShirtSize",
        "optional": false
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "mySize",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 63,
            "end": 79,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 73,
              "decorators": [],
              "name": "TShirtSize",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "decorators": [],
              "name": "Large",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 92,
            "end": 110,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 102,
              "decorators": [],
              "name": "TShirtSize",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "decorators": [],
              "name": "mySize",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 209,
      "expression": {
        "type": "BinaryExpression",
        "start": 200,
        "end": 209,
        "operator": "+",
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 204,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 207,
          "end": 209,
          "raw": "''",
          "value": ""
        }
      }
    }
  ],
  "sourceType": "script"
}
```
