__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 89,
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
        "end": 89,
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
            "end": 87,
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
              "end": 87,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 75,
                  "end": 79,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 78,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 80,
                  "end": 85,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 84,
                    "decorators": [],
                    "name": "span",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
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
      "type": "VariableDeclaration",
      "start": 91,
      "end": 146,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 99,
            "end": 145,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 99,
              "end": 104,
              "name": {
                "type": "JSXIdentifier",
                "start": 100,
                "end": 103,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 104,
                "end": 139,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 104,
                  "end": 109,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 105,
                    "end": 108,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "start": 109,
                    "end": 133,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 109,
                      "end": 115,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 110,
                        "end": 114,
                        "name": "span"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false
                    },
                    "children": [
                      {
                        "type": "JSXElement",
                        "start": 115,
                        "end": 126,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 115,
                          "end": 120,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 116,
                            "end": 119,
                            "name": "div"
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false
                        },
                        "children": [],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 120,
                          "end": 126,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 122,
                            "end": 125,
                            "name": "div"
                          }
                        }
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 126,
                      "end": 133,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 128,
                        "end": 132,
                        "name": "span"
                      }
                    }
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 133,
                  "end": 139,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 135,
                    "end": 138,
                    "name": "div"
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 139,
              "end": 145,
              "name": {
                "type": "JSXIdentifier",
                "start": 141,
                "end": 144,
                "name": "div"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
