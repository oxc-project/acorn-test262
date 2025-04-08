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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "ComponentClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
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
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                        "name": "Component",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 159,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 166,
              "end": 168,
              "body": []
            },
            "decorators": [],
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
        "name": "createComponentClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 212,
          "end": 250,
          "name": "factory",
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
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 247,
                      "name": "ComponentClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 273,
              "name": "ComponentClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 278,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 287,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 296,
        "end": 421,
        "callee": {
          "type": "Identifier",
          "start": 296,
          "end": 316,
          "name": "createComponentClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 317,
            "end": 420,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ClassExpression",
              "start": 323,
              "end": 420,
              "id": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 337,
                "end": 352,
                "object": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 342,
                  "name": "React",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 352,
                  "name": "Component",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 361,
                "end": 420,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 365,
                    "end": 418,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 371,
                      "name": "render",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 371,
                      "end": 418,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "attributes": [],
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 388,
                                  "end": 392,
                                  "name": "span"
                                },
                                "selfClosing": false,
                                "typeArguments": null
                              },
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
                              "children": [
                                {
                                  "type": "JSXText",
                                  "start": 393,
                                  "end": 406,
                                  "value": "Hello, world!",
                                  "raw": "Hello, world!"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
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
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 422,
        "end": 424,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
