__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "classnames",
        "raw": "\"classnames\"",
        "start": 15,
        "end": 27
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cx",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 55
          },
          "start": 48,
          "end": 55
        }
      ],
      "source": {
        "type": "Literal",
        "value": "classnames",
        "raw": "'classnames'",
        "start": 61,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 74
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 92
          },
          "start": 82,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 98,
        "end": 105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 75,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "attributeName",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 143,
                            "end": 149
                          },
                          "start": 141,
                          "end": 149
                        },
                        "start": 128,
                        "end": 149
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 152,
                          "end": 154
                        },
                        "start": 152,
                        "end": 154
                      },
                      "start": 150,
                      "end": 154
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 127,
                    "end": 154
                  }
                ],
                "start": 126,
                "end": 155
              },
              "start": 124,
              "end": 155
            },
            "start": 112,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 155
        }
      ],
      "declare": false,
      "start": 108,
      "end": 155
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 165,
                "end": 171
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 187
                  },
                  "start": 172,
                  "end": 188
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 189,
                    "end": 198
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 202
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "class1",
                          "raw": "'class1'",
                          "start": 203,
                          "end": 211
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "class2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 215,
                                "end": 221
                              },
                              "value": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 223,
                                "end": 227
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 215,
                              "end": 227
                            }
                          ],
                          "start": 213,
                          "end": 229
                        }
                      ],
                      "optional": false,
                      "start": 200,
                      "end": 230
                    },
                    "start": 199,
                    "end": 231
                  },
                  "start": 189,
                  "end": 231
                }
              ],
              "selfClosing": true,
              "start": 164,
              "end": 234
            },
            "children": [],
            "closingElement": null,
            "start": 164,
            "end": 234
          },
          "definite": false,
          "start": 160,
          "end": 234
        }
      ],
      "declare": false,
      "start": 156,
      "end": 235
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 235
}
```
