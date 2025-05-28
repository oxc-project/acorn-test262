__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 15,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 34,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 18,
            "end": 33,
            "object": {
              "type": "Identifier",
              "start": 18,
              "end": 24,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 25,
              "end": 33,
              "decorators": [],
              "name": "iterator",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "FunctionExpression",
          "start": 37,
          "end": 50,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 48,
            "end": 50,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
