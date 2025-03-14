bigint64ArraySubarray.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 49,
                  "end": 70,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 69,
                      "raw": "10",
                      "value": 10
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 66,
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 91,
            "expression": {
              "type": "CallExpression",
              "start": 76,
              "end": 90,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 88,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 79,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 88,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 112,
            "expression": {
              "type": "CallExpression",
              "start": 96,
              "end": 111,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 96,
                "end": 108,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 108,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 137,
            "expression": {
              "type": "CallExpression",
              "start": 117,
              "end": 136,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 130,
                  "end": 131,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Literal",
                  "start": 133,
                  "end": 135,
                  "raw": "10",
                  "value": 10
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 117,
                "end": 129,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 120,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 129,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 30,
        "decorators": [],
        "name": "bigInt64ArraySubarray",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
