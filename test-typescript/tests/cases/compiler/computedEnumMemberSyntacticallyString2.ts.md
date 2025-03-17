__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "BAR",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "BAR",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "value": "./bar",
        "raw": "'./bar'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "name": "LOCAL",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 50,
            "value": "LOCAL",
            "raw": "'LOCAL'"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 53,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 66,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "TemplateLiteral",
            "start": 70,
            "end": 78,
            "expressions": [
              {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "name": "BAR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 70,
                "end": 73,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 76,
                "end": 78,
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
          "start": 83,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 87,
            "end": 92,
            "name": "LOCAL",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 96,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 105,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 109,
            "end": 118,
            "left": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 113,
              "end": 118,
              "value": "BAR",
              "raw": "'BAR'"
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 123,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "name": "E1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "TSAsExpression",
            "start": 128,
            "end": 148,
            "expression": {
              "type": "TemplateLiteral",
              "start": 129,
              "end": 137,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "name": "BAR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 129,
                  "end": 132,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 135,
                  "end": 137,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 142,
              "end": 148
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 181,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 183,
            "name": "E2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "TSNonNullExpression",
            "start": 186,
            "end": 195,
            "expression": {
              "type": "TemplateLiteral",
              "start": 186,
              "end": 194,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "name": "BAR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 186,
                  "end": 189,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 192,
                  "end": 194,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 233,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 237,
            "end": 240,
            "name": "BAR",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 244,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "name": "G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 248,
            "end": 255,
            "left": {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "value": 2,
              "raw": "2"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 252,
              "end": 255,
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
          "start": 260,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "name": "H",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 269,
          "end": 280,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 270,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 273,
            "end": 280,
            "left": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "name": "H",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
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
          "start": 284,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "name": "J",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 288,
            "end": 289,
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
        "start": 62,
        "end": 291,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 78,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 70,
              "end": 78,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 76,
                  "name": "BAR",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 70,
                  "end": 73,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 76,
                  "end": 78,
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
            "start": 83,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 87,
              "end": 92,
              "name": "LOCAL",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 105,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 118,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 113,
                "end": 118,
                "value": "BAR",
                "raw": "'BAR'"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 123,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "E1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "TSAsExpression",
              "start": 128,
              "end": 148,
              "expression": {
                "type": "TemplateLiteral",
                "start": 129,
                "end": 137,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "name": "BAR",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 129,
                    "end": 132,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 135,
                    "end": 137,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 181,
            "end": 195,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 183,
              "name": "E2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "TSNonNullExpression",
              "start": 186,
              "end": 195,
              "expression": {
                "type": "TemplateLiteral",
                "start": 186,
                "end": 194,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 189,
                    "end": 192,
                    "name": "BAR",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 186,
                    "end": 189,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 192,
                    "end": 194,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ]
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 233,
            "end": 240,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "name": "BAR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 244,
            "end": 255,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "G",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 248,
              "end": 255,
              "left": {
                "type": "Literal",
                "start": 248,
                "end": 249,
                "value": 2,
                "raw": "2"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 252,
                "end": 255,
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
            "start": 260,
            "end": 265,
            "id": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "H",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 269,
            "end": 280,
            "id": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 280,
              "left": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "name": "H",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 277,
                "end": 280,
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
            "start": 284,
            "end": 289,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "J",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "BAR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 24,
              "value": "bar",
              "raw": "'bar'"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
