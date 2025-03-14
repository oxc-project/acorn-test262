__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 40,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 40,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 29,
                    "end": 38,
                    "argument": {
                      "type": "Literal",
                      "start": 36,
                      "end": 37,
                      "raw": "1",
                      "value": 1
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "abstract",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 57,
      "expression": {
        "type": "NewExpression",
        "start": 44,
        "end": 56,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "decorators": [],
          "name": "abstract",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
