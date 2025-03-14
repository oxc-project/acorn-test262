thisInArrowFunctionInStaticInitializer1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 19,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "log",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 128,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
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
              "start": 50,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 128,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 125,
                    "expression": {
                      "type": "CallExpression",
                      "start": 115,
                      "end": 124,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 119,
                          "end": 123
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 118,
                        "decorators": [],
                        "name": "log",
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
        "start": 27,
        "end": 33,
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
