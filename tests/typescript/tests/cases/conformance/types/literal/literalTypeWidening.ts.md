__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 3670,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 385,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 64,
            "end": 83,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 70,
                "end": 82,
                "id": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 72,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 75,
                  "end": 82,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 126,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 125,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 120,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 147,
            "end": 161,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 153,
                "end": 160,
                "id": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 155,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 160,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 192,
            "end": 204,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 196,
                "end": 203,
                "id": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 198,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 225,
            "end": 253,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 231,
                "end": 252,
                "id": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 242,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 235,
                      "end": 242,
                      "literal": {
                        "type": "Literal",
                        "start": 235,
                        "end": 242,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 245,
                  "end": 252,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 275,
            "end": 287,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 279,
                "end": 286,
                "id": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 281,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 286,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 309,
            "end": 332,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 315,
                "end": 331,
                "id": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 326,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 326,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 319,
                      "end": 326,
                      "literal": {
                        "type": "Literal",
                        "start": 319,
                        "end": 326,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 331,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 354,
            "end": 366,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 358,
                "end": 365,
                "id": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 360,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 365,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 387,
      "end": 896,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 398,
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
          "type": "Identifier",
          "start": 399,
          "end": 412,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 403,
            "end": 412,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 405,
              "end": 412
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 414,
        "end": 896,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 420,
            "end": 452,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 426,
                "end": 451,
                "id": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 428,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 431,
                  "end": 451,
                  "test": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 435,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 438,
                    "end": 443,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 446,
                    "end": 451,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 493,
            "end": 522,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 499,
                "end": 521,
                "id": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 516,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 516,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 503,
                      "end": 516,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 503,
                          "end": 508,
                          "literal": {
                            "type": "Literal",
                            "start": 503,
                            "end": 508,
                            "value": "foo",
                            "raw": "\"foo\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 511,
                          "end": 516,
                          "literal": {
                            "type": "Literal",
                            "start": 511,
                            "end": 516,
                            "value": "bar",
                            "raw": "\"bar\""
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 521,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 545,
            "end": 571,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 551,
                "end": 570,
                "id": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 553,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 556,
                  "end": 570,
                  "test": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 560,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 565,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 570,
                    "decorators": [],
                    "name": "c2",
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
            "start": 594,
            "end": 623,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 600,
                "end": 622,
                "id": {
                  "type": "Identifier",
                  "start": 600,
                  "end": 602,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 605,
                  "end": 622,
                  "test": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 609,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 614,
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 617,
                    "end": 622,
                    "value": "baz",
                    "raw": "\"baz\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 663,
            "end": 700,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 669,
                "end": 699,
                "id": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 694,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 671,
                    "end": 694,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 673,
                      "end": 694,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 673,
                          "end": 678,
                          "literal": {
                            "type": "Literal",
                            "start": 673,
                            "end": 678,
                            "value": "foo",
                            "raw": "\"foo\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 681,
                          "end": 686,
                          "literal": {
                            "type": "Literal",
                            "start": 681,
                            "end": 686,
                            "value": "bar",
                            "raw": "\"bar\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 689,
                          "end": 694,
                          "literal": {
                            "type": "Literal",
                            "start": 689,
                            "end": 694,
                            "value": "baz",
                            "raw": "\"baz\""
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 699,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 730,
            "end": 742,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 734,
                "end": 741,
                "id": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 736,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 741,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 758,
            "end": 770,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 762,
                "end": 769,
                "id": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 764,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 769,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 793,
            "end": 805,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 797,
                "end": 804,
                "id": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 799,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 804,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 828,
            "end": 840,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 832,
                "end": 839,
                "id": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 834,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 839,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 856,
            "end": 868,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 860,
                "end": 867,
                "id": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 862,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 867,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 898,
      "end": 1199,
      "id": {
        "type": "Identifier",
        "start": 907,
        "end": 909,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 912,
        "end": 1199,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 918,
            "end": 933,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 924,
                "end": 932,
                "id": {
                  "type": "Identifier",
                  "start": 924,
                  "end": 926,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 929,
                  "end": 932,
                  "value": 123,
                  "raw": "123"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 960,
            "end": 972,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 964,
                "end": 971,
                "id": {
                  "type": "Identifier",
                  "start": 964,
                  "end": 966,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 971,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 993,
            "end": 1007,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 999,
                "end": 1006,
                "id": {
                  "type": "Identifier",
                  "start": 999,
                  "end": 1001,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1006,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1034,
            "end": 1046,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1038,
                "end": 1045,
                "id": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1040,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1043,
                  "end": 1045,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1067,
            "end": 1087,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1073,
                "end": 1086,
                "id": {
                  "type": "Identifier",
                  "start": 1073,
                  "end": 1080,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1075,
                    "end": 1080,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1077,
                      "end": 1080,
                      "literal": {
                        "type": "Literal",
                        "start": 1077,
                        "end": 1080,
                        "value": 123,
                        "raw": "123"
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1083,
                  "end": 1086,
                  "value": 123,
                  "raw": "123"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1105,
            "end": 1117,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1109,
                "end": 1116,
                "id": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1111,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1116,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1135,
            "end": 1154,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1141,
                "end": 1153,
                "id": {
                  "type": "Identifier",
                  "start": 1141,
                  "end": 1148,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1143,
                    "end": 1148,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1145,
                      "end": 1148,
                      "literal": {
                        "type": "Literal",
                        "start": 1145,
                        "end": 1148,
                        "value": 123,
                        "raw": "123"
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1153,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1172,
            "end": 1184,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1176,
                "end": 1183,
                "id": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1178,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1181,
                  "end": 1183,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 1201,
      "end": 1656,
      "id": {
        "type": "Identifier",
        "start": 1210,
        "end": 1212,
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
          "start": 1213,
          "end": 1226,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1217,
            "end": 1226,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1219,
              "end": 1226
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1228,
        "end": 1656,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1234,
            "end": 1262,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1240,
                "end": 1261,
                "id": {
                  "type": "Identifier",
                  "start": 1240,
                  "end": 1242,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1245,
                  "end": 1261,
                  "test": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1249,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1252,
                    "end": 1255,
                    "value": 123,
                    "raw": "123"
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1258,
                    "end": 1261,
                    "value": 456,
                    "raw": "456"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1299,
            "end": 1324,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1305,
                "end": 1323,
                "id": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1318,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1307,
                    "end": 1318,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1309,
                      "end": 1318,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1309,
                          "end": 1312,
                          "literal": {
                            "type": "Literal",
                            "start": 1309,
                            "end": 1312,
                            "value": 123,
                            "raw": "123"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1315,
                          "end": 1318,
                          "literal": {
                            "type": "Literal",
                            "start": 1315,
                            "end": 1318,
                            "value": 456,
                            "raw": "456"
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1323,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1343,
            "end": 1369,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1349,
                "end": 1368,
                "id": {
                  "type": "Identifier",
                  "start": 1349,
                  "end": 1351,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1354,
                  "end": 1368,
                  "test": {
                    "type": "Identifier",
                    "start": 1354,
                    "end": 1358,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1361,
                    "end": 1363,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1366,
                    "end": 1368,
                    "decorators": [],
                    "name": "c2",
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
            "start": 1388,
            "end": 1415,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1394,
                "end": 1414,
                "id": {
                  "type": "Identifier",
                  "start": 1394,
                  "end": 1396,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1399,
                  "end": 1414,
                  "test": {
                    "type": "Identifier",
                    "start": 1399,
                    "end": 1403,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1406,
                    "end": 1408,
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1411,
                    "end": 1414,
                    "value": 789,
                    "raw": "789"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1449,
            "end": 1480,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1455,
                "end": 1479,
                "id": {
                  "type": "Identifier",
                  "start": 1455,
                  "end": 1474,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1457,
                    "end": 1474,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1459,
                      "end": 1474,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1459,
                          "end": 1462,
                          "literal": {
                            "type": "Literal",
                            "start": 1459,
                            "end": 1462,
                            "value": 123,
                            "raw": "123"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1465,
                          "end": 1468,
                          "literal": {
                            "type": "Literal",
                            "start": 1465,
                            "end": 1468,
                            "value": 456,
                            "raw": "456"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1471,
                          "end": 1474,
                          "literal": {
                            "type": "Literal",
                            "start": 1471,
                            "end": 1474,
                            "value": 789,
                            "raw": "789"
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1477,
                  "end": 1479,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1504,
            "end": 1516,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1508,
                "end": 1515,
                "id": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1510,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1513,
                  "end": 1515,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1532,
            "end": 1544,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1536,
                "end": 1543,
                "id": {
                  "type": "Identifier",
                  "start": 1536,
                  "end": 1538,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1543,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1563,
            "end": 1575,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1567,
                "end": 1574,
                "id": {
                  "type": "Identifier",
                  "start": 1567,
                  "end": 1569,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1572,
                  "end": 1574,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1594,
            "end": 1606,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1598,
                "end": 1605,
                "id": {
                  "type": "Identifier",
                  "start": 1598,
                  "end": 1600,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1603,
                  "end": 1605,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1622,
            "end": 1634,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1626,
                "end": 1633,
                "id": {
                  "type": "Identifier",
                  "start": 1626,
                  "end": 1628,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1631,
                  "end": 1633,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 1658,
      "end": 1854,
      "id": {
        "type": "Identifier",
        "start": 1667,
        "end": 1669,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1672,
        "end": 1854,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1678,
            "end": 1695,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1684,
                "end": 1694,
                "id": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1686,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1689,
                  "end": 1694,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1700,
            "end": 1712,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1704,
                "end": 1711,
                "id": {
                  "type": "Identifier",
                  "start": 1704,
                  "end": 1706,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1709,
                  "end": 1711,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1717,
            "end": 1741,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1723,
                "end": 1740,
                "id": {
                  "type": "Identifier",
                  "start": 1723,
                  "end": 1732,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1725,
                    "end": 1732,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1727,
                      "end": 1732,
                      "literal": {
                        "type": "Literal",
                        "start": 1727,
                        "end": 1732,
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1735,
                  "end": 1740,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1746,
            "end": 1758,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1750,
                "end": 1757,
                "id": {
                  "type": "Identifier",
                  "start": 1750,
                  "end": 1752,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1755,
                  "end": 1757,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1763,
            "end": 1789,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1769,
                "end": 1788,
                "id": {
                  "type": "Identifier",
                  "start": 1769,
                  "end": 1771,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1774,
                  "end": 1788,
                  "expression": {
                    "type": "Literal",
                    "start": 1774,
                    "end": 1779,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1783,
                    "end": 1788,
                    "literal": {
                      "type": "Literal",
                      "start": 1783,
                      "end": 1788,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1794,
            "end": 1806,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1798,
                "end": 1805,
                "id": {
                  "type": "Identifier",
                  "start": 1798,
                  "end": 1800,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1803,
                  "end": 1805,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1811,
            "end": 1835,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1817,
                "end": 1834,
                "id": {
                  "type": "Identifier",
                  "start": 1817,
                  "end": 1819,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 1822,
                  "end": 1834,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1823,
                    "end": 1828,
                    "literal": {
                      "type": "Literal",
                      "start": 1823,
                      "end": 1828,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  "expression": {
                    "type": "Literal",
                    "start": 1829,
                    "end": 1834,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1840,
            "end": 1852,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1844,
                "end": 1851,
                "id": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1846,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1849,
                  "end": 1851,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSDeclareFunction",
      "start": 1856,
      "end": 1894,
      "id": {
        "type": "Identifier",
        "start": 1873,
        "end": 1881,
        "decorators": [],
        "name": "widening",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1881,
        "end": 1884,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1882,
            "end": 1883,
            "name": {
              "type": "Identifier",
              "start": 1882,
              "end": 1883,
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
      "params": [
        {
          "type": "Identifier",
          "start": 1885,
          "end": 1889,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1886,
            "end": 1889,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1888,
              "end": 1889,
              "typeName": {
                "type": "Identifier",
                "start": 1888,
                "end": 1889,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1890,
        "end": 1893,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1892,
          "end": 1893,
          "typeName": {
            "type": "Identifier",
            "start": 1892,
            "end": 1893,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1895,
      "end": 1969,
      "id": {
        "type": "Identifier",
        "start": 1912,
        "end": 1923,
        "decorators": [],
        "name": "nonWidening",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1923,
        "end": 1959,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1924,
            "end": 1958,
            "name": {
              "type": "Identifier",
              "start": 1924,
              "end": 1925,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 1934,
              "end": 1958,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1934,
                  "end": 1940
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1943,
                  "end": 1949
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 1952,
                  "end": 1958
                }
              ]
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
          "start": 1960,
          "end": 1964,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1961,
            "end": 1964,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1963,
              "end": 1964,
              "typeName": {
                "type": "Identifier",
                "start": 1963,
                "end": 1964,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1965,
        "end": 1968,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1967,
          "end": 1968,
          "typeName": {
            "type": "Identifier",
            "start": 1967,
            "end": 1968,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1971,
      "end": 2200,
      "id": {
        "type": "Identifier",
        "start": 1980,
        "end": 1982,
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
          "type": "Identifier",
          "start": 1983,
          "end": 1996,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1987,
            "end": 1996,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1989,
              "end": 1996
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1998,
        "end": 2200,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2004,
            "end": 2027,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2008,
                "end": 2026,
                "id": {
                  "type": "Identifier",
                  "start": 2008,
                  "end": 2010,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2013,
                  "end": 2026,
                  "callee": {
                    "type": "Identifier",
                    "start": 2013,
                    "end": 2021,
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2022,
                      "end": 2025,
                      "value": "a",
                      "raw": "'a'"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2032,
            "end": 2054,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2036,
                "end": 2053,
                "id": {
                  "type": "Identifier",
                  "start": 2036,
                  "end": 2038,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2041,
                  "end": 2053,
                  "callee": {
                    "type": "Identifier",
                    "start": 2041,
                    "end": 2049,
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2050,
                      "end": 2052,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2059,
            "end": 2094,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2063,
                "end": 2093,
                "id": {
                  "type": "Identifier",
                  "start": 2063,
                  "end": 2065,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2068,
                  "end": 2093,
                  "callee": {
                    "type": "Identifier",
                    "start": 2068,
                    "end": 2076,
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "start": 2077,
                      "end": 2092,
                      "test": {
                        "type": "Identifier",
                        "start": 2077,
                        "end": 2081,
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 2084,
                        "end": 2087,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 2090,
                        "end": 2092,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2099,
            "end": 2125,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2103,
                "end": 2124,
                "id": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2105,
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2108,
                  "end": 2124,
                  "callee": {
                    "type": "Identifier",
                    "start": 2108,
                    "end": 2119,
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2120,
                      "end": 2123,
                      "value": "a",
                      "raw": "'a'"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2130,
            "end": 2155,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2134,
                "end": 2154,
                "id": {
                  "type": "Identifier",
                  "start": 2134,
                  "end": 2136,
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2139,
                  "end": 2154,
                  "callee": {
                    "type": "Identifier",
                    "start": 2139,
                    "end": 2150,
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2151,
                      "end": 2153,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2160,
            "end": 2198,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2164,
                "end": 2197,
                "id": {
                  "type": "Identifier",
                  "start": 2164,
                  "end": 2166,
                  "decorators": [],
                  "name": "y3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2169,
                  "end": 2197,
                  "callee": {
                    "type": "Identifier",
                    "start": 2169,
                    "end": 2180,
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "start": 2181,
                      "end": 2196,
                      "test": {
                        "type": "Identifier",
                        "start": 2181,
                        "end": 2185,
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 2188,
                        "end": 2191,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 2194,
                        "end": 2196,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  ],
                  "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 2224,
      "end": 2249,
      "id": {
        "type": "Identifier",
        "start": 2229,
        "end": 2236,
        "decorators": [],
        "name": "FAILURE",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 2239,
        "end": 2248,
        "literal": {
          "type": "Literal",
          "start": 2239,
          "end": 2248,
          "value": "FAILURE",
          "raw": "\"FAILURE\""
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2250,
      "end": 2276,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2256,
          "end": 2275,
          "id": {
            "type": "Identifier",
            "start": 2256,
            "end": 2263,
            "decorators": [],
            "name": "FAILURE",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2266,
            "end": 2275,
            "value": "FAILURE",
            "raw": "\"FAILURE\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2278,
      "end": 2307,
      "id": {
        "type": "Identifier",
        "start": 2283,
        "end": 2289,
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2289,
        "end": 2292,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2290,
            "end": 2291,
            "name": {
              "type": "Identifier",
              "start": 2290,
              "end": 2291,
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
        "type": "TSUnionType",
        "start": 2295,
        "end": 2306,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2295,
            "end": 2296,
            "typeName": {
              "type": "Identifier",
              "start": 2295,
              "end": 2296,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 2299,
            "end": 2306,
            "typeName": {
              "type": "Identifier",
              "start": 2299,
              "end": 2306,
              "decorators": [],
              "name": "FAILURE",
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
      "type": "FunctionDeclaration",
      "start": 2309,
      "end": 2362,
      "id": {
        "type": "Identifier",
        "start": 2318,
        "end": 2324,
        "decorators": [],
        "name": "doWork",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2324,
        "end": 2327,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2325,
            "end": 2326,
            "name": {
              "type": "Identifier",
              "start": 2325,
              "end": 2326,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2329,
        "end": 2340,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2331,
          "end": 2340,
          "typeName": {
            "type": "Identifier",
            "start": 2331,
            "end": 2337,
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2337,
            "end": 2340,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2338,
                "end": 2339,
                "typeName": {
                  "type": "Identifier",
                  "start": 2338,
                  "end": 2339,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2341,
        "end": 2362,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2345,
            "end": 2360,
            "argument": {
              "type": "Identifier",
              "start": 2352,
              "end": 2359,
              "decorators": [],
              "name": "FAILURE",
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
      "start": 2364,
      "end": 2450,
      "id": {
        "type": "Identifier",
        "start": 2373,
        "end": 2382,
        "decorators": [],
        "name": "isSuccess",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2382,
        "end": 2385,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2383,
            "end": 2384,
            "name": {
              "type": "Identifier",
              "start": 2383,
              "end": 2384,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2386,
          "end": 2403,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2392,
            "end": 2403,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2394,
              "end": 2403,
              "typeName": {
                "type": "Identifier",
                "start": 2394,
                "end": 2400,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2400,
                "end": 2403,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2401,
                    "end": 2402,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2401,
                      "end": 2402,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2404,
        "end": 2417,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2406,
          "end": 2417,
          "parameterName": {
            "type": "Identifier",
            "start": 2406,
            "end": 2412,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2416,
            "end": 2417,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2416,
              "end": 2417,
              "typeName": {
                "type": "Identifier",
                "start": 2416,
                "end": 2417,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2418,
        "end": 2450,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2422,
            "end": 2448,
            "argument": {
              "type": "UnaryExpression",
              "start": 2429,
              "end": 2447,
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "start": 2430,
                "end": 2447,
                "callee": {
                  "type": "Identifier",
                  "start": 2430,
                  "end": 2439,
                  "decorators": [],
                  "name": "isFailure",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2440,
                    "end": 2446,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "prefix": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2452,
      "end": 2544,
      "id": {
        "type": "Identifier",
        "start": 2461,
        "end": 2470,
        "decorators": [],
        "name": "isFailure",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2470,
        "end": 2473,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2471,
            "end": 2472,
            "name": {
              "type": "Identifier",
              "start": 2471,
              "end": 2472,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2474,
          "end": 2491,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2480,
            "end": 2491,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2482,
              "end": 2491,
              "typeName": {
                "type": "Identifier",
                "start": 2482,
                "end": 2488,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2488,
                "end": 2491,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2489,
                    "end": 2490,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2489,
                      "end": 2490,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2492,
        "end": 2511,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2494,
          "end": 2511,
          "parameterName": {
            "type": "Identifier",
            "start": 2494,
            "end": 2500,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2504,
            "end": 2511,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2504,
              "end": 2511,
              "typeName": {
                "type": "Identifier",
                "start": 2504,
                "end": 2511,
                "decorators": [],
                "name": "FAILURE",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2512,
        "end": 2544,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2516,
            "end": 2542,
            "argument": {
              "type": "BinaryExpression",
              "start": 2523,
              "end": 2541,
              "left": {
                "type": "Identifier",
                "start": 2523,
                "end": 2529,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2534,
                "end": 2541,
                "decorators": [],
                "name": "FAILURE",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2546,
      "end": 2603,
      "id": {
        "type": "Identifier",
        "start": 2555,
        "end": 2564,
        "decorators": [],
        "name": "increment",
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
          "start": 2565,
          "end": 2574,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2566,
            "end": 2574,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2568,
              "end": 2574
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2575,
        "end": 2583,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2577,
          "end": 2583
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2584,
        "end": 2603,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2588,
            "end": 2601,
            "argument": {
              "type": "BinaryExpression",
              "start": 2595,
              "end": 2600,
              "left": {
                "type": "Identifier",
                "start": 2595,
                "end": 2596,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 2599,
                "end": 2600,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2605,
      "end": 2635,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2609,
          "end": 2634,
          "id": {
            "type": "Identifier",
            "start": 2609,
            "end": 2615,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2618,
            "end": 2634,
            "callee": {
              "type": "Identifier",
              "start": 2618,
              "end": 2624,
              "decorators": [],
              "name": "doWork",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2624,
              "end": 2632,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2625,
                  "end": 2631
                }
              ]
            },
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 2637,
      "end": 2684,
      "test": {
        "type": "CallExpression",
        "start": 2641,
        "end": 2658,
        "callee": {
          "type": "Identifier",
          "start": 2641,
          "end": 2650,
          "decorators": [],
          "name": "isSuccess",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2651,
            "end": 2657,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 2660,
        "end": 2684,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2664,
            "end": 2682,
            "expression": {
              "type": "CallExpression",
              "start": 2664,
              "end": 2681,
              "callee": {
                "type": "Identifier",
                "start": 2664,
                "end": 2673,
                "decorators": [],
                "name": "increment",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2674,
                  "end": 2680,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2708,
      "end": 2754,
      "id": {
        "type": "Identifier",
        "start": 2713,
        "end": 2722,
        "decorators": [],
        "name": "TestEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2725,
        "end": 2753,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2725,
            "end": 2738,
            "literal": {
              "type": "Literal",
              "start": 2725,
              "end": 2738,
              "value": "onmouseover",
              "raw": "\"onmouseover\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2741,
            "end": 2753,
            "literal": {
              "type": "Literal",
              "start": 2741,
              "end": 2753,
              "value": "onmouseout",
              "raw": "\"onmouseout\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2756,
      "end": 2815,
      "id": {
        "type": "Identifier",
        "start": 2765,
        "end": 2776,
        "decorators": [],
        "name": "onMouseOver",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2778,
        "end": 2789,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2780,
          "end": 2789,
          "typeName": {
            "type": "Identifier",
            "start": 2780,
            "end": 2789,
            "decorators": [],
            "name": "TestEvent",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2790,
        "end": 2815,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2792,
            "end": 2813,
            "argument": {
              "type": "Literal",
              "start": 2799,
              "end": 2812,
              "value": "onmouseover",
              "raw": "\"onmouseover\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2817,
      "end": 2839,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2821,
          "end": 2838,
          "id": {
            "type": "Identifier",
            "start": 2821,
            "end": 2822,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2825,
            "end": 2838,
            "callee": {
              "type": "Identifier",
              "start": 2825,
              "end": 2836,
              "decorators": [],
              "name": "onMouseOver",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2863,
      "end": 3056,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2870,
        "end": 3056,
        "id": {
          "type": "Identifier",
          "start": 2879,
          "end": 2882,
          "decorators": [],
          "name": "Set",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2882,
          "end": 2900,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2883,
              "end": 2899,
              "name": {
                "type": "Identifier",
                "start": 2883,
                "end": 2884,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 2893,
                "end": 2899
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
            "type": "RestElement",
            "start": 2901,
            "end": 2913,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 2904,
              "end": 2908,
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2908,
              "end": 2913,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2910,
                "end": 2913,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 2910,
                  "end": 2911,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2910,
                    "end": 2911,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2914,
          "end": 2943,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2916,
            "end": 2943,
            "typeName": {
              "type": "Identifier",
              "start": 2916,
              "end": 2922,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2922,
              "end": 2943,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2923,
                  "end": 2924,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2923,
                    "end": 2924,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 2926,
                  "end": 2942,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 2926,
                      "end": 2930,
                      "literal": {
                        "type": "Literal",
                        "start": 2926,
                        "end": 2930,
                        "value": true,
                        "raw": "true"
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2933,
                      "end": 2942
                    }
                  ]
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 2944,
          "end": 3056,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 2948,
              "end": 2996,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2954,
                  "end": 2996,
                  "id": {
                    "type": "Identifier",
                    "start": 2954,
                    "end": 2960,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 2963,
                    "end": 2996,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 2963,
                      "end": 2965,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2969,
                      "end": 2996,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2969,
                        "end": 2975,
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2975,
                        "end": 2996,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2976,
                            "end": 2977,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2976,
                              "end": 2977,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSUnionType",
                            "start": 2979,
                            "end": 2995,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 2979,
                                "end": 2983,
                                "literal": {
                                  "type": "Literal",
                                  "start": 2979,
                                  "end": 2983,
                                  "value": true,
                                  "raw": "true"
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 2986,
                                "end": 2995
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 2999,
              "end": 3038,
              "expression": {
                "type": "CallExpression",
                "start": 2999,
                "end": 3038,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2999,
                  "end": 3011,
                  "object": {
                    "type": "Identifier",
                    "start": 2999,
                    "end": 3003,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3004,
                    "end": 3011,
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 3012,
                    "end": 3037,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3012,
                        "end": 3015,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "AssignmentExpression",
                      "start": 3019,
                      "end": 3037,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3019,
                        "end": 3030,
                        "object": {
                          "type": "Identifier",
                          "start": 3019,
                          "end": 3025,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3026,
                          "end": 3029,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3033,
                        "end": 3037,
                        "value": true,
                        "raw": "true"
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ReturnStatement",
              "start": 3041,
              "end": 3054,
              "argument": {
                "type": "Identifier",
                "start": 3048,
                "end": 3054,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3058,
      "end": 3160,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3065,
        "end": 3160,
        "id": {
          "type": "Identifier",
          "start": 3074,
          "end": 3078,
          "decorators": [],
          "name": "keys",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3078,
          "end": 3099,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3079,
              "end": 3095,
              "name": {
                "type": "Identifier",
                "start": 3079,
                "end": 3080,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 3089,
                "end": 3095
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 3097,
              "end": 3098,
              "name": {
                "type": "Identifier",
                "start": 3097,
                "end": 3098,
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
            "start": 3100,
            "end": 3117,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3103,
              "end": 3117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3105,
                "end": 3117,
                "typeName": {
                  "type": "Identifier",
                  "start": 3105,
                  "end": 3111,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3111,
                  "end": 3117,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3112,
                      "end": 3113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3112,
                        "end": 3113,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3115,
                      "end": 3116,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3115,
                        "end": 3116,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3118,
          "end": 3123,
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 3120,
            "end": 3123,
            "elementType": {
              "type": "TSTypeReference",
              "start": 3120,
              "end": 3121,
              "typeName": {
                "type": "Identifier",
                "start": 3120,
                "end": 3121,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3124,
          "end": 3160,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 3128,
              "end": 3158,
              "argument": {
                "type": "TSAsExpression",
                "start": 3135,
                "end": 3158,
                "expression": {
                  "type": "CallExpression",
                  "start": 3135,
                  "end": 3151,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3135,
                    "end": 3146,
                    "object": {
                      "type": "Identifier",
                      "start": 3135,
                      "end": 3141,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3142,
                      "end": 3146,
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3147,
                      "end": 3150,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 3155,
                  "end": 3158,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 3155,
                    "end": 3156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3155,
                      "end": 3156,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3162,
      "end": 3191,
      "id": {
        "type": "Identifier",
        "start": 3167,
        "end": 3170,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3173,
        "end": 3191,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3175,
            "end": 3189,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3175,
              "end": 3179,
              "decorators": [],
              "name": "code",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3179,
              "end": 3189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3181,
                "end": 3189,
                "typeName": {
                  "type": "Identifier",
                  "start": 3181,
                  "end": 3189,
                  "decorators": [],
                  "name": "LangCode",
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
      "start": 3193,
      "end": 3246,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3199,
          "end": 3246,
          "id": {
            "type": "Identifier",
            "start": 3199,
            "end": 3210,
            "decorators": [],
            "name": "langCodeSet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3213,
            "end": 3246,
            "callee": {
              "type": "Identifier",
              "start": 3213,
              "end": 3216,
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 3217,
                "end": 3221,
                "value": "fr",
                "raw": "'fr'"
              },
              {
                "type": "Literal",
                "start": 3223,
                "end": 3227,
                "value": "en",
                "raw": "'en'"
              },
              {
                "type": "Literal",
                "start": 3229,
                "end": 3233,
                "value": "es",
                "raw": "'es'"
              },
              {
                "type": "Literal",
                "start": 3235,
                "end": 3239,
                "value": "it",
                "raw": "'it'"
              },
              {
                "type": "Literal",
                "start": 3241,
                "end": 3245,
                "value": "nl",
                "raw": "'nl'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3247,
      "end": 3294,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3254,
        "end": 3294,
        "id": {
          "type": "Identifier",
          "start": 3259,
          "end": 3267,
          "decorators": [],
          "name": "LangCode",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 3270,
          "end": 3294,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 3276,
            "end": 3294,
            "exprName": {
              "type": "Identifier",
              "start": 3283,
              "end": 3294,
              "decorators": [],
              "name": "langCodeSet",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
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
      "start": 3295,
      "end": 3337,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3302,
        "end": 3337,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3308,
            "end": 3337,
            "id": {
              "type": "Identifier",
              "start": 3308,
              "end": 3317,
              "decorators": [],
              "name": "langCodes",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 3320,
              "end": 3337,
              "callee": {
                "type": "Identifier",
                "start": 3320,
                "end": 3324,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3325,
                  "end": 3336,
                  "decorators": [],
                  "name": "langCodeSet",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
      "type": "VariableDeclaration",
      "start": 3339,
      "end": 3391,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3345,
          "end": 3391,
          "id": {
            "type": "Identifier",
            "start": 3345,
            "end": 3355,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3348,
              "end": 3355,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3350,
                "end": 3355,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3350,
                  "end": 3353,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3350,
                    "end": 3353,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3358,
            "end": 3391,
            "callee": {
              "type": "MemberExpression",
              "start": 3358,
              "end": 3371,
              "object": {
                "type": "Identifier",
                "start": 3358,
                "end": 3367,
                "decorators": [],
                "name": "langCodes",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3368,
                "end": 3371,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3372,
                "end": 3390,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3372,
                    "end": 3376,
                    "decorators": [],
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "start": 3381,
                  "end": 3389,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3383,
                      "end": 3387,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 3383,
                        "end": 3387,
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 3383,
                        "end": 3387,
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3415,
      "end": 3550,
      "id": {
        "type": "Identifier",
        "start": 3424,
        "end": 3428,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3428,
        "end": 3464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3429,
            "end": 3463,
            "name": {
              "type": "Identifier",
              "start": 3429,
              "end": 3430,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 3439,
              "end": 3463,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3441,
                  "end": 3451,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3441,
                    "end": 3442,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3442,
                    "end": 3450,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3444,
                      "end": 3450
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3452,
                  "end": 3461,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3452,
                    "end": 3453,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3453,
                    "end": 3461,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3455,
                      "end": 3461
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
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
          "start": 3465,
          "end": 3471,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3468,
            "end": 3471,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3470,
              "end": 3471,
              "typeName": {
                "type": "Identifier",
                "start": 3470,
                "end": 3471,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3472,
        "end": 3475,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3474,
          "end": 3475,
          "typeName": {
            "type": "Identifier",
            "start": 3474,
            "end": 3475,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3476,
        "end": 3550,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3482,
            "end": 3507,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3486,
                "end": 3506,
                "id": {
                  "type": "ObjectPattern",
                  "start": 3486,
                  "end": 3500,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3488,
                      "end": 3489,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 3488,
                        "end": 3489,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 3488,
                        "end": 3489,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 3491,
                      "end": 3498,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 3494,
                        "end": 3498,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 3503,
                  "end": 3506,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 3512,
            "end": 3548,
            "argument": {
              "type": "TSAsExpression",
              "start": 3519,
              "end": 3547,
              "expression": {
                "type": "ObjectExpression",
                "start": 3519,
                "end": 3542,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3521,
                    "end": 3531,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3521,
                      "end": 3522,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3524,
                      "end": 3531,
                      "value": "hello",
                      "raw": "'hello'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "SpreadElement",
                    "start": 3533,
                    "end": 3540,
                    "argument": {
                      "type": "Identifier",
                      "start": 3536,
                      "end": 3540,
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3546,
                "end": 3547,
                "typeName": {
                  "type": "Identifier",
                  "start": 3546,
                  "end": 3547,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3574,
      "end": 3618,
      "id": {
        "type": "Identifier",
        "start": 3591,
        "end": 3592,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3592,
        "end": 3595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3593,
            "end": 3594,
            "name": {
              "type": "Identifier",
              "start": 3593,
              "end": 3594,
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
      "params": [
        {
          "type": "Identifier",
          "start": 3596,
          "end": 3600,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3597,
            "end": 3600,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3599,
              "end": 3600,
              "typeName": {
                "type": "Identifier",
                "start": 3599,
                "end": 3600,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3601,
        "end": 3617,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3603,
          "end": 3617,
          "typeName": {
            "type": "Identifier",
            "start": 3603,
            "end": 3614,
            "decorators": [],
            "name": "NonNullable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3614,
            "end": 3617,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3615,
                "end": 3616,
                "typeName": {
                  "type": "Identifier",
                  "start": 3615,
                  "end": 3616,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 3619,
      "end": 3634,
      "id": {
        "type": "Identifier",
        "start": 3624,
        "end": 3625,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 3626,
        "end": 3634,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 3628,
            "end": 3629,
            "id": {
              "type": "Identifier",
              "start": 3628,
              "end": 3629,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 3631,
            "end": 3632,
            "id": {
              "type": "Identifier",
              "start": 3631,
              "end": 3632,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3635,
      "end": 3652,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3641,
          "end": 3651,
          "id": {
            "type": "Identifier",
            "start": 3641,
            "end": 3642,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3645,
            "end": 3651,
            "callee": {
              "type": "Identifier",
              "start": 3645,
              "end": 3646,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3647,
                "end": 3650,
                "object": {
                  "type": "Identifier",
                  "start": 3647,
                  "end": 3648,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3649,
                  "end": 3650,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3653,
      "end": 3670,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3659,
          "end": 3669,
          "id": {
            "type": "Identifier",
            "start": 3659,
            "end": 3665,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3660,
              "end": 3665,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3662,
                "end": 3665,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3662,
                  "end": 3665,
                  "left": {
                    "type": "Identifier",
                    "start": 3662,
                    "end": 3663,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3664,
                    "end": 3665,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 3668,
            "end": 3669,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
