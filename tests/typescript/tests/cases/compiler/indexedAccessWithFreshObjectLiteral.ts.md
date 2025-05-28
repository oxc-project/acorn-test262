__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 691,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 24,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 24,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 18,
              "end": 24
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 87,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 30,
            "end": 85,
            "argument": {
              "type": "MemberExpression",
              "start": 37,
              "end": 85,
              "object": {
                "type": "ObjectExpression",
                "start": 37,
                "end": 81,
                "properties": [
                  {
                    "type": "Property",
                    "start": 45,
                    "end": 49,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 48,
                      "end": 49,
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
                    "start": 57,
                    "end": 62,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 62,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 70,
                    "end": 77,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 73,
                      "end": 77,
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
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 84,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 89,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 101,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 116,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 116,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 107,
              "end": 116,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 107,
                  "end": 110,
                  "literal": {
                    "type": "Literal",
                    "start": 107,
                    "end": 110,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 113,
                  "end": 116,
                  "literal": {
                    "type": "Literal",
                    "start": 113,
                    "end": 116,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 180,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 122,
            "end": 178,
            "argument": {
              "type": "MemberExpression",
              "start": 129,
              "end": 178,
              "object": {
                "type": "ObjectExpression",
                "start": 129,
                "end": 174,
                "properties": [
                  {
                    "type": "Property",
                    "start": 137,
                    "end": 141,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
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
                    "start": 149,
                    "end": 154,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 152,
                      "end": 154,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 162,
                    "end": 170,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 165,
                      "end": 170,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 175,
                "end": 177,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 194,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 209,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 209,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 200,
              "end": 209,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 200,
                  "end": 203,
                  "literal": {
                    "type": "Literal",
                    "start": 200,
                    "end": 203,
                    "value": "1",
                    "raw": "'1'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 206,
                  "end": 209,
                  "literal": {
                    "type": "Literal",
                    "start": 206,
                    "end": 209,
                    "value": "2",
                    "raw": "'2'"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 273,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 215,
            "end": 271,
            "argument": {
              "type": "MemberExpression",
              "start": 222,
              "end": 271,
              "object": {
                "type": "ObjectExpression",
                "start": 222,
                "end": 267,
                "properties": [
                  {
                    "type": "Property",
                    "start": 230,
                    "end": 234,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 230,
                      "end": 231,
                      "value": 1,
                      "raw": "1"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 233,
                      "end": 234,
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
                    "start": 242,
                    "end": 247,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 242,
                      "end": 243,
                      "value": 2,
                      "raw": "2"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 245,
                      "end": 247,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 255,
                    "end": 263,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 255,
                      "end": 256,
                      "value": 3,
                      "raw": "3"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 258,
                      "end": 263,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 268,
                "end": 270,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 287,
        "decorators": [],
        "name": "qux",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 289,
          "end": 298,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 291,
            "end": 298,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 293,
              "end": 298,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 293,
                  "end": 294,
                  "literal": {
                    "type": "Literal",
                    "start": 293,
                    "end": 294,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 297,
                  "end": 298,
                  "literal": {
                    "type": "Literal",
                    "start": 297,
                    "end": 298,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 300,
        "end": 362,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 304,
            "end": 360,
            "argument": {
              "type": "MemberExpression",
              "start": 311,
              "end": 360,
              "object": {
                "type": "ObjectExpression",
                "start": 311,
                "end": 356,
                "properties": [
                  {
                    "type": "Property",
                    "start": 319,
                    "end": 323,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 319,
                      "end": 320,
                      "value": 1,
                      "raw": "1"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 322,
                      "end": 323,
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
                    "start": 331,
                    "end": 336,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 331,
                      "end": 332,
                      "value": 2,
                      "raw": "2"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 334,
                      "end": 336,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 344,
                    "end": 352,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 344,
                      "end": 345,
                      "value": 3,
                      "raw": "3"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 347,
                      "end": 352,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 357,
                "end": 359,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "decorators": [],
        "name": "quux",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 379,
          "end": 398,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 381,
            "end": 398,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 383,
              "end": 398,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 383,
                  "end": 386,
                  "literal": {
                    "type": "Literal",
                    "start": 383,
                    "end": 386,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 389,
                  "end": 392,
                  "literal": {
                    "type": "Literal",
                    "start": 389,
                    "end": 392,
                    "value": "b",
                    "raw": "'b'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 395,
                  "end": 398,
                  "literal": {
                    "type": "Literal",
                    "start": 395,
                    "end": 398,
                    "value": "z",
                    "raw": "'z'"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 400,
        "end": 462,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 404,
            "end": 460,
            "argument": {
              "type": "MemberExpression",
              "start": 411,
              "end": 460,
              "object": {
                "type": "ObjectExpression",
                "start": 411,
                "end": 456,
                "properties": [
                  {
                    "type": "Property",
                    "start": 419,
                    "end": 423,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 422,
                      "end": 423,
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
                    "start": 431,
                    "end": 436,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 432,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 434,
                      "end": 436,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 444,
                    "end": 452,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 445,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 447,
                      "end": 452,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 457,
                "end": 459,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 464,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 478,
        "decorators": [],
        "name": "corge",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 479,
          "end": 489,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 481,
            "end": 489,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 483,
              "end": 489
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 491,
        "end": 576,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 495,
            "end": 574,
            "argument": {
              "type": "MemberExpression",
              "start": 502,
              "end": 574,
              "object": {
                "type": "TSAsExpression",
                "start": 503,
                "end": 569,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 503,
                  "end": 534,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 511,
                      "end": 517,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 511,
                        "end": 512,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 514,
                        "end": 517,
                        "value": 123,
                        "raw": "123"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 525,
                      "end": 530,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 528,
                        "end": 530,
                        "value": "",
                        "raw": "\"\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 538,
                  "end": 569,
                  "typeName": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 544,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 544,
                    "end": 569,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 545,
                        "end": 551
                      },
                      {
                        "type": "TSUnionType",
                        "start": 553,
                        "end": 568,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 553,
                            "end": 559
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 562,
                            "end": 568
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "start": 571,
                "end": 573,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 578,
      "end": 691,
      "id": {
        "type": "Identifier",
        "start": 587,
        "end": 593,
        "decorators": [],
        "name": "grault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 594,
          "end": 604,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 596,
            "end": 604,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 598,
              "end": 604
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 606,
        "end": 691,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 610,
            "end": 689,
            "argument": {
              "type": "MemberExpression",
              "start": 617,
              "end": 689,
              "object": {
                "type": "TSAsExpression",
                "start": 618,
                "end": 684,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 618,
                  "end": 649,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 626,
                      "end": 632,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 629,
                        "end": 632,
                        "value": 123,
                        "raw": "123"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 640,
                      "end": 645,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 640,
                        "end": 641,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 643,
                        "end": 645,
                        "value": "",
                        "raw": "\"\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 653,
                  "end": 684,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 655,
                      "end": 683,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 656,
                          "end": 665,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 657,
                            "end": 665,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 659,
                              "end": 665
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 666,
                        "end": 683,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 668,
                          "end": 683,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 668,
                              "end": 674
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 677,
                              "end": 683
                            }
                          ]
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 686,
                "end": 688,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
