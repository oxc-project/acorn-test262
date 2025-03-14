__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 78,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 76,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 76,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 80,
      "end": 118,
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 116,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 103,
              "end": 116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 107,
                  "end": 115,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 115,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 112,
                        "end": 115
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "decorators": [],
        "name": "my",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 142,
      "expression": {
        "type": "JSXElement",
        "start": 125,
        "end": 141,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 125,
          "end": 141,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 133,
              "end": 138,
              "name": {
                "type": "JSXIdentifier",
                "start": 133,
                "end": 134,
                "name": "n"
              },
              "value": {
                "type": "Literal",
                "start": 135,
                "end": 138,
                "raw": "'x'",
                "value": "x"
              }
            }
          ],
          "name": {
            "type": "JSXMemberExpression",
            "start": 126,
            "end": 132,
            "object": {
              "type": "JSXIdentifier",
              "start": 126,
              "end": 128,
              "name": "my"
            },
            "property": {
              "type": "JSXIdentifier",
              "start": 129,
              "end": 132,
              "name": "div"
            }
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 165,
      "expression": {
        "type": "JSXElement",
        "start": 152,
        "end": 164,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 152,
          "end": 164,
          "attributes": [],
          "name": {
            "type": "JSXMemberExpression",
            "start": 153,
            "end": 161,
            "object": {
              "type": "JSXIdentifier",
              "start": 153,
              "end": 155,
              "name": "my"
            },
            "property": {
              "type": "JSXIdentifier",
              "start": 156,
              "end": 161,
              "name": "other"
            }
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 167,
      "end": 266,
      "body": {
        "type": "TSModuleBlock",
        "start": 176,
        "end": 266,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 182,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 193,
              "decorators": [],
              "name": "mine",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 196,
              "end": 198,
              "decorators": [],
              "name": "my",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 233,
            "expression": {
              "type": "JSXElement",
              "start": 214,
              "end": 232,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 214,
                "end": 232,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 224,
                    "end": 229,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 224,
                      "end": 225,
                      "name": "n"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 226,
                      "end": 229,
                      "raw": "'x'",
                      "value": "x"
                    }
                  }
                ],
                "name": {
                  "type": "JSXMemberExpression",
                  "start": 215,
                  "end": 223,
                  "object": {
                    "type": "JSXIdentifier",
                    "start": 215,
                    "end": 219,
                    "name": "mine"
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "start": 220,
                    "end": 223,
                    "name": "div"
                  }
                },
                "selfClosing": true
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 251,
            "end": 264,
            "expression": {
              "type": "JSXElement",
              "start": 251,
              "end": 263,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 251,
                "end": 263,
                "attributes": [],
                "name": {
                  "type": "JSXMemberExpression",
                  "start": 252,
                  "end": 260,
                  "object": {
                    "type": "JSXIdentifier",
                    "start": 252,
                    "end": 256,
                    "name": "mine"
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "start": 257,
                    "end": 260,
                    "name": "non"
                  }
                },
                "selfClosing": true
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "q",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
