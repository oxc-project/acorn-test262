__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 90
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 106,
              "end": 113
            },
            "start": 99,
            "end": 114
          }
        ],
        "start": 93,
        "end": 116
      },
      "expression": false,
      "start": 80,
      "end": 116
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 197
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello world",
              "raw": "\"hello world\"",
              "start": 213,
              "end": 226
            },
            "start": 206,
            "end": 227
          }
        ],
        "start": 200,
        "end": 229
      },
      "expression": false,
      "start": 186,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 316
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 332,
                "end": 333
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 337,
                "end": 344
              },
              "start": 332,
              "end": 344
            },
            "start": 325,
            "end": 345
          }
        ],
        "start": 319,
        "end": 347
      },
      "expression": false,
      "start": 305,
      "end": 347
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 347
}
```
