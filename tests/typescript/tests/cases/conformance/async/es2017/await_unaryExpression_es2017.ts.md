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
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 34,
                  "end": 36
                },
                "start": 28,
                "end": 36
              },
              "prefix": true,
              "start": 27,
              "end": 36
            },
            "directive": null,
            "start": 27,
            "end": 37
          }
        ],
        "start": 21,
        "end": 45
      },
      "expression": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 82,
                  "end": 84
                },
                "start": 76,
                "end": 84
              },
              "prefix": true,
              "start": 75,
              "end": 84
            },
            "directive": null,
            "start": 75,
            "end": 85
          }
        ],
        "start": 69,
        "end": 93
      },
      "expression": false,
      "start": 47,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar3",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 130,
                  "end": 132
                },
                "start": 124,
                "end": 132
              },
              "prefix": true,
              "start": 123,
              "end": 132
            },
            "directive": null,
            "start": 123,
            "end": 133
          }
        ],
        "start": 117,
        "end": 141
      },
      "expression": false,
      "start": 95,
      "end": 141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar4",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 178,
                  "end": 180
                },
                "start": 172,
                "end": 180
              },
              "prefix": true,
              "start": 171,
              "end": 180
            },
            "directive": null,
            "start": 171,
            "end": 181
          }
        ],
        "start": 165,
        "end": 189
      },
      "expression": false,
      "start": 143,
      "end": 189
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
