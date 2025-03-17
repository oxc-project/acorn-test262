__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1664,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "DerivedBasic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 27,
        "end": 33,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 44,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "value": 1,
              "raw": "1"
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
            "type": "MethodDefinition",
            "start": 54,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 65,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 92,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 92,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 78,
                    "end": 86,
                    "expression": {
                      "type": "CallExpression",
                      "start": 78,
                      "end": 85,
                      "callee": {
                        "type": "Super",
                        "start": 78,
                        "end": 83
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 96,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 130,
        "name": "DerivedAfterParameterDefault",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 145,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 278,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 154,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 169,
            "end": 181,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 180,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 173,
                "end": 180
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 276,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 276,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 198,
                  "end": 207,
                  "left": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 202,
                    "end": 207,
                    "value": false,
                    "raw": "false"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 276,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 231,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 219,
                      "end": 230,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 226,
                        "object": {
                          "type": "ThisExpression",
                          "start": 219,
                          "end": 223
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 226,
                          "name": "x1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 240,
                    "end": 249,
                    "expression": {
                      "type": "CallExpression",
                      "start": 240,
                      "end": 248,
                      "callee": {
                        "type": "Super",
                        "start": 240,
                        "end": 245
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 258,
                    "end": 270,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 258,
                      "end": 269,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 258,
                        "end": 265,
                        "object": {
                          "type": "ThisExpression",
                          "start": 258,
                          "end": 262
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 265,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 280,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 311,
        "name": "DerivedAfterRestParameter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 320,
        "end": 326,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 327,
        "end": 469,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 333,
            "end": 347,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 335,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 346,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 337,
                "end": 346,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 337,
                  "end": 344
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 352,
            "end": 366,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 354,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 365,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 356,
                "end": 365,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 356,
                  "end": 363
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 467,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 382,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 382,
              "end": 467,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 383,
                  "end": 398,
                  "argument": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 389,
                      "end": 398,
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 389,
                        "end": 396
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 410,
                    "end": 422,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 410,
                      "end": 421,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 417,
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 417,
                          "name": "x1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 421,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 431,
                    "end": 440,
                    "expression": {
                      "type": "CallExpression",
                      "start": 431,
                      "end": 439,
                      "callee": {
                        "type": "Super",
                        "start": 431,
                        "end": 436
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 437,
                          "end": 438,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 449,
                    "end": 461,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 449,
                      "end": 460,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 449,
                        "end": 456,
                        "object": {
                          "type": "ThisExpression",
                          "start": 449,
                          "end": 453
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 456,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 460,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 471,
      "end": 686,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 492,
        "name": "DerivedComments",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 501,
        "end": 507,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 508,
        "end": 686,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 514,
            "end": 521,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 514,
              "end": 515,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 520,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 517,
                "end": 520
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 526,
            "end": 684,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 526,
              "end": 537,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 537,
              "end": 684,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 540,
                "end": 684,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 564,
                    "end": 578,
                    "expression": {
                      "type": "CallExpression",
                      "start": 564,
                      "end": 577,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 564,
                        "end": 575,
                        "object": {
                          "type": "Identifier",
                          "start": 564,
                          "end": 571,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 575,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 607,
                    "end": 615,
                    "expression": {
                      "type": "CallExpression",
                      "start": 607,
                      "end": 614,
                      "callee": {
                        "type": "Super",
                        "start": 607,
                        "end": 612
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 644,
                    "end": 658,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 644,
                      "end": 657,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 644,
                        "end": 650,
                        "object": {
                          "type": "ThisExpression",
                          "start": 644,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 650,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 653,
                        "end": 657,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 688,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 694,
        "end": 720,
        "name": "DerivedCommentsInvalidThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 729,
        "end": 735,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 736,
        "end": 942,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 742,
            "end": 749,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 742,
              "end": 743,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 743,
              "end": 748,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 745,
                "end": 748
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 754,
            "end": 940,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 765,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 765,
              "end": 940,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 768,
                "end": 940,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 792,
                    "end": 797,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 792,
                      "end": 796
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 820,
                    "end": 834,
                    "expression": {
                      "type": "CallExpression",
                      "start": 820,
                      "end": 833,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 820,
                        "end": 831,
                        "object": {
                          "type": "Identifier",
                          "start": 820,
                          "end": 827,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 828,
                          "end": 831,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 863,
                    "end": 871,
                    "expression": {
                      "type": "CallExpression",
                      "start": 863,
                      "end": 870,
                      "callee": {
                        "type": "Super",
                        "start": 863,
                        "end": 868
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 900,
                    "end": 914,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 900,
                      "end": 913,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 900,
                        "end": 906,
                        "object": {
                          "type": "ThisExpression",
                          "start": 900,
                          "end": 904
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 905,
                          "end": 906,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 909,
                        "end": 913,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 944,
      "end": 1098,
      "id": {
        "type": "Identifier",
        "start": 950,
        "end": 970,
        "name": "DerivedInConditional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 979,
        "end": 985,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 986,
        "end": 1098,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 992,
            "end": 1001,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 992,
              "end": 996,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 999,
              "end": 1000,
              "value": 1,
              "raw": "1"
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
            "type": "MethodDefinition",
            "start": 1006,
            "end": 1096,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1006,
              "end": 1017,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1017,
              "end": 1096,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1020,
                "end": 1096,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1030,
                    "end": 1090,
                    "expression": {
                      "type": "ConditionalExpression",
                      "start": 1030,
                      "end": 1089,
                      "test": {
                        "type": "CallExpression",
                        "start": 1030,
                        "end": 1043,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1030,
                          "end": 1041,
                          "object": {
                            "type": "Identifier",
                            "start": 1030,
                            "end": 1034,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1041,
                            "name": "random",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 1058,
                        "end": 1066,
                        "callee": {
                          "type": "Super",
                          "start": 1058,
                          "end": 1063
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1064,
                            "end": 1065,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "start": 1081,
                        "end": 1089,
                        "callee": {
                          "type": "Super",
                          "start": 1081,
                          "end": 1086
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1087,
                            "end": 1088,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 1100,
      "end": 1284,
      "id": {
        "type": "Identifier",
        "start": 1106,
        "end": 1117,
        "name": "DerivedInIf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1126,
        "end": 1132,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1133,
        "end": 1284,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1139,
            "end": 1148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1139,
              "end": 1143,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1146,
              "end": 1147,
              "value": 1,
              "raw": "1"
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
            "type": "MethodDefinition",
            "start": 1153,
            "end": 1282,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1153,
              "end": 1164,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1164,
              "end": 1282,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1167,
                "end": 1282,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1177,
                    "end": 1276,
                    "test": {
                      "type": "CallExpression",
                      "start": 1181,
                      "end": 1194,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1181,
                        "end": 1192,
                        "object": {
                          "type": "Identifier",
                          "start": 1181,
                          "end": 1185,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1186,
                          "end": 1192,
                          "name": "random",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1196,
                      "end": 1229,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1210,
                          "end": 1219,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1210,
                            "end": 1218,
                            "callee": {
                              "type": "Super",
                              "start": 1210,
                              "end": 1215
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1216,
                                "end": 1217,
                                "value": 1,
                                "raw": "1"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1243,
                      "end": 1276,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1257,
                          "end": 1266,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1257,
                            "end": 1265,
                            "callee": {
                              "type": "Super",
                              "start": 1257,
                              "end": 1262
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1263,
                                "end": 1264,
                                "value": 0,
                                "raw": "0"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 1286,
      "end": 1441,
      "id": {
        "type": "Identifier",
        "start": 1292,
        "end": 1320,
        "name": "DerivedInBlockWithProperties",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1329,
        "end": 1335,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1336,
        "end": 1441,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1342,
            "end": 1351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1342,
              "end": 1346,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1349,
              "end": 1350,
              "value": 1,
              "raw": "1"
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
            "type": "MethodDefinition",
            "start": 1356,
            "end": 1439,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1356,
              "end": 1367,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1367,
              "end": 1439,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1368,
                  "end": 1389,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 1376,
                    "end": 1389,
                    "left": {
                      "type": "Identifier",
                      "start": 1376,
                      "end": 1385,
                      "name": "paramProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1388,
                      "end": 1389,
                      "value": 2,
                      "raw": "2"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1391,
                "end": 1439,
                "body": [
                  {
                    "type": "BlockStatement",
                    "start": 1401,
                    "end": 1433,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1415,
                        "end": 1423,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1415,
                          "end": 1422,
                          "callee": {
                            "type": "Super",
                            "start": 1415,
                            "end": 1420
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 1443,
      "end": 1663,
      "id": {
        "type": "Identifier",
        "start": 1449,
        "end": 1483,
        "name": "DerivedInConditionalWithProperties",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1492,
        "end": 1498,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1499,
        "end": 1663,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1505,
            "end": 1514,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1505,
              "end": 1509,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1512,
              "end": 1513,
              "value": 1,
              "raw": "1"
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
            "type": "MethodDefinition",
            "start": 1519,
            "end": 1661,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1519,
              "end": 1530,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1530,
              "end": 1661,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1531,
                  "end": 1552,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 1539,
                    "end": 1552,
                    "left": {
                      "type": "Identifier",
                      "start": 1539,
                      "end": 1548,
                      "name": "paramProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1551,
                      "end": 1552,
                      "value": 2,
                      "raw": "2"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1554,
                "end": 1661,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1564,
                    "end": 1655,
                    "test": {
                      "type": "CallExpression",
                      "start": 1568,
                      "end": 1581,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1568,
                        "end": 1579,
                        "object": {
                          "type": "Identifier",
                          "start": 1568,
                          "end": 1572,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1573,
                          "end": 1579,
                          "name": "random",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1583,
                      "end": 1616,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1597,
                          "end": 1606,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1597,
                            "end": 1605,
                            "callee": {
                              "type": "Super",
                              "start": 1597,
                              "end": 1602
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1603,
                                "end": 1604,
                                "value": 1,
                                "raw": "1"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1622,
                      "end": 1655,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1636,
                          "end": 1645,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1636,
                            "end": 1644,
                            "callee": {
                              "type": "Super",
                              "start": 1636,
                              "end": 1641
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1642,
                                "end": 1643,
                                "value": 0,
                                "raw": "0"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
