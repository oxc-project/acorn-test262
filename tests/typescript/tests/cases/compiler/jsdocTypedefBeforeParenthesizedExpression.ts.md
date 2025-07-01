__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 64,
          "end": 65
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 68,
          "end": 69
        },
        "start": 64,
        "end": 69
      },
      "directive": null,
      "start": 63,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 118,
            "end": 119
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 122,
            "end": 123
          },
          "start": 118,
          "end": 123
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 127,
          "end": 128
        },
        "start": 117,
        "end": 128
      },
      "directive": null,
      "start": 117,
      "end": 129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeSureTypedefsAreStillRecognized",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 257
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 259
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 262
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 264,
        "end": 266
      },
      "expression": false,
      "start": 214,
      "end": 266
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 63,
  "end": 266
}
```
