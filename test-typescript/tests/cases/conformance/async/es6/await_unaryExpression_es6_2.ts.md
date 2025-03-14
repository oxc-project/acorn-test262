__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 158,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 64,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 64,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 46,
            "end": 62,
            "expression": {
              "type": "UnaryExpression",
              "start": 46,
              "end": 61,
              "argument": {
                "type": "AwaitExpression",
                "start": 53,
                "end": 61,
                "argument": {
                  "type": "Literal",
                  "start": 59,
                  "end": 61,
                  "raw": "42",
                  "value": 42
                }
              },
              "operator": "delete",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "bar1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 66,
      "end": 112,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 112,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 94,
            "end": 110,
            "expression": {
              "type": "UnaryExpression",
              "start": 94,
              "end": 109,
              "argument": {
                "type": "AwaitExpression",
                "start": 101,
                "end": 109,
                "argument": {
                  "type": "Literal",
                  "start": 107,
                  "end": 109,
                  "raw": "42",
                  "value": 42
                }
              },
              "operator": "delete",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "decorators": [],
        "name": "bar2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 158,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 158,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 142,
            "end": 156,
            "expression": {
              "type": "UnaryExpression",
              "start": 142,
              "end": 155,
              "argument": {
                "type": "AwaitExpression",
                "start": 147,
                "end": 155,
                "argument": {
                  "type": "Literal",
                  "start": 153,
                  "end": 155,
                  "raw": "42",
                  "value": 42
                }
              },
              "operator": "void",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 133,
        "decorators": [],
        "name": "bar3",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
