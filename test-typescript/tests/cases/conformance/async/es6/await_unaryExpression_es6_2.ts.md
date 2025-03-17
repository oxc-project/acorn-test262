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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "name": "bar1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "AwaitExpression",
                "start": 53,
                "end": 61,
                "argument": {
                  "type": "Literal",
                  "start": 59,
                  "end": 61,
                  "value": 42,
                  "raw": "42"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 66,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "name": "bar2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "AwaitExpression",
                "start": 101,
                "end": 109,
                "argument": {
                  "type": "Literal",
                  "start": 107,
                  "end": 109,
                  "value": 42,
                  "raw": "42"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 133,
        "name": "bar3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "AwaitExpression",
                "start": 147,
                "end": 155,
                "argument": {
                  "type": "Literal",
                  "start": 153,
                  "end": 155,
                  "value": 42,
                  "raw": "42"
                }
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
