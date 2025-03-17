__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 809,
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
      "type": "VariableDeclaration",
      "start": 26,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 39,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 43,
            "end": 65,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 43,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 61,
                "name": "inVariableInit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 64,
              "end": 65,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 83,
          "end": 113,
          "left": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "AssignmentExpression",
            "start": 88,
            "end": 112,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 88,
              "end": 108,
              "object": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 92,
                "end": 108,
                "name": "inNestedFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 111,
              "end": 112,
              "value": 1,
              "raw": "1"
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 119,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 146,
          "object": {
            "type": "AssignmentExpression",
            "start": 122,
            "end": 141,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 122,
              "end": 129,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 126,
                "end": 129,
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
              "start": 132,
              "end": 141,
              "properties": [
                {
                  "type": "Property",
                  "start": 134,
                  "end": 140,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 139,
                    "end": 140,
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
            "start": 143,
            "end": 146,
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
          "start": 149,
          "end": 179,
          "left": {
            "type": "AssignmentExpression",
            "start": 150,
            "end": 161,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 150,
              "end": 157,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 153,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
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
              "start": 160,
              "end": 161,
              "value": 1,
              "raw": "1"
            }
          },
          "operator": "+",
          "right": {
            "type": "AssignmentExpression",
            "start": 166,
            "end": 178,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 166,
              "end": 173,
              "object": {
                "type": "Identifier",
                "start": 166,
                "end": 169,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 170,
                "end": 173,
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
              "start": 177,
              "end": 178,
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
      "start": 182,
      "end": 222,
      "test": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 199,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 185,
          "end": 195,
          "object": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 195,
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
          "start": 198,
          "end": 199,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 201,
        "end": 222,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 220,
            "expression": {
              "type": "AssignmentExpression",
              "start": 207,
              "end": 219,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 215,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 210,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 215,
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
                "start": 218,
                "end": 219,
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
      "start": 224,
      "end": 337,
      "test": {
        "type": "AssignmentExpression",
        "start": 230,
        "end": 256,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 230,
          "end": 252,
          "object": {
            "type": "Identifier",
            "start": 230,
            "end": 233,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 234,
            "end": 252,
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
          "start": 255,
          "end": 256,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 337,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 264,
            "end": 286,
            "expression": {
              "type": "AssignmentExpression",
              "start": 264,
              "end": 285,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 264,
                "end": 281,
                "object": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 267,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 281,
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
                "start": 284,
                "end": 285,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 291,
            "end": 335,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 301,
                "end": 329,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 301,
                  "end": 328,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 301,
                    "end": 324,
                    "object": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 304,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 324,
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
                    "start": 327,
                    "end": 328,
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
      "start": 339,
      "end": 447,
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 348,
            "end": 367,
            "expression": {
              "type": "AssignmentExpression",
              "start": 348,
              "end": 366,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 348,
                "end": 362,
                "object": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 351,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 362,
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
                "start": 365,
                "end": 366,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 372,
            "end": 413,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 382,
                "end": 407,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 382,
                  "end": 406,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 382,
                    "end": 402,
                    "object": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 385,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 402,
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
                    "start": 405,
                    "end": 406,
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
        "start": 422,
        "end": 445,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 422,
          "end": 441,
          "object": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 426,
            "end": 441,
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
          "start": 444,
          "end": 445,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 449,
      "end": 584,
      "init": {
        "type": "AssignmentExpression",
        "start": 453,
        "end": 468,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 453,
          "end": 464,
          "object": {
            "type": "Identifier",
            "start": 453,
            "end": 456,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 464,
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
          "start": 467,
          "end": 468,
          "value": 1,
          "raw": "1"
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 491,
        "left": {
          "type": "AssignmentExpression",
          "start": 471,
          "end": 486,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 471,
            "end": 482,
            "object": {
              "type": "Identifier",
              "start": 471,
              "end": 474,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 475,
              "end": 482,
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
            "start": 485,
            "end": 486,
            "value": 1,
            "raw": "1"
          }
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "start": 490,
          "end": 491,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "start": 493,
        "end": 508,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 493,
          "end": 504,
          "object": {
            "type": "Identifier",
            "start": 493,
            "end": 496,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 497,
            "end": 504,
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
          "start": 507,
          "end": 508,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 584,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 515,
            "end": 535,
            "expression": {
              "type": "AssignmentExpression",
              "start": 515,
              "end": 534,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 515,
                "end": 530,
                "object": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 518,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 530,
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
                "start": 533,
                "end": 534,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 540,
            "end": 582,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 550,
                "end": 576,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 550,
                  "end": 575,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 550,
                    "end": 571,
                    "object": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 553,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 571,
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
                    "start": 574,
                    "end": 575,
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
      "start": 586,
      "end": 696,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 590,
        "end": 595,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 594,
            "end": 595,
            "id": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
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
        "start": 600,
        "end": 614,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 600,
          "end": 609,
          "object": {
            "type": "Identifier",
            "start": 600,
            "end": 603,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 604,
            "end": 609,
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
          "start": 612,
          "end": 614,
          "elements": []
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 617,
        "end": 696,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 623,
            "end": 645,
            "expression": {
              "type": "AssignmentExpression",
              "start": 623,
              "end": 644,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 623,
                "end": 640,
                "object": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 626,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 640,
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
                "start": 643,
                "end": 644,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 650,
            "end": 694,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 660,
                "end": 688,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 660,
                  "end": 687,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 660,
                    "end": 683,
                    "object": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 663,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 683,
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
                    "start": 686,
                    "end": 687,
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
      "start": 699,
      "end": 809,
      "left": {
        "type": "VariableDeclaration",
        "start": 703,
        "end": 708,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 707,
            "end": 708,
            "id": {
              "type": "Identifier",
              "start": 707,
              "end": 708,
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
        "start": 713,
        "end": 727,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 713,
          "end": 722,
          "object": {
            "type": "Identifier",
            "start": 713,
            "end": 716,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 717,
            "end": 722,
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
          "start": 725,
          "end": 727,
          "elements": []
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 730,
        "end": 809,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 758,
            "expression": {
              "type": "AssignmentExpression",
              "start": 736,
              "end": 757,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 736,
                "end": 753,
                "object": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 753,
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
                "start": 756,
                "end": 757,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 763,
            "end": 807,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 773,
                "end": 801,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 773,
                  "end": 800,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 773,
                    "end": 796,
                    "object": {
                      "type": "Identifier",
                      "start": 773,
                      "end": 776,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 796,
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
                    "start": 799,
                    "end": 800,
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
