__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1096,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1083,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 1083,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 84,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 22,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 32,
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 33,
                "end": 84,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 43,
                    "end": 48,
                    "id": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "decorators": [],
                      "name": "Green",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 58,
                    "end": 62,
                    "id": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 62,
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 72,
                    "end": 77,
                    "id": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 77,
                      "decorators": [],
                      "name": "Brown",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 141,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 97,
              "end": 141,
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "decorators": [],
                "name": "IEye",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 112,
                "end": 141,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 122,
                    "end": 135,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 127,
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 147,
            "end": 205,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 154,
              "end": 205,
              "id": {
                "type": "Identifier",
                "start": 164,
                "end": 174,
                "decorators": [],
                "name": "IFrenchEye",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 175,
                "end": 205,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 185,
                    "end": 199,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 191,
                      "decorators": [],
                      "name": "coleur",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 191,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 211,
            "end": 300,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 218,
              "end": 300,
              "id": {
                "type": "Identifier",
                "start": 227,
                "end": 238,
                "decorators": [],
                "name": "CompareEyes",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 245,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 241,
                      "end": 245,
                      "typeName": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 245,
                        "decorators": [],
                        "name": "IEye",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 246,
                  "end": 252,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 247,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 252,
                        "decorators": [],
                        "name": "IEye",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 253,
                "end": 260,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 254,
                  "end": 260
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 300,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 271,
                    "end": 294,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 278,
                      "end": 293,
                      "left": {
                        "type": "MemberExpression",
                        "start": 278,
                        "end": 285,
                        "object": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 279,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 285,
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "start": 286,
                        "end": 293,
                        "object": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 293,
                          "decorators": [],
                          "name": "color",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 306,
            "end": 409,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 313,
              "end": 409,
              "id": {
                "type": "Identifier",
                "start": 322,
                "end": 333,
                "decorators": [],
                "name": "CompareYeux",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 334,
                  "end": 346,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 346,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 346,
                        "decorators": [],
                        "name": "IFrenchEye",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 347,
                  "end": 359,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 348,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 349,
                      "end": 359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 359,
                        "decorators": [],
                        "name": "IFrenchEye",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 360,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 361,
                  "end": 367
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 368,
                "end": 409,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 378,
                    "end": 403,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 385,
                      "end": 402,
                      "left": {
                        "type": "MemberExpression",
                        "start": 385,
                        "end": 393,
                        "object": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 386,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 387,
                          "end": 393,
                          "decorators": [],
                          "name": "coleur",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "start": 394,
                        "end": 402,
                        "object": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 395,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 396,
                          "end": 402,
                          "decorators": [],
                          "name": "coleur",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 415,
            "end": 1081,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 422,
              "end": 1081,
              "id": {
                "type": "Identifier",
                "start": 431,
                "end": 435,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 438,
                "end": 1081,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 448,
                    "end": 465,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 452,
                        "end": 464,
                        "id": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 460,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 453,
                            "end": 460,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 454,
                              "end": 460,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 454,
                                "end": 458,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 454,
                                  "end": 458,
                                  "decorators": [],
                                  "name": "IEye",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 462,
                          "end": 464,
                          "elements": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 474,
                    "end": 488,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 478,
                        "end": 487,
                        "id": {
                          "type": "Identifier",
                          "start": 478,
                          "end": 484,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 485,
                          "end": 487,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 502,
                    "end": 529,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 502,
                      "end": 528,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 502,
                        "end": 506,
                        "object": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 503,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 504,
                          "end": 505,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 507,
                        "end": 528,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 509,
                            "end": 526,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 509,
                              "end": 514,
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 515,
                              "end": 526,
                              "object": {
                                "type": "Identifier",
                                "start": 515,
                                "end": 520,
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 521,
                                "end": 526,
                                "decorators": [],
                                "name": "Brown",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 538,
                    "end": 564,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 538,
                      "end": 563,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 538,
                        "end": 542,
                        "object": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 539,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 540,
                          "end": 541,
                          "value": 1,
                          "raw": "1"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 543,
                        "end": 563,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 545,
                            "end": 561,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 550,
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 551,
                              "end": 561,
                              "object": {
                                "type": "Identifier",
                                "start": 551,
                                "end": 556,
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 557,
                                "end": 561,
                                "decorators": [],
                                "name": "Blue",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 573,
                    "end": 600,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 573,
                      "end": 599,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 573,
                        "end": 577,
                        "object": {
                          "type": "Identifier",
                          "start": 573,
                          "end": 574,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 575,
                          "end": 576,
                          "value": 2,
                          "raw": "2"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 578,
                        "end": 599,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 580,
                            "end": 597,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 580,
                              "end": 585,
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 586,
                              "end": 597,
                              "object": {
                                "type": "Identifier",
                                "start": 586,
                                "end": 591,
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 592,
                                "end": 597,
                                "decorators": [],
                                "name": "Green",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 610,
                    "end": 632,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 610,
                      "end": 631,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 612,
                        "end": 631,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 612,
                          "end": 618,
                          "object": {
                            "type": "Identifier",
                            "start": 612,
                            "end": 613,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 614,
                            "end": 618,
                            "decorators": [],
                            "name": "sort",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 619,
                            "end": 630,
                            "decorators": [],
                            "name": "CompareYeux",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 721,
                    "end": 747,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 725,
                        "end": 746,
                        "id": {
                          "type": "Identifier",
                          "start": 725,
                          "end": 726,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 727,
                          "end": 746,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 727,
                            "end": 733,
                            "object": {
                              "type": "Identifier",
                              "start": 727,
                              "end": 728,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 729,
                              "end": 733,
                              "decorators": [],
                              "name": "sort",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 734,
                              "end": 745,
                              "decorators": [],
                              "name": "CompareEyes",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 763,
                    "end": 866,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 768,
                      "end": 788,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 772,
                          "end": 775,
                          "id": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 773,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 774,
                            "end": 775,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        },
                        {
                          "type": "VariableDeclarator",
                          "start": 776,
                          "end": 788,
                          "id": {
                            "type": "Identifier",
                            "start": 776,
                            "end": 779,
                            "decorators": [],
                            "name": "len",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "MemberExpression",
                            "start": 780,
                            "end": 788,
                            "object": {
                              "type": "Identifier",
                              "start": 780,
                              "end": 781,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 782,
                              "end": 788,
                              "decorators": [],
                              "name": "length",
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
                    "test": {
                      "type": "BinaryExpression",
                      "start": 789,
                      "end": 794,
                      "left": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 790,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "<",
                      "right": {
                        "type": "Identifier",
                        "start": 791,
                        "end": 794,
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 795,
                      "end": 798,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 795,
                        "end": 796,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 800,
                      "end": 866,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 814,
                          "end": 856,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 814,
                            "end": 855,
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "start": 814,
                              "end": 820,
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "start": 823,
                              "end": 854,
                              "left": {
                                "type": "MemberExpression",
                                "start": 824,
                                "end": 846,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 824,
                                  "end": 834,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 824,
                                    "end": 829,
                                    "decorators": [],
                                    "name": "Color",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 830,
                                    "end": 834,
                                    "decorators": [],
                                    "name": "_map",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "start": 835,
                                  "end": 845,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 835,
                                    "end": 839,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 835,
                                      "end": 836,
                                      "decorators": [],
                                      "name": "z",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 837,
                                      "end": 838,
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": true
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 840,
                                    "end": 845,
                                    "decorators": [],
                                    "name": "color",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "optional": false,
                                "computed": true
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 848,
                                "end": 854,
                                "value": "\r\n",
                                "raw": "\"\\r\\n\""
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 876,
                    "end": 903,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 880,
                        "end": 902,
                        "id": {
                          "type": "Identifier",
                          "start": 880,
                          "end": 897,
                          "decorators": [],
                          "name": "eeks",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 884,
                            "end": 897,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 885,
                              "end": 897,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 885,
                                "end": 895,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 885,
                                  "end": 895,
                                  "decorators": [],
                                  "name": "IFrenchEye",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 900,
                          "end": 902,
                          "elements": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 912,
                    "end": 1010,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 917,
                      "end": 933,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 921,
                          "end": 933,
                          "id": {
                            "type": "Identifier",
                            "start": 921,
                            "end": 922,
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "start": 923,
                            "end": 933,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 923,
                              "end": 931,
                              "object": {
                                "type": "Identifier",
                                "start": 923,
                                "end": 924,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 925,
                                "end": 931,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 932,
                              "end": 933,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 934,
                      "end": 938,
                      "left": {
                        "type": "Identifier",
                        "start": 934,
                        "end": 935,
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "start": 937,
                        "end": 938,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 939,
                      "end": 942,
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 940,
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 944,
                      "end": 1010,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 958,
                          "end": 971,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 958,
                            "end": 970,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 958,
                              "end": 965,
                              "object": {
                                "type": "Identifier",
                                "start": 958,
                                "end": 962,
                                "decorators": [],
                                "name": "eeks",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 963,
                                "end": 964,
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": true
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 966,
                              "end": 970,
                              "object": {
                                "type": "Identifier",
                                "start": 966,
                                "end": 967,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 968,
                                "end": 969,
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": true
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1019,
                    "end": 1026,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1019,
                      "end": 1025,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1023,
                        "decorators": [],
                        "name": "eeks",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1024,
                        "end": 1025,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1061,
                    "end": 1075,
                    "argument": {
                      "type": "Identifier",
                      "start": 1068,
                      "end": 1074,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
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
      "type": "ExpressionStatement",
      "start": 1085,
      "end": 1094,
      "expression": {
        "type": "CallExpression",
        "start": 1085,
        "end": 1093,
        "callee": {
          "type": "MemberExpression",
          "start": 1085,
          "end": 1091,
          "object": {
            "type": "Identifier",
            "start": 1085,
            "end": 1086,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1087,
            "end": 1091,
            "decorators": [],
            "name": "test",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
