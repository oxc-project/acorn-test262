__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 25,
            "callee": {
              "type": "MemberExpression",
              "start": 12,
              "end": 22,
              "object": {
                "type": "Literal",
                "start": 12,
                "end": 14,
                "value": 2,
                "raw": "2."
              },
              "property": {
                "type": "Identifier",
                "start": 15,
                "end": 22,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 37,
        "end": 167,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 47,
              "end": 55,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 47,
                  "end": 50,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 53,
                  "end": 55,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 74,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 65,
              "end": 74,
              "left": {
                "type": "Literal",
                "start": 65,
                "end": 68,
                "value": "2",
                "raw": "\"2\""
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 80,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 85,
              "end": 93,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 85,
                  "end": 88,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 91,
                  "end": 93,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 101,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 114,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 118,
              "end": 125,
              "left": {
                "type": "Literal",
                "start": 118,
                "end": 119,
                "value": 2,
                "raw": "2"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 132,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 143,
            "end": 154,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 147,
              "end": 154,
              "left": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 160,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
