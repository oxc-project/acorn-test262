__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 20,
      "expression": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 19,
        "left": {
          "type": "Literal",
          "start": 16,
          "end": 17,
          "value": 1,
          "raw": "1"
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 42,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 36,
          "end": 42
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 57,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 55,
            "argument": {
              "type": "Literal",
              "start": 52,
              "end": 55,
              "value": "a",
              "raw": "\"a\""
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
