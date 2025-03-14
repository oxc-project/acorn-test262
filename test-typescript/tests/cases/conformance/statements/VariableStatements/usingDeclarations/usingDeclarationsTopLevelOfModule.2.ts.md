__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 33,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 13,
                  "end": 27,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 19,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 27,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 28,
                  "end": 33,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 31,
                    "end": 33,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 52,
        "end": 69,
        "arguments": [
          {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 52,
          "end": 63,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 82,
      "expression": {
        "type": "Literal",
        "start": 80,
        "end": 81,
        "raw": "4",
        "value": 4
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
