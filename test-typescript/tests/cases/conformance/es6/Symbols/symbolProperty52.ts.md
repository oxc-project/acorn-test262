symbolProperty52.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 36,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 32,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "decorators": [],
                    "name": "nonsense",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "raw": "0",
                  "value": 0
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
      "type": "ExpressionStatement",
      "start": 41,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 44,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 47,
          "end": 49,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 73,
      "expression": {
        "type": "MemberExpression",
        "start": 52,
        "end": 72,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 56,
          "end": 71,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 71,
            "decorators": [],
            "name": "nonsense",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
