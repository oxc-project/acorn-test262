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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
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
        "start": 92,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 106,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 97,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 109,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 133,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "params": [
        {
          "type": "Identifier",
          "start": 153,
          "end": 157,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 165,
          "end": 169,
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 610,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 187,
            "end": 208,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 191,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 213,
            "end": 234,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 217,
                "end": 233,
                "id": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 250,
            "end": 272,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 254,
                "end": 271,
                "id": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 299,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 281,
                "end": 298,
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 283,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 315,
            "end": 337,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 336,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 336,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 342,
            "end": 364,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 363,
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 348,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 380,
            "end": 410,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 409,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 386,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 400,
                    "end": 409,
                    "callee": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 407,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 415,
            "end": 445,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 419,
                "end": 444,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 421,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 461,
            "end": 491,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 465,
                "end": 490,
                "id": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 467,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 481,
                    "end": 490,
                    "callee": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 488,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 526,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 525,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 502,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 525,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 572,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 571,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 562,
                    "end": 571,
                    "callee": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 569,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 577,
            "end": 607,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 581,
                "end": 606,
                "id": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 583,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 612,
      "end": 639,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 620,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 624,
        "end": 639,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 630,
            "end": 637,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 630,
              "end": 633,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 641,
      "end": 742,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 649,
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 660,
              "end": 663,
              "typeName": {
                "type": "Identifier",
                "start": 660,
                "end": 663,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 675,
              "end": 678,
              "typeName": {
                "type": "Identifier",
                "start": 675,
                "end": 678,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 691,
        "end": 693,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 707,
                  "end": 715,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 709,
                    "end": 715
                  }
                }
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 727,
              "end": 730,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 744,
      "end": 845,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 763,
              "end": 766,
              "typeName": {
                "type": "Identifier",
                "start": 763,
                "end": 766,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 778,
              "end": 781,
              "typeName": {
                "type": "Identifier",
                "start": 778,
                "end": 781,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 794,
        "end": 796,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 810,
                  "end": 818,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 812,
                    "end": 818
                  }
                }
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 830,
              "end": 833,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 847,
      "end": 951,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 853,
        "end": 855,
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 866,
              "end": 869,
              "typeName": {
                "type": "Identifier",
                "start": 866,
                "end": 869,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 881,
              "end": 884,
              "typeName": {
                "type": "Identifier",
                "start": 881,
                "end": 884,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 897,
        "end": 899,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 913,
                  "end": 921,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 915,
                    "end": 921
                  }
                }
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 936,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 953,
      "end": 1050,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 961,
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 972,
              "end": 975,
              "typeName": {
                "type": "Identifier",
                "start": 972,
                "end": 975,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 987,
              "end": 990,
              "typeName": {
                "type": "Identifier",
                "start": 987,
                "end": 990,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 1003,
        "end": 1005,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1017,
                  "end": 1025,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1019,
                    "end": 1025
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1035,
              "end": 1038,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1052,
      "end": 1152,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1060,
        "decorators": [],
        "name": "D5",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1071,
              "end": 1074,
              "typeName": {
                "type": "Identifier",
                "start": 1071,
                "end": 1074,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1086,
              "end": 1089,
              "typeName": {
                "type": "Identifier",
                "start": 1086,
                "end": 1089,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 1102,
        "end": 1104,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1116,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1118,
                    "end": 1124
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1134,
              "end": 1137,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1154,
      "end": 1254,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1160,
        "end": 1162,
        "decorators": [],
        "name": "D6",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1173,
              "end": 1176,
              "typeName": {
                "type": "Identifier",
                "start": 1173,
                "end": 1176,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1188,
              "end": 1191,
              "typeName": {
                "type": "Identifier",
                "start": 1188,
                "end": 1191,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 1204,
        "end": 1206,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1218,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1220,
                    "end": 1226
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1236,
              "end": 1239,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1256,
      "end": 1356,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1262,
        "end": 1264,
        "decorators": [],
        "name": "D7",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1275,
              "end": 1278,
              "typeName": {
                "type": "Identifier",
                "start": 1275,
                "end": 1278,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1290,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1290,
                "end": 1293,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 1306,
        "end": 1308,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1320,
                  "end": 1328,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1322,
                    "end": 1328
                  }
                }
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1338,
              "end": 1341,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1358,
      "end": 1455,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1364,
        "end": 1366,
        "decorators": [],
        "name": "D8",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1377,
              "end": 1380,
              "typeName": {
                "type": "Identifier",
                "start": 1377,
                "end": 1380,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1392,
              "end": 1395,
              "typeName": {
                "type": "Identifier",
                "start": 1392,
                "end": 1395,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 1408,
        "end": 1410,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1422,
                  "end": 1430,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1424,
                    "end": 1430
                  }
                }
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1440,
              "end": 1443,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1457,
      "end": 1557,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1463,
        "end": 1465,
        "decorators": [],
        "name": "D9",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1476,
              "end": 1479,
              "typeName": {
                "type": "Identifier",
                "start": 1476,
                "end": 1479,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1491,
              "end": 1494,
              "typeName": {
                "type": "Identifier",
                "start": 1491,
                "end": 1494,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
      "superClass": {
        "type": "Identifier",
        "start": 1507,
        "end": 1509,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1521,
                  "end": 1529,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1523,
                    "end": 1529
                  }
                }
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1539,
              "end": 1542,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
