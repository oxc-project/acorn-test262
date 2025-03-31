__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 178,
  "end": 858,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 190,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 192,
            "end": 203,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 197,
                "end": 203
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
      "start": 206,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 226,
          "end": 227,
          "expression": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 228,
        "end": 244,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 230,
            "end": 242,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 233,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 241,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
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
      "start": 245,
      "end": 284,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 256,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 265,
          "end": 266,
          "expression": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 267,
        "end": 284,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 282,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 281,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 274,
                "end": 281
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
      "start": 285,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 293,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 293,
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 303,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 303,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 303,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "name": "B",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 316,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 328,
        "name": "foo",
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
          "start": 338,
          "end": 342,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 342,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 341,
              "end": 342,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
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
        {
          "type": "Identifier",
          "start": 344,
          "end": 348,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 348,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 347,
              "end": 348,
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
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
        },
        {
          "type": "Identifier",
          "start": 350,
          "end": 354,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 351,
            "end": 354,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "name": "V",
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
      "body": {
        "type": "BlockStatement",
        "start": 359,
        "end": 372,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 361,
            "end": 370,
            "argument": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 328,
        "end": 337,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 329,
            "end": 330,
            "name": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 333,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 336,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "name": "V",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 355,
        "end": 358,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 357,
          "end": 358,
          "typeName": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 467,
      "expression": {
        "type": "CallExpression",
        "start": 453,
        "end": 466,
        "callee": {
          "type": "Identifier",
          "start": 453,
          "end": 456,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 457,
            "end": 458,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 460,
            "end": 461,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 463,
            "end": 465,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 524,
      "expression": {
        "type": "CallExpression",
        "start": 468,
        "end": 523,
        "callee": {
          "type": "Identifier",
          "start": 468,
          "end": 471,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 472,
            "end": 480,
            "properties": [
              {
                "type": "Property",
                "start": 474,
                "end": 478,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 475,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 477,
                  "end": 478,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 482,
            "end": 497,
            "properties": [
              {
                "type": "Property",
                "start": 484,
                "end": 488,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 487,
                  "end": 488,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 490,
                "end": 495,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 493,
                  "end": 495,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 499,
            "end": 522,
            "properties": [
              {
                "type": "Property",
                "start": 501,
                "end": 505,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 504,
                  "end": 505,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 507,
                "end": 511,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 508,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 510,
                  "end": 511,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 513,
                "end": 520,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 516,
                  "end": 520,
                  "value": true,
                  "raw": "true"
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
    },
    {
      "type": "ExpressionStatement",
      "start": 525,
      "end": 538,
      "expression": {
        "type": "CallExpression",
        "start": 525,
        "end": 537,
        "callee": {
          "type": "Identifier",
          "start": 525,
          "end": 528,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 532,
            "end": 533,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 580,
      "expression": {
        "type": "CallExpression",
        "start": 539,
        "end": 579,
        "callee": {
          "type": "Identifier",
          "start": 539,
          "end": 542,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 546,
            "end": 575,
            "properties": [
              {
                "type": "Property",
                "start": 548,
                "end": 554,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 551,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 553,
                  "end": 554,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 556,
                "end": 563,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 559,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 561,
                  "end": 563,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 565,
                "end": 573,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 567,
                  "name": "hm",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 569,
                  "end": 573,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 651,
      "expression": {
        "type": "CallExpression",
        "start": 581,
        "end": 650,
        "callee": {
          "type": "Identifier",
          "start": 581,
          "end": 584,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 585,
            "end": 614,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 586,
                "end": 595,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 587,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 597,
                "end": 606,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 598,
                  "end": 606,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 600,
                    "end": 606
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 611,
              "end": 614,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 616,
            "end": 638,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 617,
                "end": 618,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 620,
                "end": 630,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 621,
                  "end": 630,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 623,
                    "end": 630
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 635,
              "end": 638,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 640,
            "end": 649,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 646,
              "end": 649,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 653,
      "end": 740,
      "id": {
        "type": "Identifier",
        "start": 662,
        "end": 666,
        "name": "foo2",
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
          "start": 706,
          "end": 710,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 707,
            "end": 710,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 709,
              "end": 710,
              "typeName": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
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
        {
          "type": "Identifier",
          "start": 712,
          "end": 716,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 716,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 715,
              "end": 716,
              "typeName": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
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
        },
        {
          "type": "Identifier",
          "start": 718,
          "end": 722,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 719,
            "end": 722,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 721,
              "end": 722,
              "typeName": {
                "type": "Identifier",
                "start": 721,
                "end": 722,
                "name": "V",
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
      "body": {
        "type": "BlockStatement",
        "start": 727,
        "end": 740,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 729,
            "end": 738,
            "argument": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 666,
        "end": 705,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 667,
            "end": 678,
            "name": {
              "type": "Identifier",
              "start": 667,
              "end": 668,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 677,
              "end": 678,
              "typeName": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "name": "A",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 680,
            "end": 691,
            "name": {
              "type": "Identifier",
              "start": 680,
              "end": 681,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 690,
              "end": 691,
              "typeName": {
                "type": "Identifier",
                "start": 690,
                "end": 691,
                "name": "A",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 693,
            "end": 704,
            "name": {
              "type": "Identifier",
              "start": 693,
              "end": 694,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 703,
              "end": 704,
              "typeName": {
                "type": "Identifier",
                "start": 703,
                "end": 704,
                "name": "A",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 723,
        "end": 726,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 725,
          "end": 726,
          "typeName": {
            "type": "Identifier",
            "start": 725,
            "end": 726,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 831,
      "end": 844,
      "expression": {
        "type": "CallExpression",
        "start": 831,
        "end": 843,
        "callee": {
          "type": "Identifier",
          "start": 831,
          "end": 834,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 835,
            "end": 836,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 838,
            "end": 839,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 841,
            "end": 842,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 845,
      "end": 858,
      "expression": {
        "type": "CallExpression",
        "start": 845,
        "end": 857,
        "callee": {
          "type": "Identifier",
          "start": 845,
          "end": 848,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 849,
            "end": 850,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 852,
            "end": 853,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 855,
            "end": 856,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
