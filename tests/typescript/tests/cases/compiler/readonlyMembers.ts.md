__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1311,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 64,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 37,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 62,
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
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
      "type": "VariableDeclaration",
      "start": 65,
      "end": 85,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 76,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 78,
                "end": 82,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "ExpressionStatement",
      "start": 86,
      "end": 94,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 93,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 86,
          "end": 89,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 93,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 112,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 105,
          "end": 108,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 112,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 125,
      "end": 689,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 689,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 158,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 157,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 151,
                "end": 157
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 178,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 176,
              "end": 177,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 183,
            "end": 203,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 203,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 193,
                    "end": 201,
                    "argument": {
                      "type": "Literal",
                      "start": 200,
                      "end": 201,
                      "value": 1,
                      "raw": "1"
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
            "start": 208,
            "end": 579,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 219,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 219,
              "end": 579,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 222,
                "end": 579,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 243,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 232,
                      "end": 242,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 232,
                        "end": 238,
                        "object": {
                          "type": "ThisExpression",
                          "start": 232,
                          "end": 236
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 238,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 241,
                        "end": 242,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 259,
                    "end": 270,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 259,
                      "end": 269,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 259,
                        "end": 265,
                        "object": {
                          "type": "ThisExpression",
                          "start": 259,
                          "end": 263
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 265,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 268,
                        "end": 269,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 286,
                    "end": 297,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 286,
                      "end": 296,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 286,
                        "end": 292,
                        "object": {
                          "type": "ThisExpression",
                          "start": 286,
                          "end": 290
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 292,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 295,
                        "end": 296,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 316,
                    "end": 446,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 322,
                        "end": 445,
                        "id": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 323,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 326,
                          "end": 445,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 332,
                            "end": 445,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 346,
                                "end": 357,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 346,
                                  "end": 356,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 346,
                                    "end": 352,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 346,
                                      "end": 350
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 351,
                                      "end": 352,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 355,
                                    "end": 356,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 380,
                                "end": 391,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 380,
                                  "end": 390,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 380,
                                    "end": 386,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 380,
                                      "end": 384
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 385,
                                      "end": 386,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 389,
                                    "end": 390,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 414,
                                "end": 425,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 414,
                                  "end": 424,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 414,
                                    "end": 420,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 414,
                                      "end": 418
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 419,
                                      "end": 420,
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 423,
                                    "end": 424,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 455,
                    "end": 573,
                    "expression": {
                      "type": "CallExpression",
                      "start": 455,
                      "end": 572,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 456,
                        "end": 569,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 462,
                          "end": 569,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 476,
                              "end": 487,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 476,
                                "end": 486,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 476,
                                  "end": 482,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 476,
                                    "end": 480
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 481,
                                    "end": 482,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 485,
                                  "end": 486,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 507,
                              "end": 518,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 507,
                                "end": 517,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 507,
                                  "end": 513,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 507,
                                    "end": 511
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 512,
                                    "end": 513,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 516,
                                  "end": 517,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 538,
                              "end": 549,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 538,
                                "end": 548,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 538,
                                  "end": 544,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 538,
                                    "end": 542
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 543,
                                    "end": 544,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 547,
                                  "end": 548,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 584,
            "end": 687,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 584,
              "end": 587,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 587,
              "end": 687,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 590,
                "end": 687,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 600,
                    "end": 611,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 600,
                      "end": 610,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 600,
                        "end": 606,
                        "object": {
                          "type": "ThisExpression",
                          "start": 600,
                          "end": 604
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 606,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 609,
                        "end": 610,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 630,
                    "end": 641,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 630,
                      "end": 640,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 630,
                        "end": 636,
                        "object": {
                          "type": "ThisExpression",
                          "start": 630,
                          "end": 634
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 635,
                          "end": 636,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 639,
                        "end": 640,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 660,
                    "end": 671,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 660,
                      "end": 670,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 660,
                        "end": 666,
                        "object": {
                          "type": "ThisExpression",
                          "start": 660,
                          "end": 664
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 666,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 669,
                        "end": 670,
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
      "start": 691,
      "end": 776,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 775,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 696,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 699,
            "end": 775,
            "properties": [
              {
                "type": "Property",
                "start": 705,
                "end": 725,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 710,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 710,
                  "end": 725,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 713,
                    "end": 725,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 715,
                        "end": 723,
                        "argument": {
                          "type": "Literal",
                          "start": 722,
                          "end": 723,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 731,
                "end": 751,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 736,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 736,
                  "end": 751,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 739,
                    "end": 751,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 741,
                        "end": 749,
                        "argument": {
                          "type": "Literal",
                          "start": 748,
                          "end": 749,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 757,
                "end": 773,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 762,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 762,
                  "end": 773,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 768,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 770,
                    "end": 773,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "ExpressionStatement",
      "start": 777,
      "end": 785,
      "expression": {
        "type": "AssignmentExpression",
        "start": 777,
        "end": 784,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 777,
          "end": 780,
          "object": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 779,
            "end": 780,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 783,
          "end": 784,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 796,
      "end": 804,
      "expression": {
        "type": "AssignmentExpression",
        "start": 796,
        "end": 803,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 796,
          "end": 799,
          "object": {
            "type": "Identifier",
            "start": 796,
            "end": 797,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 798,
            "end": 799,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 802,
          "end": 803,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 806,
      "end": 864,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 810,
          "end": 863,
          "id": {
            "type": "Identifier",
            "start": 810,
            "end": 846,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 846,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 813,
                "end": 846,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 815,
                    "end": 834,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 825,
                      "end": 833,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 827,
                        "end": 833
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 835,
                    "end": 844,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 836,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 836,
                      "end": 844,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 838,
                        "end": 844
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 849,
            "end": 863,
            "properties": [
              {
                "type": "Property",
                "start": 851,
                "end": 855,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 852,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 854,
                  "end": 855,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 857,
                "end": 861,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 860,
                  "end": 861,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "ExpressionStatement",
      "start": 865,
      "end": 873,
      "expression": {
        "type": "AssignmentExpression",
        "start": 865,
        "end": 872,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 865,
          "end": 868,
          "object": {
            "type": "Identifier",
            "start": 865,
            "end": 866,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 867,
            "end": 868,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 871,
          "end": 872,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 892,
      "expression": {
        "type": "AssignmentExpression",
        "start": 884,
        "end": 891,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 884,
          "end": 887,
          "object": {
            "type": "Identifier",
            "start": 884,
            "end": 885,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 886,
            "end": 887,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 890,
          "end": 891,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 893,
      "end": 929,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 897,
          "end": 928,
          "id": {
            "type": "Identifier",
            "start": 897,
            "end": 924,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 898,
              "end": 924,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 900,
                "end": 924,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 902,
                    "end": 912,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 902,
                      "end": 903,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 903,
                      "end": 911,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 905,
                        "end": 911
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 913,
                    "end": 922,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 914,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 914,
                      "end": 922,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 916,
                        "end": 922
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 927,
            "end": 928,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 938,
      "expression": {
        "type": "AssignmentExpression",
        "start": 930,
        "end": 937,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 930,
          "end": 933,
          "object": {
            "type": "Identifier",
            "start": 930,
            "end": 931,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 932,
            "end": 933,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 936,
          "end": 937,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 939,
      "end": 947,
      "expression": {
        "type": "AssignmentExpression",
        "start": 939,
        "end": 946,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 939,
          "end": 942,
          "object": {
            "type": "Identifier",
            "start": 939,
            "end": 940,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 941,
            "end": 942,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 945,
          "end": 946,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 949,
      "end": 971,
      "id": {
        "type": "Identifier",
        "start": 954,
        "end": 955,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 956,
        "end": 971,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 962,
            "end": 963,
            "id": {
              "type": "Identifier",
              "start": 962,
              "end": 963,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 965,
            "end": 966,
            "id": {
              "type": "Identifier",
              "start": 965,
              "end": 966,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 968,
            "end": 969,
            "id": {
              "type": "Identifier",
              "start": 968,
              "end": 969,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 972,
      "end": 980,
      "expression": {
        "type": "AssignmentExpression",
        "start": 972,
        "end": 979,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 972,
          "end": 975,
          "object": {
            "type": "Identifier",
            "start": 972,
            "end": 973,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 974,
            "end": 975,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 978,
          "end": 979,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 992,
      "end": 1075,
      "id": {
        "type": "Identifier",
        "start": 1002,
        "end": 1003,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1004,
        "end": 1075,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1010,
            "end": 1029,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1017,
              "end": 1029,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1023,
                  "end": 1028,
                  "id": {
                    "type": "Identifier",
                    "start": 1023,
                    "end": 1024,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1027,
                    "end": 1028,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1034,
            "end": 1051,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1041,
              "end": 1051,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1045,
                  "end": 1050,
                  "id": {
                    "type": "Identifier",
                    "start": 1045,
                    "end": 1046,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1049,
                    "end": 1050,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1056,
            "end": 1073,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1063,
              "end": 1073,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1067,
                  "end": 1072,
                  "id": {
                    "type": "Identifier",
                    "start": 1067,
                    "end": 1068,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1071,
                    "end": 1072,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1076,
      "end": 1084,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1076,
        "end": 1083,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1076,
          "end": 1079,
          "object": {
            "type": "Identifier",
            "start": 1076,
            "end": 1077,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1078,
            "end": 1079,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1082,
          "end": 1083,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1095,
      "end": 1103,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1095,
        "end": 1102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1095,
          "end": 1098,
          "object": {
            "type": "Identifier",
            "start": 1095,
            "end": 1096,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1097,
            "end": 1098,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1101,
          "end": 1102,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1104,
      "end": 1112,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1104,
        "end": 1111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1104,
          "end": 1107,
          "object": {
            "type": "Identifier",
            "start": 1104,
            "end": 1105,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1106,
            "end": 1107,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1110,
          "end": 1111,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1114,
      "end": 1155,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1118,
          "end": 1154,
          "id": {
            "type": "Identifier",
            "start": 1118,
            "end": 1154,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1120,
              "end": 1154,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1122,
                "end": 1154,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1124,
                    "end": 1152,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1134,
                        "end": 1143,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1135,
                          "end": 1143,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1137,
                            "end": 1143
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1144,
                      "end": 1152,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1146,
                        "end": 1152
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1156,
      "end": 1174,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1160,
          "end": 1173,
          "id": {
            "type": "Identifier",
            "start": 1160,
            "end": 1161,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1164,
            "end": 1173,
            "object": {
              "type": "Identifier",
              "start": 1164,
              "end": 1166,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1167,
              "end": 1172,
              "value": "foo",
              "raw": "\"foo\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1175,
      "end": 1193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1175,
        "end": 1192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1175,
          "end": 1184,
          "object": {
            "type": "Identifier",
            "start": 1175,
            "end": 1177,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1178,
            "end": 1183,
            "value": "foo",
            "raw": "\"foo\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1187,
          "end": 1192,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1205,
      "end": 1267,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1266,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1266,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1211,
              "end": 1266,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1213,
                "end": 1266,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1215,
                    "end": 1244,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1225,
                        "end": 1234,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1226,
                          "end": 1234,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1228,
                            "end": 1234
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1235,
                      "end": 1243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1237,
                        "end": 1243
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 1245,
                    "end": 1264,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1246,
                        "end": 1255,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1247,
                          "end": 1255,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1249,
                            "end": 1255
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1256,
                      "end": 1264,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1258,
                        "end": 1264
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1268,
      "end": 1282,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1268,
        "end": 1281,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1268,
          "end": 1273,
          "object": {
            "type": "Identifier",
            "start": 1268,
            "end": 1270,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1271,
            "end": 1272,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1276,
          "end": 1281,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1293,
      "end": 1311,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1293,
        "end": 1310,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1293,
          "end": 1302,
          "object": {
            "type": "Identifier",
            "start": 1293,
            "end": 1295,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1296,
            "end": 1301,
            "value": "foo",
            "raw": "\"foo\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1305,
          "end": 1310,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
