__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "start": 19,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 19,
          "end": 28
        }
      ],
      "declare": false,
      "start": 15,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              },
              "start": 35,
              "end": 40
            },
            "start": 34,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 40
        }
      ],
      "declare": false,
      "start": 30,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 61,
                  "end": 62
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 56,
                "end": 62
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 70
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 68,
                "end": 74
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 86
                  },
                  "start": 81,
                  "end": 86
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 89,
                  "end": 90
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 80,
                "end": 90
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 98
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 102
                  },
                  "start": 97,
                  "end": 102
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 105,
                  "end": 106
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 96,
                "end": 106
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "prefix": true,
                  "start": 113,
                  "end": 115
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 112,
                "end": 119
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 126,
                  "end": 128
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 131,
                  "end": 132
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 125,
                "end": 132
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 139,
                  "end": 140
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 143,
                  "end": 144
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 138,
                "end": 144
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 155,
                  "end": 156
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 150,
                "end": 156
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 164,
                    "end": 167
                  },
                  "expression": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 168,
                    "end": 172
                  },
                  "start": 163,
                  "end": 172
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 175,
                  "end": 176
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 162,
                "end": 176
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "hello bye",
                        "cooked": "hello bye"
                      },
                      "tail": true,
                      "start": 183,
                      "end": 194
                    }
                  ],
                  "expressions": [],
                  "start": 183,
                  "end": 194
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 197,
                  "end": 198
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 182,
                "end": 198
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "hello ",
                        "cooked": "hello "
                      },
                      "tail": false,
                      "start": 205,
                      "end": 214
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " bye",
                        "cooked": " bye"
                      },
                      "tail": true,
                      "start": 215,
                      "end": 221
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    }
                  ],
                  "start": 205,
                  "end": 221
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 224,
                  "end": 225
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 204,
                "end": 225
              }
            ],
            "start": 50,
            "end": 227
          },
          "definite": false,
          "start": 46,
          "end": 227
        }
      ],
      "declare": false,
      "start": 42,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 227
}
```
