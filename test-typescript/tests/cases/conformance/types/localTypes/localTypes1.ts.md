__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2223,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 14,
        "end": 200,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 20,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 37,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 40,
                "end": 41,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 43,
                "end": 44,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 27,
              "end": 50,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 37,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 40,
                  "end": 41,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 43,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 55,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 63,
              "end": 84,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 73,
                  "end": 78,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
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
                    "start": 74,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 76,
                      "end": 77,
                      "typeName": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
            "type": "TSInterfaceDeclaration",
            "start": 89,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 101,
              "end": 122,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 111,
                  "end": 116,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 114,
                      "end": 115,
                      "typeName": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "type": "TSTypeAliasDeclaration",
            "start": 127,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 136,
              "end": 139,
              "elementType": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 145,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 165,
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 152,
                      "end": 153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
                        "name": "A",
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
                  "type": "ArrayExpression",
                  "start": 156,
                  "end": 165,
                  "elements": [
                    {
                      "type": "NewExpression",
                      "start": 157,
                      "end": 164,
                      "callee": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 171,
            "end": 184,
            "expression": {
              "type": "AssignmentExpression",
              "start": 171,
              "end": 183,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 171,
                "end": 177,
                "object": {
                  "type": "MemberExpression",
                  "start": 171,
                  "end": 175,
                  "object": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 173,
                    "end": 174,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 180,
                "end": 183,
                "object": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 189,
            "end": 198,
            "argument": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 495,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "name": "f2",
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
        "start": 216,
        "end": 495,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 222,
            "end": 477,
            "id": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "name": "g",
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
              "start": 235,
              "end": 477,
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "start": 245,
                  "end": 283,
                  "id": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 266,
                      "end": 267,
                      "id": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 269,
                      "end": 270,
                      "id": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 272,
                      "end": 273,
                      "id": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 273,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ],
                  "const": false,
                  "declare": false,
                  "body": {
                    "type": "TSEnumBody",
                    "start": 252,
                    "end": 283,
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 266,
                        "end": 267,
                        "id": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 269,
                        "end": 270,
                        "id": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 272,
                        "end": 273,
                        "id": {
                          "type": "Identifier",
                          "start": 272,
                          "end": 273,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      }
                    ]
                  }
                },
                {
                  "type": "ClassDeclaration",
                  "start": 292,
                  "end": 329,
                  "id": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 300,
                    "end": 329,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 314,
                        "end": 319,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
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
                          "start": 315,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 317,
                            "end": 318,
                            "typeName": {
                              "type": "Identifier",
                              "start": 317,
                              "end": 318,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
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
                  "type": "TSInterfaceDeclaration",
                  "start": 338,
                  "end": 379,
                  "id": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 350,
                    "end": 379,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 364,
                        "end": 369,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 365,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 365,
                          "end": 368,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 367,
                            "end": 368,
                            "typeName": {
                              "type": "Identifier",
                              "start": 367,
                              "end": 368,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                  "type": "TSTypeAliasDeclaration",
                  "start": 388,
                  "end": 401,
                  "id": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 397,
                    "end": 400,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 397,
                      "end": 398,
                      "typeName": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 410,
                  "end": 431,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 414,
                      "end": 430,
                      "id": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 418,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 415,
                          "end": 418,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 417,
                            "end": 418,
                            "typeName": {
                              "type": "Identifier",
                              "start": 417,
                              "end": 418,
                              "name": "A",
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
                        "type": "ArrayExpression",
                        "start": 421,
                        "end": 430,
                        "elements": [
                          {
                            "type": "NewExpression",
                            "start": 422,
                            "end": 429,
                            "callee": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 427,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 440,
                  "end": 453,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 440,
                    "end": 452,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 440,
                      "end": 446,
                      "object": {
                        "type": "MemberExpression",
                        "start": 440,
                        "end": 444,
                        "object": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 441,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 442,
                          "end": 443,
                          "value": 0,
                          "raw": "0"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 449,
                      "end": 452,
                      "object": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 450,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 452,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 462,
                  "end": 471,
                  "argument": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 470,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ReturnStatement",
            "start": 482,
            "end": 493,
            "argument": {
              "type": "CallExpression",
              "start": 489,
              "end": 492,
              "callee": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 497,
      "end": 1101,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 508,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 509,
          "end": 519,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 510,
            "end": 519,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 512,
              "end": 519
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 521,
        "end": 1101,
        "body": [
          {
            "type": "IfStatement",
            "start": 527,
            "end": 1099,
            "test": {
              "type": "Literal",
              "start": 531,
              "end": 535,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 537,
              "end": 1099,
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "start": 547,
                  "end": 585,
                  "id": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 568,
                      "end": 569,
                      "id": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 569,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 571,
                      "end": 572,
                      "id": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 572,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 574,
                      "end": 575,
                      "id": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 575,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ],
                  "const": false,
                  "declare": false,
                  "body": {
                    "type": "TSEnumBody",
                    "start": 554,
                    "end": 585,
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 568,
                        "end": 569,
                        "id": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 569,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 571,
                        "end": 572,
                        "id": {
                          "type": "Identifier",
                          "start": 571,
                          "end": 572,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 574,
                        "end": 575,
                        "id": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 575,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      }
                    ]
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 594,
                  "end": 1093,
                  "test": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 599,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 601,
                    "end": 840,
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "start": 615,
                        "end": 660,
                        "id": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 622,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 623,
                          "end": 660,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 641,
                              "end": 646,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 641,
                                "end": 642,
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
                                "start": 642,
                                "end": 645,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 644,
                                  "end": 645,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 644,
                                    "end": 645,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
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
                        "type": "TSInterfaceDeclaration",
                        "start": 673,
                        "end": 722,
                        "id": {
                          "type": "Identifier",
                          "start": 683,
                          "end": 684,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 685,
                          "end": 722,
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "start": 703,
                              "end": 708,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 703,
                                "end": 704,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 704,
                                "end": 707,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 706,
                                  "end": 707,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 706,
                                    "end": 707,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
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
                        "type": "TSTypeAliasDeclaration",
                        "start": 735,
                        "end": 748,
                        "id": {
                          "type": "Identifier",
                          "start": 740,
                          "end": 741,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 744,
                          "end": 747,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 744,
                            "end": 745,
                            "typeName": {
                              "type": "Identifier",
                              "start": 744,
                              "end": 745,
                              "name": "I",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 761,
                        "end": 782,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 765,
                            "end": 781,
                            "id": {
                              "type": "Identifier",
                              "start": 765,
                              "end": 769,
                              "name": "a",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 766,
                                "end": 769,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 768,
                                  "end": 769,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 768,
                                    "end": 769,
                                    "name": "A",
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
                              "type": "ArrayExpression",
                              "start": 772,
                              "end": 781,
                              "elements": [
                                {
                                  "type": "NewExpression",
                                  "start": 773,
                                  "end": 780,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 777,
                                    "end": 778,
                                    "name": "C",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
                              ]
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 795,
                        "end": 808,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 795,
                          "end": 807,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 795,
                            "end": 801,
                            "object": {
                              "type": "MemberExpression",
                              "start": 795,
                              "end": 799,
                              "object": {
                                "type": "Identifier",
                                "start": 795,
                                "end": 796,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Literal",
                                "start": 797,
                                "end": 798,
                                "value": 0,
                                "raw": "0"
                              },
                              "computed": true,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 800,
                              "end": 801,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 804,
                            "end": 807,
                            "object": {
                              "type": "Identifier",
                              "start": 804,
                              "end": 805,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 806,
                              "end": 807,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 821,
                        "end": 830,
                        "argument": {
                          "type": "Identifier",
                          "start": 828,
                          "end": 829,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 854,
                    "end": 1093,
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "start": 868,
                        "end": 913,
                        "id": {
                          "type": "Identifier",
                          "start": 874,
                          "end": 875,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 876,
                          "end": 913,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 894,
                              "end": 899,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 894,
                                "end": 895,
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
                                "start": 895,
                                "end": 898,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 897,
                                  "end": 898,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 897,
                                    "end": 898,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
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
                        "type": "TSInterfaceDeclaration",
                        "start": 926,
                        "end": 975,
                        "id": {
                          "type": "Identifier",
                          "start": 936,
                          "end": 937,
                          "name": "J",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 938,
                          "end": 975,
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "start": 956,
                              "end": 961,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 956,
                                "end": 957,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 957,
                                "end": 960,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 959,
                                  "end": 960,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 959,
                                    "end": 960,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
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
                        "type": "TSTypeAliasDeclaration",
                        "start": 988,
                        "end": 1001,
                        "id": {
                          "type": "Identifier",
                          "start": 993,
                          "end": 994,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 997,
                          "end": 1000,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 997,
                            "end": 998,
                            "typeName": {
                              "type": "Identifier",
                              "start": 997,
                              "end": 998,
                              "name": "J",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 1014,
                        "end": 1035,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1018,
                            "end": 1034,
                            "id": {
                              "type": "Identifier",
                              "start": 1018,
                              "end": 1022,
                              "name": "c",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1019,
                                "end": 1022,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1021,
                                  "end": 1022,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1021,
                                    "end": 1022,
                                    "name": "C",
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
                              "type": "ArrayExpression",
                              "start": 1025,
                              "end": 1034,
                              "elements": [
                                {
                                  "type": "NewExpression",
                                  "start": 1026,
                                  "end": 1033,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1030,
                                    "end": 1031,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
                              ]
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1048,
                        "end": 1061,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1048,
                          "end": 1060,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1048,
                            "end": 1054,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1048,
                              "end": 1052,
                              "object": {
                                "type": "Identifier",
                                "start": 1048,
                                "end": 1049,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Literal",
                                "start": 1050,
                                "end": 1051,
                                "value": 0,
                                "raw": "0"
                              },
                              "computed": true,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1053,
                              "end": 1054,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 1057,
                            "end": 1060,
                            "object": {
                              "type": "Identifier",
                              "start": 1057,
                              "end": 1058,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1059,
                              "end": 1060,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1074,
                        "end": 1083,
                        "argument": {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1082,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1103,
      "end": 1414,
      "id": {
        "type": "Identifier",
        "start": 1112,
        "end": 1114,
        "name": "f5",
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
        "start": 1117,
        "end": 1414,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1123,
            "end": 1268,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1127,
                "end": 1268,
                "id": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1129,
                  "name": "z1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 1132,
                  "end": 1268,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1144,
                    "end": 1268,
                    "body": [
                      {
                        "type": "TSEnumDeclaration",
                        "start": 1154,
                        "end": 1192,
                        "id": {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1160,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "members": [
                          {
                            "type": "TSEnumMember",
                            "start": 1175,
                            "end": 1176,
                            "id": {
                              "type": "Identifier",
                              "start": 1175,
                              "end": 1176,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "initializer": null,
                            "computed": false
                          },
                          {
                            "type": "TSEnumMember",
                            "start": 1178,
                            "end": 1179,
                            "id": {
                              "type": "Identifier",
                              "start": 1178,
                              "end": 1179,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "initializer": null,
                            "computed": false
                          },
                          {
                            "type": "TSEnumMember",
                            "start": 1181,
                            "end": 1182,
                            "id": {
                              "type": "Identifier",
                              "start": 1181,
                              "end": 1182,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "initializer": null,
                            "computed": false
                          }
                        ],
                        "const": false,
                        "declare": false,
                        "body": {
                          "type": "TSEnumBody",
                          "start": 1161,
                          "end": 1192,
                          "members": [
                            {
                              "type": "TSEnumMember",
                              "start": 1175,
                              "end": 1176,
                              "id": {
                                "type": "Identifier",
                                "start": 1175,
                                "end": 1176,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "initializer": null,
                              "computed": false
                            },
                            {
                              "type": "TSEnumMember",
                              "start": 1178,
                              "end": 1179,
                              "id": {
                                "type": "Identifier",
                                "start": 1178,
                                "end": 1179,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "initializer": null,
                              "computed": false
                            },
                            {
                              "type": "TSEnumMember",
                              "start": 1181,
                              "end": 1182,
                              "id": {
                                "type": "Identifier",
                                "start": 1181,
                                "end": 1182,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "initializer": null,
                              "computed": false
                            }
                          ]
                        }
                      },
                      {
                        "type": "ClassDeclaration",
                        "start": 1201,
                        "end": 1238,
                        "id": {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1208,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 1209,
                          "end": 1238,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 1223,
                              "end": 1228,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1223,
                                "end": 1224,
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
                                "start": 1224,
                                "end": 1227,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1226,
                                  "end": 1227,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1226,
                                    "end": 1227,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
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
                        "type": "ReturnStatement",
                        "start": 1247,
                        "end": 1262,
                        "argument": {
                          "type": "NewExpression",
                          "start": 1254,
                          "end": 1261,
                          "callee": {
                            "type": "Identifier",
                            "start": 1258,
                            "end": 1259,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1273,
            "end": 1412,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1277,
                "end": 1412,
                "id": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1279,
                  "name": "z2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1282,
                  "end": 1412,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1288,
                    "end": 1412,
                    "body": [
                      {
                        "type": "TSEnumDeclaration",
                        "start": 1298,
                        "end": 1336,
                        "id": {
                          "type": "Identifier",
                          "start": 1303,
                          "end": 1304,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "members": [
                          {
                            "type": "TSEnumMember",
                            "start": 1319,
                            "end": 1320,
                            "id": {
                              "type": "Identifier",
                              "start": 1319,
                              "end": 1320,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "initializer": null,
                            "computed": false
                          },
                          {
                            "type": "TSEnumMember",
                            "start": 1322,
                            "end": 1323,
                            "id": {
                              "type": "Identifier",
                              "start": 1322,
                              "end": 1323,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "initializer": null,
                            "computed": false
                          },
                          {
                            "type": "TSEnumMember",
                            "start": 1325,
                            "end": 1326,
                            "id": {
                              "type": "Identifier",
                              "start": 1325,
                              "end": 1326,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "initializer": null,
                            "computed": false
                          }
                        ],
                        "const": false,
                        "declare": false,
                        "body": {
                          "type": "TSEnumBody",
                          "start": 1305,
                          "end": 1336,
                          "members": [
                            {
                              "type": "TSEnumMember",
                              "start": 1319,
                              "end": 1320,
                              "id": {
                                "type": "Identifier",
                                "start": 1319,
                                "end": 1320,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "initializer": null,
                              "computed": false
                            },
                            {
                              "type": "TSEnumMember",
                              "start": 1322,
                              "end": 1323,
                              "id": {
                                "type": "Identifier",
                                "start": 1322,
                                "end": 1323,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "initializer": null,
                              "computed": false
                            },
                            {
                              "type": "TSEnumMember",
                              "start": 1325,
                              "end": 1326,
                              "id": {
                                "type": "Identifier",
                                "start": 1325,
                                "end": 1326,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "initializer": null,
                              "computed": false
                            }
                          ]
                        }
                      },
                      {
                        "type": "ClassDeclaration",
                        "start": 1345,
                        "end": 1382,
                        "id": {
                          "type": "Identifier",
                          "start": 1351,
                          "end": 1352,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 1353,
                          "end": 1382,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 1367,
                              "end": 1372,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1367,
                                "end": 1368,
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
                                "start": 1368,
                                "end": 1371,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1370,
                                  "end": 1371,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1370,
                                    "end": 1371,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
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
                        "type": "ReturnStatement",
                        "start": 1391,
                        "end": 1406,
                        "argument": {
                          "type": "NewExpression",
                          "start": 1398,
                          "end": 1405,
                          "callee": {
                            "type": "Identifier",
                            "start": 1402,
                            "end": 1403,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1416,
      "end": 1816,
      "id": {
        "type": "Identifier",
        "start": 1422,
        "end": 1423,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1424,
        "end": 1816,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1430,
            "end": 1544,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1430,
              "end": 1441,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1441,
              "end": 1544,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1444,
                "end": 1544,
                "body": [
                  {
                    "type": "TSEnumDeclaration",
                    "start": 1454,
                    "end": 1492,
                    "id": {
                      "type": "Identifier",
                      "start": 1459,
                      "end": 1460,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 1475,
                        "end": 1476,
                        "id": {
                          "type": "Identifier",
                          "start": 1475,
                          "end": 1476,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 1478,
                        "end": 1479,
                        "id": {
                          "type": "Identifier",
                          "start": 1478,
                          "end": 1479,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 1481,
                        "end": 1482,
                        "id": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1482,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      }
                    ],
                    "const": false,
                    "declare": false,
                    "body": {
                      "type": "TSEnumBody",
                      "start": 1461,
                      "end": 1492,
                      "members": [
                        {
                          "type": "TSEnumMember",
                          "start": 1475,
                          "end": 1476,
                          "id": {
                            "type": "Identifier",
                            "start": 1475,
                            "end": 1476,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        },
                        {
                          "type": "TSEnumMember",
                          "start": 1478,
                          "end": 1479,
                          "id": {
                            "type": "Identifier",
                            "start": 1478,
                            "end": 1479,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        },
                        {
                          "type": "TSEnumMember",
                          "start": 1481,
                          "end": 1482,
                          "id": {
                            "type": "Identifier",
                            "start": 1481,
                            "end": 1482,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 1501,
                    "end": 1538,
                    "id": {
                      "type": "Identifier",
                      "start": 1507,
                      "end": 1508,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1509,
                      "end": 1538,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1523,
                          "end": 1528,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1523,
                            "end": 1524,
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
                            "start": 1524,
                            "end": 1527,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1526,
                              "end": 1527,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1526,
                                "end": 1527,
                                "name": "E",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
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
          },
          {
            "type": "MethodDefinition",
            "start": 1549,
            "end": 1677,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1549,
              "end": 1550,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1550,
              "end": 1677,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1553,
                "end": 1677,
                "body": [
                  {
                    "type": "TSEnumDeclaration",
                    "start": 1563,
                    "end": 1601,
                    "id": {
                      "type": "Identifier",
                      "start": 1568,
                      "end": 1569,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 1584,
                        "end": 1585,
                        "id": {
                          "type": "Identifier",
                          "start": 1584,
                          "end": 1585,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 1587,
                        "end": 1588,
                        "id": {
                          "type": "Identifier",
                          "start": 1587,
                          "end": 1588,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 1590,
                        "end": 1591,
                        "id": {
                          "type": "Identifier",
                          "start": 1590,
                          "end": 1591,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      }
                    ],
                    "const": false,
                    "declare": false,
                    "body": {
                      "type": "TSEnumBody",
                      "start": 1570,
                      "end": 1601,
                      "members": [
                        {
                          "type": "TSEnumMember",
                          "start": 1584,
                          "end": 1585,
                          "id": {
                            "type": "Identifier",
                            "start": 1584,
                            "end": 1585,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        },
                        {
                          "type": "TSEnumMember",
                          "start": 1587,
                          "end": 1588,
                          "id": {
                            "type": "Identifier",
                            "start": 1587,
                            "end": 1588,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        },
                        {
                          "type": "TSEnumMember",
                          "start": 1590,
                          "end": 1591,
                          "id": {
                            "type": "Identifier",
                            "start": 1590,
                            "end": 1591,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 1610,
                    "end": 1647,
                    "id": {
                      "type": "Identifier",
                      "start": 1616,
                      "end": 1617,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1618,
                      "end": 1647,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1632,
                          "end": 1637,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1632,
                            "end": 1633,
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
                            "start": 1633,
                            "end": 1636,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1635,
                              "end": 1636,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1635,
                                "end": 1636,
                                "name": "E",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
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
                    "type": "ReturnStatement",
                    "start": 1656,
                    "end": 1671,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1663,
                      "end": 1670,
                      "callee": {
                        "type": "Identifier",
                        "start": 1667,
                        "end": 1668,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 1682,
            "end": 1814,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1686,
              "end": 1687,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1687,
              "end": 1814,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1690,
                "end": 1814,
                "body": [
                  {
                    "type": "TSEnumDeclaration",
                    "start": 1700,
                    "end": 1738,
                    "id": {
                      "type": "Identifier",
                      "start": 1705,
                      "end": 1706,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 1721,
                        "end": 1722,
                        "id": {
                          "type": "Identifier",
                          "start": 1721,
                          "end": 1722,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 1724,
                        "end": 1725,
                        "id": {
                          "type": "Identifier",
                          "start": 1724,
                          "end": 1725,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      },
                      {
                        "type": "TSEnumMember",
                        "start": 1727,
                        "end": 1728,
                        "id": {
                          "type": "Identifier",
                          "start": 1727,
                          "end": 1728,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "initializer": null,
                        "computed": false
                      }
                    ],
                    "const": false,
                    "declare": false,
                    "body": {
                      "type": "TSEnumBody",
                      "start": 1707,
                      "end": 1738,
                      "members": [
                        {
                          "type": "TSEnumMember",
                          "start": 1721,
                          "end": 1722,
                          "id": {
                            "type": "Identifier",
                            "start": 1721,
                            "end": 1722,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        },
                        {
                          "type": "TSEnumMember",
                          "start": 1724,
                          "end": 1725,
                          "id": {
                            "type": "Identifier",
                            "start": 1724,
                            "end": 1725,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        },
                        {
                          "type": "TSEnumMember",
                          "start": 1727,
                          "end": 1728,
                          "id": {
                            "type": "Identifier",
                            "start": 1727,
                            "end": 1728,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "initializer": null,
                          "computed": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 1747,
                    "end": 1784,
                    "id": {
                      "type": "Identifier",
                      "start": 1753,
                      "end": 1754,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1755,
                      "end": 1784,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1769,
                          "end": 1774,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1769,
                            "end": 1770,
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
                            "start": 1770,
                            "end": 1773,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1772,
                              "end": 1773,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1772,
                                "end": 1773,
                                "name": "E",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
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
                    "type": "ReturnStatement",
                    "start": 1793,
                    "end": 1808,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1800,
                      "end": 1807,
                      "callee": {
                        "type": "Identifier",
                        "start": 1804,
                        "end": 1805,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 1818,
      "end": 2222,
      "id": {
        "type": "Identifier",
        "start": 1827,
        "end": 1829,
        "name": "f6",
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
        "start": 1832,
        "end": 2222,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1838,
            "end": 1872,
            "id": {
              "type": "Identifier",
              "start": 1844,
              "end": 1845,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1846,
              "end": 1872,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1856,
                  "end": 1866,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1856,
                    "end": 1857,
                    "name": "a",
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
                    "start": 1857,
                    "end": 1865,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1859,
                      "end": 1865
                    }
                  },
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
            "type": "FunctionDeclaration",
            "start": 1877,
            "end": 2204,
            "id": {
              "type": "Identifier",
              "start": 1886,
              "end": 1887,
              "name": "g",
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
              "start": 1890,
              "end": 2204,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 1900,
                  "end": 1952,
                  "id": {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1907,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": {
                    "type": "Identifier",
                    "start": 1916,
                    "end": 1917,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "ClassBody",
                    "start": 1918,
                    "end": 1952,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 1932,
                        "end": 1942,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1932,
                          "end": 1933,
                          "name": "b",
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
                          "start": 1933,
                          "end": 1941,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1935,
                            "end": 1941
                          }
                        },
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
                  "type": "FunctionDeclaration",
                  "start": 1961,
                  "end": 2178,
                  "id": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1971,
                    "name": "h",
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
                    "start": 1974,
                    "end": 2178,
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "start": 1988,
                        "end": 2048,
                        "id": {
                          "type": "Identifier",
                          "start": 1994,
                          "end": 1995,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": {
                          "type": "Identifier",
                          "start": 2004,
                          "end": 2005,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "body": {
                          "type": "ClassBody",
                          "start": 2006,
                          "end": 2048,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 2024,
                              "end": 2034,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2024,
                                "end": 2025,
                                "name": "c",
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
                                "start": 2025,
                                "end": 2033,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2027,
                                  "end": 2033
                                }
                              },
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
                        "type": "VariableDeclaration",
                        "start": 2061,
                        "end": 2077,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2065,
                            "end": 2076,
                            "id": {
                              "type": "Identifier",
                              "start": 2065,
                              "end": 2066,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 2069,
                              "end": 2076,
                              "callee": {
                                "type": "Identifier",
                                "start": 2073,
                                "end": 2074,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2090,
                        "end": 2100,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 2090,
                          "end": 2099,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 2090,
                            "end": 2093,
                            "object": {
                              "type": "Identifier",
                              "start": 2090,
                              "end": 2091,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2092,
                              "end": 2093,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2096,
                            "end": 2099,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2113,
                        "end": 2123,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 2113,
                          "end": 2122,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 2113,
                            "end": 2116,
                            "object": {
                              "type": "Identifier",
                              "start": 2113,
                              "end": 2114,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2115,
                              "end": 2116,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2119,
                            "end": 2122,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2136,
                        "end": 2146,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 2136,
                          "end": 2145,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 2136,
                            "end": 2139,
                            "object": {
                              "type": "Identifier",
                              "start": 2136,
                              "end": 2137,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2138,
                              "end": 2139,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2142,
                            "end": 2145,
                            "value": "c",
                            "raw": "\"c\""
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 2159,
                        "end": 2168,
                        "argument": {
                          "type": "Identifier",
                          "start": 2166,
                          "end": 2167,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 2187,
                  "end": 2198,
                  "argument": {
                    "type": "CallExpression",
                    "start": 2194,
                    "end": 2197,
                    "callee": {
                      "type": "Identifier",
                      "start": 2194,
                      "end": 2195,
                      "name": "h",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ReturnStatement",
            "start": 2209,
            "end": 2220,
            "argument": {
              "type": "CallExpression",
              "start": 2216,
              "end": 2219,
              "callee": {
                "type": "Identifier",
                "start": 2216,
                "end": 2217,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
