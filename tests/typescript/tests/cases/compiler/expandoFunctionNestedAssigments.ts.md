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
