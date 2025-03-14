__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 30,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 27,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 27,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 27,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 41,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 40,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 36,
            "end": 39,
            "elements": [
              {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
