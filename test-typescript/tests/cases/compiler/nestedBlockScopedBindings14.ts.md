__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForStatement",
      "start": 7,
      "end": 49,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 49,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 34,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 33,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
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
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 47,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 39,
              "end": 46,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
      "init": null,
      "test": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "false",
        "value": false
      },
      "update": null
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForStatement",
      "start": 58,
      "end": 98,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 98,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 85,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 84,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
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
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 96,
            "expression": {
              "type": "AssignmentExpression",
              "start": 90,
              "end": 95,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": null,
      "test": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "raw": "false",
        "value": false
      },
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
