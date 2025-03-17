__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 703,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 36,
          "end": 45,
          "left": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 151,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 100,
            "end": 120,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 104,
                "end": 119,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 115,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "var",
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 166,
          "end": 190,
          "left": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 172,
            "end": 190,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 173,
                "end": 182,
                "left": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 187,
              "end": 190,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 298,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 265,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 264,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 260,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "var",
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
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 300,
      "end": 396,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 311,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 313,
          "end": 322,
          "left": {
            "type": "Identifier",
            "start": 313,
            "end": 316,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 319,
            "end": 322,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 324,
          "end": 331,
          "left": {
            "type": "Identifier",
            "start": 324,
            "end": 327,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 330,
            "end": 331,
            "value": 2,
            "raw": "2"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 398,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "name": "f4",
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
          "start": 411,
          "end": 414,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 416,
          "end": 425,
          "left": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 447,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 458,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 460,
          "end": 465,
          "left": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 485,
      "end": 533,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 498,
          "end": 511,
          "left": {
            "type": "Identifier",
            "start": 498,
            "end": 503,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 506,
            "end": 511,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "async",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 535,
      "end": 596,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 546,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 547,
          "end": 566,
          "properties": [
            {
              "type": "Property",
              "start": 548,
              "end": 558,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 549,
                "end": 552,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 555,
                "end": 558,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
      "body": {
        "type": "BlockStatement",
        "start": 568,
        "end": 596,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 574,
            "end": 594,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 578,
                "end": 593,
                "id": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 589,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 581,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 583,
                      "end": 589
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 598,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 607,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 608,
        "end": 659,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 614,
            "end": 657,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 614,
              "end": 625,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 625,
              "end": 657,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "left": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 637,
                      "end": 639,
                      "value": 12,
                      "raw": "12"
                    },
                    "decorators": [],
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
                    "left": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 649,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 653,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 655,
                "end": 657,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 661,
      "end": 702,
      "id": {
        "type": "Identifier",
        "start": 670,
        "end": 672,
        "name": "f8",
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
          "start": 673,
          "end": 685,
          "name": "foo1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 677,
            "end": 685,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 687,
          "end": 697,
          "left": {
            "type": "Identifier",
            "start": 687,
            "end": 690,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 693,
            "end": 697,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 699,
        "end": 702,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
