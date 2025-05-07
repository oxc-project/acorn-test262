__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 21,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 24,
            "end": 64,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 34,
              "end": 64,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 37,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 61,
                  "end": 64,
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
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 75,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 78,
            "end": 117,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 88,
              "end": 117,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 88,
                  "end": 91,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 115,
                  "end": 117,
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
            "params": [],
            "returnType": null,
            "typeParameters": null
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
