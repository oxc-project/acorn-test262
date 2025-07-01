__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 7,
        "end": 12
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                },
                "init": null,
                "definite": false,
                "start": 25,
                "end": 26
              }
            ],
            "declare": false,
            "start": 21,
            "end": 27
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "id": null,
              "generator": false,
              "start": 32,
              "end": 39
            },
            "directive": null,
            "start": 32,
            "end": 40
          }
        ],
        "start": 15,
        "end": 42
      },
      "start": 0,
      "end": 42
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 51,
        "end": 56
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 70
                },
                "init": null,
                "definite": false,
                "start": 69,
                "end": 70
              }
            ],
            "declare": false,
            "start": 65,
            "end": 71
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 80,
                "end": 81
              },
              "start": 76,
              "end": 81
            },
            "directive": null,
            "start": 76,
            "end": 82
          }
        ],
        "start": 59,
        "end": 84
      },
      "start": 44,
      "end": 84
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
