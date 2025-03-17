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
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 89,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 41,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 58,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 87,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 69,
                  "end": 81,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 72,
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 74,
                      "end": 80
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 90,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 113,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 216,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 120,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 135,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 142,
              "end": 214,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 190,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 163,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 163,
                    "end": 190,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 164,
                        "end": 173,
                        "name": "props",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 170,
                          "end": 173,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 172,
                            "end": 173,
                            "typeName": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "Identifier",
                        "start": 175,
                        "end": 188,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 183,
                          "end": 188,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 185,
                            "end": 188
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 199,
                  "end": 208,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 204,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 206,
                      "end": 207,
                      "typeName": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 135,
              "end": 141,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 136,
                  "end": 137,
                  "name": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 139,
                  "end": 140,
                  "name": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "name": "S",
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
      "type": "ExportNamedDeclaration",
      "start": 218,
      "end": 409,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 225,
        "end": 409,
        "id": {
          "type": "Identifier",
          "start": 231,
          "end": 243,
          "name": "ShortDetails",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 252,
          "end": 267,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 257,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 267,
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
          "start": 288,
          "end": 409,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 294,
              "end": 407,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 301,
                "end": 307,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 307,
                "end": 407,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 323,
                  "end": 407,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 333,
                      "end": 401,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 337,
                        "end": 354,
                        "left": {
                          "type": "MemberExpression",
                          "start": 337,
                          "end": 350,
                          "object": {
                            "type": "MemberExpression",
                            "start": 337,
                            "end": 347,
                            "object": {
                              "type": "ThisExpression",
                              "start": 337,
                              "end": 341
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 347,
                              "name": "props",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 350,
                            "name": "id",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 353,
                          "end": 354,
                          "value": 1,
                          "raw": "1"
                        }
                      },
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
                              },
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
                              "children": []
                            }
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 309,
                  "end": 322,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 311,
                    "end": 322,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 311,
                      "end": 322,
                      "left": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 314,
                        "name": "JSX",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 322,
                        "name": "Element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 272,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 272,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 274,
                      "end": 280
                    }
                  },
                  "accessibility": null,
                  "static": false
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
