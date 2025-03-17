__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 515,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "WeirdoBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 22,
        "end": 126,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 24,
            "end": 68,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 26,
                "end": 44,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 43,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 43,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 45,
                "end": 66,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 53,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 54,
                    "end": 65,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 57,
                        "end": 65,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 57,
                            "end": 58,
                            "typeName": {
                              "type": "Identifier",
                              "start": 57,
                              "end": 58,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 61,
                            "end": 65
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 73,
            "end": 126,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 75,
                "end": 92,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 83,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 87,
                    "end": 91,
                    "literal": {
                      "type": "Literal",
                      "start": 87,
                      "end": 91,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 93,
                "end": 115,
                "key": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 102,
                    "end": 113,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 105,
                        "end": 113,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 105,
                            "end": 106,
                            "typeName": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 106,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 109,
                            "end": 113
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 116,
                "end": 124,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 121,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "name": "T",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 171,
            "name": "weirdoBox",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 163,
                  "name": "WeirdoBox",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 163,
                  "end": 171,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 164,
                      "end": 170
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 174,
      "end": 216,
      "test": {
        "type": "MemberExpression",
        "start": 178,
        "end": 192,
        "object": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "name": "weirdoBox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 188,
          "end": 192,
          "name": "done",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 194,
        "end": 216,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 214,
            "expression": {
              "type": "MemberExpression",
              "start": 198,
              "end": 213,
              "object": {
                "type": "Identifier",
                "start": 198,
                "end": 207,
                "name": "weirdoBox",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 213,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 218,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 233,
        "name": "WeirdoBox2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 233,
        "end": 236,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 234,
            "end": 235,
            "name": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 241,
        "end": 420,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 243,
            "end": 287,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 245,
                "end": 263,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 253,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 255,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 257,
                    "end": 262,
                    "literal": {
                      "type": "Literal",
                      "start": 257,
                      "end": 262,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 264,
                "end": 285,
                "key": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 272,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 273,
                    "end": 284,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 276,
                        "end": 284,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 276,
                            "end": 277,
                            "typeName": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 280,
                            "end": 284
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 292,
            "end": 345,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 294,
                "end": 311,
                "key": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 302,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 304,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 306,
                    "end": 310,
                    "literal": {
                      "type": "Literal",
                      "start": 306,
                      "end": 310,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 312,
                "end": 334,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 321,
                    "end": 332,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 322,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 324,
                        "end": 332,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 324,
                            "end": 325,
                            "typeName": {
                              "type": "Identifier",
                              "start": 324,
                              "end": 325,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 328,
                            "end": 332
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 335,
                "end": 343,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 340,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 340,
                  "end": 343,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 342,
                    "end": 343,
                    "typeName": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "name": "T",
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
          {
            "type": "TSTypeLiteral",
            "start": 350,
            "end": 420,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 352,
                "end": 369,
                "key": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 360,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 368,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 364,
                    "end": 368,
                    "literal": {
                      "type": "Literal",
                      "start": 364,
                      "end": 368,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 370,
                "end": 404,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 378,
                  "name": "done",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 379,
                    "end": 402,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 380,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 382,
                        "end": 402,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 382,
                            "end": 383,
                            "typeName": {
                              "type": "Identifier",
                              "start": 382,
                              "end": 383,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 386,
                            "end": 390
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 393,
                            "end": 402
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 405,
                "end": 418,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 410,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 418,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 412,
                    "end": 418
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 467,
            "name": "weirdoBox2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 449,
                "end": 467,
                "typeName": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 459,
                  "name": "WeirdoBox2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 459,
                  "end": 467,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 470,
      "end": 514,
      "test": {
        "type": "MemberExpression",
        "start": 474,
        "end": 489,
        "object": {
          "type": "Identifier",
          "start": 474,
          "end": 484,
          "name": "weirdoBox2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 485,
          "end": 489,
          "name": "done",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 491,
        "end": 514,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 495,
            "end": 512,
            "expression": {
              "type": "MemberExpression",
              "start": 495,
              "end": 511,
              "object": {
                "type": "Identifier",
                "start": 495,
                "end": 505,
                "name": "weirdoBox2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 506,
                "end": 511,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
