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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 116,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 54,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 84,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 62,
                    "name": "h1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 74,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 74,
                            "end": 82,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 76,
                              "end": 82
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 92,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "Title",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 14,
            "end": 72,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 42,
                "name": "props",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 32,
                          "name": "children",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 32,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 34,
                            "end": 40
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 47,
              "end": 72,
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
              },
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
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 51,
                  "end": 67,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 52,
                    "end": 66,
                    "object": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 57,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 66,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 91,
            "end": 119,
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
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 98,
                "end": 111,
                "value": "Hello, world!",
                "raw": "Hello, world!"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
