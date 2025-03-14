__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 8,
            "end": 14,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 24,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 36,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "s",
                  "optional": false
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
              },
              {
                "type": "Property",
                "start": 42,
                "end": 51,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 45,
                  "end": 51,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 48,
                    "end": 51,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 57,
                "end": 92,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 64,
                  "end": 92,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 67,
                    "end": 92,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 77,
                        "end": 86,
                        "argument": {
                          "type": "Literal",
                          "start": 84,
                          "end": 85,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
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
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
