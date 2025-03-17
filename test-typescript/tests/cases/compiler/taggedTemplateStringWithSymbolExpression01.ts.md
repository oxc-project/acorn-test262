__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 157,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 50,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 84,
          "name": "template",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 84,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 86,
          "end": 97,
          "name": "val",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 91,
              "end": 97
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 106,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 100,
          "end": 106
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 116,
                "end": 122
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": true
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 143,
            "name": "result",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 137,
                "end": 143
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 146,
            "end": 155,
            "tag": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 149,
              "end": 155,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 149,
                  "end": 152,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 153,
                  "end": 155,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
