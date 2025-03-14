assignParameterPropertyToPropertyDeclarationES2022.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 913,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "qux",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 20,
              "end": 28,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 20,
                "end": 24
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 25,
                "end": 28,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 63,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 55,
              "end": 63,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 55,
                "end": 59
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 60,
                "end": 63,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 99,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "quiz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 91,
              "end": 99,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 91,
                "end": 95
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 110,
            "end": 128,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "decorators": [],
              "name": "quench",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 119,
              "end": 128,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 119,
                "end": 126,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 119,
                  "end": 123
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 126,
                  "decorators": [],
                  "name": "m1",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 157,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "decorators": [],
              "name": "quanch",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 148,
              "end": 157,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 148,
                "end": 155,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 148,
                  "end": 152
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 155,
                  "decorators": [],
                  "name": "m3",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 178,
            "end": 213,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 180,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 213,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 193,
                    "end": 201,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 193,
                      "end": 201,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 193,
                        "end": 197
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 201,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 237,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 220,
              "decorators": [],
              "name": "m3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 237,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 237,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 242,
            "end": 276,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 253,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 253,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 274,
                "end": 276,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 254,
                  "end": 272,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 272,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 264,
                      "end": 272,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 266,
                        "end": 272
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 281,
            "end": 296,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 285,
              "decorators": [],
              "name": "quim",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 288,
              "end": 296,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 288,
                "end": 292
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 293,
                "end": 296,
                "decorators": [],
                "name": "baz",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 332,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 323,
              "end": 331,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 323,
                "end": 327
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 331,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 353,
            "end": 368,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 353,
              "end": 357,
              "decorators": [],
              "name": "quid",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 360,
              "end": 368,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 360,
                "end": 364
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 365,
                "end": 368,
                "decorators": [],
                "name": "baz",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 379,
            "end": 414,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 381,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 414,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 384,
                "end": 414,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 394,
                    "end": 402,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 394,
                      "end": 402,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 394,
                        "end": 398
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 402,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 418,
      "end": 466,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 466,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 442,
            "end": 458,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 447,
              "decorators": [],
              "name": "quill",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 450,
              "end": 458,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 450,
                "end": 454
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 455,
                "end": 458,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 425,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 434,
        "end": 435,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 468,
      "end": 584,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 476,
        "end": 584,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 482,
            "end": 516,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 482,
              "end": 485,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 488,
              "end": 515,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 494,
                "end": 515,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 494,
                  "end": 503,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 494,
                    "end": 498
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 503,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 506,
                  "end": 515,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 506,
                    "end": 510
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 515,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 532,
            "end": 542,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 532,
              "end": 536,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 539,
              "end": 541,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "MethodDefinition",
            "start": 547,
            "end": 582,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 558,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 558,
              "end": 582,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 580,
                "end": 582,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 559,
                  "end": 578,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 578,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 578,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 572,
                        "end": 578
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 475,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 586,
      "end": 665,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 594,
        "end": 665,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 600,
            "end": 652,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 605,
              "decorators": [],
              "name": "Inner",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "start": 608,
              "end": 652,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 624,
                "end": 652,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 634,
                    "end": 646,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 636,
                      "decorators": [],
                      "name": "p2",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "MemberExpression",
                      "start": 639,
                      "end": 646,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 639,
                        "end": 643
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 644,
                        "end": 646,
                        "decorators": [],
                        "name": "p1",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "decorators": [],
                "name": "F",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 657,
            "end": 663,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 657,
              "end": 659,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 593,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 666,
      "end": 772,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 674,
        "end": 772,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 680,
            "end": 732,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 680,
              "end": 685,
              "decorators": [],
              "name": "Inner",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "start": 688,
              "end": 732,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 704,
                "end": 732,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 714,
                    "end": 726,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 714,
                      "end": 716,
                      "decorators": [],
                      "name": "p2",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "MemberExpression",
                      "start": 719,
                      "end": 726,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 719,
                        "end": 723
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 724,
                        "end": 726,
                        "decorators": [],
                        "name": "p1",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 702,
                "end": 703,
                "decorators": [],
                "name": "G",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 737,
            "end": 770,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 737,
              "end": 748,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 748,
              "end": 770,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 768,
                "end": 770,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 749,
                  "end": 766,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 756,
                    "end": 766,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 758,
                      "end": 766,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 760,
                        "end": 766
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 672,
        "end": 673,
        "decorators": [],
        "name": "G",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 773,
      "end": 912,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 781,
        "end": 912,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 787,
            "end": 815,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 787,
              "end": 798,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 798,
              "end": 815,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 813,
                "end": 815,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 799,
                  "end": 811,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 811,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 808,
                      "end": 811,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 810,
                        "end": 811,
                        "typeName": {
                          "type": "Identifier",
                          "start": 810,
                          "end": 811,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 821,
            "end": 874,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 828,
              "end": 830,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 833,
              "end": 874,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 839,
                "end": 874,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 849,
                    "end": 868,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 856,
                      "end": 867,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 856,
                        "end": 863,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 856,
                          "end": 860
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 861,
                          "end": 863,
                          "decorators": [],
                          "name": "p1",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 864,
                        "end": 867,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 880,
            "end": 910,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 887,
              "end": 889,
              "decorators": [],
              "name": "p3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 892,
              "end": 909,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 898,
                "end": 909,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 898,
                  "end": 905,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 898,
                    "end": 902
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 905,
                    "decorators": [],
                    "name": "p1",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 909,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 780,
        "decorators": [],
        "name": "H",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
