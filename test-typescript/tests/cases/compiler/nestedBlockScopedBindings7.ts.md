__ESTREE_TEST__:PASS:
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
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
      "test": {
        "type": "Literal",
        "start": 12,
        "end": 17,
        "value": false,
        "raw": "false"
      },
      "update": null,
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
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
      "start": 38,
      "end": 72,
      "init": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
      "test": {
        "type": "Literal",
        "start": 50,
        "end": 55,
        "value": false,
        "raw": "false"
      },
      "update": null,
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 68,
                "end": 69,
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
