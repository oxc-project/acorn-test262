__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 262,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
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
        "end": 99,
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
            "end": 97,
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
      "start": 100,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 136,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 135,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 135,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 132,
                "end": 135
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 152,
            "decorators": [],
            "name": "openClosed1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 155,
            "end": 179,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 155,
              "end": 160,
              "name": {
                "type": "JSXIdentifier",
                "start": 156,
                "end": 159,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 160,
                "end": 165,
                "value": "\n\n   ",
                "raw": "\n\n   "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 165,
                "end": 171,
                "expression": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 170,
                  "decorators": [],
                  "name": "blah",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "JSXText",
                "start": 171,
                "end": 173,
                "value": "\n\n",
                "raw": "\n\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 173,
              "end": 179,
              "name": {
                "type": "JSXIdentifier",
                "start": 175,
                "end": 178,
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
      "start": 227,
      "end": 262,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 238,
            "decorators": [],
            "name": "spread1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 241,
            "end": 261,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 241,
              "end": 261,
              "name": {
                "type": "JSXIdentifier",
                "start": 242,
                "end": 245,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 246,
                  "end": 252,
                  "argument": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 253,
                  "end": 258,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 253,
                    "end": 254,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 255,
                    "end": 258,
                    "expression": {
                      "type": "Literal",
                      "start": 256,
                      "end": 257,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
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
