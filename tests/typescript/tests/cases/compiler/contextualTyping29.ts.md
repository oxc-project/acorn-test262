__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 27,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 27,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 27,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 30,
        "body": []
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 44,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 43,
        "callee": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 36,
            "end": 42,
            "elements": [
              {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
