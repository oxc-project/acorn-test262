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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 32,
            "end": 40,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 32,
              "end": 39,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "init": null,
      "test": {
        "type": "Literal",
        "start": 7,
        "end": 12,
        "raw": "false",
        "value": false,
        "regex": null,
        "bigint": null
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 44,
      "end": 84,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 82,
            "directive": null,
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "init": null,
      "test": {
        "type": "Literal",
        "start": 51,
        "end": 56,
        "raw": "false",
        "value": false,
        "regex": null,
        "bigint": null
      },
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
