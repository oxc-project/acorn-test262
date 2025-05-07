__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 18,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 117,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 57,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 42,
              "end": 56,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 42,
                "end": 51,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 54,
                "end": 56,
                "raw": "10",
                "value": 10,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
