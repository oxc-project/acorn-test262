/jsx.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 180,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 180,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 62,
                    "decorators": [],
                    "name": "h1",
                    "optional": false
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 74,
                            "decorators": [],
                            "name": "children",
                            "optional": false
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
              "optional": false
            }
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
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 118,
            "end": 178,
            "body": {
              "type": "TSInterfaceBody",
              "start": 153,
              "end": 178,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 159,
                  "end": 174,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 168,
                    "decorators": [],
                    "name": "offspring",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 170,
                      "end": 173
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 152,
              "decorators": [],
              "name": "ElementChildrenAttribute",
              "optional": false
            }
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
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
/test.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
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
            "optional": false
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
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 66,
                      "decorators": [],
                      "name": "children",
                      "optional": false
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
                "selfClosing": false
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 32,
                          "decorators": [],
                          "name": "children",
                          "optional": false
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
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 104,
      "expression": {
        "type": "JSXElement",
        "start": 75,
        "end": 103,
        "children": [
          {
            "type": "JSXText",
            "start": 82,
            "end": 95,
            "raw": "Hello, world!",
            "value": "Hello, world!"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 95,
          "end": 103,
          "name": {
            "type": "JSXIdentifier",
            "start": 97,
            "end": 102,
            "name": "Title"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 75,
          "end": 82,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 76,
            "end": 81,
            "name": "Title"
          },
          "selfClosing": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 117,
            "decorators": [],
            "name": "Wrong",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 120,
            "end": 180,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 154,
              "end": 180,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 158,
                  "end": 175,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 159,
                    "end": 174,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 164,
                      "decorators": [],
                      "name": "props",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 174,
                      "decorators": [],
                      "name": "offspring",
                      "optional": false
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 175,
                "end": 180,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 177,
                  "end": 179,
                  "name": "h1"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 154,
                "end": 158,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 155,
                  "end": 157,
                  "name": "h1"
                },
                "selfClosing": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 149,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 149,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 128,
                    "end": 149,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 130,
                        "end": 147,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 139,
                          "decorators": [],
                          "name": "offspring",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 139,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 141,
                            "end": 147
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 212,
      "expression": {
        "type": "JSXElement",
        "start": 183,
        "end": 212,
        "children": [
          {
            "type": "JSXText",
            "start": 190,
            "end": 204,
            "raw": "Byebye, world!",
            "value": "Byebye, world!"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 204,
          "end": 212,
          "name": {
            "type": "JSXIdentifier",
            "start": 206,
            "end": 211,
            "name": "Wrong"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 183,
          "end": 190,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 184,
            "end": 189,
            "name": "Wrong"
          },
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
/jsx/jsx-runtime.ts
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
  "sourceType": "module"
}
```
/jsx/jsx-dev-runtime.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
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
  "sourceType": "module"
}
```
