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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 15,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 34,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 18,
            "end": 33,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 18,
              "end": 24,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 25,
              "end": 33,
              "decorators": [],
              "name": "iterator",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 37,
          "end": 50,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 48,
            "end": 50,
            "body": []
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
