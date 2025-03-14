sourceMapValidationDestructuringVariableStatementObjectBindingPattern4.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 64,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 26,
            "end": 43,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 27,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 27,
                  "end": 34,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 31,
                    "end": 34,
                    "raw": "500",
                    "value": 500
                  }
                }
              },
              {
                "type": "Property",
                "start": 41,
                "end": 42,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 64,
            "properties": [
              {
                "type": "Property",
                "start": 48,
                "end": 53,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 55,
                "end": 62,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
