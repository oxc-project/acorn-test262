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
            "start": 50,
            "end": 55
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
                  "start": 60,
                  "end": 66
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 68,
                  "end": 70
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 70
              }
            ],
            "start": 58,
            "end": 72
          },
          "definite": false,
          "start": 50,
          "end": 72
        }
      ],
      "declare": false,
      "start": 44,
      "end": 72
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
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 84,
                "end": 87
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 88,
                    "end": 91
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 92,
                    "end": 97
                  },
                  "start": 88,
                  "end": 97
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 107
                  },
                  "start": 98,
                  "end": 108
                }
              ],
              "selfClosing": false,
              "start": 83,
              "end": 109
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 109,
                "end": 113
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 115,
                "end": 118
              },
              "start": 113,
              "end": 119
            },
            "start": 83,
            "end": 119
          },
          "definite": false,
          "start": 79,
          "end": 119
        }
      ],
      "declare": false,
      "start": 73,
      "end": 120
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
            "start": 127,
            "end": 128
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 132,
                "end": 135
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
                    "start": 140,
                    "end": 145
                  },
                  "start": 136,
                  "end": 146
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 147,
                    "end": 150
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 151,
                    "end": 156
                  },
                  "start": 147,
                  "end": 156
                }
              ],
              "selfClosing": false,
              "start": 131,
              "end": 157
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 157,
                "end": 161
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 163,
                "end": 166
              },
              "start": 161,
              "end": 167
            },
            "start": 131,
            "end": 167
          },
          "definite": false,
          "start": 127,
          "end": 167
        }
      ],
      "declare": false,
      "start": 121,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 170,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 180
}
```
