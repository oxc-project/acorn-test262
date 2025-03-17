__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 1149,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 257,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 70,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 70,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 57,
                    "end": 70,
                    "value": "hello world",
                    "raw": "'hello world'"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 75,
            "end": 161,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 82,
              "end": 161,
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 93,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 94,
                "end": 161,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 104,
                    "end": 155,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 115,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 115,
                      "end": 155,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 116,
                          "end": 132,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 132,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 124,
                              "end": 132,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 126,
                                "end": 132
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 134,
                          "end": 150,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 150,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 142,
                              "end": 150,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 144,
                                "end": 150
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 152,
                        "end": 155,
                        "body": []
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 255,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 173,
              "end": 255,
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 182,
                "end": 255,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 192,
                    "end": 249,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 199,
                      "end": 249,
                      "id": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 211,
                        "name": "Id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 212,
                        "end": 249,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 226,
                            "end": 239,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 226,
                              "end": 230,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 230,
                              "end": 238,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 232,
                                "end": 238
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 259,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 267,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 268,
        "end": 296,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 274,
            "end": 294,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 281,
              "end": 294,
              "id": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 311,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 311,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 314,
            "end": 319,
            "object": {
              "type": "MemberExpression",
              "start": 314,
              "end": 317,
              "object": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 353,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 328,
                "end": 353,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 330,
                    "end": 340,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 331,
                      "end": 339,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 333,
                        "end": 339
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 341,
                    "end": 351,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 342,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 344,
                        "end": 350
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 356,
            "end": 375,
            "callee": {
              "type": "MemberExpression",
              "start": 360,
              "end": 369,
              "object": {
                "type": "MemberExpression",
                "start": 360,
                "end": 363,
                "object": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 361,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 369,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 370,
                "end": 371,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 373,
                "end": 374,
                "value": 0,
                "raw": "0"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 400,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 400,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 384,
                "end": 400,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 386,
                    "end": 398,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 390,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 390,
                      "end": 398,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 392,
                        "end": 398
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 417,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 409,
                "end": 417,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 409,
                  "end": 417,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 409,
                    "end": 414,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 409,
                      "end": 412,
                      "left": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 410,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 412,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 417,
                    "name": "Id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 420,
      "end": 615,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 428,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 429,
        "end": 615,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 435,
            "end": 481,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 442,
              "end": 481,
              "id": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "name": "Y",
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
                "start": 455,
                "end": 481,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 465,
                    "end": 475,
                    "argument": {
                      "type": "Literal",
                      "start": 472,
                      "end": 474,
                      "value": 42,
                      "raw": "42"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 487,
            "end": 613,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 494,
              "end": 613,
              "id": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 503,
                "end": 613,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 513,
                    "end": 607,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 520,
                      "end": 607,
                      "id": {
                        "type": "Identifier",
                        "start": 526,
                        "end": 531,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 532,
                        "end": 607,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 546,
                            "end": 597,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 546,
                              "end": 557,
                              "name": "constructor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "constructor",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 557,
                              "end": 597,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "TSParameterProperty",
                                  "start": 558,
                                  "end": 574,
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "start": 565,
                                    "end": 574,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 566,
                                      "end": 574,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 568,
                                        "end": 574
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "readonly": false,
                                  "static": false
                                },
                                {
                                  "type": "TSParameterProperty",
                                  "start": 576,
                                  "end": 592,
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "start": 583,
                                    "end": 592,
                                    "name": "y",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 584,
                                      "end": 592,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 586,
                                        "end": 592
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "readonly": false,
                                  "static": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 594,
                                "end": 597,
                                "body": []
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
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 617,
      "end": 693,
      "id": {
        "type": "Identifier",
        "start": 624,
        "end": 625,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 626,
        "end": 693,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 669,
            "end": 691,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 676,
              "end": 691,
              "id": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 687,
                "end": 690,
                "left": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 690,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 695,
      "end": 717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 708,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 708,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 702,
                "end": 708
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 711,
            "end": 716,
            "callee": {
              "type": "MemberExpression",
              "start": 711,
              "end": 714,
              "object": {
                "type": "Identifier",
                "start": 711,
                "end": 712,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "name": "y",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 773,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 750,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 750,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 725,
                "end": 750,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 727,
                    "end": 737,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 728,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 728,
                      "end": 736,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 730,
                        "end": 736
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 738,
                    "end": 748,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 739,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 739,
                      "end": 747,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 741,
                        "end": 747
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 753,
            "end": 772,
            "callee": {
              "type": "MemberExpression",
              "start": 757,
              "end": 766,
              "object": {
                "type": "MemberExpression",
                "start": 757,
                "end": 760,
                "object": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 758,
                  "name": "Z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 760,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 761,
                "end": 766,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 767,
                "end": 768,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 770,
                "end": 771,
                "value": 0,
                "raw": "0"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 775,
      "end": 1004,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 783,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 784,
        "end": 1004,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 790,
            "end": 857,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 797,
              "end": 857,
              "id": {
                "type": "Identifier",
                "start": 803,
                "end": 804,
                "name": "L",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 805,
                "end": 857,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 815,
                    "end": 851,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 815,
                      "end": 826,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 826,
                      "end": 851,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 827,
                          "end": 846,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 834,
                            "end": 846,
                            "name": "name",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 838,
                              "end": 846,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 840,
                                "end": 846
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 848,
                        "end": 851,
                        "body": []
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 863,
            "end": 1002,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 870,
              "end": 1002,
              "id": {
                "type": "Identifier",
                "start": 877,
                "end": 878,
                "name": "L",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 879,
                "end": 1002,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 889,
                    "end": 907,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 896,
                      "end": 907,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 900,
                          "end": 906,
                          "id": {
                            "type": "Identifier",
                            "start": 900,
                            "end": 901,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 904,
                            "end": 906,
                            "value": 12,
                            "raw": "12"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 916,
                    "end": 996,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 923,
                      "end": 996,
                      "id": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 938,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 939,
                        "end": 996,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 953,
                            "end": 963,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 953,
                              "end": 954,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 954,
                              "end": 962,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 956,
                                "end": 962
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 976,
                            "end": 986,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 976,
                              "end": 977,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 977,
                              "end": 985,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 979,
                                "end": 985
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1006,
      "end": 1045,
      "id": {
        "type": "Identifier",
        "start": 1013,
        "end": 1014,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1015,
        "end": 1045,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1021,
            "end": 1043,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 1028,
              "end": 1043,
              "id": {
                "type": "Identifier",
                "start": 1035,
                "end": 1036,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1039,
                "end": 1042,
                "left": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1040,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "name": "L",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1047,
      "end": 1071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1051,
          "end": 1070,
          "id": {
            "type": "Identifier",
            "start": 1051,
            "end": 1070,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1052,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1054,
                "end": 1070,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1056,
                    "end": 1068,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1056,
                      "end": 1060,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1060,
                      "end": 1068,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1062,
                        "end": 1068
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1072,
      "end": 1097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1076,
          "end": 1096,
          "id": {
            "type": "Identifier",
            "start": 1076,
            "end": 1077,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1080,
            "end": 1096,
            "callee": {
              "type": "MemberExpression",
              "start": 1084,
              "end": 1087,
              "object": {
                "type": "Identifier",
                "start": 1084,
                "end": 1085,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1086,
                "end": 1087,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1088,
                "end": 1095,
                "value": "Hello",
                "raw": "'Hello'"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1099,
      "end": 1131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1103,
          "end": 1131,
          "id": {
            "type": "Identifier",
            "start": 1103,
            "end": 1131,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1104,
              "end": 1131,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1106,
                "end": 1131,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1108,
                    "end": 1118,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1108,
                      "end": 1109,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1109,
                      "end": 1117,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1111,
                        "end": 1117
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1119,
                    "end": 1129,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1119,
                      "end": 1120,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1120,
                      "end": 1128,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1122,
                        "end": 1128
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1132,
      "end": 1149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1136,
          "end": 1148,
          "id": {
            "type": "Identifier",
            "start": 1136,
            "end": 1148,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1137,
              "end": 1148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1139,
                "end": 1148,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1139,
                  "end": 1148,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 1139,
                    "end": 1142,
                    "left": {
                      "type": "Identifier",
                      "start": 1139,
                      "end": 1140,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1142,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1143,
                    "end": 1148,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
