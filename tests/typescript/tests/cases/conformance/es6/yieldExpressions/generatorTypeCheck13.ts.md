__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
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
        "start": 13,
        "end": 47,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 47,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null
          },
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
          }
        }
      },
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
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 60,
                "end": 61,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 67,
            "end": 77,
            "argument": {
              "type": "Literal",
              "start": 74,
              "end": 76,
              "value": "",
              "raw": "\"\""
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
