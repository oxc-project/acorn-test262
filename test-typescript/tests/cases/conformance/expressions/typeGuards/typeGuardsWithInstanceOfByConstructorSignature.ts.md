__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3427,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 41,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 29,
            "end": 39,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "AConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 102,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 102,
                  "decorators": [],
                  "name": "AConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 125,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 125,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 115,
                "end": 125,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 116,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 127,
      "end": 199,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 150,
        "end": 199,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 174,
            "end": 183,
            "expression": {
              "type": "MemberExpression",
              "start": 174,
              "end": 182,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 174,
                "end": 178,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 182,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 188,
            "end": 197,
            "expression": {
              "type": "MemberExpression",
              "start": 188,
              "end": 196,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 192,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 193,
                "end": 196,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 131,
        "end": 148,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 131,
          "end": 135,
          "decorators": [],
          "name": "obj1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 214,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 214,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 216,
      "end": 270,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 239,
        "end": 270,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 254,
            "expression": {
              "type": "MemberExpression",
              "start": 245,
              "end": 253,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 249,
                "decorators": [],
                "name": "obj2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 253,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 259,
            "end": 268,
            "expression": {
              "type": "MemberExpression",
              "start": 259,
              "end": 267,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 259,
                "end": 263,
                "decorators": [],
                "name": "obj2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 267,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 220,
        "end": 237,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 220,
          "end": 224,
          "decorators": [],
          "name": "obj2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 311,
      "end": 358,
      "body": {
        "type": "TSInterfaceBody",
        "start": 334,
        "end": 358,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 340,
            "end": 356,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 351,
                "end": 355,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 352,
                  "end": 355,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 353,
                      "end": 354,
                      "typeName": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 354,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 344,
              "end": 347,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 345,
                  "end": 346,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 333,
        "decorators": [],
        "name": "BConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 359,
      "end": 389,
      "body": {
        "type": "TSInterfaceBody",
        "start": 374,
        "end": 389,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 380,
            "end": 387,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 383,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 385,
                "end": 386,
                "typeName": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 386,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 370,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 370,
        "end": 373,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 371,
            "end": 372,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
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
      "start": 390,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 417,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 417,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 405,
                "end": 417,
                "typeName": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 417,
                  "decorators": [],
                  "name": "BConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 448,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 448,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 448,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 430,
                "end": 448,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 430,
                    "end": 439,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 431,
                      "end": 439,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 432,
                          "end": 438
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 431,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 450,
      "end": 564,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 473,
        "end": 564,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 505,
            "end": 518,
            "expression": {
              "type": "AssignmentExpression",
              "start": 505,
              "end": 517,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 505,
                "end": 513,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 509,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 513,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 516,
                "end": 517,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 540,
            "expression": {
              "type": "AssignmentExpression",
              "start": 523,
              "end": 539,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 523,
                "end": 531,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 527,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 531,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 534,
                "end": 539,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 545,
            "end": 562,
            "expression": {
              "type": "AssignmentExpression",
              "start": 545,
              "end": 561,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 545,
                "end": 553,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 549,
                  "decorators": [],
                  "name": "obj3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 553,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 556,
                "end": 561,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 454,
        "end": 471,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 454,
          "end": 458,
          "decorators": [],
          "name": "obj3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 470,
          "end": 471,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 579,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 579,
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 579,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 576,
                "end": 579
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 581,
      "end": 669,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 604,
        "end": 669,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 610,
            "end": 627,
            "expression": {
              "type": "AssignmentExpression",
              "start": 610,
              "end": 626,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 610,
                "end": 618,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 614,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 618,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 621,
                "end": 626,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 632,
            "end": 645,
            "expression": {
              "type": "AssignmentExpression",
              "start": 632,
              "end": 644,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 632,
                "end": 640,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 636,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 640,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 643,
                "end": 644,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 650,
            "end": 667,
            "expression": {
              "type": "AssignmentExpression",
              "start": 650,
              "end": 666,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 650,
                "end": 658,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 654,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 658,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 661,
                "end": 666,
                "raw": "\"str\"",
                "value": "str"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 585,
        "end": 602,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 585,
          "end": 589,
          "decorators": [],
          "name": "obj4",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 601,
          "end": 602,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 707,
      "end": 791,
      "body": {
        "type": "TSInterfaceBody",
        "start": 730,
        "end": 791,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 736,
            "end": 760,
            "params": [
              {
                "type": "Identifier",
                "start": 741,
                "end": 754,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 746,
                  "end": 754,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 748,
                    "end": 754
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 755,
              "end": 759,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 757,
                "end": 759,
                "typeName": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 759,
                  "decorators": [],
                  "name": "C1",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 765,
            "end": 789,
            "params": [
              {
                "type": "Identifier",
                "start": 770,
                "end": 783,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 775,
                  "end": 783,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 777,
                    "end": 783
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 784,
              "end": 788,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 786,
                "end": 788,
                "typeName": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 788,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 729,
        "decorators": [],
        "name": "CConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 792,
      "end": 858,
      "body": {
        "type": "TSInterfaceBody",
        "start": 805,
        "end": 858,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 811,
            "end": 823,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 814,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 814,
              "end": 822,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 816,
                "end": 822
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 828,
            "end": 838,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 829,
              "end": 837,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 831,
                "end": 837
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 843,
            "end": 856,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 843,
              "end": 847,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 847,
              "end": 855,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 849,
                "end": 855
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 804,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 859,
      "end": 925,
      "body": {
        "type": "TSInterfaceBody",
        "start": 872,
        "end": 925,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 878,
            "end": 890,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 878,
              "end": 881,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 881,
              "end": 889,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 883,
                "end": 889
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 895,
            "end": 905,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 895,
              "end": 896,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 896,
              "end": 904,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 898,
                "end": 904
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 910,
            "end": 923,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 910,
              "end": 914,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 914,
              "end": 922,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 916,
                "end": 922
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 869,
        "end": 871,
        "decorators": [],
        "name": "C2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 926,
      "end": 954,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 938,
          "end": 953,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 938,
            "end": 953,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 939,
              "end": 953,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 941,
                "end": 953,
                "typeName": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 953,
                  "decorators": [],
                  "name": "CConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 956,
      "end": 973,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 960,
          "end": 972,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 960,
            "end": 972,
            "decorators": [],
            "name": "obj5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 964,
              "end": 972,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 966,
                "end": 972,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 966,
                    "end": 968,
                    "typeName": {
                      "type": "Identifier",
                      "start": 966,
                      "end": 968,
                      "decorators": [],
                      "name": "C1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 971,
                    "end": 972,
                    "typeName": {
                      "type": "Identifier",
                      "start": 971,
                      "end": 972,
                      "decorators": [],
                      "name": "A",
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 974,
      "end": 1075,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 997,
        "end": 1075,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1022,
            "end": 1031,
            "expression": {
              "type": "MemberExpression",
              "start": 1022,
              "end": 1030,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1022,
                "end": 1026,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1027,
                "end": 1030,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1036,
            "end": 1043,
            "expression": {
              "type": "MemberExpression",
              "start": 1036,
              "end": 1042,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1036,
                "end": 1040,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1041,
                "end": 1042,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1048,
            "end": 1058,
            "expression": {
              "type": "MemberExpression",
              "start": 1048,
              "end": 1057,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1048,
                "end": 1052,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1053,
                "end": 1057,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1063,
            "end": 1073,
            "expression": {
              "type": "MemberExpression",
              "start": 1063,
              "end": 1072,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1063,
                "end": 1067,
                "decorators": [],
                "name": "obj5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1068,
                "end": 1072,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 978,
        "end": 995,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 978,
          "end": 982,
          "decorators": [],
          "name": "obj5",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 994,
          "end": 995,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1077,
      "end": 1091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1081,
          "end": 1090,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1081,
            "end": 1090,
            "decorators": [],
            "name": "obj6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1085,
              "end": 1090,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1087,
                "end": 1090
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1092,
      "end": 1162,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1115,
        "end": 1162,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1121,
            "end": 1130,
            "expression": {
              "type": "MemberExpression",
              "start": 1121,
              "end": 1129,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1121,
                "end": 1125,
                "decorators": [],
                "name": "obj6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1126,
                "end": 1129,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1135,
            "end": 1145,
            "expression": {
              "type": "MemberExpression",
              "start": 1135,
              "end": 1144,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1135,
                "end": 1139,
                "decorators": [],
                "name": "obj6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1140,
                "end": 1144,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1150,
            "end": 1160,
            "expression": {
              "type": "MemberExpression",
              "start": 1150,
              "end": 1159,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1150,
                "end": 1154,
                "decorators": [],
                "name": "obj6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1155,
                "end": 1159,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1096,
        "end": 1113,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1096,
          "end": 1100,
          "decorators": [],
          "name": "obj6",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1112,
          "end": 1113,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1192,
      "end": 1224,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1204,
        "end": 1224,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1210,
            "end": 1222,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1210,
              "end": 1213,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1215,
                "end": 1221
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1202,
        "end": 1203,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1225,
      "end": 1255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1237,
          "end": 1254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1237,
            "end": 1254,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1238,
              "end": 1254,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1240,
                "end": 1254,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1242,
                    "end": 1252,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1248,
                      "end": 1251,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1250,
                        "end": 1251,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1250,
                          "end": 1251,
                          "decorators": [],
                          "name": "D",
                          "optional": false
                        }
                      }
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1257,
      "end": 1278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1261,
          "end": 1277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1261,
            "end": 1277,
            "decorators": [],
            "name": "obj7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1265,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1267,
                "end": 1277,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1267,
                    "end": 1268,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1267,
                      "end": 1268,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1271,
                    "end": 1277
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1279,
      "end": 1351,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1302,
        "end": 1351,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1326,
            "end": 1335,
            "expression": {
              "type": "MemberExpression",
              "start": 1326,
              "end": 1334,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1326,
                "end": 1330,
                "decorators": [],
                "name": "obj7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1331,
                "end": 1334,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1340,
            "end": 1349,
            "expression": {
              "type": "MemberExpression",
              "start": 1340,
              "end": 1348,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1340,
                "end": 1344,
                "decorators": [],
                "name": "obj7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1345,
                "end": 1348,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1283,
        "end": 1300,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1283,
          "end": 1287,
          "decorators": [],
          "name": "obj7",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1299,
          "end": 1300,
          "decorators": [],
          "name": "D",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1353,
      "end": 1367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1366,
            "decorators": [],
            "name": "obj8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1361,
              "end": 1366,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1363,
                "end": 1366
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1368,
      "end": 1422,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1391,
        "end": 1422,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1397,
            "end": 1406,
            "expression": {
              "type": "MemberExpression",
              "start": 1397,
              "end": 1405,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1397,
                "end": 1401,
                "decorators": [],
                "name": "obj8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1402,
                "end": 1405,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1411,
            "end": 1420,
            "expression": {
              "type": "MemberExpression",
              "start": 1411,
              "end": 1419,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1411,
                "end": 1415,
                "decorators": [],
                "name": "obj8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1416,
                "end": 1419,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1372,
        "end": 1389,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1372,
          "end": 1376,
          "decorators": [],
          "name": "obj8",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1388,
          "end": 1389,
          "decorators": [],
          "name": "D",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1475,
      "end": 1522,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1498,
        "end": 1522,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1504,
            "end": 1520,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1510,
              "end": 1519,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1512,
                "end": 1519,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1512,
                    "end": 1514,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1512,
                      "end": 1514,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1517,
                    "end": 1519,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1517,
                      "end": 1519,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1485,
        "end": 1497,
        "decorators": [],
        "name": "EConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1523,
      "end": 1574,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1536,
        "end": 1574,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1542,
            "end": 1554,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1542,
              "end": 1545,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1545,
              "end": 1553,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1547,
                "end": 1553
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1559,
            "end": 1572,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1559,
              "end": 1563,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1563,
              "end": 1571,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1565,
                "end": 1571
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1533,
        "end": 1535,
        "decorators": [],
        "name": "E1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1575,
      "end": 1626,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1588,
        "end": 1626,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1594,
            "end": 1606,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1594,
              "end": 1597,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1597,
              "end": 1605,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1599,
                "end": 1605
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1611,
            "end": 1624,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1611,
              "end": 1615,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1615,
              "end": 1623,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1617,
                "end": 1623
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1585,
        "end": 1587,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1627,
      "end": 1655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1639,
          "end": 1654,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1639,
            "end": 1654,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1640,
              "end": 1654,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1642,
                "end": 1654,
                "typeName": {
                  "type": "Identifier",
                  "start": 1642,
                  "end": 1654,
                  "decorators": [],
                  "name": "EConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1657,
      "end": 1674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1661,
          "end": 1673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1661,
            "end": 1673,
            "decorators": [],
            "name": "obj9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1665,
              "end": 1673,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1667,
                "end": 1673,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1667,
                    "end": 1669,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1667,
                      "end": 1669,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1672,
                    "end": 1673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1672,
                      "end": 1673,
                      "decorators": [],
                      "name": "A",
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1675,
      "end": 1763,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1698,
        "end": 1763,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1722,
            "end": 1731,
            "expression": {
              "type": "MemberExpression",
              "start": 1722,
              "end": 1730,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1722,
                "end": 1726,
                "decorators": [],
                "name": "obj9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1727,
                "end": 1730,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1736,
            "end": 1746,
            "expression": {
              "type": "MemberExpression",
              "start": 1736,
              "end": 1745,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1736,
                "end": 1740,
                "decorators": [],
                "name": "obj9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1741,
                "end": 1745,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1751,
            "end": 1761,
            "expression": {
              "type": "MemberExpression",
              "start": 1751,
              "end": 1760,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1751,
                "end": 1755,
                "decorators": [],
                "name": "obj9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1756,
                "end": 1760,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1679,
        "end": 1696,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1679,
          "end": 1683,
          "decorators": [],
          "name": "obj9",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1695,
          "end": 1696,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1765,
      "end": 1780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1769,
          "end": 1779,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1769,
            "end": 1779,
            "decorators": [],
            "name": "obj10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1774,
              "end": 1779,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1776,
                "end": 1779
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1781,
      "end": 1855,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1805,
        "end": 1855,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1811,
            "end": 1821,
            "expression": {
              "type": "MemberExpression",
              "start": 1811,
              "end": 1820,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1811,
                "end": 1816,
                "decorators": [],
                "name": "obj10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1817,
                "end": 1820,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1826,
            "end": 1837,
            "expression": {
              "type": "MemberExpression",
              "start": 1826,
              "end": 1836,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1826,
                "end": 1831,
                "decorators": [],
                "name": "obj10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1832,
                "end": 1836,
                "decorators": [],
                "name": "bar1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1842,
            "end": 1853,
            "expression": {
              "type": "MemberExpression",
              "start": 1842,
              "end": 1852,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1842,
                "end": 1847,
                "decorators": [],
                "name": "obj10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1848,
                "end": 1852,
                "decorators": [],
                "name": "bar2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1785,
        "end": 1803,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 1785,
          "end": 1790,
          "decorators": [],
          "name": "obj10",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1802,
          "end": 1803,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1899,
      "end": 1942,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1922,
        "end": 1942,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1928,
            "end": 1940,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1934,
              "end": 1939,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1936,
                "end": 1939
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1909,
        "end": 1921,
        "decorators": [],
        "name": "FConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1943,
      "end": 1992,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1955,
        "end": 1992,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1961,
            "end": 1973,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1964,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1964,
              "end": 1972,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1966,
                "end": 1972
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1978,
            "end": 1990,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1978,
              "end": 1981,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1981,
              "end": 1989,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1983,
                "end": 1989
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1953,
        "end": 1954,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1993,
      "end": 2021,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2005,
          "end": 2020,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2005,
            "end": 2020,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2006,
              "end": 2020,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2008,
                "end": 2020,
                "typeName": {
                  "type": "Identifier",
                  "start": 2008,
                  "end": 2020,
                  "decorators": [],
                  "name": "FConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2023,
      "end": 2045,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2027,
          "end": 2044,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2027,
            "end": 2044,
            "decorators": [],
            "name": "obj11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2032,
              "end": 2044,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2034,
                "end": 2044,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2034,
                    "end": 2035,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2034,
                      "end": 2035,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2038,
                    "end": 2044
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 2046,
      "end": 2161,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2070,
        "end": 2161,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2134,
            "end": 2144,
            "expression": {
              "type": "MemberExpression",
              "start": 2134,
              "end": 2143,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2134,
                "end": 2139,
                "decorators": [],
                "name": "obj11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2140,
                "end": 2143,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2149,
            "end": 2159,
            "expression": {
              "type": "MemberExpression",
              "start": 2149,
              "end": 2158,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2149,
                "end": 2154,
                "decorators": [],
                "name": "obj11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2155,
                "end": 2158,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2050,
        "end": 2068,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2050,
          "end": 2055,
          "decorators": [],
          "name": "obj11",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2067,
          "end": 2068,
          "decorators": [],
          "name": "F",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2163,
      "end": 2178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2167,
          "end": 2177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2167,
            "end": 2177,
            "decorators": [],
            "name": "obj12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2172,
              "end": 2177,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2174,
                "end": 2177
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 2179,
      "end": 2236,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2203,
        "end": 2236,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2209,
            "end": 2219,
            "expression": {
              "type": "MemberExpression",
              "start": 2209,
              "end": 2218,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2209,
                "end": 2214,
                "decorators": [],
                "name": "obj12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2215,
                "end": 2218,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2224,
            "end": 2234,
            "expression": {
              "type": "MemberExpression",
              "start": 2224,
              "end": 2233,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2224,
                "end": 2229,
                "decorators": [],
                "name": "obj12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2230,
                "end": 2233,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2183,
        "end": 2201,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2183,
          "end": 2188,
          "decorators": [],
          "name": "obj12",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2200,
          "end": 2201,
          "decorators": [],
          "name": "F",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2303,
      "end": 2400,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2326,
        "end": 2400,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2332,
            "end": 2346,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2332,
              "end": 2341,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2341,
              "end": 2345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2343,
                "end": 2345,
                "typeName": {
                  "type": "Identifier",
                  "start": 2343,
                  "end": 2345,
                  "decorators": [],
                  "name": "G1",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2368,
            "end": 2379,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2374,
              "end": 2378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2376,
                "end": 2378,
                "typeName": {
                  "type": "Identifier",
                  "start": 2376,
                  "end": 2378,
                  "decorators": [],
                  "name": "G2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2313,
        "end": 2325,
        "decorators": [],
        "name": "GConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2401,
      "end": 2435,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2414,
        "end": 2435,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2420,
            "end": 2433,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2420,
              "end": 2424,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2424,
              "end": 2432,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2426,
                "end": 2432
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2411,
        "end": 2413,
        "decorators": [],
        "name": "G1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2436,
      "end": 2471,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2449,
        "end": 2471,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2455,
            "end": 2469,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2455,
              "end": 2459,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2459,
              "end": 2468,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2461,
                "end": 2468
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2446,
        "end": 2448,
        "decorators": [],
        "name": "G2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2472,
      "end": 2500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2484,
          "end": 2499,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2484,
            "end": 2499,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2485,
              "end": 2499,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2487,
                "end": 2499,
                "typeName": {
                  "type": "Identifier",
                  "start": 2487,
                  "end": 2499,
                  "decorators": [],
                  "name": "GConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2502,
      "end": 2521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2506,
          "end": 2520,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2506,
            "end": 2520,
            "decorators": [],
            "name": "obj13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2511,
              "end": 2520,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2513,
                "end": 2520,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2513,
                    "end": 2515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2513,
                      "end": 2515,
                      "decorators": [],
                      "name": "G1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2518,
                    "end": 2520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2518,
                      "end": 2520,
                      "decorators": [],
                      "name": "G2",
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 2522,
      "end": 2641,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2546,
        "end": 2641,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2612,
            "end": 2623,
            "expression": {
              "type": "MemberExpression",
              "start": 2612,
              "end": 2622,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2612,
                "end": 2617,
                "decorators": [],
                "name": "obj13",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2618,
                "end": 2622,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2628,
            "end": 2639,
            "expression": {
              "type": "MemberExpression",
              "start": 2628,
              "end": 2638,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2628,
                "end": 2633,
                "decorators": [],
                "name": "obj13",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2634,
                "end": 2638,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2526,
        "end": 2544,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2526,
          "end": 2531,
          "decorators": [],
          "name": "obj13",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2543,
          "end": 2544,
          "decorators": [],
          "name": "G",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2643,
      "end": 2658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2647,
          "end": 2657,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2647,
            "end": 2657,
            "decorators": [],
            "name": "obj14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2652,
              "end": 2657,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2654,
                "end": 2657
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 2659,
      "end": 2718,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2683,
        "end": 2718,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2689,
            "end": 2700,
            "expression": {
              "type": "MemberExpression",
              "start": 2689,
              "end": 2699,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2689,
                "end": 2694,
                "decorators": [],
                "name": "obj14",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2695,
                "end": 2699,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2705,
            "end": 2716,
            "expression": {
              "type": "MemberExpression",
              "start": 2705,
              "end": 2715,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2705,
                "end": 2710,
                "decorators": [],
                "name": "obj14",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2711,
                "end": 2715,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2663,
        "end": 2681,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 2663,
          "end": 2668,
          "decorators": [],
          "name": "obj14",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2680,
          "end": 2681,
          "decorators": [],
          "name": "G",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2765,
      "end": 2931,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2788,
        "end": 2931,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2794,
            "end": 2809,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2794,
              "end": 2803,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2803,
              "end": 2808,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2805,
                "end": 2808
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2898,
            "end": 2908,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2904,
              "end": 2907,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2906,
                "end": 2907,
                "typeName": {
                  "type": "Identifier",
                  "start": 2906,
                  "end": 2907,
                  "decorators": [],
                  "name": "H",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2775,
        "end": 2787,
        "decorators": [],
        "name": "HConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2932,
      "end": 2964,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2944,
        "end": 2964,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2950,
            "end": 2962,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2950,
              "end": 2953,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2953,
              "end": 2961,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2955,
                "end": 2961
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2942,
        "end": 2943,
        "decorators": [],
        "name": "H",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2965,
      "end": 2993,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2977,
          "end": 2992,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2977,
            "end": 2992,
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2978,
              "end": 2992,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2980,
                "end": 2992,
                "typeName": {
                  "type": "Identifier",
                  "start": 2980,
                  "end": 2992,
                  "decorators": [],
                  "name": "HConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2995,
      "end": 3017,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2999,
          "end": 3016,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2999,
            "end": 3016,
            "decorators": [],
            "name": "obj15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3004,
              "end": 3016,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3006,
                "end": 3016,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 3006,
                    "end": 3007,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3006,
                      "end": 3007,
                      "decorators": [],
                      "name": "H",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3010,
                    "end": 3016
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 3018,
      "end": 3093,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3042,
        "end": 3093,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3066,
            "end": 3076,
            "expression": {
              "type": "MemberExpression",
              "start": 3066,
              "end": 3075,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3066,
                "end": 3071,
                "decorators": [],
                "name": "obj15",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3072,
                "end": 3075,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3081,
            "end": 3091,
            "expression": {
              "type": "MemberExpression",
              "start": 3081,
              "end": 3090,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3081,
                "end": 3086,
                "decorators": [],
                "name": "obj15",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3087,
                "end": 3090,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3022,
        "end": 3040,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3022,
          "end": 3027,
          "decorators": [],
          "name": "obj15",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3039,
          "end": 3040,
          "decorators": [],
          "name": "H",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3095,
      "end": 3110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3099,
          "end": 3109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3099,
            "end": 3109,
            "decorators": [],
            "name": "obj16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3104,
              "end": 3109,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3106,
                "end": 3109
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 3111,
      "end": 3170,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3135,
        "end": 3170,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3141,
            "end": 3152,
            "expression": {
              "type": "MemberExpression",
              "start": 3141,
              "end": 3151,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3141,
                "end": 3146,
                "decorators": [],
                "name": "obj16",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3147,
                "end": 3151,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3157,
            "end": 3168,
            "expression": {
              "type": "MemberExpression",
              "start": 3157,
              "end": 3167,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3157,
                "end": 3162,
                "decorators": [],
                "name": "obj16",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3163,
                "end": 3167,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3115,
        "end": 3133,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3115,
          "end": 3120,
          "decorators": [],
          "name": "obj16",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3132,
          "end": 3133,
          "decorators": [],
          "name": "H",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3172,
      "end": 3187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3176,
          "end": 3186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3176,
            "end": 3186,
            "decorators": [],
            "name": "obj17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3181,
              "end": 3186,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3183,
                "end": 3186
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 3188,
      "end": 3296,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3217,
        "end": 3296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3267,
            "end": 3278,
            "expression": {
              "type": "MemberExpression",
              "start": 3267,
              "end": 3277,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3267,
                "end": 3272,
                "decorators": [],
                "name": "obj17",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3273,
                "end": 3277,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3283,
            "end": 3294,
            "expression": {
              "type": "MemberExpression",
              "start": 3283,
              "end": 3293,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3283,
                "end": 3288,
                "decorators": [],
                "name": "obj17",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3289,
                "end": 3293,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3192,
        "end": 3215,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3192,
          "end": 3197,
          "decorators": [],
          "name": "obj17",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3209,
          "end": 3215,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3298,
      "end": 3313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3302,
          "end": 3312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3302,
            "end": 3312,
            "decorators": [],
            "name": "obj18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3307,
              "end": 3312,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3309,
                "end": 3312
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 3314,
      "end": 3426,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3345,
        "end": 3426,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3397,
            "end": 3408,
            "expression": {
              "type": "MemberExpression",
              "start": 3397,
              "end": 3407,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3397,
                "end": 3402,
                "decorators": [],
                "name": "obj18",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3403,
                "end": 3407,
                "decorators": [],
                "name": "foo1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3413,
            "end": 3424,
            "expression": {
              "type": "MemberExpression",
              "start": 3413,
              "end": 3423,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3413,
                "end": 3418,
                "decorators": [],
                "name": "obj18",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3419,
                "end": 3423,
                "decorators": [],
                "name": "foo2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3318,
        "end": 3343,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 3318,
          "end": 3323,
          "decorators": [],
          "name": "obj18",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3335,
          "end": 3343,
          "decorators": [],
          "name": "Function",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
