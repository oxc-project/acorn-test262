__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "salt",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 18,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 43,
      "expression": {
        "type": "CallExpression",
        "start": 19,
        "end": 42,
        "callee": {
          "type": "MemberExpression",
          "start": 19,
          "end": 29,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 23,
            "decorators": [],
            "name": "salt",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 24,
            "end": 29,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 30,
            "end": 37,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "ArrayExpression",
            "start": 39,
            "end": 41,
            "elements": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 73,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 72,
        "callee": {
          "type": "NewExpression",
          "start": 45,
          "end": 69,
          "callee": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 58,
              "end": 68,
              "value": "return 5",
              "raw": "\"return 5\""
            }
          ]
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
