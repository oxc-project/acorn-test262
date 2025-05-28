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
        "decorators": [],
        "name": "OpTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "equal",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "OpNamespace",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 103,
                  "end": 123,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 147,
            "decorators": [],
            "name": "uniqueSymbol0",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 157,
                "end": 160,
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 163,
                "value": "",
                "raw": "\"\""
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
      "start": 166,
      "end": 203,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 185,
            "decorators": [],
            "name": "uniqueSymbol1",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 199,
                "end": 201,
                "value": "",
                "raw": "\"\""
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
      "start": 206,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 231,
        "decorators": [],
        "name": "getUniqueSymbol0",
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "start": 285,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 310,
        "decorators": [],
        "name": "getUniqueSymbol1",
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 433,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 432,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 397,
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 409,
                        "decorators": [],
                        "name": "for",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 410,
                        "end": 417,
                        "value": "equal",
                        "raw": "\"equal\""
                      }
                    ],
                    "optional": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
                "decorators": [],
                "name": "OpTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 508,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 507,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "decorators": [],
            "name": "t0",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 455,
                  "decorators": [],
                  "name": "equal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 457,
                  "end": 464,
                  "value": "first",
                  "raw": "\"first\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 468,
                "end": 483,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 473,
                  "decorators": [],
                  "name": "equal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 475,
                  "end": 483,
                  "value": "second",
                  "raw": "\"second\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 487,
                "end": 504,
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 570,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 569,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 526,
                  "end": 534,
                  "object": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 528,
                    "decorators": [],
                    "name": "Op",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 534,
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 537,
                  "end": 544,
                  "value": "first",
                  "raw": "\"first\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 548,
                "end": 566,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 549,
                  "end": 557,
                  "object": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 551,
                    "decorators": [],
                    "name": "Op",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 557,
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 560,
                  "end": 566,
                  "value": "last",
                  "raw": "\"last\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 650,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 588,
                  "end": 605,
                  "object": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 599,
                    "decorators": [],
                    "name": "OpNamespace",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 605,
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 608,
                  "end": 615,
                  "value": "first",
                  "raw": "\"first\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 619,
                "end": 646,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 620,
                  "end": 637,
                  "object": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 631,
                    "decorators": [],
                    "name": "OpNamespace",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 637,
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 640,
                  "end": 646,
                  "value": "last",
                  "raw": "\"last\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 652,
      "end": 797,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 658,
          "end": 796,
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 660,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 668,
                  "end": 686,
                  "callee": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 684,
                    "decorators": [],
                    "name": "getUniqueSymbol0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 689,
                  "end": 696,
                  "value": "first",
                  "raw": "\"first\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 700,
                "end": 728,
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 701,
                  "end": 719,
                  "callee": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 717,
                    "decorators": [],
                    "name": "getUniqueSymbol0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 722,
                  "end": 728,
                  "value": "last",
                  "raw": "\"last\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 732,
                "end": 761,
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 733,
                  "end": 751,
                  "callee": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 749,
                    "decorators": [],
                    "name": "getUniqueSymbol1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 754,
                  "end": 761,
                  "value": "first",
                  "raw": "\"first\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 765,
                "end": 793,
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 766,
                  "end": 784,
                  "callee": {
                    "type": "Identifier",
                    "start": 766,
                    "end": 782,
                    "decorators": [],
                    "name": "getUniqueSymbol1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 787,
                  "end": 793,
                  "value": "last",
                  "raw": "\"last\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 799,
      "end": 927,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 809,
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 810,
        "end": 927,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 814,
            "end": 840,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 815,
              "end": 828,
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 832,
              "end": 839,
              "value": "first",
              "raw": "\"first\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 843,
            "end": 868,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 844,
              "end": 857,
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 861,
              "end": 867,
              "value": "last",
              "raw": "\"last\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 871,
            "end": 897,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 885,
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 889,
              "end": 896,
              "value": "first",
              "raw": "\"first\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 900,
            "end": 925,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 901,
              "end": 914,
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 918,
              "end": 924,
              "value": "last",
              "raw": "\"last\""
            },
            "computed": true,
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
      "start": 929,
      "end": 1008,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 939,
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 940,
        "end": 1008,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 944,
            "end": 974,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 945,
              "end": 962,
              "object": {
                "type": "Identifier",
                "start": 945,
                "end": 956,
                "decorators": [],
                "name": "OpNamespace",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 957,
                "end": 962,
                "decorators": [],
                "name": "equal",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 966,
              "end": 973,
              "value": "first",
              "raw": "\"first\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 977,
            "end": 1006,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 978,
              "end": 995,
              "object": {
                "type": "Identifier",
                "start": 978,
                "end": 989,
                "decorators": [],
                "name": "OpNamespace",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 990,
                "end": 995,
                "decorators": [],
                "name": "equal",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 999,
              "end": 1005,
              "value": "last",
              "raw": "\"last\""
            },
            "computed": true,
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
      "start": 1010,
      "end": 1158,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1016,
        "end": 1020,
        "decorators": [],
        "name": "Cls3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1021,
        "end": 1158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1025,
            "end": 1056,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 1026,
              "end": 1044,
              "callee": {
                "type": "Identifier",
                "start": 1026,
                "end": 1042,
                "decorators": [],
                "name": "getUniqueSymbol0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1048,
              "end": 1055,
              "value": "first",
              "raw": "\"first\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1059,
            "end": 1089,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 1060,
              "end": 1078,
              "callee": {
                "type": "Identifier",
                "start": 1060,
                "end": 1076,
                "decorators": [],
                "name": "getUniqueSymbol0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1082,
              "end": 1088,
              "value": "last",
              "raw": "\"last\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1092,
            "end": 1123,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 1093,
              "end": 1111,
              "callee": {
                "type": "Identifier",
                "start": 1093,
                "end": 1109,
                "decorators": [],
                "name": "getUniqueSymbol1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1115,
              "end": 1122,
              "value": "first",
              "raw": "\"first\""
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1126,
            "end": 1156,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1145,
              "callee": {
                "type": "Identifier",
                "start": 1127,
                "end": 1143,
                "decorators": [],
                "name": "getUniqueSymbol1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1149,
              "end": 1155,
              "value": "last",
              "raw": "\"last\""
            },
            "computed": true,
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
