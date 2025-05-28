__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 680,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 11,
          "end": 17,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 15,
            "end": 17,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 62,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 49,
        "end": 62,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 74,
          "end": 80,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 78,
            "end": 80,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 105,
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 143,
                "end": 149,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 147,
                  "end": 149,
                  "value": 10,
                  "raw": "10"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 158,
              "body": []
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "decorators": [],
        "name": "rest",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 176,
          "end": 190,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 179,
            "end": 183,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
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
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 215,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 229,
        "decorators": [],
        "name": "rest1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 230,
          "end": 235,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 234,
            "end": 235,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 237,
          "end": 244,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 240,
            "end": 244,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 269,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 290,
        "decorators": [],
        "name": "paramDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 291,
          "end": 300,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 291,
            "end": 296,
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 299,
            "end": 300,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 354,
        "decorators": [],
        "name": "objectBindingPattern",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 355,
          "end": 365,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 356,
              "end": 359,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 356,
                "end": 359,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 356,
                "end": 359,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
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
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 418,
        "decorators": [],
        "name": "arrayBindingPattern",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 419,
          "end": 431,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 456,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 478,
        "decorators": [],
        "name": "manyParameter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 479,
          "end": 485,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 483,
            "end": 485,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 487,
          "end": 493,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 491,
            "end": 493,
            "value": 20,
            "raw": "20"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 518,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 539,
        "decorators": [],
        "name": "manyPrologue",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 540,
          "end": 546,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 540,
            "end": 541,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 544,
            "end": 546,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 548,
          "end": 554,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 548,
            "end": 549,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 552,
            "end": 554,
            "value": 20,
            "raw": "20"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 590,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 599,
        "end": 614,
        "decorators": [],
        "name": "invalidPrologue",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 615,
          "end": 621,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 615,
            "end": 616,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 619,
            "end": 621,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 623,
          "end": 629,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 623,
            "end": 624,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 627,
            "end": 629,
            "value": 20,
            "raw": "20"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 654,
                "end": 659,
                "id": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 655,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
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
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
