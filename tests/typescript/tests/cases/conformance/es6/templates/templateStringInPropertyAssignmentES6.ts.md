__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 15
                },
                "value": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 17,
                      "end": 23
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "def",
                        "cooked": "def"
                      },
                      "tail": false,
                      "start": 28,
                      "end": 34
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "ghi",
                        "cooked": "ghi"
                      },
                      "tail": true,
                      "start": 39,
                      "end": 44
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 24,
                      "end": 27
                    },
                    {
                      "type": "Literal",
                      "value": 456,
                      "raw": "456",
                      "start": 35,
                      "end": 38
                    }
                  ],
                  "start": 17,
                  "end": 44
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 44
              }
            ],
            "start": 8,
            "end": 46
          },
          "definite": false,
          "start": 4,
          "end": 46
        }
      ],
      "declare": false,
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
