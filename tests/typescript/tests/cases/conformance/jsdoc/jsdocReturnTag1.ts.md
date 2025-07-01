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
        "start": 76,
        "end": 77
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
              "value": 5,
              "raw": "5",
              "start": 93,
              "end": 94
            },
            "start": 86,
            "end": 95
          }
        ],
        "start": 80,
        "end": 97
      },
      "expression": false,
      "start": 67,
      "end": 97
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 178
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
              "value": 5,
              "raw": "5",
              "start": 194,
              "end": 195
            },
            "start": 187,
            "end": 196
          }
        ],
        "start": 181,
        "end": 198
      },
      "expression": false,
      "start": 167,
      "end": 198
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 285
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
                "start": 301,
                "end": 302
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 306,
                "end": 313
              },
              "start": 301,
              "end": 313
            },
            "start": 294,
            "end": 314
          }
        ],
        "start": 288,
        "end": 316
      },
      "expression": false,
      "start": 274,
      "end": 316
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 316
}
```
