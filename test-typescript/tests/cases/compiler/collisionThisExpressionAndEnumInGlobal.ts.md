collisionThisExpressionAndEnumInGlobal.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSEnumBody",
        "start": 11,
        "end": 53,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 35,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 35,
              "decorators": [],
              "name": "_thisVal1",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 50,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "_thisVal2",
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
        "end": 10,
        "decorators": [],
        "name": "_this",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 72,
            "async": false,
            "body": {
              "type": "ThisExpression",
              "start": 68,
              "end": 72
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
