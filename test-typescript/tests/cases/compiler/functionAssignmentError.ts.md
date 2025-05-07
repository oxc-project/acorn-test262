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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 37,
            "async": false,
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
                    "raw": "\"ONE\"",
                    "value": "ONE",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 39,
          "end": 43,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 46,
          "end": 72,
          "async": false,
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
                  "raw": "\"ONE\"",
                  "value": "ONE",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
