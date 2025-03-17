__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 130,
  "end": 186,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 170,
        "end": 186,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 176,
            "end": 184,
            "expression": {
              "type": "YieldExpression",
              "start": 176,
              "end": 183,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 143,
        "end": 169,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 169,
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 161,
            "name": "IterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 161,
            "end": 169,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 162,
                "end": 168
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
