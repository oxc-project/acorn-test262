__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 864,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 154,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 16,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 27,
              "end": 48,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 29,
                  "end": 46,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 36,
                    "end": 46,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 40,
                        "end": 45,
                        "id": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 44,
                          "end": 45,
                          "value": 2,
                          "raw": "2"
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ClassDeclaration",
            "start": 53,
            "end": 120,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 71,
              "end": 120,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 73,
                  "end": 90,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 84,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 84,
                    "end": 90,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 88,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": null,
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
                  "start": 91,
                  "end": 104,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 94,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 94,
                    "end": 104,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 98,
                        "end": 102
                      }
                    },
                    "body": null,
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
                  "start": 105,
                  "end": 118,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 115,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 115,
                    "end": 118,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": true
          },
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 143,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 142,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 133,
                  "end": 142,
                  "callee": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 140,
                    "decorators": [],
                    "name": "m3d",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 156,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 165,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 166,
        "end": 309,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 172,
            "end": 238,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 186,
              "end": 189,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 190,
              "end": 238,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 192,
                  "end": 209,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 203,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 203,
                    "end": 209,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 207,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": null,
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
                  "start": 210,
                  "end": 222,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 213,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 213,
                    "end": 222,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 221,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 217,
                        "end": 221
                      }
                    },
                    "body": null,
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
                  "start": 223,
                  "end": 236,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 233,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 233,
                    "end": 236,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": true
          },
          {
            "type": "TSModuleDeclaration",
            "start": 243,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 254,
              "end": 275,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 256,
                  "end": 273,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 263,
                    "end": 273,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 267,
                        "end": 272,
                        "id": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 268,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 271,
                          "end": 272,
                          "value": 2,
                          "raw": "2"
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "VariableDeclaration",
            "start": 280,
            "end": 298,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 284,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 288,
                  "end": 297,
                  "callee": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 295,
                    "decorators": [],
                    "name": "m3d",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 311,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 321,
        "end": 490,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 327,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 338,
              "end": 359,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 340,
                  "end": 357,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 347,
                    "end": 357,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 351,
                        "end": 356,
                        "id": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 355,
                          "end": 356,
                          "value": 2,
                          "raw": "2"
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ClassDeclaration",
            "start": 364,
            "end": 412,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 382,
              "end": 412,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 384,
                  "end": 396,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 387,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 387,
                    "end": 396,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 395,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 391,
                        "end": 395
                      }
                    },
                    "body": null,
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
                  "start": 397,
                  "end": 410,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 407,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 407,
                    "end": 410,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": true
          },
          {
            "type": "VariableDeclaration",
            "start": 417,
            "end": 435,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 421,
                "end": 434,
                "id": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 425,
                  "end": 434,
                  "callee": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
                    "decorators": [],
                    "name": "m3d",
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
            "start": 440,
            "end": 448,
            "expression": {
              "type": "CallExpression",
              "start": 440,
              "end": 447,
              "callee": {
                "type": "MemberExpression",
                "start": 440,
                "end": 445,
                "object": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 445,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 453,
            "end": 461,
            "expression": {
              "type": "CallExpression",
              "start": 453,
              "end": 460,
              "callee": {
                "type": "MemberExpression",
                "start": 453,
                "end": 458,
                "object": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 458,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 475,
            "end": 479,
            "expression": {
              "type": "MemberExpression",
              "start": 475,
              "end": 478,
              "object": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 477,
                "end": 478,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 492,
      "end": 671,
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 501,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 502,
        "end": 671,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 508,
            "end": 556,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 522,
              "end": 525,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 526,
              "end": 556,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 528,
                  "end": 540,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 531,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 531,
                    "end": 540,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 533,
                      "end": 539,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 535,
                        "end": 539
                      }
                    },
                    "body": null,
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
                  "start": 541,
                  "end": 554,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 551,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 551,
                    "end": 554,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": true
          },
          {
            "type": "TSModuleDeclaration",
            "start": 561,
            "end": 593,
            "id": {
              "type": "Identifier",
              "start": 568,
              "end": 571,
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 572,
              "end": 593,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 574,
                  "end": 591,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 581,
                    "end": 591,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 585,
                        "end": 590,
                        "id": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 586,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 589,
                          "end": 590,
                          "value": 2,
                          "raw": "2"
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "VariableDeclaration",
            "start": 598,
            "end": 616,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 602,
                "end": 615,
                "id": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 603,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 606,
                  "end": 615,
                  "callee": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 613,
                    "decorators": [],
                    "name": "m3d",
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
            "start": 621,
            "end": 629,
            "expression": {
              "type": "CallExpression",
              "start": 621,
              "end": 628,
              "callee": {
                "type": "MemberExpression",
                "start": 621,
                "end": 626,
                "object": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 626,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 634,
            "end": 642,
            "expression": {
              "type": "CallExpression",
              "start": 634,
              "end": 641,
              "callee": {
                "type": "MemberExpression",
                "start": 634,
                "end": 639,
                "object": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 639,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 656,
            "end": 660,
            "expression": {
              "type": "MemberExpression",
              "start": 656,
              "end": 659,
              "object": {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 658,
                "end": 659,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 673,
      "end": 705,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 683,
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 684,
        "end": 705,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 686,
            "end": 703,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 693,
              "end": 703,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 697,
                  "end": 702,
                  "id": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 701,
                    "end": 702,
                    "value": 2,
                    "raw": "2"
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
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 706,
      "end": 772,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 720,
        "end": 723,
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 724,
        "end": 772,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 726,
            "end": 743,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 726,
              "end": 737,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 737,
              "end": 743,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 738,
                  "end": 741,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 744,
            "end": 756,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 744,
              "end": 747,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 747,
              "end": 756,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 749,
                "end": 755,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 751,
                  "end": 755
                }
              },
              "body": null,
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
            "start": 757,
            "end": 770,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 764,
              "end": 767,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 767,
              "end": 770,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 773,
      "end": 791,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 777,
          "end": 790,
          "id": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 781,
            "end": 790,
            "callee": {
              "type": "Identifier",
              "start": 785,
              "end": 788,
              "decorators": [],
              "name": "m3d",
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
      "type": "ClassDeclaration",
      "start": 802,
      "end": 835,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 819,
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 828,
        "end": 831,
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 832,
        "end": 835,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 836,
      "end": 855,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 840,
          "end": 854,
          "id": {
            "type": "Identifier",
            "start": 840,
            "end": 842,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 845,
            "end": 854,
            "callee": {
              "type": "Identifier",
              "start": 849,
              "end": 852,
              "decorators": [],
              "name": "m4d",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
