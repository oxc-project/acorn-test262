__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 22,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 22,
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
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 18,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 15,
              "end": 18
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 45,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 44,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 28,
            "end": 43,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 32,
              "end": 43,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 32,
                "end": 36
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 37,
                "end": 43,
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
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
