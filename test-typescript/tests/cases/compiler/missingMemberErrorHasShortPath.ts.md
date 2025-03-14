C:/foo/bar/Baz/src/utils.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 26,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 24,
          "end": 26,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "exist",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
C:/foo/bar/Baz/src/sample.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 33,
        "raw": "\"./utils.js\"",
        "value": "./utils.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "exit",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "exit",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 42,
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 42,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 36,
          "end": 40,
          "decorators": [],
          "name": "exit",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
