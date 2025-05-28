__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 316,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 67,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
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
        "start": 80,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 86,
            "end": 95,
            "argument": {
              "type": "Literal",
              "start": 93,
              "end": 94,
              "value": 5,
              "raw": "5"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 178,
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
        "start": 181,
        "end": 198,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 187,
            "end": 196,
            "argument": {
              "type": "Literal",
              "start": 194,
              "end": 195,
              "value": 5,
              "raw": "5"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 274,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 285,
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
        "start": 288,
        "end": 316,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 294,
            "end": 314,
            "argument": {
              "type": "LogicalExpression",
              "start": 301,
              "end": 313,
              "left": {
                "type": "Literal",
                "start": 301,
                "end": 302,
                "value": 5,
                "raw": "5"
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 306,
                "end": 313,
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
