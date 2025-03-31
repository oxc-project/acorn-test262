__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 37,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 22,
              "end": 37,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 23,
                  "end": 36,
                  "argument": {
                    "type": "Literal",
                    "start": 30,
                    "end": 35,
                    "value": "ONE",
                    "raw": "\"ONE\""
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 73,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 39,
          "end": 43,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 46,
          "end": 72,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 57,
            "end": 72,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 58,
                "end": 71,
                "argument": {
                  "type": "Literal",
                  "start": 65,
                  "end": 70,
                  "value": "ONE",
                  "raw": "\"ONE\""
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
