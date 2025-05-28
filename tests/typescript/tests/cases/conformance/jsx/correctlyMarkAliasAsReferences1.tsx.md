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
  "end": 248,
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
      "start": 132,
      "end": 248,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 247,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 140,
              "end": 165,
              "name": {
                "type": "JSXIdentifier",
                "start": 141,
                "end": 147,
                "name": "button"
              },
              "typeArguments": null,
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 165,
                "end": 178,
                "value": "\n            ",
                "raw": "\n            "
              },
              {
                "type": "JSXElement",
                "start": 178,
                "end": 229,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 178,
                  "end": 229,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 179,
                    "end": 183,
                    "name": "span"
                  },
                  "typeArguments": null,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 197,
                            "decorators": [],
                            "name": "cx",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 198,
                              "end": 206,
                              "value": "class1",
                              "raw": "'class1'"
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 210,
                                    "end": 216,
                                    "decorators": [],
                                    "name": "class2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 218,
                                    "end": 222,
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
                "start": 229,
                "end": 238,
                "value": "\n        ",
                "raw": "\n        "
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
