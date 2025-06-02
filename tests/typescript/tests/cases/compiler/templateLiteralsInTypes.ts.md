__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 93,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 92,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 22,
                "decorators": [],
                "name": "hdr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 14,
                  "end": 22,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 16,
                    "end": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "start": 40,
              "end": 92,
              "expression": {
                "type": "TemplateLiteral",
                "start": 40,
                "end": 61,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 40,
                    "end": 43,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 46,
                    "end": 52,
                    "value": {
                      "raw": ":\\t",
                      "cooked": ":\t"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 55,
                    "end": 61,
                    "value": {
                      "raw": "\\r\\n",
                      "cooked": "\r\n"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
                    "decorators": [],
                    "name": "hdr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
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
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 74,
                    "end": 80,
                    "value": {
                      "raw": ":\\t",
                      "cooked": ":\t"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 86,
                    "end": 92,
                    "value": {
                      "raw": "\\r\\n",
                      "cooked": "\r\n"
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 97,
              "end": 100,
              "value": "x",
              "raw": "\"x\""
            }
          ],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
