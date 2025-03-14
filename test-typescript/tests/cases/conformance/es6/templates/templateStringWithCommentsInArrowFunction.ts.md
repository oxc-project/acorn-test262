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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 52,
            "end": 92,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 62,
              "end": 92,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 62,
                  "end": 65,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 89,
                  "end": 92,
                  "tail": true,
                  "value": {
                    "cooked": "a",
                    "raw": "a"
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 103,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 145,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 116,
              "end": 145,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 116,
                  "end": 119,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 143,
                  "end": 145,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
