nestedBlockScopedBindings7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 36,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 36,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 26,
            "end": 34,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 26,
              "end": 33,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "Literal",
        "start": 12,
        "end": 17,
        "raw": "false",
        "value": false
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 38,
      "end": 72,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 72,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 70,
            "expression": {
              "type": "AssignmentExpression",
              "start": 64,
              "end": 69,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 68,
                "end": 69,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 48,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "Literal",
        "start": 50,
        "end": 55,
        "raw": "false",
        "value": false
      },
      "update": null
    }
  ],
  "sourceType": "script"
}
```
