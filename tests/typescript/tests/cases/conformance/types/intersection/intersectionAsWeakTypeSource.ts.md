__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 540,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
      "start": 26,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
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
      "start": 52,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 77,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 77,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 70,
                "end": 77
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
      "start": 81,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "XY",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 91,
        "end": 96,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 92,
            "typeName": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 129,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 110,
            "decorators": [],
            "name": "xy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 110,
                  "decorators": [],
                  "name": "XY",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 113,
            "end": 128,
            "properties": [
              {
                "type": "Property",
                "start": 114,
                "end": 120,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 120,
                  "value": "x",
                  "raw": "'x'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 122,
                "end": 127,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 127,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 148,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 142,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 145,
            "end": 147,
            "decorators": [],
            "name": "xy",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 191,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 210,
        "decorators": [],
        "name": "ViewStyle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 211,
        "end": 254,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 217,
            "end": 229,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 221,
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 229,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 223,
                "end": 229
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 234,
            "end": 252,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 244,
              "decorators": [],
              "name": "styleMedia",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 252,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 246,
                "end": 252
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
      "start": 255,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 265,
        "decorators": [],
        "name": "Brand",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 265,
        "end": 268,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 267,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "T",
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
        "type": "TSIntersectionType",
        "start": 271,
        "end": 294,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 271,
            "end": 277
          },
          {
            "type": "TSTypeLiteral",
            "start": 280,
            "end": 294,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 282,
                "end": 292,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 289,
                  "decorators": [],
                  "name": "__brand",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 289,
                  "end": 292,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 291,
                    "end": 292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "T",
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
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 318,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 356,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 355,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 329,
              "end": 355,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 331,
                  "end": 353,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 332,
                      "end": 341,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 333,
                        "end": 341,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 335,
                          "end": 341
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 353,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 353,
                        "decorators": [],
                        "name": "ViewStyle",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
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
          "start": 357,
          "end": 366,
          "decorators": [],
          "name": "styles",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 366,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 365,
              "end": 366,
              "typeName": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "decorators": [],
                "name": "T",
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
        "start": 367,
        "end": 400,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 369,
          "end": 400,
          "key": {
            "type": "Identifier",
            "start": 372,
            "end": 373,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 377,
            "end": 384,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 383,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 387,
            "end": 398,
            "typeName": {
              "type": "Identifier",
              "start": 387,
              "end": 392,
              "decorators": [],
              "name": "Brand",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 392,
              "end": 398,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 393,
                  "end": 397,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 393,
                    "end": 394,
                    "typeName": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 395,
                    "end": 396,
                    "typeName": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": false,
          "readonly": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 468,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 415,
            "decorators": [],
            "name": "wrapped",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 467,
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 424,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 425,
                "end": 466,
                "properties": [
                  {
                    "type": "Property",
                    "start": 427,
                    "end": 464,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 432,
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 434,
                      "end": 464,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 436,
                          "end": 443,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 440,
                            "decorators": [],
                            "name": "view",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 442,
                            "end": 443,
                            "value": 0,
                            "raw": "0"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 445,
                          "end": 462,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 445,
                            "end": 455,
                            "decorators": [],
                            "name": "styleMedia",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 457,
                            "end": 462,
                            "value": "???",
                            "raw": "\"???\""
                          },
                          "method": false,
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 504,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 475,
          "end": 504,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 488,
            "decorators": [],
            "name": "vs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 488,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 479,
                "end": 488,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 488,
                  "decorators": [],
                  "name": "ViewStyle",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 491,
            "end": 504,
            "object": {
              "type": "Identifier",
              "start": 491,
              "end": 498,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 499,
              "end": 504,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
