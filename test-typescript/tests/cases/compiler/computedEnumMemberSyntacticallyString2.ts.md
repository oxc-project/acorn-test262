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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "'./bar'",
        "value": "./bar",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "decorators": [],
            "name": "LOCAL",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 50,
            "raw": "'LOCAL'",
            "value": "LOCAL",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 53,
      "end": 291,
      "body": {
        "type": "TSEnumBody",
        "start": 62,
        "end": 291,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 78,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 70,
                  "end": 73,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 76,
                  "end": 78,
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
            "start": 83,
            "end": 92,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 87,
              "end": 92,
              "decorators": [],
              "name": "LOCAL",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 101,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 105,
            "end": 118,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 118,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 113,
                "end": 118,
                "raw": "'BAR'",
                "value": "BAR",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 123,
            "end": 148,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "BAR",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 129,
                    "end": 132,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 135,
                    "end": 137,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 181,
            "end": 195,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 183,
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "BAR",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 186,
                    "end": 189,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 192,
                    "end": 194,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 233,
            "end": 240,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 244,
            "end": 255,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 248,
              "end": 255,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 248,
                "end": 249,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 252,
                "end": 255,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 260,
            "end": 265,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 269,
            "end": 280,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 280,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 277,
                "end": 280,
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 284,
            "end": 289,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
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
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 24,
              "raw": "'bar'",
              "value": "bar",
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
