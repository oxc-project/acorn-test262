jsxInExtendsClause.tsx
```json
{
  "type": "Program",
  "start": 56,
  "end": 424,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 170,
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 170,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 84,
            "end": 141,
            "body": {
              "type": "TSInterfaceBody",
              "start": 112,
              "end": 141,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 114,
                  "end": 139,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 138,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 131,
                        "end": 138,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 132,
                            "end": 133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 133,
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 135,
                            "end": 137,
                            "members": []
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 131,
                        "decorators": [],
                        "name": "Component",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 108,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 108,
              "end": 111,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 109,
                  "end": 110,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 144,
            "end": 168,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 166,
              "end": 168,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 159,
              "decorators": [],
              "name": "Component",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 159,
              "end": 165,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 160,
                  "end": 161,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 163,
                  "end": 164,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 79,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSDeclareFunction",
      "start": 171,
      "end": 277,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 208,
        "decorators": [],
        "name": "createComponentClass",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 212,
          "end": 250,
          "decorators": [],
          "name": "factory",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 250,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 221,
              "end": 250,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 224,
                "end": 250,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 227,
                  "end": 250,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 247,
                    "end": 250,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 248,
                        "end": 249,
                        "typeName": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 227,
                    "end": 247,
                    "left": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 232,
                      "decorators": [],
                      "name": "React",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 247,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 251,
        "end": 276,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 253,
          "end": 276,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 273,
            "end": 276,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 274,
                "end": 275,
                "typeName": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 253,
            "end": 273,
            "left": {
              "type": "Identifier",
              "start": 253,
              "end": 258,
              "decorators": [],
              "name": "React",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 273,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 278,
      "end": 424,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 422,
        "end": 424,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 287,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 296,
        "end": 421,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 317,
            "end": 420,
            "async": false,
            "body": {
              "type": "ClassExpression",
              "start": 323,
              "end": 420,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 361,
                "end": 420,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 365,
                    "end": 418,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 371,
                      "decorators": [],
                      "name": "render",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 371,
                      "end": 418,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 374,
                        "end": 418,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 380,
                            "end": 414,
                            "argument": {
                              "type": "JSXElement",
                              "start": 387,
                              "end": 413,
                              "children": [
                                {
                                  "type": "JSXText",
                                  "start": 393,
                                  "end": 406,
                                  "raw": "Hello, world!",
                                  "value": "Hello, world!"
                                }
                              ],
                              "closingElement": {
                                "type": "JSXClosingElement",
                                "start": 406,
                                "end": 413,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 408,
                                  "end": 412,
                                  "name": "span"
                                }
                              },
                              "openingElement": {
                                "type": "JSXOpeningElement",
                                "start": 387,
                                "end": 393,
                                "attributes": [],
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 388,
                                  "end": 392,
                                  "name": "span"
                                },
                                "selfClosing": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 337,
                "end": 352,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 342,
                  "decorators": [],
                  "name": "React",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 352,
                  "decorators": [],
                  "name": "Component",
                  "optional": false
                }
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 352,
                "end": 360,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 353,
                    "end": 355,
                    "members": []
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 357,
                    "end": 359,
                    "members": []
                  }
                ]
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 296,
          "end": 316,
          "decorators": [],
          "name": "createComponentClass",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
