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
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 64,
        "end": 69,
        "operator": "*",
        "left": {
          "type": "Literal",
          "start": 64,
          "end": 65,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "Literal",
          "start": 68,
          "end": 69,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 117,
        "end": 128,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 118,
          "end": 123,
          "operator": "*",
          "left": {
            "type": "Literal",
            "start": 118,
            "end": 119,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 127,
          "end": 128,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 266,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 266,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 257,
        "decorators": [],
        "name": "makeSureTypedefsAreStillRecognized",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
