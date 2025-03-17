__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 409,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 16,
      "end": 89,
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 89,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 41,
            "end": 87,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 87,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 69,
                  "end": 81,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 72,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 74,
                      "end": 80
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 58,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 90,
      "end": 216,
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 216,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 120,
            "end": 214,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 142,
              "end": 214,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 190,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 163,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 163,
                    "end": 190,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 164,
                        "end": 173,
                        "decorators": [],
                        "name": "props",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 170,
                          "end": 173,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 172,
                            "end": 173,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 175,
                        "end": 188,
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 183,
                          "end": 188,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 185,
                            "end": 188
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 199,
                  "end": 208,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 204,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 206,
                      "end": 207,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 135,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 135,
              "end": 141,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 136,
                  "end": 137,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 139,
                  "end": 140,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 108,
        "end": 113,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 218,
      "end": 409,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 225,
        "end": 409,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 288,
          "end": 409,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 294,
              "end": 407,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 301,
                "end": 307,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 307,
                "end": 407,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 323,
                  "end": 407,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 333,
                      "end": 401,
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 356,
                        "end": 401,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 370,
                            "end": 391,
                            "argument": {
                              "type": "JSXElement",
                              "start": 378,
                              "end": 389,
                              "children": [],
                              "closingElement": {
                                "type": "JSXClosingElement",
                                "start": 383,
                                "end": 389,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 385,
                                  "end": 388,
                                  "name": "div"
                                }
                              },
                              "openingElement": {
                                "type": "JSXOpeningElement",
                                "start": 378,
                                "end": 383,
                                "attributes": [],
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 379,
                                  "end": 382,
                                  "name": "div"
                                },
                                "selfClosing": false,
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 337,
                        "end": 354,
                        "operator": "<",
                        "left": {
                          "type": "MemberExpression",
                          "start": 337,
                          "end": 350,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 337,
                            "end": 347,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 337,
                              "end": 341
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 347,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 350,
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 353,
                          "end": 354,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 309,
                  "end": 322,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 311,
                    "end": 322,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 311,
                      "end": 322,
                      "left": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 314,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 322,
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 231,
          "end": 243,
          "decorators": [],
          "name": "ShortDetails",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 252,
          "end": 267,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 257,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 267,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 267,
          "end": 287,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 268,
              "end": 282,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 270,
                  "end": 280,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 272,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 272,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 274,
                      "end": 280
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 284,
              "end": 286,
              "members": []
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
