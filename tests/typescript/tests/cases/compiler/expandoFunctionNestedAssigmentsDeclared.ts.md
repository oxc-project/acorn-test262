__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 16,
          "end": 20
        },
        "start": 14,
        "end": 20
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 21,
        "end": 25
      },
      "expression": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bla",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 73,
                            "end": 76
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            },
                            "start": 76,
                            "end": 84
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 73,
                          "end": 85
                        }
                      ],
                      "start": 63,
                      "end": 91
                    },
                    "start": 61,
                    "end": 91
                  },
                  "start": 58,
                  "end": 91
                },
                "init": null,
                "definite": false,
                "start": 58,
                "end": 91
              }
            ],
            "declare": false,
            "start": 54,
            "end": 92
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  "start": 101,
                  "end": 112
                },
                "init": null,
                "definite": false,
                "start": 101,
                "end": 112
              }
            ],
            "declare": false,
            "start": 97,
            "end": 113
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 127,
                      "end": 133
                    },
                    "start": 125,
                    "end": 133
                  },
                  "start": 122,
                  "end": 133
                },
                "init": null,
                "definite": false,
                "start": 122,
                "end": 133
              }
            ],
            "declare": false,
            "start": 118,
            "end": 134
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    },
                    "start": 149,
                    "end": 157
                  },
                  "start": 143,
                  "end": 157
                },
                "init": null,
                "definite": false,
                "start": 143,
                "end": 157
              }
            ],
            "declare": false,
            "start": 139,
            "end": 158
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
                    },
                    "start": 171,
                    "end": 179
                  },
                  "start": 167,
                  "end": 179
                },
                "init": null,
                "definite": false,
                "start": 167,
                "end": 179
              }
            ],
            "declare": false,
            "start": 163,
            "end": 180
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 209,
                      "end": 215
                    },
                    "start": 207,
                    "end": 215
                  },
                  "start": 189,
                  "end": 215
                },
                "init": null,
                "definite": false,
                "start": 189,
                "end": 215
              }
            ],
            "declare": false,
            "start": 185,
            "end": 216
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 240,
                      "end": 246
                    },
                    "start": 238,
                    "end": 246
                  },
                  "start": 225,
                  "end": 246
                },
                "init": null,
                "definite": false,
                "start": 225,
                "end": 246
              }
            ],
            "declare": false,
            "start": 221,
            "end": 247
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
                  },
                  "start": 256,
                  "end": 283
                },
                "init": null,
                "definite": false,
                "start": 256,
                "end": 283
              }
            ],
            "declare": false,
            "start": 252,
            "end": 284
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 303,
                    "end": 311
                  },
                  "start": 293,
                  "end": 311
                },
                "init": null,
                "definite": false,
                "start": 293,
                "end": 311
              }
            ],
            "declare": false,
            "start": 289,
            "end": 312
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    },
                    "start": 337,
                    "end": 345
                  },
                  "start": 321,
                  "end": 345
                },
                "init": null,
                "definite": false,
                "start": 321,
                "end": 345
              }
            ],
            "declare": false,
            "start": 317,
            "end": 346
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    },
                    "start": 370,
                    "end": 378
                  },
                  "start": 355,
                  "end": 378
                },
                "init": null,
                "definite": false,
                "start": 355,
                "end": 378
              }
            ],
            "declare": false,
            "start": 351,
            "end": 379
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
                    },
                    "start": 395,
                    "end": 403
                  },
                  "start": 388,
                  "end": 403
                },
                "init": null,
                "definite": false,
                "start": 388,
                "end": 403
              }
            ],
            "declare": false,
            "start": 384,
            "end": 404
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forCond",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 422,
                      "end": 428
                    },
                    "start": 420,
                    "end": 428
                  },
                  "start": 413,
                  "end": 428
                },
                "init": null,
                "definite": false,
                "start": 413,
                "end": 428
              }
            ],
            "declare": false,
            "start": 409,
            "end": 429
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 451,
                      "end": 457
                    },
                    "start": 449,
                    "end": 457
                  },
                  "start": 438,
                  "end": 457
                },
                "init": null,
                "definite": false,
                "start": 438,
                "end": 457
              }
            ],
            "declare": false,
            "start": 434,
            "end": 458
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 486,
                      "end": 492
                    },
                    "start": 484,
                    "end": 492
                  },
                  "start": 467,
                  "end": 492
                },
                "init": null,
                "definite": false,
                "start": 467,
                "end": 492
              }
            ],
            "declare": false,
            "start": 463,
            "end": 493
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forIncr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 511,
                      "end": 517
                    },
                    "start": 509,
                    "end": 517
                  },
                  "start": 502,
                  "end": 517
                },
                "init": null,
                "definite": false,
                "start": 502,
                "end": 517
              }
            ],
            "declare": false,
            "start": 498,
            "end": 518
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forOf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 534,
                        "end": 537
                      },
                      "start": 534,
                      "end": 539
                    },
                    "start": 532,
                    "end": 539
                  },
                  "start": 527,
                  "end": 539
                },
                "init": null,
                "definite": false,
                "start": 527,
                "end": 539
              }
            ],
            "declare": false,
            "start": 523,
            "end": 540
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    },
                    "start": 562,
                    "end": 570
                  },
                  "start": 549,
                  "end": 570
                },
                "init": null,
                "definite": false,
                "start": 549,
                "end": 570
              }
            ],
            "declare": false,
            "start": 545,
            "end": 571
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
                    },
                    "start": 599,
                    "end": 607
                  },
                  "start": 580,
                  "end": 607
                },
                "init": null,
                "definite": false,
                "start": 580,
                "end": 607
              }
            ],
            "declare": false,
            "start": 576,
            "end": 608
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forIn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 624,
                        "end": 627
                      },
                      "start": 624,
                      "end": 629
                    },
                    "start": 622,
                    "end": 629
                  },
                  "start": 617,
                  "end": 629
                },
                "init": null,
                "definite": false,
                "start": 617,
                "end": 629
              }
            ],
            "declare": false,
            "start": 613,
            "end": 630
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
                    },
                    "start": 652,
                    "end": 660
                  },
                  "start": 639,
                  "end": 660
                },
                "init": null,
                "definite": false,
                "start": 639,
                "end": 660
              }
            ],
            "declare": false,
            "start": 635,
            "end": 661
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
                    },
                    "start": 689,
                    "end": 697
                  },
                  "start": 670,
                  "end": 697
                },
                "init": null,
                "definite": false,
                "start": 670,
                "end": 697
              }
            ],
            "declare": false,
            "start": 666,
            "end": 698
          }
        ],
        "start": 48,
        "end": 700
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 26,
      "end": 700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 706
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bla",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 710
              },
              "optional": false,
              "computed": false,
              "start": 703,
              "end": 710
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 718
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 720,
                    "end": 721
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 715,
                  "end": 721
                }
              ],
              "start": 713,
              "end": 722
            },
            "start": 703,
            "end": 722
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 702,
          "end": 727
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 734
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 735,
                "end": 738
              },
              "optional": false,
              "computed": false,
              "start": 731,
              "end": 738
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 741,
              "end": 742
            },
            "start": 731,
            "end": 742
          },
          "operator": "+",
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 750
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 754
              },
              "optional": false,
              "computed": false,
              "start": 747,
              "end": 754
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 758,
              "end": 759
            },
            "start": 747,
            "end": 759
          },
          "start": 730,
          "end": 760
        },
        "start": 702,
        "end": 760
      },
      "directive": null,
      "start": 702,
      "end": 761
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 769
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromIf",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 776
          },
          "optional": false,
          "computed": false,
          "start": 766,
          "end": 776
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 779,
          "end": 780
        },
        "start": 766,
        "end": 780
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 791
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 796
                },
                "optional": false,
                "computed": false,
                "start": 788,
                "end": 796
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 799,
                "end": 800
              },
              "start": 788,
              "end": 800
            },
            "directive": null,
            "start": 788,
            "end": 801
          }
        ],
        "start": 782,
        "end": 803
      },
      "alternate": null,
      "start": 763,
      "end": 803
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 811,
            "end": 814
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 833
          },
          "optional": false,
          "computed": false,
          "start": 811,
          "end": 833
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 836,
          "end": 837
        },
        "start": 811,
        "end": 837
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 848
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 845,
                "end": 862
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 865,
                "end": 866
              },
              "start": 845,
              "end": 866
            },
            "directive": null,
            "start": 845,
            "end": 867
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 885
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 905
                    },
                    "optional": false,
                    "computed": false,
                    "start": 882,
                    "end": 905
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 908,
                    "end": 909
                  },
                  "start": 882,
                  "end": 909
                },
                "directive": null,
                "start": 882,
                "end": 910
              }
            ],
            "start": 872,
            "end": 916
          }
        ],
        "start": 839,
        "end": 918
      },
      "start": 805,
      "end": 918
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 932
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 933,
                  "end": 943
                },
                "optional": false,
                "computed": false,
                "start": 929,
                "end": 943
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 946,
                "end": 947
              },
              "start": 929,
              "end": 947
            },
            "directive": null,
            "start": 929,
            "end": 948
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 966
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 967,
                      "end": 983
                    },
                    "optional": false,
                    "computed": false,
                    "start": 963,
                    "end": 983
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 986,
                    "end": 987
                  },
                  "start": 963,
                  "end": 987
                },
                "directive": null,
                "start": 963,
                "end": 988
              }
            ],
            "start": 953,
            "end": 994
          }
        ],
        "start": 923,
        "end": 996
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1006
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1022
          },
          "optional": false,
          "computed": false,
          "start": 1003,
          "end": 1022
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1025,
          "end": 1026
        },
        "start": 1003,
        "end": 1026
      },
      "start": 920,
      "end": 1028
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1034,
            "end": 1037
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 1038,
            "end": 1045
          },
          "optional": false,
          "computed": false,
          "start": 1034,
          "end": 1045
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1048,
          "end": 1049
        },
        "start": 1034,
        "end": 1049
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1055
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "forCond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1063
            },
            "optional": false,
            "computed": false,
            "start": 1052,
            "end": 1063
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1066,
            "end": 1067
          },
          "start": 1052,
          "end": 1067
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1071,
          "end": 1072
        },
        "start": 1051,
        "end": 1072
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1074,
            "end": 1077
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 1078,
            "end": 1085
          },
          "optional": false,
          "computed": false,
          "start": 1074,
          "end": 1085
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1088,
          "end": 1089
        },
        "start": 1074,
        "end": 1089
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1099
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1111
                },
                "optional": false,
                "computed": false,
                "start": 1096,
                "end": 1111
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1114,
                "end": 1115
              },
              "start": 1096,
              "end": 1115
            },
            "directive": null,
            "start": 1096,
            "end": 1116
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1131,
                      "end": 1134
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1152
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1131,
                    "end": 1152
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1155,
                    "end": 1156
                  },
                  "start": 1131,
                  "end": 1156
                },
                "directive": null,
                "start": 1131,
                "end": 1157
              }
            ],
            "start": 1121,
            "end": 1163
          }
        ],
        "start": 1090,
        "end": 1165
      },
      "start": 1030,
      "end": 1165
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1175,
              "end": 1176
            },
            "init": null,
            "definite": false,
            "start": 1175,
            "end": 1176
          }
        ],
        "declare": false,
        "start": 1171,
        "end": 1176
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1190
          },
          "optional": false,
          "computed": false,
          "start": 1181,
          "end": 1190
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 1193,
          "end": 1195
        },
        "start": 1181,
        "end": 1195
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1208,
                  "end": 1221
                },
                "optional": false,
                "computed": false,
                "start": 1204,
                "end": 1221
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1224,
                "end": 1225
              },
              "start": 1204,
              "end": 1225
            },
            "directive": null,
            "start": 1204,
            "end": 1226
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1244
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1245,
                      "end": 1264
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1241,
                    "end": 1264
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1267,
                    "end": 1268
                  },
                  "start": 1241,
                  "end": 1268
                },
                "directive": null,
                "start": 1241,
                "end": 1269
              }
            ],
            "start": 1231,
            "end": 1275
          }
        ],
        "start": 1198,
        "end": 1277
      },
      "start": 1167,
      "end": 1277
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1288,
              "end": 1289
            },
            "init": null,
            "definite": false,
            "start": 1288,
            "end": 1289
          }
        ],
        "declare": false,
        "start": 1284,
        "end": 1289
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1294,
            "end": 1297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1298,
            "end": 1303
          },
          "optional": false,
          "computed": false,
          "start": 1294,
          "end": 1303
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 1306,
          "end": 1308
        },
        "start": 1294,
        "end": 1308
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1334
                },
                "optional": false,
                "computed": false,
                "start": 1317,
                "end": 1334
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1337,
                "end": 1338
              },
              "start": 1317,
              "end": 1338
            },
            "directive": null,
            "start": 1317,
            "end": 1339
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1354,
                      "end": 1357
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1358,
                      "end": 1377
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1354,
                    "end": 1377
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1380,
                    "end": 1381
                  },
                  "start": 1354,
                  "end": 1381
                },
                "directive": null,
                "start": 1354,
                "end": 1382
              }
            ],
            "start": 1344,
            "end": 1388
          }
        ],
        "start": 1311,
        "end": 1390
      },
      "start": 1280,
      "end": 1390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1390
}
```
