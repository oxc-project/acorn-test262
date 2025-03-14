__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 40,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 38,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
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
              "start": 15,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 38,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 25,
                    "end": 34,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 25,
                      "end": 34,
                      "argument": {
                        "type": "Identifier",
                        "start": 31,
                        "end": 34,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "delegate": false
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
