__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 116,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 88,
            "body": {
              "type": "TSInterfaceBody",
              "start": 54,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 84,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 62,
                    "decorators": [],
                    "name": "h1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 64,
                      "end": 84,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 66,
                          "end": 82,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 74,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 74,
                            "end": 82,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 76,
                              "end": 82
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 92,
            "end": 114,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "Title",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 14,
            "end": 72,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 47,
              "end": 72,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 51,
                  "end": 67,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 52,
                    "end": 66,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 57,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 66,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 67,
                "end": 72,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 69,
                  "end": 71,
                  "name": "h1"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 47,
                "end": 51,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 48,
                  "end": 50,
                  "name": "h1"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 42,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 22,
                    "end": 42,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 24,
                        "end": 40,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 32,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 32,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 34,
                            "end": 40
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 91,
            "end": 119,
            "children": [
              {
                "type": "JSXText",
                "start": 98,
                "end": 111,
                "raw": "Hello, world!",
                "value": "Hello, world!"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 111,
              "end": 119,
              "name": {
                "type": "JSXIdentifier",
                "start": 113,
                "end": 118,
                "name": "Title"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 91,
              "end": 98,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 92,
                "end": 97,
                "name": "Title"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
