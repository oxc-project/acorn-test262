__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 156,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 50,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 84,
          "decorators": [],
          "name": "template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 84,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          }
        },
        {
          "type": "Identifier",
          "start": 86,
          "end": 97,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 91,
              "end": 97
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 106,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 100,
          "end": 106
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 123,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 116,
                "end": 122
              }
            }
          },
          "init": null,
          "definite": true
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 156,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 143,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 137,
                "end": 143
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 146,
            "end": 155,
            "tag": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 149,
              "end": 155,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 149,
                  "end": 152,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 153,
                  "end": 155,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
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
