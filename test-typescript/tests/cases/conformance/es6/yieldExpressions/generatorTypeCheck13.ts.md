generatorTypeCheck13.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 54,
            "end": 62,
            "expression": {
              "type": "YieldExpression",
              "start": 54,
              "end": 61,
              "argument": {
                "type": "Literal",
                "start": 60,
                "end": 61,
                "raw": "0",
                "value": 0
              },
              "delegate": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 67,
            "end": 77,
            "argument": {
              "type": "Literal",
              "start": 74,
              "end": 76,
              "raw": "\"\"",
              "value": ""
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
        "name": "g",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 47,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 47,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 47,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
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
