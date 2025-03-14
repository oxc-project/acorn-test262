exp.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 14,
                  "end": 24,
                  "raw": "\"greeting\"",
                  "value": "greeting"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 40,
                  "raw": "\"hello, world\"",
                  "value": "hello, world"
                }
              },
              {
                "type": "Property",
                "start": 46,
                "end": 59,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 46,
                  "end": 55,
                  "raw": "\"default\"",
                  "value": "default"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 57,
                  "end": 59,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 64,
      "end": 74,
      "expression": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
imp.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 23,
        "raw": "\"./exp\"",
        "value": "./exp"
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
      "type": "ExpressionStatement",
      "start": 25,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 45,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 42,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 42,
            "decorators": [],
            "name": "toExponential",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
