__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
        "decorators": [],
        "name": "my",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 107,
                  "end": 115,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
          "typeArguments": null,
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
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
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
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
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
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "mine",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 196,
              "end": 198,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
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
                "typeArguments": null,
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
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
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
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
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
