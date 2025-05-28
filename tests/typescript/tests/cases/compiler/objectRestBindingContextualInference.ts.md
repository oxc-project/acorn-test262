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
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 51,
        "decorators": [],
        "name": "ImageHolder",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 62,
              "end": 68
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 72,
        "end": 95,
        "key": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 83,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 86,
          "end": 92
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 98,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 117,
        "decorators": [],
        "name": "SetupImageRefs",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 128,
              "end": 134
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 138,
        "end": 159,
        "key": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 148,
          "end": 149,
          "typeName": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 156,
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "File",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 162,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 178,
        "decorators": [],
        "name": "SetupImages",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "typeName": {
              "type": "Identifier",
              "start": 199,
              "end": 213,
              "decorators": [],
              "name": "SetupImageRefs",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 213,
              "end": 216,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 215,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 230,
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 232,
                    "end": 249,
                    "typeParameters": null,
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 244,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 244,
                              "end": 247,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 246,
                                "end": 247,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 246,
                                  "end": 247,
                                  "decorators": [],
                                  "name": "K",
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
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 255,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 278,
        "decorators": [],
        "name": "TestInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 279,
        "end": 315,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 283,
            "end": 296,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 287,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 299,
            "end": 313,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 304,
              "decorators": [],
              "name": "image",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
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
      "type": "TSDeclareFunction",
      "start": 317,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 345,
        "decorators": [],
        "name": "setupImages",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 345,
        "end": 389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 346,
            "end": 370,
            "name": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 356,
              "end": 370,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 367,
                "decorators": [],
                "name": "ImageHolder",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 367,
                "end": 370,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 368,
                    "end": 369,
                    "typeName": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 388,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 382,
              "end": 388
            },
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
              "typeName": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 417,
            "end": 428,
            "decorators": [],
            "name": "SetupImages",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 428,
            "end": 431,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 429,
                "end": 430,
                "typeName": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 430,
                  "decorators": [],
                  "name": "K",
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
      "type": "VariableDeclaration",
      "start": 434,
      "end": 468,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 467,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 467,
                  "decorators": [],
                  "name": "TestInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 528,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 527,
          "id": {
            "type": "ObjectPattern",
            "start": 476,
            "end": 496,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 478,
                "end": 485,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 487,
                "end": 494,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 494,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 499,
            "end": 527,
            "callee": {
              "type": "Identifier",
              "start": 499,
              "end": 510,
              "decorators": [],
              "name": "setupImages",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "value": "image",
                    "raw": "\"image\""
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
