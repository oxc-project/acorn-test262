__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1782,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 387,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 23,
        "decorators": [],
        "name": "NumberOrUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 387,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 32,
              "decorators": [],
              "name": "_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 52,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 34,
                "end": 52,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 43,
                    "end": 52
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 98,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 98,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 67,
                  "end": 73
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 98,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 96,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 83,
                      "end": 95,
                      "left": {
                        "type": "MemberExpression",
                        "start": 83,
                        "end": 90,
                        "object": {
                          "type": "ThisExpression",
                          "start": 83,
                          "end": 87
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 90,
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "??",
                      "right": {
                        "type": "Literal",
                        "start": 94,
                        "end": 95,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 156,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 156,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 134,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 116,
                      "end": 134,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 116,
                          "end": 122
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 125,
                          "end": 134
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 138,
                    "end": 154,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 138,
                      "end": 153,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 138,
                        "end": 145,
                        "object": {
                          "type": "ThisExpression",
                          "start": 138,
                          "end": 142
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 145,
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 153,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 180,
              "decorators": [],
              "name": "additionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 211,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 193,
                    "end": 205,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 193,
                      "end": 204,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 193,
                        "end": 199,
                        "object": {
                          "type": "ThisExpression",
                          "start": 193,
                          "end": 197
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 203,
                        "end": 204,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 238,
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 269,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 269,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 251,
                    "end": 263,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 251,
                      "end": 262,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 257,
                        "object": {
                          "type": "ThisExpression",
                          "start": 251,
                          "end": 255
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 261,
                        "end": 262,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 275,
            "end": 330,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 299,
              "decorators": [],
              "name": "multiplicationAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 330,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 302,
                "end": 330,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 312,
                    "end": 324,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 312,
                      "end": 323,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 312,
                        "end": 318,
                        "object": {
                          "type": "ThisExpression",
                          "start": 312,
                          "end": 316
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 323,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 336,
            "end": 385,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 354,
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 354,
              "end": 385,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 357,
                "end": 385,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 367,
                    "end": 379,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 367,
                      "end": 378,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 367,
                        "end": 373,
                        "object": {
                          "type": "ThisExpression",
                          "start": 367,
                          "end": 371
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 373,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 377,
                        "end": 378,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 438,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 411,
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 414,
            "end": 437,
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 435,
              "decorators": [],
              "name": "NumberOrUndefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 464,
      "expression": {
        "type": "AssignmentExpression",
        "start": 439,
        "end": 463,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 439,
          "end": 458,
          "object": {
            "type": "Identifier",
            "start": 439,
            "end": 456,
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 462,
          "end": 463,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 490,
      "expression": {
        "type": "AssignmentExpression",
        "start": 465,
        "end": 489,
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "start": 465,
          "end": 484,
          "object": {
            "type": "Identifier",
            "start": 465,
            "end": 482,
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 483,
            "end": 484,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 488,
          "end": 489,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 491,
      "end": 516,
      "expression": {
        "type": "AssignmentExpression",
        "start": 491,
        "end": 515,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 491,
          "end": 510,
          "object": {
            "type": "Identifier",
            "start": 491,
            "end": 508,
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 509,
            "end": 510,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 514,
          "end": 515,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 517,
      "end": 542,
      "expression": {
        "type": "AssignmentExpression",
        "start": 517,
        "end": 541,
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "start": 517,
          "end": 536,
          "object": {
            "type": "Identifier",
            "start": 517,
            "end": 534,
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 540,
          "end": 541,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 544,
      "end": 1037,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 564,
        "decorators": [],
        "name": "NumberOrString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 565,
        "end": 1037,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 571,
            "end": 595,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 573,
              "decorators": [],
              "name": "_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 573,
              "end": 590,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 575,
                "end": 590,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 575,
                    "end": 581
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 584,
                    "end": 590
                  }
                ]
              }
            },
            "value": {
              "type": "Literal",
              "start": 593,
              "end": 594,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 600,
            "end": 683,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 605,
              "end": 683,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 607,
                "end": 615,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 609,
                  "end": 615
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 616,
                "end": 683,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 618,
                    "end": 681,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 625,
                      "end": 680,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 625,
                        "end": 652,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 625,
                          "end": 639,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 632,
                            "end": 639,
                            "object": {
                              "type": "ThisExpression",
                              "start": 632,
                              "end": 636
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 637,
                              "end": 639,
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 644,
                          "end": 652,
                          "value": "number",
                          "raw": "'number'"
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 655,
                        "end": 662,
                        "object": {
                          "type": "ThisExpression",
                          "start": 655,
                          "end": 659
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 660,
                          "end": 662,
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "start": 665,
                        "end": 680,
                        "callee": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 671,
                          "decorators": [],
                          "name": "Number",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 672,
                            "end": 679,
                            "object": {
                              "type": "ThisExpression",
                              "start": 672,
                              "end": 676
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 679,
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 688,
            "end": 738,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 692,
              "end": 693,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 693,
              "end": 738,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 694,
                  "end": 716,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 699,
                    "end": 716,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 701,
                      "end": 716,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 701,
                          "end": 707
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 710,
                          "end": 716
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 718,
                "end": 738,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 720,
                    "end": 736,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 720,
                      "end": 735,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 720,
                        "end": 727,
                        "object": {
                          "type": "ThisExpression",
                          "start": 720,
                          "end": 724
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 725,
                          "end": 727,
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 730,
                        "end": 735,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 744,
            "end": 799,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 744,
              "end": 768,
              "decorators": [],
              "name": "additionAssignmentNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 768,
              "end": 799,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 771,
                "end": 799,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 781,
                    "end": 793,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 781,
                      "end": 792,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 781,
                        "end": 787,
                        "object": {
                          "type": "ThisExpression",
                          "start": 781,
                          "end": 785
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 786,
                          "end": 787,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 791,
                        "end": 792,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 804,
            "end": 861,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 804,
              "end": 828,
              "decorators": [],
              "name": "additionAssignmentString",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 828,
              "end": 861,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 831,
                "end": 861,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 841,
                    "end": 855,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 841,
                      "end": 854,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 841,
                        "end": 847,
                        "object": {
                          "type": "ThisExpression",
                          "start": 841,
                          "end": 845
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 847,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 851,
                        "end": 854,
                        "value": "1",
                        "raw": "'1'"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 867,
            "end": 919,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 867,
              "end": 888,
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 888,
              "end": 919,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 891,
                "end": 919,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 901,
                    "end": 913,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 901,
                      "end": 912,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 901,
                        "end": 907,
                        "object": {
                          "type": "ThisExpression",
                          "start": 901,
                          "end": 905
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 906,
                          "end": 907,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 911,
                        "end": 912,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 925,
            "end": 980,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 925,
              "end": 949,
              "decorators": [],
              "name": "multiplicationAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 949,
              "end": 980,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 952,
                "end": 980,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 962,
                    "end": 974,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 962,
                      "end": 973,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 962,
                        "end": 968,
                        "object": {
                          "type": "ThisExpression",
                          "start": 962,
                          "end": 966
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 967,
                          "end": 968,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 972,
                        "end": 973,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 986,
            "end": 1035,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 986,
              "end": 1004,
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1004,
              "end": 1035,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1007,
                "end": 1035,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1017,
                    "end": 1029,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1017,
                      "end": 1028,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1017,
                        "end": 1023,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1017,
                          "end": 1021
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1022,
                          "end": 1023,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1027,
                        "end": 1028,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1038,
      "end": 1082,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1044,
          "end": 1081,
          "id": {
            "type": "Identifier",
            "start": 1044,
            "end": 1058,
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1061,
            "end": 1081,
            "callee": {
              "type": "Identifier",
              "start": 1065,
              "end": 1079,
              "decorators": [],
              "name": "NumberOrString",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1083,
      "end": 1105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1083,
        "end": 1104,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 1083,
          "end": 1099,
          "object": {
            "type": "Identifier",
            "start": 1083,
            "end": 1097,
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1098,
            "end": 1099,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1103,
          "end": 1104,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1106,
      "end": 1130,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1106,
        "end": 1129,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 1106,
          "end": 1122,
          "object": {
            "type": "Identifier",
            "start": 1106,
            "end": 1120,
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1121,
            "end": 1122,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1126,
          "end": 1129,
          "value": "1",
          "raw": "'1'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1131,
      "end": 1153,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1131,
        "end": 1152,
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "start": 1131,
          "end": 1147,
          "object": {
            "type": "Identifier",
            "start": 1131,
            "end": 1145,
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1146,
            "end": 1147,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1151,
          "end": 1152,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1154,
      "end": 1176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1154,
        "end": 1175,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 1154,
          "end": 1170,
          "object": {
            "type": "Identifier",
            "start": 1154,
            "end": 1168,
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1169,
            "end": 1170,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1174,
          "end": 1175,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1177,
      "end": 1199,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1177,
        "end": 1198,
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "start": 1177,
          "end": 1193,
          "object": {
            "type": "Identifier",
            "start": 1177,
            "end": 1191,
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1192,
            "end": 1193,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1197,
          "end": 1198,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1201,
      "end": 1229,
      "id": {
        "type": "Identifier",
        "start": 1206,
        "end": 1209,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1212,
        "end": 1228,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1214,
            "end": 1226,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1217,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1217,
              "end": 1225,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1219,
                "end": 1225
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
      "type": "ClassDeclaration",
      "start": 1230,
      "end": 1645,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1236,
        "end": 1250,
        "decorators": [],
        "name": "NumberOrObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1251,
        "end": 1645,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1257,
            "end": 1278,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1257,
              "end": 1259,
              "decorators": [],
              "name": "_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1259,
              "end": 1273,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1261,
                "end": 1273,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1261,
                    "end": 1267
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1270,
                    "end": 1273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1273,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "value": {
              "type": "Literal",
              "start": 1276,
              "end": 1277,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1283,
            "end": 1362,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1287,
              "end": 1288,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1288,
              "end": 1362,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1290,
                "end": 1298,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1292,
                  "end": 1298
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1299,
                "end": 1362,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1301,
                    "end": 1360,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 1308,
                      "end": 1359,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 1308,
                        "end": 1335,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1308,
                          "end": 1322,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1315,
                            "end": 1322,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1315,
                              "end": 1319
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1320,
                              "end": 1322,
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1327,
                          "end": 1335,
                          "value": "number",
                          "raw": "'number'"
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 1338,
                        "end": 1345,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1338,
                          "end": 1342
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1343,
                          "end": 1345,
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "start": 1348,
                        "end": 1359,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1348,
                          "end": 1355,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1348,
                            "end": 1352
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1353,
                            "end": 1355,
                            "decorators": [],
                            "name": "_x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1356,
                          "end": 1359,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1367,
            "end": 1414,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1372,
              "end": 1414,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1373,
                  "end": 1392,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1378,
                    "end": 1392,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1380,
                      "end": 1392,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1380,
                          "end": 1386
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1389,
                          "end": 1392,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1389,
                            "end": 1392,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1394,
                "end": 1414,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1396,
                    "end": 1412,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1396,
                      "end": 1411,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1396,
                        "end": 1403,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1396,
                          "end": 1400
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1401,
                          "end": 1403,
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1406,
                        "end": 1411,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1420,
            "end": 1469,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1420,
              "end": 1438,
              "decorators": [],
              "name": "additionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1438,
              "end": 1469,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1441,
                "end": 1469,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1451,
                    "end": 1463,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1451,
                      "end": 1462,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1451,
                        "end": 1457,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1451,
                          "end": 1455
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1456,
                          "end": 1457,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1461,
                        "end": 1462,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1475,
            "end": 1527,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1475,
              "end": 1496,
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1496,
              "end": 1527,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1499,
                "end": 1527,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1509,
                    "end": 1521,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1509,
                      "end": 1520,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1509,
                        "end": 1515,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1509,
                          "end": 1513
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1514,
                          "end": 1515,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1519,
                        "end": 1520,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1533,
            "end": 1588,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1533,
              "end": 1557,
              "decorators": [],
              "name": "multiplicationAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1557,
              "end": 1588,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1560,
                "end": 1588,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1570,
                    "end": 1582,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1570,
                      "end": 1581,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1570,
                        "end": 1576,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1570,
                          "end": 1574
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1575,
                          "end": 1576,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1580,
                        "end": 1581,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1594,
            "end": 1643,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1594,
              "end": 1612,
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1612,
              "end": 1643,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1615,
                "end": 1643,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1625,
                    "end": 1637,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1625,
                      "end": 1636,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1625,
                        "end": 1631,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1625,
                          "end": 1629
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1630,
                          "end": 1631,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1635,
                        "end": 1636,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1646,
      "end": 1690,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1652,
          "end": 1689,
          "id": {
            "type": "Identifier",
            "start": 1652,
            "end": 1666,
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1669,
            "end": 1689,
            "callee": {
              "type": "Identifier",
              "start": 1673,
              "end": 1687,
              "decorators": [],
              "name": "NumberOrObject",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1691,
      "end": 1713,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1691,
        "end": 1712,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 1691,
          "end": 1707,
          "object": {
            "type": "Identifier",
            "start": 1691,
            "end": 1705,
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1706,
            "end": 1707,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1711,
          "end": 1712,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1714,
      "end": 1736,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1714,
        "end": 1735,
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "start": 1714,
          "end": 1730,
          "object": {
            "type": "Identifier",
            "start": 1714,
            "end": 1728,
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1729,
            "end": 1730,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1734,
          "end": 1735,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1737,
      "end": 1759,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1737,
        "end": 1758,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 1737,
          "end": 1753,
          "object": {
            "type": "Identifier",
            "start": 1737,
            "end": 1751,
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1752,
            "end": 1753,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1757,
          "end": 1758,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1760,
      "end": 1782,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1760,
        "end": 1781,
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "start": 1760,
          "end": 1776,
          "object": {
            "type": "Identifier",
            "start": 1760,
            "end": 1774,
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1775,
            "end": 1776,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1780,
          "end": 1781,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
