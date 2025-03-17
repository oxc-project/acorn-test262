__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 993,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 44,
        "name": "DataSnapshot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 51,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 49,
              "end": 51,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 91,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "name": "child",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 75,
                "name": "path",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 90,
                  "name": "DataSnapshot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 113,
        "name": "Snapshot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 125,
          "end": 137,
          "expression": {
            "type": "Identifier",
            "start": 125,
            "end": 137,
            "name": "DataSnapshot",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "T",
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
        "start": 138,
        "end": 211,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 142,
            "end": 209,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "name": "child",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 147,
              "end": 183,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 148,
                  "end": 182,
                  "name": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 165,
                      "name": "Extract",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 175,
                          "end": 181
                        }
                      ]
                    }
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
                "start": 184,
                "end": 191,
                "name": "path",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 191,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "name": "U",
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
              "start": 192,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 202,
                  "name": "Snapshot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 202,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 203,
                      "end": 207,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 203,
                        "end": 204,
                        "typeName": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 204,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 205,
                        "end": 206,
                        "typeName": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 234,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 245,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 256,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 254,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 257,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 268,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 277,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 275,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 274,
                "end": 275,
                "typeName": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "name": "C",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 278,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 289,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 300,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 292,
            "end": 298,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 301,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 313,
        "end": 323,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 315,
            "end": 321,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 324,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 336,
        "end": 346,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 338,
            "end": 344,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 347,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 358,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 359,
        "end": 367,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 361,
            "end": 365,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 365,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 365,
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "G",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 368,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 379,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 380,
        "end": 390,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 382,
            "end": 388,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
                    "name": "H",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 391,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 402,
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 403,
        "end": 416,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 405,
            "end": 414,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 414,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 408,
                "end": 414
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
      "type": "VariableDeclaration",
      "start": 418,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 863,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 428,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 425,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 427,
                "end": 428,
                "typeName": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 428,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 455,
                            "end": 848,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 465,
                                "end": 839,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 465,
                                  "end": 466,
                                  "name": "d",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 494,
                                            "end": 495,
                                            "name": "e",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
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
                                                    "method": false,
                                                    "shorthand": false,
                                                    "computed": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 531,
                                                      "end": 532,
                                                      "name": "f",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
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
                                                              "method": false,
                                                              "shorthand": false,
                                                              "computed": false,
                                                              "key": {
                                                                "type": "Identifier",
                                                                "start": 576,
                                                                "end": 577,
                                                                "name": "g",
                                                                "typeAnnotation": null,
                                                                "decorators": [],
                                                                "optional": false
                                                              },
                                                              "value": {
                                                                "type": "ObjectExpression",
                                                                "start": 579,
                                                                "end": 743,
                                                                "properties": [
                                                                  {
                                                                    "type": "Property",
                                                                    "start": 603,
                                                                    "end": 720,
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "start": 603,
                                                                      "end": 604,
                                                                      "name": "h",
                                                                      "typeAnnotation": null,
                                                                      "decorators": [],
                                                                      "optional": false
                                                                    },
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
                                                      ]
                                                    },
                                                    "kind": "init",
                                                    "optional": false
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  ]
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
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 893,
            "end": 913,
            "name": "a1",
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
            },
            "decorators": [],
            "optional": false
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
                                "value": 42,
                                "raw": "42"
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 936,
            "end": 966,
            "name": "a2",
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
            },
            "decorators": [],
            "optional": false
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
                                                    "value": 42,
                                                    "raw": "42"
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
