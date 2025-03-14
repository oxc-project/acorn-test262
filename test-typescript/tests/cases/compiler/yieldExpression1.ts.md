yieldExpression1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "async": false,
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
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 31,
            "end": 39,
            "expression": {
              "type": "YieldExpression",
              "start": 31,
              "end": 38,
              "argument": {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "raw": "0",
                "value": 0
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 110,
      "async": false,
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
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 100,
            "end": 108,
            "expression": {
              "type": "YieldExpression",
              "start": 100,
              "end": 107,
              "argument": {
                "type": "Literal",
                "start": 106,
                "end": 107,
                "raw": "0",
                "value": 0
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 56,
        "end": 82,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 58,
          "end": 82,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 58,
            "end": 74,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
