__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 528,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 35,
      "end": 96,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 51,
        "decorators": [],
        "name": "ImageHolder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 72,
        "end": 95,
        "constraint": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 83,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 86,
          "end": 92
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 68,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 62,
              "end": 68
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 98,
      "end": 160,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 117,
        "decorators": [],
        "name": "SetupImageRefs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 138,
        "end": 159,
        "constraint": {
          "type": "TSTypeReference",
          "start": 148,
          "end": 149,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 156,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "File",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 134,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 128,
              "end": 134
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 162,
      "end": 253,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 178,
        "decorators": [],
        "name": "SetupImages",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 199,
        "end": 252,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 199,
            "end": 216,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 213,
              "end": 216,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 215,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 199,
              "end": 213,
              "decorators": [],
              "name": "SetupImageRefs",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 219,
            "end": 252,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 223,
                "end": 250,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 230,
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 232,
                    "end": 249,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 235,
                      "end": 249,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 238,
                        "end": 249,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 240,
                            "end": 247,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 244,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 244,
                              "end": 247,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 246,
                                "end": 247,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 246,
                                  "end": 247,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 178,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 195,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 255,
      "end": 315,
      "body": {
        "type": "TSInterfaceBody",
        "start": 279,
        "end": 315,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 283,
            "end": 296,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 287,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 299,
            "end": 313,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 304,
              "decorators": [],
              "name": "image",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 278,
        "decorators": [],
        "name": "TestInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 317,
      "end": 432,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 345,
        "decorators": [],
        "name": "setupImages",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 393,
          "end": 400,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 400,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 399,
              "end": 400,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 404,
          "end": 413,
          "decorators": [],
          "name": "keys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 413,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 410,
              "end": 413,
              "elementType": {
                "type": "TSTypeReference",
                "start": 410,
                "end": 411,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 415,
        "end": 431,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 417,
          "end": 431,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 428,
            "end": 431,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 429,
                "end": 430,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 430,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 417,
            "end": 428,
            "decorators": [],
            "name": "SetupImages",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 345,
        "end": 389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 346,
            "end": 370,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 356,
              "end": 370,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 367,
                "end": 370,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 368,
                    "end": 369,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 367,
                "decorators": [],
                "name": "ImageHolder",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 388,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 382,
              "end": 388
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 467,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 452,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 454,
                "end": 467,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 467,
                  "decorators": [],
                  "name": "TestInterface",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 527,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 476,
            "end": 496,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 478,
                "end": 485,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 487,
                "end": 494,
                "argument": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 494,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 499,
            "end": 527,
            "arguments": [
              {
                "type": "Identifier",
                "start": 511,
                "end": 515,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 517,
                "end": 526,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 518,
                    "end": 525,
                    "raw": "\"image\"",
                    "value": "image"
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 499,
              "end": 510,
              "decorators": [],
              "name": "setupImages",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
