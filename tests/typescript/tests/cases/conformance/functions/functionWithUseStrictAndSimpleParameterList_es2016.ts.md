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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 15,
            "end": 17
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 17
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 25,
              "end": 37
            },
            "directive": "use strict",
            "start": 25,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "expression": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 56
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 59,
              "end": 61
            },
            "definite": false,
            "start": 53,
            "end": 61
          }
        ],
        "declare": false,
        "start": 49,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 78,
            "end": 80
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "expression": false,
      "start": 63,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 114,
              "end": 126
            },
            "directive": "use strict",
            "start": 114,
            "end": 127
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 147,
                  "end": 149
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 149
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 151,
              "end": 158
            },
            "expression": false,
            "start": 132,
            "end": 158
          }
        ],
        "start": 108,
        "end": 160
      },
      "expression": false,
      "start": 87,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rest",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 183
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 185,
                "end": 188
              },
              "start": 185,
              "end": 190
            },
            "start": 183,
            "end": 190
          },
          "value": null,
          "start": 176,
          "end": 190
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 198,
              "end": 210
            },
            "directive": "use strict",
            "start": 198,
            "end": 211
          }
        ],
        "start": 192,
        "end": 213
      },
      "expression": false,
      "start": 162,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rest1",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 229
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 234,
            "end": 235
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 235
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 244
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 237,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 252,
              "end": 264
            },
            "directive": "use strict",
            "start": 252,
            "end": 265
          }
        ],
        "start": 246,
        "end": 267
      },
      "expression": false,
      "start": 215,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "paramDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 290
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
            "name": "param",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 296
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 299,
            "end": 300
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 300
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 308,
              "end": 320
            },
            "directive": "use strict",
            "start": 308,
            "end": 321
          }
        ],
        "start": 302,
        "end": 323
      },
      "expression": false,
      "start": 269,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectBindingPattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 356,
                "end": 359
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 359
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 356,
              "end": 359
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 362,
              "end": 365
            },
            "start": 360,
            "end": 365
          },
          "start": 355,
          "end": 365
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 373,
              "end": 385
            },
            "directive": "use strict",
            "start": 373,
            "end": 386
          }
        ],
        "start": 367,
        "end": 388
      },
      "expression": false,
      "start": 325,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayBindingPattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 418
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 423
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 426,
                "end": 429
              },
              "start": 426,
              "end": 431
            },
            "start": 424,
            "end": 431
          },
          "start": 419,
          "end": 431
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "'use strict'",
              "start": 439,
              "end": 451
            },
            "directive": "use strict",
            "start": 439,
            "end": 452
          }
        ],
        "start": 433,
        "end": 454
      },
      "expression": false,
      "start": 390,
      "end": 454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "manyParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 478
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 480
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 483,
            "end": 485
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 485
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 488
          },
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 491,
            "end": 493
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 493
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 501,
              "end": 513
            },
            "directive": "use strict",
            "start": 501,
            "end": 514
          }
        ],
        "start": 495,
        "end": 516
      },
      "expression": false,
      "start": 456,
      "end": 516
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "manyPrologue",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 539
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 541
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 544,
            "end": 546
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 540,
          "end": 546
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 549
          },
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 552,
            "end": 554
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 554
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 562,
              "end": 567
            },
            "directive": "foo",
            "start": 562,
            "end": 568
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 573,
              "end": 585
            },
            "directive": "use strict",
            "start": 573,
            "end": 586
          }
        ],
        "start": 556,
        "end": 588
      },
      "expression": false,
      "start": 518,
      "end": 588
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidPrologue",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 614
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 616
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 619,
            "end": 621
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 621
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 624
          },
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 627,
            "end": 629
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 629
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 637,
              "end": 642
            },
            "directive": "foo",
            "start": 637,
            "end": 643
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 655
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 658,
                  "end": 659
                },
                "definite": false,
                "start": 654,
                "end": 659
              }
            ],
            "declare": false,
            "start": 648,
            "end": 660
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 665,
              "end": 677
            },
            "directive": null,
            "start": 665,
            "end": 678
          }
        ],
        "start": 631,
        "end": 680
      },
      "expression": false,
      "start": 590,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
