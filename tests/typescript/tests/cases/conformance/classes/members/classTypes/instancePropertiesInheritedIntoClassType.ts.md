__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 774,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 385,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 220,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
              "start": 32,
              "end": 220,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 42,
                  "end": 52,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
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
                  "start": 61,
                  "end": 102,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 102,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 69,
                      "end": 102,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 83,
                          "end": 92,
                          "argument": {
                            "type": "Literal",
                            "start": 90,
                            "end": 91,
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
                  "start": 111,
                  "end": 123,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 116,
                    "end": 123,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 123,
                      "body": []
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
                  "start": 132,
                  "end": 153,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 134,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 153,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 153,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 139,
                          "end": 151,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 146,
                            "end": 150
                          }
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
                  "start": 162,
                  "end": 214,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 173,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 173,
                    "end": 214,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 174,
                        "end": 190,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 190,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 192,
                        "end": 209,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 209,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 203,
                              "end": 209
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 211,
                      "end": 214,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
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
            "type": "ClassDeclaration",
            "start": 226,
            "end": 258,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 244,
              "end": 258,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 246,
                  "end": 256,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 247,
                    "end": 255,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 249,
                      "end": 255
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
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 264,
            "end": 284,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 268,
                "end": 283,
                "id": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 272,
                  "end": 283,
                  "callee": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 278,
                      "end": 279,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 281,
                      "end": 282,
                      "value": 2,
                      "raw": "2"
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
            "start": 289,
            "end": 304,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 297,
                  "end": 303,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 297,
                    "end": 301,
                    "object": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 301,
                      "decorators": [],
                      "name": "fn",
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
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 309,
            "end": 322,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 315,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 318,
                  "end": 321,
                  "object": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 340,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 339,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 336,
                  "end": 339,
                  "object": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 345,
            "end": 353,
            "expression": {
              "type": "AssignmentExpression",
              "start": 345,
              "end": 352,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 345,
                "end": 348,
                "object": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 351,
                "end": 352,
                "value": 4,
                "raw": "4"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 358,
            "end": 373,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 362,
                "end": 372,
                "id": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 364,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 372,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 367,
                    "end": 370,
                    "object": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "decorators": [],
                      "name": "y",
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
      "start": 387,
      "end": 774,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 401,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 402,
        "end": 774,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 408,
            "end": 601,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 415,
              "end": 421,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 416,
                  "end": 417,
                  "name": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 419,
                  "end": 420,
                  "name": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 422,
              "end": 601,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 432,
                  "end": 437,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 433,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 435,
                      "end": 436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "start": 446,
                  "end": 490,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 451,
                    "end": 490,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 454,
                      "end": 490,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 468,
                          "end": 480,
                          "argument": {
                            "type": "Literal",
                            "start": 475,
                            "end": 479,
                            "value": null,
                            "raw": "null"
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
                  "start": 499,
                  "end": 514,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 504,
                    "end": 514,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 505,
                        "end": 509,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 506,
                          "end": 509,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 508,
                            "end": 509,
                            "typeName": {
                              "type": "Identifier",
                              "start": 508,
                              "end": 509,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 511,
                      "end": 514,
                      "body": []
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
                  "start": 523,
                  "end": 544,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 525,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 525,
                    "end": 544,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 528,
                      "end": 544,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 530,
                          "end": 542,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 537,
                            "end": 541
                          }
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
                  "start": 553,
                  "end": 595,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 564,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 564,
                    "end": 595,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 565,
                        "end": 576,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 576,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 573,
                            "end": 576,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 575,
                              "end": 576,
                              "typeName": {
                                "type": "Identifier",
                                "start": 575,
                                "end": 576,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 578,
                        "end": 590,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 586,
                          "end": 590,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 587,
                            "end": 590,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 589,
                              "end": 590,
                              "typeName": {
                                "type": "Identifier",
                                "start": 589,
                                "end": 590,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 592,
                      "end": 595,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
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
            "type": "ClassDeclaration",
            "start": 607,
            "end": 646,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 614,
              "end": 620,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 615,
                  "end": 616,
                  "name": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 618,
                  "end": 619,
                  "name": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 619,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 630,
              "end": 636,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 631,
                  "end": 632,
                  "typeName": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 634,
                  "end": 635,
                  "typeName": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 637,
              "end": 646,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 639,
                  "end": 644,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 640,
                    "end": 643,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 642,
                      "end": 643,
                      "typeName": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 643,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 652,
            "end": 673,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 656,
                "end": 672,
                "id": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 660,
                  "end": 672,
                  "callee": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 665,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 666,
                      "end": 667,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 669,
                      "end": 671,
                      "value": "",
                      "raw": "''"
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
            "start": 678,
            "end": 693,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 692,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 686,
                  "end": 692,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 686,
                    "end": 690,
                    "object": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 687,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 688,
                      "end": 690,
                      "decorators": [],
                      "name": "fn",
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
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 698,
            "end": 711,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 702,
                "end": 710,
                "id": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 707,
                  "end": 710,
                  "object": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 710,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 716,
            "end": 729,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 720,
                "end": 728,
                "id": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 722,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 725,
                  "end": 728,
                  "object": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 726,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 728,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 734,
            "end": 743,
            "expression": {
              "type": "AssignmentExpression",
              "start": 734,
              "end": 742,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 734,
                "end": 737,
                "object": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 740,
                "end": 742,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 748,
            "end": 763,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 752,
                "end": 762,
                "id": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 757,
                  "end": 762,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 757,
                    "end": 760,
                    "object": {
                      "type": "Identifier",
                      "start": 757,
                      "end": 758,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 760,
                      "decorators": [],
                      "name": "y",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
