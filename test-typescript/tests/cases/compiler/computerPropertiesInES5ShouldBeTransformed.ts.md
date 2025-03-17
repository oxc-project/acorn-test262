__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 43,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 11,
                "end": 31,
                "properties": [
                  {
                    "type": "Property",
                    "start": 13,
                    "end": 29,
                    "method": false,
                    "shorthand": false,
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
                          "value": {
                            "cooked": "key",
                            "raw": "key"
                          },
                          "tail": true
                        }
                      ]
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "name": "renamed",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "name": "renamed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
