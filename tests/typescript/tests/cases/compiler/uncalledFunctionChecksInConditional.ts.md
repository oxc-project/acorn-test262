__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 26,
          "end": 33
        },
        "start": 24,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 61,
          "end": 68
        },
        "start": 59,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isUndefinedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 107,
                        "end": 114
                      },
                      "start": 104,
                      "end": 114
                    },
                    "start": 101,
                    "end": 114
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 118,
                    "end": 127
                  }
                ],
                "start": 100,
                "end": 127
              },
              "start": 98,
              "end": 127
            },
            "start": 84,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 127
        }
      ],
      "declare": true,
      "start": 70,
      "end": 128
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 139
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 141,
        "end": 166
      },
      "alternate": null,
      "start": 130,
      "end": 166
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 177
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 186
        },
        "start": 172,
        "end": 186
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 188,
        "end": 220
      },
      "alternate": null,
      "start": 168,
      "end": 220
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 231
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 240
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 235,
          "end": 242
        },
        "start": 226,
        "end": 242
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 244,
        "end": 269
      },
      "alternate": null,
      "start": 222,
      "end": 269
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 289
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 298
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 293,
          "end": 300
        },
        "start": 275,
        "end": 300
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 302,
        "end": 321
      },
      "alternate": null,
      "start": 271,
      "end": 321
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 332
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 341
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 336,
          "end": 343
        },
        "start": 327,
        "end": 343
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 345,
        "end": 364
      },
      "alternate": null,
      "start": 323,
      "end": 364
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 383,
                "end": 390
              },
              "start": 381,
              "end": 390
            },
            "start": 380,
            "end": 390
          },
          "init": null,
          "definite": false,
          "start": 380,
          "end": 390
        }
      ],
      "declare": true,
      "start": 366,
      "end": 391
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ux",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 410,
                    "end": 417
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 420,
                    "end": 429
                  }
                ],
                "start": 410,
                "end": 429
              },
              "start": 408,
              "end": 429
            },
            "start": 406,
            "end": 429
          },
          "init": null,
          "definite": false,
          "start": 406,
          "end": 429
        }
      ],
      "declare": true,
      "start": 392,
      "end": 430
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 448,
                "end": 455
              },
              "start": 446,
              "end": 455
            },
            "start": 445,
            "end": 455
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 455
        }
      ],
      "declare": true,
      "start": 431,
      "end": 456
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "uy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 475,
                    "end": 482
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 485,
                    "end": 494
                  }
                ],
                "start": 475,
                "end": 494
              },
              "start": 473,
              "end": 494
            },
            "start": 471,
            "end": 494
          },
          "init": null,
          "definite": false,
          "start": 471,
          "end": 494
        }
      ],
      "declare": true,
      "start": 457,
      "end": 495
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 514
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 518,
          "end": 525
        },
        "start": 516,
        "end": 525
      },
      "body": null,
      "expression": false,
      "start": 496,
      "end": 526
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "uz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 552,
                        "end": 559
                      },
                      "start": 549,
                      "end": 559
                    },
                    "start": 546,
                    "end": 559
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 563,
                    "end": 572
                  }
                ],
                "start": 545,
                "end": 572
              },
              "start": 543,
              "end": 572
            },
            "start": 541,
            "end": 572
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 572
        }
      ],
      "declare": true,
      "start": 527,
      "end": 573
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 580
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 584,
          "end": 589
        },
        "start": 579,
        "end": 589
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 591,
        "end": 616
      },
      "alternate": null,
      "start": 575,
      "end": 616
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 622,
          "end": 627
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 632
        },
        "start": 622,
        "end": 632
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 634,
        "end": 659
      },
      "alternate": null,
      "start": 618,
      "end": 659
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 671
            },
            "start": 665,
            "end": 671
          },
          "operator": "||",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 675,
            "end": 678
          },
          "start": 665,
          "end": 678
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 687
        },
        "start": 665,
        "end": 687
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 689,
        "end": 714
      },
      "alternate": null,
      "start": 661,
      "end": 714
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 721
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "uy",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 727
            },
            "start": 720,
            "end": 727
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 732
          },
          "start": 720,
          "end": 732
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 736,
          "end": 750
        },
        "start": 720,
        "end": 750
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 752,
        "end": 773
      },
      "alternate": null,
      "start": 716,
      "end": 773
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ux",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 781
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 785,
              "end": 786
            },
            "start": 779,
            "end": 786
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "uz",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 792
          },
          "start": 779,
          "end": 792
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 796,
          "end": 801
        },
        "start": 779,
        "end": 801
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 803,
        "end": 828
      },
      "alternate": null,
      "start": 775,
      "end": 828
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 834,
          "end": 835
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 840
        },
        "start": 834,
        "end": 840
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 865
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 864,
              "end": 867
            },
            "directive": null,
            "start": 864,
            "end": 868
          }
        ],
        "start": 842,
        "end": 870
      },
      "alternate": null,
      "start": 830,
      "end": 870
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 870
}
```
