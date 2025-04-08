__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 42,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 7,
        "end": 12,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 42,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 32,
            "end": 40,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 32,
              "end": 39,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 44,
      "end": 84,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 51,
        "end": 56,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 84,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 65,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 69,
                "end": 70,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 82,
            "expression": {
              "type": "AssignmentExpression",
              "start": 76,
              "end": 81,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
