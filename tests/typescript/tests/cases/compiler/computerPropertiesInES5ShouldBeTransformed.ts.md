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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 43,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 11,
                "end": 31,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 13,
                    "end": 29,
                    "kind": "init",
                    "key": {
                      "type": "TemplateLiteral",
                      "start": 14,
                      "end": 19,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 14,
                          "end": 19,
                          "value": {
                            "raw": "key",
                            "cooked": "key"
                          },
                          "tail": true
                        }
                      ],
                      "expressions": []
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "renamed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "renamed",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
