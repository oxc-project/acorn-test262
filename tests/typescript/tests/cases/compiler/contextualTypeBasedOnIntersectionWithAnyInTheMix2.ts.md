__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 578,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "decorators": [],
        "name": "IntrinsicElements",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 25,
        "end": 91,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 32,
                "end": 56,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 52,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 42,
                      "decorators": [],
                      "name": "href",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 45,
                        "end": 51
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
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 89,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "div",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 65,
                "end": 88,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 71,
                    "end": 84,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 74,
                      "decorators": [],
                      "name": "dir",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
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
      "start": 94,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 108,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "Props",
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 118,
        "end": 143,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 119,
            "end": 131,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 131,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 133,
          "end": 143,
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 136,
            "end": 143
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 146,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 175,
        "decorators": [],
        "name": "NestedMDXComponents",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 176,
        "end": 212,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 180,
            "end": 210,
            "parameters": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 192,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 184,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 204,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 209,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 205,
                      "end": 208
                    }
                  ]
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 214,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 232,
        "decorators": [],
        "name": "MDXComponents",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 235,
        "end": 332,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 235,
            "end": 254,
            "typeName": {
              "type": "Identifier",
              "start": 235,
              "end": 254,
              "decorators": [],
              "name": "NestedMDXComponents",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSMappedType",
            "start": 257,
            "end": 332,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 265,
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 269,
              "end": 292,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 292,
                  "decorators": [],
                  "name": "IntrinsicElements",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 296,
              "end": 329,
              "typeName": {
                "type": "Identifier",
                "start": 296,
                "end": 305,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 305,
                "end": 329,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 306,
                    "end": 328,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 306,
                      "end": 323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 323,
                        "decorators": [],
                        "name": "IntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 327,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 327,
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "optional": true,
            "readonly": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 335,
      "end": 394,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 342,
        "end": 394,
        "id": {
          "type": "Identifier",
          "start": 352,
          "end": 360,
          "decorators": [],
          "name": "MDXProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 361,
          "end": 394,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 365,
              "end": 392,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 365,
                "end": 375,
                "decorators": [],
                "name": "components",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 391,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 378,
                  "end": 391,
                  "typeName": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 391,
                    "decorators": [],
                    "name": "MDXComponents",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 396,
      "end": 451,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 427,
        "decorators": [],
        "name": "MyMDXComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 428,
          "end": 443,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 435,
              "end": 443,
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 443,
                "decorators": [],
                "name": "MDXProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 444,
        "end": 450,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 446,
          "end": 450
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 578,
      "expression": {
        "type": "CallExpression",
        "start": 453,
        "end": 577,
        "callee": {
          "type": "Identifier",
          "start": 453,
          "end": 467,
          "decorators": [],
          "name": "MyMDXComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 468,
            "end": 576,
            "properties": [
              {
                "type": "Property",
                "start": 472,
                "end": 573,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 482,
                  "decorators": [],
                  "name": "components",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 484,
                  "end": 573,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 490,
                      "end": 525,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 490,
                        "end": 491,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 491,
                        "end": 525,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 492,
                            "end": 497,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 499,
                          "end": 525,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 507,
                              "end": 519,
                              "argument": {
                                "type": "Literal",
                                "start": 514,
                                "end": 518,
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 531,
                      "end": 568,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 534,
                        "decorators": [],
                        "name": "div",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 534,
                        "end": 568,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 535,
                            "end": 540,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 542,
                          "end": 568,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 550,
                              "end": 562,
                              "argument": {
                                "type": "Literal",
                                "start": 557,
                                "end": 561,
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
