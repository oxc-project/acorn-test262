__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 68,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 68,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 68,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 23,
              "end": 66,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 40,
                "decorators": [],
                "name": "baz",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 66,
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 66,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 53,
                      "end": 60,
                      "argument": null
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
