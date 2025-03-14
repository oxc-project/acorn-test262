templateStringInPropertyAssignment.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 9,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 15,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TemplateLiteral",
                  "start": 18,
                  "end": 45,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 25,
                      "end": 28,
                      "raw": "123",
                      "value": 123
                    },
                    {
                      "type": "Literal",
                      "start": 36,
                      "end": 39,
                      "raw": "456",
                      "value": 456
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 18,
                      "end": 24,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 29,
                      "end": 35,
                      "tail": false,
                      "value": {
                        "cooked": "def",
                        "raw": "def"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 40,
                      "end": 45,
                      "tail": true,
                      "value": {
                        "cooked": "ghi",
                        "raw": "ghi"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
