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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Book",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 38,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "name": "foreword",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
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
      "start": 42,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "name": "Cover",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 79,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 69,
              "name": "color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
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
      "start": 83,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 95,
                  "name": "Book",
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
            "start": 98,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 100,
                "end": 115,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 107,
                  "name": "forword",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 115,
                  "value": "oops",
                  "raw": "\"oops\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 141,
            "name": "b2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 132,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 154,
                  "name": "foreward",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 156,
                  "end": 162,
                  "value": "nope",
                  "raw": "\"nope\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 190,
            "name": "b3",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 179,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSArrayType",
                    "start": 183,
                    "end": 189,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 183,
                      "end": 187,
                      "typeName": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 187,
                        "name": "Book",
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
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 204,
                      "name": "foreword",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 206,
                      "end": 213,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 227,
                      "name": "forwards",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 229,
                      "end": 235,
                      "value": "back",
                      "raw": "\"back\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 261,
            "name": "b4",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 253,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 261,
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 261,
                      "name": "Cover",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 274,
                  "name": "foreword",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 276,
                  "end": 280,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 282,
                "end": 296,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 288,
                  "name": "colour",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 290,
                  "end": 296,
                  "value": "blue",
                  "raw": "\"blue\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 321,
            "name": "b5",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 313,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 316,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 321,
                      "name": "Cover",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 334,
                  "name": "foreward",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 336,
                  "end": 340,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 342,
                "end": 355,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 347,
                  "name": "color",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 349,
                  "end": 355,
                  "value": "blue",
                  "raw": "\"blue\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 380,
            "name": "b6",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 372,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 375,
                    "end": 380,
                    "typeName": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 380,
                      "name": "Cover",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 393,
                  "name": "foreword",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 395,
                  "end": 399,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 401,
                "end": 414,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 406,
                  "name": "color",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 408,
                  "end": 414,
                  "value": "blue",
                  "raw": "\"blue\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 416,
                "end": 428,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 421,
                  "name": "price",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 423,
                  "end": 428,
                  "value": 10.99,
                  "raw": "10.99"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 454,
            "name": "b7",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 445,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 448,
                    "end": 454
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 467,
                  "name": "foreword",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 469,
                  "end": 473,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 475,
                "end": 487,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 480,
                  "name": "price",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 482,
                  "end": 487,
                  "value": 10.99,
                  "raw": "10.99"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 515,
            "name": "b8",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 505,
                      "name": "Cover",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSArrayType",
                    "start": 508,
                    "end": 515,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 508,
                      "end": 513,
                      "typeName": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 513,
                        "name": "Cover",
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
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 527,
                  "name": "couleur",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 530,
                  "end": 535,
                  "value": "non",
                  "raw": "\"non\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 561,
            "name": "b9",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 552,
                      "name": "Book",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSArrayType",
                    "start": 555,
                    "end": 561,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 555,
                      "end": 559,
                      "typeName": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 559,
                        "name": "Book",
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
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 576,
                  "name": "forewarned",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 578,
                  "end": 588,
                  "value": "still no",
                  "raw": "\"still no\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 593,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 610,
        "name": "Indexed",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 611,
        "end": 638,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 617,
            "end": 636,
            "parameters": [
              {
                "type": "Identifier",
                "start": 618,
                "end": 627,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 619,
                  "end": 627,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 630,
                "end": 635,
                "typeName": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 635,
                  "name": "Cover",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 656,
            "name": "b10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 649,
                "end": 656,
                "typeName": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 656,
                  "name": "Indexed",
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
            "start": 659,
            "end": 679,
            "properties": [
              {
                "type": "Property",
                "start": 661,
                "end": 667,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 661,
                  "end": 662,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 664,
                  "end": 667,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 669,
                "end": 677,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 669,
                  "end": 672,
                  "value": "1",
                  "raw": "'1'"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 674,
                  "end": 677,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 704,
            "name": "b11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 695,
              "end": 704,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 697,
                "end": 704,
                "typeName": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 704,
                  "name": "Indexed",
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
            "start": 707,
            "end": 732,
            "properties": [
              {
                "type": "Property",
                "start": 709,
                "end": 730,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 709,
                  "end": 710,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 712,
                  "end": 730,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 714,
                      "end": 728,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 720,
                        "name": "colour",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 722,
                        "end": 728,
                        "value": "blue",
                        "raw": "\"blue\""
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 803,
      "end": 1587,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 816,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 904,
                  "name": "obj1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 901,
                    "end": 904,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 903,
                      "end": 904,
                      "typeName": {
                        "type": "Identifier",
                        "start": 903,
                        "end": 904,
                        "name": "T",
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
                  "start": 907,
                  "end": 923,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 909,
                      "end": 921,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 909,
                        "end": 913,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 915,
                        "end": 921,
                        "value": "test",
                        "raw": "\"test\""
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
            "start": 998,
            "end": 1063,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1004,
                "end": 1062,
                "id": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1031,
                  "name": "obj2",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1010,
                            "end": 1011,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1016,
                                "end": 1020,
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1020,
                                "end": 1029,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1022,
                                  "end": 1029
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
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1040,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1042,
                        "end": 1048,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1050,
                      "end": 1060,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1054,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1056,
                        "end": 1060,
                        "value": true,
                        "raw": "true"
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
            "start": 1134,
            "end": 1199,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1140,
                "end": 1198,
                "id": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1167,
                  "name": "obj3",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1152,
                                "end": 1156,
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1156,
                                "end": 1165,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1158,
                                  "end": 1165
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
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1172,
                        "end": 1176,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1178,
                        "end": 1184,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1186,
                      "end": 1196,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1186,
                        "end": 1190,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1192,
                        "end": 1196,
                        "value": true,
                        "raw": "true"
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
            "start": 1270,
            "end": 1354,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1276,
                "end": 1353,
                "id": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1322,
                  "name": "obj4",
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1283,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1288,
                                    "end": 1292,
                                    "name": "prop",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1292,
                                    "end": 1301,
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1294,
                                      "end": 1301
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1308,
                                "end": 1312,
                                "name": "name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1312,
                                "end": 1320,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1314,
                                  "end": 1320
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
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1327,
                        "end": 1331,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1333,
                        "end": 1339,
                        "value": "test",
                        "raw": "\"test\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1341,
                      "end": 1351,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1341,
                        "end": 1345,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1347,
                        "end": 1351,
                        "value": true,
                        "raw": "true"
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
            "start": 1426,
            "end": 1475,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1432,
                "end": 1475,
                "id": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1460,
                  "name": "obj5",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1449,
                                "end": 1450,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1450,
                                "end": 1458,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1452,
                                  "end": 1458
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
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1465,
                        "end": 1466,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1468,
                        "end": 1473,
                        "value": "abc",
                        "raw": "'abc'"
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
            "start": 1536,
            "end": 1585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1542,
                "end": 1585,
                "id": {
                  "type": "Identifier",
                  "start": 1542,
                  "end": 1570,
                  "name": "obj6",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1559,
                                "end": 1560,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1560,
                                "end": 1568,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1562,
                                  "end": 1568
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
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1575,
                        "end": 1576,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1578,
                        "end": 1583,
                        "value": "abc",
                        "raw": "'abc'"
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 816,
        "end": 832,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 817,
            "end": 831,
            "name": {
              "type": "Identifier",
              "start": 817,
              "end": 818,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 827,
              "end": 831,
              "typeName": {
                "type": "Identifier",
                "start": 827,
                "end": 831,
                "name": "IFoo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
