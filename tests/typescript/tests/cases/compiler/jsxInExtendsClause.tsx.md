__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 79,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 170,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 84,
            "end": 141,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 108,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 112,
              "end": 141,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 114,
                  "end": 139,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 138,
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 131,
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 135,
                            "end": 137,
                            "members": []
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 144,
            "end": 168,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 159,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 159,
              "end": 165,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 160,
                  "end": 161,
                  "name": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 163,
                  "end": 164,
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 166,
              "end": 168,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 171,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 208,
        "decorators": [],
        "name": "createComponentClass",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 224,
                "end": 250,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 227,
                  "end": 250,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 247,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
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
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 273,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null
            }
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 278,
      "end": 424,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 287,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 296,
        "end": 421,
        "callee": {
          "type": "Identifier",
          "start": 296,
          "end": 316,
          "decorators": [],
          "name": "createComponentClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 317,
            "end": 420,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ClassExpression",
              "start": 323,
              "end": 420,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 337,
                "end": 352,
                "object": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 342,
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 352,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 361,
                "end": 420,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 365,
                    "end": 418,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 371,
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 371,
                      "end": 418,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                              "openingElement": {
                                "type": "JSXOpeningElement",
                                "start": 387,
                                "end": 393,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 388,
                                  "end": 392,
                                  "name": "span"
                                },
                                "typeArguments": null,
                                "attributes": [],
                                "selfClosing": false
                              },
                              "children": [
                                {
                                  "type": "JSXText",
                                  "start": 393,
                                  "end": 406,
                                  "value": "Hello, world!",
                                  "raw": "Hello, world!"
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
                              }
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 422,
        "end": 424,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
