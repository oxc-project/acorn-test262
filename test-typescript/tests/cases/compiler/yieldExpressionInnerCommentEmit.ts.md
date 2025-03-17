__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 15,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 45,
            "expression": {
              "type": "YieldExpression",
              "start": 37,
              "end": 44,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 43,
                "end": 44,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 71,
            "expression": {
              "type": "YieldExpression",
              "start": 50,
              "end": 70,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 69,
                "end": 70,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 83,
            "expression": {
              "type": "YieldExpression",
              "start": 76,
              "end": 83,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 82,
                "end": 83,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 101,
            "end": 125,
            "expression": {
              "type": "YieldExpression",
              "start": 101,
              "end": 124,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 121,
                "end": 124,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 122,
                    "end": 123,
                    "value": 4,
                    "raw": "4"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 130,
            "end": 154,
            "expression": {
              "type": "YieldExpression",
              "start": 130,
              "end": 153,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 150,
                "end": 153,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 151,
                    "end": 152,
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
