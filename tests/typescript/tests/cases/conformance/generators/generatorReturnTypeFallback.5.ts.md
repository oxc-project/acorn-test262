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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 161
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 162,
                "end": 168
              }
            ],
            "start": 161,
            "end": 169
          },
          "start": 145,
          "end": 169
        },
        "start": 143,
        "end": 169
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 182,
                "end": 183
              },
              "start": 176,
              "end": 183
            },
            "directive": null,
            "start": 176,
            "end": 184
          }
        ],
        "start": 170,
        "end": 186
      },
      "expression": false,
      "start": 130,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 130,
  "end": 186
}
```
