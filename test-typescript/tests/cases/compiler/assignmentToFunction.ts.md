__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 18,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 18,
          "end": 20,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 23,
          "end": 30,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 29,
            "end": 30,
            "raw": "3",
            "value": 3
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 129,
      "body": {
        "type": "TSModuleBlock",
        "start": 44,
        "end": 129,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 50,
            "end": 127,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 127,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 75,
                  "end": 101,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 90,
                    "end": 101,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "params": []
                },
                {
                  "type": "ExpressionStatement",
                  "start": 110,
                  "end": 121,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 110,
                    "end": 120,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 113,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 116,
                      "end": 120,
                      "raw": "null",
                      "value": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "xyz",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
