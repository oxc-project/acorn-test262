__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./bar",
        "raw": "'./bar'",
        "start": 20,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "LOCAL",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 40
          },
          "init": {
            "type": "Literal",
            "value": "LOCAL",
            "raw": "'LOCAL'",
            "start": 43,
            "end": 50
          },
          "definite": false,
          "start": 35,
          "end": 50
        }
      ],
      "declare": false,
      "start": 29,
      "end": 51
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 61
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "initializer": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 70,
                  "end": 73
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 76,
                  "end": 78
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 76
                }
              ],
              "start": 70,
              "end": 78
            },
            "computed": false,
            "start": 66,
            "end": 78
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "LOCAL",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 92
            },
            "computed": false,
            "start": 83,
            "end": 92
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "computed": false,
            "start": 96,
            "end": 101
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "BAR",
                "raw": "'BAR'",
                "start": 113,
                "end": 118
              },
              "start": 109,
              "end": 118
            },
            "computed": false,
            "start": 105,
            "end": 118
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "initializer": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 129,
                    "end": 132
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 135,
                    "end": 137
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 135
                  }
                ],
                "start": 129,
                "end": 137
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              },
              "start": 128,
              "end": 148
            },
            "computed": false,
            "start": 123,
            "end": 148
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 183
            },
            "initializer": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 186,
                    "end": 189
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 192,
                    "end": 194
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 192
                  }
                ],
                "start": 186,
                "end": 194
              },
              "start": 186,
              "end": 195
            },
            "computed": false,
            "start": 181,
            "end": 195
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 240
            },
            "computed": false,
            "start": 233,
            "end": 240
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 248,
                "end": 249
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 255
              },
              "start": 248,
              "end": 255
            },
            "computed": false,
            "start": 244,
            "end": 255
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "computed": false,
            "start": 260,
            "end": 265
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 270
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 280
              },
              "start": 273,
              "end": 280
            },
            "computed": false,
            "start": 269,
            "end": 280
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "computed": false,
            "start": 284,
            "end": 289
          }
        ],
        "start": 62,
        "end": 291
      },
      "const": false,
      "declare": false,
      "start": 53,
      "end": 291
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 19,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
