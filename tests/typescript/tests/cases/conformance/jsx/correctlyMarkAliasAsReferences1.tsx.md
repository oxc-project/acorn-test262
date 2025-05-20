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
  "end": 248,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 74,
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
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 75,
      "end": 106,
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
      ],
      "phase": null,
      "attributes": []
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
      "start": 132,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 140,
            "end": 247,
            "children": [
              {
                "type": "JSXText",
                "start": 165,
                "end": 178,
                "raw": "\n            ",
                "value": "\n            "
              },
              {
                "type": "JSXElement",
                "start": 178,
                "end": 229,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 178,
                  "end": 229,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 184,
                      "end": 226,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 184,
                        "end": 193,
                        "name": "className"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 194,
                        "end": 226,
                        "expression": {
                          "type": "CallExpression",
                          "start": 195,
                          "end": 225,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 198,
                              "end": 206,
                              "raw": "'class1'",
                              "value": "class1"
                            },
                            {
                              "type": "ObjectExpression",
                              "start": 208,
                              "end": 224,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 210,
                                  "end": 222,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 210,
                                    "end": 216,
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
                                    "start": 218,
                                    "end": 222,
                                    "raw": "true",
                                    "value": true
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 197,
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
                    "start": 179,
                    "end": 183,
                    "name": "span"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 229,
                "end": 238,
                "raw": "\n        ",
                "value": "\n        "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 238,
              "end": 247,
              "name": {
                "type": "JSXIdentifier",
                "start": 240,
                "end": 246,
                "name": "button"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 140,
              "end": 165,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 148,
                  "end": 164,
                  "argument": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 163,
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 141,
                "end": 147,
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
