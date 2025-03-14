typeParameterConstModifiersReverseMappedTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 805,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 83,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 64,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 64,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 37,
              "end": 64,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 47,
                "end": 54,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 53,
                  "end": 54,
                  "typeName": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 57,
                "end": 61,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 59,
                  "end": 60,
                  "typeName": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 57,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 65,
        "end": 82,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 67,
          "end": 82,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeQuery",
              "start": 71,
              "end": 81,
              "exprName": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "obj",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 30,
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 98,
            "decorators": [],
            "name": "result1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 101,
            "end": 166,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 107,
                "end": 165,
                "properties": [
                  {
                    "type": "Property",
                    "start": 111,
                    "end": 122,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 115,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 117,
                      "end": 122,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 126,
                    "end": 162,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 132,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 134,
                      "end": 162,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 140,
                          "end": 157,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 150,
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 152,
                            "end": 157,
                            "raw": "\"bar\"",
                            "value": "bar"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "decorators": [],
              "name": "test1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 169,
      "end": 261,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 191,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 201,
          "end": 242,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 242,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 206,
              "end": 242,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 225,
                "end": 232,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 231,
                  "end": 232,
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "readonly": true,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 235,
                "end": 239,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 237,
                  "end": 238,
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 236,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 243,
        "end": 260,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 245,
          "end": 260,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 246,
              "end": 247,
              "typeName": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeQuery",
              "start": 249,
              "end": 259,
              "exprName": {
                "type": "Identifier",
                "start": 256,
                "end": 259,
                "decorators": [],
                "name": "obj",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 191,
        "end": 200,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 199,
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 276,
            "decorators": [],
            "name": "result2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 344,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 285,
                "end": 343,
                "properties": [
                  {
                    "type": "Property",
                    "start": 289,
                    "end": 300,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 293,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 295,
                      "end": 300,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 304,
                    "end": 340,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 310,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 312,
                      "end": 340,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 318,
                          "end": 335,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 328,
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 330,
                            "end": 335,
                            "raw": "\"bar\"",
                            "value": "bar"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 279,
              "end": 284,
              "decorators": [],
              "name": "test2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 347,
      "end": 440,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 369,
        "decorators": [],
        "name": "test3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 379,
          "end": 421,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 382,
            "end": 421,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 384,
              "end": 421,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 404,
                "end": 411,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 411,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "readonly": "-",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 414,
                "end": 418,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 417,
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 414,
                  "end": 415,
                  "typeName": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 422,
        "end": 439,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 424,
          "end": 439,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 425,
              "end": 426,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeQuery",
              "start": 428,
              "end": 438,
              "exprName": {
                "type": "Identifier",
                "start": 435,
                "end": 438,
                "decorators": [],
                "name": "obj",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 369,
        "end": 378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 370,
            "end": 377,
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 523,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 455,
            "decorators": [],
            "name": "result3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 458,
            "end": 523,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 464,
                "end": 522,
                "properties": [
                  {
                    "type": "Property",
                    "start": 468,
                    "end": 479,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 472,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 474,
                      "end": 479,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 483,
                    "end": 519,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 483,
                      "end": 489,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 491,
                      "end": 519,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 497,
                          "end": 514,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 497,
                            "end": 507,
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 509,
                            "end": 514,
                            "raw": "\"bar\"",
                            "value": "bar"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 458,
              "end": 463,
              "decorators": [],
              "name": "test3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 526,
      "end": 622,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 543,
        "end": 548,
        "decorators": [],
        "name": "test4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 585,
          "end": 617,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 588,
            "end": 617,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 590,
              "end": 617,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 600,
                "end": 607,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 606,
                  "end": 607,
                  "typeName": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 607,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 595,
                "end": 596,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 610,
                "end": 614,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 612,
                  "end": 613,
                  "typeName": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 613,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 610,
                  "end": 611,
                  "typeName": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 618,
        "end": 621,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 620,
          "end": 621,
          "typeName": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 548,
        "end": 584,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 549,
            "end": 583,
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 565,
              "end": 583,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 574,
                "end": 583,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 574,
                  "end": 581
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 555,
              "end": 556,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 655,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 637,
            "decorators": [],
            "name": "result4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 640,
            "end": 655,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 646,
                "end": 654,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 647,
                    "end": 650,
                    "raw": "\"1\"",
                    "value": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 652,
                    "end": 653,
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 640,
              "end": 645,
              "decorators": [],
              "name": "test4",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 658,
      "end": 766,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 680,
        "decorators": [],
        "name": "test5",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 720,
          "end": 760,
          "argument": {
            "type": "Identifier",
            "start": 723,
            "end": 727,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 727,
            "end": 760,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 729,
              "end": 760,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 741,
                "end": 748,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 747,
                  "end": 748,
                  "typeName": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 748,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 751,
                "end": 755,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 753,
                  "end": 754,
                  "typeName": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 754,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 751,
                  "end": 752,
                  "typeName": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 752,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 762,
        "end": 765,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 764,
          "end": 765,
          "typeName": {
            "type": "Identifier",
            "start": 764,
            "end": 765,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 680,
        "end": 716,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 681,
            "end": 715,
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 697,
              "end": 715,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 706,
                "end": 715,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 706,
                  "end": 713
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 687,
              "end": 688,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 803,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 781,
            "decorators": [],
            "name": "result5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 784,
            "end": 803,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 790,
                "end": 802,
                "properties": [
                  {
                    "type": "Property",
                    "start": 792,
                    "end": 800,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 792,
                      "end": 793,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 795,
                      "end": 800,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 784,
              "end": 789,
              "decorators": [],
              "name": "test5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
