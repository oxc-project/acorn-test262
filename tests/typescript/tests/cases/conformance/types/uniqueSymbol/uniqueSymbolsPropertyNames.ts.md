__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "OpTypes",
    "start": 10,
    "end": 17,
    "range": [
      10,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 22,
    "end": 30,
    "range": [
      22,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 31,
    "end": 36,
    "range": [
      31,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 56,
    "end": 65,
    "range": [
      56,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "OpNamespace",
    "start": 66,
    "end": 77,
    "range": [
      66,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102,
    "range": [
      97,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 103,
    "end": 108,
    "range": [
      103,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol0",
    "start": 134,
    "end": 147,
    "range": [
      134,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171,
    "range": [
      166,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol1",
    "start": 172,
    "end": 185,
    "range": [
      172,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 199,
    "end": 201,
    "range": [
      199,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 206,
    "end": 214,
    "range": [
      206,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol0",
    "start": 215,
    "end": 231,
    "range": [
      215,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 235,
    "end": 241,
    "range": [
      235,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol0",
    "start": 242,
    "end": 255,
    "range": [
      242,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol0",
    "start": 267,
    "end": 280,
    "range": [
      267,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 285,
    "end": 293,
    "range": [
      285,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol1",
    "start": 294,
    "end": 310,
    "range": [
      294,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 314,
    "end": 320,
    "range": [
      314,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol1",
    "start": 321,
    "end": 334,
    "range": [
      321,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol1",
    "start": 348,
    "end": 361,
    "range": [
      348,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 368,
    "end": 373,
    "range": [
      368,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "Op",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "OpTypes",
    "start": 378,
    "end": 385,
    "range": [
      378,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 392,
    "end": 397,
    "range": [
      392,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 399,
    "end": 405,
    "range": [
      399,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "String",
    "value": "\"equal\"",
    "start": 410,
    "end": 417,
    "range": [
      410,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 422,
    "end": 424,
    "range": [
      422,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "OpTypes",
    "start": 425,
    "end": 432,
    "range": [
      425,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 435,
    "end": 440,
    "range": [
      435,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 441,
    "end": 443,
    "range": [
      441,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 450,
    "end": 455,
    "range": [
      450,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 457,
    "end": 464,
    "range": [
      457,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 468,
    "end": 473,
    "range": [
      468,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "String",
    "value": "\"second\"",
    "start": 475,
    "end": 483,
    "range": [
      475,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "String",
    "value": "\"equal\"",
    "start": 488,
    "end": 495,
    "range": [
      488,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 510,
    "end": 515,
    "range": [
      510,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 516,
    "end": 518,
    "range": [
      516,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "Op",
    "start": 526,
    "end": 528,
    "range": [
      526,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 529,
    "end": 534,
    "range": [
      529,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 537,
    "end": 544,
    "range": [
      537,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "Op",
    "start": 549,
    "end": 551,
    "range": [
      549,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 552,
    "end": 557,
    "range": [
      552,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 560,
    "end": 566,
    "range": [
      560,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 572,
    "end": 577,
    "range": [
      572,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 578,
    "end": 580,
    "range": [
      578,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "OpNamespace",
    "start": 588,
    "end": 599,
    "range": [
      588,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 600,
    "end": 605,
    "range": [
      600,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 608,
    "end": 615,
    "range": [
      608,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "OpNamespace",
    "start": 620,
    "end": 631,
    "range": [
      620,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 632,
    "end": 637,
    "range": [
      632,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 652,
    "end": 657,
    "range": [
      652,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 658,
    "end": 660,
    "range": [
      658,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol0",
    "start": 668,
    "end": 684,
    "range": [
      668,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 689,
    "end": 696,
    "range": [
      689,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol0",
    "start": 701,
    "end": 717,
    "range": [
      701,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol1",
    "start": 733,
    "end": 749,
    "range": [
      733,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 754,
    "end": 761,
    "range": [
      754,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol1",
    "start": 766,
    "end": 782,
    "range": [
      766,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 787,
    "end": 793,
    "range": [
      787,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 799,
    "end": 804,
    "range": [
      799,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 805,
    "end": 809,
    "range": [
      805,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol0",
    "start": 815,
    "end": 828,
    "range": [
      815,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 832,
    "end": 839,
    "range": [
      832,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol0",
    "start": 844,
    "end": 857,
    "range": [
      844,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol1",
    "start": 872,
    "end": 885,
    "range": [
      872,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 889,
    "end": 896,
    "range": [
      889,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueSymbol1",
    "start": 901,
    "end": 914,
    "range": [
      901,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 918,
    "end": 924,
    "range": [
      918,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 929,
    "end": 934,
    "range": [
      929,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 935,
    "end": 939,
    "range": [
      935,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "OpNamespace",
    "start": 945,
    "end": 956,
    "range": [
      945,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 957,
    "end": 962,
    "range": [
      957,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 966,
    "end": 973,
    "range": [
      966,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "OpNamespace",
    "start": 978,
    "end": 989,
    "range": [
      978,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "equal",
    "start": 990,
    "end": 995,
    "range": [
      990,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 999,
    "end": 1005,
    "range": [
      999,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1010,
    "end": 1015,
    "range": [
      1010,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "Cls3",
    "start": 1016,
    "end": 1020,
    "range": [
      1016,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol0",
    "start": 1026,
    "end": 1042,
    "range": [
      1026,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 1048,
    "end": 1055,
    "range": [
      1048,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol0",
    "start": 1060,
    "end": 1076,
    "range": [
      1060,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 1082,
    "end": 1088,
    "range": [
      1082,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol1",
    "start": 1093,
    "end": 1109,
    "range": [
      1093,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 1115,
    "end": 1122,
    "range": [
      1115,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "getUniqueSymbol1",
    "start": 1127,
    "end": 1143,
    "range": [
      1127,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "String",
    "value": "\"last\"",
    "start": 1149,
    "end": 1155,
    "range": [
      1149,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  }
]
```
