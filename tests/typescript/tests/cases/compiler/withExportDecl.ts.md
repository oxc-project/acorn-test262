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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 26,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 43,
              "decorators": [],
              "name": "exportedSimpleVar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 66,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 65,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 97,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 96,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 128,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 154,
            "decorators": [],
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 172,
            "end": 204,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 199,
              "decorators": [],
              "name": "exportedVarWithInitialValue",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 269,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 231,
            "decorators": [],
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 239,
                  "end": 241,
                  "value": 30,
                  "raw": "30"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 243,
                "end": 248,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 246,
                  "end": 248,
                  "value": 70,
                  "raw": "70"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 250,
                "end": 266,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 254,
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 256,
                  "end": 266,
                  "value": "position",
                  "raw": "\"position\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 281,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 309,
              "decorators": [],
              "name": "exportedWithComplicatedValue",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 317,
                    "end": 319,
                    "value": 30,
                    "raw": "30"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 321,
                  "end": 326,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 324,
                    "end": 326,
                    "value": 70,
                    "raw": "70"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 328,
                  "end": 344,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 332,
                    "decorators": [],
                    "name": "desc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 334,
                    "end": 344,
                    "value": "position",
                    "raw": "\"position\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 373,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 372,
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 397,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 397,
            "decorators": [],
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 423,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 422,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 422,
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 424,
      "end": 463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 462,
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
          "init": null,
          "definite": false
        }
      ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 483,
            "end": 510,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 549,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 548,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 607,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 583,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
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
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "exportedArrayVar",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 627,
            "end": 631,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 637,
                  "end": 639,
                  "value": 30,
                  "raw": "30"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 641,
                "end": 658,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 645,
                  "end": 658,
                  "value": "hello world",
                  "raw": "'hello world'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
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
        "decorators": [],
        "name": "simpleFunction",
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 716,
                    "end": 723,
                    "value": "Hello",
                    "raw": "\"Hello\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 733,
                  "end": 742,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 734,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 736,
                    "end": 742,
                    "value": "word",
                    "raw": "\"word\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 752,
                  "end": 756,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 755,
                    "end": 756,
                    "value": 2,
                    "raw": "2"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "exportedFunction",
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
                  "decorators": [],
                  "name": "simpleFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
      "type": "TSModuleDeclaration",
      "start": 836,
      "end": 907,
      "id": {
        "type": "Identifier",
        "start": 843,
        "end": 845,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "foo",
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
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null
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
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 951,
                    "end": 960,
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
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "foo",
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
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1035,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1048,
      "end": 1077,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1055,
        "end": 1077,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1059,
            "end": 1064,
            "id": {
              "type": "Identifier",
              "start": 1059,
              "end": 1064,
              "decorators": [],
              "name": "eVar1",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "eVar2",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1078,
      "end": 1089,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1088,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1088,
            "decorators": [],
            "name": "eVar22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1101,
            "end": 1111,
            "id": {
              "type": "Identifier",
              "start": 1101,
              "end": 1106,
              "decorators": [],
              "name": "eVar3",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "eVar4",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "eVar5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
