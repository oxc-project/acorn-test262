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
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "value": "hello",
              "raw": "\"hello\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "value": "hello world",
              "raw": "\"hello world\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "left": {
                "type": "Literal",
                "start": 332,
                "end": 333,
                "value": 5,
                "raw": "5"
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 337,
                "end": 344,
                "value": "hello",
                "raw": "\"hello\""
              }
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
