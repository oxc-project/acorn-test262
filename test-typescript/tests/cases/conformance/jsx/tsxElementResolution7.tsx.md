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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 78,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 76,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 80,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "name": "my",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 116,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 103,
              "end": 116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 107,
                  "end": 115,
                  "id": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 115,
                    "name": "div",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 112,
                        "end": 115
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 142,
      "expression": {
        "type": "JSXElement",
        "start": 125,
        "end": 141,
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
                "value": "x",
                "raw": "'x'"
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
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 165,
      "expression": {
        "type": "JSXElement",
        "start": 152,
        "end": 164,
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
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 167,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "mine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 196,
              "end": 198,
              "name": "my",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 233,
            "expression": {
              "type": "JSXElement",
              "start": 214,
              "end": 232,
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
                      "value": "x",
                      "raw": "'x'"
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
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 251,
            "end": 264,
            "expression": {
              "type": "JSXElement",
              "start": 251,
              "end": 263,
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
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
