__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 28,
              "decorators": [],
              "name": "defaults",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 31,
              "end": 60,
              "properties": [
                {
                  "type": "Property",
                  "start": 42,
                  "end": 53,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 46,
                    "decorators": [],
                    "name": "done",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 48,
                    "end": 53,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 102,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 102,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 86,
                    "end": 95,
                    "argument": {
                      "type": "Literal",
                      "start": 93,
                      "end": 94,
                      "raw": "3",
                      "value": 3
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
