__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 180,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 72,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 58,
            "end": 72,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 70,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 68,
                  "end": 70,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 120,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 83,
            "end": 119,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 83,
              "end": 109,
              "name": {
                "type": "JSXIdentifier",
                "start": 84,
                "end": 87,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 88,
                  "end": 97,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 88,
                    "end": 91,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 92,
                    "end": 97,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 98,
                  "end": 108,
                  "argument": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 107,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 109,
                "end": 113,
                "value": "text",
                "raw": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 113,
              "end": 119,
              "name": {
                "type": "JSXIdentifier",
                "start": 115,
                "end": 118,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 168,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 131,
            "end": 167,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 131,
              "end": 157,
              "name": {
                "type": "JSXIdentifier",
                "start": 132,
                "end": 135,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 136,
                  "end": 146,
                  "argument": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 145,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 147,
                  "end": 156,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 147,
                    "end": 150,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 151,
                    "end": 156,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 157,
                "end": 161,
                "value": "text",
                "raw": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 161,
              "end": 167,
              "name": {
                "type": "JSXIdentifier",
                "start": 163,
                "end": 166,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 180,
      "declaration": null,
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
