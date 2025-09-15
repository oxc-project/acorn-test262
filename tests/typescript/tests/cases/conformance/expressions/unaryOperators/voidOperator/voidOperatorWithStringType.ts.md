__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "start": 37,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 51
        }
      ],
      "declare": false,
      "start": 33,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 66,
                  "end": 72
                },
                "start": 66,
                "end": 74
              },
              "start": 64,
              "end": 74
            },
            "start": 57,
            "end": 74
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 78,
                "end": 80
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 82,
                "end": 87
              }
            ],
            "start": 77,
            "end": 88
          },
          "definite": false,
          "start": 57,
          "end": 88
        }
      ],
      "declare": false,
      "start": 53,
      "end": 89
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 103
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 107,
          "end": 113
        },
        "start": 105,
        "end": 113
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 123,
              "end": 128
            },
            "start": 116,
            "end": 129
          }
        ],
        "start": 114,
        "end": 131
      },
      "expression": false,
      "start": 91,
      "end": 131
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 147,
            "end": 164
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 191,
                      "end": 193
                    },
                    "start": 184,
                    "end": 194
                  }
                ],
                "start": 182,
                "end": 196
              },
              "expression": false,
              "start": 179,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 169,
            "end": 196
          }
        ],
        "start": 141,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 210
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 231,
                        "end": 237
                      },
                      "start": 229,
                      "end": 237
                    },
                    "start": 228,
                    "end": 237
                  },
                  "init": null,
                  "definite": false,
                  "start": 228,
                  "end": 237
                }
              ],
              "declare": false,
              "start": 224,
              "end": 238
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 238
          }
        ],
        "start": 211,
        "end": 240
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 199,
      "end": 240
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 250
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "typeArguments": null,
            "arguments": [],
            "start": 253,
            "end": 260
          },
          "definite": false,
          "start": 246,
          "end": 260
        }
      ],
      "declare": false,
      "start": 242,
      "end": 261
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 298
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 312
            },
            "prefix": true,
            "start": 301,
            "end": 312
          },
          "definite": false,
          "start": 286,
          "end": 312
        }
      ],
      "declare": false,
      "start": 282,
      "end": 313
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 330
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 345
            },
            "prefix": true,
            "start": 333,
            "end": 345
          },
          "definite": false,
          "start": 318,
          "end": 345
        }
      ],
      "declare": false,
      "start": 314,
      "end": 346
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 387
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 395,
              "end": 397
            },
            "prefix": true,
            "start": 390,
            "end": 397
          },
          "definite": false,
          "start": 375,
          "end": 397
        }
      ],
      "declare": false,
      "start": 371,
      "end": 398
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 415
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 426
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 428,
                    "end": 430
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 425,
                  "end": 430
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 435,
                    "end": 437
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 432,
                  "end": 437
                }
              ],
              "start": 423,
              "end": 439
            },
            "prefix": true,
            "start": 418,
            "end": 439
          },
          "definite": false,
          "start": 403,
          "end": 439
        }
      ],
      "declare": false,
      "start": 399,
      "end": 440
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 457
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 470,
                    "end": 472
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 467,
                  "end": 472
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 481,
                            "end": 487
                          },
                          "start": 479,
                          "end": 487
                        },
                        "start": 478,
                        "end": 487
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 502
                          },
                          "start": 494,
                          "end": 503
                        }
                      ],
                      "start": 492,
                      "end": 505
                    },
                    "id": null,
                    "generator": false,
                    "start": 477,
                    "end": 505
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 474,
                  "end": 505
                }
              ],
              "start": 465,
              "end": 507
            },
            "prefix": true,
            "start": 460,
            "end": 507
          },
          "definite": false,
          "start": 445,
          "end": 507
        }
      ],
      "declare": false,
      "start": 441,
      "end": 508
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 553
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 565
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 567
              },
              "optional": false,
              "computed": false,
              "start": 561,
              "end": 567
            },
            "prefix": true,
            "start": 556,
            "end": 567
          },
          "definite": false,
          "start": 541,
          "end": 567
        }
      ],
      "declare": false,
      "start": 537,
      "end": 568
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 585
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 596
              },
              "optional": false,
              "computed": false,
              "start": 593,
              "end": 596
            },
            "prefix": true,
            "start": 588,
            "end": 596
          },
          "definite": false,
          "start": 573,
          "end": 596
        }
      ],
      "declare": false,
      "start": 569,
      "end": 597
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 614
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 629
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 630,
                "end": 631
              },
              "optional": false,
              "computed": true,
              "start": 622,
              "end": 632
            },
            "prefix": true,
            "start": 617,
            "end": 632
          },
          "definite": false,
          "start": 602,
          "end": 632
        }
      ],
      "declare": false,
      "start": 598,
      "end": 633
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 650
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 661
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 658,
              "end": 663
            },
            "prefix": true,
            "start": 653,
            "end": 663
          },
          "definite": false,
          "start": 638,
          "end": 663
        }
      ],
      "declare": false,
      "start": 634,
      "end": 664
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 682
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 691
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 695
                },
                "optional": false,
                "computed": false,
                "start": 690,
                "end": 695
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 690,
              "end": 697
            },
            "prefix": true,
            "start": 685,
            "end": 697
          },
          "definite": false,
          "start": 669,
          "end": 697
        }
      ],
      "declare": false,
      "start": 665,
      "end": 698
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 716
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 731
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 740
              },
              "start": 725,
              "end": 740
            },
            "prefix": true,
            "start": 719,
            "end": 741
          },
          "definite": false,
          "start": 703,
          "end": 741
        }
      ],
      "declare": false,
      "start": 699,
      "end": 742
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 760
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 774
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 781
                },
                "optional": false,
                "computed": false,
                "start": 768,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 782,
                  "end": 783
                }
              ],
              "optional": false,
              "start": 768,
              "end": 784
            },
            "prefix": true,
            "start": 763,
            "end": 784
          },
          "definite": false,
          "start": 747,
          "end": 784
        }
      ],
      "declare": false,
      "start": 743,
      "end": 785
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 832
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 851
              },
              "prefix": true,
              "start": 840,
              "end": 851
            },
            "prefix": true,
            "start": 835,
            "end": 851
          },
          "definite": false,
          "start": 819,
          "end": 851
        }
      ],
      "declare": false,
      "start": 815,
      "end": 852
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsAny14",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 870
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 895
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 904
                  },
                  "start": 889,
                  "end": 904
                },
                "prefix": true,
                "start": 883,
                "end": 905
              },
              "prefix": true,
              "start": 878,
              "end": 905
            },
            "prefix": true,
            "start": 873,
            "end": 905
          },
          "definite": false,
          "start": 857,
          "end": 905
        }
      ],
      "declare": false,
      "start": 853,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 942,
          "end": 944
        },
        "prefix": true,
        "start": 937,
        "end": 944
      },
      "directive": null,
      "start": 937,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 957
        },
        "prefix": true,
        "start": 946,
        "end": 957
      },
      "directive": null,
      "start": 946,
      "end": 958
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 971
        },
        "prefix": true,
        "start": 959,
        "end": 971
      },
      "directive": null,
      "start": 959,
      "end": 972
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 978,
            "end": 981
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 978,
          "end": 983
        },
        "prefix": true,
        "start": 973,
        "end": 983
      },
      "directive": null,
      "start": 973,
      "end": 984
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 996
              },
              "optional": false,
              "computed": false,
              "start": 990,
              "end": 996
            },
            "prefix": true,
            "start": 985,
            "end": 996
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 998
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1000
            },
            "optional": false,
            "computed": false,
            "start": 997,
            "end": 1000
          }
        ],
        "start": 985,
        "end": 1000
      },
      "directive": null,
      "start": 985,
      "end": 1001
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 1001
}
```
