__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 52,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
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
              "start": 26,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 52,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 39,
                    "end": 46,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 39,
                      "end": 46,
                      "argument": {
                        "type": "Literal",
                        "start": 45,
                        "end": 46,
                        "raw": "1",
                        "value": 1
                      },
                      "delegate": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
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
