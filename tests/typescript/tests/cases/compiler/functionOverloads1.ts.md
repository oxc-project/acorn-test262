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
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
      "end": 20,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 19,
        "operator": "+",
        "left": {
          "type": "Literal",
          "start": 16,
          "end": 17,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 57,
      "async": false,
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
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
