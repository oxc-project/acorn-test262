__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "key",
                            "cooked": "key"
                          },
                          "tail": true,
                          "start": 14,
                          "end": 19
                        }
                      ],
                      "expressions": [],
                      "start": 14,
                      "end": 19
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "renamed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 22,
                      "end": 29
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 13,
                    "end": 29
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 11,
                "end": 31
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "renamed",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 43
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 43
          },
          "definite": false,
          "start": 6,
          "end": 43
        }
      ],
      "declare": false,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
