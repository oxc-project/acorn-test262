jsxNestedWithinTernaryParsesCorrectly.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 18,
            "decorators": [],
            "name": "emptyMessage",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 21,
            "end": 32,
            "expression": {
              "type": "Literal",
              "start": 21,
              "end": 25,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 50,
            "end": 242,
            "children": [
              {
                "type": "JSXText",
                "start": 55,
                "end": 62,
                "raw": "\n      ",
                "value": "\n      "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 62,
                "end": 231,
                "expression": {
                  "type": "ConditionalExpression",
                  "start": 63,
                  "end": 230,
                  "alternate": {
                    "type": "JSXElement",
                    "start": 183,
                    "end": 222,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 189,
                        "end": 200,
                        "raw": "\n          ",
                        "value": "\n          "
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "start": 200,
                        "end": 203,
                        "expression": {
                          "type": "Literal",
                          "start": 201,
                          "end": 202,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "start": 203,
                        "end": 206,
                        "expression": {
                          "type": "Literal",
                          "start": 204,
                          "end": 205,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "JSXText",
                        "start": 206,
                        "end": 215,
                        "raw": "\n        ",
                        "value": "\n        "
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 215,
                      "end": 222,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 217,
                        "end": 221,
                        "name": "span"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 183,
                      "end": 189,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 184,
                        "end": 188,
                        "name": "span"
                      },
                      "selfClosing": false
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 89,
                    "decorators": [],
                    "name": "emptyMessage",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 63,
                    "end": 64,
                    "raw": "0",
                    "value": 0
                  }
                }
              },
              {
                "type": "JSXText",
                "start": 231,
                "end": 236,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 236,
              "end": 242,
              "name": {
                "type": "JSXIdentifier",
                "start": 238,
                "end": 241,
                "name": "div"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 50,
              "end": 55,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 51,
                "end": 54,
                "name": "div"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
