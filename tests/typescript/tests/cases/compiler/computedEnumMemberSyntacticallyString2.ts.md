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
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 50,
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
            "value": "LOCAL",
            "raw": "'LOCAL'"
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 70,
              "end": 78,
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
              ],
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
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 118,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
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
                ],
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
                ],
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
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
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
            "start": 260,
            "end": 265,
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
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 280,
              "left": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 277,
                "end": 280,
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
            "start": 284,
            "end": 289,
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
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
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
              "value": "bar",
              "raw": "'bar'"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
