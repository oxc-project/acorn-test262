__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "simpleVar",
            "typeAnnotation": null,
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
      "type": "ExportNamedDeclaration",
      "start": 15,
      "end": 44,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 22,
        "end": 44,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 26,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 43,
              "name": "exportedSimpleVar",
              "typeAnnotation": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 65,
            "name": "anotherVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 65,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 62,
                "end": 65
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
      "start": 67,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 96,
            "name": "varWithSimpleType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
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
      "start": 98,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 128,
            "name": "varWithArrayType",
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
      "start": 131,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 154,
            "name": "varWithInitialValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 157,
            "end": 159,
            "value": 30,
            "raw": "30"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 205,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 205,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 172,
            "end": 204,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 199,
              "name": "exportedVarWithInitialValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 202,
              "end": 204,
              "value": 70,
              "raw": "70"
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
      "type": "VariableDeclaration",
      "start": 207,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 231,
            "name": "withComplicatedValue",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 239,
                  "end": 241,
                  "value": 30,
                  "raw": "30"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 243,
                "end": 248,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 246,
                  "end": 248,
                  "value": 70,
                  "raw": "70"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 250,
                "end": 266,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 254,
                  "name": "desc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 256,
                  "end": 266,
                  "value": "position",
                  "raw": "\"position\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 270,
      "end": 347,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 277,
        "end": 347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 281,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 309,
              "name": "exportedWithComplicatedValue",
              "typeAnnotation": null,
              "decorators": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 317,
                    "end": 319,
                    "value": 30,
                    "raw": "30"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 321,
                  "end": 326,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 324,
                    "end": 326,
                    "value": 70,
                    "raw": "70"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 328,
                  "end": 344,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 332,
                    "name": "desc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 334,
                    "end": 344,
                    "value": "position",
                    "raw": "\"position\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
      "type": "VariableDeclaration",
      "start": 349,
      "end": 373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 372,
            "name": "declaredVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 397,
            "name": "declareVar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 422,
            "name": "declaredVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 462,
            "name": "deckareVarWithType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 462,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 456,
                "end": 462
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
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 464,
      "end": 511,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 471,
        "end": 511,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 483,
            "end": 510,
            "id": {
              "type": "Identifier",
              "start": 483,
              "end": 510,
              "name": "exportedDeclaredVar",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 502,
                "end": 510,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 504,
                  "end": 510
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
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 535,
            "name": "arrayVar",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 544,
                "end": 547,
                "value": "b",
                "raw": "'b'"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 551,
      "end": 609,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 558,
        "end": 609,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 607,
            "id": {
              "type": "Identifier",
              "start": 562,
              "end": 607,
              "name": "exportedArrayVar",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 583,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 583,
                          "end": 591,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 585,
                            "end": 591
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 593,
                        "end": 603,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 594,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 594,
                          "end": 602,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 596,
                            "end": 602
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 662,
      "expression": {
        "type": "CallExpression",
        "start": 610,
        "end": 661,
        "callee": {
          "type": "MemberExpression",
          "start": 610,
          "end": 631,
          "object": {
            "type": "Identifier",
            "start": 610,
            "end": 626,
            "name": "exportedArrayVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 627,
            "end": 631,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 637,
                  "end": 639,
                  "value": 30,
                  "raw": "30"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 641,
                "end": 658,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 645,
                  "end": 658,
                  "value": "hello world",
                  "raw": "'hello world'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 664,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 687,
        "name": "simpleFunction",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 716,
                    "end": 723,
                    "value": "Hello",
                    "raw": "\"Hello\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 733,
                  "end": 742,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 734,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 736,
                    "end": 742,
                    "value": "word",
                    "raw": "\"word\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 752,
                  "end": 756,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 755,
                    "end": 756,
                    "value": 2,
                    "raw": "2"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 767,
      "end": 834,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 774,
        "end": 834,
        "id": {
          "type": "Identifier",
          "start": 783,
          "end": 799,
          "name": "exportedFunction",
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
                "callee": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 829,
                  "name": "simpleFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
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
      "type": "TSModuleDeclaration",
      "start": 836,
      "end": 907,
      "id": {
        "type": "Identifier",
        "start": 843,
        "end": 845,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 846,
        "end": 907,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 852,
            "end": 905,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 859,
              "end": 905,
              "id": {
                "type": "Identifier",
                "start": 868,
                "end": 871,
                "name": "foo",
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
                      "value": "Hello",
                      "raw": "\"Hello\""
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 908,
      "end": 963,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 915,
        "end": 963,
        "id": {
          "type": "Identifier",
          "start": 930,
          "end": 932,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 933,
          "end": 963,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 940,
              "end": 961,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 947,
                "end": 961,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 951,
                    "end": 960,
                    "id": {
                      "type": "Identifier",
                      "start": 951,
                      "end": 960,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 952,
                        "end": 960,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 954,
                          "end": 960
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 966,
      "end": 1046,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 973,
        "end": 1046,
        "id": {
          "type": "Identifier",
          "start": 980,
          "end": 982,
          "name": "m3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 983,
          "end": 1046,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 990,
              "end": 1044,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 997,
                "end": 1044,
                "id": {
                  "type": "Identifier",
                  "start": 1006,
                  "end": 1009,
                  "name": "foo",
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1029,
                          "end": 1035,
                          "object": {
                            "type": "Identifier",
                            "start": 1029,
                            "end": 1031,
                            "name": "m1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1035,
                            "name": "foo",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1048,
      "end": 1077,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1055,
        "end": 1077,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1059,
            "end": 1064,
            "id": {
              "type": "Identifier",
              "start": 1059,
              "end": 1064,
              "name": "eVar1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1066,
            "end": 1076,
            "id": {
              "type": "Identifier",
              "start": 1066,
              "end": 1071,
              "name": "eVar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1074,
              "end": 1076,
              "value": 10,
              "raw": "10"
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
      "type": "VariableDeclaration",
      "start": 1078,
      "end": 1089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1088,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1088,
            "name": "eVar22",
            "typeAnnotation": null,
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
      "type": "ExportNamedDeclaration",
      "start": 1090,
      "end": 1126,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1097,
        "end": 1126,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1101,
            "end": 1111,
            "id": {
              "type": "Identifier",
              "start": 1101,
              "end": 1106,
              "name": "eVar3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1109,
              "end": 1111,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1113,
            "end": 1118,
            "id": {
              "type": "Identifier",
              "start": 1113,
              "end": 1118,
              "name": "eVar4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1120,
            "end": 1125,
            "id": {
              "type": "Identifier",
              "start": 1120,
              "end": 1125,
              "name": "eVar5",
              "typeAnnotation": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
