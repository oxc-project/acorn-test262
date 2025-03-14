index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 639,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 288,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 229,
        "end": 288,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 235,
            "end": 286,
            "argument": {
              "type": "BinaryExpression",
              "start": 242,
              "end": 286,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 242,
                "end": 275,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 242,
                  "end": 269,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 242,
                    "end": 263,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 242,
                      "end": 257,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 242,
                        "end": 251,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 242,
                          "end": 245,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 243,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 245,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 248,
                          "end": 251,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 249,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 250,
                            "end": 251,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 254,
                        "end": 257,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 260,
                      "end": 263,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "decorators": [],
                        "name": "d",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 266,
                    "end": 269,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 272,
                  "end": 275,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 278,
                "end": 286,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 279,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 286,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "types",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 44,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 44,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 23,
              "end": 44,
              "argument": {
                "type": "TSLiteralType",
                "start": 30,
                "end": 37,
                "literal": {
                  "type": "Literal",
                  "start": 30,
                  "end": 37,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "decorators": [],
                "name": "Thing",
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 81,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 81,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 53,
              "end": 81,
              "argument": {
                "type": "TSLiteralType",
                "start": 60,
                "end": 67,
                "literal": {
                  "type": "Literal",
                  "start": 60,
                  "end": 67,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 69,
                "end": 81,
                "decorators": [],
                "name": "AnotherThing",
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 109,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 109,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 90,
              "end": 109,
              "argument": {
                "type": "TSLiteralType",
                "start": 97,
                "end": 104,
                "literal": {
                  "type": "Literal",
                  "start": 97,
                  "end": 104,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 106,
                "end": 109,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 115,
          "end": 137,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 137,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 118,
              "end": 137,
              "argument": {
                "type": "TSLiteralType",
                "start": 125,
                "end": 132,
                "literal": {
                  "type": "Literal",
                  "start": 125,
                  "end": 132,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "qux",
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 143,
          "end": 165,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 165,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 146,
              "end": 165,
              "argument": {
                "type": "TSLiteralType",
                "start": 153,
                "end": 160,
                "literal": {
                  "type": "Literal",
                  "start": 153,
                  "end": 160,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
                "decorators": [],
                "name": "baz",
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 193,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 193,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 174,
              "end": 193,
              "argument": {
                "type": "TSLiteralType",
                "start": 181,
                "end": 188,
                "literal": {
                  "type": "Literal",
                  "start": 181,
                  "end": 188,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 190,
                "end": 193,
                "decorators": [],
                "name": "buz",
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 199,
          "end": 225,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 225,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 202,
              "end": 225,
              "argument": {
                "type": "TSLiteralType",
                "start": 209,
                "end": 216,
                "literal": {
                  "type": "Literal",
                  "start": 209,
                  "end": 216,
                  "raw": "'./mod'",
                  "value": "./mod"
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 218,
                "end": 225,
                "decorators": [],
                "name": "literal",
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 638,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 569,
        "end": 638,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 575,
            "end": 636,
            "argument": {
              "type": "BinaryExpression",
              "start": 582,
              "end": 636,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 582,
                "end": 625,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 582,
                  "end": 619,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 582,
                    "end": 613,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 582,
                      "end": 607,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 582,
                        "end": 601,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 582,
                          "end": 590,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 582,
                            "end": 583,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 584,
                            "end": 590,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 593,
                          "end": 601,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 594,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 595,
                            "end": 601,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 604,
                        "end": 607,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 610,
                      "end": 613,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "d",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 616,
                    "end": 619,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 616,
                      "end": 617,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 622,
                  "end": 625,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 623,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 628,
                "end": 636,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 629,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 636,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 305,
        "decorators": [],
        "name": "values",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 342,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 342,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 314,
              "end": 342,
              "exprName": {
                "type": "TSImportType",
                "start": 321,
                "end": 342,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 328,
                  "end": 335,
                  "literal": {
                    "type": "Literal",
                    "start": 328,
                    "end": 335,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 342,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 348,
          "end": 386,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 386,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 351,
              "end": 386,
              "exprName": {
                "type": "TSImportType",
                "start": 358,
                "end": 386,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 365,
                  "end": 372,
                  "literal": {
                    "type": "Literal",
                    "start": 365,
                    "end": 372,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 386,
                  "decorators": [],
                  "name": "AnotherThing",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 392,
          "end": 421,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 393,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 395,
              "end": 421,
              "exprName": {
                "type": "TSImportType",
                "start": 402,
                "end": 421,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 409,
                  "end": 416,
                  "literal": {
                    "type": "Literal",
                    "start": 409,
                    "end": 416,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 421,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 456,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 456,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 430,
              "end": 456,
              "exprName": {
                "type": "TSImportType",
                "start": 437,
                "end": 456,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 444,
                  "end": 451,
                  "literal": {
                    "type": "Literal",
                    "start": 444,
                    "end": 451,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 456,
                  "decorators": [],
                  "name": "qux",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 462,
          "end": 491,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 463,
            "end": 491,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 465,
              "end": 491,
              "exprName": {
                "type": "TSImportType",
                "start": 472,
                "end": 491,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 479,
                  "end": 486,
                  "literal": {
                    "type": "Literal",
                    "start": 479,
                    "end": 486,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 491,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 497,
          "end": 526,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 498,
            "end": 526,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 500,
              "end": 526,
              "exprName": {
                "type": "TSImportType",
                "start": 507,
                "end": 526,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 514,
                  "end": 521,
                  "literal": {
                    "type": "Literal",
                    "start": 514,
                    "end": 521,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 526,
                  "decorators": [],
                  "name": "buz",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 532,
          "end": 565,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 533,
            "end": 565,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 535,
              "end": 565,
              "exprName": {
                "type": "TSImportType",
                "start": 542,
                "end": 565,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 549,
                  "end": 556,
                  "literal": {
                    "type": "Literal",
                    "start": 549,
                    "end": 556,
                    "raw": "'./mod'",
                    "value": "./mod"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 565,
                  "decorators": [],
                  "name": "literal",
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
