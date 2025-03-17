__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 161,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 40,
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
        "start": 43,
        "end": 67,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 65,
            "expression": {
              "type": "UnaryExpression",
              "start": 49,
              "end": 64,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "AwaitExpression",
                "start": 56,
                "end": 64,
                "argument": {
                  "type": "Literal",
                  "start": 62,
                  "end": 64,
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
      "start": 69,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
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
        "start": 91,
        "end": 115,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 97,
            "end": 113,
            "expression": {
              "type": "UnaryExpression",
              "start": 97,
              "end": 112,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "AwaitExpression",
                "start": 104,
                "end": 112,
                "argument": {
                  "type": "Literal",
                  "start": 110,
                  "end": 112,
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
      "start": 117,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
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
        "start": 139,
        "end": 161,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 145,
            "end": 159,
            "expression": {
              "type": "UnaryExpression",
              "start": 145,
              "end": 158,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "AwaitExpression",
                "start": 150,
                "end": 158,
                "argument": {
                  "type": "Literal",
                  "start": 156,
                  "end": 158,
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
