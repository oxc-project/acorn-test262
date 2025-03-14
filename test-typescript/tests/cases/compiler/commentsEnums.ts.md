__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 212,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 141,
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 141,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 81,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 81,
              "decorators": [],
              "name": "Cornflower",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 130,
            "end": 139,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 130,
              "end": 139,
              "decorators": [],
              "name": "FancyPink",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "decorators": [],
        "name": "Colors",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 170,
            "end": 187,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 170,
              "end": 176,
              "decorators": [],
              "name": "Colors",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 187,
              "decorators": [],
              "name": "Cornflower",
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
      "start": 189,
      "end": 210,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 209,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 193,
          "end": 209,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 193,
            "end": 199,
            "decorators": [],
            "name": "Colors",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 209,
            "decorators": [],
            "name": "FancyPink",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
