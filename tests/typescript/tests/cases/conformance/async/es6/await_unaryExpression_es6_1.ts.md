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
              "operator": "delete",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 88,
                  "end": 90
                },
                "start": 82,
                "end": 90
              },
              "prefix": true,
              "start": 75,
              "end": 90
            },
            "directive": null,
            "start": 75,
            "end": 91
          }
        ],
        "start": 69,
        "end": 99
      },
      "expression": false,
      "start": 47,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 120
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
              "operator": "delete",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 142,
                  "end": 144
                },
                "start": 136,
                "end": 144
              },
              "prefix": true,
              "start": 129,
              "end": 144
            },
            "directive": null,
            "start": 129,
            "end": 145
          }
        ],
        "start": 123,
        "end": 153
      },
      "expression": false,
      "start": 101,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar3",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 174
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
              "operator": "void",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 194,
                  "end": 196
                },
                "start": 188,
                "end": 196
              },
              "prefix": true,
              "start": 183,
              "end": 196
            },
            "directive": null,
            "start": 183,
            "end": 197
          }
        ],
        "start": 177,
        "end": 199
      },
      "expression": false,
      "start": 155,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar4",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 220
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
                  "start": 236,
                  "end": 238
                },
                "start": 230,
                "end": 238
              },
              "prefix": true,
              "start": 229,
              "end": 238
            },
            "directive": null,
            "start": 229,
            "end": 239
          }
        ],
        "start": 223,
        "end": 241
      },
      "expression": false,
      "start": 201,
      "end": 241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 241
}
```
