__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 92,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 22,
                "name": "hdr",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 14,
                  "end": 22,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 16,
                    "end": 22
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSAsExpression",
              "start": 40,
              "end": 92,
              "expression": {
                "type": "TemplateLiteral",
                "start": 40,
                "end": 61,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
                    "name": "hdr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 40,
                    "end": 43,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 46,
                    "end": 52,
                    "value": {
                      "cooked": ":\t",
                      "raw": ":\\t"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 55,
                    "end": 61,
                    "value": {
                      "cooked": "\r\n",
                      "raw": "\\r\\n"
                    },
                    "tail": true
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 65,
                "end": 92,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 65,
                    "end": 68,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 74,
                    "end": 80,
                    "value": {
                      "cooked": ":\t",
                      "raw": ":\\t"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 86,
                    "end": 92,
                    "value": {
                      "cooked": "\r\n",
                      "raw": "\\r\\n"
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                ]
              }
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
      "type": "ExpressionStatement",
      "start": 95,
      "end": 106,
      "expression": {
        "type": "MemberExpression",
        "start": 95,
        "end": 105,
        "object": {
          "type": "CallExpression",
          "start": 95,
          "end": 101,
          "callee": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 97,
              "end": 100,
              "value": "x",
              "raw": "\"x\""
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
