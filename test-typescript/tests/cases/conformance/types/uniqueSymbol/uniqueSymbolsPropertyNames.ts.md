__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "OpTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "name": "equal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 77,
        "name": "OpNamespace",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 126,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 82,
            "end": 124,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 89,
              "end": 124,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 103,
                  "end": 123,
                  "id": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 123,
                    "name": "equal",
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
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 147,
            "name": "uniqueSymbol0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 164,
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 156,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 157,
                "end": 160,
                "name": "for",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 163,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 185,
            "name": "uniqueSymbol1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 188,
            "end": 202,
            "callee": {
              "type": "MemberExpression",
              "start": 188,
              "end": 198,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "name": "for",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 199,
                "end": 201,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 231,
        "name": "getUniqueSymbol0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "uniqueSymbol0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "uniqueSymbol0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 310,
        "name": "getUniqueSymbol1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "uniqueSymbol1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "uniqueSymbol1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 385,
            "name": "Op",
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
                  "name": "OpTypes",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 397,
                    "name": "equal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 399,
                    "end": 418,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 399,
                      "end": 409,
                      "object": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 405,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 409,
                        "name": "for",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 410,
                        "end": 417,
                        "value": "equal",
                        "raw": "\"equal\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
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
                "name": "OpTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "name": "t0",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 455,
                  "name": "equal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 457,
                  "end": 464,
                  "value": "first",
                  "raw": "\"first\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 468,
                "end": 483,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 473,
                  "name": "equal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 475,
                  "end": 483,
                  "value": "second",
                  "raw": "\"second\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 487,
                "end": 504,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 488,
                  "end": 495,
                  "value": "equal",
                  "raw": "\"equal\""
                },
                "value": {
                  "type": "Literal",
                  "start": 498,
                  "end": 504,
                  "value": "last",
                  "raw": "\"last\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 526,
                  "end": 534,
                  "object": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 528,
                    "name": "Op",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 534,
                    "name": "equal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 537,
                  "end": 544,
                  "value": "first",
                  "raw": "\"first\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 548,
                "end": 566,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 549,
                  "end": 557,
                  "object": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 551,
                    "name": "Op",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 557,
                    "name": "equal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 560,
                  "end": 566,
                  "value": "last",
                  "raw": "\"last\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 588,
                  "end": 605,
                  "object": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 599,
                    "name": "OpNamespace",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 605,
                    "name": "equal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 608,
                  "end": 615,
                  "value": "first",
                  "raw": "\"first\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 619,
                "end": 646,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 620,
                  "end": 637,
                  "object": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 631,
                    "name": "OpNamespace",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 637,
                    "name": "equal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 640,
                  "end": 646,
                  "value": "last",
                  "raw": "\"last\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 660,
            "name": "t3",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 668,
                  "end": 686,
                  "callee": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 684,
                    "name": "getUniqueSymbol0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 689,
                  "end": 696,
                  "value": "first",
                  "raw": "\"first\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 700,
                "end": 728,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 701,
                  "end": 719,
                  "callee": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 717,
                    "name": "getUniqueSymbol0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 722,
                  "end": 728,
                  "value": "last",
                  "raw": "\"last\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 732,
                "end": 761,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 733,
                  "end": 751,
                  "callee": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 749,
                    "name": "getUniqueSymbol1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 754,
                  "end": 761,
                  "value": "first",
                  "raw": "\"first\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 765,
                "end": 793,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 766,
                  "end": 784,
                  "callee": {
                    "type": "Identifier",
                    "start": 766,
                    "end": 782,
                    "name": "getUniqueSymbol1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 787,
                  "end": 793,
                  "value": "last",
                  "raw": "\"last\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 927,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 809,
        "name": "Cls1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 810,
        "end": 927,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 814,
            "end": 840,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 815,
              "end": 828,
              "name": "uniqueSymbol0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 832,
              "end": 839,
              "value": "first",
              "raw": "\"first\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 843,
            "end": 868,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 844,
              "end": 857,
              "name": "uniqueSymbol0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 861,
              "end": 867,
              "value": "last",
              "raw": "\"last\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 871,
            "end": 897,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 885,
              "name": "uniqueSymbol1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 889,
              "end": 896,
              "value": "first",
              "raw": "\"first\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 900,
            "end": 925,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 901,
              "end": 914,
              "name": "uniqueSymbol1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 918,
              "end": 924,
              "value": "last",
              "raw": "\"last\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 929,
      "end": 1008,
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 939,
        "name": "Cls2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 940,
        "end": 1008,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 944,
            "end": 974,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 945,
              "end": 962,
              "object": {
                "type": "Identifier",
                "start": 945,
                "end": 956,
                "name": "OpNamespace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 957,
                "end": 962,
                "name": "equal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 966,
              "end": 973,
              "value": "first",
              "raw": "\"first\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 977,
            "end": 1006,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 978,
              "end": 995,
              "object": {
                "type": "Identifier",
                "start": 978,
                "end": 989,
                "name": "OpNamespace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 990,
                "end": 995,
                "name": "equal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 999,
              "end": 1005,
              "value": "last",
              "raw": "\"last\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 1010,
      "end": 1158,
      "id": {
        "type": "Identifier",
        "start": 1016,
        "end": 1020,
        "name": "Cls3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1021,
        "end": 1158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1025,
            "end": 1056,
            "static": false,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 1026,
              "end": 1044,
              "callee": {
                "type": "Identifier",
                "start": 1026,
                "end": 1042,
                "name": "getUniqueSymbol0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 1048,
              "end": 1055,
              "value": "first",
              "raw": "\"first\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1059,
            "end": 1089,
            "static": false,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 1060,
              "end": 1078,
              "callee": {
                "type": "Identifier",
                "start": 1060,
                "end": 1076,
                "name": "getUniqueSymbol0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 1082,
              "end": 1088,
              "value": "last",
              "raw": "\"last\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1092,
            "end": 1123,
            "static": false,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 1093,
              "end": 1111,
              "callee": {
                "type": "Identifier",
                "start": 1093,
                "end": 1109,
                "name": "getUniqueSymbol1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 1115,
              "end": 1122,
              "value": "first",
              "raw": "\"first\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1126,
            "end": 1156,
            "static": false,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1145,
              "callee": {
                "type": "Identifier",
                "start": 1127,
                "end": 1143,
                "name": "getUniqueSymbol1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 1149,
              "end": 1155,
              "value": "last",
              "raw": "\"last\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
