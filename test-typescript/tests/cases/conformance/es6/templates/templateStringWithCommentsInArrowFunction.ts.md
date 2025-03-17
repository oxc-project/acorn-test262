__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 52,
            "end": 92,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "TemplateLiteral",
              "start": 62,
              "end": 92,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 62,
                  "end": 65,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 89,
                  "end": 92,
                  "value": {
                    "cooked": "a",
                    "raw": "a"
                  },
                  "tail": true
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 103,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 145,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "TemplateLiteral",
              "start": 116,
              "end": 145,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 116,
                  "end": 119,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 143,
                  "end": 145,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
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
