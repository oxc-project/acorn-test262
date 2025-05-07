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
  "end": 235,
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
                          "value": "",
                          "regex": null,
                          "bigint": null
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
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 234,
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
            "end": 234,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 164,
              "end": 234,
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
                },
                {
                  "type": "JSXAttribute",
                  "start": 189,
                  "end": 231,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 189,
                    "end": 198,
                    "name": "className"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 199,
                    "end": 231,
                    "expression": {
                      "type": "CallExpression",
                      "start": 200,
                      "end": 230,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 203,
                          "end": 211,
                          "raw": "'class1'",
                          "value": "class1",
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 213,
                          "end": 229,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 215,
                              "end": 227,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 215,
                                "end": 221,
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
                                "start": 223,
                                "end": 227,
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
                        "start": 200,
                        "end": 202,
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
                "start": 165,
                "end": 171,
                "name": "button"
              },
              "selfClosing": true,
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
