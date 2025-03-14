m1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 31,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 28,
          "end": 31,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 43,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 40,
          "end": 41,
          "exported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
m2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 46,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 32,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 53,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 52,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 54,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
