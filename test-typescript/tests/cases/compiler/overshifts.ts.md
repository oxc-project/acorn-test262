overshifts.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1872,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 7,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 6,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 0,
          "end": 1,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 5,
          "end": 6,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 22,
      "expression": {
        "type": "BinaryExpression",
        "start": 14,
        "end": 21,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 14,
          "end": 15,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 21,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 45,
      "expression": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 44,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 36,
          "end": 37,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 41,
          "end": 44,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 56,
      "expression": {
        "type": "BinaryExpression",
        "start": 46,
        "end": 55,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 46,
          "end": 47,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 55,
          "raw": "1024",
          "value": 1024
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 65,
      "expression": {
        "type": "BinaryExpression",
        "start": 57,
        "end": 64,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 57,
          "end": 58,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "UnaryExpression",
          "start": 62,
          "end": 64,
          "argument": {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 85,
      "expression": {
        "type": "BinaryExpression",
        "start": 76,
        "end": 84,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 76,
          "end": 77,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "UnaryExpression",
          "start": 81,
          "end": 84,
          "argument": {
            "type": "Literal",
            "start": 82,
            "end": 84,
            "raw": "32",
            "value": 32
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 119,
      "expression": {
        "type": "BinaryExpression",
        "start": 109,
        "end": 118,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 109,
          "end": 110,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "UnaryExpression",
          "start": 114,
          "end": 118,
          "argument": {
            "type": "Literal",
            "start": 115,
            "end": 118,
            "raw": "123",
            "value": 123
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 131,
      "expression": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 130,
        "operator": "<<",
        "left": {
          "type": "Literal",
          "start": 120,
          "end": 121,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "UnaryExpression",
          "start": 125,
          "end": 130,
          "argument": {
            "type": "Literal",
            "start": 126,
            "end": 130,
            "raw": "1024",
            "value": 1024
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 152,
      "expression": {
        "type": "BinaryExpression",
        "start": 133,
        "end": 151,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 133,
          "end": 146,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 150,
          "end": 151,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 179,
      "expression": {
        "type": "BinaryExpression",
        "start": 159,
        "end": 178,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 159,
          "end": 172,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 176,
          "end": 178,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 214,
      "expression": {
        "type": "BinaryExpression",
        "start": 193,
        "end": 213,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 193,
          "end": 206,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 210,
          "end": 213,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 237,
      "expression": {
        "type": "BinaryExpression",
        "start": 215,
        "end": 236,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 215,
          "end": 228,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 232,
          "end": 236,
          "raw": "1024",
          "value": 1024
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 258,
      "expression": {
        "type": "BinaryExpression",
        "start": 238,
        "end": 257,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 238,
          "end": 251,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 255,
          "end": 257,
          "argument": {
            "type": "Literal",
            "start": 256,
            "end": 257,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 290,
      "expression": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 289,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 269,
          "end": 282,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 286,
          "end": 289,
          "argument": {
            "type": "Literal",
            "start": 287,
            "end": 289,
            "raw": "32",
            "value": 32
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 336,
      "expression": {
        "type": "BinaryExpression",
        "start": 314,
        "end": 335,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 314,
          "end": 327,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 331,
          "end": 335,
          "argument": {
            "type": "Literal",
            "start": 332,
            "end": 335,
            "raw": "123",
            "value": 123
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 360,
      "expression": {
        "type": "BinaryExpression",
        "start": 337,
        "end": 359,
        "operator": ">>",
        "left": {
          "type": "Literal",
          "start": 337,
          "end": 350,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 354,
          "end": 359,
          "argument": {
            "type": "Literal",
            "start": 355,
            "end": 359,
            "raw": "1024",
            "value": 1024
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 382,
      "expression": {
        "type": "BinaryExpression",
        "start": 362,
        "end": 381,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 362,
          "end": 375,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 380,
          "end": 381,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 389,
      "end": 410,
      "expression": {
        "type": "BinaryExpression",
        "start": 389,
        "end": 409,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 389,
          "end": 402,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 407,
          "end": 409,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 446,
      "expression": {
        "type": "BinaryExpression",
        "start": 424,
        "end": 445,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 424,
          "end": 437,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 442,
          "end": 445,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 470,
      "expression": {
        "type": "BinaryExpression",
        "start": 447,
        "end": 469,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 447,
          "end": 460,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "Literal",
          "start": 465,
          "end": 469,
          "raw": "1024",
          "value": 1024
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 471,
      "end": 492,
      "expression": {
        "type": "BinaryExpression",
        "start": 471,
        "end": 491,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 471,
          "end": 484,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 489,
          "end": 491,
          "argument": {
            "type": "Literal",
            "start": 490,
            "end": 491,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 503,
      "end": 525,
      "expression": {
        "type": "BinaryExpression",
        "start": 503,
        "end": 524,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 503,
          "end": 516,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 521,
          "end": 524,
          "argument": {
            "type": "Literal",
            "start": 522,
            "end": 524,
            "raw": "32",
            "value": 32
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 549,
      "end": 572,
      "expression": {
        "type": "BinaryExpression",
        "start": 549,
        "end": 571,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 549,
          "end": 562,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 567,
          "end": 571,
          "argument": {
            "type": "Literal",
            "start": 568,
            "end": 571,
            "raw": "123",
            "value": 123
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 573,
      "end": 597,
      "expression": {
        "type": "BinaryExpression",
        "start": 573,
        "end": 596,
        "operator": ">>>",
        "left": {
          "type": "Literal",
          "start": 573,
          "end": 586,
          "raw": "0xFF_FF_FF_FF",
          "value": 4294967295
        },
        "right": {
          "type": "UnaryExpression",
          "start": 591,
          "end": 596,
          "argument": {
            "type": "Literal",
            "start": 592,
            "end": 596,
            "raw": "1024",
            "value": 1024
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 603,
          "end": 608,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 603,
            "end": 604,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 607,
            "end": 608,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 618,
      "expression": {
        "type": "AssignmentExpression",
        "start": 610,
        "end": 617,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 610,
          "end": 611,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 616,
          "end": 617,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 625,
      "end": 634,
      "expression": {
        "type": "AssignmentExpression",
        "start": 625,
        "end": 633,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 625,
          "end": 626,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 631,
          "end": 633,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 648,
      "end": 658,
      "expression": {
        "type": "AssignmentExpression",
        "start": 648,
        "end": 657,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 648,
          "end": 649,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 654,
          "end": 657,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 670,
      "expression": {
        "type": "AssignmentExpression",
        "start": 659,
        "end": 669,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 659,
          "end": 660,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 665,
          "end": 669,
          "raw": "1024",
          "value": 1024
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 671,
      "end": 680,
      "expression": {
        "type": "AssignmentExpression",
        "start": 671,
        "end": 679,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 671,
          "end": 672,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 677,
          "end": 679,
          "argument": {
            "type": "Literal",
            "start": 678,
            "end": 679,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 691,
      "end": 701,
      "expression": {
        "type": "AssignmentExpression",
        "start": 691,
        "end": 700,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 691,
          "end": 692,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 697,
          "end": 700,
          "argument": {
            "type": "Literal",
            "start": 698,
            "end": 700,
            "raw": "32",
            "value": 32
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 736,
      "expression": {
        "type": "AssignmentExpression",
        "start": 725,
        "end": 735,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 725,
          "end": 726,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 731,
          "end": 735,
          "argument": {
            "type": "Literal",
            "start": 732,
            "end": 735,
            "raw": "123",
            "value": 123
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 737,
      "end": 749,
      "expression": {
        "type": "AssignmentExpression",
        "start": 737,
        "end": 748,
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "start": 737,
          "end": 738,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 743,
          "end": 748,
          "argument": {
            "type": "Literal",
            "start": 744,
            "end": 748,
            "raw": "1024",
            "value": 1024
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 751,
      "end": 759,
      "expression": {
        "type": "AssignmentExpression",
        "start": 751,
        "end": 758,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 751,
          "end": 752,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 757,
          "end": 758,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 766,
      "end": 775,
      "expression": {
        "type": "AssignmentExpression",
        "start": 766,
        "end": 774,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 766,
          "end": 767,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 772,
          "end": 774,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 789,
      "end": 799,
      "expression": {
        "type": "AssignmentExpression",
        "start": 789,
        "end": 798,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 789,
          "end": 790,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 795,
          "end": 798,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 800,
      "end": 811,
      "expression": {
        "type": "AssignmentExpression",
        "start": 800,
        "end": 810,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 800,
          "end": 801,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 806,
          "end": 810,
          "raw": "1024",
          "value": 1024
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 812,
      "end": 821,
      "expression": {
        "type": "AssignmentExpression",
        "start": 812,
        "end": 820,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 812,
          "end": 813,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 818,
          "end": 820,
          "argument": {
            "type": "Literal",
            "start": 819,
            "end": 820,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 832,
      "end": 842,
      "expression": {
        "type": "AssignmentExpression",
        "start": 832,
        "end": 841,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 832,
          "end": 833,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 838,
          "end": 841,
          "argument": {
            "type": "Literal",
            "start": 839,
            "end": 841,
            "raw": "32",
            "value": 32
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 866,
      "end": 877,
      "expression": {
        "type": "AssignmentExpression",
        "start": 866,
        "end": 876,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 866,
          "end": 867,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 872,
          "end": 876,
          "argument": {
            "type": "Literal",
            "start": 873,
            "end": 876,
            "raw": "123",
            "value": 123
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 890,
      "expression": {
        "type": "AssignmentExpression",
        "start": 878,
        "end": 889,
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "start": 878,
          "end": 879,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 884,
          "end": 889,
          "argument": {
            "type": "Literal",
            "start": 885,
            "end": 889,
            "raw": "1024",
            "value": 1024
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 892,
      "end": 901,
      "expression": {
        "type": "AssignmentExpression",
        "start": 892,
        "end": 900,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 892,
          "end": 893,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 899,
          "end": 900,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 908,
      "end": 918,
      "expression": {
        "type": "AssignmentExpression",
        "start": 908,
        "end": 917,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 908,
          "end": 909,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 915,
          "end": 917,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 932,
      "end": 943,
      "expression": {
        "type": "AssignmentExpression",
        "start": 932,
        "end": 942,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 932,
          "end": 933,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 939,
          "end": 942,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 944,
      "end": 956,
      "expression": {
        "type": "AssignmentExpression",
        "start": 944,
        "end": 955,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 944,
          "end": 945,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 951,
          "end": 955,
          "raw": "1024",
          "value": 1024
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 957,
      "end": 967,
      "expression": {
        "type": "AssignmentExpression",
        "start": 957,
        "end": 966,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 957,
          "end": 958,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 964,
          "end": 966,
          "argument": {
            "type": "Literal",
            "start": 965,
            "end": 966,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 978,
      "end": 989,
      "expression": {
        "type": "AssignmentExpression",
        "start": 978,
        "end": 988,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 978,
          "end": 979,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 985,
          "end": 988,
          "argument": {
            "type": "Literal",
            "start": 986,
            "end": 988,
            "raw": "32",
            "value": 32
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1013,
      "end": 1025,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1013,
        "end": 1024,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 1013,
          "end": 1014,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 1020,
          "end": 1024,
          "argument": {
            "type": "Literal",
            "start": 1021,
            "end": 1024,
            "raw": "123",
            "value": 123
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1026,
      "end": 1039,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1026,
        "end": 1038,
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "start": 1026,
          "end": 1027,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 1033,
          "end": 1038,
          "argument": {
            "type": "Literal",
            "start": 1034,
            "end": 1038,
            "raw": "1024",
            "value": 1024
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1041,
      "end": 1249,
      "body": {
        "type": "TSEnumBody",
        "start": 1050,
        "end": 1249,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1056,
            "end": 1066,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1056,
              "end": 1057,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1060,
              "end": 1066,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1060,
                "end": 1061,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 1065,
                "end": 1066,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1078,
            "end": 1089,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1078,
              "end": 1079,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1082,
              "end": 1089,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1082,
                "end": 1083,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 1087,
                "end": 1089,
                "raw": "32",
                "value": 32
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1108,
            "end": 1120,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1108,
              "end": 1109,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1112,
              "end": 1120,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1112,
                "end": 1113,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 1117,
                "end": 1120,
                "raw": "123",
                "value": 123
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1126,
            "end": 1139,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1126,
              "end": 1127,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1130,
              "end": 1139,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1130,
                "end": 1131,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 1135,
                "end": 1139,
                "raw": "1024",
                "value": 1024
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1145,
            "end": 1156,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1145,
              "end": 1146,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1149,
              "end": 1156,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1149,
                "end": 1150,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1154,
                "end": 1156,
                "argument": {
                  "type": "Literal",
                  "start": 1155,
                  "end": 1156,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1172,
            "end": 1184,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1172,
              "end": 1173,
              "decorators": [],
              "name": "F",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1176,
              "end": 1184,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1176,
                "end": 1177,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1181,
                "end": 1184,
                "argument": {
                  "type": "Literal",
                  "start": 1182,
                  "end": 1184,
                  "raw": "32",
                  "value": 32
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1213,
            "end": 1226,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1213,
              "end": 1214,
              "decorators": [],
              "name": "G",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1217,
              "end": 1226,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1217,
                "end": 1218,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1222,
                "end": 1226,
                "argument": {
                  "type": "Literal",
                  "start": 1223,
                  "end": 1226,
                  "raw": "123",
                  "value": 123
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1232,
            "end": 1246,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1232,
              "end": 1233,
              "decorators": [],
              "name": "H",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1236,
              "end": 1246,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 1236,
                "end": 1237,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1241,
                "end": 1246,
                "argument": {
                  "type": "Literal",
                  "start": 1242,
                  "end": 1246,
                  "raw": "1024",
                  "value": 1024
                },
                "operator": "-",
                "prefix": true
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1049,
        "decorators": [],
        "name": "One",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1251,
      "end": 1555,
      "body": {
        "type": "TSEnumBody",
        "start": 1260,
        "end": 1555,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1266,
            "end": 1288,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1266,
              "end": 1267,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1270,
              "end": 1288,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1270,
                "end": 1283,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1287,
                "end": 1288,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1300,
            "end": 1323,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1300,
              "end": 1301,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1304,
              "end": 1323,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1304,
                "end": 1317,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1321,
                "end": 1323,
                "raw": "32",
                "value": 32
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1342,
            "end": 1366,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1342,
              "end": 1343,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1346,
              "end": 1366,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1346,
                "end": 1359,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1363,
                "end": 1366,
                "raw": "123",
                "value": 123
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1372,
            "end": 1397,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1372,
              "end": 1373,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1376,
              "end": 1397,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1376,
                "end": 1389,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1393,
                "end": 1397,
                "raw": "1024",
                "value": 1024
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1403,
            "end": 1426,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1403,
              "end": 1404,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1407,
              "end": 1426,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1407,
                "end": 1420,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1424,
                "end": 1426,
                "argument": {
                  "type": "Literal",
                  "start": 1425,
                  "end": 1426,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1442,
            "end": 1466,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1442,
              "end": 1443,
              "decorators": [],
              "name": "F",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1446,
              "end": 1466,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1446,
                "end": 1459,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1463,
                "end": 1466,
                "argument": {
                  "type": "Literal",
                  "start": 1464,
                  "end": 1466,
                  "raw": "32",
                  "value": 32
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1495,
            "end": 1520,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1495,
              "end": 1496,
              "decorators": [],
              "name": "G",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1499,
              "end": 1520,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1499,
                "end": 1512,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1516,
                "end": 1520,
                "argument": {
                  "type": "Literal",
                  "start": 1517,
                  "end": 1520,
                  "raw": "123",
                  "value": 123
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1526,
            "end": 1552,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1526,
              "end": 1527,
              "decorators": [],
              "name": "H",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1530,
              "end": 1552,
              "operator": ">>",
              "left": {
                "type": "Literal",
                "start": 1530,
                "end": 1543,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1547,
                "end": 1552,
                "argument": {
                  "type": "Literal",
                  "start": 1548,
                  "end": 1552,
                  "raw": "1024",
                  "value": 1024
                },
                "operator": "-",
                "prefix": true
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1259,
        "decorators": [],
        "name": "Two",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1557,
      "end": 1871,
      "body": {
        "type": "TSEnumBody",
        "start": 1568,
        "end": 1871,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1574,
            "end": 1597,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1574,
              "end": 1575,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1578,
              "end": 1597,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1578,
                "end": 1591,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1596,
                "end": 1597,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1609,
            "end": 1633,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1609,
              "end": 1610,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1613,
              "end": 1633,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1613,
                "end": 1626,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1631,
                "end": 1633,
                "raw": "32",
                "value": 32
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1652,
            "end": 1677,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1652,
              "end": 1653,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1656,
              "end": 1677,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1656,
                "end": 1669,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1674,
                "end": 1677,
                "raw": "123",
                "value": 123
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1683,
            "end": 1709,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1683,
              "end": 1684,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1687,
              "end": 1709,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1687,
                "end": 1700,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "Literal",
                "start": 1705,
                "end": 1709,
                "raw": "1024",
                "value": 1024
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1715,
            "end": 1739,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1715,
              "end": 1716,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1719,
              "end": 1739,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1719,
                "end": 1732,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1737,
                "end": 1739,
                "argument": {
                  "type": "Literal",
                  "start": 1738,
                  "end": 1739,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1755,
            "end": 1780,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1755,
              "end": 1756,
              "decorators": [],
              "name": "F",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1759,
              "end": 1780,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1759,
                "end": 1772,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1777,
                "end": 1780,
                "argument": {
                  "type": "Literal",
                  "start": 1778,
                  "end": 1780,
                  "raw": "32",
                  "value": 32
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1809,
            "end": 1835,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1809,
              "end": 1810,
              "decorators": [],
              "name": "G",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1813,
              "end": 1835,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1813,
                "end": 1826,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1831,
                "end": 1835,
                "argument": {
                  "type": "Literal",
                  "start": 1832,
                  "end": 1835,
                  "raw": "123",
                  "value": 123
                },
                "operator": "-",
                "prefix": true
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1841,
            "end": 1868,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1841,
              "end": 1842,
              "decorators": [],
              "name": "H",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 1845,
              "end": 1868,
              "operator": ">>>",
              "left": {
                "type": "Literal",
                "start": 1845,
                "end": 1858,
                "raw": "0xFF_FF_FF_FF",
                "value": 4294967295
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1863,
                "end": 1868,
                "argument": {
                  "type": "Literal",
                  "start": 1864,
                  "end": 1868,
                  "raw": "1024",
                  "value": 1024
                },
                "operator": "-",
                "prefix": true
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1567,
        "decorators": [],
        "name": "Three",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
