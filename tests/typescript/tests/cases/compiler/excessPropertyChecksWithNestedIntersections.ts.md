__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1481,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 86,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 84,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
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
      "start": 88,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 100,
        "end": 113,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 106,
            "end": 111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "A",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 115,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 145,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 143,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
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
      "start": 147,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 156,
        "end": 161,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 156,
            "end": 157,
            "typeName": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 160,
            "end": 161,
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "C",
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
      "start": 164,
      "end": 197,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 172,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 175,
            "end": 196,
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 194,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 180,
                  "end": 194,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 182,
                      "end": 192,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 185,
                        "end": 192,
                        "value": "hello",
                        "raw": "'hello'"
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 231,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 212,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 215,
            "end": 230,
            "properties": [
              {
                "type": "Property",
                "start": 217,
                "end": 228,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 220,
                  "end": 228,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 222,
                      "end": 226,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 225,
                        "end": 226,
                        "value": 2,
                        "raw": "2"
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 319,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 288,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 288,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 288,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 291,
            "end": 318,
            "properties": [
              {
                "type": "Property",
                "start": 293,
                "end": 316,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 296,
                  "end": 316,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 298,
                      "end": 308,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 299,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 301,
                        "end": 308,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 310,
                      "end": 314,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 313,
                        "end": 314,
                        "value": 2,
                        "raw": "2"
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 398,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 367,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 367,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 370,
            "end": 397,
            "properties": [
              {
                "type": "Property",
                "start": 372,
                "end": 389,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 375,
                  "end": 389,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 377,
                      "end": 387,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 377,
                        "end": 378,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 380,
                        "end": 387,
                        "value": "hello",
                        "raw": "'hello'"
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
              },
              {
                "type": "Property",
                "start": 391,
                "end": 395,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 394,
                  "end": 395,
                  "value": 5,
                  "raw": "5"
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
      "start": 405,
      "end": 438,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 413,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 413,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 412,
                "end": 413,
                "typeName": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 416,
            "end": 437,
            "properties": [
              {
                "type": "Property",
                "start": 418,
                "end": 429,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 419,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 421,
                  "end": 429,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 423,
                      "end": 427,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 424,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 426,
                        "end": 427,
                        "value": 2,
                        "raw": "2"
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
              },
              {
                "type": "Property",
                "start": 431,
                "end": 435,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 434,
                  "end": 435,
                  "value": 5,
                  "raw": "5"
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
      "start": 487,
      "end": 532,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 495,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 492,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 494,
                "end": 495,
                "typeName": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 498,
            "end": 531,
            "properties": [
              {
                "type": "Property",
                "start": 500,
                "end": 523,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 501,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 503,
                  "end": 523,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 505,
                      "end": 515,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 508,
                        "end": 515,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 517,
                      "end": 521,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 520,
                        "end": 521,
                        "value": 2,
                        "raw": "2"
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
              },
              {
                "type": "Property",
                "start": 525,
                "end": 529,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 526,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 528,
                  "end": 529,
                  "value": 5,
                  "raw": "5"
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
      "type": "ExportNamedDeclaration",
      "start": 629,
      "end": 733,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 636,
        "end": 733,
        "id": {
          "type": "Identifier",
          "start": 641,
          "end": 647,
          "decorators": [],
          "name": "MyType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 650,
          "end": 733,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 650,
              "end": 665,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 652,
                  "end": 663,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 654,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 656,
                      "end": 662
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 668,
              "end": 685,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 670,
                  "end": 683,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 674,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 674,
                    "end": 682,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 676,
                      "end": 682
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 688,
              "end": 733,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 690,
                  "end": 731,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 695,
                    "decorators": [],
                    "name": "photo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 695,
                    "end": 731,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 697,
                      "end": 731,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 697,
                          "end": 712,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 699,
                              "end": 710,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 699,
                                "end": 701,
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 701,
                                "end": 709,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 703,
                                  "end": 709
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 715,
                          "end": 731,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 717,
                              "end": 729,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 717,
                                "end": 720,
                                "decorators": [],
                                "name": "url",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 720,
                                "end": 728,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 722,
                                  "end": 728
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 735,
      "end": 758,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 742,
        "end": 758,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 746,
            "end": 757,
            "id": {
              "type": "Identifier",
              "start": 746,
              "end": 757,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 749,
                "end": 757,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 751,
                  "end": 757,
                  "typeName": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 757,
                    "decorators": [],
                    "name": "MyType",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 760,
      "end": 870,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 767,
        "end": 870,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 773,
            "end": 869,
            "id": {
              "type": "Identifier",
              "start": 773,
              "end": 796,
              "decorators": [],
              "name": "photo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 778,
                "end": 796,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 780,
                  "end": 796,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 787,
                    "end": 796,
                    "left": {
                      "type": "Identifier",
                      "start": 787,
                      "end": 790,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 791,
                      "end": 796,
                      "decorators": [],
                      "name": "photo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 799,
              "end": 869,
              "properties": [
                {
                  "type": "Property",
                  "start": 805,
                  "end": 810,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 807,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 809,
                    "end": 810,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 816,
                  "end": 823,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 819,
                    "decorators": [],
                    "name": "url",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 821,
                    "end": 823,
                    "value": "",
                    "raw": "''"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 829,
                  "end": 835,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 829,
                    "end": 832,
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 834,
                    "end": 835,
                    "value": 1,
                    "raw": "1"
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 872,
      "end": 1033,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 879,
        "end": 1033,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 885,
            "end": 1032,
            "id": {
              "type": "Identifier",
              "start": 885,
              "end": 903,
              "decorators": [],
              "name": "myInstance",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 895,
                "end": 903,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 897,
                  "end": 903,
                  "typeName": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 903,
                    "decorators": [],
                    "name": "MyType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 906,
              "end": 1032,
              "properties": [
                {
                  "type": "Property",
                  "start": 912,
                  "end": 917,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 914,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 916,
                    "end": 917,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 923,
                  "end": 931,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 927,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 929,
                    "end": 931,
                    "value": "",
                    "raw": "''"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 937,
                  "end": 1030,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 937,
                    "end": 942,
                    "decorators": [],
                    "name": "photo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 944,
                    "end": 1030,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 954,
                        "end": 959,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 954,
                          "end": 956,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 958,
                          "end": 959,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 969,
                        "end": 976,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 969,
                          "end": 972,
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 974,
                          "end": 976,
                          "value": "",
                          "raw": "''"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 986,
                        "end": 992,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 986,
                          "end": 989,
                          "decorators": [],
                          "name": "xyz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 991,
                          "end": 992,
                          "value": 2,
                          "raw": "2"
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
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1092,
      "end": 1187,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1099,
        "end": 1187,
        "id": {
          "type": "Identifier",
          "start": 1104,
          "end": 1108,
          "decorators": [],
          "name": "View",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1108,
          "end": 1111,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1109,
              "end": 1110,
              "name": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
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
          "type": "TSMappedType",
          "start": 1114,
          "end": 1186,
          "key": {
            "type": "Identifier",
            "start": 1117,
            "end": 1118,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1122,
            "end": 1129,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1128,
              "end": 1129,
              "typeName": {
                "type": "Identifier",
                "start": 1128,
                "end": 1129,
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
            "type": "TSConditionalType",
            "start": 1132,
            "end": 1184,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 1132,
              "end": 1136,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1132,
                "end": 1133,
                "typeName": {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1133,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1134,
                "end": 1135,
                "typeName": {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1135,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 1145,
              "end": 1151
            },
            "trueType": {
              "type": "TSUnionType",
              "start": 1154,
              "end": 1174,
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1154,
                  "end": 1161
                },
                {
                  "type": "TSTypeReference",
                  "start": 1164,
                  "end": 1174,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1168,
                    "decorators": [],
                    "name": "View",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1168,
                    "end": 1174,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 1169,
                        "end": 1173,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1169,
                          "end": 1170,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1169,
                            "end": 1170,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1171,
                          "end": 1172,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1171,
                            "end": 1172,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSBooleanKeyword",
              "start": 1177,
              "end": 1184
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1189,
      "end": 1242,
      "id": {
        "type": "Identifier",
        "start": 1199,
        "end": 1204,
        "decorators": [],
        "name": "TypeC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1205,
        "end": 1242,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1211,
            "end": 1223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1211,
              "end": 1214,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1214,
              "end": 1222,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1216,
                "end": 1222
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1228,
            "end": 1240,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1228,
              "end": 1231,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1231,
              "end": 1239,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1233,
                "end": 1239
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
      "start": 1244,
      "end": 1295,
      "id": {
        "type": "Identifier",
        "start": 1254,
        "end": 1259,
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1260,
        "end": 1295,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1266,
            "end": 1278,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1266,
              "end": 1269,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1269,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1271,
                "end": 1277
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1283,
            "end": 1293,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1283,
              "end": 1286,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1286,
              "end": 1293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1288,
                "end": 1293,
                "typeName": {
                  "type": "Identifier",
                  "start": 1288,
                  "end": 1293,
                  "decorators": [],
                  "name": "TypeC",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1297,
      "end": 1349,
      "id": {
        "type": "Identifier",
        "start": 1307,
        "end": 1312,
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1313,
        "end": 1349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1319,
            "end": 1331,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1319,
              "end": 1322,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1322,
              "end": 1330,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1324,
                "end": 1330
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1336,
            "end": 1347,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1336,
              "end": 1339,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1339,
              "end": 1346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1341,
                "end": 1346,
                "typeName": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1346,
                  "decorators": [],
                  "name": "TypeB",
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
    {
      "type": "VariableDeclaration",
      "start": 1351,
      "end": 1373,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1355,
          "end": 1372,
          "id": {
            "type": "Identifier",
            "start": 1355,
            "end": 1372,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1359,
              "end": 1372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1361,
                "end": 1372,
                "typeName": {
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1365,
                  "decorators": [],
                  "name": "View",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1365,
                  "end": 1372,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1366,
                      "end": 1371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1366,
                        "end": 1371,
                        "decorators": [],
                        "name": "TypeA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1375,
      "end": 1417,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1375,
        "end": 1417,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1375,
          "end": 1379,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1382,
          "end": 1417,
          "properties": [
            {
              "type": "Property",
              "start": 1384,
              "end": 1393,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1384,
                "end": 1387,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 1389,
                "end": 1393,
                "value": true,
                "raw": "true"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1395,
              "end": 1404,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1395,
                "end": 1398,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 1400,
                "end": 1404,
                "value": true,
                "raw": "true"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1406,
              "end": 1415,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1406,
                "end": 1409,
                "decorators": [],
                "name": "boo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 1411,
                "end": 1415,
                "value": true,
                "raw": "true"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1419,
      "end": 1481,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1419,
        "end": 1481,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1419,
          "end": 1423,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1426,
          "end": 1481,
          "properties": [
            {
              "type": "Property",
              "start": 1428,
              "end": 1437,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1428,
                "end": 1431,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 1433,
                "end": 1437,
                "value": true,
                "raw": "true"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1439,
              "end": 1479,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1439,
                "end": 1442,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 1444,
                "end": 1479,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1446,
                    "end": 1455,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1446,
                      "end": 1449,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1451,
                      "end": 1455,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1457,
                    "end": 1466,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1457,
                      "end": 1460,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1462,
                      "end": 1466,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1468,
                    "end": 1477,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1468,
                      "end": 1471,
                      "decorators": [],
                      "name": "boo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1473,
                      "end": 1477,
                      "value": true,
                      "raw": "true"
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
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
