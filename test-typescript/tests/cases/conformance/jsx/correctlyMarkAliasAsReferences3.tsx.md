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
        "value": "classnames",
        "regex": null,
        "bigint": null
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
  "end": 241,
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
        "value": "classnames",
        "regex": null,
        "bigint": null
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
        "value": "react",
        "regex": null,
        "bigint": null
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
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 123,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 133,
            "end": 240,
            "children": [
              {
                "type": "JSXText",
                "start": 158,
                "end": 171,
                "raw": "\n            ",
                "value": "\n            "
              },
              {
                "type": "JSXElement",
                "start": 171,
                "end": 222,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 171,
                  "end": 222,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 177,
                      "end": 219,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 177,
                        "end": 186,
                        "name": "className"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 187,
                        "end": 219,
                        "expression": {
                          "type": "CallExpression",
                          "start": 188,
                          "end": 218,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 191,
                              "end": 199,
                              "raw": "'class1'",
                              "value": "class1",
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "ObjectExpression",
                              "start": 201,
                              "end": 217,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 203,
                                  "end": 215,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 203,
                                    "end": 209,
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
                                    "start": 211,
                                    "end": 215,
                                    "raw": "true",
                                    "value": true,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 190,
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
                    "start": 172,
                    "end": 176,
                    "name": "span"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 222,
                "end": 231,
                "raw": "\n        ",
                "value": "\n        "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 231,
              "end": 240,
              "name": {
                "type": "JSXIdentifier",
                "start": 233,
                "end": 239,
                "name": "button"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 133,
              "end": 158,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 141,
                  "end": 157,
                  "argument": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 156,
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 134,
                "end": 140,
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
