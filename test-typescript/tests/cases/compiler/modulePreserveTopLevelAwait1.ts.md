modulePreserveTopLevelAwait1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 28,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 28,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 11,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 17,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 22,
        "end": 24,
        "elements": []
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 53,
      "expression": {
        "type": "AwaitExpression",
        "start": 29,
        "end": 52,
        "argument": {
          "type": "CallExpression",
          "start": 35,
          "end": 52,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 35,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "Promise",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 50,
              "decorators": [],
              "name": "resolve",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 65,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
