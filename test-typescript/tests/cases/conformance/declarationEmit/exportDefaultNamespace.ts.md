__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
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
          "name": "someFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
            "name": "someFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "name": "someProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
