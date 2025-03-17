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
  "end": 235,
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
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 155,
            "name": "buttonProps",
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 128,
                        "end": 149,
                        "name": "attributeName",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 141,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 143,
                            "end": 149
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "value": "",
                          "raw": "''"
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
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
      "start": 156,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 164,
            "end": 234,
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
                    "name": "buttonProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "callee": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 202,
                        "name": "cx",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 203,
                          "end": 211,
                          "value": "class1",
                          "raw": "'class1'"
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 215,
                                "end": 221,
                                "name": "class2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 223,
                                "end": 227,
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
                "start": 165,
                "end": 171,
                "name": "button"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
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
