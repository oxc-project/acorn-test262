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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "value": "classnames",
        "raw": "\"classnames\""
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      ],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 73,
        "value": "classnames",
        "raw": "'classnames'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 75,
      "end": 106,
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
      ],
      "source": {
        "type": "Literal",
        "start": 98,
        "end": 105,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 124,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 123,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 241,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 240,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 133,
              "end": 158,
              "name": {
                "type": "JSXIdentifier",
                "start": 134,
                "end": 140,
                "name": "button"
              },
              "typeArguments": null,
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 158,
                "end": 171,
                "value": "\n            ",
                "raw": "\n            "
              },
              {
                "type": "JSXElement",
                "start": 171,
                "end": 222,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 171,
                  "end": 222,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 172,
                    "end": 176,
                    "name": "span"
                  },
                  "typeArguments": null,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 190,
                            "decorators": [],
                            "name": "cx",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 191,
                              "end": 199,
                              "value": "class1",
                              "raw": "'class1'"
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 203,
                                    "end": 209,
                                    "decorators": [],
                                    "name": "class2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 211,
                                    "end": 215,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false
                        }
                      }
                    }
                  ],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 222,
                "end": 231,
                "value": "\n        ",
                "raw": "\n        "
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
