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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
        "name": "foo",
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 42,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 36,
          "end": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
