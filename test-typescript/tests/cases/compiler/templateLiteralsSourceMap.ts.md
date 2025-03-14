templateLiteralsSourceMap.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 10,
            "end": 27,
            "expressions": [
              {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 19,
                "end": 20,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 10,
                "end": 14,
                "tail": false,
                "value": {
                  "cooked": "a",
                  "raw": "a"
                }
              },
              {
                "type": "TemplateElement",
                "start": 15,
                "end": 19,
                "tail": false,
                "value": {
                  "cooked": "b",
                  "raw": "b"
                }
              },
              {
                "type": "TemplateElement",
                "start": 20,
                "end": 24,
                "tail": false,
                "value": {
                  "cooked": "c",
                  "raw": "c"
                }
              },
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 27,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
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
