memberFunctionsWithPublicPrivateOverloads.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1752,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 863,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 863,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 37,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 75,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 52,
              "end": 75,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 62,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 73,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 67,
                      "end": 73
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 121,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 121,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 104,
                      "end": 107
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 116,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 113,
                      "end": 116
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 148,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 138,
              "end": 148,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 146,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 142,
                      "end": 146,
                      "literal": {
                        "type": "Literal",
                        "start": 142,
                        "end": 146,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 175,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 163,
              "end": 175,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 164,
                  "end": 173,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 167,
                      "end": 173
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 189,
            "end": 223,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 200,
              "end": 223,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 210,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 210,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 204,
                      "end": 210
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 212,
                  "end": 221,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 213,
                    "end": 221,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 215,
                      "end": 221
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 260,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 239,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 260,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 257,
                "end": 260,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 240,
                  "end": 246,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 241,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 243,
                      "end": 246
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 255,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 250,
                    "end": 255,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 252,
                      "end": 255
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 296,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 284,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 284,
              "end": 296,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 294,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 286,
                    "end": 294,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 288,
                      "end": 294
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 301,
            "end": 341,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 318,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 318,
              "end": 341,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 319,
                  "end": 328,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 328,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 322,
                      "end": 328
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 330,
                  "end": 339,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 333,
                      "end": 339
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 394,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 373,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 373,
              "end": 394,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 394,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 374,
                  "end": 380,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 380,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 377,
                      "end": 380
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 382,
                  "end": 389,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 386,
                      "end": 389
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 400,
            "end": 425,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 413,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 413,
              "end": 425,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 414,
                  "end": 423,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 417,
                      "end": 423
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 475,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 449,
              "end": 452,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 452,
              "end": 475,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 453,
                  "end": 462,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 454,
                    "end": 462,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 456,
                      "end": 462
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 464,
                  "end": 473,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 465,
                    "end": 473,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 467,
                      "end": 473
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 489,
            "end": 521,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 500,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 500,
              "end": 521,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 518,
                "end": 521,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 501,
                  "end": 507,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 502,
                    "end": 507,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 504,
                      "end": 507
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 509,
                  "end": 516,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 511,
                    "end": 516,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 513,
                      "end": 516
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 527,
            "end": 555,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 542,
              "end": 545,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 545,
              "end": 555,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 546,
                  "end": 553,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 547,
                    "end": 553,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 549,
                      "end": 553,
                      "literal": {
                        "type": "Literal",
                        "start": 549,
                        "end": 553,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 560,
            "end": 589,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 574,
              "end": 577,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 577,
              "end": 589,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 587,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 579,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 581,
                      "end": 587
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 603,
            "end": 644,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 621,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 621,
              "end": 644,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 622,
                  "end": 631,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 623,
                    "end": 631,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 625,
                      "end": 631
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 633,
                  "end": 642,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 634,
                    "end": 642,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 636,
                      "end": 642
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 688,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 667,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 667,
              "end": 688,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 685,
                "end": 688,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 674,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 669,
                    "end": 674,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 671,
                      "end": 674
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 676,
                  "end": 683,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 678,
                    "end": 683,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 680,
                      "end": 683
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 694,
            "end": 724,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 714,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 714,
              "end": 724,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 715,
                  "end": 722,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 716,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 718,
                      "end": 722,
                      "literal": {
                        "type": "Literal",
                        "start": 718,
                        "end": 722,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 729,
            "end": 758,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 746,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 746,
              "end": 758,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 747,
                  "end": 756,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 748,
                    "end": 756,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 750,
                      "end": 756
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 772,
            "end": 815,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 789,
              "end": 792,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 792,
              "end": 815,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 793,
                  "end": 802,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 794,
                    "end": 802,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 796,
                      "end": 802
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 804,
                  "end": 813,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 805,
                    "end": 813,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 807,
                      "end": 813
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 820,
            "end": 861,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 837,
              "end": 840,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 840,
              "end": 861,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 858,
                "end": 861,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 841,
                  "end": 847,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 842,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 844,
                      "end": 847
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 849,
                  "end": 856,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 851,
                    "end": 856,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 853,
                      "end": 856
                    }
                  }
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
      "start": 865,
      "end": 1667,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 876,
        "end": 1667,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 882,
            "end": 905,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 890,
              "end": 893,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 893,
              "end": 905,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 894,
                  "end": 903,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 895,
                    "end": 903,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 897,
                      "end": 903
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 911,
            "end": 934,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 918,
              "end": 921,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 921,
              "end": 934,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 922,
                  "end": 926,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 923,
                    "end": 926,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 925,
                      "end": 926,
                      "typeName": {
                        "type": "Identifier",
                        "start": 925,
                        "end": 926,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 928,
                  "end": 932,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 929,
                    "end": 932,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 931,
                      "end": 932,
                      "typeName": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 932,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 948,
            "end": 980,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 956,
              "end": 959,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 959,
              "end": 980,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 977,
                "end": 980,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 960,
                  "end": 966,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 961,
                    "end": 966,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 963,
                      "end": 966
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 968,
                  "end": 975,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 970,
                    "end": 975,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 972,
                      "end": 975
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 986,
            "end": 1007,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 994,
              "end": 997,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 997,
              "end": 1007,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1005,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 999,
                    "end": 1005,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1001,
                      "end": 1005,
                      "literal": {
                        "type": "Literal",
                        "start": 1001,
                        "end": 1005,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1012,
            "end": 1034,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1019,
              "end": 1022,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1022,
              "end": 1034,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1023,
                  "end": 1032,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1024,
                    "end": 1032,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1026,
                      "end": 1032
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1048,
            "end": 1072,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1056,
              "end": 1059,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1059,
              "end": 1072,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1060,
                  "end": 1064,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1061,
                    "end": 1064,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1063,
                      "end": 1064,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1063,
                        "end": 1064,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1070,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1067,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1069,
                      "end": 1070,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1069,
                        "end": 1070,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1077,
            "end": 1109,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1085,
              "end": 1088,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1088,
              "end": 1109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1106,
                "end": 1109,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1095,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1090,
                    "end": 1095,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1092,
                      "end": 1095
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1104,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1099,
                    "end": 1104,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1101,
                      "end": 1104
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1115,
            "end": 1138,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1123,
              "end": 1126,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1126,
              "end": 1138,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1136,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1128,
                    "end": 1136,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1130,
                      "end": 1136
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1144,
            "end": 1180,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1154,
              "end": 1157,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1157,
              "end": 1180,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1167,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1159,
                    "end": 1167,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1161,
                      "end": 1167
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1178,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1170,
                    "end": 1178,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1172,
                      "end": 1178
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1194,
            "end": 1226,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1202,
              "end": 1205,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1205,
              "end": 1226,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1223,
                "end": 1226,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1212,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1207,
                    "end": 1212,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1209,
                      "end": 1212
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1221,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1216,
                    "end": 1221,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1218,
                      "end": 1221
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1232,
            "end": 1262,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1247,
              "end": 1250,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1250,
              "end": 1262,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1251,
                  "end": 1260,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1252,
                    "end": 1260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1254,
                      "end": 1260
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1267,
            "end": 1307,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1281,
              "end": 1284,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1284,
              "end": 1307,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1285,
                  "end": 1294,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1286,
                    "end": 1294,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1288,
                      "end": 1294
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1305,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1297,
                    "end": 1305,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1299,
                      "end": 1305
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1321,
            "end": 1360,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1336,
              "end": 1339,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1339,
              "end": 1360,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1357,
                "end": 1360,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1340,
                  "end": 1346,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1341,
                    "end": 1346,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1343,
                      "end": 1346
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1355,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1350,
                    "end": 1355,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1352,
                      "end": 1355
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1366,
            "end": 1394,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1381,
              "end": 1384,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1384,
              "end": 1394,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1392,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1386,
                    "end": 1392,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1388,
                      "end": 1392,
                      "literal": {
                        "type": "Literal",
                        "start": 1388,
                        "end": 1392,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1399,
            "end": 1428,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1413,
              "end": 1416,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1416,
              "end": 1428,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1426,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1418,
                    "end": 1426,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1420,
                      "end": 1426
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1442,
            "end": 1483,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1457,
              "end": 1460,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1460,
              "end": 1483,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1470,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1462,
                    "end": 1470,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1464,
                      "end": 1470
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1481,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1473,
                    "end": 1481,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1475,
                      "end": 1481
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1488,
            "end": 1527,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1503,
              "end": 1506,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1506,
              "end": 1527,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1524,
                "end": 1527,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1513,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1508,
                    "end": 1513,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1510,
                      "end": 1513
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1515,
                  "end": 1522,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1517,
                    "end": 1522,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1519,
                      "end": 1522
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1533,
            "end": 1562,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1547,
              "end": 1550,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1550,
              "end": 1562,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1551,
                  "end": 1560,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1552,
                    "end": 1560,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1554,
                      "end": 1560
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1576,
            "end": 1619,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1593,
              "end": 1596,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1596,
              "end": 1619,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1597,
                  "end": 1606,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1598,
                    "end": 1606,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1600,
                      "end": 1606
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1608,
                  "end": 1617,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1609,
                    "end": 1617,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1611,
                      "end": 1617
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1624,
            "end": 1665,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1641,
              "end": 1644,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1644,
              "end": 1665,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1662,
                "end": 1665,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1645,
                  "end": 1651,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1646,
                    "end": 1651,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1648,
                      "end": 1651
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1653,
                  "end": 1660,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1655,
                    "end": 1660,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1657,
                      "end": 1660
                    }
                  }
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
        "start": 871,
        "end": 872,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 872,
        "end": 875,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 873,
            "end": 874,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1669,
      "end": 1678,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1673,
          "end": 1677,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1673,
            "end": 1677,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1674,
              "end": 1677,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1676,
                "end": 1677,
                "typeName": {
                  "type": "Identifier",
                  "start": 1676,
                  "end": 1677,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1679,
      "end": 1696,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1683,
          "end": 1695,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1683,
            "end": 1684,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1687,
            "end": 1695,
            "arguments": [
              {
                "type": "Literal",
                "start": 1693,
                "end": 1694,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1687,
              "end": 1692,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1687,
                "end": 1688,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1689,
                "end": 1692,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1707,
      "end": 1724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1711,
          "end": 1723,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1711,
            "end": 1723,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1712,
              "end": 1723,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1714,
                "end": 1723,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1715,
                  "end": 1723,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1716,
                      "end": 1722
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1714,
                  "end": 1715,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1725,
      "end": 1743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1729,
          "end": 1742,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1729,
            "end": 1731,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1734,
            "end": 1742,
            "arguments": [
              {
                "type": "Literal",
                "start": 1740,
                "end": 1741,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1734,
              "end": 1739,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1734,
                "end": 1735,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1736,
                "end": 1739,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
