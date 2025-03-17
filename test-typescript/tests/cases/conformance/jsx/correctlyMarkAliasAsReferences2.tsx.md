__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 28,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "raw": "\"classnames\"",
        "value": "classnames"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 273,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 74,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 73,
        "raw": "'classnames'",
        "value": "classnames"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 48,
          "end": 55,
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "decorators": [],
            "name": "cx",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 75,
      "end": 106,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 98,
        "end": 105,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 82,
          "end": 92,
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 92,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 155,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 126,
                "end": 155,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 127,
                    "end": 154,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 128,
                        "end": 149,
                        "decorators": [],
                        "name": "attributeName",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 141,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 143,
                            "end": 149
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 150,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 152,
                        "end": 154,
                        "literal": {
                          "type": "Literal",
                          "start": 152,
                          "end": 154,
                          "raw": "''",
                          "value": ""
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 164,
            "end": 271,
            "children": [
              {
                "type": "JSXText",
                "start": 189,
                "end": 202,
                "raw": "\n            ",
                "value": "\n            "
              },
              {
                "type": "JSXElement",
                "start": 202,
                "end": 253,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 202,
                  "end": 253,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 208,
                      "end": 250,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 208,
                        "end": 217,
                        "name": "className"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 218,
                        "end": 250,
                        "expression": {
                          "type": "CallExpression",
                          "start": 219,
                          "end": 249,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 222,
                              "end": 230,
                              "raw": "'class1'",
                              "value": "class1"
                            },
                            {
                              "type": "ObjectExpression",
                              "start": 232,
                              "end": 248,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 234,
                                  "end": 246,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 234,
                                    "end": 240,
                                    "decorators": [],
                                    "name": "class2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 242,
                                    "end": 246,
                                    "raw": "true",
                                    "value": true
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 221,
                            "decorators": [],
                            "name": "cx",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 203,
                    "end": 207,
                    "name": "span"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 253,
                "end": 262,
                "raw": "\n        ",
                "value": "\n        "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 262,
              "end": 271,
              "name": {
                "type": "JSXIdentifier",
                "start": 264,
                "end": 270,
                "name": "button"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 164,
              "end": 189,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 172,
                  "end": 188,
                  "argument": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 187,
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 165,
                "end": 171,
                "name": "button"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
