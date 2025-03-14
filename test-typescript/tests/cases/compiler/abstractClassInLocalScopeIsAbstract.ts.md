__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 88,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1,
          "end": 85,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 7,
            "end": 85,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 13,
                "end": 32,
                "abstract": true,
                "body": {
                  "type": "ClassBody",
                  "start": 30,
                  "end": 32,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              },
              {
                "type": "ClassDeclaration",
                "start": 37,
                "end": 57,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 55,
                  "end": 57,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 62,
                "end": 70,
                "expression": {
                  "type": "NewExpression",
                  "start": 62,
                  "end": 69,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 75,
                "end": 83,
                "expression": {
                  "type": "NewExpression",
                  "start": 75,
                  "end": 82,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
