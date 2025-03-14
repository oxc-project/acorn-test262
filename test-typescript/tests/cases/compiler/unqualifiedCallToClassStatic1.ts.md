unqualifiedCallToClassStatic1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 102,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 29,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 102,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 99,
                    "expression": {
                      "type": "CallExpression",
                      "start": 93,
                      "end": 98,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 96,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              },
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
        "end": 12,
        "decorators": [],
        "name": "Vector",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
