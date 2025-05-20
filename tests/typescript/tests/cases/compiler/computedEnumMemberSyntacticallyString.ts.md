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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 12,
              "end": 22,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 12,
                "end": 14,
                "raw": "2.",
                "value": 2
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 15,
                "end": 22,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 167,
      "body": {
        "type": "TSEnumBody",
        "start": 37,
        "end": 167,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 55,
            "computed": false,
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
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 47,
                  "end": 50,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 53,
                  "end": 55,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 74,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 65,
                "end": 68,
                "raw": "\"2\"",
                "value": "2"
              },
              "right": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 80,
            "end": 94,
            "computed": false,
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
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 85,
                  "end": 88,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 91,
                  "end": 93,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "TSEnumMember",
            "start": 101,
            "end": 108,
            "computed": false,
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
            }
          },
          {
            "type": "TSEnumMember",
            "start": 114,
            "end": 125,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 118,
                "end": 119,
                "raw": "2",
                "value": 2
              },
              "right": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 132,
            "end": 137,
            "computed": false,
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
            }
          },
          {
            "type": "TSEnumMember",
            "start": 143,
            "end": 154,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 160,
            "end": 165,
            "computed": false,
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
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
