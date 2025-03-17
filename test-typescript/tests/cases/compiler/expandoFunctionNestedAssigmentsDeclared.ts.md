__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1390,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "Foo",
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
        "start": 21,
        "end": 25,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 20,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 16,
          "end": 20
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 48,
        "end": 700,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 54,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 58,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 91,
                  "name": "bla",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 63,
                      "end": 91,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 73,
                          "end": 85,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 76,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
            "start": 97,
            "end": 113,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 112,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 112,
                  "name": "baz",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
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
            "start": 118,
            "end": 134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 133,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 133,
                  "name": "bar",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 127,
                      "end": 133
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
            "start": 139,
            "end": 158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 157,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 157,
                  "name": "fromIf",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
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
            "start": 163,
            "end": 180,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 167,
                "end": 179,
                "id": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 179,
                  "name": "inIf",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
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
            "start": 185,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 189,
                "end": 215,
                "id": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 215,
                  "name": "fromWhileCondition",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 215,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 209,
                      "end": 215
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
            "start": 221,
            "end": 247,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 225,
                "end": 246,
                "id": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 246,
                  "name": "fromWhileBody",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 240,
                      "end": 246
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
            "start": 252,
            "end": 284,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 256,
                "end": 283,
                "id": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 283,
                  "name": "fromWhileBodyNested",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
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
            "start": 289,
            "end": 312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 311,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 311,
                  "name": "fromDoBody",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
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
            "start": 317,
            "end": 346,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 321,
                "end": 345,
                "id": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 345,
                  "name": "fromDoBodyNested",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
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
            "start": 351,
            "end": 379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 378,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 378,
                  "name": "fromDoCondition",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 370,
                    "end": 378,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
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
            "start": 384,
            "end": 404,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 403,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 403,
                  "name": "forInit",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
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
            "start": 409,
            "end": 429,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 428,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 428,
                  "name": "forCond",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 428,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 422,
                      "end": 428
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
            "start": 434,
            "end": 458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 438,
                "end": 457,
                "id": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 457,
                  "name": "fromForBody",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 449,
                    "end": 457,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 451,
                      "end": 457
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
            "start": 463,
            "end": 493,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 467,
                "end": 492,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 492,
                  "name": "fromForBodyNested",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 484,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 486,
                      "end": 492
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
            "start": 498,
            "end": 518,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 502,
                "end": 517,
                "id": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 517,
                  "name": "forIncr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 509,
                    "end": 517,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 511,
                      "end": 517
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
            "start": 523,
            "end": 540,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 527,
                "end": 539,
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 539,
                  "name": "forOf",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 532,
                    "end": 539,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 534,
                      "end": 539,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 534,
                        "end": 537
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
            "start": 545,
            "end": 571,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 549,
                "end": 570,
                "id": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 570,
                  "name": "fromForOfBody",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 562,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
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
            "start": 576,
            "end": 608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 580,
                "end": 607,
                "id": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 607,
                  "name": "fromForOfBodyNested",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 599,
                    "end": 607,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
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
            "start": 613,
            "end": 630,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 617,
                "end": 629,
                "id": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 629,
                  "name": "forIn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 629,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 624,
                      "end": 629,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 624,
                        "end": 627
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
            "start": 635,
            "end": 661,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 660,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 660,
                  "name": "fromForInBody",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 652,
                    "end": 660,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
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
            "start": 666,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 670,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 697,
                  "name": "fromForInBodyNested",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 689,
                    "end": 697,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
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
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 702,
      "end": 761,
      "expression": {
        "type": "AssignmentExpression",
        "start": 702,
        "end": 760,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 702,
          "end": 727,
          "object": {
            "type": "AssignmentExpression",
            "start": 703,
            "end": 722,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 703,
              "end": 710,
              "object": {
                "type": "Identifier",
                "start": 703,
                "end": 706,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 707,
                "end": 710,
                "name": "bla",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "ObjectExpression",
              "start": 713,
              "end": 722,
              "properties": [
                {
                  "type": "Property",
                  "start": 715,
                  "end": 721,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 718,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 720,
                    "end": 721,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "property": {
            "type": "Identifier",
            "start": 724,
            "end": 727,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 730,
          "end": 760,
          "left": {
            "type": "AssignmentExpression",
            "start": 731,
            "end": 742,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 731,
              "end": 738,
              "object": {
                "type": "Identifier",
                "start": 731,
                "end": 734,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 735,
                "end": 738,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 741,
              "end": 742,
              "value": 1,
              "raw": "1"
            }
          },
          "operator": "+",
          "right": {
            "type": "AssignmentExpression",
            "start": 747,
            "end": 759,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 747,
              "end": 754,
              "object": {
                "type": "Identifier",
                "start": 747,
                "end": 750,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 751,
                "end": 754,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 758,
              "end": 759,
              "value": 0,
              "raw": "0"
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 763,
      "end": 803,
      "test": {
        "type": "AssignmentExpression",
        "start": 766,
        "end": 780,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 766,
          "end": 776,
          "object": {
            "type": "Identifier",
            "start": 766,
            "end": 769,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 770,
            "end": 776,
            "name": "fromIf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 779,
          "end": 780,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 782,
        "end": 803,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 788,
            "end": 801,
            "expression": {
              "type": "AssignmentExpression",
              "start": 788,
              "end": 800,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 788,
                "end": 796,
                "object": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 791,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 796,
                  "name": "inIf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 799,
                "end": 800,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 805,
      "end": 918,
      "test": {
        "type": "AssignmentExpression",
        "start": 811,
        "end": 837,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 811,
          "end": 833,
          "object": {
            "type": "Identifier",
            "start": 811,
            "end": 814,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 815,
            "end": 833,
            "name": "fromWhileCondition",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 836,
          "end": 837,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 839,
        "end": 918,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 845,
            "end": 867,
            "expression": {
              "type": "AssignmentExpression",
              "start": 845,
              "end": 866,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 845,
                "end": 862,
                "object": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 848,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 862,
                  "name": "fromWhileBody",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 865,
                "end": 866,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 872,
            "end": 916,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 882,
                "end": 910,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 882,
                  "end": 909,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 882,
                    "end": 905,
                    "object": {
                      "type": "Identifier",
                      "start": 882,
                      "end": 885,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 886,
                      "end": 905,
                      "name": "fromWhileBodyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 908,
                    "end": 909,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 920,
      "end": 1028,
      "body": {
        "type": "BlockStatement",
        "start": 923,
        "end": 996,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 929,
            "end": 948,
            "expression": {
              "type": "AssignmentExpression",
              "start": 929,
              "end": 947,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 929,
                "end": 943,
                "object": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 932,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 933,
                  "end": 943,
                  "name": "fromDoBody",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 946,
                "end": 947,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 953,
            "end": 994,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 963,
                "end": 988,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 963,
                  "end": 987,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 963,
                    "end": 983,
                    "object": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 966,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 983,
                      "name": "fromDoBodyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 986,
                    "end": 987,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 1003,
        "end": 1026,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1003,
          "end": 1022,
          "object": {
            "type": "Identifier",
            "start": 1003,
            "end": 1006,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1007,
            "end": 1022,
            "name": "fromDoCondition",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1025,
          "end": 1026,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1030,
      "end": 1165,
      "init": {
        "type": "AssignmentExpression",
        "start": 1034,
        "end": 1049,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1034,
          "end": 1045,
          "object": {
            "type": "Identifier",
            "start": 1034,
            "end": 1037,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1038,
            "end": 1045,
            "name": "forInit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1048,
          "end": 1049,
          "value": 1,
          "raw": "1"
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1051,
        "end": 1072,
        "left": {
          "type": "AssignmentExpression",
          "start": 1052,
          "end": 1067,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 1052,
            "end": 1063,
            "object": {
              "type": "Identifier",
              "start": 1052,
              "end": 1055,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1056,
              "end": 1063,
              "name": "forCond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 1066,
            "end": 1067,
            "value": 1,
            "raw": "1"
          }
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "start": 1071,
          "end": 1072,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "start": 1074,
        "end": 1089,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1074,
          "end": 1085,
          "object": {
            "type": "Identifier",
            "start": 1074,
            "end": 1077,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1078,
            "end": 1085,
            "name": "forIncr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1088,
          "end": 1089,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1090,
        "end": 1165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1096,
            "end": 1116,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1096,
              "end": 1115,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1096,
                "end": 1111,
                "object": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1099,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1111,
                  "name": "fromForBody",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1114,
                "end": 1115,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 1121,
            "end": 1163,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1131,
                "end": 1157,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1131,
                  "end": 1156,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1131,
                    "end": 1152,
                    "object": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1134,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1152,
                      "name": "fromForBodyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1155,
                    "end": 1156,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1167,
      "end": 1277,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1171,
        "end": 1176,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1175,
            "end": 1176,
            "id": {
              "type": "Identifier",
              "start": 1175,
              "end": 1176,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "AssignmentExpression",
        "start": 1181,
        "end": 1195,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1181,
          "end": 1190,
          "object": {
            "type": "Identifier",
            "start": 1181,
            "end": 1184,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1185,
            "end": 1190,
            "name": "forOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1193,
          "end": 1195,
          "elements": []
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1198,
        "end": 1277,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1204,
            "end": 1226,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1204,
              "end": 1225,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1204,
                "end": 1221,
                "object": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1207,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1208,
                  "end": 1221,
                  "name": "fromForOfBody",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1224,
                "end": 1225,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 1231,
            "end": 1275,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1241,
                "end": 1269,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1241,
                  "end": 1268,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1241,
                    "end": 1264,
                    "object": {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1244,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1245,
                      "end": 1264,
                      "name": "fromForOfBodyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1267,
                    "end": 1268,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 1280,
      "end": 1390,
      "left": {
        "type": "VariableDeclaration",
        "start": 1284,
        "end": 1289,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1288,
            "end": 1289,
            "id": {
              "type": "Identifier",
              "start": 1288,
              "end": 1289,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "AssignmentExpression",
        "start": 1294,
        "end": 1308,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1294,
          "end": 1303,
          "object": {
            "type": "Identifier",
            "start": 1294,
            "end": 1297,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1298,
            "end": 1303,
            "name": "forIn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1306,
          "end": 1308,
          "elements": []
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1311,
        "end": 1390,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1317,
            "end": 1339,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1317,
              "end": 1338,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1317,
                "end": 1334,
                "object": {
                  "type": "Identifier",
                  "start": 1317,
                  "end": 1320,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1334,
                  "name": "fromForInBody",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1337,
                "end": 1338,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 1344,
            "end": 1388,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1354,
                "end": 1382,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1354,
                  "end": 1381,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1354,
                    "end": 1377,
                    "object": {
                      "type": "Identifier",
                      "start": 1354,
                      "end": 1357,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1358,
                      "end": 1377,
                      "name": "fromForInBodyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1380,
                    "end": 1381,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
