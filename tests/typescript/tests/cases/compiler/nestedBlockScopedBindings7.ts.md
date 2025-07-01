__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
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
              "start": 9,
              "end": 10
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 10
          }
        ],
        "declare": false,
        "start": 5,
        "end": 10
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 12,
        "end": 17
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 32,
                "end": 33
              },
              "id": null,
              "generator": false,
              "start": 26,
              "end": 33
            },
            "directive": null,
            "start": 26,
            "end": 34
          }
        ],
        "start": 20,
        "end": 36
      },
      "start": 0,
      "end": 36
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 47,
              "end": 48
            },
            "init": null,
            "definite": false,
            "start": 47,
            "end": 48
          }
        ],
        "declare": false,
        "start": 43,
        "end": 48
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 50,
        "end": 55
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 64,
                "end": 65
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 68,
                "end": 69
              },
              "start": 64,
              "end": 69
            },
            "directive": null,
            "start": 64,
            "end": 70
          }
        ],
        "start": 58,
        "end": 72
      },
      "start": 38,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
