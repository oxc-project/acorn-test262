__ESTREE_TEST__:AST:
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
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "start": 30,
            "end": 39
          },
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
                "start": 43,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "inVariableInit",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 61
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 64,
              "end": 65
            },
            "start": 43,
            "end": 65
          },
          "definite": false,
          "start": 30,
          "end": 66
        }
      ],
      "declare": false,
      "start": 26,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
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
                "start": 88,
                "end": 91
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "inNestedFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 108
              },
              "optional": false,
              "computed": false,
              "start": 88,
              "end": 108
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 111,
              "end": 112
            },
            "start": 88,
            "end": 112
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 119
      },
      "expression": false,
      "start": 70,
      "end": 119
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
                "start": 122,
                "end": 125
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bla",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 129
              },
              "optional": false,
              "computed": false,
              "start": 122,
              "end": 129
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
                    "start": 134,
                    "end": 137
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 139,
                    "end": 140
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 134,
                  "end": 140
                }
              ],
              "start": 132,
              "end": 141
            },
            "start": 122,
            "end": 141
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "optional": false,
          "computed": false,
          "start": 121,
          "end": 146
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
                "start": 150,
                "end": 153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 157
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 160,
              "end": 161
            },
            "start": 150,
            "end": 161
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
                "start": 166,
                "end": 169
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 173
              },
              "optional": false,
              "computed": false,
              "start": 166,
              "end": 173
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 177,
              "end": 178
            },
            "start": 166,
            "end": 178
          },
          "start": 149,
          "end": 179
        },
        "start": 121,
        "end": 179
      },
      "directive": null,
      "start": 121,
      "end": 180
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
            "start": 185,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromIf",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 195
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 195
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 198,
          "end": 199
        },
        "start": 185,
        "end": 199
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
                  "start": 207,
                  "end": 210
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 215
                },
                "optional": false,
                "computed": false,
                "start": 207,
                "end": 215
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 218,
                "end": 219
              },
              "start": 207,
              "end": 219
            },
            "directive": null,
            "start": 207,
            "end": 220
          }
        ],
        "start": 201,
        "end": 222
      },
      "alternate": null,
      "start": 182,
      "end": 222
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
            "start": 230,
            "end": 233
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 252
          },
          "optional": false,
          "computed": false,
          "start": 230,
          "end": 252
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 255,
          "end": 256
        },
        "start": 230,
        "end": 256
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
                  "start": 264,
                  "end": 267
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 281
                },
                "optional": false,
                "computed": false,
                "start": 264,
                "end": 281
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 284,
                "end": 285
              },
              "start": 264,
              "end": 285
            },
            "directive": null,
            "start": 264,
            "end": 286
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
                      "start": 301,
                      "end": 304
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 324
                    },
                    "optional": false,
                    "computed": false,
                    "start": 301,
                    "end": 324
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 327,
                    "end": 328
                  },
                  "start": 301,
                  "end": 328
                },
                "directive": null,
                "start": 301,
                "end": 329
              }
            ],
            "start": 291,
            "end": 335
          }
        ],
        "start": 258,
        "end": 337
      },
      "start": 224,
      "end": 337
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
                  "start": 348,
                  "end": 351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 362
                },
                "optional": false,
                "computed": false,
                "start": 348,
                "end": 362
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 365,
                "end": 366
              },
              "start": 348,
              "end": 366
            },
            "directive": null,
            "start": 348,
            "end": 367
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
                      "start": 382,
                      "end": 385
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 402
                    },
                    "optional": false,
                    "computed": false,
                    "start": 382,
                    "end": 402
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 405,
                    "end": 406
                  },
                  "start": 382,
                  "end": 406
                },
                "directive": null,
                "start": 382,
                "end": 407
              }
            ],
            "start": 372,
            "end": 413
          }
        ],
        "start": 342,
        "end": 415
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
            "start": 422,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 441
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 441
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 444,
          "end": 445
        },
        "start": 422,
        "end": 445
      },
      "start": 339,
      "end": 447
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
            "start": 453,
            "end": 456
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 464
          },
          "optional": false,
          "computed": false,
          "start": 453,
          "end": 464
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 467,
          "end": 468
        },
        "start": 453,
        "end": 468
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
              "start": 471,
              "end": 474
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "forCond",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 482
            },
            "optional": false,
            "computed": false,
            "start": 471,
            "end": 482
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 485,
            "end": 486
          },
          "start": 471,
          "end": 486
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 490,
          "end": 491
        },
        "start": 470,
        "end": 491
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
            "start": 493,
            "end": 496
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 504
          },
          "optional": false,
          "computed": false,
          "start": 493,
          "end": 504
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 507,
          "end": 508
        },
        "start": 493,
        "end": 508
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
                  "start": 515,
                  "end": 518
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 530
                },
                "optional": false,
                "computed": false,
                "start": 515,
                "end": 530
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 533,
                "end": 534
              },
              "start": 515,
              "end": 534
            },
            "directive": null,
            "start": 515,
            "end": 535
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
                      "start": 550,
                      "end": 553
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 571
                    },
                    "optional": false,
                    "computed": false,
                    "start": 550,
                    "end": 571
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 574,
                    "end": 575
                  },
                  "start": 550,
                  "end": 575
                },
                "directive": null,
                "start": 550,
                "end": 576
              }
            ],
            "start": 540,
            "end": 582
          }
        ],
        "start": 509,
        "end": 584
      },
      "start": 449,
      "end": 584
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
              "start": 594,
              "end": 595
            },
            "init": null,
            "definite": false,
            "start": 594,
            "end": 595
          }
        ],
        "declare": false,
        "start": 590,
        "end": 595
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
            "start": 600,
            "end": 603
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 609
          },
          "optional": false,
          "computed": false,
          "start": 600,
          "end": 609
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 612,
          "end": 614
        },
        "start": 600,
        "end": 614
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
                  "start": 623,
                  "end": 626
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 640
                },
                "optional": false,
                "computed": false,
                "start": 623,
                "end": 640
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 643,
                "end": 644
              },
              "start": 623,
              "end": 644
            },
            "directive": null,
            "start": 623,
            "end": 645
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
                      "start": 660,
                      "end": 663
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 683
                    },
                    "optional": false,
                    "computed": false,
                    "start": 660,
                    "end": 683
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 686,
                    "end": 687
                  },
                  "start": 660,
                  "end": 687
                },
                "directive": null,
                "start": 660,
                "end": 688
              }
            ],
            "start": 650,
            "end": 694
          }
        ],
        "start": 617,
        "end": 696
      },
      "start": 586,
      "end": 696
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
              "start": 707,
              "end": 708
            },
            "init": null,
            "definite": false,
            "start": 707,
            "end": 708
          }
        ],
        "declare": false,
        "start": 703,
        "end": 708
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
            "start": 713,
            "end": 716
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIn",
            "optional": false,
            "typeAnnotation": null,
            "start": 717,
            "end": 722
          },
          "optional": false,
          "computed": false,
          "start": 713,
          "end": 722
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 725,
          "end": 727
        },
        "start": 713,
        "end": 727
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
                  "start": 736,
                  "end": 739
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 753
                },
                "optional": false,
                "computed": false,
                "start": 736,
                "end": 753
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 756,
                "end": 757
              },
              "start": 736,
              "end": 757
            },
            "directive": null,
            "start": 736,
            "end": 758
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
                      "start": 773,
                      "end": 776
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 796
                    },
                    "optional": false,
                    "computed": false,
                    "start": 773,
                    "end": 796
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 799,
                    "end": 800
                  },
                  "start": 773,
                  "end": 800
                },
                "directive": null,
                "start": 773,
                "end": 801
              }
            ],
            "start": 763,
            "end": 807
          }
        ],
        "start": 730,
        "end": 809
      },
      "start": 699,
      "end": 809
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 809
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 26,
    "end": 29,
    "range": [
      26,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "inVariableInit",
    "start": 47,
    "end": 61,
    "range": [
      47,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78,
    "range": [
      70,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "inNestedFunction",
    "start": 92,
    "end": 108,
    "range": [
      92,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "bla",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 150,
    "end": 153,
    "range": [
      150,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 182,
    "end": 184,
    "range": [
      182,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "fromIf",
    "start": 189,
    "end": 195,
    "range": [
      189,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "inIf",
    "start": 211,
    "end": 215,
    "range": [
      211,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 224,
    "end": 229,
    "range": [
      224,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "fromWhileCondition",
    "start": 234,
    "end": 252,
    "range": [
      234,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 264,
    "end": 267,
    "range": [
      264,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "fromWhileBody",
    "start": 268,
    "end": 281,
    "range": [
      268,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 301,
    "end": 304,
    "range": [
      301,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "fromWhileBodyNested",
    "start": 305,
    "end": 324,
    "range": [
      305,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 339,
    "end": 341,
    "range": [
      339,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 348,
    "end": 351,
    "range": [
      348,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "fromDoBody",
    "start": 352,
    "end": 362,
    "range": [
      352,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 382,
    "end": 385,
    "range": [
      382,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "fromDoBodyNested",
    "start": 386,
    "end": 402,
    "range": [
      386,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 416,
    "end": 421,
    "range": [
      416,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 422,
    "end": 425,
    "range": [
      422,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "fromDoCondition",
    "start": 426,
    "end": 441,
    "range": [
      426,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 449,
    "end": 452,
    "range": [
      449,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "forInit",
    "start": 457,
    "end": 464,
    "range": [
      457,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 471,
    "end": 474,
    "range": [
      471,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "forCond",
    "start": 475,
    "end": 482,
    "range": [
      475,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "forIncr",
    "start": 497,
    "end": 504,
    "range": [
      497,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "fromForBody",
    "start": 519,
    "end": 530,
    "range": [
      519,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "fromForBodyNested",
    "start": 554,
    "end": 571,
    "range": [
      554,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 586,
    "end": 589,
    "range": [
      586,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 590,
    "end": 593,
    "range": [
      590,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 596,
    "end": 598,
    "range": [
      596,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 600,
    "end": 603,
    "range": [
      600,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "forOf",
    "start": 604,
    "end": 609,
    "range": [
      604,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 623,
    "end": 626,
    "range": [
      623,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "fromForOfBody",
    "start": 627,
    "end": 640,
    "range": [
      627,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 660,
    "end": 663,
    "range": [
      660,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "fromForOfBodyNested",
    "start": 664,
    "end": 683,
    "range": [
      664,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 699,
    "end": 702,
    "range": [
      699,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 703,
    "end": 706,
    "range": [
      703,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 709,
    "end": 711,
    "range": [
      709,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 713,
    "end": 716,
    "range": [
      713,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "forIn",
    "start": 717,
    "end": 722,
    "range": [
      717,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 736,
    "end": 739,
    "range": [
      736,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "fromForInBody",
    "start": 740,
    "end": 753,
    "range": [
      740,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 773,
    "end": 776,
    "range": [
      773,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "fromForInBodyNested",
    "start": 777,
    "end": 796,
    "range": [
      777,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  }
]
```
