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
        "name": "salt",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 16,
        "end": 18
      },
      "expression": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "salt",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 23
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 29
          },
          "optional": false,
          "computed": false,
          "start": 19,
          "end": 29
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 30,
            "end": 37
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 39,
            "end": 41
          }
        ],
        "optional": false,
        "start": 19,
        "end": 42
      },
      "directive": null,
      "start": 19,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "return 5",
              "raw": "\"return 5\"",
              "start": 58,
              "end": 68
            }
          ],
          "start": 45,
          "end": 69
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 44,
        "end": 72
      },
      "directive": null,
      "start": 44,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
