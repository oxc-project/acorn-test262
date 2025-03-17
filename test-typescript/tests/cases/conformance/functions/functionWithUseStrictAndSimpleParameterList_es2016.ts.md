__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 681,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "a",
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
          "start": 11,
          "end": 17,
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 15,
            "end": 17,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 38,
            "expression": {
              "type": "Literal",
              "start": 25,
              "end": 37,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 62,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 49,
        "end": 62,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 59,
              "end": 61,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "b",
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
          "start": 74,
          "end": 80,
          "left": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 78,
            "end": 80,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 105,
        "name": "container",
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
        "start": 108,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 127,
            "expression": {
              "type": "Literal",
              "start": 114,
              "end": 126,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "FunctionDeclaration",
            "start": 132,
            "end": 158,
            "id": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "name": "f",
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
                "start": 143,
                "end": 149,
                "left": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 147,
                  "end": 149,
                  "value": 10,
                  "raw": "10"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 158,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "name": "rest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 176,
          "end": 190,
          "argument": {
            "type": "Identifier",
            "start": 179,
            "end": 183,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 190,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 185,
              "end": 190,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 185,
                "end": 188
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 211,
            "expression": {
              "type": "Literal",
              "start": 198,
              "end": 210,
              "value": "use strict",
              "raw": "'use strict'"
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 215,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 229,
        "name": "rest1",
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
          "start": 230,
          "end": 235,
          "left": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 234,
            "end": 235,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 237,
          "end": 244,
          "argument": {
            "type": "Identifier",
            "start": 240,
            "end": 244,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 267,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 252,
            "end": 265,
            "expression": {
              "type": "Literal",
              "start": 252,
              "end": 264,
              "value": "use strict",
              "raw": "'use strict'"
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 269,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 290,
        "name": "paramDefault",
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
          "start": 291,
          "end": 300,
          "left": {
            "type": "Identifier",
            "start": 291,
            "end": 296,
            "name": "param",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 299,
            "end": 300,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 302,
        "end": 323,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 321,
            "expression": {
              "type": "Literal",
              "start": 308,
              "end": 320,
              "value": "use strict",
              "raw": "'use strict'"
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 354,
        "name": "objectBindingPattern",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 355,
          "end": 365,
          "properties": [
            {
              "type": "Property",
              "start": 356,
              "end": 359,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 356,
                "end": 359,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 356,
                "end": 359,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 360,
            "end": 365,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 362,
              "end": 365
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 367,
        "end": 388,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 373,
            "end": 386,
            "expression": {
              "type": "Literal",
              "start": 373,
              "end": 385,
              "value": "use strict",
              "raw": "'use strict'"
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 418,
        "name": "arrayBindingPattern",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 419,
          "end": 431,
          "elements": [
            {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 424,
            "end": 431,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 426,
              "end": 431,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 426,
                "end": 429
              }
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 433,
        "end": 454,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 439,
            "end": 452,
            "expression": {
              "type": "Literal",
              "start": 439,
              "end": 451,
              "value": "use strict",
              "raw": "'use strict'"
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 456,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 478,
        "name": "manyParameter",
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
          "start": 479,
          "end": 485,
          "left": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 483,
            "end": 485,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 487,
          "end": 493,
          "left": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 491,
            "end": 493,
            "value": 20,
            "raw": "20"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 495,
        "end": 516,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 501,
            "end": 514,
            "expression": {
              "type": "Literal",
              "start": 501,
              "end": 513,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 518,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 539,
        "name": "manyPrologue",
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
          "start": 540,
          "end": 546,
          "left": {
            "type": "Identifier",
            "start": 540,
            "end": 541,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 544,
            "end": 546,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 548,
          "end": 554,
          "left": {
            "type": "Identifier",
            "start": 548,
            "end": 549,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 552,
            "end": 554,
            "value": 20,
            "raw": "20"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 556,
        "end": 588,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 562,
            "end": 568,
            "expression": {
              "type": "Literal",
              "start": 562,
              "end": 567,
              "value": "foo",
              "raw": "\"foo\""
            },
            "directive": "foo"
          },
          {
            "type": "ExpressionStatement",
            "start": 573,
            "end": 586,
            "expression": {
              "type": "Literal",
              "start": 573,
              "end": 585,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 590,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 599,
        "end": 614,
        "name": "invalidPrologue",
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
          "start": 615,
          "end": 621,
          "left": {
            "type": "Identifier",
            "start": 615,
            "end": 616,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 619,
            "end": 621,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 623,
          "end": 629,
          "left": {
            "type": "Identifier",
            "start": 623,
            "end": 624,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 627,
            "end": 629,
            "value": 20,
            "raw": "20"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 631,
        "end": 680,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 637,
            "end": 643,
            "expression": {
              "type": "Literal",
              "start": 637,
              "end": 642,
              "value": "foo",
              "raw": "\"foo\""
            },
            "directive": "foo"
          },
          {
            "type": "VariableDeclaration",
            "start": 648,
            "end": 660,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 654,
                "end": 659,
                "id": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 655,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 658,
                  "end": 659,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 665,
            "end": 678,
            "expression": {
              "type": "Literal",
              "start": 665,
              "end": 677,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
