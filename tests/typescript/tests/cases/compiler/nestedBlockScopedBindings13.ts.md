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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
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
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 69,
                "end": 70,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
