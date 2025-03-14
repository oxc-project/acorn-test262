divergentAccessorsTypes3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 762,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 252,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 43,
                      "end": 45,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 84,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 79,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 64,
                      "end": 79,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 64,
                          "end": 70
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 73,
                          "end": 79
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 122,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 122,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 110,
                    "end": 120,
                    "argument": {
                      "type": "Literal",
                      "start": 117,
                      "end": 119,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 99,
                "end": 107,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 101,
                  "end": 107
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 158,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 134,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 158,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 135,
                  "end": 153,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 138,
                      "end": 153,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 138,
                          "end": 144
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 147,
                          "end": 153
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 176,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 167,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 175,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 169,
                "end": 175
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 214,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 189,
              "end": 214,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 214,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 212,
                    "argument": {
                      "type": "Literal",
                      "start": 209,
                      "end": 211,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 193,
                  "end": 199
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 250,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 226,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 250,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 245,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 230,
                      "end": 245,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 230,
                          "end": 236
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 239,
                          "end": 245
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "One",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 555,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 555,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 302,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 277,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 277,
              "end": 302,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 302,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 300,
                    "argument": {
                      "type": "Literal",
                      "start": 297,
                      "end": 299,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 279,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 305,
            "end": 338,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 314,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 314,
              "end": 338,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 338,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 315,
                  "end": 333,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 316,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 318,
                      "end": 333,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 318,
                          "end": 324
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 327,
                          "end": 333
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 342,
            "end": 376,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 351,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 376,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 362,
                "end": 376,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 364,
                    "end": 374,
                    "argument": {
                      "type": "Literal",
                      "start": 371,
                      "end": 373,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 353,
                "end": 361,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 355,
                  "end": 361
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 379,
            "end": 403,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 388,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 403,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 403,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 389,
                  "end": 398,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 390,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 392,
                      "end": 398
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 407,
            "end": 441,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 416,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 416,
              "end": 441,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 427,
                "end": 441,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 429,
                    "end": 439,
                    "argument": {
                      "type": "Literal",
                      "start": 436,
                      "end": 438,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 418,
                "end": 426,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 420,
                  "end": 426
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 478,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 453,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 478,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 475,
                "end": 478,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 454,
                  "end": 473,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 455,
                    "end": 473,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 457,
                      "end": 473,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 457,
                          "end": 463
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 466,
                          "end": 473
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 482,
            "end": 516,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 486,
              "end": 491,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 516,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 502,
                "end": 516,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 504,
                    "end": 514,
                    "argument": {
                      "type": "Literal",
                      "start": 511,
                      "end": 513,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 493,
                "end": 501,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 495,
                  "end": 501
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 519,
            "end": 553,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 523,
              "end": 528,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 528,
              "end": 553,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 550,
                "end": 553,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 529,
                  "end": 548,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 548,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 532,
                      "end": 548,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 532,
                          "end": 538
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 541,
                          "end": 548
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 263,
        "decorators": [],
        "name": "Two",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 557,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 582,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 582,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 573,
              "end": 582,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 575,
                "end": 582,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 575,
                    "end": 578,
                    "typeName": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 578,
                      "decorators": [],
                      "name": "One",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 579,
                    "end": 582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 579,
                      "end": 582,
                      "decorators": [],
                      "name": "Two",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 599,
      "expression": {
        "type": "AssignmentExpression",
        "start": 585,
        "end": 598,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 585,
          "end": 593,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 585,
            "end": 587,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 588,
            "end": 593,
            "decorators": [],
            "name": "prop1",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 596,
          "end": 598,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 600,
      "end": 619,
      "expression": {
        "type": "AssignmentExpression",
        "start": 600,
        "end": 618,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 600,
          "end": 608,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 600,
            "end": 602,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 603,
            "end": 608,
            "decorators": [],
            "name": "prop1",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 611,
          "end": 618,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 621,
      "end": 635,
      "expression": {
        "type": "AssignmentExpression",
        "start": 621,
        "end": 634,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 621,
          "end": 629,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 624,
            "end": 629,
            "decorators": [],
            "name": "prop2",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 632,
          "end": 634,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 636,
      "end": 655,
      "expression": {
        "type": "AssignmentExpression",
        "start": 636,
        "end": 654,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 636,
          "end": 644,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 636,
            "end": 638,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 639,
            "end": 644,
            "decorators": [],
            "name": "prop2",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 647,
          "end": 654,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 657,
      "end": 671,
      "expression": {
        "type": "AssignmentExpression",
        "start": 657,
        "end": 670,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 657,
          "end": 665,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 657,
            "end": 659,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 660,
            "end": 665,
            "decorators": [],
            "name": "prop3",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 668,
          "end": 670,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 672,
      "end": 691,
      "expression": {
        "type": "AssignmentExpression",
        "start": 672,
        "end": 690,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 672,
          "end": 680,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 672,
            "end": 674,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 675,
            "end": 680,
            "decorators": [],
            "name": "prop3",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 683,
          "end": 690,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 692,
      "end": 708,
      "expression": {
        "type": "AssignmentExpression",
        "start": 692,
        "end": 707,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 692,
          "end": 700,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 692,
            "end": 694,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 695,
            "end": 700,
            "decorators": [],
            "name": "prop3",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 703,
          "end": 707,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 710,
      "end": 724,
      "expression": {
        "type": "AssignmentExpression",
        "start": 710,
        "end": 723,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 710,
          "end": 718,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 710,
            "end": 712,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 713,
            "end": 718,
            "decorators": [],
            "name": "prop4",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 721,
          "end": 723,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 744,
      "expression": {
        "type": "AssignmentExpression",
        "start": 725,
        "end": 743,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 725,
          "end": 733,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 725,
            "end": 727,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 728,
            "end": 733,
            "decorators": [],
            "name": "prop4",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 736,
          "end": 743,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 745,
      "end": 761,
      "expression": {
        "type": "AssignmentExpression",
        "start": 745,
        "end": 760,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 745,
          "end": 753,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 745,
            "end": 747,
            "decorators": [],
            "name": "u1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 748,
            "end": 753,
            "decorators": [],
            "name": "prop4",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 756,
          "end": 760,
          "raw": "true",
          "value": true
        }
      }
    }
  ],
  "sourceType": "script"
}
```
