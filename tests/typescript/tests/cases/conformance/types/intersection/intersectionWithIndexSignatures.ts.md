__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 44
          }
        ],
        "start": 33,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sa1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 71,
                              "end": 72
                            },
                            "typeArguments": null,
                            "start": 71,
                            "end": 72
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 75,
                              "end": 76
                            },
                            "typeArguments": null,
                            "start": 75,
                            "end": 76
                          }
                        ],
                        "start": 71,
                        "end": 76
                      },
                      "start": 69,
                      "end": 76
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 76
                  }
                ],
                "start": 66,
                "end": 78
              },
              "start": 64,
              "end": 78
            },
            "start": 61,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 78
        }
      ],
      "declare": true,
      "start": 49,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sa2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 100
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 102,
                              "end": 103
                            },
                            "typeArguments": null,
                            "start": 102,
                            "end": 103
                          },
                          "start": 100,
                          "end": 103
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 99,
                        "end": 103
                      }
                    ],
                    "start": 97,
                    "end": 105
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 110,
                          "end": 111
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 113,
                              "end": 114
                            },
                            "typeArguments": null,
                            "start": 113,
                            "end": 114
                          },
                          "start": 111,
                          "end": 114
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 110,
                        "end": 114
                      }
                    ],
                    "start": 108,
                    "end": 116
                  }
                ],
                "start": 97,
                "end": 116
              },
              "start": 95,
              "end": 116
            },
            "start": 92,
            "end": 116
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 116
        }
      ],
      "declare": true,
      "start": 80,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 143,
                            "end": 149
                          },
                          "start": 141,
                          "end": 149
                        },
                        "start": 138,
                        "end": 149
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 152,
                              "end": 153
                            },
                            "typeArguments": null,
                            "start": 152,
                            "end": 153
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
                            },
                            "typeArguments": null,
                            "start": 156,
                            "end": 157
                          }
                        ],
                        "start": 152,
                        "end": 157
                      },
                      "start": 150,
                      "end": 157
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 137,
                    "end": 157
                  }
                ],
                "start": 135,
                "end": 159
              },
              "start": 133,
              "end": 159
            },
            "start": 130,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 130,
          "end": 159
        }
      ],
      "declare": true,
      "start": 118,
      "end": 160
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 186,
                                "end": 192
                              },
                              "start": 184,
                              "end": 192
                            },
                            "start": 181,
                            "end": 192
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 195,
                              "end": 196
                            },
                            "typeArguments": null,
                            "start": 195,
                            "end": 196
                          },
                          "start": 193,
                          "end": 196
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 180,
                        "end": 196
                      }
                    ],
                    "start": 178,
                    "end": 198
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 209,
                                "end": 215
                              },
                              "start": 207,
                              "end": 215
                            },
                            "start": 204,
                            "end": 215
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 218,
                              "end": 219
                            },
                            "typeArguments": null,
                            "start": 218,
                            "end": 219
                          },
                          "start": 216,
                          "end": 219
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 203,
                        "end": 219
                      }
                    ],
                    "start": 201,
                    "end": 221
                  }
                ],
                "start": 178,
                "end": 221
              },
              "start": 176,
              "end": 221
            },
            "start": 173,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 221
        }
      ],
      "declare": true,
      "start": 161,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ta1",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 227
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sa1",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 233
        },
        "start": 224,
        "end": 233
      },
      "directive": null,
      "start": 224,
      "end": 234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ta1",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 238
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sa2",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 244
        },
        "start": 235,
        "end": 244
      },
      "directive": null,
      "start": 235,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ta2",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 249
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sa1",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 255
        },
        "start": 246,
        "end": 255
      },
      "directive": null,
      "start": 246,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ta2",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 260
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sa2",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 266
        },
        "start": 257,
        "end": 266
      },
      "directive": null,
      "start": 257,
      "end": 267
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 289
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 291,
                              "end": 292
                            },
                            "typeArguments": null,
                            "start": 291,
                            "end": 292
                          },
                          "start": 289,
                          "end": 292
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 288,
                        "end": 292
                      }
                    ],
                    "start": 286,
                    "end": 294
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 300
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 303
                            },
                            "typeArguments": null,
                            "start": 302,
                            "end": 303
                          },
                          "start": 300,
                          "end": 303
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 299,
                        "end": 303
                      }
                    ],
                    "start": 297,
                    "end": 305
                  }
                ],
                "start": 286,
                "end": 305
              },
              "start": 284,
              "end": 305
            },
            "start": 281,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 305
        }
      ],
      "declare": true,
      "start": 269,
      "end": 306
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 332,
                            "end": 338
                          },
                          "start": 330,
                          "end": 338
                        },
                        "start": 327,
                        "end": 338
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 341,
                          "end": 342
                        },
                        "typeArguments": null,
                        "start": 341,
                        "end": 342
                      },
                      "start": 339,
                      "end": 342
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 326,
                    "end": 342
                  }
                ],
                "start": 324,
                "end": 344
              },
              "start": 322,
              "end": 344
            },
            "start": 319,
            "end": 344
          },
          "init": null,
          "definite": false,
          "start": 319,
          "end": 344
        }
      ],
      "declare": true,
      "start": 307,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "tb1",
          "optional": false,
          "typeAnnotation": null,
          "start": 347,
          "end": 350
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sb1",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 356
        },
        "start": 347,
        "end": 356
      },
      "directive": null,
      "start": 347,
      "end": 357
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "constr",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 402
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 409
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 409
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tgt",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 414
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 414
          }
        ],
        "start": 402,
        "end": 415
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 438
                },
                "typeArguments": null,
                "start": 432,
                "end": 438
              },
              "start": 426,
              "end": 438
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 441,
              "end": 447
            },
            "optional": false,
            "readonly": null,
            "start": 418,
            "end": 449
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 456
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tgt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 460
                  },
                  "typeArguments": null,
                  "start": 457,
                  "end": 460
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 469
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tgt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 476,
                            "end": 479
                          },
                          "typeArguments": null,
                          "start": 476,
                          "end": 479
                        },
                        "start": 470,
                        "end": 479
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Source",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 493
                          },
                          "typeArguments": null,
                          "start": 487,
                          "end": 493
                        },
                        "start": 481,
                        "end": 493
                      }
                    ],
                    "start": 469,
                    "end": 494
                  },
                  "start": 462,
                  "end": 494
                }
              ],
              "start": 456,
              "end": 495
            },
            "start": 452,
            "end": 495
          }
        ],
        "start": 418,
        "end": 495
      },
      "declare": false,
      "start": 391,
      "end": 496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 504
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "constr",
          "optional": false,
          "typeAnnotation": null,
          "start": 507,
          "end": 513
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 514,
              "end": 516
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 526,
                          "end": 532
                        },
                        "start": 524,
                        "end": 532
                      },
                      "start": 521,
                      "end": 532
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 537,
                            "end": 538
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 540,
                              "end": 546
                            },
                            "start": 538,
                            "end": 546
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 537,
                          "end": 546
                        }
                      ],
                      "start": 535,
                      "end": 548
                    },
                    "start": 533,
                    "end": 548
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 520,
                  "end": 548
                }
              ],
              "start": 518,
              "end": 550
            }
          ],
          "start": 513,
          "end": 551
        },
        "start": 507,
        "end": 551
      },
      "declare": false,
      "start": 498,
      "end": 552
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "typeArguments": null,
                "start": 571,
                "end": 572
              },
              "start": 569,
              "end": 572
            },
            "start": 568,
            "end": 572
          },
          "init": null,
          "definite": false,
          "start": 568,
          "end": 572
        }
      ],
      "declare": true,
      "start": 554,
      "end": 573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "property": {
                "type": "Literal",
                "value": "asd",
                "raw": "\"asd\"",
                "start": 576,
                "end": 581
              },
              "optional": false,
              "computed": true,
              "start": 574,
              "end": 582
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "optional": false,
            "computed": false,
            "start": 574,
            "end": 584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "substr",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 591
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 591
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 592,
            "end": 593
          }
        ],
        "optional": false,
        "start": 574,
        "end": 594
      },
      "directive": null,
      "start": 574,
      "end": 595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 597
          },
          "property": {
            "type": "Literal",
            "value": "asd",
            "raw": "\"asd\"",
            "start": 598,
            "end": 603
          },
          "optional": false,
          "computed": true,
          "start": 596,
          "end": 604
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 606
        },
        "optional": false,
        "computed": false,
        "start": 596,
        "end": 606
      },
      "directive": null,
      "start": 596,
      "end": 607
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 636,
                            "end": 642
                          },
                          "start": 634,
                          "end": 642
                        },
                        "start": 631,
                        "end": 642
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 646,
                              "end": 647
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 649,
                                "end": 655
                              },
                              "start": 647,
                              "end": 655
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 646,
                            "end": 656
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 657,
                              "end": 658
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 660,
                                "end": 666
                              },
                              "start": 658,
                              "end": 666
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 657,
                            "end": 666
                          }
                        ],
                        "start": 645,
                        "end": 667
                      },
                      "start": 643,
                      "end": 667
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 630,
                    "end": 667
                  }
                ],
                "start": 628,
                "end": 669
              },
              "start": 626,
              "end": 669
            },
            "start": 625,
            "end": 669
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 673
          },
          "definite": false,
          "start": 625,
          "end": 673
        }
      ],
      "declare": false,
      "start": 619,
      "end": 674
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 727
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 729,
                            "end": 735
                          },
                          "start": 727,
                          "end": 735
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 726,
                        "end": 735
                      }
                    ],
                    "start": 724,
                    "end": 737
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 743
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 745,
                            "end": 751
                          },
                          "start": 743,
                          "end": 751
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 742,
                        "end": 751
                      }
                    ],
                    "start": 740,
                    "end": 753
                  }
                ],
                "start": 724,
                "end": 753
              },
              "start": 722,
              "end": 753
            },
            "start": 720,
            "end": 753
          },
          "init": null,
          "definite": false,
          "start": 720,
          "end": 753
        }
      ],
      "declare": true,
      "start": 708,
      "end": 754
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 779,
                            "end": 785
                          },
                          "start": 777,
                          "end": 785
                        },
                        "start": 774,
                        "end": 785
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 788,
                        "end": 794
                      },
                      "start": 786,
                      "end": 794
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 773,
                    "end": 794
                  }
                ],
                "start": 771,
                "end": 796
              },
              "start": 769,
              "end": 796
            },
            "start": 767,
            "end": 796
          },
          "init": null,
          "definite": false,
          "start": 767,
          "end": 796
        }
      ],
      "declare": true,
      "start": 755,
      "end": 797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "tt",
          "optional": false,
          "typeAnnotation": null,
          "start": 798,
          "end": 800
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ss",
          "optional": false,
          "typeAnnotation": null,
          "start": 803,
          "end": 805
        },
        "start": 798,
        "end": 805
      },
      "directive": null,
      "start": 798,
      "end": 806
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 816
}
```
