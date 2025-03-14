preact.tsx
```json
{
  "type": "Program",
  "start": 74,
  "end": 149,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "JSXFragment",
            "start": 84,
            "end": 137,
            "children": [
              {
                "type": "JSXText",
                "start": 86,
                "end": 89,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 89,
                "end": 96,
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 92,
                  "end": 96,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 94,
                    "end": 95,
                    "name": "p"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 89,
                  "end": 92,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 90,
                    "end": 91,
                    "name": "p"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 96,
                "end": 106,
                "raw": "\n  text\n  ",
                "value": "\n  text\n  "
              },
              {
                "type": "JSXElement",
                "start": 106,
                "end": 133,
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 127,
                  "end": 133,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 129,
                    "end": 132,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 106,
                  "end": 127,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 111,
                      "end": 126,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 111,
                        "end": 120,
                        "name": "className"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 121,
                        "end": 126,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 107,
                    "end": 110,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 133,
                "end": 134,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 134,
              "end": 137
            },
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 84,
              "end": 86
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 139,
      "end": 149,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
react.tsx
```json
{
  "type": "Program",
  "start": 73,
  "end": 167,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 73,
      "end": 91,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 90,
        "raw": "\"./preact\"",
        "value": "./preact"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "JSXFragment",
            "start": 102,
            "end": 155,
            "children": [
              {
                "type": "JSXText",
                "start": 104,
                "end": 107,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 107,
                "end": 114,
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 110,
                  "end": 114,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 112,
                    "end": 113,
                    "name": "p"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 107,
                  "end": 110,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 108,
                    "end": 109,
                    "name": "p"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 114,
                "end": 124,
                "raw": "\n  text\n  ",
                "value": "\n  text\n  "
              },
              {
                "type": "JSXElement",
                "start": 124,
                "end": 151,
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 145,
                  "end": 151,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 147,
                    "end": 150,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 124,
                  "end": 145,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 129,
                      "end": 144,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 129,
                        "end": 138,
                        "name": "className"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 139,
                        "end": 144,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 125,
                    "end": 128,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 151,
                "end": 152,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 152,
              "end": 155
            },
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 102,
              "end": 104
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 167,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
