__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OpTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equal",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 45,
                  "end": 51
                },
                "start": 38,
                "end": 51
              },
              "start": 36,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 52
          }
        ],
        "start": 18,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OpNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 77
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 117,
                          "end": 123
                        },
                        "start": 110,
                        "end": 123
                      },
                      "start": 108,
                      "end": 123
                    },
                    "start": 103,
                    "end": 123
                  },
                  "init": null,
                  "definite": false,
                  "start": 103,
                  "end": 123
                }
              ],
              "declare": true,
              "start": 89,
              "end": 124
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 82,
            "end": 124
          }
        ],
        "start": 78,
        "end": 126
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 56,
      "end": 126
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "uniqueSymbol0",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 156
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 160
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 161,
                "end": 163
              }
            ],
            "optional": false,
            "start": 150,
            "end": 164
          },
          "definite": false,
          "start": 134,
          "end": 164
        }
      ],
      "declare": false,
      "start": 128,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "uniqueSymbol1",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 185
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 198
              },
              "optional": false,
              "computed": false,
              "start": 188,
              "end": 198
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 199,
                "end": 201
              }
            ],
            "optional": false,
            "start": 188,
            "end": 202
          },
          "definite": false,
          "start": 172,
          "end": 202
        }
      ],
      "declare": false,
      "start": 166,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getUniqueSymbol0",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "uniqueSymbol0",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 255
          },
          "typeArguments": null,
          "start": 235,
          "end": 255
        },
        "start": 233,
        "end": 255
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 280
            },
            "start": 260,
            "end": 281
          }
        ],
        "start": 256,
        "end": 283
      },
      "expression": false,
      "start": 206,
      "end": 283
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getUniqueSymbol1",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "uniqueSymbol1",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 334
          },
          "typeArguments": null,
          "start": 314,
          "end": 334
        },
        "start": 312,
        "end": 334
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 361
            },
            "start": 341,
            "end": 362
          }
        ],
        "start": 335,
        "end": 366
      },
      "expression": false,
      "start": 285,
      "end": 366
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OpTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 385
                },
                "typeArguments": null,
                "start": 378,
                "end": 385
              },
              "start": 376,
              "end": 385
            },
            "start": 374,
            "end": 385
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 397
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 405
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "for",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 409
                      },
                      "optional": false,
                      "computed": false,
                      "start": 399,
                      "end": 409
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "equal",
                        "raw": "\"equal\"",
                        "start": 410,
                        "end": 417
                      }
                    ],
                    "optional": false,
                    "start": 399,
                    "end": 418
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 392,
                  "end": 418
                }
              ],
              "start": 388,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OpTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 432
              },
              "typeArguments": null,
              "start": 425,
              "end": 432
            },
            "start": 388,
            "end": 432
          },
          "definite": false,
          "start": 374,
          "end": 432
        }
      ],
      "declare": false,
      "start": 368,
      "end": 433
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t0",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 443
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "equal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 455
                },
                "value": {
                  "type": "Literal",
                  "value": "first",
                  "raw": "\"first\"",
                  "start": 457,
                  "end": 464
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 450,
                "end": 464
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "equal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 473
                },
                "value": {
                  "type": "Literal",
                  "value": "second",
                  "raw": "\"second\"",
                  "start": 475,
                  "end": 483
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 468,
                "end": 483
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "equal",
                  "raw": "\"equal\"",
                  "start": 488,
                  "end": 495
                },
                "value": {
                  "type": "Literal",
                  "value": "last",
                  "raw": "\"last\"",
                  "start": 498,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 487,
                "end": 504
              }
            ],
            "start": 446,
            "end": 507
          },
          "definite": false,
          "start": 441,
          "end": 507
        }
      ],
      "declare": false,
      "start": 435,
      "end": 508
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 518
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Op",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 528
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 534
                  },
                  "optional": false,
                  "computed": false,
                  "start": 526,
                  "end": 534
                },
                "value": {
                  "type": "Literal",
                  "value": "first",
                  "raw": "\"first\"",
                  "start": 537,
                  "end": 544
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 525,
                "end": 544
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Op",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 557
                  },
                  "optional": false,
                  "computed": false,
                  "start": 549,
                  "end": 557
                },
                "value": {
                  "type": "Literal",
                  "value": "last",
                  "raw": "\"last\"",
                  "start": 560,
                  "end": 566
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 548,
                "end": 566
              }
            ],
            "start": 521,
            "end": 569
          },
          "definite": false,
          "start": 516,
          "end": 569
        }
      ],
      "declare": false,
      "start": 510,
      "end": 570
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 580
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OpNamespace",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 588,
                    "end": 599
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 605
                  },
                  "optional": false,
                  "computed": false,
                  "start": 588,
                  "end": 605
                },
                "value": {
                  "type": "Literal",
                  "value": "first",
                  "raw": "\"first\"",
                  "start": 608,
                  "end": 615
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 587,
                "end": 615
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OpNamespace",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 631
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 637
                  },
                  "optional": false,
                  "computed": false,
                  "start": 620,
                  "end": 637
                },
                "value": {
                  "type": "Literal",
                  "value": "last",
                  "raw": "\"last\"",
                  "start": 640,
                  "end": 646
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 619,
                "end": 646
              }
            ],
            "start": 583,
            "end": 649
          },
          "definite": false,
          "start": 578,
          "end": 649
        }
      ],
      "declare": false,
      "start": 572,
      "end": 650
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 658,
            "end": 660
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getUniqueSymbol0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 684
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 668,
                  "end": 686
                },
                "value": {
                  "type": "Literal",
                  "value": "first",
                  "raw": "\"first\"",
                  "start": 689,
                  "end": 696
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 667,
                "end": 696
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getUniqueSymbol0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 717
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 701,
                  "end": 719
                },
                "value": {
                  "type": "Literal",
                  "value": "last",
                  "raw": "\"last\"",
                  "start": 722,
                  "end": 728
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 700,
                "end": 728
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getUniqueSymbol1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 749
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 733,
                  "end": 751
                },
                "value": {
                  "type": "Literal",
                  "value": "first",
                  "raw": "\"first\"",
                  "start": 754,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 732,
                "end": 761
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getUniqueSymbol1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 766,
                    "end": 782
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 766,
                  "end": 784
                },
                "value": {
                  "type": "Literal",
                  "value": "last",
                  "raw": "\"last\"",
                  "start": 787,
                  "end": 793
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 765,
                "end": 793
              }
            ],
            "start": 663,
            "end": 796
          },
          "definite": false,
          "start": 658,
          "end": 796
        }
      ],
      "declare": false,
      "start": 652,
      "end": 797
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 809
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 828
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "first",
              "raw": "\"first\"",
              "start": 832,
              "end": 839
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 814,
            "end": 840
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSymbol0",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 857
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "last",
              "raw": "\"last\"",
              "start": 861,
              "end": 867
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 843,
            "end": 868
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 885
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "first",
              "raw": "\"first\"",
              "start": 889,
              "end": 896
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 871,
            "end": 897
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSymbol1",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 914
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "last",
              "raw": "\"last\"",
              "start": 918,
              "end": 924
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 900,
            "end": 925
          }
        ],
        "start": 810,
        "end": 927
      },
      "abstract": false,
      "declare": false,
      "start": 799,
      "end": 927
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 939
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "OpNamespace",
                "optional": false,
                "typeAnnotation": null,
                "start": 945,
                "end": 956
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "equal",
                "optional": false,
                "typeAnnotation": null,
                "start": 957,
                "end": 962
              },
              "optional": false,
              "computed": false,
              "start": 945,
              "end": 962
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "first",
              "raw": "\"first\"",
              "start": 966,
              "end": 973
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 944,
            "end": 974
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "OpNamespace",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 989
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "equal",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 995
              },
              "optional": false,
              "computed": false,
              "start": 978,
              "end": 995
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "last",
              "raw": "\"last\"",
              "start": 999,
              "end": 1005
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 977,
            "end": 1006
          }
        ],
        "start": 940,
        "end": 1008
      },
      "abstract": false,
      "declare": false,
      "start": 929,
      "end": 1008
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1020
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUniqueSymbol0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1042
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1026,
              "end": 1044
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "first",
              "raw": "\"first\"",
              "start": 1048,
              "end": 1055
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1025,
            "end": 1056
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUniqueSymbol0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1076
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1060,
              "end": 1078
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "last",
              "raw": "\"last\"",
              "start": 1082,
              "end": 1088
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1059,
            "end": 1089
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUniqueSymbol1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1109
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1093,
              "end": 1111
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "first",
              "raw": "\"first\"",
              "start": 1115,
              "end": 1122
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1092,
            "end": 1123
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUniqueSymbol1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1143
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1127,
              "end": 1145
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "last",
              "raw": "\"last\"",
              "start": 1149,
              "end": 1155
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1126,
            "end": 1156
          }
        ],
        "start": 1021,
        "end": 1158
      },
      "abstract": false,
      "declare": false,
      "start": 1010,
      "end": 1158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1158
}
```
