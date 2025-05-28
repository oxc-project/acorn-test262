__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 32,
          "decorators": [],
          "name": "someFunc",
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
          "start": 35,
          "end": 59,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 41,
              "end": 57,
              "argument": {
                "type": "Literal",
                "start": 48,
                "end": 56,
                "value": "hello!",
                "raw": "'hello!'"
              }
            }
          ]
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 85,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 61,
          "end": 78,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 69,
            "decorators": [],
            "name": "someFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "decorators": [],
            "name": "someProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 81,
          "end": 85,
          "value": "yo",
          "raw": "'yo'"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
