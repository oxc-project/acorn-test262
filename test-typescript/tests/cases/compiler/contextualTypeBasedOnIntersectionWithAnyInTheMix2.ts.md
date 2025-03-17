__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 579,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "name": "IntrinsicElements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "href",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "div",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "dir",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Props",
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
            "name": "props",
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
                  "name": "Props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
        "name": "NestedMDXComponents",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 184,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "Component",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "MDXComponents",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "NestedMDXComponents",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSMappedType",
            "start": 257,
            "end": 332,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 262,
              "end": 292,
              "name": {
                "type": "Identifier",
                "start": 262,
                "end": 265,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "IntrinsicElements",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
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
                "name": "Component",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "IntrinsicElements",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "Key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "optional": true,
            "readonly": null,
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
                  "name": "IntrinsicElements",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 265,
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
          "name": "MDXProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "components",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "MDXComponents",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSDeclareFunction",
      "start": 396,
      "end": 451,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 427,
        "name": "MyMDXComponent",
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
          "start": 428,
          "end": 443,
          "name": "props",
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
                "name": "MDXProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 444,
        "end": 450,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 446,
          "end": 450
        }
      }
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
          "name": "MyMDXComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 482,
                  "name": "components",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 490,
                        "end": 491,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 491,
                        "end": 525,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 492,
                            "end": 497,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 531,
                      "end": 568,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 534,
                        "name": "div",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 534,
                        "end": 568,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 535,
                            "end": 540,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
