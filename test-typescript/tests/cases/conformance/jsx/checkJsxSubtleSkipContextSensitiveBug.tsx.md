__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 559,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 114,
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
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
        "start": 87,
        "end": 98,
        "decorators": [],
        "name": "ErrorResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 116,
      "end": 268,
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 268,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 158,
            "end": 197,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 196,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 174,
                "end": 196,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 196,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 187,
                      "end": 196,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 188,
                          "end": 195,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 195,
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 187,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 203,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 217,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 265,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 219,
                "end": 265,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 220,
                    "end": 257,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 228,
                        "end": 257,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 235,
                          "end": 257,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 236,
                              "end": 243,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 243,
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 245,
                              "end": 256,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 256,
                                "decorators": [],
                                "name": "ErrorResult",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 235,
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 142,
        "decorators": [],
        "name": "AsyncLoaderProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 151,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 150,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 150,
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 381,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 348,
        "end": 381,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 354,
            "end": 379,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 360,
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
              "start": 360,
              "end": 379,
              "async": false,
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
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 287,
        "decorators": [],
        "name": "AsyncLoader",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 305,
        "end": 320,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 311,
          "end": 320,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 320,
        "end": 347,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 321,
            "end": 346,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 337,
              "end": 346,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 338,
                  "end": 345,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 345,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 321,
              "end": 337,
              "decorators": [],
              "name": "AsyncLoaderProps",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 287,
        "end": 296,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 288,
            "end": 295,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 288,
              "end": 295,
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 383,
      "end": 480,
      "async": true,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 469,
                    "decorators": [],
                    "name": "success",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 471,
                    "end": 475,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 402,
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 404,
        "end": 446,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 406,
          "end": 446,
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
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 423,
                          "decorators": [],
                          "name": "success",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
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
                              "raw": "true",
                              "value": true,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 434,
                    "end": 445,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 445,
                      "decorators": [],
                      "name": "ErrorResult",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 406,
            "end": 413,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 494,
            "decorators": [],
            "name": "loader",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 497,
            "end": 558,
            "children": [],
            "closingElement": null,
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
                      "decorators": [],
                      "name": "load",
                      "optional": false,
                      "typeAnnotation": null
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
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 554,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 538,
                          "end": 544,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
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
