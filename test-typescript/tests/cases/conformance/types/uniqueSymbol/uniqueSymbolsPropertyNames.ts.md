uniqueSymbolsPropertyNames.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1158,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 52,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "equal",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 38,
                "end": 51,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 45,
                  "end": 51
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "OpTypes",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 126,
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 126,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 82,
            "end": 124,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 89,
              "end": 124,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 103,
                  "end": 123,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 123,
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 123,
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "start": 110,
                        "end": 123,
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 117,
                          "end": 123
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": true,
              "kind": "const"
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 77,
        "decorators": [],
        "name": "OpNamespace",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 147,
            "decorators": [],
            "name": "uniqueSymbol0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 164,
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 163,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 160,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 156,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 157,
                "end": 160,
                "decorators": [],
                "name": "for",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 185,
            "decorators": [],
            "name": "uniqueSymbol1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 188,
            "end": 202,
            "arguments": [
              {
                "type": "Literal",
                "start": 199,
                "end": 201,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 188,
              "end": 198,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "for",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 283,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 283,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 260,
            "end": 281,
            "argument": {
              "type": "Identifier",
              "start": 267,
              "end": 280,
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 231,
        "decorators": [],
        "name": "getUniqueSymbol0",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 233,
        "end": 255,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 235,
          "end": 255,
          "exprName": {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "decorators": [],
            "name": "uniqueSymbol0",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 366,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 366,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 341,
            "end": 362,
            "argument": {
              "type": "Identifier",
              "start": 348,
              "end": 361,
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 310,
        "decorators": [],
        "name": "getUniqueSymbol1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 312,
        "end": 334,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 314,
          "end": 334,
          "exprName": {
            "type": "Identifier",
            "start": 321,
            "end": 334,
            "decorators": [],
            "name": "uniqueSymbol1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 385,
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 378,
                "end": 385,
                "typeName": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 385,
                  "decorators": [],
                  "name": "OpTypes",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 388,
            "end": 432,
            "expression": {
              "type": "ObjectExpression",
              "start": 388,
              "end": 421,
              "properties": [
                {
                  "type": "Property",
                  "start": 392,
                  "end": 418,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 397,
                    "decorators": [],
                    "name": "equal",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 399,
                    "end": 418,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 410,
                        "end": 417,
                        "raw": "\"equal\"",
                        "value": "equal"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 399,
                      "end": 409,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 405,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 409,
                        "decorators": [],
                        "name": "for",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 432,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 432,
                "decorators": [],
                "name": "OpTypes",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 507,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "decorators": [],
            "name": "t0",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 446,
            "end": 507,
            "properties": [
              {
                "type": "Property",
                "start": 450,
                "end": 464,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 455,
                  "decorators": [],
                  "name": "equal",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 457,
                  "end": 464,
                  "raw": "\"first\"",
                  "value": "first"
                }
              },
              {
                "type": "Property",
                "start": 468,
                "end": 483,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 473,
                  "decorators": [],
                  "name": "equal",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 475,
                  "end": 483,
                  "raw": "\"second\"",
                  "value": "second"
                }
              },
              {
                "type": "Property",
                "start": 487,
                "end": 504,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 488,
                  "end": 495,
                  "raw": "\"equal\"",
                  "value": "equal"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 498,
                  "end": 504,
                  "raw": "\"last\"",
                  "value": "last"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 569,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 521,
            "end": 569,
            "properties": [
              {
                "type": "Property",
                "start": 525,
                "end": 544,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 526,
                  "end": 534,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 528,
                    "decorators": [],
                    "name": "Op",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 534,
                    "decorators": [],
                    "name": "equal",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 537,
                  "end": 544,
                  "raw": "\"first\"",
                  "value": "first"
                }
              },
              {
                "type": "Property",
                "start": 548,
                "end": 566,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 549,
                  "end": 557,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 551,
                    "decorators": [],
                    "name": "Op",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 557,
                    "decorators": [],
                    "name": "equal",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 560,
                  "end": 566,
                  "raw": "\"last\"",
                  "value": "last"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 649,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 583,
            "end": 649,
            "properties": [
              {
                "type": "Property",
                "start": 587,
                "end": 615,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 588,
                  "end": 605,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 599,
                    "decorators": [],
                    "name": "OpNamespace",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 605,
                    "decorators": [],
                    "name": "equal",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 608,
                  "end": 615,
                  "raw": "\"first\"",
                  "value": "first"
                }
              },
              {
                "type": "Property",
                "start": 619,
                "end": 646,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 620,
                  "end": 637,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 631,
                    "decorators": [],
                    "name": "OpNamespace",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 637,
                    "decorators": [],
                    "name": "equal",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 640,
                  "end": 646,
                  "raw": "\"last\"",
                  "value": "last"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 652,
      "end": 797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 658,
          "end": 796,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 660,
            "decorators": [],
            "name": "t3",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 663,
            "end": 796,
            "properties": [
              {
                "type": "Property",
                "start": 667,
                "end": 696,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 668,
                  "end": 686,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 684,
                    "decorators": [],
                    "name": "getUniqueSymbol0",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 689,
                  "end": 696,
                  "raw": "\"first\"",
                  "value": "first"
                }
              },
              {
                "type": "Property",
                "start": 700,
                "end": 728,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 701,
                  "end": 719,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 717,
                    "decorators": [],
                    "name": "getUniqueSymbol0",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 722,
                  "end": 728,
                  "raw": "\"last\"",
                  "value": "last"
                }
              },
              {
                "type": "Property",
                "start": 732,
                "end": 761,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 733,
                  "end": 751,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 749,
                    "decorators": [],
                    "name": "getUniqueSymbol1",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 754,
                  "end": 761,
                  "raw": "\"first\"",
                  "value": "first"
                }
              },
              {
                "type": "Property",
                "start": 765,
                "end": 793,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 766,
                  "end": 784,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 766,
                    "end": 782,
                    "decorators": [],
                    "name": "getUniqueSymbol1",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 787,
                  "end": 793,
                  "raw": "\"last\"",
                  "value": "last"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 927,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 810,
        "end": 927,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 814,
            "end": 840,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 815,
              "end": 828,
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 832,
              "end": 839,
              "raw": "\"first\"",
              "value": "first"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 843,
            "end": 868,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 844,
              "end": 857,
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 861,
              "end": 867,
              "raw": "\"last\"",
              "value": "last"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 871,
            "end": 897,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 885,
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 889,
              "end": 896,
              "raw": "\"first\"",
              "value": "first"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 900,
            "end": 925,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 901,
              "end": 914,
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 918,
              "end": 924,
              "raw": "\"last\"",
              "value": "last"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 809,
        "decorators": [],
        "name": "Cls1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 929,
      "end": 1008,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 940,
        "end": 1008,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 944,
            "end": 974,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 945,
              "end": 962,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 945,
                "end": 956,
                "decorators": [],
                "name": "OpNamespace",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 957,
                "end": 962,
                "decorators": [],
                "name": "equal",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 966,
              "end": 973,
              "raw": "\"first\"",
              "value": "first"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 977,
            "end": 1006,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 978,
              "end": 995,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 978,
                "end": 989,
                "decorators": [],
                "name": "OpNamespace",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 990,
                "end": 995,
                "decorators": [],
                "name": "equal",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 999,
              "end": 1005,
              "raw": "\"last\"",
              "value": "last"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 939,
        "decorators": [],
        "name": "Cls2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1010,
      "end": 1158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1021,
        "end": 1158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1025,
            "end": 1056,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1026,
              "end": 1044,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1026,
                "end": 1042,
                "decorators": [],
                "name": "getUniqueSymbol0",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1048,
              "end": 1055,
              "raw": "\"first\"",
              "value": "first"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1059,
            "end": 1089,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1060,
              "end": 1078,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1060,
                "end": 1076,
                "decorators": [],
                "name": "getUniqueSymbol0",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1082,
              "end": 1088,
              "raw": "\"last\"",
              "value": "last"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1092,
            "end": 1123,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1093,
              "end": 1111,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1093,
                "end": 1109,
                "decorators": [],
                "name": "getUniqueSymbol1",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1115,
              "end": 1122,
              "raw": "\"first\"",
              "value": "first"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1126,
            "end": 1156,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1145,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1127,
                "end": 1143,
                "decorators": [],
                "name": "getUniqueSymbol1",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1149,
              "end": 1155,
              "raw": "\"last\"",
              "value": "last"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1016,
        "end": 1020,
        "decorators": [],
        "name": "Cls3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
