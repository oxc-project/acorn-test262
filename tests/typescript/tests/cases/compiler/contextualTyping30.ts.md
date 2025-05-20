__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 30,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 45,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 36,
            "end": 44,
            "elements": [
              {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 40,
                "end": 43,
                "raw": "\"a\"",
                "value": "a"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
