a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 50,
      "expression": {
        "type": "CallExpression",
        "start": 23,
        "end": 49,
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "start": 23,
          "end": 47,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 34,
            "end": 47,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 36,
                "end": 45,
                "argument": {
                  "type": "Literal",
                  "start": 43,
                  "end": 44,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
