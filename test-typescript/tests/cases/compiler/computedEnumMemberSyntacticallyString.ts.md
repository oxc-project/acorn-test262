__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "BAR",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 43,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "TemplateLiteral",
            "start": 47,
            "end": 55,
            "expressions": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "name": "BAR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "BAR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "TemplateLiteral",
            "start": 85,
            "end": 93,
            "expressions": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "name": "BAR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "name": "BAR",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "BAR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "H",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 147,
            "end": 154,
            "left": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "name": "H",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "name": "BAR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "J",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "H",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 47,
              "end": 55,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "name": "BAR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "BAR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 85,
              "end": 93,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "name": "BAR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
              "name": "BAR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "G",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "BAR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "H",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 147,
              "end": 154,
              "left": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "name": "H",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "name": "BAR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "J",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "H",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
