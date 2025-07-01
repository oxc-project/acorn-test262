__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 53
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 62
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 66,
                            "end": 74
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 76,
                              "end": 82
                            },
                            "start": 74,
                            "end": 82
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 66,
                          "end": 82
                        }
                      ],
                      "start": 64,
                      "end": 84
                    },
                    "start": 62,
                    "end": 84
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 60,
                  "end": 84
                }
              ],
              "start": 54,
              "end": 88
            },
            "declare": false,
            "start": 26,
            "end": 88
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            },
            "declare": false,
            "start": 92,
            "end": 114
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementChildrenAttribute",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 152
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "offspring",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 170,
                      "end": 173
                    },
                    "start": 168,
                    "end": 173
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 159,
                  "end": 174
                }
              ],
              "start": 153,
              "end": 178
            },
            "declare": false,
            "start": 118,
            "end": 178
          }
        ],
        "start": 22,
        "end": 180
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 181
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Title",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 24,
                          "end": 32
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 34,
                            "end": 40
                          },
                          "start": 32,
                          "end": 40
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 24,
                        "end": 40
                      }
                    ],
                    "start": 22,
                    "end": 42
                  },
                  "start": 20,
                  "end": 42
                },
                "start": 15,
                "end": 42
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 48,
                  "end": 50
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 47,
                "end": 51
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 57
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 66
                    },
                    "optional": false,
                    "computed": false,
                    "start": 52,
                    "end": 66
                  },
                  "start": 51,
                  "end": 67
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 69,
                  "end": 71
                },
                "start": 67,
                "end": 72
              },
              "start": 47,
              "end": 72
            },
            "id": null,
            "generator": false,
            "start": 14,
            "end": 72
          },
          "definite": false,
          "start": 6,
          "end": 72
        }
      ],
      "declare": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Title",
            "start": 76,
            "end": 81
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 75,
          "end": 82
        },
        "children": [
          {
            "type": "JSXText",
            "value": "Hello, world!",
            "raw": "Hello, world!",
            "start": 82,
            "end": 95
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Title",
            "start": 97,
            "end": 102
          },
          "start": 95,
          "end": 103
        },
        "start": 75,
        "end": 103
      },
      "directive": null,
      "start": 75,
      "end": 104
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrong",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 117
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "offspring",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 139
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 141,
                            "end": 147
                          },
                          "start": 139,
                          "end": 147
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 130,
                        "end": 147
                      }
                    ],
                    "start": 128,
                    "end": 149
                  },
                  "start": 126,
                  "end": 149
                },
                "start": 121,
                "end": 149
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 155,
                  "end": 157
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 154,
                "end": 158
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 164
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "offspring",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 174
                    },
                    "optional": false,
                    "computed": false,
                    "start": 159,
                    "end": 174
                  },
                  "start": 158,
                  "end": 175
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 177,
                  "end": 179
                },
                "start": 175,
                "end": 180
              },
              "start": 154,
              "end": 180
            },
            "id": null,
            "generator": false,
            "start": 120,
            "end": 180
          },
          "definite": false,
          "start": 112,
          "end": 180
        }
      ],
      "declare": false,
      "start": 106,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Wrong",
            "start": 184,
            "end": 189
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 183,
          "end": 190
        },
        "children": [
          {
            "type": "JSXText",
            "value": "Byebye, world!",
            "raw": "Byebye, world!",
            "start": 190,
            "end": 204
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Wrong",
            "start": 206,
            "end": 211
          },
          "start": 204,
          "end": 212
        },
        "start": 183,
        "end": 212
      },
      "directive": null,
      "start": 183,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 213
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10
}
```
