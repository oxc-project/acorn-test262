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
  "end": 242,
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
            "name": "cx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 123,
            "name": "buttonProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 133,
            "end": 240,
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
                    "name": "buttonProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
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
                            "name": "cx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 203,
                                    "end": 209,
                                    "name": "class2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 211,
                                    "end": 215,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ],
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 222,
                "end": 231,
                "value": "\n        ",
                "raw": "\n        "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
