__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 347,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 116,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 116,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 99,
            "end": 114,
            "argument": {
              "type": "Literal",
              "start": 106,
              "end": 113,
              "raw": "\"hello\"",
              "value": "hello"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 229,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 200,
        "end": 229,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 206,
            "end": 227,
            "argument": {
              "type": "Literal",
              "start": 213,
              "end": 226,
              "raw": "\"hello world\"",
              "value": "hello world"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 347,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 319,
        "end": 347,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 325,
            "end": 345,
            "argument": {
              "type": "LogicalExpression",
              "start": 332,
              "end": 344,
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 332,
                "end": 333,
                "raw": "5",
                "value": 5
              },
              "right": {
                "type": "Literal",
                "start": 337,
                "end": 344,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
