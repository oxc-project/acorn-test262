__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 702,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 18,
            "end": 20,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 36,
          "end": 45,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 151,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 100,
            "end": 120,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 104,
                "end": 119,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 115,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 118,
                  "end": 119,
                  "value": 2,
                  "raw": "2"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 136,
            "argument": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 166,
          "end": 190,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 172,
            "end": 190,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 173,
                "end": 182,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 187,
              "end": 190,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 298,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 265,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 264,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 260,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 263,
                  "end": 264,
                  "value": 2,
                  "raw": "2"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 270,
            "end": 283,
            "argument": {
              "type": "CallExpression",
              "start": 277,
              "end": 282,
              "callee": {
                "type": "Identifier",
                "start": 277,
                "end": 280,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 300,
      "end": 396,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 311,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 313,
          "end": 322,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 313,
            "end": 316,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 319,
            "end": 322,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 324,
          "end": 331,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 324,
            "end": 327,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 330,
            "end": 331,
            "value": 2,
            "raw": "2"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 333,
        "end": 396,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 383,
            "end": 394,
            "argument": {
              "type": "Identifier",
              "start": 390,
              "end": 393,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 398,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "decorators": [],
        "name": "f4",
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
          "start": 411,
          "end": 414,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 416,
          "end": 425,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 427,
        "end": 445,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 433,
            "end": 443,
            "argument": {
              "type": "Identifier",
              "start": 440,
              "end": 443,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 447,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 458,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 460,
          "end": 465,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 467,
        "end": 483,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 473,
            "end": 481,
            "argument": {
              "type": "Identifier",
              "start": 480,
              "end": 481,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 485,
      "end": 533,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 498,
          "end": 511,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 498,
            "end": 503,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 506,
            "end": 511,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 513,
        "end": 533,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 519,
            "end": 531,
            "argument": {
              "type": "Identifier",
              "start": 526,
              "end": 531,
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 535,
      "end": 596,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 546,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 547,
          "end": 566,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 548,
              "end": 558,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 549,
                "end": 552,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 555,
                "end": 558,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 559,
            "end": 566,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 561,
              "end": 566,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 561,
                "end": 564
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 568,
        "end": 596,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 574,
            "end": 594,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 578,
                "end": 593,
                "id": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 589,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 581,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 583,
                      "end": 589
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 592,
                  "end": 593,
                  "value": 2,
                  "raw": "2"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 598,
      "end": 659,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 607,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 608,
        "end": 659,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 614,
            "end": 657,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 614,
              "end": 625,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 625,
              "end": 657,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 626,
                  "end": 639,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 633,
                    "end": 639,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 637,
                      "end": 639,
                      "value": 12,
                      "raw": "12"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 641,
                  "end": 653,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 648,
                    "end": 653,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 649,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 653,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 655,
                "end": 657,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 661,
      "end": 702,
      "id": {
        "type": "Identifier",
        "start": 670,
        "end": 672,
        "decorators": [],
        "name": "f8",
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
          "start": 673,
          "end": 685,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 677,
            "end": 685,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 687,
          "end": 697,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 687,
            "end": 690,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 693,
            "end": 697,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 699,
        "end": 702,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
