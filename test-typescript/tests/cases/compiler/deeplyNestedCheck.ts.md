__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 992,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 75,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 90,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 90,
                  "decorators": [],
                  "name": "DataSnapshot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 44,
        "decorators": [],
        "name": "DataSnapshot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 51,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 49,
              "end": 51,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "X",
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
      "start": 95,
      "end": 211,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 211,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 142,
            "end": 209,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 184,
                "end": 191,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 191,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 191,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 208,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 202,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 203,
                      "end": 207,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 205,
                        "end": 206,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 203,
                        "end": 204,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 204,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 202,
                  "decorators": [],
                  "name": "Snapshot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 147,
              "end": 183,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 148,
                  "end": 182,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 182,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 165,
                      "end": 182,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 166,
                          "end": 173,
                          "operator": "keyof",
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 175,
                          "end": 181
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 165,
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "U",
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
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 125,
          "end": 137,
          "expression": {
            "type": "Identifier",
            "start": 125,
            "end": 137,
            "decorators": [],
            "name": "DataSnapshot",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 113,
        "decorators": [],
        "name": "Snapshot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "T",
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
      "start": 234,
      "end": 256,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 256,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 254,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 254,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 251,
                "end": 254,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 252,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 244,
        "end": 245,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 257,
      "end": 277,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 277,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 275,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 274,
                "end": 275,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 267,
        "end": 268,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 278,
      "end": 300,
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 300,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 292,
            "end": 298,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 298,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 295,
                "end": 298,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 295,
                  "end": 296,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 288,
        "end": 289,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 301,
      "end": 323,
      "body": {
        "type": "TSInterfaceBody",
        "start": 313,
        "end": 323,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 315,
            "end": 321,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 321,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 318,
                "end": 321,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 318,
                  "end": 319,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 311,
        "end": 312,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 324,
      "end": 346,
      "body": {
        "type": "TSInterfaceBody",
        "start": 336,
        "end": 346,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 338,
            "end": 344,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 344,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 341,
                "end": 344,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 341,
                  "end": 342,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 334,
        "end": 335,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 347,
      "end": 367,
      "body": {
        "type": "TSInterfaceBody",
        "start": 359,
        "end": 367,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 361,
            "end": 365,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 365,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 365,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 357,
        "end": 358,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 368,
      "end": 390,
      "body": {
        "type": "TSInterfaceBody",
        "start": 380,
        "end": 390,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 382,
            "end": 388,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 388,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 385,
                "end": 388,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 385,
                  "end": 386,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 378,
        "end": 379,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 391,
      "end": 416,
      "body": {
        "type": "TSInterfaceBody",
        "start": 403,
        "end": 416,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 405,
            "end": 414,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 414,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 408,
                "end": 414
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 402,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 863,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 428,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 425,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 427,
                "end": 428,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 428,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 431,
            "end": 863,
            "properties": [
              {
                "type": "Property",
                "start": 435,
                "end": 860,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 438,
                  "end": 860,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 444,
                      "end": 855,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 452,
                          "end": 848,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 455,
                            "end": 848,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 465,
                                "end": 839,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 465,
                                  "end": 466,
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrayExpression",
                                  "start": 468,
                                  "end": 839,
                                  "elements": [
                                    {
                                      "type": "ObjectExpression",
                                      "start": 480,
                                      "end": 828,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 494,
                                          "end": 815,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 494,
                                            "end": 495,
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": false,
                                          "value": {
                                            "type": "ArrayExpression",
                                            "start": 497,
                                            "end": 815,
                                            "elements": [
                                              {
                                                "type": "ObjectExpression",
                                                "start": 513,
                                                "end": 800,
                                                "properties": [
                                                  {
                                                    "type": "Property",
                                                    "start": 531,
                                                    "end": 783,
                                                    "computed": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 531,
                                                      "end": 532,
                                                      "decorators": [],
                                                      "name": "f",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "optional": false,
                                                    "shorthand": false,
                                                    "value": {
                                                      "type": "ArrayExpression",
                                                      "start": 534,
                                                      "end": 783,
                                                      "elements": [
                                                        {
                                                          "type": "ObjectExpression",
                                                          "start": 554,
                                                          "end": 764,
                                                          "properties": [
                                                            {
                                                              "type": "Property",
                                                              "start": 576,
                                                              "end": 743,
                                                              "computed": false,
                                                              "key": {
                                                                "type": "Identifier",
                                                                "start": 576,
                                                                "end": 577,
                                                                "decorators": [],
                                                                "name": "g",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              },
                                                              "kind": "init",
                                                              "method": false,
                                                              "optional": false,
                                                              "shorthand": false,
                                                              "value": {
                                                                "type": "ObjectExpression",
                                                                "start": 579,
                                                                "end": 743,
                                                                "properties": [
                                                                  {
                                                                    "type": "Property",
                                                                    "start": 603,
                                                                    "end": 720,
                                                                    "computed": false,
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "start": 603,
                                                                      "end": 604,
                                                                      "decorators": [],
                                                                      "name": "h",
                                                                      "optional": false,
                                                                      "typeAnnotation": null
                                                                    },
                                                                    "kind": "init",
                                                                    "method": false,
                                                                    "optional": false,
                                                                    "shorthand": false,
                                                                    "value": {
                                                                      "type": "ArrayExpression",
                                                                      "start": 606,
                                                                      "end": 720,
                                                                      "elements": [
                                                                        {
                                                                          "type": "ObjectExpression",
                                                                          "start": 632,
                                                                          "end": 695,
                                                                          "properties": []
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 887,
      "end": 929,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 893,
          "end": 928,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 893,
            "end": 913,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 895,
              "end": 913,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 897,
                "end": 913,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 897,
                  "end": 911,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 897,
                    "end": 909,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 897,
                      "end": 907,
                      "elementType": {
                        "type": "TSArrayType",
                        "start": 897,
                        "end": 905,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 897,
                          "end": 903
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 916,
            "end": 928,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 917,
                "end": 927,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 918,
                    "end": 926,
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "start": 919,
                        "end": 925,
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "start": 920,
                            "end": 924,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 921,
                                "end": 923,
                                "raw": "42",
                                "value": 42
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 930,
      "end": 992,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 936,
          "end": 991,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 936,
            "end": 966,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 938,
              "end": 966,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 940,
                "end": 966,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 940,
                  "end": 964,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 940,
                    "end": 962,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 940,
                      "end": 960,
                      "elementType": {
                        "type": "TSArrayType",
                        "start": 940,
                        "end": 958,
                        "elementType": {
                          "type": "TSArrayType",
                          "start": 940,
                          "end": 956,
                          "elementType": {
                            "type": "TSArrayType",
                            "start": 940,
                            "end": 954,
                            "elementType": {
                              "type": "TSArrayType",
                              "start": 940,
                              "end": 952,
                              "elementType": {
                                "type": "TSArrayType",
                                "start": 940,
                                "end": 950,
                                "elementType": {
                                  "type": "TSArrayType",
                                  "start": 940,
                                  "end": 948,
                                  "elementType": {
                                    "type": "TSStringKeyword",
                                    "start": 940,
                                    "end": 946
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 969,
            "end": 991,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 970,
                "end": 990,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 971,
                    "end": 989,
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "start": 972,
                        "end": 988,
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "start": 973,
                            "end": 987,
                            "elements": [
                              {
                                "type": "ArrayExpression",
                                "start": 974,
                                "end": 986,
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "start": 975,
                                    "end": 985,
                                    "elements": [
                                      {
                                        "type": "ArrayExpression",
                                        "start": 976,
                                        "end": 984,
                                        "elements": [
                                          {
                                            "type": "ArrayExpression",
                                            "start": 977,
                                            "end": 983,
                                            "elements": [
                                              {
                                                "type": "ArrayExpression",
                                                "start": 978,
                                                "end": 982,
                                                "elements": [
                                                  {
                                                    "type": "Literal",
                                                    "start": 979,
                                                    "end": 981,
                                                    "raw": "42",
                                                    "value": 42
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
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
