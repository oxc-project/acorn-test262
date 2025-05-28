__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 46,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 44,
            "expression": {
              "type": "UnaryExpression",
              "start": 28,
              "end": 43,
              "operator": "delete",
              "argument": {
                "type": "AwaitExpression",
                "start": 35,
                "end": 43,
                "argument": {
                  "type": "Literal",
                  "start": 41,
                  "end": 43,
                  "value": 42,
                  "raw": "42"
                }
              },
              "prefix": true
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 94,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 92,
            "expression": {
              "type": "UnaryExpression",
              "start": 76,
              "end": 91,
              "operator": "delete",
              "argument": {
                "type": "AwaitExpression",
                "start": 83,
                "end": 91,
                "argument": {
                  "type": "Literal",
                  "start": 89,
                  "end": 91,
                  "value": 42,
                  "raw": "42"
                }
              },
              "prefix": true
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 115,
        "decorators": [],
        "name": "bar3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 140,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 124,
            "end": 138,
            "expression": {
              "type": "UnaryExpression",
              "start": 124,
              "end": 137,
              "operator": "void",
              "argument": {
                "type": "AwaitExpression",
                "start": 129,
                "end": 137,
                "argument": {
                  "type": "Literal",
                  "start": 135,
                  "end": 137,
                  "value": 42,
                  "raw": "42"
                }
              },
              "prefix": true
            },
            "directive": null
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
