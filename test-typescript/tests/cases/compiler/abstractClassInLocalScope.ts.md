abstractClassInLocalScope.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 89,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1,
          "end": 86,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 7,
            "end": 86,
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
                    "name": "B",
                    "optional": false
                  }
                }
              },
              {
                "type": "ReturnStatement",
                "start": 75,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
  "sourceType": "script"
}
```
