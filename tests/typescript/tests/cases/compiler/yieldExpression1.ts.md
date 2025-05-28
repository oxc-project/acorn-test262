__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 26,
            "expression": {
              "type": "YieldExpression",
              "start": 20,
              "end": 25,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 31,
            "end": 39,
            "expression": {
              "type": "YieldExpression",
              "start": 31,
              "end": 38,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 56,
        "end": 82,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 58,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 58,
            "end": 74,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 74,
            "end": 82,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 95,
            "expression": {
              "type": "YieldExpression",
              "start": 89,
              "end": 94,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 100,
            "end": 108,
            "expression": {
              "type": "YieldExpression",
              "start": 100,
              "end": 107,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 106,
                "end": 107,
                "value": 0,
                "raw": "0"
              }
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
