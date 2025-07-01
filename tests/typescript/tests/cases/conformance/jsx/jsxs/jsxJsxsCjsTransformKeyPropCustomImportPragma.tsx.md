__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 85
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
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 96
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 98,
                  "end": 100
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 90,
                "end": 100
              }
            ],
            "start": 88,
            "end": 102
          },
          "definite": false,
          "start": 80,
          "end": 102
        }
      ],
      "declare": false,
      "start": 74,
      "end": 102
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 114,
                "end": 117
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 118,
                    "end": 121
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 122,
                    "end": 127
                  },
                  "start": 118,
                  "end": 127
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 137
                  },
                  "start": 128,
                  "end": 138
                }
              ],
              "selfClosing": false,
              "start": 113,
              "end": 139
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 139,
                "end": 143
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 145,
                "end": 148
              },
              "start": 143,
              "end": 149
            },
            "start": 113,
            "end": 149
          },
          "definite": false,
          "start": 109,
          "end": 149
        }
      ],
      "declare": false,
      "start": 103,
      "end": 150
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 162,
                "end": 165
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 175
                  },
                  "start": 166,
                  "end": 176
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 177,
                    "end": 180
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 181,
                    "end": 186
                  },
                  "start": 177,
                  "end": 186
                }
              ],
              "selfClosing": false,
              "start": 161,
              "end": 187
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 187,
                "end": 191
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 197
            },
            "start": 161,
            "end": 197
          },
          "definite": false,
          "start": 157,
          "end": 197
        }
      ],
      "declare": false,
      "start": 151,
      "end": 198
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 200,
      "end": 210
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 74,
  "end": 211
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./preact",
        "raw": "\"./preact\"",
        "start": 80,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 73,
      "end": 91
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
            "name": "props2",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 104
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
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 117,
                  "end": 119
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 109,
                "end": 119
              }
            ],
            "start": 107,
            "end": 121
          },
          "definite": false,
          "start": 98,
          "end": 121
        }
      ],
      "declare": false,
      "start": 92,
      "end": 121
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 134,
                "end": 137
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 138,
                    "end": 141
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 142,
                    "end": 147
                  },
                  "start": 138,
                  "end": 147
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 158
                  },
                  "start": 148,
                  "end": 159
                }
              ],
              "selfClosing": false,
              "start": 133,
              "end": 160
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 160,
                "end": 164
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 166,
                "end": 169
              },
              "start": 164,
              "end": 170
            },
            "start": 133,
            "end": 170
          },
          "definite": false,
          "start": 128,
          "end": 170
        }
      ],
      "declare": false,
      "start": 122,
      "end": 171
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 180
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 184,
                "end": 187
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 198
                  },
                  "start": 188,
                  "end": 199
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 200,
                    "end": 203
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 204,
                    "end": 209
                  },
                  "start": 200,
                  "end": 209
                }
              ],
              "selfClosing": false,
              "start": 183,
              "end": 210
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 210,
                "end": 214
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 216,
                "end": 219
              },
              "start": 214,
              "end": 220
            },
            "start": 183,
            "end": 220
          },
          "definite": false,
          "start": 178,
          "end": 220
        }
      ],
      "declare": false,
      "start": 172,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 233
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 73,
  "end": 233
}
```
