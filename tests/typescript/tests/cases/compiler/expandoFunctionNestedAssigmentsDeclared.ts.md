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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 25,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 20,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 16,
          "end": 20
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 700,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 91,
                  "decorators": [],
                  "name": "bla",
                  "optional": false,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 76,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
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
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 112,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
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
            "start": 118,
            "end": 134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 133,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 133,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 127,
                      "end": 133
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
            "start": 139,
            "end": 158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 157,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 157,
                  "decorators": [],
                  "name": "fromIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
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
            "start": 163,
            "end": 180,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 167,
                "end": 179,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 179,
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
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
            "start": 185,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 189,
                "end": 215,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 215,
                  "decorators": [],
                  "name": "fromWhileCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 215,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 209,
                      "end": 215
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
            "start": 221,
            "end": 247,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 225,
                "end": 246,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 246,
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 240,
                      "end": 246
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
            "start": 252,
            "end": 284,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 256,
                "end": 283,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 283,
                  "decorators": [],
                  "name": "fromWhileBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
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
            "start": 289,
            "end": 312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 311,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 311,
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
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
            "start": 317,
            "end": 346,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 321,
                "end": 345,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 345,
                  "decorators": [],
                  "name": "fromDoBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
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
            "start": 351,
            "end": 379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 378,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 378,
                  "decorators": [],
                  "name": "fromDoCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 370,
                    "end": 378,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
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
            "start": 384,
            "end": 404,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 403,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 403,
                  "decorators": [],
                  "name": "forInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
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
            "start": 409,
            "end": 429,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 428,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 428,
                  "decorators": [],
                  "name": "forCond",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 428,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 422,
                      "end": 428
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
            "start": 434,
            "end": 458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 438,
                "end": 457,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 457,
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 449,
                    "end": 457,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 451,
                      "end": 457
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
            "start": 463,
            "end": 493,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 467,
                "end": 492,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 492,
                  "decorators": [],
                  "name": "fromForBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 484,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 486,
                      "end": 492
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
            "start": 498,
            "end": 518,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 502,
                "end": 517,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 517,
                  "decorators": [],
                  "name": "forIncr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 509,
                    "end": 517,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 511,
                      "end": 517
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
            "start": 523,
            "end": 540,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 527,
                "end": 539,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 539,
                  "decorators": [],
                  "name": "forOf",
                  "optional": false,
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
            "start": 545,
            "end": 571,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 549,
                "end": 570,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 570,
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 562,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
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
            "start": 576,
            "end": 608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 580,
                "end": 607,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 607,
                  "decorators": [],
                  "name": "fromForOfBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 599,
                    "end": 607,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
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
            "start": 613,
            "end": 630,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 617,
                "end": 629,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 629,
                  "decorators": [],
                  "name": "forIn",
                  "optional": false,
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
            "start": 635,
            "end": 661,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 660,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 660,
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 652,
                    "end": 660,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
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
            "start": 666,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 670,
                "end": 697,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 697,
                  "decorators": [],
                  "name": "fromForInBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 689,
                    "end": 697,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 702,
      "end": 761,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 702,
        "end": 760,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 702,
          "end": 727,
          "computed": false,
          "object": {
            "type": "AssignmentExpression",
            "start": 703,
            "end": 722,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 703,
              "end": 710,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 703,
                "end": 706,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 707,
                "end": 710,
                "decorators": [],
                "name": "bla",
                "optional": false,
                "typeAnnotation": null
              }
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 718,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 720,
                    "end": 721,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 724,
            "end": 727,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 730,
          "end": 760,
          "operator": "+",
          "left": {
            "type": "AssignmentExpression",
            "start": 731,
            "end": 742,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 731,
              "end": 738,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 731,
                "end": 734,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 735,
                "end": 738,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 741,
              "end": 742,
              "raw": "1",
              "value": 1
            }
          },
          "right": {
            "type": "AssignmentExpression",
            "start": 747,
            "end": 759,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 747,
              "end": 754,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 747,
                "end": 750,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 751,
                "end": 754,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 758,
              "end": 759,
              "raw": "0",
              "value": 0
            }
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 763,
      "end": 803,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 782,
        "end": 803,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 788,
            "end": 801,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 788,
              "end": 800,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 788,
                "end": 796,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 791,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 796,
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 799,
                "end": 800,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 766,
        "end": 780,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 766,
          "end": 776,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 766,
            "end": 769,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 770,
            "end": 776,
            "decorators": [],
            "name": "fromIf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 779,
          "end": 780,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 805,
      "end": 918,
      "body": {
        "type": "BlockStatement",
        "start": 839,
        "end": 918,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 845,
            "end": 867,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 845,
              "end": 866,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 845,
                "end": 862,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 848,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 862,
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 865,
                "end": 866,
                "raw": "1",
                "value": 1
              }
            }
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
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 882,
                  "end": 909,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 882,
                    "end": 905,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 882,
                      "end": 885,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 886,
                      "end": 905,
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 908,
                    "end": 909,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 811,
        "end": 837,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 811,
          "end": 833,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 811,
            "end": 814,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 815,
            "end": 833,
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 836,
          "end": 837,
          "raw": "1",
          "value": 1
        }
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
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 929,
              "end": 947,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 929,
                "end": 943,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 932,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 933,
                  "end": 943,
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 946,
                "end": 947,
                "raw": "1",
                "value": 1
              }
            }
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
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 963,
                  "end": 987,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 963,
                    "end": 983,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 966,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 983,
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 986,
                    "end": 987,
                    "raw": "1",
                    "value": 1
                  }
                }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1003,
            "end": 1006,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1007,
            "end": 1022,
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1025,
          "end": 1026,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1030,
      "end": 1165,
      "body": {
        "type": "BlockStatement",
        "start": 1090,
        "end": 1165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1096,
            "end": 1116,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1096,
              "end": 1115,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1096,
                "end": 1111,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1099,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1111,
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1114,
                "end": 1115,
                "raw": "1",
                "value": 1
              }
            }
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
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1131,
                  "end": 1156,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1131,
                    "end": 1152,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1134,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1152,
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1155,
                    "end": 1156,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 1034,
        "end": 1049,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1034,
          "end": 1045,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1034,
            "end": 1037,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1038,
            "end": 1045,
            "decorators": [],
            "name": "forInit",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1048,
          "end": 1049,
          "raw": "1",
          "value": 1
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1051,
        "end": 1072,
        "operator": ">",
        "left": {
          "type": "AssignmentExpression",
          "start": 1052,
          "end": 1067,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 1052,
            "end": 1063,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1052,
              "end": 1055,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1056,
              "end": 1063,
              "decorators": [],
              "name": "forCond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 1066,
            "end": 1067,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 1071,
          "end": 1072,
          "raw": "1",
          "value": 1
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1074,
            "end": 1077,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1078,
            "end": 1085,
            "decorators": [],
            "name": "forIncr",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1088,
          "end": 1089,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1167,
      "end": 1277,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1198,
        "end": 1277,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1204,
            "end": 1226,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1204,
              "end": 1225,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1204,
                "end": 1221,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1207,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1208,
                  "end": 1221,
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1224,
                "end": 1225,
                "raw": "1",
                "value": 1
              }
            }
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
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1241,
                  "end": 1268,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1241,
                    "end": 1264,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1244,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1245,
                      "end": 1264,
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1267,
                    "end": 1268,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 1171,
        "end": 1176,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1175,
            "end": 1176,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1175,
              "end": 1176,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1181,
            "end": 1184,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1185,
            "end": 1190,
            "decorators": [],
            "name": "forOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1193,
          "end": 1195,
          "elements": []
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 1280,
      "end": 1390,
      "body": {
        "type": "BlockStatement",
        "start": 1311,
        "end": 1390,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1317,
            "end": 1339,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1317,
              "end": 1338,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1317,
                "end": 1334,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1317,
                  "end": 1320,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1334,
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1337,
                "end": 1338,
                "raw": "1",
                "value": 1
              }
            }
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
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1354,
                  "end": 1381,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1354,
                    "end": 1377,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1354,
                      "end": 1357,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1358,
                      "end": 1377,
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1380,
                    "end": 1381,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 1284,
        "end": 1289,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1288,
            "end": 1289,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1288,
              "end": 1289,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1294,
            "end": 1297,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1298,
            "end": 1303,
            "decorators": [],
            "name": "forIn",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1306,
          "end": 1308,
          "elements": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
