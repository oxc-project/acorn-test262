withExportDecl.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1126,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "simpleVar",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 15,
      "end": 44,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 22,
        "end": 44,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 26,
            "end": 43,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 43,
              "decorators": [],
              "name": "exportedSimpleVar",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 65,
            "decorators": [],
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 65,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 62,
                "end": 65
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
      "type": "VariableDeclaration",
      "start": 67,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 96,
            "decorators": [],
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
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
      "type": "VariableDeclaration",
      "start": 98,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 128,
            "decorators": [],
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 128,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 120,
                "end": 128,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 120,
                  "end": 126
                }
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
      "type": "VariableDeclaration",
      "start": 131,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 154,
            "decorators": [],
            "name": "varWithInitialValue",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 157,
            "end": 159,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 205,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 205,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 172,
            "end": 204,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 199,
              "decorators": [],
              "name": "exportedVarWithInitialValue",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 202,
              "end": 204,
              "raw": "70",
              "value": 70
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 231,
            "decorators": [],
            "name": "withComplicatedValue",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 234,
            "end": 268,
            "properties": [
              {
                "type": "Property",
                "start": 236,
                "end": 241,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 239,
                  "end": 241,
                  "raw": "30",
                  "value": 30
                }
              },
              {
                "type": "Property",
                "start": 243,
                "end": 248,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 246,
                  "end": 248,
                  "raw": "70",
                  "value": 70
                }
              },
              {
                "type": "Property",
                "start": 250,
                "end": 266,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 254,
                  "decorators": [],
                  "name": "desc",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 256,
                  "end": 266,
                  "raw": "\"position\"",
                  "value": "position"
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
      "type": "ExportNamedDeclaration",
      "start": 270,
      "end": 347,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 277,
        "end": 347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 281,
            "end": 346,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 309,
              "decorators": [],
              "name": "exportedWithComplicatedValue",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 312,
              "end": 346,
              "properties": [
                {
                  "type": "Property",
                  "start": 314,
                  "end": 319,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 317,
                    "end": 319,
                    "raw": "30",
                    "value": 30
                  }
                },
                {
                  "type": "Property",
                  "start": 321,
                  "end": 326,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 324,
                    "end": 326,
                    "raw": "70",
                    "value": 70
                  }
                },
                {
                  "type": "Property",
                  "start": 328,
                  "end": 344,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 332,
                    "decorators": [],
                    "name": "desc",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 334,
                    "end": 344,
                    "raw": "\"position\"",
                    "value": "position"
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 372,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 372,
            "decorators": [],
            "name": "declaredVar",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 397,
            "decorators": [],
            "name": "declareVar2",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 422,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 422,
            "decorators": [],
            "name": "declaredVar",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 424,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 462,
            "decorators": [],
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 462,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 456,
                "end": 462
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
      "type": "ExportNamedDeclaration",
      "start": 464,
      "end": 511,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 471,
        "end": 511,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 483,
            "end": 510,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 483,
              "end": 510,
              "decorators": [],
              "name": "exportedDeclaredVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 502,
                "end": 510,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 504,
                  "end": 510
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "var"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 548,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 535,
            "decorators": [],
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 535,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 527,
                "end": 535,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 527,
                  "end": 533
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 538,
            "end": 548,
            "elements": [
              {
                "type": "Literal",
                "start": 539,
                "end": 542,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 544,
                "end": 547,
                "raw": "'b'",
                "value": "b"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 551,
      "end": 609,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 558,
        "end": 609,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 607,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 562,
              "end": 607,
              "decorators": [],
              "name": "exportedArrayVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 578,
                "end": 607,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 580,
                  "end": 607,
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "start": 580,
                    "end": 605,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 582,
                        "end": 592,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 583,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 583,
                          "end": 591,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 585,
                            "end": 591
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 593,
                        "end": 603,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 594,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 594,
                          "end": 602,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 596,
                            "end": 602
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 662,
      "expression": {
        "type": "CallExpression",
        "start": 610,
        "end": 661,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 632,
            "end": 660,
            "properties": [
              {
                "type": "Property",
                "start": 634,
                "end": 639,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 637,
                  "end": 639,
                  "raw": "30",
                  "value": 30
                }
              },
              {
                "type": "Property",
                "start": 641,
                "end": 658,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 645,
                  "end": 658,
                  "raw": "'hello world'",
                  "value": "hello world"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 610,
          "end": 631,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 610,
            "end": 626,
            "decorators": [],
            "name": "exportedArrayVar",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 627,
            "end": 631,
            "decorators": [],
            "name": "push",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 664,
      "end": 765,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 690,
        "end": 765,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 696,
            "end": 763,
            "argument": {
              "type": "ObjectExpression",
              "start": 703,
              "end": 762,
              "properties": [
                {
                  "type": "Property",
                  "start": 713,
                  "end": 723,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 716,
                    "end": 723,
                    "raw": "\"Hello\"",
                    "value": "Hello"
                  }
                },
                {
                  "type": "Property",
                  "start": 733,
                  "end": 742,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 734,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 736,
                    "end": 742,
                    "raw": "\"word\"",
                    "value": "word"
                  }
                },
                {
                  "type": "Property",
                  "start": 752,
                  "end": 756,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 755,
                    "end": 756,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 687,
        "decorators": [],
        "name": "simpleFunction",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 767,
      "end": 834,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 774,
        "end": 834,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 802,
          "end": 834,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 808,
              "end": 832,
              "argument": {
                "type": "CallExpression",
                "start": 815,
                "end": 831,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 829,
                  "decorators": [],
                  "name": "simpleFunction",
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 783,
          "end": 799,
          "decorators": [],
          "name": "exportedFunction",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 836,
      "end": 907,
      "body": {
        "type": "TSModuleBlock",
        "start": 846,
        "end": 907,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 852,
            "end": 905,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 859,
              "end": 905,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 874,
                "end": 905,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 884,
                    "end": 899,
                    "argument": {
                      "type": "Literal",
                      "start": 891,
                      "end": 898,
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 868,
                "end": 871,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 843,
        "end": 845,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 908,
      "end": 963,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 915,
        "end": 963,
        "body": {
          "type": "TSModuleBlock",
          "start": 933,
          "end": 963,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 940,
              "end": 961,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 947,
                "end": 961,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 951,
                    "end": 960,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 951,
                      "end": 960,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 952,
                        "end": 960,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 954,
                          "end": 960
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 930,
          "end": 932,
          "decorators": [],
          "name": "m2",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 966,
      "end": 1046,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 973,
        "end": 1046,
        "body": {
          "type": "TSModuleBlock",
          "start": 983,
          "end": 1046,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 990,
              "end": 1044,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 997,
                "end": 1044,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1012,
                  "end": 1044,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1022,
                      "end": 1038,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1029,
                        "end": 1037,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1029,
                          "end": 1035,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1029,
                            "end": 1031,
                            "decorators": [],
                            "name": "m1",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1035,
                            "decorators": [],
                            "name": "foo",
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
                "id": {
                  "type": "Identifier",
                  "start": 1006,
                  "end": 1009,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "params": []
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 980,
          "end": 982,
          "decorators": [],
          "name": "m3",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1048,
      "end": 1077,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1055,
        "end": 1077,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1059,
            "end": 1064,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1059,
              "end": 1064,
              "decorators": [],
              "name": "eVar1",
              "optional": false
            },
            "init": null
          },
          {
            "type": "VariableDeclarator",
            "start": 1066,
            "end": 1076,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1066,
              "end": 1071,
              "decorators": [],
              "name": "eVar2",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1074,
              "end": 1076,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1078,
      "end": 1089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1088,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1088,
            "decorators": [],
            "name": "eVar22",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1090,
      "end": 1126,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1097,
        "end": 1126,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1101,
            "end": 1111,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1101,
              "end": 1106,
              "decorators": [],
              "name": "eVar3",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1109,
              "end": 1111,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1113,
            "end": 1118,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1113,
              "end": 1118,
              "decorators": [],
              "name": "eVar4",
              "optional": false
            },
            "init": null
          },
          {
            "type": "VariableDeclarator",
            "start": 1120,
            "end": 1125,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1120,
              "end": 1125,
              "decorators": [],
              "name": "eVar5",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
