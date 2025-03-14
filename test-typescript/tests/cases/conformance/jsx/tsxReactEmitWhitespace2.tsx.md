__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 287,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
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
            "end": 97,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                }
              ]
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
      "type": "VariableDeclaration",
      "start": 100,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 199,
      "expression": {
        "type": "JSXElement",
        "start": 160,
        "end": 198,
        "children": [
          {
            "type": "JSXText",
            "start": 165,
            "end": 170,
            "raw": "word ",
            "value": "word "
          },
          {
            "type": "JSXElement",
            "start": 170,
            "end": 187,
            "children": [
              {
                "type": "JSXText",
                "start": 176,
                "end": 180,
                "raw": "code",
                "value": "code"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 180,
              "end": 187,
              "name": {
                "type": "JSXIdentifier",
                "start": 182,
                "end": 186,
                "name": "code"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 170,
              "end": 176,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 171,
                "end": 175,
                "name": "code"
              },
              "selfClosing": false
            }
          },
          {
            "type": "JSXText",
            "start": 187,
            "end": 192,
            "raw": " word",
            "value": " word"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 192,
          "end": 198,
          "name": {
            "type": "JSXIdentifier",
            "start": 194,
            "end": 197,
            "name": "div"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 160,
          "end": 165,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 161,
            "end": 164,
            "name": "div"
          },
          "selfClosing": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 247,
      "expression": {
        "type": "JSXElement",
        "start": 213,
        "end": 246,
        "children": [
          {
            "type": "JSXElement",
            "start": 218,
            "end": 235,
            "children": [
              {
                "type": "JSXText",
                "start": 224,
                "end": 228,
                "raw": "code",
                "value": "code"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 228,
              "end": 235,
              "name": {
                "type": "JSXIdentifier",
                "start": 230,
                "end": 234,
                "name": "code"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 218,
              "end": 224,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 219,
                "end": 223,
                "name": "code"
              },
              "selfClosing": false
            }
          },
          {
            "type": "JSXText",
            "start": 235,
            "end": 240,
            "raw": " word",
            "value": " word"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 240,
          "end": 246,
          "name": {
            "type": "JSXIdentifier",
            "start": 242,
            "end": 245,
            "name": "div"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 213,
          "end": 218,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 214,
            "end": 217,
            "name": "div"
          },
          "selfClosing": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 285,
      "expression": {
        "type": "JSXElement",
        "start": 260,
        "end": 284,
        "children": [
          {
            "type": "JSXElement",
            "start": 265,
            "end": 273,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 265,
              "end": 273,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 266,
                "end": 270,
                "name": "code"
              },
              "selfClosing": true
            }
          },
          {
            "type": "JSXText",
            "start": 273,
            "end": 278,
            "raw": " word",
            "value": " word"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 278,
          "end": 284,
          "name": {
            "type": "JSXIdentifier",
            "start": 280,
            "end": 283,
            "name": "div"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 260,
          "end": 265,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 261,
            "end": 264,
            "name": "div"
          },
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
