computerPropertiesInES5ShouldBeTransformed.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 43,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "renamed",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 11,
                "end": 31,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 13,
                    "end": 29,
                    "computed": true,
                    "key": {
                      "type": "TemplateLiteral",
                      "start": 14,
                      "end": 19,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 14,
                          "end": 19,
                          "tail": true,
                          "value": {
                            "cooked": "key",
                            "raw": "key"
                          }
                        }
                      ]
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "renamed",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
