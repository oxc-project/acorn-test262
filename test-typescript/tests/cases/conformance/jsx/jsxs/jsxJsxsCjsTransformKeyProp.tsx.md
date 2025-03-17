__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 181,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "name": "props",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "name": "answer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 68,
                  "end": 70,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 83,
            "end": 119,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 83,
              "end": 109,
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
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 84,
                "end": 87,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": [
              {
                "type": "JSXText",
                "start": 109,
                "end": 113,
                "value": "text",
                "raw": "text"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 131,
            "end": 167,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 131,
              "end": 157,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 136,
                  "end": 146,
                  "argument": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 145,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": {
                "type": "JSXIdentifier",
                "start": 132,
                "end": 135,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": [
              {
                "type": "JSXText",
                "start": 157,
                "end": 161,
                "value": "text",
                "raw": "text"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 180,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
