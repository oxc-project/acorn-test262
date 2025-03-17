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
  "end": 249,
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
      "start": 132,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 140,
            "end": 247,
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
                    "name": "buttonProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
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
                            "name": "cx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 210,
                                    "end": 216,
                                    "name": "class2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 218,
                                    "end": 222,
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
                    "start": 179,
                    "end": 183,
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
                "start": 229,
                "end": 238,
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
