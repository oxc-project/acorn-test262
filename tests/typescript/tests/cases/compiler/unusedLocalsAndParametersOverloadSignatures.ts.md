__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 687,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 77,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 77,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "func",
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
            "start": 21,
            "end": 36,
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            }
          },
          {
            "type": "Identifier",
            "start": 38,
            "end": 53,
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            }
          },
          {
            "type": "RestElement",
            "start": 55,
            "end": 69,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 69,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 64,
                "end": 69,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 64,
                  "end": 67
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 70,
          "end": 76,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 72,
            "end": 76
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 171,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 85,
        "end": 171,
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 98,
          "decorators": [],
          "name": "func",
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
            "start": 99,
            "end": 114,
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 108,
                "end": 114
              }
            }
          },
          {
            "type": "Identifier",
            "start": 116,
            "end": 131,
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 132,
          "end": 137,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 134,
            "end": 137
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 138,
          "end": 171,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 144,
              "end": 169,
              "argument": {
                "type": "BinaryExpression",
                "start": 151,
                "end": 168,
                "left": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 158,
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 168,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 173,
      "end": 504,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 180,
        "end": 504,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
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
          "start": 188,
          "end": 504,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 194,
              "end": 256,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 194,
                "end": 205,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 205,
                "end": 256,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 206,
                    "end": 221,
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 213,
                      "end": 221,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 215,
                        "end": 221
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 223,
                    "end": 238,
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 240,
                    "end": 254,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 247,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 249,
                        "end": 254,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 249,
                          "end": 252
                        }
                      }
                    },
                    "value": null
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
              "start": 261,
              "end": 341,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 272,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 272,
                "end": 341,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 273,
                    "end": 288,
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 280,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 282,
                        "end": 288
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 290,
                    "end": 305,
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 299,
                        "end": 305
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 307,
                  "end": 341,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 317,
                      "end": 335,
                      "expression": {
                        "type": "BinaryExpression",
                        "start": 317,
                        "end": 334,
                        "left": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 324,
                          "decorators": [],
                          "name": "details",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 334,
                          "decorators": [],
                          "name": "message",
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
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 347,
              "end": 410,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 347,
                "end": 353,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 353,
                "end": 410,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 354,
                    "end": 369,
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 361,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 363,
                        "end": 369
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 371,
                    "end": 386,
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 378,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 380,
                        "end": 386
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 388,
                    "end": 402,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 395,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 395,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 397,
                        "end": 402,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 397,
                          "end": 400
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 403,
                  "end": 409,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 405,
                    "end": 409
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
              "start": 415,
              "end": 502,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 415,
                "end": 421,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 421,
                "end": 502,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 422,
                    "end": 437,
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 429,
                      "end": 437,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 431,
                        "end": 437
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 439,
                    "end": 454,
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 454,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 448,
                        "end": 454
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 455,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 457,
                    "end": 460
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 461,
                  "end": 502,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 471,
                      "end": 496,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 478,
                        "end": 495,
                        "left": {
                          "type": "Identifier",
                          "start": 478,
                          "end": 485,
                          "decorators": [],
                          "name": "details",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 495,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 507,
      "end": 589,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 514,
        "end": 589,
        "id": {
          "type": "Identifier",
          "start": 523,
          "end": 534,
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 534,
          "end": 537,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 535,
              "end": 536,
              "name": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
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
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 538,
            "end": 553,
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 545,
              "end": 553,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 547,
                "end": 553
              }
            }
          },
          {
            "type": "Identifier",
            "start": 555,
            "end": 565,
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 565,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 564,
                "end": 565,
                "typeName": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 565,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "RestElement",
            "start": 567,
            "end": 581,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 570,
              "end": 574,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 581,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 576,
                "end": 581,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 576,
                  "end": 579
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 582,
          "end": 588,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 584,
            "end": 588
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 590,
      "end": 687,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 597,
        "end": 687,
        "id": {
          "type": "Identifier",
          "start": 606,
          "end": 617,
          "decorators": [],
          "name": "genericFunc",
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
            "start": 618,
            "end": 633,
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 633,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 627,
                "end": 633
              }
            }
          },
          {
            "type": "Identifier",
            "start": 635,
            "end": 647,
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 642,
              "end": 647,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 644,
                "end": 647
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 648,
          "end": 653,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 650,
            "end": 653
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 654,
          "end": 687,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 660,
              "end": 685,
              "argument": {
                "type": "BinaryExpression",
                "start": 667,
                "end": 684,
                "left": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 674,
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 684,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
