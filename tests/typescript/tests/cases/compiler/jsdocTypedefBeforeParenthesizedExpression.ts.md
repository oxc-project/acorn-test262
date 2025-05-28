__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 266,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 71,
      "expression": {
        "type": "BinaryExpression",
        "start": 64,
        "end": 69,
        "left": {
          "type": "Literal",
          "start": 64,
          "end": 65,
          "value": 2,
          "raw": "2"
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "start": 68,
          "end": 69,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 129,
      "expression": {
        "type": "BinaryExpression",
        "start": 117,
        "end": 128,
        "left": {
          "type": "BinaryExpression",
          "start": 118,
          "end": 123,
          "left": {
            "type": "Literal",
            "start": 118,
            "end": 119,
            "value": 2,
            "raw": "2"
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "value": 2,
            "raw": "2"
          }
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 127,
          "end": 128,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 257,
        "decorators": [],
        "name": "makeSureTypedefsAreStillRecognized",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 258,
          "end": 259,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 266,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
