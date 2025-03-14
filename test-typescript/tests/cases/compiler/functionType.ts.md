__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 18,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "salt",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 43,
      "expression": {
        "type": "CallExpression",
        "start": 19,
        "end": 42,
        "arguments": [
          {
            "type": "Literal",
            "start": 30,
            "end": 37,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "ArrayExpression",
            "start": 39,
            "end": 41,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 19,
          "end": 29,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 23,
            "decorators": [],
            "name": "salt",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 24,
            "end": 29,
            "decorators": [],
            "name": "apply",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 73,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 72,
        "arguments": [],
        "callee": {
          "type": "NewExpression",
          "start": 45,
          "end": 69,
          "arguments": [
            {
              "type": "Literal",
              "start": 58,
              "end": 68,
              "raw": "\"return 5\"",
              "value": "return 5"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "Function",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
