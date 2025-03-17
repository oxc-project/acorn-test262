__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1588,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "foreword",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Book",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 79,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 69,
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "Cover",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 95,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 95,
                  "decorators": [],
                  "name": "Book",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 98,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 100,
                "end": 115,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 107,
                  "decorators": [],
                  "name": "forword",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 115,
                  "raw": "\"oops\"",
                  "value": "oops"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 141,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 141,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 128,
                "end": 141,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 128,
                    "end": 132,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 132,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 144,
            "end": 164,
            "properties": [
              {
                "type": "Property",
                "start": 146,
                "end": 162,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 154,
                  "decorators": [],
                  "name": "foreward",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 156,
                  "end": 162,
                  "raw": "\"nope\"",
                  "value": "nope"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 190,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 190,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 175,
                "end": 190,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 179,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 179,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 183,
                    "end": 189,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 183,
                      "end": 187,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 187,
                        "decorators": [],
                        "name": "Book",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 193,
            "end": 238,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 194,
                "end": 215,
                "properties": [
                  {
                    "type": "Property",
                    "start": 196,
                    "end": 213,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 204,
                      "decorators": [],
                      "name": "foreword",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 206,
                      "end": 213,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 217,
                "end": 237,
                "properties": [
                  {
                    "type": "Property",
                    "start": 219,
                    "end": 235,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 227,
                      "decorators": [],
                      "name": "forwards",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 229,
                      "end": 235,
                      "raw": "\"back\"",
                      "value": "back"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 261,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 261,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 249,
                "end": 261,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 249,
                    "end": 253,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 253,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 261,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 261,
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 264,
            "end": 298,
            "properties": [
              {
                "type": "Property",
                "start": 266,
                "end": 280,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 274,
                  "decorators": [],
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 276,
                  "end": 280,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              },
              {
                "type": "Property",
                "start": 282,
                "end": 296,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 288,
                  "decorators": [],
                  "name": "colour",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 290,
                  "end": 296,
                  "raw": "\"blue\"",
                  "value": "blue"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 321,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 321,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 309,
                "end": 321,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 309,
                    "end": 313,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 313,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 316,
                    "end": 321,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 321,
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 324,
            "end": 357,
            "properties": [
              {
                "type": "Property",
                "start": 326,
                "end": 340,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 334,
                  "decorators": [],
                  "name": "foreward",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 336,
                  "end": 340,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              },
              {
                "type": "Property",
                "start": 342,
                "end": 355,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 347,
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 349,
                  "end": 355,
                  "raw": "\"blue\"",
                  "value": "blue"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 380,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 380,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 368,
                "end": 380,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 368,
                    "end": 372,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 372,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 375,
                    "end": 380,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 380,
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 383,
            "end": 430,
            "properties": [
              {
                "type": "Property",
                "start": 385,
                "end": 399,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 393,
                  "decorators": [],
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 395,
                  "end": 399,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              },
              {
                "type": "Property",
                "start": 401,
                "end": 414,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 406,
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 408,
                  "end": 414,
                  "raw": "\"blue\"",
                  "value": "blue"
                }
              },
              {
                "type": "Property",
                "start": 416,
                "end": 428,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 421,
                  "decorators": [],
                  "name": "price",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 423,
                  "end": 428,
                  "raw": "10.99",
                  "value": 10.99
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 489,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 454,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 454,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 441,
                "end": 454,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 445,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 445,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 448,
                    "end": 454
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 457,
            "end": 489,
            "properties": [
              {
                "type": "Property",
                "start": 459,
                "end": 473,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 467,
                  "decorators": [],
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 469,
                  "end": 473,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              },
              {
                "type": "Property",
                "start": 475,
                "end": 487,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 480,
                  "decorators": [],
                  "name": "price",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 482,
                  "end": 487,
                  "raw": "10.99",
                  "value": 10.99
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 537,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 515,
            "decorators": [],
            "name": "b8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 515,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 500,
                "end": 515,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 500,
                    "end": 505,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 505,
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 508,
                    "end": 515,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 508,
                      "end": 513,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 513,
                        "decorators": [],
                        "name": "Cover",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 518,
            "end": 537,
            "properties": [
              {
                "type": "Property",
                "start": 520,
                "end": 535,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 527,
                  "decorators": [],
                  "name": "couleur",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 530,
                  "end": 535,
                  "raw": "\"non\"",
                  "value": "non"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 540,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 544,
          "end": 590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 561,
            "decorators": [],
            "name": "b9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 561,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 548,
                "end": 561,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 548,
                    "end": 552,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 552,
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 555,
                    "end": 561,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 555,
                      "end": 559,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 559,
                        "decorators": [],
                        "name": "Book",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 564,
            "end": 590,
            "properties": [
              {
                "type": "Property",
                "start": 566,
                "end": 588,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 576,
                  "decorators": [],
                  "name": "forewarned",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 578,
                  "end": 588,
                  "raw": "\"still no\"",
                  "value": "still no"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 593,
      "end": 638,
      "body": {
        "type": "TSInterfaceBody",
        "start": 611,
        "end": 638,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 617,
            "end": 636,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 618,
                "end": 627,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 619,
                  "end": 627,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 630,
                "end": 635,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 635,
                  "decorators": [],
                  "name": "Cover",
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
        "start": 603,
        "end": 610,
        "decorators": [],
        "name": "Indexed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 640,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 679,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 656,
            "decorators": [],
            "name": "b10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 649,
                "end": 656,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 656,
                  "decorators": [],
                  "name": "Indexed",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 659,
            "end": 679,
            "properties": [
              {
                "type": "Property",
                "start": 661,
                "end": 667,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 661,
                  "end": 662,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 664,
                  "end": 667,
                  "properties": []
                }
              },
              {
                "type": "Property",
                "start": 669,
                "end": 677,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 669,
                  "end": 672,
                  "raw": "'1'",
                  "value": "1"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 674,
                  "end": 677,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 688,
      "end": 733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 692,
          "end": 732,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 704,
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 695,
              "end": 704,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 697,
                "end": 704,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 704,
                  "decorators": [],
                  "name": "Indexed",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 707,
            "end": 732,
            "properties": [
              {
                "type": "Property",
                "start": 709,
                "end": 730,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 709,
                  "end": 710,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 712,
                  "end": 730,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 714,
                      "end": 728,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 720,
                        "decorators": [],
                        "name": "colour",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 722,
                        "end": 728,
                        "raw": "\"blue\"",
                        "value": "blue"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 803,
      "end": 1587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 835,
        "end": 1587,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 891,
            "end": 924,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 897,
                "end": 923,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 904,
                  "decorators": [],
                  "name": "obj1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 901,
                    "end": 904,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 903,
                      "end": 904,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 903,
                        "end": 904,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 907,
                  "end": 923,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 909,
                      "end": 921,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 909,
                        "end": 913,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 915,
                        "end": 921,
                        "raw": "\"test\"",
                        "value": "test"
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
            "start": 998,
            "end": 1063,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1004,
                "end": 1062,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1031,
                  "decorators": [],
                  "name": "obj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1008,
                    "end": 1031,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 1010,
                      "end": 1031,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1010,
                          "end": 1011,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1010,
                            "end": 1011,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1014,
                          "end": 1031,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1016,
                              "end": 1029,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1016,
                                "end": 1020,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1020,
                                "end": 1029,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1022,
                                  "end": 1029
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1034,
                  "end": 1062,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1036,
                      "end": 1048,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1040,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1042,
                        "end": 1048,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1050,
                      "end": 1060,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1054,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1056,
                        "end": 1060,
                        "raw": "true",
                        "value": true
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
            "start": 1134,
            "end": 1199,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1140,
                "end": 1198,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1167,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1144,
                    "end": 1167,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1146,
                      "end": 1167,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1146,
                          "end": 1147,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1150,
                          "end": 1167,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1152,
                              "end": 1165,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1152,
                                "end": 1156,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1156,
                                "end": 1165,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1158,
                                  "end": 1165
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1170,
                  "end": 1198,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1172,
                      "end": 1184,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1172,
                        "end": 1176,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1178,
                        "end": 1184,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1186,
                      "end": 1196,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1186,
                        "end": 1190,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1192,
                        "end": 1196,
                        "raw": "true",
                        "value": true
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
            "start": 1270,
            "end": 1354,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1276,
                "end": 1353,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1322,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1280,
                    "end": 1322,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1282,
                      "end": 1322,
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "start": 1282,
                          "end": 1303,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 1282,
                              "end": 1283,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1283,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 1286,
                              "end": 1303,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1288,
                                  "end": 1301,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1288,
                                    "end": 1292,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1292,
                                    "end": 1301,
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1294,
                                      "end": 1301
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1306,
                          "end": 1322,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1308,
                              "end": 1320,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1308,
                                "end": 1312,
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
                                "start": 1312,
                                "end": 1320,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1314,
                                  "end": 1320
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1325,
                  "end": 1353,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1327,
                      "end": 1339,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1327,
                        "end": 1331,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1333,
                        "end": 1339,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1341,
                      "end": 1351,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1341,
                        "end": 1345,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1347,
                        "end": 1351,
                        "raw": "true",
                        "value": true
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
            "start": 1426,
            "end": 1475,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1432,
                "end": 1475,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1460,
                  "decorators": [],
                  "name": "obj5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1436,
                    "end": 1460,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1438,
                      "end": 1460,
                      "types": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1438,
                          "end": 1444
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1447,
                          "end": 1460,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1449,
                              "end": 1458,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1449,
                                "end": 1450,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1450,
                                "end": 1458,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1452,
                                  "end": 1458
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1463,
                  "end": 1475,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1465,
                      "end": 1473,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1465,
                        "end": 1466,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1468,
                        "end": 1473,
                        "raw": "'abc'",
                        "value": "abc"
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
            "start": 1536,
            "end": 1585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1542,
                "end": 1585,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1542,
                  "end": 1570,
                  "decorators": [],
                  "name": "obj6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1546,
                    "end": 1570,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 1548,
                      "end": 1570,
                      "types": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1548,
                          "end": 1554
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1557,
                          "end": 1570,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1559,
                              "end": 1568,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1559,
                                "end": 1560,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1560,
                                "end": 1568,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1562,
                                  "end": 1568
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1573,
                  "end": 1585,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1575,
                      "end": 1583,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1575,
                        "end": 1576,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1578,
                        "end": 1583,
                        "raw": "'abc'",
                        "value": "abc"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 816,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 816,
        "end": 832,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 817,
            "end": 831,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 827,
              "end": 831,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 827,
                "end": 831,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 817,
              "end": 818,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
