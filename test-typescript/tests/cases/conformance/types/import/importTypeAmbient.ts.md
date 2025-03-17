__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 662,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 110,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 63,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 72,
                  "end": 82,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 75,
                      "end": 81
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
            "type": "TSExportAssignment",
            "start": 93,
            "end": 108,
            "expression": {
              "type": "Identifier",
              "start": 102,
              "end": 107,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 133,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 133,
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 120,
                "end": 133,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 127,
                  "end": 132,
                  "literal": {
                    "type": "Literal",
                    "start": 127,
                    "end": 132,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 136,
            "end": 150,
            "properties": [
              {
                "type": "Property",
                "start": 138,
                "end": 142,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 141,
                  "end": 142,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 144,
                "end": 148,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 147,
                  "end": 148,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 153,
      "end": 466,
      "id": {
        "type": "Literal",
        "start": 168,
        "end": 174,
        "value": "foo2",
        "raw": "\"foo2\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 466,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 181,
            "end": 280,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 195,
              "end": 280,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 205,
                  "end": 274,
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 217,
                    "end": 274,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 231,
                        "end": 241,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 232,
                          "end": 240,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 234,
                            "end": 240
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 254,
                        "end": 264,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 255,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 257,
                            "end": 263
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 286,
            "end": 385,
            "id": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "name": "Baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 300,
              "end": 385,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 310,
                  "end": 379,
                  "id": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "name": "J",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 322,
                    "end": 379,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 336,
                        "end": 346,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 336,
                          "end": 337,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 337,
                          "end": 345,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 339,
                            "end": 345
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 359,
                        "end": 369,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 360,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 360,
                          "end": 368,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 362,
                            "end": 368
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "ClassDeclaration",
            "start": 391,
            "end": 464,
            "id": {
              "type": "Identifier",
              "start": 397,
              "end": 400,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 401,
              "end": 464,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 411,
                  "end": 423,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 415,
                    "name": "item",
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
                    "start": 415,
                    "end": 422,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 417,
                      "end": 422,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 417,
                        "end": 422,
                        "left": {
                          "type": "Identifier",
                          "start": 417,
                          "end": 420,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 422,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 432,
                  "end": 458,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 443,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 443,
                    "end": 458,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 444,
                        "end": 456,
                        "name": "input",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 449,
                          "end": 456,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 451,
                            "end": 456,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 451,
                              "end": 456,
                              "left": {
                                "type": "Identifier",
                                "start": 451,
                                "end": 454,
                                "name": "Baz",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 455,
                                "end": 456,
                                "name": "J",
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
                      }
                    ],
                    "body": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 513,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 495,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 495,
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 475,
                "end": 495,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 482,
                  "end": 488,
                  "literal": {
                    "type": "Literal",
                    "start": 482,
                    "end": 488,
                    "value": "foo2",
                    "raw": "\"foo2\""
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "TSQualifiedName",
                  "start": 490,
                  "end": 495,
                  "left": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 493,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 495,
                    "name": "I",
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
          "init": {
            "type": "ObjectExpression",
            "start": 498,
            "end": 513,
            "properties": [
              {
                "type": "Property",
                "start": 500,
                "end": 505,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 501,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 503,
                  "end": 505,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 507,
                "end": 511,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 508,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 510,
                  "end": 511,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
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
      "type": "ClassDeclaration",
      "start": 516,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 526,
        "name": "Bar2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 527,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 533,
            "end": 573,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 537,
              "name": "item",
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
              "start": 537,
              "end": 572,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 539,
                "end": 572,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 540,
                    "end": 550,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 541,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 541,
                      "end": 549,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 543,
                        "end": 549
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 551,
                    "end": 561,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 552,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 562,
                    "end": 571,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 563,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 563,
                      "end": 571,
                      "typeAnnotation": {
                        "type": "TSObjectKeyword",
                        "start": 565,
                        "end": 571
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 605,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 589,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 589,
              "end": 605,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 590,
                  "end": 601,
                  "name": "input",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 596,
                    "end": 601,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 598,
                      "end": 601
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 603,
                "end": 605,
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
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 660,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 640,
            "name": "shim",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 619,
                "end": 640,
                "exprName": {
                  "type": "TSImportType",
                  "start": 626,
                  "end": 640,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 633,
                    "end": 639,
                    "literal": {
                      "type": "Literal",
                      "start": 633,
                      "end": 639,
                      "value": "foo2",
                      "raw": "\"foo2\""
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 643,
            "end": 660,
            "properties": [
              {
                "type": "Property",
                "start": 649,
                "end": 658,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 652,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 658,
                  "name": "Bar2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
