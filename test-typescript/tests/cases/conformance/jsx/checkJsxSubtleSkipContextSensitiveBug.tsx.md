__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 560,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 98,
        "name": "ErrorResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 112,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 108,
                "end": 112,
                "literal": {
                  "type": "Literal",
                  "start": 108,
                  "end": 112,
                  "value": true,
                  "raw": "true"
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 116,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 142,
        "name": "AsyncLoaderProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 151,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 150,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 150,
              "name": "TResult",
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
        "start": 152,
        "end": 268,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 158,
            "end": 197,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 196,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 174,
                "end": 196,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 196,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 187,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 187,
                      "end": 196,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 188,
                          "end": 195,
                          "typeName": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 195,
                            "name": "TResult",
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 203,
            "end": 266,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 217,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 265,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 219,
                "end": 265,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 220,
                    "end": 257,
                    "name": "result",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 228,
                        "end": 257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 235,
                          "name": "Exclude",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 235,
                          "end": 257,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 236,
                              "end": 243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 243,
                                "name": "TResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 245,
                              "end": 256,
                              "typeName": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 256,
                                "name": "ErrorResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 259,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 262,
                    "end": 265
                  }
                }
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
      "type": "ClassDeclaration",
      "start": 270,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 287,
        "name": "AsyncLoader",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 305,
        "end": 320,
        "object": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 311,
          "end": 320,
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
        "start": 348,
        "end": 381,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 354,
            "end": 379,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 360,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 360,
              "end": 379,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 363,
                "end": 379,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 365,
                    "end": 377,
                    "argument": {
                      "type": "Literal",
                      "start": 372,
                      "end": 376,
                      "value": null,
                      "raw": "null"
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 287,
        "end": 296,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 288,
            "end": 295,
            "name": {
              "type": "Identifier",
              "start": 288,
              "end": 295,
              "name": "TResult",
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 320,
        "end": 347,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 321,
            "end": 346,
            "typeName": {
              "type": "Identifier",
              "start": 321,
              "end": 337,
              "name": "AsyncLoaderProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 337,
              "end": 346,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 338,
                  "end": 345,
                  "typeName": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 345,
                    "name": "TResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 383,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 402,
        "name": "load",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 480,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 453,
            "end": 478,
            "argument": {
              "type": "ObjectExpression",
              "start": 460,
              "end": 477,
              "properties": [
                {
                  "type": "Property",
                  "start": 462,
                  "end": 475,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 469,
                    "name": "success",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 471,
                    "end": 475,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 404,
        "end": 446,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 406,
          "end": 446,
          "typeName": {
            "type": "Identifier",
            "start": 406,
            "end": 413,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 413,
            "end": 446,
            "params": [
              {
                "type": "TSUnionType",
                "start": 414,
                "end": 445,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 414,
                    "end": 431,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 416,
                        "end": 429,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 423,
                          "name": "success",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 423,
                          "end": 429,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 425,
                            "end": 429,
                            "literal": {
                              "type": "Literal",
                              "start": 425,
                              "end": 429,
                              "value": true,
                              "raw": "true"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 434,
                    "end": 445,
                    "typeName": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 445,
                      "name": "ErrorResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 558,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 494,
            "name": "loader",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 497,
            "end": 558,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 497,
              "end": 558,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 514,
                  "end": 526,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 514,
                    "end": 519,
                    "name": "prop1"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 520,
                    "end": 526,
                    "expression": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 525,
                      "name": "load",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 531,
                  "end": 555,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 531,
                    "end": 536,
                    "name": "prop2"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 537,
                    "end": 555,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 538,
                      "end": 554,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 538,
                          "end": 544,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 554,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 498,
                "end": 509,
                "name": "AsyncLoader"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
