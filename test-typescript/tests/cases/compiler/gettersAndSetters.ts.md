__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 1058,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 398,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 398,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 45,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "fooBack",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 42,
              "end": 44,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 77,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "barBack",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              }
            },
            "value": {
              "type": "Literal",
              "start": 74,
              "end": 76,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 102,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 96,
              "decorators": [],
              "name": "bazBack",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 99,
              "end": 101,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 152,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 131,
                    "end": 151,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 138,
                      "end": 150,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 138,
                        "end": 142
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 150,
                        "decorators": [],
                        "name": "fooBack",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 211,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 211,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 211,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 191,
                      "end": 209,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 191,
                        "end": 203,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 191,
                          "end": 195
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 203,
                          "decorators": [],
                          "name": "fooBack",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 209,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 188,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 188,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 182,
                      "end": 188
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 259,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 237,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 259,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 259,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 241,
                    "end": 258,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 257,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 257,
                        "decorators": [],
                        "name": "barBack",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 315,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 284,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 284,
              "end": 315,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 315,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 298,
                    "end": 314,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 298,
                      "end": 313,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 298,
                        "end": 307,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 299,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 307,
                          "decorators": [],
                          "name": "barBack",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 313,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 295,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 288,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 289,
                      "end": 295
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 353,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "decorators": [],
              "name": "get",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 340,
              "end": 353,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 353,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 364,
            "end": 390,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 374,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 390,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 388,
                "end": 390,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 400,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 415,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 408,
            "end": 415,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 428,
            "end": 433,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 430,
              "end": 433,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 435,
      "end": 450,
      "expression": {
        "type": "AssignmentExpression",
        "start": 435,
        "end": 449,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 435,
          "end": 440,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 437,
            "end": 440,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 443,
          "end": 449,
          "raw": "\"foov\"",
          "value": "foov"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 459,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 462,
            "end": 467,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 464,
              "end": 467,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 484,
      "expression": {
        "type": "AssignmentExpression",
        "start": 469,
        "end": 483,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 469,
          "end": 474,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 477,
          "end": 483,
          "raw": "\"barv\"",
          "value": "barv"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 501,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 493,
            "decorators": [],
            "name": "baz",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 496,
            "end": 501,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 498,
              "end": 501,
              "decorators": [],
              "name": "Baz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 503,
      "end": 518,
      "expression": {
        "type": "AssignmentExpression",
        "start": 503,
        "end": 517,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 503,
          "end": 508,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 508,
            "decorators": [],
            "name": "Baz",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 511,
          "end": 517,
          "raw": "\"bazv\"",
          "value": "bazv"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 611,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 684,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 632,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 632,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 619,
                "end": 632,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 620,
                    "end": 631,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 623,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 623,
                      "end": 630,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 624,
                        "end": 630
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 635,
            "end": 684,
            "properties": [
              {
                "type": "Property",
                "start": 636,
                "end": 657,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 643,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 643,
                  "end": 657,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 646,
                    "end": 657,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 647,
                        "end": 656,
                        "argument": {
                          "type": "Literal",
                          "start": 654,
                          "end": 655,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 659,
                "end": 683,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 666,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 666,
                  "end": 683,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 678,
                    "end": 683,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 679,
                        "end": 682,
                        "expression": {
                          "type": "Identifier",
                          "start": 679,
                          "end": 682,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 667,
                      "end": 677,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 670,
                        "end": 677,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 671,
                          "end": 677
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 708,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 707,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 699,
            "decorators": [],
            "name": "ofg",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 702,
            "end": 707,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 702,
              "end": 703,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 704,
              "end": 707,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 719,
      "expression": {
        "type": "AssignmentExpression",
        "start": 709,
        "end": 718,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 709,
          "end": 714,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 710,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 711,
            "end": 714,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 717,
          "end": 718,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 722,
      "end": 761,
      "body": {
        "type": "TSInterfaceBody",
        "start": 735,
        "end": 761,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 741,
            "end": 759,
            "params": [
              {
                "type": "Identifier",
                "start": 742,
                "end": 750,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 743,
                  "end": 750,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 744,
                    "end": 750
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 758,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 752,
                "end": 758
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 734,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 763,
      "end": 798,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 798,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 771,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 768,
              "end": 771,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 769,
                "end": 771,
                "typeName": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 771,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 774,
            "end": 798,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 787,
              "end": 798,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 788,
                  "end": 797,
                  "argument": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 796,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 882,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 881,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 845,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 828,
              "end": 845,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 830,
                "end": 845,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 830,
                    "end": 836
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 839,
                    "end": 845
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 848,
            "end": 881,
            "alternate": {
              "type": "Literal",
              "start": 878,
              "end": 881,
              "raw": "123",
              "value": 123
            },
            "consequent": {
              "type": "Literal",
              "start": 870,
              "end": 875,
              "raw": "\"str\"",
              "value": "str"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 848,
              "end": 867,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 848,
                "end": 861,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 848,
                  "end": 859,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 848,
                    "end": 852,
                    "decorators": [],
                    "name": "Math",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 853,
                    "end": 859,
                    "decorators": [],
                    "name": "random",
                    "optional": false
                  }
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 864,
                "end": 867,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 883,
      "end": 1057,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 910,
        "end": 1057,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 914,
            "end": 1055,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 918,
                "end": 1055,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 921,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 924,
                  "end": 1055,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 930,
                      "end": 967,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 934,
                        "end": 938,
                        "decorators": [],
                        "name": "prop",
                        "optional": false
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 938,
                        "end": 967,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 947,
                          "end": 967,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 949,
                              "end": 965,
                              "expression": {
                                "type": "CallExpression",
                                "start": 949,
                                "end": 964,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 949,
                                  "end": 962,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 949,
                                    "end": 950,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 951,
                                    "end": 962,
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 939,
                            "end": 945,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 940,
                              "end": 945,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 942,
                                "end": 945
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 973,
                      "end": 1010,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 977,
                        "end": 981,
                        "decorators": [],
                        "name": "prop",
                        "optional": false
                      },
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 981,
                        "end": 1010,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 984,
                          "end": 1010,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 986,
                              "end": 1008,
                              "argument": {
                                "type": "CallExpression",
                                "start": 993,
                                "end": 1008,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 993,
                                  "end": 1006,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 993,
                                    "end": 994,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 995,
                                    "end": 1006,
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1016,
                      "end": 1051,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1016,
                        "end": 1022,
                        "decorators": [],
                        "name": "method",
                        "optional": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 1022,
                        "end": 1051,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1025,
                          "end": 1051,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1027,
                              "end": 1049,
                              "argument": {
                                "type": "CallExpression",
                                "start": 1034,
                                "end": 1049,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1034,
                                  "end": 1047,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1034,
                                    "end": 1035,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1036,
                                    "end": 1047,
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 887,
        "end": 908,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 887,
          "end": 895,
          "argument": {
            "type": "Identifier",
            "start": 894,
            "end": 895,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 900,
          "end": 908,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
