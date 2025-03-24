__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 1557,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 97,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              }
            },
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
      "start": 109,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "f",
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
          "start": 153,
          "end": 157,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 154,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 156,
              "end": 157,
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
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
          "start": 159,
          "end": 163,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
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
          "start": 165,
          "end": 169,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 169,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 169,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
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
        "start": 171,
        "end": 610,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 187,
            "end": 208,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 191,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 195,
                  "end": 207,
                  "test": {
                    "type": "Literal",
                    "start": 195,
                    "end": 199,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 213,
            "end": 234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 217,
                "end": 233,
                "id": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 221,
                  "end": 233,
                  "test": {
                    "type": "Literal",
                    "start": 221,
                    "end": 225,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 250,
            "end": 272,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 254,
                "end": 271,
                "id": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 259,
                  "end": 271,
                  "test": {
                    "type": "Literal",
                    "start": 259,
                    "end": 263,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 267,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 299,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 281,
                "end": 298,
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 283,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 286,
                  "end": 298,
                  "test": {
                    "type": "Literal",
                    "start": 286,
                    "end": 290,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 315,
            "end": 337,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 336,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 324,
                  "end": 336,
                  "test": {
                    "type": "Literal",
                    "start": 324,
                    "end": 328,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 336,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 342,
            "end": 364,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 363,
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 348,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 351,
                  "end": 363,
                  "test": {
                    "type": "Literal",
                    "start": 351,
                    "end": 355,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 380,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 409,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 386,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 389,
                  "end": 409,
                  "test": {
                    "type": "Literal",
                    "start": 389,
                    "end": 393,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 397,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 400,
                    "end": 409,
                    "callee": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 407,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 415,
            "end": 445,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 419,
                "end": 444,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 421,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 424,
                  "end": 444,
                  "test": {
                    "type": "Literal",
                    "start": 424,
                    "end": 428,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 431,
                    "end": 440,
                    "callee": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 438,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 461,
            "end": 491,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 465,
                "end": 490,
                "id": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 467,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 470,
                  "end": 490,
                  "test": {
                    "type": "Literal",
                    "start": 470,
                    "end": 474,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 481,
                    "end": 490,
                    "callee": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 488,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 526,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 525,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 502,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 505,
                  "end": 525,
                  "test": {
                    "type": "Literal",
                    "start": 505,
                    "end": 509,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 512,
                    "end": 521,
                    "callee": {
                      "type": "Identifier",
                      "start": 516,
                      "end": 519,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 525,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 572,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 571,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 551,
                  "end": 571,
                  "test": {
                    "type": "Literal",
                    "start": 551,
                    "end": 555,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 559,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 562,
                    "end": 571,
                    "callee": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 569,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 577,
            "end": 607,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 581,
                "end": 606,
                "id": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 583,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 586,
                  "end": 606,
                  "test": {
                    "type": "Literal",
                    "start": 586,
                    "end": 590,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 593,
                    "end": 602,
                    "callee": {
                      "type": "Identifier",
                      "start": 597,
                      "end": 600,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 133,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 133,
                "name": "Foo",
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
            "start": 135,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "name": "Foo",
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
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
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
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 612,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 620,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 624,
        "end": 639,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 630,
            "end": 637,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 630,
              "end": 633,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 633,
              "end": 636,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 636,
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 636,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 620,
        "end": 623,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 621,
            "end": 622,
            "name": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 641,
      "end": 742,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 649,
        "name": "D1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 691,
        "end": 693,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 699,
        "end": 742,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 705,
            "end": 722,
            "parameters": [
              {
                "type": "Identifier",
                "start": 706,
                "end": 715,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 707,
                  "end": 715,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 709,
                    "end": 715
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 716,
              "end": 721,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 718,
                "end": 721,
                "typeName": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 721,
                  "name": "Foo",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 727,
            "end": 734,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 727,
              "end": 730,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 730,
              "end": 733,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 732,
                "end": 733,
                "typeName": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 733,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 649,
        "end": 682,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 650,
            "end": 663,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 651,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 660,
              "end": 663,
              "typeName": {
                "type": "Identifier",
                "start": 660,
                "end": 663,
                "name": "Foo",
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
            "start": 665,
            "end": 678,
            "name": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 675,
              "end": 678,
              "typeName": {
                "type": "Identifier",
                "start": 675,
                "end": 678,
                "name": "Foo",
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
            "end": 681,
            "name": {
              "type": "Identifier",
              "start": 680,
              "end": 681,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 693,
        "end": 698,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 694,
            "end": 697,
            "typeName": {
              "type": "Identifier",
              "start": 694,
              "end": 697,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 744,
      "end": 845,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 794,
        "end": 796,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 802,
        "end": 845,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 808,
            "end": 825,
            "parameters": [
              {
                "type": "Identifier",
                "start": 809,
                "end": 818,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 810,
                  "end": 818,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 812,
                    "end": 818
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 819,
              "end": 824,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 821,
                "end": 824,
                "typeName": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 824,
                  "name": "Foo",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 830,
            "end": 837,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 830,
              "end": 833,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 833,
              "end": 836,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 835,
                "end": 836,
                "typeName": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 752,
        "end": 785,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 753,
            "end": 766,
            "name": {
              "type": "Identifier",
              "start": 753,
              "end": 754,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 763,
              "end": 766,
              "typeName": {
                "type": "Identifier",
                "start": 763,
                "end": 766,
                "name": "Foo",
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
            "start": 768,
            "end": 781,
            "name": {
              "type": "Identifier",
              "start": 768,
              "end": 769,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 778,
              "end": 781,
              "typeName": {
                "type": "Identifier",
                "start": 778,
                "end": 781,
                "name": "Foo",
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
            "start": 783,
            "end": 784,
            "name": {
              "type": "Identifier",
              "start": 783,
              "end": 784,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 796,
        "end": 801,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 797,
            "end": 800,
            "typeName": {
              "type": "Identifier",
              "start": 797,
              "end": 800,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 847,
      "end": 951,
      "id": {
        "type": "Identifier",
        "start": 853,
        "end": 855,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 897,
        "end": 899,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 905,
        "end": 951,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 911,
            "end": 928,
            "parameters": [
              {
                "type": "Identifier",
                "start": 912,
                "end": 921,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 913,
                  "end": 921,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 915,
                    "end": 921
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 922,
              "end": 927,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 924,
                "end": 927,
                "typeName": {
                  "type": "Identifier",
                  "start": 924,
                  "end": 927,
                  "name": "Foo",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 933,
            "end": 940,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 936,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 936,
              "end": 939,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 938,
                "end": 939,
                "typeName": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 939,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 855,
        "end": 888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 856,
            "end": 869,
            "name": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 866,
              "end": 869,
              "typeName": {
                "type": "Identifier",
                "start": 866,
                "end": 869,
                "name": "Foo",
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
            "start": 871,
            "end": 884,
            "name": {
              "type": "Identifier",
              "start": 871,
              "end": 872,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 881,
              "end": 884,
              "typeName": {
                "type": "Identifier",
                "start": 881,
                "end": 884,
                "name": "Foo",
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
            "start": 886,
            "end": 887,
            "name": {
              "type": "Identifier",
              "start": 886,
              "end": 887,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 899,
        "end": 904,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 900,
            "end": 903,
            "typeName": {
              "type": "Identifier",
              "start": 900,
              "end": 903,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 953,
      "end": 1050,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 961,
        "name": "D4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1003,
        "end": 1005,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1009,
        "end": 1050,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1015,
            "end": 1030,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1016,
                "end": 1025,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1017,
                  "end": 1025,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1019,
                    "end": 1025
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1026,
              "end": 1029,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1028,
                "end": 1029,
                "typeName": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1029,
                  "name": "T",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1035,
            "end": 1042,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1035,
              "end": 1038,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1038,
              "end": 1041,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1040,
                "end": 1041,
                "typeName": {
                  "type": "Identifier",
                  "start": 1040,
                  "end": 1041,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 961,
        "end": 994,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 962,
            "end": 975,
            "name": {
              "type": "Identifier",
              "start": 962,
              "end": 963,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 972,
              "end": 975,
              "typeName": {
                "type": "Identifier",
                "start": 972,
                "end": 975,
                "name": "Foo",
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
            "start": 977,
            "end": 990,
            "name": {
              "type": "Identifier",
              "start": 977,
              "end": 978,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 987,
              "end": 990,
              "typeName": {
                "type": "Identifier",
                "start": 987,
                "end": 990,
                "name": "Foo",
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
            "start": 992,
            "end": 993,
            "name": {
              "type": "Identifier",
              "start": 992,
              "end": 993,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1005,
        "end": 1008,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1006,
            "end": 1007,
            "typeName": {
              "type": "Identifier",
              "start": 1006,
              "end": 1007,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1052,
      "end": 1152,
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1060,
        "name": "D5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1102,
        "end": 1104,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1108,
        "end": 1152,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1114,
            "end": 1129,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1115,
                "end": 1124,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1116,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1118,
                    "end": 1124
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1125,
              "end": 1128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1127,
                "end": 1128,
                "typeName": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1128,
                  "name": "T",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1134,
            "end": 1141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1134,
              "end": 1137,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1137,
              "end": 1140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1139,
                "end": 1140,
                "typeName": {
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1140,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1060,
        "end": 1093,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1061,
            "end": 1074,
            "name": {
              "type": "Identifier",
              "start": 1061,
              "end": 1062,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1071,
              "end": 1074,
              "typeName": {
                "type": "Identifier",
                "start": 1071,
                "end": 1074,
                "name": "Foo",
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
            "start": 1076,
            "end": 1089,
            "name": {
              "type": "Identifier",
              "start": 1076,
              "end": 1077,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1086,
              "end": 1089,
              "typeName": {
                "type": "Identifier",
                "start": 1086,
                "end": 1089,
                "name": "Foo",
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
            "start": 1091,
            "end": 1092,
            "name": {
              "type": "Identifier",
              "start": 1091,
              "end": 1092,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1104,
        "end": 1107,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1105,
            "end": 1106,
            "typeName": {
              "type": "Identifier",
              "start": 1105,
              "end": 1106,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1154,
      "end": 1254,
      "id": {
        "type": "Identifier",
        "start": 1160,
        "end": 1162,
        "name": "D6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1204,
        "end": 1206,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1210,
        "end": 1254,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1216,
            "end": 1231,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1217,
                "end": 1226,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1218,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1220,
                    "end": 1226
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1227,
              "end": 1230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1229,
                "end": 1230,
                "typeName": {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1230,
                  "name": "T",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1236,
            "end": 1243,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1236,
              "end": 1239,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1239,
              "end": 1242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1241,
                "end": 1242,
                "typeName": {
                  "type": "Identifier",
                  "start": 1241,
                  "end": 1242,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1162,
        "end": 1195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1163,
            "end": 1176,
            "name": {
              "type": "Identifier",
              "start": 1163,
              "end": 1164,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1173,
              "end": 1176,
              "typeName": {
                "type": "Identifier",
                "start": 1173,
                "end": 1176,
                "name": "Foo",
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
            "start": 1178,
            "end": 1191,
            "name": {
              "type": "Identifier",
              "start": 1178,
              "end": 1179,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1188,
              "end": 1191,
              "typeName": {
                "type": "Identifier",
                "start": 1188,
                "end": 1191,
                "name": "Foo",
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
            "start": 1193,
            "end": 1194,
            "name": {
              "type": "Identifier",
              "start": 1193,
              "end": 1194,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1206,
        "end": 1209,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1207,
            "end": 1208,
            "typeName": {
              "type": "Identifier",
              "start": 1207,
              "end": 1208,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1256,
      "end": 1356,
      "id": {
        "type": "Identifier",
        "start": 1262,
        "end": 1264,
        "name": "D7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1306,
        "end": 1308,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1312,
        "end": 1356,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1318,
            "end": 1333,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1319,
                "end": 1328,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1320,
                  "end": 1328,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1322,
                    "end": 1328
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1329,
              "end": 1332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1331,
                "end": 1332,
                "typeName": {
                  "type": "Identifier",
                  "start": 1331,
                  "end": 1332,
                  "name": "U",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1338,
            "end": 1345,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1338,
              "end": 1341,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1341,
              "end": 1344,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1343,
                "end": 1344,
                "typeName": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1344,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1264,
        "end": 1297,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1265,
            "end": 1278,
            "name": {
              "type": "Identifier",
              "start": 1265,
              "end": 1266,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1275,
              "end": 1278,
              "typeName": {
                "type": "Identifier",
                "start": 1275,
                "end": 1278,
                "name": "Foo",
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
            "start": 1280,
            "end": 1293,
            "name": {
              "type": "Identifier",
              "start": 1280,
              "end": 1281,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1290,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1290,
                "end": 1293,
                "name": "Foo",
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
            "start": 1295,
            "end": 1296,
            "name": {
              "type": "Identifier",
              "start": 1295,
              "end": 1296,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1308,
        "end": 1311,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1309,
            "end": 1310,
            "typeName": {
              "type": "Identifier",
              "start": 1309,
              "end": 1310,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1358,
      "end": 1455,
      "id": {
        "type": "Identifier",
        "start": 1364,
        "end": 1366,
        "name": "D8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1408,
        "end": 1410,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1414,
        "end": 1455,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1420,
            "end": 1435,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1421,
                "end": 1430,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1422,
                  "end": 1430,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1424,
                    "end": 1430
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1431,
              "end": 1434,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1433,
                "end": 1434,
                "typeName": {
                  "type": "Identifier",
                  "start": 1433,
                  "end": 1434,
                  "name": "U",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1440,
            "end": 1447,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1440,
              "end": 1443,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1443,
              "end": 1446,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1445,
                "end": 1446,
                "typeName": {
                  "type": "Identifier",
                  "start": 1445,
                  "end": 1446,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1366,
        "end": 1399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1367,
            "end": 1380,
            "name": {
              "type": "Identifier",
              "start": 1367,
              "end": 1368,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1377,
              "end": 1380,
              "typeName": {
                "type": "Identifier",
                "start": 1377,
                "end": 1380,
                "name": "Foo",
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
            "start": 1382,
            "end": 1395,
            "name": {
              "type": "Identifier",
              "start": 1382,
              "end": 1383,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1392,
              "end": 1395,
              "typeName": {
                "type": "Identifier",
                "start": 1392,
                "end": 1395,
                "name": "Foo",
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
            "start": 1397,
            "end": 1398,
            "name": {
              "type": "Identifier",
              "start": 1397,
              "end": 1398,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1410,
        "end": 1413,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1411,
            "end": 1412,
            "typeName": {
              "type": "Identifier",
              "start": 1411,
              "end": 1412,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1457,
      "end": 1557,
      "id": {
        "type": "Identifier",
        "start": 1463,
        "end": 1465,
        "name": "D9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1507,
        "end": 1509,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1513,
        "end": 1557,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1519,
            "end": 1534,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1520,
                "end": 1529,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1521,
                  "end": 1529,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1523,
                    "end": 1529
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1530,
              "end": 1533,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1532,
                "end": 1533,
                "typeName": {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1533,
                  "name": "U",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1539,
            "end": 1546,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1539,
              "end": 1542,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1542,
              "end": 1545,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1544,
                "end": 1545,
                "typeName": {
                  "type": "Identifier",
                  "start": 1544,
                  "end": 1545,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1465,
        "end": 1498,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1466,
            "end": 1479,
            "name": {
              "type": "Identifier",
              "start": 1466,
              "end": 1467,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1476,
              "end": 1479,
              "typeName": {
                "type": "Identifier",
                "start": 1476,
                "end": 1479,
                "name": "Foo",
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
            "start": 1481,
            "end": 1494,
            "name": {
              "type": "Identifier",
              "start": 1481,
              "end": 1482,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1491,
              "end": 1494,
              "typeName": {
                "type": "Identifier",
                "start": 1491,
                "end": 1494,
                "name": "Foo",
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
            "start": 1496,
            "end": 1497,
            "name": {
              "type": "Identifier",
              "start": 1496,
              "end": 1497,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1509,
        "end": 1512,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1510,
            "end": 1511,
            "typeName": {
              "type": "Identifier",
              "start": 1510,
              "end": 1511,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
